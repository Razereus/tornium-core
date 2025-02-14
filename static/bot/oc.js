/* Copyright (C) 2021-2023 tiksan

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>. */

$(document).ready(function () {
    $('[data-bs-toggle="tooltip"]').tooltip({
        html: true,
    });

    configRequest()
        .then(function () {
            $.each(serverConfig["factions"], function (index, faction) {
                $("#card-container").append(
                    $("<div>", {
                        class: "card mt-3",
                        "data-factionid": faction,
                    })
                );
                $(`div .card[data-factionid="${faction}"]`).append(
                    $("<div>", {
                        class: "card-body",
                        "data-factionid": faction,
                    })
                );
                $(`div .card-body[data-factionid="${faction}"]`).append(
                    $("<h5>", {
                        class: "card-title",
                        text: `Organized Crime Notification Configuration for ${"NYI"} [${faction}]`,
                    })
                );
                $(`div .card-body[data-factionid="${faction}"]`).append(
                    $("<p>", {
                        class: "card-text",
                        text: "The channel used for notifications and the roles that can be pinged.",
                    })
                );

                $(`div .card-body[data-factionid="${faction}"]`).append(
                    $("<div>", {
                        class: "row ready-row",
                        "data-factionid": faction,
                    })
                );
                $(`.ready-row[data-factionid="${faction}"]`).append(
                    $("<div>", {
                        class: "col-sm-12 col-md-8 col-xl-4 my-2 ready-channel-wrapper",
                        "data-factionid": faction,
                    })
                );
                $(
                    `div .ready-channel-wrapper[data-factionid="${faction}"]`
                ).append(
                    $("<div>", {
                        class: "card my-3 ready-channel-card",
                        "data-factionid": faction,
                    })
                );
                $(
                    `div .ready-channel-card[data-factionid="${faction}"]`
                ).append(
                    $("<div>", {
                        class: "card-header",
                        text: "OC Ready Channel",
                    })
                );
                $(
                    `div .ready-channel-card[data-factionid="${faction}"]`
                ).append(
                    $("<div>", {
                        class: "form-floating px-3 py-3 ready-channel-form",
                        "data-factionid": faction,
                    })
                );
                $(
                    `div .ready-channel-form[data-factionid="${faction}"]`
                ).append(
                    $("<select>", {
                        class: "discord-channel-selector oc-ready-channel",
                        "data-factionid": faction,
                        "aria-label": "OC Ready Channel",
                        "data-live-search": "true",
                    })
                );
                $(`.oc-ready-channel[data-factionid="${faction}"]`).append(
                    $("<option>", {
                        value: "0",
                        text: "Disabled",
                    })
                );

                $(`.ready-row[data-factionid="${faction}"]`).append(
                    $("<div>", {
                        class: "col-sm-12 col-md-8 col-xl-4 my-2 ready-roles-wrapper",
                        "data-factionid": faction,
                    })
                );
                $(
                    `div .ready-roles-wrapper[data-factionid="${faction}"]`
                ).append(
                    $("<div>", {
                        class: "card my-3 ready-roles-card",
                        "data-factionid": faction,
                    })
                );
                $(`div .ready-roles-card[data-factionid="${faction}"]`).append(
                    $("<div>", {
                        class: "card-header",
                        text: "OC Ready Roles",
                    })
                );
                $(`div .ready-roles-card[data-factionid="${faction}"]`).append(
                    $("<div>", {
                        class: "form-floating px-3 py-3 ready-roles-form",
                        "data-factionid": faction,
                    })
                );
                $(`div .ready-roles-form[data-factionid="${faction}"]`).append(
                    $("<select>", {
                        class: "discord-role-selector oc-ready-roles",
                        "data-factionid": faction,
                        "aria-label": "OC Ready Roles",
                        "data-live-search": "true",
                        "data-selected-text-format": "count > 2",
                        multiple: "",
                    })
                );

                $(`div .card-body[data-factionid="${faction}"]`).append(
                    $("<div>", {
                        class: "row delay-row",
                        "data-factionid": faction,
                    })
                );
                $(`.delay-row[data-factionid="${faction}"]`).append(
                    $("<div>", {
                        class: "col-sm-12 col-md-8 col-xl-4 my-2 delay-channel-wrapper",
                        "data-factionid": faction,
                    })
                );
                $(
                    `div .delay-channel-wrapper[data-factionid="${faction}"]`
                ).append(
                    $("<div>", {
                        class: "card my-3 delay-channel-card",
                        "data-factionid": faction,
                    })
                );
                $(
                    `div .delay-channel-card[data-factionid="${faction}"]`
                ).append(
                    $("<div>", {
                        class: "card-header",
                        text: "OC Delay Channel",
                    })
                );
                $(
                    `div .delay-channel-card[data-factionid="${faction}"]`
                ).append(
                    $("<div>", {
                        class: "form-floating px-3 py-3 delay-channel-form",
                        "data-factionid": faction,
                    })
                );
                $(
                    `div .delay-channel-form[data-factionid="${faction}"]`
                ).append(
                    $("<select>", {
                        class: "discord-channel-selector oc-delay-channel",
                        "data-factionid": faction,
                        "aria-label": "OC Delay Channel",
                        "data-live-search": "true",
                    })
                );
                $(`.oc-delay-channel[data-factionid="${faction}"]`).append(
                    $("<option>", {
                        value: "0",
                        text: "Disabled",
                    })
                );

                $(`.delay-row[data-factionid="${faction}"]`).append(
                    $("<div>", {
                        class: "col-sm-12 col-md-8 col-xl-4 my-2 delay-roles-wrapper",
                        "data-factionid": faction,
                    })
                );
                $(
                    `div .delay-roles-wrapper[data-factionid="${faction}"]`
                ).append(
                    $("<div>", {
                        class: "card my-3 delay-roles-card",
                        "data-factionid": faction,
                    })
                );
                $(`div .delay-roles-card[data-factionid="${faction}"]`).append(
                    $("<div>", {
                        class: "card-header",
                        text: "OC Delay Roles",
                    })
                );
                $(`div .delay-roles-card[data-factionid="${faction}"]`).append(
                    $("<div>", {
                        class: "form-floating px-3 py-3 delay-roles-form",
                        "data-factionid": faction,
                    })
                );
                $(`div .delay-roles-form[data-factionid="${faction}"]`).append(
                    $("<select>", {
                        class: "discord-role-selector oc-delay-roles",
                        "data-factionid": faction,
                        "aria-label": "OC Delay Roles",
                        "data-live-search": "true",
                        "data-selected-text-format": "count > 2",
                        multiple: "",
                    })
                );
            });
        })
        .then(function () {
            rolesRequest().then(function () {
                $.each(serverConfig["oc"], function (factionid, oc_config) {
                    $.each(oc_config["ready"]["roles"], function (index, role) {
                        let roleElement = $(
                            `.oc-ready-roles[data-factionid="${factionid}"] option[value="${role}"]`
                        );

                        if (roleElement.length === 0) {
                            return;
                        }

                        roleElement.attr("selected", "");
                    });

                    $.each(oc_config["delay"]["roles"], function (index, role) {
                        let roleElement = $(
                            `.oc-delay-roles[data-factionid="${factionid}"] option[value="${role}"]`
                        );

                        if (roleElement.length === 0) {
                            return;
                        }

                        roleElement.attr("selected", "");
                    });
                });

                $(".discord-role-selector").selectpicker();
            });
        })
        .then(function () {
            channelsRequest().then(function () {
                $.each(serverConfig["oc"], function (factionid, oc_config) {
                    let delayChannel = $(
                        `.oc-delay-channel[data-factionid="${factionid}"] option[value="${oc_config["delay"]["channel"]}"]`
                    );
                    let readyChannel = $(
                        `.oc-ready-channel[data-factionid="${factionid}"] option[value="${oc_config["ready"]["channel"]}"]`
                    );

                    if (delayChannel.length !== 0) {
                        delayChannel.attr("selected", "");
                    }
                    if (readyChannel.length !== 0) {
                        readyChannel.attr("selected", "");
                    }
                });

                $(".discord-channel-selector").selectpicker();
            });
        })
        .finally(function () {
            $(".oc-ready-channel").on("change", function () {
                const xhttp = new XMLHttpRequest();

                xhttp.onload = function () {
                    let response = xhttp.response;

                    if ("code" in response) {
                        generateToast(
                            "OC Ready Channel Failed",
                            response["message"]
                        );
                    }
                };

                xhttp.responseType = "json";
                xhttp.open(
                    "POST",
                    `/api/bot/${guildid}/faction/${this.getAttribute(
                        "data-factionid"
                    )}/oc/ready/channel`
                );
                xhttp.setRequestHeader("Content-Type", "application/json");
                xhttp.send(
                    JSON.stringify({
                        channel: this.options[this.selectedIndex].value,
                    })
                );
            });

            $(".oc-ready-roles").on("change", function () {
                var selectedOptions = $(this).find(":selected");
                var selectedRoles = [];

                $.each(selectedOptions, function (index, item) {
                    selectedRoles.push(item.getAttribute("value"));
                });

                const xhttp = new XMLHttpRequest();

                xhttp.onload = function () {
                    let response = xhttp.response;

                    if ("code" in response) {
                        generateToast(
                            "OC Ready Roles Failed",
                            response["message"]
                        );
                    }
                };

                xhttp.responseType = "json";
                xhttp.open(
                    "POST",
                    `/api/bot/${guildid}/faction/${this.getAttribute(
                        "data-factionid"
                    )}/oc/ready/roles`
                );
                xhttp.setRequestHeader("Content-Type", "application/json");
                xhttp.send(
                    JSON.stringify({
                        roles: selectedRoles,
                    })
                );
            });

            $(".oc-delay-channel").on("change", function () {
                const xhttp = new XMLHttpRequest();

                xhttp.onload = function () {
                    let response = xhttp.response;

                    if ("code" in response) {
                        generateToast(
                            "OC Delay Channel Failed",
                            response["message"]
                        );
                    }
                };

                xhttp.responseType = "json";
                xhttp.open(
                    "POST",
                    `/api/bot/${guildid}/faction/${this.getAttribute(
                        "data-factionid"
                    )}/oc/delay/channel`
                );
                xhttp.setRequestHeader("Content-Type", "application/json");
                xhttp.send(
                    JSON.stringify({
                        channel: this.options[this.selectedIndex].value,
                    })
                );
            });

            $(".oc-delay-roles").on("change", function () {
                var selectedOptions = $(this).find(":selected");
                var selectedRoles = [];

                $.each(selectedOptions, function (index, item) {
                    selectedRoles.push(item.getAttribute("value"));
                });

                const xhttp = new XMLHttpRequest();

                xhttp.onload = function () {
                    let response = xhttp.response;

                    if ("code" in response) {
                        generateToast(
                            "OC Ready Roles Failed",
                            response["message"]
                        );
                    }
                };

                xhttp.responseType = "json";
                xhttp.open(
                    "POST",
                    `/api/bot/${guildid}/faction/${this.getAttribute(
                        "data-factionid"
                    )}/oc/delay/roles`
                );
                xhttp.setRequestHeader("Content-Type", "application/json");
                xhttp.send(
                    JSON.stringify({
                        roles: selectedRoles,
                    })
                );
            });
        });
});
