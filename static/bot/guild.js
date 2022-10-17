/* Copyright (C) tiksan - All Rights Reserved
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by tiksan <webmaster@deek.sh> */

const key = document.currentScript.getAttribute('data-key');
const guildid = document.currentScript.getAttribute('data-guildid');
const assistMod = document.currentScript.getAttribute('data-assist-mod');

$(document).ready(function() {
    $('[data-bs-toggle="tooltip"]').tooltip({
        container: '.list-group'
    });

    $('#assist-type-select').find('option').each(function(i, e) {
        if($(e).val() === String(assistMod)) {
            $('#assist-type-select').prop('selectedIndex', i);
        }
    });

    $('#stakeoutcategory').on('keypress', function(e) {
        if(e.which === 13) {
            const id = $('#stakeoutcategory').val();
            const xhttp = new XMLHttpRequest();

            xhttp.onload = function() {
                window.location.reload();
            }

            xhttp.open('POST', `/bot/stakeouts/${guildid}/update?action=category&value=${id}`);
            xhttp.send();
        }
    });

    $('#assistchannel').on('keypress', function(e) {
        if(e.which === 13) {
            const id = $('#assistchannel').val();
            const xhttp = new XMLHttpRequest();

            xhttp.onload = function() {
                window.location.reload();
            }

            xhttp.open('POST', `/bot/assists/${guildid}/update?action=channel&value=${id}`);
            xhttp.send();
        }
    });

    $('#assistfactionid').on('keypress', function(e) {
        if(e.which === 13) {
            const id = $('#assistfactionid').val();
            const xhttp = new XMLHttpRequest();

            xhttp.onload = function() {
                window.location.reload();
            }

            xhttp.open('POST', `/bot/assists/${guildid}/update?action=faction&value=${id}`);
            xhttp.send();
        }
    });

    $('#submit-assist-mod').click(function() {
        const assistMod = $('#assist-type-select').val();
        const xhttp = new XMLHttpRequest();

        xhttp.onload = function() {
            window.location.reload();
        }

        xhttp.open('POST', `/bot/assists/${guildid}/update?action=mod&value=${assistMod}`);
        xhttp.send();
    });

    $(".faction-retal-channel").on("change", function() {
        const xhttp = new XMLHttpRequest();

        xhttp.onload = function() {
            let response = xhttp.response;

            if("code" in response) {
                generateToast("Channel Set Failed");
            } else {
                generateToast("Channel Set Successful");
                window.location.reload();
            }
        }

        xhttp.responseType = "json";
        xhttp.open("POST", "/api/bot/retal/faction/channel");
        xhttp.setRequestHeader("Authorization", `Basic ${btoa(`${key}:`)}`);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify({
            "guildid": guildid,
            "factiontid": this.getAttribute("data-faction"),
            "channel": this.options[this.selectedIndex].value
        }));
    });
});
