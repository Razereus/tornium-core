# Copyright (C) 2021-2023 tiksan
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published
# by the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.

from mongoengine import DynamicDocument, IntField


class PersonalStatModel(DynamicDocument):
    #### pstat_id ####
    # tid = bin(tid << 8)
    # timestamp = bin(timestamp)
    # pstat_id = int(tid, 2) + int(timestamp, 2)
    ##################

    pstat_id = IntField(primary_key=True)
    tid = IntField(required=True)
    timestamp = IntField(required=True)

    # Public Personal Stats
    useractivity = IntField()
    activestreak = IntField()
    bestactivestreak = IntField()
    itemsbought = IntField()
    pointsbought = IntField()
    itemsboughtabroad = IntField()
    weaponsbought = IntField()
    itemssent = IntField()
    auctionswon = IntField()
    auctionsells = IntField()
    attackswon = IntField()
    attackslost = IntField()
    attacksdraw = IntField()
    bestkillstreak = IntField()
    moneymugged = IntField()
    attacksstealthed = IntField()
    attackhits = IntField()
    attackmisses = IntField()
    attackdamage = IntField()
    attackcriticalhits = IntField()
    respectforfaction = IntField()
    onehitkills = IntField()
    defendswon = IntField()
    defendslost = IntField()
    defendsstalemated = IntField()
    bestdamage = IntField()
    roundsfired = IntField()
    yourunaway = IntField()
    theyrunaway = IntField()
    highestbeaten = IntField()
    peoplebusted = IntField()
    failedbusts = IntField()
    peoplebought = IntField()
    peopleboughtspent = IntField()
    virusescoded = IntField()
    cityfinds = IntField()
    traveltimes = IntField()
    bountiesplaced = IntField()
    bountiesreceived = IntField()
    bountiescollected = IntField()
    totalbountyreward = IntField()
    revives = IntField()
    revivesreceived = IntField()
    medicalitemsused = IntField()
    statenhancersused = IntField()
    trainsreceived = IntField()
    totalbountyspent = IntField()
    drugsused = IntField()
    overdosed = IntField()
    meritsbought = IntField()
    personalsplaced = IntField()
    classifiedadsplaced = IntField()
    mailssent = IntField()
    friendmailssent = IntField()
    factionmailssent = IntField()
    companymailssent = IntField()
    spousemailssent = IntField()
    largestmug = IntField()
    cantaken = IntField()
    exttaken = IntField()
    kettaken = IntField()
    lsdtaken = IntField()
    opitaken = IntField()
    shrtaken = IntField()
    spetaken = IntField()
    pcptaken = IntField()
    xantaken = IntField()
    victaken = IntField()
    chahits = IntField()
    heahits = IntField()
    axehits = IntField()
    grehits = IntField()
    machits = IntField()
    pishits = IntField()
    rifhits = IntField()
    shohits = IntField()
    smghits = IntField()
    piehits = IntField()
    slahits = IntField()
    argtravel = IntField()
    mextravel = IntField()
    dubtravel = IntField()
    hawtravel = IntField()
    japtravel = IntField()
    lontravel = IntField()
    soutravel = IntField()
    switravel = IntField()
    chitravel = IntField()
    cantravel = IntField()
    dumpfinds = IntField()
    dumpsearches = IntField()
    itemsdumped = IntField()
    daysbeendonator = IntField()
    caytravel = IntField()
    jailed = IntField()
    hospital = IntField()
    attacksassisted = IntField()
    bloodwithdrawn = IntField()
    networth = IntField()
    missionscompleted = IntField()
    contractscompleted = IntField()
    dukecontractscompleted = IntField()
    missioncreditsearned = IntField()
    consumablesused = IntField()
    candyused = IntField()
    alcholused = IntField()
    energydrinkused = IntField()
    nerverefills = IntField()
    unarmoredwon = IntField()
    h2hhits = IntField()
    organizedcrimes = IntField()
    territorytime = IntField()
    territoryjoins = IntField()
    arrestsmade = IntField()
    tokenrefills = IntField()
    booksread = IntField()
    traveltime = IntField()
    boostersused = IntField()
    rehabs = IntField()
    rehabcost = IntField()
    awards = IntField()
    receivedbountyvalue = IntField()
    racingskill = IntField()
    raceswon = IntField()
    racesentered = IntField()
    racingpointsearned = IntField()
    specialammoused = IntField()
    cityitemsbought = IntField()
    hollowammoused = IntField()
    tracerammoused = IntField()
    piercingammoused = IntField()
    incendiaryammoused = IntField()
    attackswonabroad = IntField()
    defendslostabroad = IntField()
    rankedwarringwins = IntField()
    retals = IntField()
    elo = IntField()
    jobpointsused = IntField()
    reviveskill = IntField()
    itemslooted = IntField()
    rankedwarhits = IntField()
    raidhits = IntField()
    territoryclears = IntField()
    refills = IntField()