$(document).ready(function () {

    const ContentMenu = $('#settingsMenu');

    const ContentAccordion = $('#settingsContent');

    var ContentAccordionCount = 0;
    const ContentAdd = function(param1 = null, param2 = null){

        let options = {};
        let callback = null;

        // Set selector, options, and callback
        [param1, param2].forEach(param => {
            if(param !== null){
                if (typeof param === 'object') {
                    options = param;
                } else if (typeof param === 'function') {
                    callback = param;
                }
            }
        });

        // Configure Options
        let defaults = {
            id: null,
            icon: null,
            header: null,
        };
        for(const [key, value] of Object.entries(options)){
            if(typeof defaults[key] !== 'undefined'){
                defaults[key] = value;
            }
        }

        // Create Item
		let item = $(document.createElement('div')).addClass('accordion-collapse collapse').attr('data-bs-parent','#settingsContent').appendTo(ContentAccordion);

        // Save settings
        item.options = defaults;

        // Add ID
        if(item.options.id !== null){
            item.attr('id',item.options.id);
        }

        // Add Header
        item.header = $(document.createElement('div')).addClass('accordion-header card-body pb-0').appendTo(item);
        item.header.title = $(document.createElement('h4')).text(item.options.header).appendTo(item.header)
        item.header.icon = $(document.createElement('i')).addClass('me-1 bi bi-' + item.options.icon).prependTo(item.header.title);

        // Check for icon
        if(item.options.icon === null){
            item.header.icon.remove();
        }

        // Check for header
        if(item.options.header === null){
            item.header.remove();
        }

        // Add Form
		item.form = $(document.createElement('form')).attr({'method': 'post','autocomplete': 'off'}).addClass('card-body').appendTo(item);

        // Prevent Default
        item.form.on('submit', function(e){
            e.preventDefault();
        });

        // Add Form Fields Container
        item.form.fields = $(document.createElement('div')).appendTo(item.form);

        // Add Submit Button
        item.form.submit = $(document.createElement('button')).attr({'type': 'submit'}).addClass('btn btn-success w-100').text('Save').appendTo(item.form);
        item.form.submit.icon = $(document.createElement('i')).addClass('bi bi-save me-1').prependTo(item.form.submit);

        // Open first item
        if(ContentAccordion.children().length > 0){
            ContentAccordion.children().first().addClass('show');
        }

        // Add Event Listener
        item.on('show.bs.collapse', function(){
            // Clear Active
            ContentMenu.find('.active').removeClass('active');
            // Set Active
            ContentMenu.find('[data-bs-target="#'+item.options.id+'"]').addClass('active');
        });

        // Callback
        if(typeof callback === 'function'){
            callback(item);
        }

        // Return item
        return item;
    };

    var FormFieldCount = 0;
    const FormFieldAdd = function(param1, param2 = null, param3 = null){

        let selector = null;
        let options = {};
        let callback = null;

        // Set selector, options, and callback
        [param1, param2, param3].forEach(param => {
            if(param !== null){
                if (typeof param === 'string' || param instanceof jQuery) {
                    selector = param;
                } else if (typeof param === 'object') {
                    options = param;
                } else if (typeof param === 'function') {
                    callback = param;
                }
            }
        });

        // Configure Options
        let defaults = {
            id: null,
            name: null,
            label: null,
            icon: 'input-cursor-text',
            type: 'text',
            value: null,
            options: null,
        };
        switch(defaults.type){
            case 'textarea':
                defaults.icon = 'textarea-t';
                break;
            case 'select':
                defaults.icon = 'list';
                break;
            default:
                defaults.icon = 'input-cursor-text';
                break;
        }
        for(const [key, value] of Object.entries(options)){
            if(typeof defaults[key] !== 'undefined'){
                defaults[key] = value;
            }
        }

        // Check for selector
        if(selector === null){
            return false;
        }

        // Increment Form Field Count
        FormFieldCount++;

        // Create Field
		let field = $(document.createElement('div')).addClass('input-group mb-3').appendTo(selector);
        field.id = "settingsFormField" + FormFieldCount;
        field.label = $(document.createElement('label')).addClass('input-group-text').attr('for',field.id).text(defaults.label).appendTo(field);
        field.label.icon = $(document.createElement('i')).addClass('me-1 bi bi-' + defaults.icon).prependTo(field.label);
        switch(defaults.type){
            case 'textarea':
                field.input = $(document.createElement('textarea')).addClass('form-control').attr({'id': field.id, 'name': defaults.name, 'autocomplete': 'off'}).appendTo(field);
                break;
            case 'select':
                field.input = $(document.createElement('select')).addClass('form-select').attr({'id': field.id, 'name': defaults.name, 'autocomplete': 'off'}).appendTo(field);
                if(defaults.options !== null){
                    for(const [key, option] of Object.entries(defaults.options)){
                        field.input.option = $(document.createElement('option')).attr('value',option.id).text(option.text).appendTo(field.input);
                    }
                }
                break;
            default:
                field.input = $(document.createElement('input')).addClass('form-control').attr({'type': defaults.type, 'id': field.id, 'name': defaults.name, 'value': defaults.value, 'autocomplete': 'off'}).appendTo(field);
                break;
        }

        // Save settings
        field.options = defaults;

        // Add ID
        if(field.options.id !== null){
            field.attr('id',field.options.id);
        }

        // Check for icon
        if(field.options.icon === null){
            field.label.icon.remove();
        }

        // Callback
        if(typeof callback === 'function'){
            callback(field);
        }

        // Return Field
        return field;
    };

    const GeneralMenu = new List(
        "#settingsMenuGeneralMenu",
        {
            class: {
                list: "w-100",
            },
            icon: 'gear',
            callback: {
                item: function(item, list){
                    ContentAccordionCount++;
                    item.id = "settingsContentGeneralMenu" + ContentAccordionCount;
                    item.attr({
                        "id": item.id,
                        "data-bs-toggle": "collapse",
                        "data-bs-target": "#" + item.id + "Content",
                    });
                    item.content = ContentAdd({
                        id:item.id + "Content",
                        header: item.text(),
                        icon: item.options.icon,
                    });
                },
            },
        },
        function(list){
            list.item(
                {
                    icon: 'journal-richtext',
                    field: "About",
                    click: function(item){},
                },
                function(item){
                    item.content.form.remove();
                    item.body = $(document.createElement('div')).addClass('card-body').appendTo(item.content);
                    item.content.logo = $(document.createElement('div')).addClass('d-flex flex-column justify-content-center align-items-center').appendTo(item.body);
                    item.content.logo.icon = $(document.createElement('i')).css({'font-size':'200px'}).addClass('bi bi-bootstrap-fill').appendTo(item.content.logo);
                    item.content.logo.brand = $(document.createElement('h1')).text('Panel').appendTo(item.content.logo);
                    item.content.badges = $(document.createElement('div')).addClass('d-flex flex-wrap justify-content-center align-items-center').appendTo(item.body);
                    for(const [key, version] of Object.entries(Versions)){
                        item.content.badges[version.name] = $(document.createElement('div')).addClass('badge bg-dark p-0 fs-4 m-1').appendTo(item.content.badges);
                        item.content.badges[version.name].label = $(document.createElement('span')).addClass('badge text-bg-' + version.color).text(version.label).appendTo(item.content.badges[version.name]);
                        item.content.badges[version.name].label.icon = $(document.createElement('i')).addClass('me-1 bi bi-' + version.icon).prependTo(item.content.badges[version.name].label);
                        item.content.badges[version.name].version = $(document.createElement('span')).addClass('badge').text(version.version).appendTo(item.content.badges[version.name]);
                    }
                },
            );
            list.item(
                {
                    icon: 'arrow-repeat',
                    field: "Updates",
                    click: function(item){},
                },
                function(item){
                    item.content.form.remove();
                    item.body = $(document.createElement('div')).addClass('card-body').appendTo(item.content);
                },
            );
            list.item(
                {
                    icon: 'sliders',
                    field: "Identity",
                    click: function(item){},
                },
                function(item){
                    FormFieldAdd(
                        item.content.form.fields,
                        {
                            name: "name",
                            label: "Name",
                            icon: "app-indicator",
                            value: "Panel",
                        },
                    );
                },
            );
            list.item(
                {
                    icon: "database",
                    field: "Database",
                    click: function(item){},
                },
                function(item){
                    FormFieldAdd(
                        item.content.form.fields,
                        {
                            name: "host",
                            label: "Host",
                            icon: "hdd-network",
                            value: "localhost",
                        },
                    );
                    FormFieldAdd(
                        item.content.form.fields,
                        {
                            name: "database",
                            label: "Database",
                            icon: "database",
                            value: "demo",
                        },
                    );
                    FormFieldAdd(
                        item.content.form.fields,
                        {
                            name: "username",
                            label: "Username",
                            icon: "person",
                            value: "demo",
                        },
                    );
                    FormFieldAdd(
                        item.content.form.fields,
                        {
                            name: "password",
                            label: "Password",
                            icon: "lock",
                            type: "password",
                            value: "demo",
                        },
                    );
                },
            );
            list.item(
                {
                    icon: "send",
                    field: "SMTP",
                    click: function(item){},
                },
                function(item){
                    FormFieldAdd(
                        item.content.form.fields,
                        {
                            name: "host",
                            label: "Host",
                            icon: "hdd-network",
                            value: "localhost",
                        },
                    );
                    FormFieldAdd(
                        item.content.form.fields,
                        {
                            name: "port",
                            label: "Port",
                            icon: "ethernet",
                            type: "number",
                            value: "465",
                        },
                    );
                    FormFieldAdd(
                        item.content.form.fields,
                        {
                            name: "encryption",
                            label: "Encryption",
                            icon: "shield",
                            type: "select",
                            value: "ssl",
                            options: [
                                {id: "ssl", text: "SSL"},
                                {id: "tls", text: "TLS"},
                                {id: "none", text: "None"},
                            ],
                        },
                    );
                    FormFieldAdd(
                        item.content.form.fields,
                        {
                            name: "username",
                            label: "Username",
                            icon: "person",
                            value: "demo",
                        },
                    );
                    FormFieldAdd(
                        item.content.form.fields,
                        {
                            name: "password",
                            label: "Password",
                            icon: "lock",
                            type: "password",
                            value: "demo",
                        },
                    );
                },
            );
            list.item(
                {
                    icon: "chat-square-text",
                    field: "SMS",
                    click: function(item){},
                },
                function(item){
                    FormFieldAdd(
                        item.content.form.fields,
                        {
                            name: "provider",
                            label: "Provider",
                            icon: "reception-4",
                            type: "select",
                            value: "twilio",
                            options: [
                                {id: "twilio", text: "Twilio"},
                            ],
                        },
                    );
                    FormFieldAdd(
                        item.content.form.fields,
                        {
                            name: "sid",
                            label: "SID",
                            value: "ABCDEF1234567890",
                        },
                    );
                    FormFieldAdd(
                        item.content.form.fields,
                        {
                            name: "token",
                            label: "Token",
                            value: "ABCDEF1234567890",
                        },
                    );
                    FormFieldAdd(
                        item.content.form.fields,
                        {
                            name: "phone",
                            label: "Phone",
                            icon: "telephone",
                            value: "+01234567890",
                        },
                    );
                },
            );
        }, 
    );

    const AuthenticationMenu = new List(
        "#settingsMenuAuthenticationMenu",
        {
            class: {
                list: "w-100",
            },
            icon: 'gear',
            callback: {
                item: function(item, list){
                    ContentAccordionCount++;
                    item.id = "settingsContentGeneralMenu" + ContentAccordionCount;
                    item.attr({
                        "id": item.id,
                        "data-bs-toggle": "collapse",
                        "data-bs-target": "#" + item.id + "Content",
                    });
                    item.content = ContentAdd({
                        id:item.id + "Content",
                        header: item.text(),
                        icon: item.options.icon,
                    });
                },
            },
        },
        function(list){
            list.item(
                {
                    icon: 'people',
                    field: "Groups",
                    click: function(item){},
                },
                function(item){
                    item.content.form.remove();
                },
            );
            list.item(
                {
                    icon: 'person',
                    field: "Users",
                    click: function(item){},
                },
                function(item){
                    item.content.form.remove();
                    item.content.table = new Table(
                        item.content,
                        {
                            class: {
                                buttons: 'px-4 pt-4',
                                table: 'border-top',
                                footer: 'px-4 pt-2 pb-4',
                            },
                            showButtonsLabel: false,
                            columnsVisibility: false,
                            selectTools:false,
                            actions:{
                                remove:{
                                    label:'Remove',
                                    icon:'trash',
                                    action:function(event, table, node, row, data){
                                        table.delete(row);
                                    },
                                },
                            },
                            datatable:{ //Datatable options
                                columnDefs:[
                                    { target: 0, visible: false, responsivePriority: 1, title: 'ID', name: 'id', data: 'id' },
                                    { target: 1, visible: false, responsivePriority: 2, title: 'Created', name: 'created', data: 'created' },
                                    { target: 2, visible: false, responsivePriority: 3, title: 'Modified', name: 'modified', data: 'modified' },
                                    { target: 3, visible: false, responsivePriority: 4, title: 'Owner', name: 'owner', data: 'owner' },
                                    { target: 4, visible: false, responsivePriority: 5, title: 'Updated By', name: 'updatedBy', data: 'updatedBy' },
                                    { target: 5, visible: true, responsivePriority: 6, title: 'Username', name: 'username', data: 'username' },
                                    { target: 6, visible: false, responsivePriority: 7, title: 'Password Salt', name: 'passwordSalt', data: 'passwordSalt' },
                                    { target: 7, visible: false, responsivePriority: 8, title: 'Password Hash', name: 'passwordHash', data: 'passwordHash' },
                                    { target: 8, visible: false, responsivePriority: 9, title: '2FA Salt', name: '2FASalt', data: '2FASalt' },
                                    { target: 9, visible: false, responsivePriority: 10, title: '2FA Hash', name: '2FAHash', data: '2FAHash' },
                                    { target: 10, visible: false, responsivePriority: 11, title: 'Last 2FA', name: 'last2FA', data: 'last2FA' },
                                    { target: 11, visible: false, responsivePriority: 12, title: '2FA Method', name: '2FAMethod', data: '2FAMethod' },
                                    { target: 12, visible: false, responsivePriority: 13, title: 'Bearer Token', name: 'bearerToken', data: 'bearerToken' },
                                    { target: 13, visible: true, responsivePriority: 14, title: 'Name', name: 'name', data: 'name' },
                                    { target: 14, visible: false, responsivePriority: 15, title: 'Address', name: 'address', data: 'address' },
                                    { target: 15, visible: false, responsivePriority: 16, title: 'City', name: 'city', data: 'city' },
                                    { target: 16, visible: false, responsivePriority: 17, title: 'State', name: 'state', data: 'state' },
                                    { target: 17, visible: false, responsivePriority: 18, title: 'Country', name: 'country', data: 'country' },
                                    { target: 18, visible: false, responsivePriority: 19, title: 'Zipcode', name: 'zipcode', data: 'zipcode' },
                                    { target: 19, visible: false, responsivePriority: 20, title: 'Phone', name: 'phone', data: 'phone' },
                                    { target: 20, visible: false, responsivePriority: 21, title: 'Mobile', name: 'mobile', data: 'mobile' },
                                    { target: 21, visible: true, responsivePriority: 22, title: 'Status', name: 'status', data: 'status' },
                                    { target: 22, visible: true, responsivePriority: 23, title: 'Database', name: 'database', data: 'database' },
                                    { target: 23, visible: false, responsivePriority: 24, title: 'Server', name: 'server', data: 'server' },
                                    { target: 24, visible: false, responsivePriority: 25, title: 'Domain', name: 'domain', data: 'domain' },
                                    { target: 25, visible: false, responsivePriority: 26, title: 'Session ID', name: 'sessionId', data: 'sessionId' },
                                    { target: 26, visible: false, responsivePriority: 27, title: 'Attempts', name: 'attempts', data: 'attempts' },
                                    { target: 27, visible: false, responsivePriority: 28, title: 'Last Attempt', name: 'lastAttempt', data: 'lastAttempt' },
                                    { target: 28, visible: false, responsivePriority: 29, title: 'Requests', name: 'requests', data: 'requests' },
                                    { target: 29, visible: false, responsivePriority: 30, title: 'Last Request', name: 'lastRequest', data: 'lastRequest' },
                                    { target: 30, visible: true, responsivePriority: 31, title: 'Active', name: 'isActive', data: 'isActive' },
                                    { target: 31, visible: false, responsivePriority: 32, title: 'Verified', name: 'isVerified', data: 'isVerified' },
                                    { target: 32, visible: false, responsivePriority: 33, title: 'Verified Salt', name: 'verifiedSalt', data: 'verifiedSalt' },
                                    { target: 33, visible: false, responsivePriority: 34, title: 'Verified Hash', name: 'verifiedHash', data: 'verifiedHash' },
                                    { target: 34, visible: false, responsivePriority: 35, title: 'Verified On', name: 'verifiedOn', data: 'verifiedOn' },
                                    { target: 35, visible: false, responsivePriority: 36, title: 'Verified Until', name: 'verifiedUntil', data: 'verifiedUntil' },
                                    { target: 36, visible: false, responsivePriority: 37, title: 'Banned', name: 'isBanned', data: 'isBanned' },
                                    { target: 37, visible: false, responsivePriority: 38, title: 'Deleted', name: 'isDeleted', data: 'isDeleted' },
                                    { target: 38, visible: true, responsivePriority: 39, title: 'API', name: 'isAPI', data: 'isAPI' },
                                    { target: 39, visible: false, responsivePriority: 40, title: 'Contact Info Dynamic', name: 'isContactInfoDynamic', data: 'isContactInfoDynamic' },
                                ],
                                buttons:[
                                    {
                                        text: '<i class="bi-plus-lg"></i>',
                                        action:function(e, dt, node, config){
                                            console.log(e, dt, node, config);
                                        },
                                    }
                                ],
                            },
                        },
                        function(table){
                            for(const [key, user] of Object.entries(Users)){
                                table.add(user);
                            }
                        }, 
                    );
                },
            );
            list.item(
                {
                    icon: 'shield',
                    field: "Roles",
                    click: function(item){},
                },
                function(item){
                    item.content.form.remove();
                },
            );
            list.item(
                {
                    icon: 'lock',
                    field: "Permissions",
                    click: function(item){},
                },
                function(item){
                    item.content.form.remove();
                },
            );
        }, 
    );

    const MaintenanceMenu = new List(
        "#settingsMenuMaintenanceMenu",
        {
            class: {
                list: "w-100",
            },
            icon: 'gear',
            callback: {
                item: function(item, list){
                    ContentAccordionCount++;
                    item.id = "settingsContentGeneralMenu" + ContentAccordionCount;
                    item.attr({
                        "id": item.id,
                        "data-bs-toggle": "collapse",
                        "data-bs-target": "#" + item.id + "Content",
                    });
                    item.content = ContentAdd({
                        id:item.id + "Content",
                        header: item.text(),
                        icon: item.options.icon,
                    });
                },
            },
        },
        function(list){
            list.item(
                {
                    icon: 'buildings',
                    field: "Organizations",
                    click: function(item){},
                },
                function(item){
                    item.content.form.remove();
                    item.content.table = new Table(
                        item.content,
                        {
                            class: {
                                buttons: 'px-4 pt-4',
                                table: 'border-top',
                                footer: 'px-4 pt-2 pb-4',
                            },
                            showButtonsLabel: false,
                            columnsVisibility: false,
                            selectTools:false,
                            actions:{
                                remove:{
                                    label:'Remove',
                                    icon:'trash',
                                    action:function(event, table, node, row, data){
                                        table.delete(row);
                                    },
                                },
                            },
                            datatable:{ //Datatable options
                                columnDefs:[
                                    { target: 0, visible: false, responsivePriority: 1, title: 'ID', name: 'id', data: 'id' },
                                    { target: 1, visible: false, responsivePriority: 2, title: 'Created', name: 'created', data: 'created' },
                                    { target: 2, visible: false, responsivePriority: 3, title: 'Modified', name: 'modified', data: 'modified' },
                                    { target: 3, visible: false, responsivePriority: 4, title: 'Owner', name: 'owner', data: 'owner' },
                                    { target: 4, visible: false, responsivePriority: 5, title: 'Updated By', name: 'updatedBy', data: 'updatedBy' },
                                    { target: 5, visible: true, responsivePriority: 6, title: 'Name', name: 'name', data: 'name' },
                                    { target: 6, visible: false, responsivePriority: 7, title: 'SBNR/EIN', name: 'sbnr/ein', data: 'sbnr/ein' },
                                    { target: 7, visible: false, responsivePriority: 8, title: 'Address', name: 'address', data: 'address' },
                                    { target: 8, visible: false, responsivePriority: 9, title: 'City', name: 'city', data: 'city' },
                                    { target: 9, visible: false, responsivePriority: 10, title: 'State', name: 'state', data: 'state' },
                                    { target: 10, visible: false, responsivePriority: 11, title: 'Country', name: 'country', data: 'country' },
                                    { target: 11, visible: false, responsivePriority: 12, title: 'Zipcode', name: 'zipcode', data: 'zipcode' },
                                    { target: 12, visible: false, responsivePriority: 13, title: 'Email', name: 'email', data: 'email' },
                                    { target: 13, visible: false, responsivePriority: 14, title: 'Fax', name: 'fax', data: 'fax' },
                                    { target: 14, visible: false, responsivePriority: 15, title: 'Phone', name: 'phone', data: 'phone' },
                                    { target: 15, visible: false, responsivePriority: 16, title: 'Toll Free', name: 'tollfree', data: 'tollfree' },
                                    { target: 16, visible: false, responsivePriority: 17, title: 'Website', name: 'website', data: 'website' },
                                    { target: 17, visible: false, responsivePriority: 18, title: 'Domain', name: 'domain', data: 'domain' },
                                    { target: 18, visible: false, responsivePriority: 19, title: 'Database', name: 'database', data: 'database' },
                                    { target: 19, visible: false, responsivePriority: 20, title: 'Server', name: 'server', data: 'server' },
                                    { target: 20, visible: false, responsivePriority: 21, title: 'Subsidiary', name: 'isSubsidiary', data: 'isSubsidiary' },
                                    { target: 21, visible: false, responsivePriority: 22, title: 'Deleted', name: 'isDeleted', data: 'isDeleted' },
                                    { target: 22, visible: true, responsivePriority: 23, title: 'Active', name: 'isActive', data: 'isActive' },
                                ],
                                buttons:[
                                    {
                                        text: '<i class="bi-plus-lg"></i>',
                                        action:function(e, dt, node, config){
                                            console.log(e, dt, node, config);
                                        },
                                    }
                                ],
                            },
                        },
                        function(table){
                            for(const [key, Organization] of Object.entries(Organizations)){
                                table.add(Organization);
                            }
                        }, 
                    );
                },
            );
            list.item(
                {
                    icon: 'diagram-2',
                    field: "Divisions",
                    click: function(item){},
                },
                function(item){
                    item.content.form.remove();
                },
            );
            list.item(
                {
                    icon: 'briefcase',
                    field: "Offices",
                    click: function(item){},
                },
                function(item){
                    item.content.form.remove();
                },
            );
            list.item(
                {
                    icon: 'people-fill',
                    field: "Teams",
                    click: function(item){},
                },
                function(item){
                    item.content.form.remove();
                },
            );
        }, 
    );

    const LoggerMenu = new List(
        "#settingsMenuLoggerMenu",
        {
            class: {
                list: "w-100",
            },
            icon: 'gear',
            callback: {
                item: function(item, list){
                    ContentAccordionCount++;
                    item.id = "settingsContentGeneralMenu" + ContentAccordionCount;
                    item.attr({
                        "id": item.id,
                        "data-bs-toggle": "collapse",
                        "data-bs-target": "#" + item.id + "Content",
                    });
                    item.content = ContentAdd({
                        id:item.id + "Content",
                        header: item.text(),
                        icon: item.options.icon,
                    });
                },
            },
        },
        function(list){
            list.item(
                {
                    icon: 'text-indent-left',
                    field: "Log",
                    click: function(item){},
                },
                function(item){
                    item.content.form.remove();
                },
            );
        }, 
    );

    // Set Active
    if(ContentAccordion.find('.show').length > 0){
        // Clear Active
        ContentMenu.find('.active').removeClass('active');
        // Set Active
        ContentMenu.find('[data-bs-target="#'+ContentAccordion.find('.show').attr('id')+'"]').addClass('active');
    }
});