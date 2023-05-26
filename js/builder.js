// Builder
// Constants and Variables
var builderCount = 0;

// Utilities
// Gravatar
class Gravatar {

    #options = {
        extension: false, //in request
        size: false, //s
        default: 'mp', //d
        force: false, //f
        rating: false, //r
    };
    #extensions = ['jpg','jpeg','png','gif'];
    #defaults = ['404','mp','identicon','monsterid','wavatar','retro','robohash','blank'];
    #ratings = ['g','pg','r','x'];
    #api = 'https://www.gravatar.com/avatar/';
    #url = null;

	constructor(param1 = null, param2 = null){

        // Set Self
        const self = this;

        let email = null;
        let options = {};

        // Set email, options, and callback
        [param1, param2].forEach(param => {
            if(param !== null){
                if (typeof param === 'string' || param instanceof jQuery) {
                    email = param;
                } else if (typeof param === 'object') {
                    options = param;
                }
            }
        });

        // Configure Options
        this.config(options);

        // Set URL
		this.#url = this.#api + md5(email);

        // Configure URL
		for(const [key, value] of Object.entries(this.#options)){
			if(value){
				switch(key){
					case"extension":
						if(inArray(value,this.#extensions)){
							this.#url += '.' + value
						}
						break;
					case"size":
						if(this.#url.toLowerCase().indexOf("?") >= 0){
							this.#url +=  '&s=' + parseInt(value)
						} else {
							this.#url +=  '?s=' + parseInt(value)
						}
						break;
					case"default":
						if(inArray(value,this.#defaults)){
							if(this.#url.toLowerCase().indexOf("?") >= 0){
								this.#url +=  '&d=' + value
							} else {
								this.#url +=  '?d=' + value
							}
						}
						break;
					case"force":
						if(this.#url.toLowerCase().indexOf("?") >= 0){
							this.#url +=  '&f=y'
						} else {
							this.#url +=  '?f=y'
						}
						break;
					case"rating":
						if(inArray(value,this.#ratings)){
							if(this.#url.toLowerCase().indexOf("?") >= 0){
								this.#url +=  '&r=' + value
							} else {
								this.#url +=  '?r=' + value
							}
						}
						break;
				}
			}
		}
    }

    config(options = {}){

        // Configure Options
        for(const [key, value] of Object.entries(options)){
            if(typeof this.#options[key] !== 'undefined'){
                switch(key){
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

	url(){
		
        // Return URL
		return this.#url
	}
}
// Search
class UtilitySearch {

	#field = null

	constructor(){

        // Set Search Field
		this.#field = $('#search');
	}

	get(){

        // Return Search Field
		return this.#field;
	}

	set(object){

        // Set object as Object
		if(typeof object === 'string'){
			object = $(object);
		}

        // Set Search Attribute
		if(typeof object === 'object' && object != null){
			object.attr('data-search',object.text().toString().toUpperCase());
		}
	}

	add(object){

        // Set object as Object
		if(typeof object === 'string'){
			object = $(object);
		}

        // Add Search Event
		if(typeof object === 'object' && object != null){
			this.#field.keyup(function(){
				if($(this).val() !== ''){
                    object.find('[data-search]').hide();
                    object.find('[data-search*="'+$(this).val().toString().toUpperCase()+'"]').show();
				} else {
					object.find('[data-search]').show();
				}
			});
		}
	}
}
const Search = new UtilitySearch();

// Components
// Dropdown
class Dropdown {

    #object = null;
    #options = {
        class: {
            object: null,
            button: null,
            menu: null,
        },
        icon: null,
        label: null,
    };

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

        // Create Object
		this.#object = $(document.createElement('div')).addClass('dropdown').attr('id','dropdown' + builderCount);
        this.#object.id = this.#object.attr('id');

        // Create Button
        this.#object.btn = $(document.createElement('button')).addClass('btn btn-link').attr('type','button').attr('data-bs-toggle','dropdown').attr('aria-expanded','false').appendTo(this.#object);
        this.#object.btn.icon = $(document.createElement('i')).addClass('bi').appendTo(this.#object.btn);
        this.#object.btn.label = $(document.createElement('span')).appendTo(this.#object.btn);
        this.#object.menu = $(document.createElement('ul')).addClass('dropdown-menu').appendTo(this.#object);

        // Set Object Class
        if(this.#options.class.object){
            this.#object.addClass(this.#options.class.object);
        }

        // Set Menu Class
        if(this.#options.class.menu){
            this.#object.menu.addClass(this.#options.class.menu);
        }

        // Set Button Class
        if(this.#options.class.button){
            this.#object.btn.addClass(this.#options.class.button);
        }

        // Set Button Icon
        if(this.#options.icon){
            this.#object.btn.icon.addClass('bi-' + this.#options.icon);
        }

        // Set Button Label
        if(this.#options.label){
            this.#object.btn.label.text(this.#options.label);
            this.#object.btn.icon.addClass('me-1');
        }

        // Execute Callback
        if(typeof callback === 'function'){
            callback(this);
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

    item(param1 = null, param2 = null){

        // Set Self
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

        let defaults = {
            class: {
                item: null, //string
                button: null, //string
                label: null, //string
            },
            link: null, //string
            icon: null, //string
            label: null, //string
            visible: null, //function
            click: null, //function
        };

        // Configure Options
        for(const [key, value] of Object.entries(options)){
            if(typeof defaults[key] !== 'undefined'){
                switch(key){
                    case"class":
                        for(const [section, classes] of Object.entries(value)){
                            if(defaults[key][section] != null){
                                defaults[key][section] += ' ' + classes;
                            } else {
                                defaults[key][section] = classes;
                            }
                        }
                        break;
                    default:
                        defaults[key] = value;
                        break;
                }
            }
        }

        // Create Item
        var item = $(document.createElement('li')).appendTo(this.#object.menu);

        // Save Item options
        item.options = defaults;

        // Set Item Link/Button
        if(item.options.link != null){
            item.btn = $(document.createElement('a')).attr('href',item.options.link).addClass('dropdown-item').appendTo(item);
        } else {
            item.btn = $(document.createElement('button')).attr('type','button').addClass('dropdown-item').appendTo(item);
        }
        
        // Set Item Icon
        item.icon = $(document.createElement('i')).addClass('me-1 bi').appendTo(item.btn);
        if(item.options.icon != null){
            item.icon.addClass('bi-' + item.options.icon);
        }
        
        // Set Item Label
        item.label = $(document.createElement('span')).appendTo(item.btn);
        if(item.options.label != null){
            item.label.text(item.options.label);
        }

        // Set Item Class
        if(item.options.class.item){
            item.addClass(item.options.class.item);
        }

        // Set Button Class
        if(item.options.class.button){
            item.btn.addClass(item.options.class.button);
        }

        // Set Label Class
        if(item.options.class.label){
            item.label.addClass(item.options.class.label);
        }

        // Set Item Visibility
        if(item.options.visible !== null){
            if(typeof item.options.visible === 'function'){
                if(!item.options.visible()){
                    item.hide();
                }
            } else if(typeof item.options.visible === 'boolean'){
                if(!item.options.visible){
                    item.hide();
                }
            }
        }

        // Set Item Click Event
        if(item.options.click !== null){
            if(typeof item.options.click === 'function'){
                item.btn.click(function(){
                    item.options.click(item,self);
                });
            }
        }

        // Execute Callback
        if(typeof callback === 'function'){
            callback(item,this);
        }

        // Return Object
        return this;
    }

    seperator(){

        // Set Self
        const self = this;

        // Create Seperator
        var seperator = $(document.createElement('li')).appendTo(this.#object.menu);
        seperator.hr = $(document.createElement('hr')).addClass('dropdown-divider').appendTo(seperator);

        // Return Object
        return this;
    }

    appendTo(object){
        
        // Append Object To
        this.#object.appendTo(object);

        // Return Object
        return this;
    }

    prependTo(object){
        
        // Prepend Object To
        this.#object.prependTo(object);

        // Return Object
        return this;
    }

    append(object){
        
        // Append Object
        this.#object.append(object);

        // Return Object
        return this;
    }

    prepend(object){
        
        // Prepend Object
        this.#object.prepend(object);

        // Return Object
        return this;
    }
}

// Progress Bar
class Progress {

    #progress = null;
    #bar = null;
    #options = {
        class: {
            progress: null,
            bar: null,
            label: null,
        },
        size: null,
        color: null,
        striped: true,
        animated: true,
        label: null,
        scale: 100,
    };

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

        // Create Progress Bar
		this.#progress = $(document.createElement('div')).attr('id','progress' + builderCount).addClass('progress');

        // Create Progress Bar
		this.#bar = $(document.createElement('div')).addClass('progress-bar').appendTo(this.#progress);
		this.#bar.label = $(document.createElement('span')).addClass('progress-label').appendTo(this.#bar);

        // Set Progress Class
        if(this.#options.class.progress){
            this.#progress.addClass(this.#options.class.progress);
        }

        // Set Bar Class
        if(this.#options.class.bar){
            this.#bar.addClass(this.#options.class.bar);
        }

        // Set Label Class
        if(this.#options.class.label){
            this.#bar.label.addClass(this.#options.class.label);
        }

        // Set Size
        if(this.#options.size){
            this.#progress.css({height:this.#options.size});
        }

        // Set Color
        if(this.#options.color){
            this.#bar.addClass('text-bg-' + this.#options.color);
        }

        // Set Striped
        if(this.#options.striped){
            this.#bar.addClass('progress-bar-striped');
        }

        // Set Animated
        if(this.#options.animated){
            this.#bar.addClass('progress-bar-animated');
        }

        // Set Label
        if(this.#options.label){
            this.#bar.label.html(this.#options.label);
        }

        // Execute Callback
        if(typeof callback === 'function'){
            callback(this,this.#progress,this.#bar);
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

    appendTo(object){
        
        // Append Object To
        this.#progress.appendTo(object);

        // Return Object
        return this;
    }

    prependTo(object){
        
        // Prepend Object To
        this.#progress.prependTo(object);

        // Return Object
        return this;
    }

    append(object){
        
        // Append Object
        this.#progress.append(object);

        // Return Object
        return this;
    }

    prepend(object){
        
        // Prepend Object
        this.#progress.prepend(object);

        // Return Object
        return this;
    }

    set(value){

        // Set Scale
        this.#bar.attr('aria-valuemin',0).attr('aria-valuemax',this.#options.scale);

        // Calculate Value
        value = Math.round((value / this.#options.scale) * 100);

        // Set Value
        this.#bar.css({width:value + '%'}).attr('aria-valuenow',value);

        // Set Label
        if(this.#options.label){
            this.#bar.label.html(this.#options.label.replace('{progress}', value).replace('{percent}', value + '%').replace('{scale}', this.#options.scale));
        }

        // Return Object
        return this;
    }
}

// Modal
class Modal {

    #object = null;
    #bootstrap = null;
    #options = {
        class: {
            modal: null,
            dialog: null,
            content: null,
            header: null,
            body: null,
            footer: null,
        },
        callback: {
            submit: null,
            cancel: null,
            fullscreen: null,
            close: null,
            onShow: null,
            onHide: null,
        },
        onEnter: true,
        close:true,
        fullscreen:true,
        destroy:false,
        icon:null,
        title: null,
        body: null,
        static: false,
        cancel: true,
        submit: true,
        center: false,
        size: 'none',
    };

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

        // Create Object
		this.#object = $(document.createElement('div')).attr('id','modal' + builderCount).attr('tabindex','-1').addClass('modal fade').prependTo('body');
        this.#object.id = this.#object.attr('id');

        // Create Dialog
        this.#object.dialog = $(document.createElement('div')).addClass('modal-dialog').appendTo(this.#object);

        // Create Content
        this.#object.dialog.content = $(document.createElement('div')).addClass('modal-content').appendTo(this.#object.dialog);

        // Create Header
        this.#object.dialog.content.header = $(document.createElement('div')).addClass('modal-header').appendTo(this.#object.dialog.content);

        // Create Title
        this.#object.dialog.content.header.title = $(document.createElement('h5')).addClass('modal-title').appendTo(this.#object.dialog.content.header);
        this.#object.dialog.content.header.title.icon = $(document.createElement('i')).addClass('me-1 bi').appendTo(this.#object.dialog.content.header.title);
        this.#object.dialog.content.header.title.label = $(document.createElement('span')).appendTo(this.#object.dialog.content.header.title);

        // Create Tools
        this.#object.dialog.content.header.tools = $(document.createElement('div')).addClass('btn-group').appendTo(this.#object.dialog.content.header);

        // Create FullScreen Button
        this.#object.dialog.content.header.tools.fullscreen = $(document.createElement('button')).attr('type','button').addClass('btn btn-lg btn-link').html('<i class="bi-fullscreen"></i>').attr('data-bs-toggle','modal-fullscreen').attr('data-bs-target','#' + this.#object.id).attr('aria-label','Fullscreen').appendTo(this.#object.dialog.content.header.tools);

        // Create Close Button
        this.#object.dialog.content.header.tools.close = $(document.createElement('button')).attr('type','button').addClass('btn btn-lg btn-link').html('<i class="bi-x-lg"></i>').attr('data-bs-dismiss','modal').attr('aria-label','Close').appendTo(this.#object.dialog.content.header.tools);

        // Create Body
        this.#object.dialog.content.body = $(document.createElement('div')).addClass('modal-body').appendTo(this.#object.dialog.content);

        // Create Footer
        this.#object.dialog.content.footer = $(document.createElement('div')).addClass('modal-footer p-0').appendTo(this.#object.dialog.content);

        // Create Submit Button
        this.#object.dialog.content.footer.submit = $(document.createElement('button')).attr('type','button').addClass('btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end').text('Save changes').appendTo(this.#object.dialog.content.footer);

        // Create Cancel Button
        this.#object.dialog.content.footer.cancel = $(document.createElement('button')).attr('type','button').addClass('btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0').attr('data-bs-dismiss','modal').text('Cancel').appendTo(this.#object.dialog.content.footer);

        // Set Size
        if(this.#options.size != null && typeof this.#options.size === 'string'){
            switch(this.#options.size){
                case"small":
                case"sm":
                    this.#object.dialog.addClass('modal-sm')
                    break
                case"default":
                case"none":
                    break
                case"large":
                case"lg":
                    this.#object.dialog.addClass('modal-lg')
                    break
                case"extra-large":
                case"xl":
                    this.#object.dialog.addClass('modal-xl')
                    break
                case"xxl":
                case"fullscreen":
                    this.#object.dialog.addClass('modal-fullscreen')
                    break
            }
        }

        // Set Center
        if(this.#options.center != null && typeof this.#options.center === 'boolean' && this.#options.center){
            this.#object.dialog.addClass('modal-dialog-centered');
        }

        // Set Static
        if(this.#options.static != null && typeof this.#options.static === 'boolean' && this.#options.static){
            this.#object.attr('data-bs-backdrop','static').attr('data-bs-keyboard',false);
        }

        // Set Icon
        if(this.#options.icon != null){
            this.#object.dialog.content.header.title.icon.addClass('bi-' + this.#options.icon);
        } else {
            this.#object.dialog.content.header.title.icon.addClass('d-none');
        }

        // Set Title
        if(this.#options.title != null){
            this.#object.dialog.content.header.title.label.html(this.#options.title);
        }

        // Set Body
        if(this.#options.body != null){
            this.#object.dialog.content.body.html(this.#options.body);
        }

        // Set Modal Class
        if(this.#options.class.modal){
            this.#object.addClass(this.#options.class.modal);
        }

        // Set Dialog Class
        if(this.#options.class.dialog){
            this.#object.dialog.addClass(this.#options.class.dialog);
        }

        // Set Content Class
        if(this.#options.class.content){
            this.#object.dialog.content.addClass(this.#options.class.content);
        }

        // Set Header Class
        if(this.#options.class.header){
            this.#object.dialog.content.header.addClass(this.#options.class.header);
        }

        // Set Body Class
        if(this.#options.class.body){
            this.#object.dialog.content.body.addClass(this.#options.class.body);
        }

        // Set Footer Class
        if(this.#options.class.footer){
            this.#object.dialog.content.footer.addClass(this.#options.class.footer);
        }

        // Initialize Bootstrap Modal
        this.#bootstrap = new bootstrap.Modal(this.#object);

        // Destroy
        if(this.#options.destroy){
            this.#object.on('hide.bs.modal',function(){
                $(this).remove();
            });
        }

        // onEnter
        if(this.#options.onEnter){
            this.#object.on('keypress',function(e){
                if(e.which == 13) {
                    self.#object.dialog.content.footer.submit.click();
                }
            });
        }

        // Fullscreen
        if(this.#options.fullscreen){
            this.#object.dialog.content.header.tools.fullscreen.click(function(){
                if(self.#object.dialog.hasClass('modal-fullscreen')){
                    self.#object.dialog.removeClass('modal-fullscreen');
                    self.#object.dialog.content.header.tools.fullscreen.html('<i class="bi-fullscreen"></i>');
                } else {
                    self.#object.dialog.addClass('modal-fullscreen');
                    self.#object.dialog.content.header.tools.fullscreen.html('<i class="bi-fullscreen-exit"></i>');
                }
            });
        } else {
            this.#object.dialog.content.header.tools.fullscreen.addClass('d-none');
        }

        // Close
        if(!this.#options.close){
            this.#object.dialog.content.header.tools.close.addClass('d-none');
        }

        // Callback Function on Show
        if(typeof this.#options.callback.onShow === 'function'){
            this.#object.on('show.bs.modal',function(){
                self.#options.callback.onShow(self.#object,self);
            });
        }

        // Callback Function on Hide
        if(typeof this.#options.callback.onHide === 'function'){
            this.#object.on('hide.bs.modal',function(){
                self.#options.callback.onHide(self.#object,self);
            });
        }

        // Callback Function on Close
        if(typeof this.#options.callback.close === 'function'){
            this.#object.dialog.content.header.tools.close.click(function(){
                self.#options.callback.close(self.#object,self);
            });
        }

        // Callback Function on Fullscreen
        if(typeof this.#options.callback.fullscreen === 'function'){
            this.#object.dialog.content.header.tools.fullscreen.click(function(){
                self.#options.callback.fullscreen(self.#object,self);
            });
        }

        // Callback Function on Cancel
        if(typeof this.#options.callback.cancel === 'function'){
            this.#object.dialog.content.footer.cancel.click(function(){
                self.#options.callback.cancel(self.#object,self);
            });
        }

        // Callback Function on Submit
        if(typeof this.#options.callback.submit === 'function'){
            this.#object.dialog.content.footer.submit.click(function(){
                self.#options.callback.submit(self.#object,self);
            });
        }

        // Execute Callback
        if(typeof callback === 'function'){
            callback(this.#object,this);
        }

        // Check if Selector is Set
        if(selector != null){

            // Convert string selector to jQuery object
            if (typeof selector === 'string') {
                selector = $(selector);
            }

            // Add Click Event to Selector
            selector.click(function(){
                self.show();
            });
        }
    }

    config(options = {}){

        // Configure Options
        for(const [key, value] of Object.entries(options)){
            if(typeof this.#options[key] !== 'undefined'){
                switch(key){
                    case"callback":
                        for(const [eventName, callback] of Object.entries(value)){
                            if(typeof this.#options[key][eventName] !== 'undefined'){
                                this.#options[key][eventName] = callback;
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

    show(){
        this.#bootstrap.show();
    }

    hide(){
        this.#bootstrap.hide();
    }

    toggle(){
        this.#bootstrap.toggle();
    }
}

// Card
class Card {

    #card = null;
    #options = {
        class: {
            container: null,
            card: null,
            header: null,
            body: null,
            footer: null,
        },
        icon: null,
        title: null,
        body: null,
        footer: null,
        stretch: false,
        hideHeader: false,
        hideFooter: true,
        close:true,
        fullscreen: true,
        collapse: true,
        collapsed: false,
    };

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

        // Create Card
		this.#card = $(document.createElement('div')).attr('id','card' + builderCount).addClass('card');
		this.#card.id = this.#card.attr('id');

        // Set Card Class
        if(self.#options.class.card){
            this.#card.addClass(self.#options.class.card);
        }

        // Create Collapse
		this.#card.collapse = $(document.createElement('div')).addClass('collapse show').attr('id',this.#card.id + 'collapse').append(this.#card);
		this.#card.collapse.id = this.#card.collapse.attr('id');

        // Set Container Class
        if(self.#options.class.container){
            this.#card.collapse.addClass(self.#options.class.container);
        }

        // Create Card Header
		this.#card.header = $(document.createElement('div')).addClass('card-header user-select-none').attr('id',this.#card.id + 'header').appendTo(this.#card);
		this.#card.header.id = this.#card.header.attr('id');

        // Set Card Header Class
        if(self.#options.class.header){
            this.#card.body.addClass(self.#options.class.header);
        }

        // Create Card Header Title
        this.#card.header.heading = $(document.createElement('h5')).addClass('card-title d-flex align-items-center').appendTo(this.#card.header);
		this.#card.header.icon = $(document.createElement('i')).appendTo(this.#card.header.heading);
		this.#card.header.title = $(document.createElement('span')).appendTo(this.#card.header.heading);

        // Configure Card Header
        if(self.#options.icon){
            this.#card.header.icon.addClass('me-2').addClass('bi-'+self.#options.icon);
        }
        if(self.#options.title){
            this.#card.header.title.html(self.#options.title);
        }
        if(self.#options.hideHeader){
            this.#card.header.addClass('d-none');
        }

        // Create Card Header Tools
		this.#card.tools = $(document.createElement('span')).addClass('ms-auto d-flex align-items-center').appendTo(this.#card.header.heading);
		this.#card.tools.collapse = $(document.createElement('a')).addClass('ms-3 text-decoration-none cursor-pointer').appendTo(this.#card.tools);
		this.#card.tools.collapse.icon = $(document.createElement('i')).addClass('bi-chevron-bar-contract').appendTo(this.#card.tools.collapse);
		this.#card.tools.fullscreen = $(document.createElement('a')).addClass('ms-3 text-decoration-none cursor-pointer').appendTo(this.#card.tools);
		this.#card.tools.fullscreen.icon = $(document.createElement('i')).addClass('bi-fullscreen').appendTo(this.#card.tools.fullscreen);
		this.#card.tools.close = $(document.createElement('a')).addClass('ms-3 text-decoration-none cursor-pointer').appendTo(this.#card.tools);
		this.#card.tools.close.icon = $(document.createElement('i')).addClass('bi-x-lg').appendTo(this.#card.tools.close);

        // Create Card Body
		this.#card.body = $(document.createElement('div')).addClass('card-body').attr('id',this.#card.id + 'body');
		this.#card.body.id = this.#card.body.attr('id');

        // Set Card Body Class
        if(self.#options.class.body){
            this.#card.body.addClass(self.#options.class.body);
        }

        // Create Card Body Collapse
		this.#card.body.collapse = $(document.createElement('div')).addClass('collapse show').attr('id',this.#card.body.id + 'collapse').appendTo(this.#card);
		this.#card.body.collapse.id = this.#card.body.collapse.attr('id');

        // Append Card Body to Card Body Collapse
		this.#card.body.appendTo(this.#card.body.collapse);

        // Configure Card Body
        if(self.#options.body){
            this.#card.body.html(self.#options.body);
        }

        // Create Card Footer
		this.#card.footer = $(document.createElement('div')).addClass('card-footer').attr('id',this.#card.id + 'footer').appendTo(this.#card);
		this.#card.footer.id = this.#card.footer.attr('id');

        // Set Card Footer Class
        if(self.#options.class.footer){
            this.#card.body.addClass(self.#options.class.footer);
        }

        // Configure Card Footer
        if(self.#options.hideFooter){
            this.#card.footer.addClass('d-none');
        }
        if(self.#options.footer){
            this.#card.footer.html(self.#options.footer);
        }

        // Configure Card
        if(self.#options.stretch){
            this.#card.collapse.addClass('h-100');
            this.#card.addClass('h-100');
            this.#card.body.collapse.addClass('h-100');
            this.#card.body.addClass('d-flex h-100 overflow-auto');
        }

        // Configure Card Tools
        // Close Button
        if(self.#options.close){
            this.#card.collapse.bs = new bootstrap.Collapse(this.#card.collapse,{toggle:false});
            this.#card.tools.close.click(function(){
                self.#card.collapse.bs.hide();
                self.#card.collapse.on('hidden.bs.collapse',function(){
                    self.#card.collapse.remove();
                });
            });
        } else {
            this.#card.tools.close.addClass('d-none');
        }
        // FullScreen Button
        if(self.#options.fullscreen){
        this.#card.css('transition','all 400ms ease');
        this.#card.body.css('transition','all 400ms ease');
        this.#card.body.collapse.css('transition','all 400ms ease');
        this.#card.tools.fullscreen.click(function(){
            if(self.#card.tools.fullscreen.icon.hasClass('bi-fullscreen')){
                self.#card.addClass('position-fixed top-0 start-0 w-100 h-100 rounded-0').css('z-index', 1050);
                self.#card.body.addClass('h-100');
                self.#card.body.collapse.addClass('h-100 overflow-auto');
                self.#card.tools.fullscreen.icon.removeClass('bi-fullscreen').addClass('bi-fullscreen-exit');
                if(self.#options.collapse){
                    self.#card.tools.collapse.addClass('d-none');
                }
                self.#card[0].style.setProperty('margin', '0px', 'important');
                self.#card[0].style.setProperty('padding', '0px', 'important');
                self.#card.collapse[0].style.setProperty('margin', '0px', 'important');
                self.#card.collapse[0].style.setProperty('padding', '0px', 'important');
            } else {
                self.#card.removeClass('position-fixed top-0 start-0 w-100 h-100 rounded-0').css('z-index', '');
                self.#card.body.removeClass('h-100');
                self.#card.body.collapse.removeClass('h-100 overflow-auto');
                self.#card.tools.fullscreen.icon.removeClass('bi-fullscreen-exit').addClass('bi-fullscreen');
                if(self.#options.collapse){
                    self.#card.tools.collapse.removeClass('d-none');
                }
                self.#card[0].style.setProperty('margin', '');
                self.#card[0].style.setProperty('padding', '');
                self.#card.collapse[0].style.setProperty('margin', '');
                self.#card.collapse[0].style.setProperty('padding', '');
            }
        });
        } else {
            this.#card.tools.fullscreen.addClass('d-none');
        }
        // Collapse Button
        if(self.#options.collapse){
            this.#card.body.collapse.bs = new bootstrap.Collapse(this.#card.body.collapse,{toggle:false});
            this.#card.tools.collapse.click(function(){
                if(self.#card.tools.collapse.icon.hasClass('bi-chevron-bar-expand')){
                    self.#card.body.collapse.bs.show();
                    self.#card.tools.collapse.icon.removeClass('bi-chevron-bar-expand').addClass('bi-chevron-bar-contract');
                    if(self.#options.hideFooter && !self.#options.hideHeader){
                        self.#card.header.removeClass('rounded border-0');
                    }
                    if(!self.#options.hideFooter && !self.#options.hideHeader){
                        self.#card.footer.removeClass('border-0');
                    }
                } else {
                    self.#card.body.collapse.bs.hide()
                    self.#card.tools.collapse.icon.removeClass('bi-chevron-bar-contract').addClass('bi-chevron-bar-expand');
                    if(self.#options.hideFooter && !self.#options.hideHeader){
                        self.#card.header.addClass('rounded border-0');
                    }
                    if(!self.#options.hideFooter && !self.#options.hideHeader){
                        self.#card.footer.addClass('border-0');
                    }
                }
            });
        } else {
            this.#card.tools.collapse.addClass('d-none');
        }
        if(self.#options.collapsed){
            this.#card.body.collapse.removeClass('show');
            this.#card.tools.collapse.icon.removeClass('bi-chevron-bar-contract').addClass('bi-chevron-bar-expand');
            if(self.#options.hideFooter && !self.#options.hideHeader){
                this.#card.header.addClass('rounded border-0');
            }
            if(!self.#options.hideFooter && !self.#options.hideHeader){
                this.#card.footer.addClass('border-0');
            }
        }

        // Execute Callback
        if(typeof callback === 'function'){
            callback(this.#card);
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

    appendTo(object){
        
        // Append Object To
        this.#card.collapse.appendTo(object);

        // Return Object
        return this;
    }

    prependTo(object){
        
        // Prepend Object To
        this.#card.collapse.prependTo(object);

        // Return Object
        return this;
    }

    append(object){
        
        // Append Object
        this.#card.collapse.append(object);

        // Return Object
        return this;
    }

    prepend(object){
        
        // Prepend Object
        this.#card.collapse.prepend(object);

        // Return Object
        return this;
    }
}

// List
class List {

    #list = null;
    #options = {
        class: {
            list: null,
        },
        callback: {
            tool: null,
            action: null,
            item: null,
            click: null,
            dblclick: null,
        },
        icon: null,
        tools:{},
        actions:{},
    };
    #tools = {};
    #actions = {};

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

        // Create List
		this.#list = $(document.createElement('ul')).attr('id','list' + builderCount).addClass('list-group list-group-flush');

        // Add List Class
		if(this.#options.class.list){
			this.#list.addClass(this.#options.class.list);
		}

        // Add Tools Container
        this.#list.start = $(document.createElement('li')).addClass('list-group-item user-select-none d-none').appendTo(this.#list);
        this.#list.start.container = $(document.createElement('div')).addClass('d-flex justify-content-center align-items-center').appendTo(this.#list.start);
        this.#list.tools = $(document.createElement('div')).addClass('btn-group w-100').appendTo(this.#list.start.container);

        // Add Tools
        if(typeof this.#options.tools !== 'undefined' && this.#options.tools){
            for(var [name, tool] of Object.entries(this.#options.tools)){
                tool.name = name
                self.tool(tool);
            }
        }

        // Execute Callback
        if(typeof callback === 'function'){
            callback(this);
        }

        // Add List to Search
	    Search.add(this.#list);

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
                    case"class":
                        for(const [section, classes] of Object.entries(value)){
                            if(this.#options[key][section] != null){
                                this.#options[key][section] += ' ' + classes;
                            } else {
                                this.#options[key][section] = classes;
                            }
                        }
                        break;
                    case"tools":
                    case"actions":
                        for(const [name, opts] of Object.entries(value)){
                            if(typeof this.#options[key][name] === 'undefined'){
                                this.#options[key][name] = opts;
                            }
                        }
                        break;
                    case"callback":
                        for(const [name, opts] of Object.entries(value)){
                            if(typeof this.#options[key][name] !== 'undefined'){
                                this.#options[key][name] = opts;
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

    item(param1 = null, param2 = null){

        // Set Self
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

        // Configure Options
        let defaults = {
            icon: null,
            field: null,
            click: null,
            dblclick: null,
        };
        for(const [key, value] of Object.entries(this.#options)){
            switch(key){
                case"callback":
                    for(const [name, opts] of Object.entries(value)){
                        if(typeof this.#options[key][name] !== 'undefined'){
                            this.#options[key][name] = opts;
                        }
                    }
                    break
                default:
                    if(typeof defaults[key] !== 'undefined'){
                        defaults[key] = value
                    }
                    break
            }
        }
        for(const [key, value] of Object.entries(options)){
            if(typeof defaults[key] !== 'undefined'){
                defaults[key] = value;
            }
        }

        // Create Item
		let item = $(document.createElement('li')).addClass('list-group-item user-select-none').css('transition','all 300ms ease 0s').appendTo(this.#list);

        // Save Options
        item.options = defaults;

        // Add Item Row
        item.container = $(document.createElement('div')).addClass('d-flex align-items-center').appendTo(item);

        // Add Item Icon
        if(defaults.icon){
            item.container.icon = $(document.createElement('div')).addClass('flex-shrink-1 px-1').appendTo(item.container);
            item.icon = $(document.createElement('i')).appendTo(item.container.icon);
            item.icon.addClass('bi-' + defaults.icon);
        }

        // Add Item Field
        item.field = $(document.createElement('div')).addClass('flex-grow-1 px-1 text-break').appendTo(item.container);

        // Add Item Field Content
        if(defaults.field){
            item.field.html(defaults.field);
        }

        // Add Item Actions
        item.actions = $(document.createElement('div')).addClass('flex-shrink-1 mx-1 btn-group d-none').appendTo(item.container);

        // Add Item Click and Double Click Events
        if(defaults.click || defaults.dblclick){

            // Add Item Cursor Pointer
            item.addClass('cursor-pointer')

            // Add Item Hover Effect
            item.hover(function(){
                item.addClass("text-bg-primary");
            }, function(){
                item.removeClass("text-bg-primary");
            });

            // Add Item Click Event
            if(defaults.click){
                item.field.click(function(){
                    defaults.click(item, self);
                });
                if(defaults.icon){
                    item.icon.click(function(){
                        defaults.click(item, self);
                    });
                }
            }

            // Add Item Double Click Event
            if(defaults.dblclick){
                item.field.dblclick(function(){
                    defaults.dblclick(item, self);
                });
                if(defaults.icon){
                    item.icon.dblclick(function(){
                        defaults.dblclick(item, self);
                    });
                }
            }
        }

        // Add Item Actions Function
        item.addAction = function(param1 = null, param2 = null){
            self.#action(item, param1, param2);
        }

        // Add Item Actions
        if(typeof self.#options.actions !== 'undefined' && self.#options.actions){
            for(var [name, action] of Object.entries(self.#options.actions)){
                action.name = name
                item.addAction(action);
            }
        }

        // Add List Callback
	    if(typeof this.#options.callback.item === 'function'){
            this.#options.callback.item(item,self);
	    }

        // Execute Callback
        if(typeof callback === 'function'){
            callback(item,self);
        }

        // Set Item Search
        Search.set(item);

        // Return Object
        return this;
    }

    tool(param1 = null, param2 = null){

        // Set Self
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

        // Configure Options
        let defaults = {
            icon: null,
            label: null,
            color: null,
            class: null,
            callback: null,
            name:null,
        };
        for(const [key, value] of Object.entries(options)){
            if(typeof defaults[key] !== 'undefined'){
                defaults[key] = value;
            }
        }

        // Show Tools
        this.#list.start.removeClass('d-none');

        // Create Tool
		let tool = $(document.createElement('button')).addClass('btn btn-light').appendTo(this.#list.tools);

        // Save Options
        tool.options = defaults;

        // Add Tool Name
        if(defaults.name){
            tool.attr('data-action',defaults.name);
            this.#tools[defaults.name] = tool;
        }

        // Add Tool Class
        if(defaults.class){
            tool.addClass(defaults.class)
        }

        // Add Tool Color
        if(defaults.color){
            tool.removeClass('btn-light').addClass('btn-' + defaults.color)
        }

        // Add Tool Icon
        if(defaults.icon){
            tool.icon = $(document.createElement('i')).addClass('bi-' + defaults.icon).appendTo(tool)
        }

        // Add Tool Label
        if(defaults.label){
            tool.label = $(document.createElement('span')).addClass('text-capitalize').html(defaults.label).appendTo(tool)
        }

        // Add Icon Spacing
        if(defaults.icon && defaults.label){
            tool.icon.addClass('me-2')
        }

        // Add Tool Callback
        tool.click(function(){
            if(typeof defaults.callback === 'function'){
                defaults.callback(tool)
            }
        });

        // Execute Callback
        if(typeof callback === 'function'){
            callback(tool,this);
        }

        // Return Object
        return this;
    }

    #action(item, param1 = null, param2 = null){

        // Set Self
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

        // Configure Options
        let defaults = {
            icon: null,
            label: null,
            color: null,
            class: null,
            callback: null,
            name:null,
        };
        for(const [key, value] of Object.entries(options)){
            if(typeof defaults[key] !== 'undefined'){
                defaults[key] = value;
            }
        }

        // Display Item Actions
        item.actions.removeClass('d-none');

        // Add Item Action
        let action = $(document.createElement('button')).addClass('btn btn-sm btn-light').appendTo(item.actions);

        // Save Options
        action.options = defaults;

        // Add Item Action Class
        if(defaults.class){
            action.addClass(defaults.class);
        }

        // Add Item Action Name
        if(defaults.name){
            action.attr('data-action',defaults.name);
            self.#actions[defaults.name] = action;
        }

        // Set Item Action Color
        if(defaults.color){
            action.removeClass('btn-light').addClass('btn-' + defaults.color);
        }

        // Add Item Action Icon
        if(defaults.icon){
            action.icon = $(document.createElement('i')).addClass('bi-' + defaults.icon).appendTo(action);
        }

        // Add Item Action Label
        if(defaults.label){
            action.label = $(document.createElement('span')).addClass('text-capitalize').html(defaults.label).appendTo(action)
        }

        // Add Icon Spacing
        if(defaults.icon && defaults.label){
            action.icon.addClass('me-2')
        }

        // Add Item Action Click Event
        action.click(function(){
            if(typeof defaults.callback === 'function'){
                defaults.callback(action,self);
            }
        });
        if(typeof self.#options.callback.action === 'function'){
            self.#options.callback.action(action,self);
        }

        // Execute Callback
        if(typeof callback === 'function'){
            callback(action,self);
        }

        // Return Object
        return this;
    }

    appendTo(object){
        
        // Append Object To
        this.#list.appendTo(object);

        // Return Object
        return this;
    }

    prependTo(object){
        
        // Prepend Object To
        this.#list.prependTo(object);

        // Return Object
        return this;
    }

    append(object){
        
        // Append Object
        this.#list.append(object);

        // Return Object
        return this;
    }

    prepend(object){
        
        // Prepend Object
        this.#list.prepend(object);

        // Return Object
        return this;
    }
}

// Box
class Box {

    #box = null;
    #options = {
        class: {
            box: null,
            iconFrame: null,
            content: null,
            link: null,
        },
        icon: 'circle',
        color: 'primary',
        type: 'info',
        link: null,
    };

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

        // Create Box
        switch(this.#options.type){
            case'small':
                this.#box = this.#small();
                break;
            case'info':
            default:
                this.#box = this.#info();
                break;
        }

        // Set Box ID
        this.#box.attr('id','box' + builderCount);
        this.#box.id = this.#box.attr('id');

        // Execute Callback
        if(typeof callback === 'function'){
            callback(this.#box);
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

    #info(){

        // Create Box
		var box = $(document.createElement('div')).addClass('card p-2');
        box.row = $(document.createElement('div')).addClass('d-flex justify-content-center align-items-center').appendTo(box);
        box.iconFrame = $(document.createElement('div')).addClass('d-flex justify-content-center align-items-center rounded').css({width:'64px',height:'64px'}).appendTo(box.row);
        box.iconFrame.icon = $(document.createElement('i')).addClass('bi fs-3').appendTo(box.iconFrame);
        box.content = $(document.createElement('div')).addClass('flex-grow-1 d-flex flex-column justify-content-center align-items-start ms-3').appendTo(box.row);

        // Set Box Icon
        if(this.#options.icon){
            box.iconFrame.icon.addClass('bi-' + this.#options.icon);
        }

        // Set Box Color
        if(this.#options.color){
            box.iconFrame.addClass('text-bg-' + this.#options.color);
        }

        // Set Box Class
        if(this.#options.class.box){
            box.addClass(this.#options.class.box);
        }

        // Set Box Icon Frame Class
        if(this.#options.class.iconFrame){
            box.iconFrame.addClass(this.#options.class.iconFrame);
        }

        // Set Box Content Class
        if(this.#options.class.content){
            box.content.addClass(this.#options.class.content);
        }

        // Return Box
        return box;
    }

    #small(){

        // Create Box
		var box = $(document.createElement('div')).addClass('card');
        box.row = $(document.createElement('div')).addClass('d-flex justify-content-between align-items-stretch px-2').appendTo(box);
        box.link = $(document.createElement('a')).addClass('text-center text-bg-black-25 w-100 p-1').appendTo(box);
        box.link.text = $(document.createElement('span')).text('More Info').appendTo(box.link);
        box.link.icon = $(document.createElement('i')).addClass('ms-1 bi bi-arrow-right-circle').appendTo(box.link.text);
        box.content = $(document.createElement('div')).addClass('p-2').appendTo(box.row);
        box.iconFrame = $(document.createElement('div')).appendTo(box.row);
        box.iconFrame.icon = $(document.createElement('i')).addClass('bi text-dark opacity-50').css({"font-size":"5rem"}).appendTo(box.iconFrame);

        // Set Box Icon
        if(this.#options.icon){
            box.iconFrame.icon.addClass('bi-' + this.#options.icon);
        }

        // Set Box Color
        if(this.#options.color){
            box.addClass('text-bg-' + this.#options.color);
        }

        // Set Box Class
        if(this.#options.class.box){
            box.addClass(this.#options.class.box);
        }

        // Set Box Icon Frame Class
        if(this.#options.class.iconFrame){
            box.iconFrame.addClass(this.#options.class.iconFrame);
        }

        // Set Box Content Class
        if(this.#options.class.content){
            box.content.addClass(this.#options.class.content);
        }

        // Set Box Link Class
        if(this.#options.class.link){
            box.link.addClass(this.#options.class.link);
        }

        // Set Box Link
        if(this.#options.link){
            box.link.attr('href',this.#options.link);
        } else {
            box.link.addClass('d-none');
        }

        // Return Box
        return box;
    }

    appendTo(object){
        
        // Append Object To
        this.#box.appendTo(object);

        // Return Object
        return this;
    }

    prependTo(object){
        
        // Prepend Object To
        this.#box.prependTo(object);

        // Return Object
        return this;
    }

    append(object){
        
        // Append Object
        this.#box.append(object);

        // Return Object
        return this;
    }

    prepend(object){
        
        // Prepend Object
        this.#box.prepend(object);

        // Return Object
        return this;
    }
}

// Timeline
class Timeline {

    #container = null;
    #timeline = null;
    #filters = null;
    #options = {
        class: {
            timeline: null,
            item: null,
            icon: null,
            object: null,
            filters: null,
            container: null,
        },
        order: 'DESC',
        showNow: true,
        showStart: true,
        defaults: {
            icon: 'circle',
			color: 'secondary',
			type: '',
			datetime: null,
			order: null,
			label: true,
			id:null,
			class: {
                item: null,
                icon: null,
                object: null,
			},
        },
    };

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

        // Create Container
		this.#container = $(document.createElement('div')).attr('id','timeline' + builderCount);

        // Set ID
		this.#container.id = this.#container.attr('id');

        // Add Classes to Container
        if(this.#options.class.container){
			this.#container.addClass(this.#options.class.container);
		}

        // Create Filters
		this.#filters = $(document.createElement('div')).addClass('btn-group').attr('data-filters','').attr('role','group').attr('aria-label','Filters').appendTo(this.#container);

        // Add Classes to Filters
        if(this.#options.class.filters){
			this.#filters.addClass(this.#options.class.filters);
		}

        // Add All Filter
		this.#filters.all = $(document.createElement('button')).addClass('btn btn-primary text-capitalize').html('all').attr('data-type',null).attr('data-label','all').attr('type','button').appendTo(this.#filters)
		this.#filters.all.click(function(){
			self.#filters.attr('data-filters','');
			self.filter();
		});

        // Create Timeline
		this.#timeline = $(document.createElement('div')).addClass('timeline').appendTo(this.#container);

        // Add Classes to Timeline
        if(this.#options.class.timeline){
			this.#timeline.addClass(this.#options.class.timeline);
		}

        // Clear Timeline
		this.clear();

        // Add Search to Timeline
		Search.add(this.#timeline);

        // Execute Callback
        if(typeof callback === 'function'){
            callback(this);
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
                        for(const [k, v] of Object.entries(value)){
                            if(typeof this.#options[key][k] !== 'undefined'){
                                switch(k){
                                    case"class":
                                        for(const [section, classes] of Object.entries(v)){
                                            if(this.#options[key][k][section] != null){
                                                this.#options[key][k][section] += ' ' + classes;
                                            } else {
                                                this.#options[key][k][section] = classes;
                                            }
                                        }
                                        break;
                                    default:
                                        this.#options[key][k] = v;
                                        break;
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

    appendTo(object){
        
        // Append Object To
        this.#container.appendTo(object);

        // Return Object
        return this;
    }

    prependTo(object){
        
        // Prepend Object To
        this.#container.prependTo(object);

        // Return Object
        return this;
    }

    append(object){
        
        // Append Object
        this.#container.append(object);

        // Return Object
        return this;
    }

    prepend(object){
        
        // Prepend Object
        this.#container.prepend(object);

        // Return Object
        return this;
    }

	clear(){

        // Remove Children
		this.#timeline.children().remove();

        // Show Start
        if(this.#options.showStart){
            this.create({order:'0000000000000',icon:'clock-history',label: false},function(object){
                object.item.remove();
                object.removeAttr('data-search').removeAttr('data-type');
            });
        }

        // Show Now
        if(this.#options.showNow){
            this.create({order:'9999999999999',color:'success',icon:'clock',label: false},function(object){
                object.item.remove();
                object.removeAttr('data-search').removeAttr('data-type');
            });
        }

        // Return Object
        return this;
	}

	sort(order = null){

        // Set Order
        if(order == null){
            order = this.#options.order;
        }

        // Sanitize Order
        if(order != 'ASC' && order != 'DESC'){
            order = 'DESC';
        }

        // Retrieve Objects
		let objects = this.#timeline.children('div').detach().get();

        // Sort Objects
		objects.sort(function(a, b){
			if(order == 'ASC'){
				return new Date($(a).data('order')) - new Date($(b).data('order'));
			} else {
				return new Date($(b).data('order')) - new Date($(a).data('order'));
			}
		});

        // Append Objects
		this.#timeline.append(objects)

        // Return Object
        return this;
	}

    filter(){
        this.#filters.find('button').removeClass('btn-primary').addClass('btn-light');
        let current = this.#filters.attr('data-filters').split(',');
        if(this.#filters.attr('data-filters') != ''){
            this.#timeline.find('[data-type]').hide();
            for(const [key, filter] of Object.entries(current)){
                this.#filters.find('button[data-type="' + filter + '"]').addClass('btn-primary').removeClass('btn-light');
                this.#timeline.find('[data-type="' + filter + '"]').show();
            }
        } else {
            this.#timeline.find('[data-type]').show();
            this.#filters.find('button[data-label="all"]').addClass('btn-primary').removeClass('btn-light');
        }
    }

    addFilter(type = '', string = null){

        // Set Self
        const self = this;

        // Set Label
        var label = string;
        if(label == null && type != ''){
        	label = type;
        }

        // Check if Filter Exists
        if(label != null && this.#filters.children('[data-label="' + label + '"]').length <= 0){

            // Create Filter
            var filter = $(document.createElement('button')).addClass('btn btn-light text-capitalize').html(label).attr('data-type',type).attr('data-label',label).attr('type','button').appendTo(this.#filters);

            // Add Filter Event
            filter.click(function(){

                // Get Current Filters
                var current = self.#filters.attr('data-filters').split(',')
                if(inArray(type,current)){
                    current = current.filter(function(value){
                        return value != type;
                    });
                } else {
                    current.push(type);
                }
                let filterString = current.toString();
                if(filterString.charAt(0) == ','){
                    filterString = filterString.substring(1);
                }
                self.#filters.attr('data-filters',filterString);
                self.filter();
            });
        }
    }

	label(timestamp, color = 'primary'){

        // Sanitize Timestamp
		let datetime = new Date(timestamp);

        // Set Order
		let order = datetime.setHours(0,0,0,0);

        // Check if Label Exists
		if(this.#timeline.find('div.time-label[data-order="'+order+'"]').length > 0){

            // Return Object
			return this;
		}

        // Create Label
		var label = $(document.createElement('div')).addClass('time-label').attr('data-order',order).prependTo(this.#timeline);
		label.time = $(document.createElement('span')).addClass('text-bg-'+color).html(datetime.toLocaleDateString('en-US',{day: 'numeric', month: 'long', year: 'numeric'})).attr('title',datetime.toLocaleString('en-US')).attr('data-bs-placement','right').appendTo(label);

        // Return Object
        return this;
	}

	create(options = {}, callback = null){

        // Check if options is a Function
		if(options instanceof Function){ callback = options; options = {}; }

        // Create Defaults Options
        let defaults = {};
        for(const [key, value] of Object.entries(this.#options.defaults)){
            if(typeof defaults[key] === 'undefined'){
                switch(key){
                    case"datetime":
                        defaults[key] = Date.parse(new Date());
                        break;
                    case"class":
                        defaults[key] = {};
                        for(const [section, classes] of Object.entries(value)){
                            if(defaults[key][section] != null){
                                defaults[key][section] += ' ' + classes;
                            } else {
                                defaults[key][section] = classes;
                            }
                        }
                        break;
                    default:
                        defaults[key] = value;
                        break;
                }
            }
        }

        // Set Options
        for(const [key, value] of Object.entries(options)){
            if(typeof defaults[key] !== 'undefined'){
                switch(key){
                    case"class":
                        for(const [section, classes] of Object.entries(value)){
                            if(defaults[key][section] != null){
                                defaults[key][section] += ' ' + classes;
                            } else {
                                defaults[key][section] = classes;
                            }
                        }
                        break;
                    default:
                        defaults[key] = value;
                        break;
                }
            }
        }

        // Increment Count
        builderCount++;

        // Create Timeline
		var object = $(document.createElement('div')).attr('id','timelineObject' + builderCount).addClass('timeline-object').appendTo(this.#timeline);

        // Set ID
		if(defaults.id != null){
			object.attr('data-id',defaults.id)
		}
		object.id = object.attr('id');

        // Set Options
        object.options = defaults;

        // Set object Class
		if(this.#options.class.object){
			object.addClass(this.#options.class.object);
		}
		if(defaults.class.object){
			object.addClass(defaults.class.itobjectem);
		}

        // Set DateTime
        if(defaults.datetime == null){
            defaults.datetime = new Date();
        }
        var datetime = new Date(defaults.datetime);

        // Set Order
		var order = Date.parse(datetime);
        if(defaults.order != null){
            order = defaults.order;
        }
		object.attr('data-order',order);

        // Set Type
		if(defaults.type != null){
			object.attr('data-type',defaults.type);
		}

        // Add Filter
        if(defaults.type != null){
            this.addFilter(defaults.type);
		}

        // Set Icon
        $(document.createElement('i'));
		object.icon = $(document.createElement('i')).addClass('bi').addClass('bi-' + defaults.icon).addClass('text-bg-'+defaults.color).appendTo(object);
		if(defaults.class.icon){
			object.icon.addClass(defaults.class.icon);
		}

        // Set item
		object.item = $(document.createElement('div')).addClass('timeline-item').appendTo(object);
		if(this.#options.class.item){
			object.item.addClass(this.#options.class.item);
		}
		if(defaults.class.item){
			object.item.addClass(defaults.class.item);
		}

        // Set Tools
        object.tools = $(document.createElement('div')).addClass('tools').appendTo(object.item);

        // Set Time
        var time = $(document.createElement('span')).appendTo(object.tools);
        time.icon = $(document.createElement('i')).addClass('bi-clock me-1').appendTo(time);
        time.ago = $(document.createElement('time')).addClass('timeago').attr('title',datetime.toLocaleString()).attr('datetime',datetime.toLocaleString()).attr('data-bs-placement','top').appendTo(time);
        time.ago.timeago();
        object.time = time;

        // Add Label
		if(defaults.label){
			this.label(order)
		}

        // Execute Callback
		if(typeof callback === 'function'){
			callback(object,this);
		}

        // Sort
        this.sort();

        // Set Search
		Search.set(object);

        // Return Object
		return this;
	}
}

// Code
class Code {

    #object = null;
    #options = {
        class: {
            object: null,
        },
        language: null,
        title: null,
        code: null,
        clipboard: false,
        fullscreen: false,
        highlight: true,
        collapse: true,
        collapsed: false,
    };

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

        // Create Object
		this.#object = $(document.createElement('div')).attr('id','code' + builderCount).addClass('card bg-dark text-bg-dark');
        this.#object.id = this.#object.attr('id');

        // Add Header
        this.#object.header = $(document.createElement('div')).addClass('card-header user-select-none').appendTo(this.#object);
        this.#object.header.heading = $(document.createElement('h5')).addClass('card-title d-flex align-items-center my-2').appendTo(this.#object.header);
        this.#object.header.icon = $(document.createElement('i')).addClass('bi-code-slash me-2').appendTo(this.#object.header.heading);
        this.#object.header.language = $(document.createElement('samp')).addClass('mx-1 text-uppercase').appendTo(this.#object.header.heading);
        this.#object.header.title = $(document.createElement('small')).addClass('mx-1').appendTo(this.#object.header.heading);

        // Add Controls
        this.#object.controls = $(document.createElement('span')).addClass('ms-auto d-flex align-items-center').appendTo(this.#object.header.heading);
        this.#object.controls.collapse = $(document.createElement('a')).addClass('ms-3 text-decoration-none cursor-pointer').appendTo(this.#object.controls);
        this.#object.controls.collapse.icon = $(document.createElement('i')).addClass('bi-chevron-bar-contract').appendTo(this.#object.controls.collapse);
        this.#object.controls.clipboard = $(document.createElement('a')).addClass('ms-3 text-decoration-none cursor-pointer').appendTo(this.#object.controls);
        this.#object.controls.clipboard.icon = $(document.createElement('i')).addClass('bi-clipboard').appendTo(this.#object.controls.clipboard);
        this.#object.controls.fullscreen = $(document.createElement('a')).addClass('ms-3 text-decoration-none cursor-pointer').appendTo(this.#object.controls);
        this.#object.controls.fullscreen.icon = $(document.createElement('i')).addClass('bi-fullscreen').appendTo(this.#object.controls.fullscreen);

        // Add Body
        this.#object.body = $(document.createElement('div')).addClass('card-body p-0');
        this.#object.pre = $(document.createElement('pre')).addClass('m-0 p-3 h-100').appendTo(this.#object.body);
        this.#object.code = $(document.createElement('code')).addClass('language-*').appendTo(this.#object.pre);

        // Add Body Collapse
        this.#object.body.collapse = $(document.createElement('div')).addClass('collapse show').attr('id',this.#object.body.id + 'collapse').appendTo(this.#object);
        this.#object.body.collapse.id = this.#object.body.collapse.attr('id');

        // Append Body to Body Collapse
		this.#object.body.appendTo(this.#object.body.collapse);

        // Set Title
        if(this.#options.title){
            this.#object.header.title.html(this.#options.title);
        }

        // Set Language
        if(this.#options.language){
            this.#options.language = this.#options.language.toString().toLowerCase();
            if(typeof Prism.languages[this.#options.language] !== 'undefined'){
                this.#object.header.language.html(this.#options.language);
                this.#object.code.addClass('language-' + this.#options.language);
            }
        }

        // Set Language
        if(this.#options.fullscreen){
            this.#object.css('transition','all 400ms ease');
            this.#object.code.css('transition','all 400ms ease');
            this.#object.controls.fullscreen.click(function(){
                if(self.#object.controls.fullscreen.icon.hasClass('bi-fullscreen')){
                    self.#object.addClass('position-fixed top-0 start-0 w-100 h-100 rounded-0').css('z-index', 1050);
                    self.#object.body.addClass('h-100 overflow-auto');
                    self.#object.controls.fullscreen.icon.removeClass('bi-fullscreen').addClass('bi-fullscreen-exit');
                } else {
                    self.#object.removeClass('position-fixed top-0 start-0 w-100 h-100 rounded-0').css('z-index', '');
                    self.#object.body.removeClass('h-100 overflow-auto');
                    self.#object.controls.fullscreen.icon.removeClass('bi-fullscreen-exit').addClass('bi-fullscreen');
                }
            })
        } else {
            this.#object.controls.fullscreen.addClass('d-none');
        }

        // Set Clipboard
        if(this.#options.clipboard){
            this.#object.controls.clipboard.click(function(){
                copyToClipboard(self.#object.code);
            })
        } else {
            this.#object.controls.clipboard.addClass('d-none');
        }

        // Set Code
        if(this.#options.code){
            this.#object.code.text(this.#options.code)
            if(this.#options.highlight && this.#options.language && typeof Prism.languages[this.#options.language] !== 'undefined'){
                this.#object.code.html(Prism.highlight(this.#object.code.html(),Prism.languages[this.#options.language]))
            }
        }

        // Set Collapse
        if(this.#options.collapse){
            this.#object.body.collapse.bs = new bootstrap.Collapse(this.#object.body.collapse,{toggle:false});
            this.#object.controls.collapse.click(function(){
                if(self.#object.controls.collapse.icon.hasClass('bi-chevron-bar-expand')){
                    self.#object.body.collapse.bs.show();
                    self.#object.controls.collapse.icon.removeClass('bi-chevron-bar-expand').addClass('bi-chevron-bar-contract');
                    self.#object.header.removeClass('rounded border-0');
                } else {
                    self.#object.body.collapse.bs.hide()
                    self.#object.controls.collapse.icon.removeClass('bi-chevron-bar-contract').addClass('bi-chevron-bar-expand');
                    self.#object.header.addClass('rounded border-0');
                }
            });
        } else {
            this.#object.controls.collapse.addClass('d-none');
        }
        if(this.#options.collapsed){
            this.#object.body.collapse.removeClass('show');
            this.#object.controls.collapse.icon.removeClass('bi-chevron-bar-contract').addClass('bi-chevron-bar-expand');
            this.#object.header.addClass('rounded border-0');
        }

        // Set Object Class
        if(this.#options.class.object){
            this.#object.addClass(this.#options.class.object);
        }

        // Execute Callback
        if(typeof callback === 'function'){
            callback(this.#object,this);
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

    appendTo(object){
        
        // Append Object To
        this.#object.appendTo(object);

        // Return Object
        return this;
    }

    prependTo(object){
        
        // Prepend Object To
        this.#object.prependTo(object);

        // Return Object
        return this;
    }

    append(object){
        
        // Append Object
        this.#object.append(object);

        // Return Object
        return this;
    }

    prepend(object){
        
        // Prepend Object
        this.#object.prepend(object);

        // Return Object
        return this;
    }
}

// Invoice
class Invoice {

    #object = null;
    #options = {
        class: {
            object: null,
        },
        brand: null,
        logo: {
            path: null,
            size: null,
        },
        currency: "$",
        from: {
            name: null,
            address: null,
            city: null,
            country: null,
            state: null,
            zip: null,
            phone: null,
            email: null,
        },
        shipTo: {
            name: null,
            address: null,
            city: null,
            country: null,
            state: null,
            zip: null,
            phone: null,
            email: null,
        },
        billTo: {
            name: null,
            address: null,
            city: null,
            country: null,
            state: null,
            zip: null,
            phone: null,
            email: null,
        },
        date: null,
        due: null,
        info: null,
        methods: [
            'visa',
            'mastercard',
            'americanExpress',
            'paypal',
        ],
        references: [],
        lines: [],
        columns: [
            'sku',
            'name',
            'description',
            'serial',
            'qty',
            'price',
            'subtotal',
        ],
        defaults: {
            class: {
                object: null,
            },
            sku: null,
            name: null,
            description: null,
            serial: null,
            qty: null,
            price: null,
        },
        number: null,
        shipping: null,
        rates:{
            tax1: 0,
            tax2: 0,
        },
    };
    #columns = [
        'sku',
        'name',
        'description',
        'serial',
        'qty',
        'price',
        'subtotal',
    ];
    #methods = [
        'visa',
        'mastercard',
        'americanExpress',
        'paypal',
    ];
    #lines = {};
    #count = 0;
    #subtotal = 0;
    #shipping = 0;
    #tax1 = 0;
    #tax2 = 0;
    #total = 0;

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

        // Create Object
		this.#object = $(document.createElement('div')).attr('id','invoice' + builderCount).addClass('invoice p-3');
        this.#object.id = this.#object.attr('id');

        // Create Branding
        this.#object.branding = $(document.createElement('div')).addClass('row').appendTo(this.#object);
        this.#object.branding.col = $(document.createElement('div')).addClass('col-12').appendTo(this.#object.branding);
        this.#object.branding.col.brand = $(document.createElement('h4')).addClass('d-flex align-items-center').appendTo(this.#object.branding.col);
        this.#object.branding.col.brand.logo = $(document.createElement('img')).attr('src','/img/logo.png').css({"max-width":"32px","max-height":"32px"}).addClass('img-circle elevation-3 me-2').appendTo(this.#object.branding.col.brand);
        this.#object.branding.col.brand.text = $(document.createElement('span')).text('AdminLTE, Inc.').appendTo(this.#object.branding.col.brand);
        this.#object.branding.col.brand.date = $(document.createElement('small')).addClass('ms-auto').appendTo(this.#object.branding.col.brand);
        this.#object.branding.col.brand.date.label = $(document.createElement('span')).addClass('me-2').text('Date:').appendTo(this.#object.branding.col.brand.date);
        this.#object.branding.col.brand.date.value = $(document.createElement('span')).appendTo(this.#object.branding.col.brand.date);

        // Invoice Info
        this.#object.info = $(document.createElement('div')).addClass('row invoice-info').appendTo(this.#object);

        // From
        this.#object.info.from = $(document.createElement('div')).addClass('col-sm-3 invoice-col').appendTo(this.#object.info);
        this.#object.info.from.header = $(document.createElement('h5')).text('From').appendTo(this.#object.info.from);
        this.#object.info.from.address = $(document.createElement('address')).addClass('d-flex flex-column').appendTo(this.#object.info.from);
        this.#object.info.from.address.name = $(document.createElement('strong')).appendTo(this.#object.info.from.address);
        this.#object.info.from.address.address = $(document.createElement('span')).appendTo(this.#object.info.from.address);
        this.#object.info.from.address.location = $(document.createElement('span')).appendTo(this.#object.info.from.address);
        this.#object.info.from.address.location.city = $(document.createElement('span')).appendTo(this.#object.info.from.address.location);
        this.#object.info.from.address.location.country = $(document.createElement('span')).appendTo(this.#object.info.from.address.location);
        this.#object.info.from.address.location.state = $(document.createElement('span')).appendTo(this.#object.info.from.address.location);
        this.#object.info.from.address.location.zipcode = $(document.createElement('span')).appendTo(this.#object.info.from.address.location);
        this.#object.info.from.address.phone = $(document.createElement('span')).appendTo(this.#object.info.from.address);
        this.#object.info.from.address.email = $(document.createElement('span')).appendTo(this.#object.info.from.address);

        // Bill To
        this.#object.info.billto = $(document.createElement('div')).addClass('col-sm-3 invoice-col').appendTo(this.#object.info);
        this.#object.info.billto.header = $(document.createElement('h5')).text('Bill To').appendTo(this.#object.info.billto);
        this.#object.info.billto.address = $(document.createElement('address')).addClass('d-flex flex-column').appendTo(this.#object.info.billto);
        this.#object.info.billto.address.name = $(document.createElement('strong')).appendTo(this.#object.info.billto.address);
        this.#object.info.billto.address.address = $(document.createElement('span')).appendTo(this.#object.info.billto.address);
        this.#object.info.billto.address.location = $(document.createElement('span')).appendTo(this.#object.info.billto.address);
        this.#object.info.billto.address.location.city = $(document.createElement('span')).appendTo(this.#object.info.billto.address.location);
        this.#object.info.billto.address.location.country = $(document.createElement('span')).appendTo(this.#object.info.billto.address.location);
        this.#object.info.billto.address.location.state = $(document.createElement('span')).appendTo(this.#object.info.billto.address.location);
        this.#object.info.billto.address.location.zipcode = $(document.createElement('span')).appendTo(this.#object.info.billto.address.location);
        this.#object.info.billto.address.phone = $(document.createElement('span')).appendTo(this.#object.info.billto.address);
        this.#object.info.billto.address.email = $(document.createElement('span')).appendTo(this.#object.info.billto.address);

        // Ship To
        this.#object.info.shipto = $(document.createElement('div')).addClass('col-sm-3 invoice-col').appendTo(this.#object.info);
        this.#object.info.shipto.header = $(document.createElement('h5')).text('Ship To').appendTo(this.#object.info.shipto);
        this.#object.info.shipto.address = $(document.createElement('address')).addClass('d-flex flex-column').appendTo(this.#object.info.shipto);
        this.#object.info.shipto.address.name = $(document.createElement('strong')).appendTo(this.#object.info.shipto.address);
        this.#object.info.shipto.address.address = $(document.createElement('span')).appendTo(this.#object.info.shipto.address);
        this.#object.info.shipto.address.location = $(document.createElement('span')).appendTo(this.#object.info.shipto.address);
        this.#object.info.shipto.address.location.city = $(document.createElement('span')).appendTo(this.#object.info.shipto.address.location);
        this.#object.info.shipto.address.location.country = $(document.createElement('span')).appendTo(this.#object.info.shipto.address.location);
        this.#object.info.shipto.address.location.state = $(document.createElement('span')).appendTo(this.#object.info.shipto.address.location);
        this.#object.info.shipto.address.location.zipcode = $(document.createElement('span')).appendTo(this.#object.info.shipto.address.location);
        this.#object.info.shipto.address.phone = $(document.createElement('span')).appendTo(this.#object.info.shipto.address);
        this.#object.info.shipto.address.email = $(document.createElement('span')).appendTo(this.#object.info.shipto.address);

        // Invoice ID
        this.#object.info.id = $(document.createElement('div')).addClass('col-sm-3 invoice-col d-flex flex-column').appendTo(this.#object.info);
        this.#object.info.id.header = $(document.createElement('h5')).addClass('mb-3').text('Invoice #007612').appendTo(this.#object.info.id);

        // Table
        this.#object.table = $(document.createElement('div')).addClass('row').appendTo(this.#object);
        this.#object.table.responsive = $(document.createElement('div')).addClass('col-12 table-responsive').appendTo(this.#object.table);
        this.#object.table.responsive.table = $(document.createElement('table')).addClass('table table-striped').appendTo(this.#object.table.responsive);
        this.#object.table.responsive.table.thead = $(document.createElement('thead')).appendTo(this.#object.table.responsive.table);
        this.#object.table.responsive.table.thead.tr = $(document.createElement('tr')).appendTo(this.#object.table.responsive.table.thead);
        this.#object.table.responsive.table.thead.tr.sku = $(document.createElement('th')).addClass('d-none').text('SKU').appendTo(this.#object.table.responsive.table.thead.tr);
        this.#object.table.responsive.table.thead.tr.name = $(document.createElement('th')).addClass('d-none').text('Name').appendTo(this.#object.table.responsive.table.thead.tr);
        this.#object.table.responsive.table.thead.tr.description = $(document.createElement('th')).addClass('d-none').text('Description').appendTo(this.#object.table.responsive.table.thead.tr);
        this.#object.table.responsive.table.thead.tr.serial = $(document.createElement('th')).addClass('d-none').text('Serial #').appendTo(this.#object.table.responsive.table.thead.tr);
        this.#object.table.responsive.table.thead.tr.qty = $(document.createElement('th')).addClass('d-none').text('Qty').appendTo(this.#object.table.responsive.table.thead.tr);
        this.#object.table.responsive.table.thead.tr.price = $(document.createElement('th')).addClass('d-none').text('Price').appendTo(this.#object.table.responsive.table.thead.tr);
        this.#object.table.responsive.table.thead.tr.subtotal = $(document.createElement('th')).addClass('d-none').text('Subtotal').appendTo(this.#object.table.responsive.table.thead.tr);
        this.#object.table.responsive.table.tbody = $(document.createElement('tbody')).appendTo(this.#object.table.responsive.table);

        // Footer
        this.#object.info.footer = $(document.createElement('div')).addClass('row').appendTo(this.#object);

        // Paiement Info
        this.#object.info.footer.payment = $(document.createElement('div')).addClass('col-6').appendTo(this.#object.info.footer);
        this.#object.info.footer.payment.header = $(document.createElement('p')).addClass('lead').text('Payment Methods:').appendTo(this.#object.info.footer.payment);
        this.#object.info.footer.payment.visa = $(document.createElement('img')).addClass('d-none').attr('src', '/img/visa.png').attr('alt', 'Visa').appendTo(this.#object.info.footer.payment);
        this.#object.info.footer.payment.mastercard = $(document.createElement('img')).addClass('d-none').attr('src', '/img/mastercard.png').attr('alt', 'Mastercard').appendTo(this.#object.info.footer.payment);
        this.#object.info.footer.payment.americanExpress = $(document.createElement('img')).addClass('d-none').attr('src', '/img/american-express.png').attr('alt', 'American Express').appendTo(this.#object.info.footer.payment);
        this.#object.info.footer.payment.paypal = $(document.createElement('img')).addClass('d-none').attr('src', '/img/paypal2.png').attr('alt', 'Paypal').appendTo(this.#object.info.footer.payment);
        this.#object.info.footer.payment.info = $(document.createElement('p')).addClass('d-none').addClass('text-muted well well-sm shadow-none mt-2').text('Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.').appendTo(this.#object.info.footer.payment);

        // Total
        this.#object.info.footer.total = $(document.createElement('div')).addClass('col-6').appendTo(this.#object.info.footer);
        this.#object.info.footer.total.header = $(document.createElement('p')).addClass('lead').text('Amount Due:').appendTo(this.#object.info.footer.total);
        this.#object.info.footer.total.header.date = $(document.createElement('span')).addClass('float-end').appendTo(this.#object.info.footer.total.header);
        this.#object.info.footer.total.responsive = $(document.createElement('div')).addClass('table-responsive').appendTo(this.#object.info.footer.total);
        this.#object.info.footer.total.table = $(document.createElement('table')).addClass('table').appendTo(this.#object.info.footer.total.responsive);
        this.#object.info.footer.total.table.tbody = $(document.createElement('tbody')).appendTo(this.#object.info.footer.total.table);
        this.#object.info.footer.total.table.tbody.subtotal = $(document.createElement('tr')).appendTo(this.#object.info.footer.total.table.tbody);
        this.#object.info.footer.total.table.tbody.subtotal.th = $(document.createElement('th')).attr('style', 'width:50%').text('Subtotal:').appendTo(this.#object.info.footer.total.table.tbody.subtotal);
        this.#object.info.footer.total.table.tbody.subtotal.td = $(document.createElement('td')).appendTo(this.#object.info.footer.total.table.tbody.subtotal);
        this.#object.info.footer.total.table.tbody.shipping = $(document.createElement('tr')).addClass('d-none').appendTo(this.#object.info.footer.total.table.tbody);
        this.#object.info.footer.total.table.tbody.shipping.th = $(document.createElement('th')).text('Shipping:').appendTo(this.#object.info.footer.total.table.tbody.shipping);
        this.#object.info.footer.total.table.tbody.shipping.td = $(document.createElement('td')).appendTo(this.#object.info.footer.total.table.tbody.shipping);
        this.#object.info.footer.total.table.tbody.tax1 = $(document.createElement('tr')).addClass('d-none').appendTo(this.#object.info.footer.total.table.tbody);
        this.#object.info.footer.total.table.tbody.tax1.th = $(document.createElement('th')).text('Tax (9.3%)').appendTo(this.#object.info.footer.total.table.tbody.tax1);
        this.#object.info.footer.total.table.tbody.tax1.td = $(document.createElement('td')).appendTo(this.#object.info.footer.total.table.tbody.tax1);
        this.#object.info.footer.total.table.tbody.tax2 = $(document.createElement('tr')).addClass('d-none').appendTo(this.#object.info.footer.total.table.tbody);
        this.#object.info.footer.total.table.tbody.tax2.th = $(document.createElement('th')).text('Tax (9.3%)').appendTo(this.#object.info.footer.total.table.tbody.tax2);
        this.#object.info.footer.total.table.tbody.tax2.td = $(document.createElement('td')).appendTo(this.#object.info.footer.total.table.tbody.tax2);
        this.#object.info.footer.total.table.tbody.total = $(document.createElement('tr')).appendTo(this.#object.info.footer.total.table.tbody);
        this.#object.info.footer.total.table.tbody.total.th = $(document.createElement('th')).text('Total:').appendTo(this.#object.info.footer.total.table.tbody.total);
        this.#object.info.footer.total.table.tbody.total.td = $(document.createElement('td')).appendTo(this.#object.info.footer.total.table.tbody.total);

        // Controls
        this.#object.info.footer.controls = $(document.createElement('div')).addClass('row no-print').appendTo(this.#object.info.footer);
        this.#object.info.footer.controls.col = $(document.createElement('div')).addClass('col-12').appendTo(this.#object.info.footer.controls);
        this.#object.info.footer.controls.col.group = $(document.createElement('div')).addClass('btn-group').appendTo(this.#object.info.footer.controls.col);
        this.#object.info.footer.controls.print = $(document.createElement('button')).attr('type', 'button').addClass('btn btn-secondary').appendTo(this.#object.info.footer.controls.col.group);
        this.#object.info.footer.controls.print.icon = $(document.createElement('i')).addClass('bi bi-printer').appendTo(this.#object.info.footer.controls.print);
        this.#object.info.footer.controls.print.text = $(document.createElement('span')).text(' Print').appendTo(this.#object.info.footer.controls.print);
        this.#object.info.footer.controls.submit = $(document.createElement('button')).attr('type', 'button').addClass('btn btn-success float-right').appendTo(this.#object.info.footer.controls.col.group);
        this.#object.info.footer.controls.submit.icon = $(document.createElement('i')).addClass('bi bi-credit-card').appendTo(this.#object.info.footer.controls.submit);
        this.#object.info.footer.controls.submit.text = $(document.createElement('span')).text(' Submit Payment').appendTo(this.#object.info.footer.controls.submit);
        this.#object.info.footer.controls.generate = $(document.createElement('button')).attr('type', 'button').addClass('btn btn-primary float-right').attr('style', 'margin-right: 5px;').appendTo(this.#object.info.footer.controls.col.group);
        this.#object.info.footer.controls.generate.icon = $(document.createElement('i')).addClass('bi bi-download').appendTo(this.#object.info.footer.controls.generate);
        this.#object.info.footer.controls.generate.text = $(document.createElement('span')).text(' Generate PDF').appendTo(this.#object.info.footer.controls.generate);
        
        // Set Object Class
        if(this.#options.class.object){
            this.#object.addClass(this.#options.class.object);
        }

        // Set Logo
        if(this.#options.logo && this.#options.logo.path){
            this.#object.branding.col.brand.logo.attr('src',this.#options.logo.path);
        }
        if(this.#options.logo && this.#options.logo.size){
            this.#object.branding.col.brand.logo.css({"max-width":this.#options.logo.size,"max-height":this.#options.logo.size});
        }

        // Set Branding
        if(this.#options.brand){
            this.#object.branding.col.brand.text.text(this.#options.brand);
        }

        // Set Date
        if(this.#options.date){
            var invoiceDate = new Date(this.#options.date);
            this.#object.branding.col.brand.date.value.text(invoiceDate.toLocaleDateString());
        }

        // Set From
        if(this.#options.from){
            if(this.#options.from.name){
                this.#object.info.from.address.name.text(this.#options.from.name);
            }
            if(this.#options.from.address){
                this.#object.info.from.address.address.text(this.#options.from.address);
            }
            if(this.#options.from.city){
                this.#object.info.from.address.location.city.text(this.#options.from.city);
            }
            if(this.#options.from.country){
                this.#object.info.from.address.location.country.text(this.#options.from.country);
            }
            if(this.#options.from.state){
                this.#object.info.from.address.location.state.text(this.#options.from.state);
            }
            if(this.#options.from.zipcode){
                this.#object.info.from.address.location.zipcode.text(this.#options.from.zipcode);
            }
            if(this.#options.from.phone){
                this.#object.info.from.address.phone.text(this.#options.from.phone);
            }
            if(this.#options.from.email){
                this.#object.info.from.address.email.text(this.#options.from.email);
            }
        }

        // Set Bill To
        if(this.#options.billTo){
            if(this.#options.billTo.name){
                this.#object.info.billto.address.name.text(this.#options.billTo.name);
            }
            if(this.#options.billTo.address){
                this.#object.info.billto.address.address.text(this.#options.billTo.address);
            }
            if(this.#options.billTo.city){
                this.#object.info.billto.address.location.city.text(this.#options.billTo.city);
            }
            if(this.#options.billTo.country){
                this.#object.info.billto.address.location.country.text(this.#options.billTo.country);
            }
            if(this.#options.billTo.state){
                this.#object.info.billto.address.location.state.text(this.#options.billTo.state);
            }
            if(this.#options.billTo.zipcode){
                this.#object.info.billto.address.location.zipcode.text(this.#options.billTo.zipcode);
            }
            if(this.#options.billTo.phone){
                this.#object.info.billto.address.phone.text(this.#options.billTo.phone);
            }
            if(this.#options.billTo.email){
                this.#object.info.billto.address.email.text(this.#options.billTo.email);
            }
        }

        // Set Ship To
        if(this.#options.shipTo){
            if(this.#options.shipTo.name){
                this.#object.info.shipto.address.name.text(this.#options.shipTo.name);
            }
            if(this.#options.shipTo.address){
                this.#object.info.shipto.address.address.text(this.#options.shipTo.address);
            }
            if(this.#options.shipTo.city){
                this.#object.info.shipto.address.location.city.text(this.#options.shipTo.city);
            }
            if(this.#options.shipTo.country){
                this.#object.info.shipto.address.location.country.text(this.#options.shipTo.country);
            }
            if(this.#options.shipTo.state){
                this.#object.info.shipto.address.location.state.text(this.#options.shipTo.state);
            }
            if(this.#options.shipTo.zipcode){
                this.#object.info.shipto.address.location.zipcode.text(this.#options.shipTo.zipcode);
            }
            if(this.#options.shipTo.phone){
                this.#object.info.shipto.address.phone.text(this.#options.shipTo.phone);
            }
            if(this.#options.shipTo.email){
                this.#object.info.shipto.address.email.text(this.#options.shipTo.email);
            }
        }

        // Set Invoice Number
        if(this.#options.number){
            this.#object.info.id.header.text('Invoice #' + this.#options.number);
        }

        // Set References
        if(this.#options.references && typeof this.#options.references === 'object' && Array.isArray(this.#options.references)){
            for(const [key, reference] of Object.entries(this.#options.references)){
                var referenceElement = $(document.createElement('div')).addClass('row').appendTo(this.#object.info.id);
                referenceElement.label = $(document.createElement('div')).addClass('col-6 fw-bold').text(reference.label + ':').appendTo(referenceElement);
                referenceElement.value = $(document.createElement('div')).addClass('col-6').text(reference.value).appendTo(referenceElement);
            }
        }

        // Set Columns
        for(const [key, column] of Object.entries(this.#options.columns)){
            if(inArray(column, this.#columns)){
                this.#object.table.responsive.table.thead.tr[column].removeClass('d-none');
            }
        }

        // Add Lines
        if(this.#options.lines && typeof this.#options.lines === 'object' && Array.isArray(this.#options.lines)){
            for(const [key, line] of Object.entries(this.#options.lines)){
                this.add(line);
            }
        }

        // Set Payment Methods
        for(const [key, method] of Object.entries(this.#options.methods)){
            if(inArray(method, this.#methods)){
                this.#object.info.footer.payment[method].removeClass('d-none');
            }
        }

        // Set Payment Info
        if(this.#options.info){
            this.#object.info.footer.payment.info.text(this.#options.info);
            this.#object.info.footer.payment.info.removeClass('d-none');
        }

        // Set Due Date
        if(this.#options.due){
            var invoiceDueDate = new Date(this.#options.due);
            this.#object.info.footer.total.header.date.text(invoiceDueDate.toLocaleDateString());
        }

        // Execute Callback
        if(typeof callback === 'function'){
            callback(this.#object,this);
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
                    case"logo":
                    case"from":
                    case"billTo":
                    case"shipTo":
                    case"rates":
                        for(const [k, v] of Object.entries(value)){
                            if(typeof this.#options[key][k] !== 'undefined'){
                                this.#options[key][k] = v;
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

    calculate(){

        // Set Self
        const self = this;

        // Set Subtotal
        this.#subtotal = 0;
        for(const [key, line] of Object.entries(this.#lines)){
            this.#subtotal += line.options.subtotal;
        }
        this.#object.info.footer.total.table.tbody.subtotal.td.text(this.#options.currency + this.#subtotal.toFixed(2));

        // Set Shipping
        if(this.#options.shipping){
            this.#shipping = this.#options.shipping;
            this.#object.info.footer.total.table.tbody.shipping.td.text(this.#options.currency + this.#shipping.toFixed(2));
            this.#object.info.footer.total.table.tbody.shipping.removeClass('d-none');
        } else {
            this.#object.info.footer.total.table.tbody.shipping.addClass('d-none');
        }

        // Set Tax1
        if(this.#options.rates.tax1){
            this.#tax1 = (this.#options.rates.tax1 / 100) * (this.#subtotal + this.#shipping);
            this.#object.info.footer.total.table.tbody.tax1.th.text('Tax (' + this.#options.rates.tax1 + '%):');
            this.#object.info.footer.total.table.tbody.tax1.td.text(this.#options.currency + this.#tax1.toFixed(2));
            this.#object.info.footer.total.table.tbody.tax1.removeClass('d-none');
        } else {
            this.#object.info.footer.total.table.tbody.tax1.addClass('d-none');
        }

        // Set Tax2
        if(this.#options.rates.tax2){
            this.#tax2 = (this.#options.rates.tax2 / 100) * (this.#subtotal + this.#shipping);
            this.#object.info.footer.total.table.tbody.tax2.th.text('Tax (' + this.#options.rates.tax2 + '%):');
            this.#object.info.footer.total.table.tbody.tax2.td.text(this.#options.currency + this.#tax2.toFixed(2));
            this.#object.info.footer.total.table.tbody.tax2.removeClass('d-none');
        } else {
            this.#object.info.footer.total.table.tbody.tax2.addClass('d-none');
        }

        // Set Total
        this.#total = this.#subtotal + this.#shipping + this.#tax1 + this.#tax2;
        this.#object.info.footer.total.table.tbody.total.td.text(this.#options.currency + this.#total.toFixed(2));
    }

	add(param1 = null, param2 = null){

        // Set Self
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

        // Create Defaults Options
        let defaults = {};
        for(const [key, value] of Object.entries(this.#options.defaults)){
            if(typeof defaults[key] === 'undefined'){
                switch(key){
                    case"class":
                        defaults[key] = {};
                        for(const [section, classes] of Object.entries(value)){
                            if(defaults[key][section] != null){
                                defaults[key][section] += ' ' + classes;
                            } else {
                                defaults[key][section] = classes;
                            }
                        }
                        break;
                    default:
                        defaults[key] = value;
                        break;
                }
            }
        }

        // Set Options
        for(const [key, value] of Object.entries(options)){
            if(typeof defaults[key] !== 'undefined'){
                switch(key){
                    case"class":
                        for(const [section, classes] of Object.entries(value)){
                            if(defaults[key][section] != null){
                                defaults[key][section] += ' ' + classes;
                            } else {
                                defaults[key][section] = classes;
                            }
                        }
                        break;
                    default:
                        defaults[key] = value;
                        break;
                }
            }
        }

        // Increment Count
        this.#count++;

        // Create Invoice Line
		var object = $(document.createElement('tr')).attr('id','invoiceLine' + this.#count).appendTo(this.#object.table.responsive.table.tbody);
		object.id = object.attr('id');

        // Save Options
        object.options = defaults;

        // Set Object Class
        if(object.options.class.object){
            object.addClass(object.options.class.object);
        }

        // // Create Invoice Line Columns
        // SKU
        if(inArray('sku', this.#options.columns)){
            object.sku = $(document.createElement('td')).appendTo(object);
            if(typeof object.options.sku !== 'undefined'){
                object.sku.text(object.options.sku);
            }
        }
        // Name
        if(inArray('name', this.#options.columns)){
            object.name = $(document.createElement('td')).appendTo(object);
            if(typeof object.options.name !== 'undefined'){
                object.name.text(object.options.name);
            }
        }
        // Description
        if(inArray('description', this.#options.columns)){
            object.description = $(document.createElement('td')).appendTo(object);
            if(typeof object.options.description !== 'undefined'){
                object.description.text(object.options.description);
            }
        }
        // Serial
        if(inArray('serial', this.#options.columns)){
            object.serial = $(document.createElement('td')).appendTo(object);
            if(typeof object.options.serial !== 'undefined'){
                object.serial.text(object.options.serial);
            }
        }
        // Qty
        if(inArray('qty', this.#options.columns)){
            object.qty = $(document.createElement('td')).appendTo(object);
            if(typeof object.options.qty !== 'undefined'){
                object.qty.text(object.options.qty);
            }
        }
        // Price
        if(inArray('price', this.#options.columns)){
            object.price = $(document.createElement('td')).appendTo(object);
            if(typeof object.options.price !== 'undefined'){
                object.price.text(this.#options.currency + object.options.price.toFixed(2));
            }
        }
        // Subtotal
        if(inArray('subtotal', this.#options.columns)){
            object.subtotal = $(document.createElement('td')).appendTo(object);
            if(typeof object.options.subtotal === 'undefined'){
                object.options.subtotal = object.options.qty * object.options.price;
            }
            object.subtotal.text(this.#options.currency + object.options.subtotal.toFixed(2));
        }

        // Save object
        this.#lines[this.#count] = object;

        // Execute Callback
        if(typeof callback === 'function'){
            callback(object,self);
        }

        // Calculate
        this.calculate();

        // Return Object
        return this;
    }

    appendTo(object){
        
        // Append Object To
        this.#object.appendTo(object);

        // Return Object
        return this;
    }

    prependTo(object){
        
        // Prepend Object To
        this.#object.prependTo(object);

        // Return Object
        return this;
    }

    append(object){
        
        // Append Object
        this.#object.append(object);

        // Return Object
        return this;
    }

    prepend(object){
        
        // Prepend Object
        this.#object.prepend(object);

        // Return Object
        return this;
    }
}

// Feed
class Feed {

    #feed = null;
    #options = {
        class: {
            feed: null,
            post: null,
        },
        defaults: {
            username: null,
            content: null,
            datetime: null,
            class: {
                post: null,
            },
        },
        controls:{},
    };

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

        // Create Feed
		this.#feed = $(document.createElement('div')).attr('id','feed' + builderCount).addClass('feed');
        this.#feed.id = this.#feed.attr('id');

        // Set Feed Class
        if(this.#options.class.feed){
            this.#feed.addClass(this.#options.class.feed);
        }

        // Add Search
        Search.add(this.#feed);

        // Execute Callback
        if(typeof callback === 'function'){
            callback(this);
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
                        for(const [k, v] of Object.entries(value)){
                            if(typeof this.#options[key][k] !== 'undefined'){
                                switch(k){
                                    case"class":
                                        for(const [section, classes] of Object.entries(v)){
                                            if(this.#options[key][k][section] != null){
                                                this.#options[key][k][section] += ' ' + classes;
                                            } else {
                                                this.#options[key][k][section] = classes;
                                            }
                                        }
                                        break;
                                    default:
                                        this.#options[key][k] = v;
                                        break;
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

    appendTo(object){
        
        // Append Object To
        this.#feed.appendTo(object);

        // Return Object
        return this;
    }

    prependTo(object){
        
        // Prepend Object To
        this.#feed.prependTo(object);

        // Return Object
        return this;
    }

    append(object){
        
        // Append Object
        this.#feed.append(object);

        // Return Object
        return this;
    }

    prepend(object){
        
        // Prepend Object
        this.#feed.prepend(object);

        // Return Object
        return this;
    }
    
    clear(){

        // Clear Feed's Children
        this.#feed.children().remove();

        // Return Object
        return this;
    }

	sort(order = null){

        // Set Order
        if(order == null){
            order = this.#options.order;
        }

        // Sanitize Order
        if(order != 'ASC' && order != 'DESC'){
            order = 'DESC';
        }

        // Retrieve Objects
		let objects = this.#feed.children('div').detach().get();

        // Sort Objects
		objects.sort(function(a, b){
			if(order == 'ASC'){
				return new Date($(a).data('order')) - new Date($(b).data('order'));
			} else {
				return new Date($(b).data('order')) - new Date($(a).data('order'));
			}
		});

        // Append Objects
		this.#feed.append(objects)

        // Return Object
        return this;
	}

    post(options = {}, callback = null){

        // Set Self
        const self = this

        // Check if Options is a Function
        if(options instanceof Function){ callback = options; options = {}; }

        // Create Defaults Options
        let defaults = {};
        for(const [key, value] of Object.entries(this.#options.defaults)){
            if(typeof defaults[key] === 'undefined'){
                switch(key){
                    case"datetime":
                        defaults[key] = Date.parse(new Date());
                        break;
                    case"class":
                        defaults[key] = {};
                        for(const [section, classes] of Object.entries(value)){
                            if(defaults[key][section] != null){
                                defaults[key][section] += ' ' + classes;
                            } else {
                                defaults[key][section] = classes;
                            }
                        }
                        break;
                    default:
                        defaults[key] = value;
                        break;
                }
            }
        }

        // Set Options
        for(const [key, value] of Object.entries(options)){
            if(typeof defaults[key] !== 'undefined'){
                switch(key){
                    case"class":
                        for(const [section, classes] of Object.entries(value)){
                            if(defaults[key][section] != null){
                                defaults[key][section] += ' ' + classes;
                            } else {
                                defaults[key][section] = classes;
                            }
                        }
                        break;
                    default:
                        defaults[key] = value;
                        break;
                }
            }
        }

        // Increment Count
        builderCount++;

        // Create Post
		var post = $(document.createElement('div')).attr('id','post' + builderCount).addClass('post').appendTo(this.#feed);

        // Set ID
		post.id = post.attr('id');

        // Set Options
        post.options = defaults;

        // Set Post Class
        if(this.#options.class.post){
            post.addClass(this.#options.class.post);
        }

        // Set DateTime
        var datetime = new Date(defaults.datetime);

        // Set Order
		var order = Date.parse(datetime);
        if(defaults.order != null){
            order = defaults.order;
        }
		post.attr('data-order',order);

        // Create User Block
        post.user = $(document.createElement('div')).addClass('user-block user-select-none').appendTo(post);
        post.user.avatar = $(document.createElement('img')).addClass('img-circle rounded-circle img-bordered-sm').attr('alt','Avatar').appendTo(post.user);
        post.user.username = $(document.createElement('span')).addClass('username mt-2').appendTo(post.user);
        post.user.link = $(document.createElement('a')).addClass('text-decoration-none').appendTo(post.user.username);
        post.user.date = $(document.createElement('span')).addClass('description mt-1').attr('title',datetime.toLocaleString()).attr('data-bs-placement','top').appendTo(post.user);
        post.user.date.icon = $(document.createElement('i')).addClass('bi-clock me-1').appendTo(post.user.date);
        post.user.date.timeago = $(document.createElement('time')).attr('datetime',datetime.toLocaleString()).html(datetime.toLocaleString()).appendTo(post.user.date).timeago();

        // Set User Avatar
        if(defaults.username != null){
            var Avatar = new Gravatar(defaults.username);
            post.user.link.attr('href','/users/details?id=' + defaults.username).html(defaults.username);
            post.user.avatar.attr('src',Avatar.url());
        }

        // Create Content Block
        post.content = $(document.createElement('p')).addClass('content').appendTo(post);

        // Set Content
        if(defaults.content != null){
            post.content.html(defaults.content);
        }

        // Create Controls Block
        post.controls = $(document.createElement('p')).addClass('controls user-select-none').appendTo(post);

        // Add Controls
        for(const [name, control] of Object.entries(self.#options.controls)){

            // Create Control
            var object = $(document.createElement('a')).addClass('text-decoration-none text-sm cursor-pointer me-2').appendTo(post.controls);
            object.icon = $(document.createElement('i')).addClass('bi me-1').appendTo(object);
            object.label = $(document.createElement('span')).appendTo(object);

            // Set Icon
            if(control.icon){
                object.icon.addClass('bi-' + control.icon);
            }

            // Set Label
            if(control.label){
                object.label.html(control.label);
            }

            // Set Callback
            if(control.callback && control.callback instanceof Function){
                control.callback(object,post,self);
            }
        }

        // Execute Callback
		if(typeof callback === 'function'){
			callback(post,this);
		}

        // Sort
        this.sort();

        // Set Search
        Search.set(post)

        // Return Object
		return this;
    }
}

// Table
class Table {

    #object = null;
    #options = {
        class: {
            object: null,
        },
        card:false,
        advancedSearch:true,
        exportTools:true,
        columnsVisibility:true,
        selectTools:false,
        showButtons:true,
        showButtonsLabel:true,
        pagination:true,
        information:true,
        lengthMenu:true,
        buttons: [],
        columnDefs: [],
        actions:null,
        dblclick: null,
        title: null,
        icon: null,
        // editor:false,
        datatable: {
			//Features
			autoWidth: true, //boolean //Enable or disable automatic column width calculation.
			// deferRender: false, //boolean //This option allows DataTables to create the nodes only when they are needed for a draw.
			// info: true, //boolean //Enable or disable information about the table including information about filtered data if that action is being performed.
			lengthChange: true, //boolean //When pagination is enabled, this option will control the display of an option for the end user to change the number of records to be shown per page.
			ordering: true, //boolean //Enable or disable ordering of columns.
			paging: true, //boolean //Enable or disable table pagination
			// processing: false, //boolean //Enable or disable the display of a 'processing' indicator when the table is being processed for server-side processing.
			// scrollX: false, //boolean //Enable horizontal scrolling.
			// scrollY: undefined, //string //Enable vertical scrolling. Vertical scrolling will constrain the DataTable to the given height, and enable scrolling for any data which overflows the current viewport.
			searching: true, //boolean //This option allows the search abilities of DataTables to be enabled or disabled.
			// serverSide: false, //boolean //Feature control DataTables' server-side processing mode.
			// stateSave: false, //boolean //Enable or disable state saving.
			//Data
			// data: [], //array //Data to use as the display data for the table.
			//Options
			// deferLoading: null, //integer|array //Delay the loading of server-side data until second draw
			// destroy: true, //boolean //Destroy any existing table matching the selector and replace with the new options.
			// displayStart: 0, //integer //Initial paging start point
			dom: 'B<"#SearchBuilder.collapse py-2 pt-3"<"card card-body"Q>>rtlip', //string //Define the table control elements to appear on the page and in what order
			lengthMenu: [ 10, 25, 50, 100 ], //array //Change the options in the page length select list.
			order: [[0, 'asc']], //array //Initial order (sort) to apply to the table
			// orderCellsTop: false, //boolean //Control which cell the order event handler will be applied to in a column
			// orderClasses: true, //boolean //Highlight the columns being ordered in the table's body
			// orderFixed: undefined, //array|object //Ordering to always be applied to the table
			// orderMulti: true, //boolean //Multiple column ordering ability control.
			pageLength: 10, //integer //Change the initial page length (number of rows per page)
			// numbers - Page number buttons only (1.10.8)
			// simple - 'Previous' and 'Next' buttons only
			// simple_numbers - 'Previous' and 'Next' buttons, plus page numbers
			// full - 'First', 'Previous', 'Next' and 'Last' buttons
			// full_numbers - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
			// first_last_numbers - 'First' and 'Last' buttons, plus page numbers
			pagingType: 'simple_numbers', //string //Pagination button display options
			renderer: 'bootstrap', //string|object //Display component renderer types
			// retrieve: false, //boolean //Retrieve an existing DataTables instance
			// rowId: 'DT_RowId', //string //Data property name that DataTables will use to set tr element DOM IDs
			// scrollCollapse: false, //boolean //Allow the table to reduce in height when a limited number of rows are shown.
			// search.caseInsensitive: true, //boolean //Control case-sensitive filtering option.
			// search.regex: false, //boolean //Enable / disable escaping of regular expression characters in the search term.
			// search.return: false, //boolean //Enable / disable DataTables' search on return
			// search.search: null, //string //Set an initial filtering condition on the table.
			// search.smart: true, //boolean //Enable / disable DataTables' smart filtering
			// search: {}, //object //Set an initial filter in DataTables and / or filtering options.
			// searchCols: [], //array //Define an initial search for individual columns.
			// searchDelay: null, //integer //Set a throttle frequency for searching
			// stateDuration: 7200, //integer //Saved state validity duration
			// stripeClasses: [], //array //Set the zebra stripe class names for the rows in the table.
			// tabIndex: 0, //integer //Tab index control for keyboard navigation
			//Columns
			columnDefs: [],
			//Internationalisation
			language:{
                "decimal":        "",
                "emptyTable":     "No data available in table",
                // "info":           "Showing _START_ to _END_ of _TOTAL_ entries",
                // "infoEmpty":      "Showing 0 to 0 of 0 entries",
                // "infoFiltered":   "(filtered from _MAX_ total entries)",
                "info":           "_START_ to _END_ of _TOTAL_",
                "infoEmpty":      "0 to 0 of 0",
                "infoFiltered":   "(filtered)",
                "infoPostFix":    "",
                "thousands":      ",",
                // "lengthMenu":     "Show _MENU_ entries",
                "lengthMenu":     "_MENU_",
                "loadingRecords": "Loading...",
                "processing":     "",
                "search":         "Search:",
                "zeroRecords":    "No matching records found",
                "paginate": {
                    "first":      "First",
                    "last":       "Last",
                    "next":       "Next",
                    "previous":   "Previous"
                },
                "aria": {
                    "sortAscending":  ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                },
                "searchBuilder": {
                    "add": "Add Condition",
                    "button": {
                        0: "Search Builder",
                        "_": "Search Builder (%d)",
                    },
                    "clearAll": "Clear All",
                    "condition": "Condition",
                    "conditions": {
                        "array": {
                            "contains": "Contains",
                            "empty": "Empty",
                            "equals": "Equals",
                            "not": "Not",
                            "notEmpty": "Not Empty",
                            "without": "Without"
                        },
                        "date": {
                            "after": "After",
                            "before": "Before",
                            "between": "Between",
                            "empty": "Empty",
                            "equals": "Equals",
                            "not": "Not",
                            "notBetween": "Not Between",
                            "notEmpty": "Not Empty"
                        },
                        "number": {
                            "between": "Between",
                            "empty": "Empty",
                            "equals": "Equals",
                            "gt": "Greater Than",
                            "gte": "Greater Than Equal To",
                            "lt": "Less Than",
                            "lte": "Less Than Equal To",
                            "not": "Not",
                            "notBetween": "Not Between",
                            "notEmpty": "Not Empty",
                        },
                        "string": {
                            "contains": "Contains",
                            "empty": "Empty",
                            "endsWith": "Ends With",
                            "equals": "Equals",
                            "not": "Not",
                            "notContains": "Does Not Contain",
                            "notEmpty": "Not Empty",
                            "notEndsWith": "Does Not End With",
                            "notStartsWith": "Does Not Start With",
                            "startsWith": "Starts With",
                        },
                    },
                    "data": "Data",
                    "delete": "&times",
                    "deleteTitle": "Delete filtering rule",
                    "left": "<",
                    "leftTitle": "Outdent criteria",
                    "logicAnd": "And",
                    "logicOr": "Or",
                    "right": ">",
                    "rightTitle": "Indent criteria",
                    // "title": {
                    // 	0: "Search Builder",
                    // 	"_": "Search Builder (%d)",
                    // },
                    "title": {
                        0: "",
                        "_": "",
                    },
                    "value": "Value",
                    "valueJoiner": "and",
                },
            },
			// ColReorder
			colReorder: false,
			// FixedColumns
			fixedColumns: false,
			// Select
			select: false,
			//Buttons
			buttons: [],
			//Responsive
			responsive: true,
		},
    };
    #buttons = {
        columnsVisibility:{
            label:{
                extend: 'colvis',
                text: '<i class="bi-layout-sidebar-inset me-2"></i>Columns',
            },
            icon:{
                extend: 'colvis',
                text: '<i class="bi-layout-sidebar-inset"></i>',
            },
        },
        selectTools:{
            label:{
                extend: 'collection',
                text: '<i class="bi-check2-square me-2"></i>Select',
                buttons: [
                    {
                        extend: 'selectAll',
                        text: '<i class="bi-check2-all me-2"></i>All',
                    },
                    {
                        extend: 'selectNone',
                        text: '<i class="bi-x-square me-2"></i>None',
                    },
                    // 'selected', // Enabled only when one or more items are selected
                    // 'selectedSingle', // Enabled only when a single item is selected
                    // 'selectRows', // Select rows
                    // 'selectColumns', // Select columns
                    // 'selectCells', // Select cells
                ],
            },
            icon:{
                extend: 'collection',
                text: '<i class="bi-check2-square"></i>',
                buttons: [
                    {
                        extend: 'selectAll',
                        text: '<i class="bi-check2-all me-2"></i>All',
                    },
                    {
                        extend: 'selectNone',
                        text: '<i class="bi-x-square me-2"></i>None',
                    },
                    // 'selected', // Enabled only when one or more items are selected
                    // 'selectedSingle', // Enabled only when a single item is selected
                    // 'selectRows', // Select rows
                    // 'selectColumns', // Select columns
                    // 'selectCells', // Select cells
                ],
            },
        },
        advancedSearch:{
            label:{
                extend: 'collection',
                text: '<i class="bi-search me-2"></i>Advanced Search',
                action:function(e, dt, node, config){
                    const SearchBuilder = new bootstrap.Collapse(node.closest('div.dataTables_wrapper').find('#SearchBuilder.collapse'))
                    SearchBuilder.toggle()
                },
            },
            icon:{
                extend: 'collection',
                text: '<i class="bi-search"></i>',
                action:function(e, dt, node, config){
                    const SearchBuilder = new bootstrap.Collapse(node.closest('div.dataTables_wrapper').find('#SearchBuilder.collapse'))
                    SearchBuilder.toggle()
                },
            },
        },
        exportTools:{
            label:{
                extend: 'collection',
                text: '<i class="bi-arrow-bar-down me-2"></i>Export',
                buttons: [
                    {
                        extend: 'copy',
                        text: '<i class="bi-clipboard me-2"></i>Clipboard',
                        exportOptions: {
                columns: ':visible:not(:last-child)',
            },
                    },
                    {
                        extend: 'excel',
                        text: '<i class="bi-filetype-xlsx me-2"></i>Excel',
                        exportOptions: {
                columns: ':visible:not(:last-child)',
            },
                    },
                    {
                        extend: 'csv',
                        text: '<i class="bi-filetype-csv me-2"></i>CSV',
                        exportOptions: {
                columns: ':visible:not(:last-child)',
            },
                    },
                    {
                        extend: 'pdf',
                        text: '<i class="bi-filetype-pdf me-2"></i>PDF',
                        exportOptions: {
                columns: ':visible:not(:last-child)',
            },
                    },
                ],
            },
            icon:{
                extend: 'collection',
                text: '<i class="bi-arrow-bar-down"></i>',
                buttons: [
                    {
                        extend: 'copy',
                        text: '<i class="bi-clipboard me-2"></i>Clipboard',
                        exportOptions: {
                columns: ':visible:not(:last-child)',
            },
                    },
                    {
                        extend: 'excel',
                        text: '<i class="bi-filetype-xlsx me-2"></i>Excel',
                        exportOptions: {
                columns: ':visible:not(:last-child)',
            },
                    },
                    {
                        extend: 'csv',
                        text: '<i class="bi-filetype-csv me-2"></i>CSV',
                        exportOptions: {
                columns: ':visible:not(:last-child)',
            },
                    },
                    {
                        extend: 'pdf',
                        text: '<i class="bi-filetype-pdf me-2"></i>PDF',
                        exportOptions: {
                columns: ':visible:not(:last-child)',
            },
                    },
                ],
            },
        }
    }
    #datatable = null

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

        // Create Object
		this.#object = $(document.createElement('div')).attr('id','table' + builderCount);
        this.#object.id = this.#object.attr('id');

        // Set Object Class
        if(this.#options.class.object){
            this.#object.addClass(this.#options.class.object);
        }

        // Add Table
        this.#object.table = $(document.createElement('table')).addClass('table table-striped m-0 w-100 user-select-none');

        // Add Dropdown
        if(typeof this.#options.actions === 'object'){
            this.#object.actions = new Dropdown(
                {
                    icon: "three-dots-vertical",
                    class: {
                        object: "dropstart",
                        button: "px-3 py-2",
                    },
                },
                function(dropdown){
                    if(self.#options.actions){
                        for(const [name, action] of Object.entries(self.#options.actions)){
                            dropdown.item(action);
                        }
                    }
                },
            );
            this.#options.datatable.columnDefs.push(
                {
                    target: this.#options.datatable.columnDefs.length,
                    visible: true,
                    responsivePriority: 1,
                    title: "Action",
                    data: null,
                    width: '80px',
                    defaultContent: this.#object.actions[0],
                }
            );
        }

        // Add Select Tools
        if(this.#options.selectTools){
            this.#options.datatable.select = this.#options.selectTools
            if(this.#options.showButtonsLabel){
                this.#options.datatable.buttons.push(self.#buttons.selectTools.label);
            } else {
                this.#options.datatable.buttons.push(self.#buttons.selectTools.icon);
            }
        }

        // Add Export Tools
        if(this.#options.exportTools){
            if(this.#options.showButtonsLabel){
                this.#options.datatable.buttons.push(self.#buttons.exportTools.label);
            } else {
                this.#options.datatable.buttons.push(self.#buttons.exportTools.icon);
            }
        }

        // Add Columns Visibility
        if(this.#options.columnsVisibility){
            if(this.#options.showButtonsLabel){
                this.#options.datatable.buttons.push(self.#buttons.columnsVisibility.label);
            } else {
                this.#options.datatable.buttons.push(self.#buttons.columnsVisibility.icon);
            }
        }

        // Add Advanced Search
        if(this.#options.advancedSearch){
            if(this.#options.showButtonsLabel){
                this.#options.datatable.buttons.push(self.#buttons.advancedSearch.label);
            } else {
                this.#options.datatable.buttons.push(self.#buttons.advancedSearch.icon);
            }
        }

        // drawCallback
        this.#options.datatable.drawCallback = function(){
            if(typeof self.#datatable !== 'undefined'){

                // Double Click Event
                if(typeof self.#options.dblclick === 'function'){
                    self.#object.table.find('tr').off().dblclick(
                        function(event){
                            let node = $(this)
                            let data = self.#datatable.row(node).data();
                            self.#options.dblclick(event, table, node, data);
                        },
                    );
                }

                // Action Button Events
                self.#object.table.find('button').each(function(){
                    let node = $(this);
                    let li = node.parents('li');
                    let action = node.attr('data-action');
                    let row = node.parents('tr');
                    let data = self.#datatable.row(row).data();
                    node.off().click(function(event){
                        if(typeof self.#options.actions[action].action === 'function'){
                            self.#options.actions[action].action(event, table, node, row, data);
                        }
                    })
                    if(typeof self.#options.actions[action].visible === 'function'){
                        if(!self.#options.actions[action].visible(li, table, node, row, data)){
                            li.hide();
                        } else {
                            li.show();
                        }
                    }
                    if(typeof self.#options.actions[action].visible === 'boolean'){
                        if(!self.#options.actions[action].visible){
                            li.hide();
                        } else {
                            li.show();
                        }
                    }
                });
            }
        }

        // Initialize Datatable
        this.#datatable = this.#object.DataTable(this.#options.datatable);
        
        // 'B<"#SearchBuilder.collapse py-2 pt-3"<"card card-body"Q>>rtlip'
        // '<"card shadow user-select-none"<"card-header"B<"#SearchBuilder.collapse py-2 pt-3"<"card card-body"Q>><"#searchPanes.collapse py-2 pt-3"<"card card-body"P>>><"card-body p-0"t><"card-footer d-flex justify-content-between align-items-center"lip>>'

        // 	create(options = {}, callback = null){
        // 		table.init = function(){
        // 			if(this.#options.datatable.columnDefs.length > 0){
        // 				if(typeof this.#datatable === 'undefined'){
        // 					this.#options.datatable.drawCallback = function(){
        // 						if(typeof this.#datatable !== 'undefined'){
        // 							table.init()
        // 						}
        // 					}
        // 					this.#datatable = this.#object.datatable(this.#options.datatable)
        // 					if(typeof table.cardOptions !== 'undefined'){
        // 						table.card = table.closest('.card')
        // 						table.card.header = table.card.find('.card-header')
        // 						table.card.body = table.card.find('.card-body')
        // 						table.card.footer = table.card.find('.card-footer')
        // 						table.card.header.find('.dropdown-toggle').removeClass('dropdown-toggle')
        // 						table.card.header.find('.btn-group').first().addClass('border')
        // 						table.card.header.find('.btn-group').first().find('.btn.btn-secondary').removeClass('btn-secondary').addClass('btn-light')
        // 						table.card.header.title = $(document.createElement('h5')).addClass('card-title my-2 fw-light')
        // 						table.card.header.icon = $(document.createElement('i')).addClass('me-2')
        // 						if(typeof table.cardOptions.title === 'string'){
        // 							table.card.header.title.html(table.cardOptions.title).prependTo(table.card.header)
        // 							if(typeof table.cardOptions.icon === 'string'){
        // 								table.card.header.icon.addClass('bi-'+table.cardOptions.icon).prependTo(table.card.header.title)
        // 							}
        // 						}
        // 					}
        // 					Search.get().keyup(function(){
        // 						this.#datatable.search($(this).val()).draw()
        // 					})
        // 				}
        // 				return table
        // 			}
        // 		}
// 	}

        // Execute Callback
        if(typeof callback === 'function'){
            callback(this,this.#object);
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
                    case"datatable":
                        for(const [k, v] of Object.entries(value)){
                            if(typeof this.#options[key][k] !== 'undefined'){
                                this.#options[key][k] = v;
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

    add(data){
        this.#datatable.row.add(data).draw();
    }

    update(row, data){
        this.#datatable.row(row).data(data).draw();
    }

    delete(row){
        this.#datatable.row(row).remove().draw();
    }

    appendTo(object){
        
        // Append Object To
        this.#object.appendTo(object);

        // Return Object
        return this;
    }

    prependTo(object){
        
        // Prepend Object To
        this.#object.prependTo(object);

        // Return Object
        return this;
    }

    append(object){
        
        // Append Object
        this.#object.append(object);

        // Return Object
        return this;
    }

    prepend(object){
        
        // Prepend Object
        this.#object.prepend(object);

        // Return Object
        return this;
    }
}

// Template
class Template {

    #object = null;
    #options = {
        class: {
            object: null,
        },
    };

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

        // Create Object
		this.#object = $(document.createElement('div')).attr('id','object' + builderCount);
        this.#object.id = this.#object.attr('id');

        // Set Object Class
        if(this.#options.class.object){
            this.#object.addClass(this.#options.class.object);
        }

        // Execute Callback
        if(typeof callback === 'function'){
            callback(this,this.#object);
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
                    case"extend":
                        for(const [k, v] of Object.entries(value)){
                            if(typeof this.#options[key][k] !== 'undefined'){
                                this.#options[key][k] = v;
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

    appendTo(object){
        
        // Append Object To
        this.#object.appendTo(object);

        // Return Object
        return this;
    }

    prependTo(object){
        
        // Prepend Object To
        this.#object.prependTo(object);

        // Return Object
        return this;
    }

    append(object){
        
        // Append Object
        this.#object.append(object);

        // Return Object
        return this;
    }

    prepend(object){
        
        // Prepend Object
        this.#object.prepend(object);

        // Return Object
        return this;
    }
}