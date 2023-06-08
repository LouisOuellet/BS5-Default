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
            card.footer.group = $(document.createElement('div')).addClass('btn-group-vertical rounded-0 rounded-bottom w-100').appendTo(card.footer);
            card.footer.group.status = $(document.createElement('button')).addClass('btn rounded-0 rounded-bottom').appendTo(card.footer.group);
            card.footer.group.status.icon = $(document.createElement('i')).addClass('bi me-1').appendTo(card.footer.group.status);
            card.footer.group.status.label = $(document.createElement('span')).appendTo(card.footer.group.status);

            // Configure Status
            switch(Profile.status){
                case 1:
                    card.footer.group.status.addClass('btn-danger');
                    card.footer.group.status.icon.addClass('bi-trash');
                    card.footer.group.status.label.text('Deleted');
                    break;
                case 2:
                    card.footer.group.status.addClass('btn-danger');
                    card.footer.group.status.icon.addClass('bi-exclamation-triangle');
                    card.footer.group.status.label.text('Banned');
                    break;
                case 3:
                    card.footer.group.status.addClass('btn-danger');
                    card.footer.group.status.icon.addClass('bi-lock');
                    card.footer.group.status.label.text('Locked Out');
                    break;
                case 4:
                    card.footer.group.status.addClass('btn-warning');
                    card.footer.group.status.icon.addClass('bi-clock');
                    card.footer.group.status.label.text('Rate Limited');
                    break;
                case 5:
                    card.footer.group.status.addClass('btn-secondary');
                    card.footer.group.status.icon.addClass('bi-pause');
                    card.footer.group.status.label.text('Inactive');
                    break;
                case 6:
                    card.footer.group.status.addClass('btn-success');
                    card.footer.group.status.icon.addClass('bi-check');
                    card.footer.group.status.label.text('Verified');
                    break;
                default:
                    card.footer.group.status.addClass('btn-success');
                    card.footer.group.status.icon.addClass('bi-check');
                    card.footer.group.status.label.text('Active');
                    break;
            }

            // Add Status Button Events
            card.footer.group.status.click(function(){
                let body = $(document.createElement('div'));
                body.p1 = $(document.createElement('p')).text('This modal allows you to manage various settings for the user\'s profile. By toggling the buttons below, you can control the following aspects:').appendTo(body);
                body.list = $(document.createElement('ul')).appendTo(body);
                body.list.item1 = $(document.createElement('li')).text('Delete/Restore: Toggling this button will either delete or restore the user\'s account. Deleting the account will result in permanent removal of their profile and associated data. Restoring the account will reverse this action.').appendTo(body.list);
                body.list.item2 = $(document.createElement('li')).text('Ban/Unban: Toggling this button will either ban or unban the user. Banning a user will restrict their access and participation on the platform. Unbanning the user will lift the restrictions.').appendTo(body.list);
                body.list.item3 = $(document.createElement('li')).text('Activate/Deactivate: Toggling this button will either activate or deactivate the user\'s account. Activating the account will enable the user to access and use the platform. Deactivating the account will temporarily disable their access.').appendTo(body.list);
                body.p2 = $(document.createElement('p')).text('Please note that these actions can have significant consequences, so exercise caution when making changes to a user\'s profile. Always review the situation and ensure the appropriate action is taken.').appendTo(body);
                let modal = new Modal(
                    {
                        onEnter: false,
                        destroy:true,
                        icon: "gear",
                        title: "User Profile Controls",
                        body: body,
                        submit: false,
                        size: "lg",
                    },
                    function(element,modal){
                        modal.show();
                        if(Profile.isActive){
                            modal.add(
                                {
                                    label: "Deactivate",
                                    color: "danger",
                                },
                                function(action){},
                            );
                        } else {
                            modal.add(
                                {
                                    label: "Activate",
                                    color: "info",
                                },
                                function(action){},
                            );
                        }
                        if(Profile.isBanned){
                            modal.add(
                                {
                                    label: "Unban",
                                    color: "info",
                                },
                                function(action){},
                            );
                        } else {
                            modal.add(
                                {
                                    label: "Ban",
                                    color: "danger",
                                },
                                function(action){},
                            );
                        }
                        if(Profile.isDeleted){
                            modal.add(
                                {
                                    label: "Restore",
                                    color: "info",
                                },
                                function(action){},
                            );
                        } else {
                            modal.add(
                                {
                                    label: "Delete",
                                    color: "danger",
                                },
                                function(action){},
                            );
                        }
                    },
                );
            });
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
                                item.field.value.link = $(document.createElement('a')).attr('href','tel:' + Profile.phone).text(Helper.formatPhoneNumber(Profile.phone)).appendTo(item.field.value);
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
                                item.field.value.link = $(document.createElement('a')).attr('href','tel:' + Profile.mobile).text(Helper.formatPhoneNumber(Profile.mobile)).appendTo(item.field.value);
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

    // Tabs
    let ProfileTabs = new Tabs(
        '#col2',
        {
            class: {
                navbar: 'nav-pills'
            },
            defaults: {
                class: {
                    tab: 'fade',
                },
            },
        },
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
            tabs.add('settings',{icon: 'gear'},
                function(tab,nav){
                    tab.form = $(document.createElement("form")).addClass("").appendTo(tab);
                    tab.form.row = $(document.createElement("div")).addClass("row").appendTo(tab.form);
                    Search.add(tab.form.row);
                    for(const [key, value] of Object.entries(["name","address","city","state","country","zipcode","phone","mobile"])){
                        tab.form.row[value] = $(document.createElement("div")).addClass("col-12 col-md-6 mb-2").appendTo(tab.form.row);
                        tab.form.row[value].formGroup = $(document.createElement("div")).addClass("input-group").appendTo(tab.form.row[value]);
                        tab.form.row[value].formGroup.label = $(document.createElement("label")).addClass("input-group-text text-capitalize").attr("for","settings" + value).text(value).appendTo(tab.form.row[value].formGroup);
                        tab.form.row[value].formGroup.input = $(document.createElement("input")).addClass("form-control").attr({type: "text", id: "settings" + value, name: value, placeholder: value, value: Profile[value]}).appendTo(tab.form.row[value].formGroup);
                        Search.set(tab.form.row[value]);
                    }
                    tab.form.row2 = $(document.createElement("div")).addClass("row").appendTo(tab.form);
                    tab.form.row2.submit = $(document.createElement("div")).addClass("col-12").appendTo(tab.form.row);
                    tab.form.row2.submit.button = $(document.createElement("button")).addClass("btn btn-success w-100").attr({type: "submit"}).text("Save Changes").appendTo(tab.form.row2.submit);
                },
            );
        },
    );
});