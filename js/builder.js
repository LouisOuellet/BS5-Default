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
                if (typeof param === 'string') {
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
                if (typeof param === 'string') {
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
            callback(this.#progress,this.#bar);
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
        this.#bar.css({width:value + '%'}).attr('aria-valuenow',value).text(value + '%');

        // Set Label
        if(this.#options.label){
            this.#bar.label.html(this.#options.label).replace('[NOW]', value).replace('[SCALE]', this.#options.scale);
        }

        // Return Object
        return this;
    }
}

// Card
class Card {

    #card = null;
    #options = {
        class: {
            card: null,
            header: null,
            body: null,
            footer: false,
        },
        color: 'primary',
        icon: null,
        title: null,
        body: null,
        footer: null,
        strech: false,
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
                if (typeof param === 'string') {
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
		this.#card.tools.collapse = $(document.createElement('a')).addClass('ms-3 link-dark text-decoration-none cursor-pointer').appendTo(this.#card.tools);
		this.#card.tools.collapse.icon = $(document.createElement('i')).addClass('bi-chevron-bar-contract').appendTo(this.#card.tools.collapse);
		this.#card.tools.fullscreen = $(document.createElement('a')).addClass('ms-3 link-dark text-decoration-none cursor-pointer').appendTo(this.#card.tools);
		this.#card.tools.fullscreen.icon = $(document.createElement('i')).addClass('bi-fullscreen').appendTo(this.#card.tools.fullscreen);
		this.#card.tools.close = $(document.createElement('a')).addClass('ms-3 link-dark text-decoration-none cursor-pointer').appendTo(this.#card.tools);
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
        if(self.#options.strech){
            this.#card.collapse.addClass('h-100');
            this.#card.addClass('h-100');
            this.#card.body.collapse.addClass('h-100');
            this.#card.body.addClass('d-flex h-100 overflow-auto');
        }

        // Configure Card Tools
        // Close Button
        if(self.#options.close){
            console.log('close')
            this.#card.collapse.bs = new bootstrap.Collapse(this.#card.collapse,{toggle:false});
            console.log(this.#card.tools.close)
            this.#card.tools.close.click(function(){
                console.log(self.#card.collapse)
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

// Badge
class Badge {

    #badge = null;
    #options = {
        class: {
            badge: null,
            iconFrame: null,
            content: null,
        },
        icon: 'circle',
        color: 'primary',
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
                if (typeof param === 'string') {
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

        // Create Badge
		this.#badge = $(document.createElement('div')).attr('id','badge' + builderCount).addClass('card p-2');
        this.#badge.row = $(document.createElement('div')).addClass('d-flex').appendTo(this.#badge);
        this.#badge.iconFrame = $(document.createElement('div')).addClass('d-flex justify-content-center align-items-center rounded').css({width:'64px',height:'64px'}).appendTo(this.#badge.row);
        this.#badge.iconFrame.icon = $(document.createElement('i')).addClass('bi fs-3').appendTo(this.#badge.iconFrame);
        this.#badge.content = $(document.createElement('div')).addClass('flex-grow-1 d-flex flex-column justify-content-center align-items-start ms-3').appendTo(this.#badge.row);

        // Set Badge Icon
        if(this.#options.icon){
            this.#badge.iconFrame.icon.addClass('bi-' + this.#options.icon);
        }

        // Set Badge Color
        if(this.#options.color){
            this.#badge.iconFrame.addClass('text-bg-' + this.#options.color);
        }

        // Set Badge Class
        if(this.#options.class.badge){
            this.#badge.addClass(this.#options.class.badge);
        }

        // Set Badge Icon Frame Class
        if(this.#options.class.iconFrame){
            this.#badge.iconFrame.addClass(this.#options.class.iconFrame);
        }

        // Set Badge Content Class
        if(this.#options.class.content){
            this.#badge.content.addClass(this.#options.class.content);
        }

        // Execute Callback
        if(typeof callback === 'function'){
            callback(this.#badge);
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
        this.#badge.appendTo(object);

        // Return Object
        return this;
    }

    prependTo(object){
        
        // Prepend Object To
        this.#badge.prependTo(object);

        // Return Object
        return this;
    }

    append(object){
        
        // Append Object
        this.#badge.append(object);

        // Return Object
        return this;
    }

    prepend(object){
        
        // Prepend Object
        this.#badge.prepend(object);

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
                if (typeof param === 'string') {
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
            callback(this.#timeline);
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
                if (typeof param === 'string') {
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
            callback(this.#feed);
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