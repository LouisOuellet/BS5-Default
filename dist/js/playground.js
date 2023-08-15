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
        this._properties = {
            class: {
                component: null,
            },
            title: null,
            icon: null,
            actions:{},
            buttons:[],
            columnDefs:[],
            dblclick:function(event, table, node, data){},
        };
    }
            
    _config(name,options){
        if(typeof this._properties[name] !== 'undefined'){
            switch(name){
                default:
                    this._properties[name] = options;
                    break;
            }
        }
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

        // Create Card
        this._component.card = this._builder.Component(
            'card',
            this._component,
            {
                class: {
                    collapse: "w-100",
                },
                icon: this._properties.icon,
                title: this._properties.title,
            },
            function(card,component){
                component.body.addClass('p-0');
                self._component.table = self._builder.Component(
                    'table',
                    component.body,
                    {
                        class: {
                            buttons: "px-4 pt-4",
                            table: "border-top",
                            footer: "px-4 pt-2 pb-4",
                        },
                        showButtonsLabel: true,
                        selectTools:true,
                        actions:self._properties.actions,
                        datatable:{
                            columnDefs:self._properties.columnDefs,
                            buttons:self._properties.buttons,
                        },
                        dblclick:self._properties.dblclick,
                    },
                );
            },
        );
    }

    add(data){

        this._component.table.add(data);
    }

    update(row, data){

        this._component.table.update(row, data);
    }

    delete(row){

        this._component.table.delete(row);
    }
}

