class UtilityClass  {
    
    _builder = null;
    _id = null;

    constructor(){

        // Set Builder
        this._builder = builder;

        // Generate Incremental ID
        this._id = this._builder.count();
    }
}

class ComponentClass extends UtilityClass {

    _bootstrap = null;
    _selector = null;
    _options = {};
    _callback = null;
    _component = null;
    _properties = {};
    _counter = 0;

    constructor(builder, param1 = null, param2 = null, param3 = null){
        
        // Call Parent
        super(builder);

        // Set Self
        const self = this;

        // Set selector, options, and callback
        [param1, param2, param3].forEach(param => {
            if(param !== null){
                if (typeof param === 'string' || param instanceof jQuery) {
                    if(typeof param === 'string'){
                        param = $(param);
                    }
                    self._selector = param;
                } else if (typeof param === 'object') {
                    self._options = param;
                } else if (typeof param === 'function') {
                    self._callback = param;
                }
            }
        });

        // Init Component
        this._init();

        // Configure Options
        this.config(this._options);

        // Create Component
        this._create();
        
        // Execute Callback
        if(typeof this._callback === 'function'){
            setTimeout(() => this._callback(this, this._component), 0);
        }

        // Timeout
        setTimeout(() => this._timeout(), 0);

        // Insert Component
        this._insert();
    }

    _create(){}

    _init(){}

    _timeout(){}

    _config(name,options){
        if(typeof this._properties[name] !== 'undefined'){
            switch(name){
                default:
                    this._properties[name] = options;
                    break;
            }
        }
    }

    _insert(){
        // Check if Selector is Set
        if(this._component && this._selector){

            // Append to Selector
            this.appendTo(this._selector);
        }
    }

    _count(){
        this._counter++;
        return this._counter;
    }

    config(options = null){

        // Check if Options is Set
        if(options == null){
            options = this._options;
        }

        // Configure Options
        for(const [key, value] of Object.entries(options)){
            if(typeof this._properties[key] !== 'undefined'){
                switch(key){
                    case"callback":
                    case"properties":
                        for(const [k, v] of Object.entries(value)){
                            if(typeof this._properties[key][k] !== 'undefined'){
                                this._properties[key][k] = v;
                            }
                        }
                        break;
                    case"class":
                        for(const [section, classes] of Object.entries(value)){
                            if(this._properties[key][section] != null){
                                this._properties[key][section] += ' ' + classes;
                            } else {
                                this._properties[key][section] = classes;
                            }
                        }
                        break;
                    default:
                        if(typeof value === 'object'){
                            this._config(key,value);
                        } else {
                            this._properties[key] = value;
                        }
                        break;
                }
            }
        }

        // Return Object
        return this;
    }

    appendTo(object){
        
        // Append Object To
        this._component.appendTo(object);

        // Return Object
        return this;
    }

    prependTo(object){
        
        // Prepend Object To
        this._component.prependTo(object);

        // Return Object
        return this;
    }

    append(object){
        
        // Append Object
        this._component.append(object);

        // Return Object
        return this;
    }

    prepend(object){
        
        // Prepend Object
        this._component.prepend(object);

        // Return Object
        return this;
    }

    text(){

        // Return Object
        return this._component.text();
    }

    html(){

        // Return Object
        return this._component.html();
    }

    outerHTML(){

        // Return Object
        return this._component[0].outerHTML;
    }

    show(){

        // Show Object
        this._component.show();

        // Return Object
        return this;
    }

    hide(){

        // Hide Object
        this._component.hide();

        // Return Object
        return this;
    }
}

class Layout extends ComponentClass {

    _init(){
        this._properties = {};
    }

    _create(){

        // Set Self
        const self = this;

        // Create Component
        this._component = $(document.createElement('div')).attr({
            'id': 'layout' + this._id,
            'class': 'row',
        });
        this._component.id = this._component.attr('id');

        // Set Component Class
        if(this._properties.class.component){
            this._component.addClass(this._properties.class.component);
        }
    }
}

$(document).ready(function(){
    layoutClass = new Layout(
        builder, 
        '#playground',
        {
            link:{
                articles: '?t=layouts&p=articles',
                contactus: '?t=layouts&p=contactus',
            },
        },
        function(layout, component){
        },
    );
});