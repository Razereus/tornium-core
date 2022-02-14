# Copyright (C) tiksan - All Rights Reserved
# Unauthorized copying of this file, via any medium is strictly prohibited
# Proprietary and confidential
# Written by tiksan <webmaster@deek.sh>

import random

from flask_login import current_user

from models.factionmodel import FactionModel
from models.server import Server
from models.user import User
import tasks
import utils


class Faction:
    def __init__(self, tid, key=""):
        """
        Retrieves the faction from the database.

        :param tid: Torn faction ID
        :param key: Torn API Key to be utilized (uses current user's key if not passed)
        """

        faction = utils.first(FactionModel.objects(tid=tid))
        if faction is None:
            faction_data = tasks.tornget(f'faction/{tid}?selections=basic', key if key != "" else current_user.key)
            now = utils.now()

            faction = FactionModel(
                tid=tid,
                name=faction_data['name'],
                respect=faction_data['respect'],
                capacity=faction_data['capacity'],
                leader=faction_data['leader'],
                coleader=faction_data['co-leader'],
                keys=[],
                last_members=now,
                guild=0,
                config={'vault': 0, 'stats': 1},
                vaultconfig={'banking': 0, 'banker': 0, 'withdrawal': 0},
                statconfig={'global': 0},
                chainconfig={'od': 0, 'odchannel': 0},
                chainod={},
                groups=[],
                pro=False,
                pro_expiration=0
            )

            try:
                tasks.tornget(f'faction/{tid}?selections=positions', key if key != "" else current_user.key)
                faction.keys.append(key if key != "" else current_user.key)
            except:
                pass

            faction.save()

        self.tid = tid
        self.name = faction.name
        self.respect = faction.respect
        self.capacity = faction.capacity
        self.leader = faction.leader
        self.coleader = faction.coleader

        self.keys = faction.keys

        self.last_members = faction.last_members

        self.guild = faction.guild
        self.config = faction.config
        self.vault_config = faction.vaultconfig

        self.stat_config = faction.statconfig

        self.chain_config = faction.chainconfig
        self.chain_od = faction.chainod

        self.groups = faction.groups

        self.pro = faction.pro
        self.pro_expiration = faction.pro_expiration

    def rand_key(self):
        return random.choice(self.keys)

    def update_members(self, force=False, key=None):
        now = utils.now()

        if not force and (now - self.last_members) < 1800:
            utils.get_logger().info(f'Update members skipped since last update was at {self.last_members} and update '
                                    f'was not forced.')
            return

        if key is None:
            key = random.choice(self.keys)

        factionmembers = tasks.tornget('faction/?selections=', key)

        for memberid, member in factionmembers['members'].values():
            user = User(memberid)

            if key is None:
                key = random.choice(self.keys)
            user.refresh(key, force)

    def get_config(self):
        if self.guild == 0:
            return {'vault': 0, 'stats': 1}

        server = Server(self.guild)
        if self.tid not in server.factions:
            raise Exception  # TODO: Make exception more descriptive

        return self.config