$(document).ready(function(){

    // Create Layout
    layoutClass = new Layout(
        builder, 
        '#playground',
        {
            title: 'Tickets',
            icon: 'ticket-perforated',
            dblclick:function(event, table, node, data){
                window.location.href = "?t=layouts&p=details";
            },
            actions:{
                details:{
                  label:'Details',
                  icon:'eye',
                  action:function(event, table, node, row, data){
                      window.location.href = "?t=layouts&p=ticket";
                  },
                },
              },
            buttons:[],
            columnDefs:[
                { target: 0, visible: true, title: 'Ticket#', name: 'id', data: 'id' },
                { target: 1, visible: true, title: 'Subject', name: 'subject', data: 'subject' },
                {
                    target: 2,
                    visible: true,
                    title: 'Owner',
                    name: 'owner',
                    data: 'owner',
                    render: function(data, type, row) {

                        // Create Badge
                        var object = $(document.createElement('span'))
                            .addClass('d-flex align-items-center')
                            .attr('data-bs-toggle','tooltip')
                            .attr('data-bs-placement','top')
                            .attr('title',data)
                            .attr('data-bs-title',data)
                            .text(data);

                        // Create avatar
                        var avatar = $(document.createElement('img'))
                            .addClass('rounded-circle me-1')
                            .attr('alt',data)
                            .css({
                                width: '32px',
                                height: '32px',
                            })
                            .attr('src',builder.Helper.gravatar(data,{size: '32px'}))
                            .prependTo(object);

                        // Return outerHTML
                        return object.prop('outerHTML');
                    },
                },
                {
                    target: 3,
                    visible: true,
                    title: 'Status',
                    name: 'status',
                    data: 'status',
                    render: function(data, type, row) {
                        var badge = sampleStatuses.tickets[data];
                        var object = $(document.createElement('span'))
                            .addClass('badge text-bg-'+ badge.color)
                            .attr('data-bs-toggle','tooltip')
                            .attr('data-bs-placement','top')
                            .attr('title',badge.description)
                            .attr('data-bs-title',badge.description)
                            .text(badge.label);
                        var icon = $(document.createElement('i'))
                            .addClass('me-1 bi bi-'+badge.icon)
                            .prependTo(object);
                        return object.prop('outerHTML');
                    },
                },
                {
                    target: 4,
                    visible: true, 
                    title: 'Priority', 
                    name: 'priority', 
                    data: 'priority',
                    render: function(data, type, row) {
                        var badge = samplePriorities.tickets[data];
                        var object = $(document.createElement('span'))
                            .addClass('badge text-bg-'+ badge.color)
                            .attr('data-bs-toggle','tooltip')
                            .attr('data-bs-placement','top')
                            .attr('title',badge.description)
                            .attr('data-bs-title',badge.description)
                            .text(badge.label);
                        var icon = $(document.createElement('i'))
                            .addClass('me-1 bi bi-'+badge.icon)
                            .prependTo(object);
                        return object.prop('outerHTML');
                    },
                },
                {
                    target: 5, 
                    visible: true, 
                    title: 'Assigned to', 
                    name: 'assignedTo', 
                    data: 'assignedTo',
                    render: function(data, type, row) {
                        // Create Badge
                        var object = $(document.createElement('span'))
                            .addClass('d-flex align-items-center')
                            .attr('data-bs-toggle','tooltip')
                            .attr('data-bs-placement','top')
                            .attr('title',data)
                            .attr('data-bs-title',data)
                            .text(data);

                        // Create avatar
                        var avatar = $(document.createElement('img'))
                            .addClass('rounded-circle me-1')
                            .attr('alt',data)
                            .css({
                                width: '32px',
                                height: '32px',
                            })
                            .attr('src',builder.Helper.gravatar(data,{size: '32px'}))
                            .prependTo(object);

                        // Return outerHTML
                        return object.prop('outerHTML');
                    },
                },
                {
                    target: 6,
                    visible: true,
                    title: 'Since',
                    name: 'openedOn',
                    data: 'openedOn',
                    render: function(data, type, row) {
                        var datetime = new Date(data);
                        var badge = $(document.createElement('time'))
                            .addClass('timeago ')
                            .attr('data-bs-toggle','tooltip')
                            .attr('data-bs-placement','top')
                            .attr('title',datetime.toLocaleString())
                            .attr('data-bs-title',datetime.toLocaleString())
                            .attr('datetime',datetime.toISOString())
                            .text(datetime.toLocaleString());
                        return badge.prop('outerHTML');
                    },
                },
                { target: 7, visible: false, responsivePriority: 7, title: 'Created on', name: 'created', data: 'created' },
                { target: 8, visible: false, responsivePriority: 8, title: 'Modified on', name: 'modified', data: 'modified' },
                { target: 9, visible: false, responsivePriority: 9, title: 'Office', name: 'office', data: 'office' },
                { target: 10, visible: false, responsivePriority: 10, title: 'Team', name: 'team', data: 'team' },
                { target: 11, visible: false, responsivePriority: 11, title: 'Category', name: 'category', data: 'category' },
                { target: 12, visible: false, responsivePriority: 12, title: 'Sub Category', name: 'subCategory', data: 'subCategory' },
                { target: 13, visible: false, responsivePriority: 13, title: 'Item', name: 'item', data: 'item' },
                { target: 14, visible: false, responsivePriority: 14, title: 'Description', name: 'description', data: 'description' },
                { target: 15, visible: false, responsivePriority: 15, title: 'Assigned by', name: 'assignedBy', data: 'assignedBy' },
                { target: 16, visible: false, responsivePriority: 16, title: 'Assigned on', name: 'assignedOn', data: 'assignedOn' },
                { target: 17, visible: false, responsivePriority: 17, title: 'Closed on', name: 'closedOn', data: 'closedOn' },
                { target: 18, visible: false, responsivePriority: 18, title: 'References', name: 'references', data: 'references' },
                { target: 19, visible: false, responsivePriority: 19, title: 'Meta Data', name: 'meta', data: 'meta' },
                { target: 20, visible: false, responsivePriority: 20, title: 'Files', name: 'files', data: 'files' },
            ],
        },
        function(layout, component){
            for(const [key, record] of Object.entries(sampleRecords.tickets)){
                if(record.status < 9){
                    layout.add(record);
                }
            }
        },
    );
});