$(document).ready(function(){

    const col1 = $('#col1');
    const col2 = $('#col2');

    const Profile = {
        "id": 1,
        "created": "2023-04-10 11:40:05",
        "modified": "2023-05-04 12:19:03",
        "username": "louis@laswitchtech.com",
        "passwordSalt": null,
        "passwordHash": null,
        "2FASalt": null,
        "2FAHash": null,
        "last2FA": null,
        "2FAMethod": null,
        "bearerToken": null,
        "name": "Louis Ouellet",
        "address": "15 rue Richardson",
        "city": "Beauharnois",
        "state": "Quebec",
        "country": "Canada",
        "zipcode": "J6N 2S9",
        "phone": "4502250426",
        "mobile": "5145940414",
        "status": 7,
        "database": null,
        "server": null,
        "domain": "laswitchtech.com",
        "sessionId": null,
        "attempts": null,
        "lastAttempt": null,
        "requests": 1,
        "lastRequest": null,
        "isActive": 1,
        "isVerified": 1,
        "verifiedSalt": null,
        "verifiedHash": null,
        "verifiedOn": "2023-04-10 15:46:53",
        "verifiedUntil": "2023-05-10 15:40:06",
        "isBanned": 0,
        "isDeleted": 0,
        "isAPI": null,
        "isContactInfoDynamic": 1,
        "latitude": 45.314618,
        "longitude": -73.876433,
    };

    console.log(Profile);

    let profileDetails = new Card(
        '#col1',
        {
            title: 'Details',
            icon: 'person',
            class: {
                card: 'mb-3',
            },
        },
        function(card){
            card.body.addClass('p-0');
            card.list = new List(
                {
                    callback: {
                        item: function(item){},
                    },
                    class: {
                        list: 'bg-transparent',
                    },
                },
                function(list,object){
                    console.log(list,object);
                    object.start.remove();
                    object.tools.remove();
                    list.appendTo(card.body);
                    list.item(
                        function(item){
                            item.field.addClass('d-flex flex-column justify-content-center align-items-center py-3');
                            item.field.avatar = new Avatar(Profile.username,{size:"128px"}).appendTo(item.field);
                            item.field.name = $(document.createElement('h5')).addClass('my-0 mt-2').text(Profile.name).appendTo(item.field);
                        },
                    );
                    if(Profile.username){
                        list.item(
                            {
                                icon: 'at',
                            },
                            function(item){
                                item.field.addClass('d-flex justify-content-between align-items-center');
                                item.field.header = $(document.createElement('div')).addClass('fw-bold text-capitalize text-nowrap me-2').text('Username:').appendTo(item.field);
                                item.field.value = $(document.createElement('div')).addClass('text-end').appendTo(item.field);
                                item.field.value.link = $(document.createElement('a')).attr('href','mailto:' + Profile.username).text(Profile.username).appendTo(item.field.value);
                            },
                        );
                    }
                    if(Profile.created){
                        list.item(
                            {
                                icon: 'calendar-event',
                            },
                            function(item){
                                item.field.addClass('d-flex justify-content-between align-items-center');
                                item.field.header = $(document.createElement('div')).addClass('fw-bold text-capitalize text-nowrap me-2').text('Joined:').appendTo(item.field);
                                item.field.value = $(document.createElement('div')).addClass('text-end').appendTo(item.field);
                                item.field.value.time = $(document.createElement('time')).addClass('timeago').attr('datetime',Profile.created).text(Profile.created).appendTo(item.field.value);
                                item.field.value.time.timeago();
                            },
                        );
                    }
                }
            );

            // Add status icon
            card.footer.removeClass('d-none').addClass('p-0');
            card.footer.button = $(document.createElement('button')).addClass('btn w-100 rounded-0 rounded-bottom').appendTo(card.footer);
            card.footer.button.icon = $(document.createElement('i')).addClass('bi me-1').appendTo(card.footer.button);
            card.footer.button.label = $(document.createElement('span')).appendTo(card.footer.button);

            // Configure Status
            switch(Profile.status){
                case 1:
                    card.footer.button.addClass('btn-danger');
                    card.footer.button.icon.addClass('bi-trash');
                    card.footer.button.label.text('Deleted');
                    break;
                case 2:
                    card.footer.button.addClass('btn-danger');
                    card.footer.button.icon.addClass('bi-exclamation-triangle');
                    card.footer.button.label.text('Banned');
                    break;
                case 3:
                    card.footer.button.addClass('btn-danger');
                    card.footer.button.icon.addClass('bi-lock');
                    card.footer.button.label.text('Locked Out');
                    break;
                case 4:
                    card.footer.button.addClass('btn-warning');
                    card.footer.button.icon.addClass('bi-clock');
                    card.footer.button.label.text('Rate Limited');
                    break;
                case 5:
                    card.footer.button.addClass('btn-secondary');
                    card.footer.button.icon.addClass('bi-pause');
                    card.footer.button.label.text('Inactive');
                    break;
                case 6:
                    card.footer.button.addClass('btn-success');
                    card.footer.button.icon.addClass('bi-check');
                    card.footer.button.label.text('Verified');
                    break;
                default:
                    card.footer.button.addClass('btn-success');
                    card.footer.button.icon.addClass('bi-check');
                    card.footer.button.label.text('Active');
                    break;
            }
        },
    );

    let profileAbout = new Card(
        '#col1',
        {
            title: 'About',
            icon: 'person-vcard',
            class: {
                container: 'mb-3',
            },
        },
        function(card){
            card.body.addClass('p-0');
            card.list = new List(
                {
                    callback: {
                        item: function(item){},
                    },
                    class: {
                        list: 'bg-transparent',
                    },
                },
                function(list,object){
                    object.start.remove();
                    object.tools.remove();
                    list.appendTo(card.body);
                    if(Profile.username){
                        list.item(
                            {
                                icon: 'envelope',
                            },
                            function(item){
                                item.field.addClass('d-flex justify-content-between align-items-center');
                                item.field.header = $(document.createElement('div')).addClass('fw-bold text-capitalize text-nowrap me-2').text('Email:').appendTo(item.field);
                                item.field.value = $(document.createElement('div')).addClass('text-end').appendTo(item.field);
                                item.field.value.link = $(document.createElement('a')).attr('href','mailto:' + Profile.username).text(Profile.username).appendTo(item.field.value);
                            },
                        );
                    }
                    if(Profile.phone){
                        list.item(
                            {
                                icon: 'telephone',
                            },
                            function(item){
                                item.field.addClass('d-flex justify-content-between align-items-center');
                                item.field.header = $(document.createElement('div')).addClass('fw-bold text-capitalize text-nowrap me-2').text('Phone:').appendTo(item.field);
                                item.field.value = $(document.createElement('div')).addClass('text-end').appendTo(item.field);
                                item.field.value.link = $(document.createElement('a')).attr('href','tel:' + Profile.phone).text(formatPhoneNumber(Profile.phone)).appendTo(item.field.value);
                            },
                        );
                    }
                    if(Profile.mobile){
                        list.item(
                            {
                                icon: 'phone',
                            },
                            function(item){
                                item.field.addClass('d-flex justify-content-between align-items-center');
                                item.field.header = $(document.createElement('div')).addClass('fw-bold text-capitalize text-nowrap me-2').text('Mobile:').appendTo(item.field);
                                item.field.value = $(document.createElement('div')).addClass('text-end').appendTo(item.field);
                                item.field.value.link = $(document.createElement('a')).attr('href','tel:' + Profile.mobile).text(formatPhoneNumber(Profile.mobile)).appendTo(item.field.value);
                            },
                        );
                    }
                    if(Profile.address){
                        list.item(
                            {
                                icon: 'geo-alt',
                            },
                            function(item){
                                var address = Profile.address;
                                for(const [key, value] of Object.entries(['city','state','country','zipcode'])){
                                    if(Profile[value]){
                                        address += ', ' + Profile[value];
                                    }
                                }
                                item.field.addClass('d-flex justify-content-between align-items-center');
                                item.field.header = $(document.createElement('div')).addClass('fw-bold text-capitalize text-nowrap me-2').text('Address:').appendTo(item.field);
                                item.field.value = $(document.createElement('div')).addClass('text-end').text(address).appendTo(item.field);
                            },
                        );
                    }
                }
            );
        },
    );
    
    // Profile Location
    let ProfileLocation = new Card(
        '#col2',
        {
            title: 'Location',
            icon: 'geo-alt',
            class: {
                card: 'mb-3',
            },
        },
        function(card){

            // Add Class to Body
            card.body.addClass('p-0');

            // Create Map
            card.map = $(document.createElement('div')).attr('id','mapLeaflet').addClass('leaflet-map rounded-bottom').css({height: '300px',wigth: '100%'}).appendTo(card.body);
        },
    );

    // Leaflet
    ProfileLocation.leaflet = L.map('mapLeaflet').setView([Profile.latitude, Profile.longitude], 17);
    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        },
    ).addTo(ProfileLocation.leaflet);
    L.marker([Profile.latitude, Profile.longitude]).addTo(ProfileLocation.leaflet);

    // Tabs
    let ProfileTabs = new Tabs('#col2',{class: {navbar: 'nav-pills'}},
        function(tabs){
            tabs.add('activity',{icon: 'activity'},
                function(tab,nav){
                    tab.timeline = new Timeline(
                        tab,
                        {
                            class: {
                                item: "border rounded",
                            },
                            order: "DESC",
                            showNow: true,
                            showStart: true,
                            defaults: {
                                icon: "circle",
                                color: "secondary",
                            },
                        },
                        function(timeline){
                            timeline.create(
                                {
                                    icon: "balloon",
                                    color: "success",
                                    type: "event",
                                    datetime: Profile.created,
                                },
                                function(object){
                            
                                    // Set Content
                                    var header = $(document.createElement("div")).addClass("card-header border-0").appendTo(object.item);
                                    header.h5 = $(document.createElement("h5")).addClass("card-title").text(Profile.username + " has joined!").appendTo(header);
                                }
                            );
                            timeline.create(
                                {
                                    icon: "person-check",
                                    color: "primary",
                                    type: "event",
                                    datetime: Profile.verifiedOn,
                                },
                                function(object){
                            
                                    // Set Content
                                    var header = $(document.createElement("div")).addClass("card-header border-0").appendTo(object.item);
                                    header.h5 = $(document.createElement("h5")).addClass("card-title").text(Profile.username + " has been verified!").appendTo(header);
                                }
                            );
                        },
                    );
                },
            );
        },
    );
});