$(document).ready(function(){

    const Files = [
        { id:1, created:'2021-01-01 00:00:00', modified:'2021-01-01 00:00:00', owner:'john.doe@domain.com', updated_by:'john.doe@domain.com', name:'manifest.pdf', filename:'manifest.pdf', dirname:'/data/tickets/1/', checksum:'4jd6bn944t3hr5n46879aw4ret69549', file:null, type:'pdf', size:3864978, encoding:'base64', meta:'{}', isAttachment:true },
        { id:2, created:'2021-01-01 00:00:00', modified:'2021-01-01 00:00:00', owner:'john.doe@domain.com', updated_by:'john.doe@domain.com', name:'billoflading.pdf', filename:'billoflading.pdf', dirname:'/data/tickets/1/', checksum:'4jd6bn944t3hr5n46879aw4ret69549', file:null, type:'pdf', size:3864978, encoding:'base64', meta:'{}', isAttachment:true },
        { id:3, created:'2021-01-01 00:00:00', modified:'2021-01-01 00:00:00', owner:'john.doe@domain.com', updated_by:'john.doe@domain.com', name:'purchaseorder.pdf', filename:'purchaseorder.pdf', dirname:'/data/tickets/1/', checksum:'4jd6bn944t3hr5n46879aw4ret69549', file:null, type:'pdf', size:3864978, encoding:'base64', meta:'{}', isAttachment:true },
        { id:4, created:'2021-01-01 00:00:00', modified:'2021-01-01 00:00:00', owner:'john.doe@domain.com', updated_by:'john.doe@domain.com', name:'commercialinvoice.pdf', filename:'commercialinvoice.pdf', dirname:'/data/tickets/1/', checksum:'4jd6bn944t3hr5n46879aw4ret69549', file:null, type:'pdf', size:3864978, encoding:'base64', meta:'{}', isAttachment:true },
    ];
    
    const References = {
        'cargo control number': ['3896PARS88842657'],
        'container number': ['TCNU782468','TCNU396673'],
        'transaction number': ['10013000684572'],
        'purchase order': ['LHBQ'],
        'invoice number': ['INV-2021-0001'],
    };

    const Meta = [
        '3896PARS88842657',
        'TCNU782468',
        'TCNU396673',
        '10013000684572',
        'LHBQ',
        'INV-2021-0001',
    ];

    const Records = [
        {id:1,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:1,priority:1,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
        {id:2,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:2,priority:2,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
        {id:3,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:3,priority:3,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
        {id:4,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:4,priority:4,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
        {id:5,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:5,priority:1,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
        {id:6,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:6,priority:2,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
        {id:7,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:7,priority:3,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
        {id:8,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:8,priority:4,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
        {id:9,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:9,priority:1,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
        {id:10,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:1,priority:2,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
        {id:11,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:2,priority:3,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
        {id:12,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:3,priority:4,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
        {id:13,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:4,priority:1,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
        {id:14,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:5,priority:2,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
        {id:15,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:6,priority:3,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
        {id:16,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:7,priority:4,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
        {id:17,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:8,priority:1,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
        {id:18,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:9,priority:2,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
        {id:19,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:1,priority:3,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
        {id:20,created:'2021-01-01 00:00:00',modified:'2021-01-01 00:00:00',owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:2,priority:4,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'This is a sample ticket.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:'2021-01-01 00:00:00',openedOn:'2021-01-01 00:00:00',closedOn:'2021-01-01 00:00:00',references:References,meta:Meta,files:Files},
    ];

    const Statuses = {
        1: {icon:'inbox',color:'info',label:'Open','description':'The ticket is new and is waiting to be assigned to an agent.'},
        2: {icon:'door-open',color:'primary',label:'Reopened','description':'The ticket has been reopened due to new information or a recurrence of the issue.'},
        3: {icon:'person-lines-fill',color:'primary',label:'Assigned','description':'The ticket has been assigned to an agent and is being reviewed.'},
        4: {icon:'hourglass-split',color:'warning',label:'In Progress','description':'The agent is currently addressing the ticket.'},
        5: {icon:'clock-history',color:'secondary',label:'Waiting for Customer','description':'The agent needs additional information from the customer to proceed.'},
        6: {icon:'arrow-up-circle',color:'danger',label:'Escalated','description':'The ticket has been escalated to senior staff or a specialized team.'},
        7: {icon:'check2-circle',color:'success',label:'Resolved','description':'The issue has been addressed and the ticket has been resolved.'},
        8: {icon:'door-closed',color:'dark',label:'Closed','description':'The ticket has been closed and is no longer active.'},
        9: {icon:'archive',color:'light',label:'Archived','description':'The ticket has been archived for record-keeping, and is no longer active or under consideration.'},
    };

    const Priorities = {
        1: {label: 'Low', description: 'The issue is minor and does not affect functionality.', icon: 'arrow-down', color: 'secondary'},
        2: {label: 'Medium', description: 'The issue has some impact on functionality but workarounds may be available.', icon: 'arrow-left-right', color: 'info'},
        3: {label: 'High', description: 'The issue is causing significant disruption to services.', icon: 'arrow-up', color: 'warning'},
        4: {label: 'Urgent', description: 'The issue needs immediate attention, usually because it is causing a stop to critical services.', icon: 'exclamation-diamond-fill', color: 'danger'},
    };

    const ListContainer = $('#list');

    // List
    const ListCard = new Card(
        ListContainer,
        {
            class: {
                container: "w-100",
                body: "p-0",
            },
            icon: "list-check",
            title: "Ticket List",
        },
        function(card){
            const ListTable = new Table(
                card.body,
                {
                    class: {
                        buttons: "px-4 pt-4",
                        table: "border-top",
                        footer: "px-4 pt-2 pb-4",
                    },
                    showButtonsLabel: false,
                    selectTools:false,
                    columnsVisibility:false,
                    actions:{
                      details:{
                        label:'Details',
                        icon:'eye',
                        action:function(event, table, node, row, data){
                            window.location.href = "?p=dispatchDetails";
                        },
                      },
                    },
                    dblclick:function(event, table, node, data){
                        window.location.href = "?p=dispatchDetails";
                    },
                    datatable:{
                        buttons:[
                            {
                                extend: 'collection',
                                text: 'Assigned To: <i class="me-1 bi bi-person-fill"></i>Me',
                                buttons: [
                                    {
                                        text: '<i class="me-1 bi bi-person-fill"></i>Me',
                                        className: 'active',
                                        action: function ( e, dt, node, config ) {

                                            // Filter logic
                                            dt.columns(5).search( 'jane.doe@domain.com' ).draw();

                                            // Hide column
                                            dt.column(5).visible(false);

                                            // Update button label
                                            $(node).closest('.btn-group').children('.dropdown-toggle').html('Assigned To: <i class="me-1 bi bi-person-fill"></i>Me');

                                            // Set active state
                                            $(node).addClass('active').siblings().removeClass('active');
                                        },
                                        attr:  {
                                            'data-assign': 'Me'
                                        }
                                    },
                                    {
                                        text: '<i class="me-1 bi bi-people-fill"></i>All',
                                        action: function ( e, dt, node, config ) {

                                            // Filter logic
                                            dt.columns(5).search( '' ).draw();

                                            // Show column
                                            dt.column(5).visible(true);

                                            // Update button label
                                            $(node).closest('.btn-group').children('.dropdown-toggle').html('Assigned To: <i class="me-1 bi bi-people-fill"></i>All');

                                            // Set active state
                                            $(node).addClass('active').siblings().removeClass('active');
                                        },
                                        attr:  {
                                            'data-assign': 'All'
                                        }
                                    }
                                ]
                            },
                            {
                                extend: 'collection',
                                text: 'Created By: <i class="me-1 bi bi-person-fill"></i>Me',
                                buttons: [
                                    {
                                        text: '<i class="me-1 bi bi-person-fill"></i>Me',
                                        className: 'active',
                                        action: function ( e, dt, node, config ) {

                                            // Filter logic
                                            dt.columns(2).search( 'michael.smith@domain.com' ).draw();

                                            // Hide column
                                            dt.column(2).visible(false);

                                            // Update button label
                                            $(node).closest('.btn-group').children('.dropdown-toggle').html('Created By: <i class="me-1 bi bi-person-fill"></i>Me');

                                            // Set active state
                                            $(node).addClass('active').siblings().removeClass('active');
                                        },
                                        attr:  {
                                            'data-owner': 'Me'
                                        }
                                    },
                                    {
                                        text: '<i class="me-1 bi bi-people-fill"></i>All',
                                        action: function ( e, dt, node, config ) {

                                            // Filter logic
                                            dt.columns(2).search( '' ).draw();

                                            // Show column
                                            dt.column(2).visible(true);

                                            // Update button label
                                            $(node).closest('.btn-group').children('.dropdown-toggle').html('Created By: <i class="me-1 bi bi-people-fill"></i>All');

                                            // Set active state
                                            $(node).addClass('active').siblings().removeClass('active');
                                        },
                                        attr:  {
                                            'data-owner': 'All'
                                        }
                                    }
                                ]
                            }
                        ],
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
                                    // Get Gravatar
                                    var gravatar = new Gravatar(data, {size: '32px'});

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
                                        .attr('src',gravatar.url())
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
                                    var badge = Statuses[data];
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
                                    var badge = Priorities[data];
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
                                    // Get Gravatar
                                    var gravatar = new Gravatar(data, {size: '32px'});

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
                                        .attr('src',gravatar.url())
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
                },
                function(table,datatable){
                    datatable.columns(2).search('michael.smith@domain.com').draw();
                    datatable.column(2).visible(false);
                    datatable.columns(5).search('jane.doe@domain.com').draw();
                    datatable.column(5).visible(false);
                    for(const [key, record] of Object.entries(Records)){
                        if(record.status >= 9){
                            table.add(record);
                        }
                    }
                }, 
            );
        },
    );
});