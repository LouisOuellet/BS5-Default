// Settings
class layoutSettings {

    #layout = null;
    #options = {
        class: {
            layout: null,
            content: null,
            menu: null,
        },
    };
    #count = 0;
    #forms = {};

	constructor(param1 = null, param2 = null, param3 = null){

        // Set Self
        const self = this;

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
        this.config(options);

        // Increment Count
        builderCount++;

        // Create Layout
		this.#layout = $(document.createElement('div')).addClass('row').attr('id','layout' + builderCount);
        this.#layout.id = this.#layout.attr('id');

        // Create side menu
        this.#layout.menu = $(document.createElement('div')).addClass('col-4 col-lg-3').appendTo(this.#layout);
        this.#layout.menu.accordion = $(document.createElement('div')).addClass('accordion').attr('id',this.#layout.id + 'menu').appendTo(this.#layout.menu);
        this.#layout.menu.id = this.#layout.menu.accordion.attr('id');

        // Create content
        this.#layout.content = $(document.createElement('div')).addClass('col-8 col-lg-9').appendTo(this.#layout);
        this.#layout.content.card = $(document.createElement('div')).addClass('card').appendTo(this.#layout.content);
        this.#layout.content.accordion = $(document.createElement('div')).addClass('accordion').attr('id',this.#layout.id + 'content').appendTo(this.#layout.content.card);
        this.#layout.content.id = this.#layout.content.accordion.attr('id');

        // Set Object Class
        if(this.#options.class.layout){
            this.#layout.addClass(this.#options.class.layout);
        }

        // Set Object Class
        if(this.#options.class.menu){
            this.#layout.menu.addClass(this.#options.class.menu);
        }

        // Set Object Class
        if(this.#options.class.content){
            this.#layout.content.addClass(this.#options.class.content);
        }

        // Execute Callback
        if(typeof callback === 'function'){
            callback(this,this.#layout);
        }

        // Check if Selector is Set
        if(selector != null){

            // Append to Selector
            this.appendTo(selector);
        }
    }

    config(options = {}){

        // Configure Options
        for(const [key, value] of Object.entries(options)){
            if(typeof this.#options[key] !== 'undefined'){
                switch(key){
                    case"defaults":
                        if(typeof this.#options[key] !== 'undefined'){
                            for(const [k, v] of Object.entries(value)){
                                if(typeof this.#options[key][k] !== 'undefined'){
                                    this.#options[key][k] = v;
                                }
                            }
                        }
                        break;
                    case"class":
                        for(const [section, classes] of Object.entries(value)){
                            if(this.#options[key][section] != null){
                                this.#options[key][section] += ' ' + classes;
                            } else {
                                this.#options[key][section] = classes;
                            }
                        }
                        break;
                    default:
                        this.#options[key] = value;
                        break;
                }
            }
        }

        // Return Object
        return this;
    }

    add(param1 = null, param2 = null){

        const self = this;

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

        let properties = {
            icon: 'gear',
            label: null,
            class: null,
        };

        // Configure Options
        for(const [key, value] of Object.entries(options)){
            if(typeof properties[key] !== 'undefined'){
                switch(key){
                    case"callback":
                        if(typeof properties[key] !== 'undefined'){
                            for(const [k, v] of Object.entries(value)){
                                if(typeof properties[key][k] !== 'undefined'){
                                    properties[key][k] = v;
                                }
                            }
                        }
                        break;
                    default:
                        properties[key] = value;
                        break;
                }
            }
        }

        // Increment Count
        this.#count++;

        // Create Category
        var category = $(document.createElement('div')).addClass('accordion-item bg-transparent').appendTo(this.#layout.menu.accordion);
        category.id = this.#layout.menu.id + 'category' + this.#count;
        category.properties = properties;

        // Create Header
        category.header = $(document.createElement('h2')).addClass('accordion-header').appendTo(category);

        // Create Button
        category.button = $(document.createElement('button')).attr({
            'type': 'button',
            'data-bs-toggle': 'collapse',
            'aria-expanded': 'false',
            'class': 'accordion-button collapsed',
            'type': 'button',
            'id': category.id + 'button',
        }).text(properties.label).appendTo(category.header);
        category.button.id = category.button.attr('id');
        category.button.icon = $(document.createElement('i')).addClass('me-1 bi bi-' + properties.icon).prependTo(category.button);

        // Create Collapse
        category.collapse = $(document.createElement('div')).attr({
            'id': category.id,
            'class': 'accordion-collapse collapse',
            'data-bs-parent': '#' + this.#layout.menu.id,
        }).appendTo(category);
        category.collapse.id = category.collapse.attr('id');

        // Configure Button
        category.button.attr({
            'aria-controls': category.collapse.id,
            'data-bs-target': '#' + category.collapse.id,
        });

        // Create Menu
        category.menu = $(document.createElement('div')).attr({
            'id': category.id + 'menu',
            'class': 'accordion-body p-0',
            'data-bs-parent': '#' + this.#layout.menu.id,
        }).appendTo(category.collapse);
        category.menu.id = category.menu.attr('id');

        // Create Menu List
        category.menu.list = $(document.createElement('ul')).attr({
            'id': category.menu.id + 'list',
            'class': 'list-group list-group-flush w-100',
        }).appendTo(category.menu);
        category.menu.list.id = category.menu.list.attr('id');

        // Add method to add content
        category.add = function(param1 = null, param2 = null){
            self.#item(category,param1,param2);
        }

        if(properties.icon == null){
            category.button.icon.remove();
        }

        if(properties.class){
            category.addClass(properties.class);
        }

        if(this.#count <= 1){
            category.button.removeClass('collapsed').attr('aria-expanded',true);
            category.collapse.addClass('show');
        }

        if(typeof callback === "function"){
            callback(category,self);
        }

        // Return
        return this;
    }

    #item(category, param1 = null, param2 = null){

        const self = this;

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

        let properties = {
            icon: 'gear',
            label: null,
            class: null,
            body: false,
            form: true,
            submit: function(form){},
        };

        // Configure Options
        for(const [key, value] of Object.entries(options)){
            if(typeof properties[key] !== 'undefined'){
                switch(key){
                    case"callback":
                        if(typeof properties[key] !== 'undefined'){
                            for(const [k, v] of Object.entries(value)){
                                if(typeof properties[key][k] !== 'undefined'){
                                    properties[key][k] = v;
                                }
                            }
                        }
                        break;
                    default:
                        properties[key] = value;
                        break;
                }
            }
        }

        // Increment Count
        this.#count++;

        // Create Content Item
        var content = $(document.createElement('div')).attr({
            'id': category.id + 'content' + this.#count,
            'class': 'accordion-collapse collapse',
            'data-bs-parent': '#' + this.#layout.content.id,
        }).appendTo(this.#layout.content.accordion);
        content.id = content.attr('id');
        content.properties = properties;
        content.header = $(document.createElement('div')).attr({
            'class': 'accordion-header card-body pb-0',
        }).appendTo(content);
        content.header.title = $(document.createElement('h4')).text(properties.label).appendTo(content.header);
        content.header.title.icon = $(document.createElement('i')).addClass('me-1 bi bi-' + properties.icon).prependTo(content.header.title);
        content.body = $(document.createElement('div')).addClass('card-body').appendTo(content);
        content.form = $(document.createElement('form')).attr({
            'class': 'card-body',
            'method': 'post',
            'autocomplete': 'off',
        }).appendTo(content);
        content.form.inputs = $(document.createElement('div')).appendTo(content.form);
        content.form.submit = $(document.createElement('button')).attr({
            'class': 'btn btn-success w-100',
            'type': 'submit',
        }).text('Save').appendTo(content.form);
        content.form.submit.icon = $(document.createElement('i')).addClass('bi bi-save me-1').prependTo(content.form.submit);
        this.#forms[content.id] = {};
        content.form.val = function(values = null){
            // Set Values
            if(typeof values === 'object'){
                for(const [key, value] of Object.entries(values)){
                    if(typeof self.#forms[content.id][key] !== 'undefined'){
                        self.#forms[content.id][key].val(value);
                    }
                }
            }

            // Retrieve Values
            values = {};
            for(const [key, input] of Object.entries(self.#forms[content.id])){
                values[key] = input.val();
            }

            // Return
            return values;
        };
        content.form.add = function(param1, param2 = null){
    
            let selector = content.form.inputs;
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
    
            // Increment Count
            self.#count++;
    
            // Create Field
            let field = $(document.createElement('div')).attr({
                'id': content.id + 'group' + self.#count,
                'class': 'input-group mb-3',
            }).appendTo(selector);
            field.id = field.attr('id');
            field.options = defaults;

            // Create Label
            field.label = $(document.createElement('label')).attr({
                'class': 'input-group-text',
                'for': field.id + 'input',
            }).text(defaults.label).appendTo(field);

            // Create Icon
            field.label.icon = $(document.createElement('i')).addClass('me-1 bi bi-' + defaults.icon).prependTo(field.label);

            // Create Input
            switch(defaults.type){
                case 'textarea':
                    field.input = $(document.createElement('textarea')).attr({
                        'id': field.id + 'input',
                        'class': 'form-control',
                        'name': defaults.name,
                        'autocomplete': 'off',
                    }).text(defaults.value).appendTo(field);
                    field.name = field.attr('name');
                    break;
                case 'select':
                    field.input = $(document.createElement('select')).attr({
                        'id': field.id + 'input',
                        'class': 'form-select',
                        'name': defaults.name,
                        'autocomplete': 'off',
                    }).appendTo(field);
                    if(defaults.options !== null){
                        for(const [key, option] of Object.entries(defaults.options)){
                            field.input.option = $(document.createElement('option')).attr('value',option.id).text(option.text).appendTo(field.input);
                        }
                    }
                    field.input.val(defaults.value);
                    field.name = field.attr('name');
                    break;
                default:
                    field.input = $(document.createElement('input')).attr({
                        'id': field.id + 'input',
                        'class': 'form-control',
                        'name': defaults.name,
                        'autocomplete': 'off',
                        'type': defaults.type,
                        'value': defaults.value,
                    }).appendTo(field);
                    field.name = field.attr('name');
                    break;
            }

            // Redirect Val method
            field.val = function(param1 = null){
                return field.input.val(param1);
            }

            // Store Input
            self.#forms[content.id][field.name] = field;
    
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

        // Prevent Default
        content.form.on('submit', function(e){
            e.preventDefault();
            // Callback
            if(typeof properties.submit === 'function'){
                properties.submit(content.form);
            }
        });

        // Create Menu Item
        var item = $(document.createElement('li')).attr({
            'id': category.id + 'item' + this.#count,
            'class': 'list-group-item item user-select-none cursor-pointer',
            'data-bs-toggle': 'collapse',
            'data-bs-target': '#' + content.id,
            'style': 'transition: all 300ms ease 0s;',
        }).appendTo(category.menu.list);
        item.id = item.attr('id');
        item.properties = properties;
        item.flex = $(document.createElement('div')).addClass('d-flex align-items-center').appendTo(item);
        item.flex.icon = $(document.createElement('div')).addClass('flex-shrink-1 px-1').appendTo(item.flex);
        item.flex.icon.i = $(document.createElement('i')).addClass('bi bi-' + properties.icon).appendTo(item.flex.icon);
        item.flex.label = $(document.createElement('div')).addClass('flex-grow-1 px-1 text-break').text(properties.label).appendTo(item.flex);

        // Check for an icon
        if(properties.icon == null){
            content.header.title.icon.remove();
            item.flex.icon.remove();
        }

        // Check for a body
        if(!properties.body){
            content.body.remove();
        }

        // Check for a form
        if(!properties.form){
            content.form.remove();
        }

        // Check for classes to add
        if(properties.class){
            content.addClass(properties.class);
        }

        // Open first item
        if(this.#layout.content.accordion.children().length > 0){
            var first = this.#layout.content.accordion.children().first();
            first.addClass('show');
            this.#layout.menu.find('[data-bs-target="#'+first.attr('id')+'"]').addClass('active');
        }

        // Add Event Listener
        content.on('show.bs.collapse', function(){
            // Clear Active
            self.#layout.menu.find('.active').removeClass('active');
            // Set Active
            self.#layout.menu.find('[data-bs-target="#'+content.id+'"]').addClass('active');
        });

        if(typeof callback === "function"){
            callback(item,content,self);
        }

        // Return
        return this;
    }

    appendTo(object){
        
        // Append Object To
        this.#layout.appendTo(object);

        // Return Object
        return this;
    }

    prependTo(object){
        
        // Prepend Object To
        this.#layout.prependTo(object);

        // Return Object
        return this;
    }

    append(object){
        
        // Append Object
        this.#layout.append(object);

        // Return Object
        return this;
    }

    prepend(object){
        
        // Prepend Object
        this.#layout.prepend(object);

        // Return Object
        return this;
    }

    html(){

        // Return Object
        return this.#layout.html();
    }

    text(){

        // Return Object
        return this.#layout.text();
    }

    outerHTML(){

        // Return Object
        return this.#layout[0].outerHTML;
    }

    show(){

        // Show Object
        this.#layout.show();

        // Return Object
        return this;
    }

    hide(){

        // Hide Object
        this.#layout.hide();

        // Return Object
        return this;
    }
}