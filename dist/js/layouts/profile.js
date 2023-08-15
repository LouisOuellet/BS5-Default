$(document).ready(function(){

    // Load the profile data
    const Profile = {
        "created": "2023-04-10 11:40:05",
        "username": "louis@laswitchtech.com",
        "name": "Louis Ouellet",
        "address": "15 rue Richardson",
        "city": "Beauharnois",
        "state": "Quebec",
        "country": "Canada",
        "zipcode": "J6N 2S9",
        "phone": "4502250426",
        "mobile": "5145940414",
        "status": 7,
    };

    // Layout
    const sampleLayout = builder.Layout(
        "profile", //Layout Name
        "#layout", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                component: null, //Component Element
            },
            status: 7, //Status
            isActive: true, //Active
            isDeleted: false, //Deleted
            isBanned: false, //Banned
        },
        function(layout,component){ //Callback

            // Details
            layout.detail(
                function(item){
                    item.field.addClass('d-flex flex-column justify-content-center align-items-center py-3');
                    item.field.avatar = builder.Component(
                        "avatar",
                        item.field,
                        {
                            class: {
                                object: "rounded-circle",
                            },
                            email: Profile.username,
                            size: "128px",
                        },
                    );
                    item.field.name = $(document.createElement('h5')).addClass('my-0 mt-2').text(Profile.name).appendTo(item.field);
                },
            );
            if(Profile.username){
                layout.detail(
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
                layout.detail(
                    {
                        icon: 'calendar-event',
                    },
                    function(item){
                        item.field.addClass('d-flex justify-content-between align-items-center');
                        item.field.header = $(document.createElement('div')).addClass('fw-bold text-capitalize text-nowrap me-2').text('Joined:').appendTo(item.field);
                        item.field.value = $(document.createElement('div')).addClass('text-end').appendTo(item.field);

                        // Configure Datetime
                        let datetime = null;
                        if(Profile.created !== null){
                            datetime = new Date(Profile.created);
                        } else {
                            datetime = new Date();
                        }
        
                        // Create Time
                        item.field.value.time = $(document.createElement('time')).attr({
                            'class': 'timeago',
                            'title': datetime.toLocaleString(),
                            'datetime': datetime.toLocaleString(),
                            'data-bs-title': datetime.toLocaleString(),
                            'data-bs-toggle': 'tooltip',
                            'data-bs-placement': 'top',
                        }).text(datetime.toLocaleString()).appendTo(item.field.value);
        
                        // Initialize Tooltip
                        item.field.value.time.bootstrap = new bootstrap.Tooltip(item.field.value.time);
        
                        // Initialize Timeago
                        setTimeout(function(){ item.field.value.time.timeago(); }, 0);
                    },
                );
            }

            // About
            if(Profile.username){
                layout.about(
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
                layout.about(
                    {
                        icon: 'telephone',
                    },
                    function(item){
                        item.field.addClass('d-flex justify-content-between align-items-center');
                        item.field.header = $(document.createElement('div')).addClass('fw-bold text-capitalize text-nowrap me-2').text('Phone:').appendTo(item.field);
                        item.field.value = $(document.createElement('div')).addClass('text-end').appendTo(item.field);
                        item.field.value.link = $(document.createElement('a')).attr('href','tel:' + Profile.phone).text(builder.Helper.formatPhoneNumber(Profile.phone)).appendTo(item.field.value);
                    },
                );
            }
            if(Profile.mobile){
                layout.about(
                    {
                        icon: 'phone',
                    },
                    function(item){
                        item.field.addClass('d-flex justify-content-between align-items-center');
                        item.field.header = $(document.createElement('div')).addClass('fw-bold text-capitalize text-nowrap me-2').text('Mobile:').appendTo(item.field);
                        item.field.value = $(document.createElement('div')).addClass('text-end').appendTo(item.field);
                        item.field.value.link = $(document.createElement('a')).attr('href','tel:' + Profile.mobile).text(builder.Helper.formatPhoneNumber(Profile.mobile)).appendTo(item.field.value);
                    },
                );
            }
            if(Profile.address){
                layout.about(
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

            // Tabs
            layout.tab('activity',{icon: 'activity'},
                function(tab,nav){

                    // Create Timeline
                    tab.timeline = builder.Component(
                        'timeline',
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
                        function(timeline, component){
                            timeline.add(
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
                            timeline.add(
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
            layout.tab('settings',{icon: 'gear'},
                function(tab,nav){

                    // Create Form
                    tab.form = builder.Component(
                        'form',
                        tab,
                        {
                            class:{
                                field: 'mb-3',
                            },
                            callback:{
                                submit: function(form){
                                    console.log(form.val());
                                },
                                val: function(form){
                                    console.log(form.val());
                                },
                                reset: function(form){
                                    console.log(form.val());
                                },
                                clear: function(form){
                                    console.log(form.val());
                                },
                            },
                        },
                        function(form, component){

                            // Adding Fields
                            for(const [key, value] of Object.entries(["name","address","city","state","country","zipcode","phone","mobile"])){

                                // Add Field
                                form.add(
                                    {
                                        name: value,
                                        label: value,
                                        type: 'text',
                                        value: null,
                                        class: {
                                            label: 'text-capitalize',
                                        },
                                    },
                                    function(input,form){

                                        // Set Value
                                        if(Profile[value]){
                                            input.val(Profile[value]);
                                        }
                                    },
                                );
                            }

                            // Save Button
                            form.add(
                                {
                                    name: 'submit',
                                    label: 'Submit',
                                    icon: 'save',
                                    type: 'submit',
                                    class: {
                                        label: 'w-100',
                                    },
                                },
                                function(input,form){
                                    input.removeClass('mb-3');
                                },
                            );
                        },
                    );
                },
            );
        },
    );

    // Javascript Code
    let scriptCode = '';
    scriptCode += '// Builder' + "\n";
    scriptCode += 'const sampleBuilder = new Builder();' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Layout' + "\n";
    scriptCode += 'const sampleLayout = sampleBuilder.Layout(' + "\n";
    scriptCode += '    "profile", //Layout Name' + "\n";
    scriptCode += '    "#layout", //Selector or JQuery Object to appendTo' + "\n";

    // Code
    const code = builder.Component(
        "code", //Component Name
        "#code", //Selector or JQuery Object to appendTo
        {
            language: 'javascript',
            title: 'Code',
            clipboard:true,
            fullscreen:true,
            collapsed:true,
            code:scriptCode,
        },
    );

    // HTML Code
    setTimeout(function(){
        let pretty = prettier.format(sampleLayout.outerHTML(), { parser: "html", tabWidth: 4, useTabs: true, plugins: prettierPlugins });
        const html = builder.Component(
            "code", //Component Name
            "#htmlcode", //Selector or JQuery Object to appendTo
            {
                language: 'markup',
                title: 'Code',
                clipboard:true,
                fullscreen:true,
                collapsed:true,
                code:pretty,
            },
        );
    }, 0);
});