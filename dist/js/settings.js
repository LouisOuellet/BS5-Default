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
        item.header = $(document.createElement('div')).addClass('accordion-header mb-3').appendTo(item);
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
		item.form = $(document.createElement('form')).attr({'method': 'post','autocomplete': 'off'}).addClass().appendTo(item);

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
                    icon: 'person',
                    field: "Users",
                    click: function(item){},
                },
                function(item){},
            );
            list.item(
                {
                    icon: 'buildings',
                    field: "Organizations",
                    click: function(item){},
                },
                function(item){},
            );
            list.item(
                {
                    icon: 'people',
                    field: "Groups",
                    click: function(item){},
                },
                function(item){},
            );
            list.item(
                {
                    icon: 'shield',
                    field: "Roles",
                    click: function(item){},
                },
                function(item){},
            );
            list.item(
                {
                    icon: 'lock',
                    field: "Permissions",
                    click: function(item){},
                },
                function(item){},
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
                function(item){},
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