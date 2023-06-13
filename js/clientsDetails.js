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

    const Ticket = Records[3];

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

    const DetailsContainer = $('#details');

    // Details
    const DetailsCard = new Card(
        DetailsContainer,
        {
            class: {
                container: "w-100",
                body: "p-0",
            },
            icon: "chat-dots",
            title: 'Ticket#-' + Ticket.id,
        },
        function(card){

            // Create Grid
            var row = $(document.createElement('div')).addClass('row').appendTo(card.body);
            row.col1 = $(document.createElement('div')).addClass('col-8').appendTo(row);
            row.col2 = $(document.createElement('div')).addClass('col-4').appendTo(row);
            row.col2.row1 = $(document.createElement('div')).addClass('row p-3').appendTo(row.col2);
            row.col2.row1.col1 = $(document.createElement('div')).addClass('col-12').appendTo(row.col2.row1);
            row.col1.row1 = $(document.createElement('div')).addClass('row p-3').appendTo(row.col1);
            row.col1.row1.col1 = $(document.createElement('div')).addClass('col-6').appendTo(row.col1.row1);
            row.col1.row1.col2 = $(document.createElement('div')).addClass('col-6').appendTo(row.col1.row1);
            row.col1.row1.col3 = $(document.createElement('div')).addClass('col-12').appendTo(row.col1.row1);
            row.col1.row2 = $(document.createElement('div')).addClass('row p-3').appendTo(row.col1);
            row.col1.row2.col1 = $(document.createElement('div')).addClass('col-12').appendTo(row.col1.row2);
            row.col1.row3 = $(document.createElement('div')).addClass('row p-3').appendTo(row.col1);
            row.col1.row3.col1 = $(document.createElement('div')).addClass('col-12').appendTo(row.col1.row3);

            var statusBox = new Box(
                row.col1.row1.col1,
                {
                    class: {
                        box: 'h-100 cursor-pointer',
                    },
                    icon:Statuses[Ticket.status].icon,
                    color:Statuses[Ticket.status].color,
                    type: "small",
                },
                function(box){
                    
                    // Set Content
                    var header = $(document.createElement("h4")).html(Statuses[Ticket.status].label).appendTo(box.content);
                    var paragraph = $(document.createElement("p")).addClass().html("Status").appendTo(box.content);

                    // Change Status
                    box.modal = new Modal(
                        box,
                        {
                            callback: {
                                submit: function(element,modal){
                                    console.log("Submit", element,modal);
                                },
                            },
                            icon: "question-circle",
                            title: "Change status to",
                        },
                        function(element,modal){
                            element.select = $(document.createElement("select")).addClass('form-select w-100').appendTo(element.dialog.content.body);
                            for(const [key, value] of Object.entries(Statuses)){
                                $(document.createElement("option")).attr('value',key).html(value.label).appendTo(element.select);
                            }
                            element.select.val(Ticket.status);
                        },
                    );
                }
            );

            var priorityBox = new Box(
                row.col1.row1.col2,
                {
                    class: {
                        box: 'h-100 cursor-pointer',
                    },
                    icon:Priorities[Ticket.priority].icon,
                    color:Priorities[Ticket.priority].color,
                    type: "small",
                },
                function(box){
                    
                    // Set Content
                    var header = $(document.createElement("h4")).html(Priorities[Ticket.priority].label).appendTo(box.content);
                    var paragraph = $(document.createElement("p")).addClass().html("Priority").appendTo(box.content);

                    // Change Priority
                    box.modal = new Modal(
                        box,
                        {
                            callback: {
                                submit: function(element,modal){
                                    console.log("Submit", element,modal);
                                },
                            },
                            icon: "question-circle",
                            title: "Change priority to",
                        },
                        function(element,modal){
                            element.select = $(document.createElement("select")).addClass('form-select w-100').appendTo(element.dialog.content.body);
                            for(const [key, value] of Object.entries(Priorities)){
                                $(document.createElement("option")).attr('value',key).html(value.label).appendTo(element.select);
                            }
                            element.select.val(Ticket.priority);
                        },
                    );
                }
            );

            var controls = $(document.createElement("div")).addClass('btn-group w-100 mt-3').appendTo(row.col1.row1.col3);
            controls.reply = $(document.createElement("button")).addClass('btn btn-primary').html("Reply").appendTo(controls);
            controls.reply.icon = $(document.createElement("i")).addClass('bi bi-reply me-2').prependTo(controls.reply);
            controls.share = $(document.createElement("button")).addClass('btn btn-info').html("Share").appendTo(controls);
            controls.share.icon = $(document.createElement("i")).addClass('bi bi-share me-2').prependTo(controls.share);
            controls.close = $(document.createElement("button")).addClass('btn btn-dark').html("Close").appendTo(controls);
            controls.close.icon = $(document.createElement("i")).addClass('bi bi-x-circle me-2').prependTo(controls.close);
            controls.archive = $(document.createElement("button")).addClass('btn btn-light').html("Archive").appendTo(controls);
            controls.archive.icon = $(document.createElement("i")).addClass('bi bi-archive me-2').prependTo(controls.archive);

            var subject = $(document.createElement("h2")).html(Ticket.subject).appendTo(row.col1.row2.col1);
            var description = $(document.createElement("p")).html(Ticket.description).appendTo(row.col1.row2.col1);

            const ticketFeed = new Feed(
                row.col1.row3.col1, //Selector or JQuery Object to appendTo
                {
                    controls:{
                        note:{
                            icon:"sticky",
                            label:"Note",
                            callback:function(control,post,feed){},
                        },
                        edit:{
                            icon:"pencil-square",
                            color:"warning",
                            label:"Edit",
                            callback:function(control,post,feed){},
                        },
                        delete:{
                            icon:"trash",
                            color:"danger",
                            label:"Delete",
                            callback:function(control,post,feed){},
                        },
                    },
                },
                function(feed){
                    feed.post(
                        {
                            datetime: null,
                            username: "louis@laswitchtech.com",
                            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        },
                        function(post,feed){},
                    );
                    feed.post(
                        {
                            datetime: null,
                            username: "louis@laswitchtech.com",
                            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        },
                        function(post,feed){},
                    );
                    feed.post(
                        {
                            datetime: null,
                            username: "louis@laswitchtech.com",
                            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        },
                        function(post,feed){},
                    );
                    feed.post(
                        {
                            datetime: null,
                            username: "louis@laswitchtech.com",
                            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        },
                        function(post,feed){},
                    );
                    feed.post(
                        {
                            datetime: null,
                            username: "louis@laswitchtech.com",
                            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        },
                        function(post,feed){},
                    );
                }, 
            );

            var ticketAssigned = $(document.createElement("h4")).html('Assigned To').appendTo(row.col2.row1.col1);
            ticketAssigned.container = $(document.createElement("div")).addClass('d-flex justify-content-start align-items-center ms-2 user-select-none cursor-pointer').appendTo(row.col2.row1.col1);
            ticketAssigned.container.avatar = new Avatar(
                Ticket.assignedTo,
                {
                    class: {
                        object: "rounded-circle",
                    },
                    extension: false,
                    size: "48px",
                    default: "mp",
                    force: false,
                    rating: false,
                },
            ).appendTo(ticketAssigned.container);
            ticketAssigned.container.contactInfo = $(document.createElement("div")).addClass('ms-2 d-flex flex-column justify-content-center align-items-start').appendTo(ticketAssigned.container);
            ticketAssigned.container.contactInfo.contact = $(document.createElement("strong")).text(Ticket.assignedTo).appendTo(ticketAssigned.container.contactInfo);
            ticketAssigned.container.contactInfo.contact = $(document.createElement("span")).text('Team Lead Customer Support').appendTo(ticketAssigned.container.contactInfo);
            // Change Assigned To
            ticketAssigned.modal = new Modal(
                ticketAssigned.container,
                {
                    callback: {
                        submit: function(element,modal){
                            console.log("Submit", element,modal);
                        },
                    },
                    icon: "question-circle",
                    title: "Assign ticket to",
                },
                function(element,modal){
                    element.select = $(document.createElement("select")).addClass('form-select w-100').appendTo(element.dialog.content.body);
                    $(document.createElement("option")).attr('value','emma.johnson@domain.com').html('emma.johnson@domain.com').appendTo(element.select);
                    $(document.createElement("option")).attr('value','michael.smith@domain.com').html('michael.smith@domain.com').appendTo(element.select);
                    $(document.createElement("option")).attr('value','john.doe@domain.com').html('john.doe@domain.com').appendTo(element.select);
                    $(document.createElement("option")).attr('value','jane.doe@domain.com').html('jane.doe@domain.com').appendTo(element.select);
                    $(document.createElement("option")).attr('value','david.brown@domain.com').html('david.brown@domain.com').appendTo(element.select);
                    element.select.val(Ticket.assignedTo);
                },
            );

            var details = $(document.createElement("div")).addClass('mt-3 d-flex flex-column justify-content-center align-items-start').appendTo(row.col2.row1.col1);
            details.header = $(document.createElement("h4")).html('Details').appendTo(details);
            details.category = $(document.createElement("strong")).addClass('mt-2').html('Category: ').appendTo(details);
            details.category.select = $(document.createElement("select")).addClass('form-select w-100').appendTo(details);
            $(document.createElement("option")).attr('value','Customs').html('Customs').appendTo(details.category.select);
            $(document.createElement("option")).attr('value','Consultation').html('Consultation').appendTo(details.category.select);
            $(document.createElement("option")).attr('value','Logistic').html('Logistic').appendTo(details.category.select);
            $(document.createElement("option")).attr('value','Sales').html('Sales').appendTo(details.category.select);
            $(document.createElement("option")).attr('value','Billing').html('Billing').appendTo(details.category.select);
            $(document.createElement("option")).attr('value','Human Ressources').html('Human Ressources').appendTo(details.category.select);
            $(document.createElement("option")).attr('value','Support').html('Support').appendTo(details.category.select);
            $(document.createElement("option")).attr('value','Other').html('Other').appendTo(details.category.select);
            details.category.select.val(Ticket.category);
            details.subCategory = $(document.createElement("strong")).addClass('mt-2').html('Sub Category: ').appendTo(details);
            details.subCategory.select = $(document.createElement("select")).addClass('form-select w-100').appendTo(details);
            $(document.createElement("option")).attr('value','Dispatch').html('Dispatch').appendTo(details.subCategory.select);
            $(document.createElement("option")).attr('value','Tracking').html('Tracking').appendTo(details.subCategory.select);
            $(document.createElement("option")).attr('value','Appeal').html('Appeal').appendTo(details.subCategory.select);
            $(document.createElement("option")).attr('value','Rulling').html('Rulling').appendTo(details.subCategory.select);
            $(document.createElement("option")).attr('value','B2').html('B2').appendTo(details.subCategory.select);
            $(document.createElement("option")).attr('value','CITT').html('CITT').appendTo(details.subCategory.select);
            $(document.createElement("option")).attr('value','General').html('General').appendTo(details.subCategory.select);
            $(document.createElement("option")).attr('value','Vacation Request').html('Vacation Request').appendTo(details.subCategory.select);
            $(document.createElement("option")).attr('value','Sick Request').html('Sick Request').appendTo(details.subCategory.select);
            $(document.createElement("option")).attr('value','Complaint').html('Complaint').appendTo(details.subCategory.select);
            $(document.createElement("option")).attr('value','Evaluation').html('Evaluation').appendTo(details.subCategory.select);
            $(document.createElement("option")).attr('value','Network').html('Network').appendTo(details.subCategory.select);
            $(document.createElement("option")).attr('value','Server').html('Server').appendTo(details.subCategory.select);
            $(document.createElement("option")).attr('value','Assistance').html('Assistance').appendTo(details.subCategory.select);
            $(document.createElement("option")).attr('value','Other').html('Other').appendTo(details.subCategory.select);
            details.subCategory.select.val(Ticket.subCategory);
            details.item = $(document.createElement("strong")).addClass('mt-2').html('Item: ').appendTo(details);
            details.item.select = $(document.createElement("select")).addClass('form-select w-100').appendTo(details);
            $(document.createElement("option")).attr('value','eM Client').html('eM Client').appendTo(details.item.select);
            $(document.createElement("option")).attr('value','Auto-Reply').html('Auto-Reply').appendTo(details.item.select);
            $(document.createElement("option")).attr('value','ITMR4').html('ITMR4').appendTo(details.item.select);
            $(document.createElement("option")).attr('value','Portal').html('Portal').appendTo(details.item.select);
            $(document.createElement("option")).attr('value','ITMR5').html('ITMR5').appendTo(details.item.select);
            $(document.createElement("option")).attr('value','Other').html('Other').appendTo(details.item.select);
            details.item.select.val(Ticket.item);
            details.submit = $(document.createElement("div")).addClass('px-3 w-100 mt-3').appendTo(details);
            details.submit.button = $(document.createElement("button")).addClass('btn btn-success w-100').html('Save changes').appendTo(details.submit);
            details.submit.button.icon = $(document.createElement("i")).addClass('bi bi-save me-2').prependTo(details.submit.button);

            var files = $(document.createElement("div")).addClass('mt-3 d-flex flex-column justify-content-center align-items-start').appendTo(row.col2.row1.col1);
            files.header = $(document.createElement("h4")).html('Files').appendTo(files);
            files.list = new List(
                files,
                {
                    class: { list: "bg-transparent rounded w-100 border-0" },
                    tools: { upload: { icon: "upload", label: "Upload", color: "success", callback: function(tool){} } },
                    actions: {
                        view: { icon: "eye", color: "primary", callback: function(action){} },
                        download: { icon: "download", color: "success", callback: function(action){} },
                        delete: { icon: "trash", color: "danger", callback: function(action){} },
                    },
                },
                function(list){
                    for(const [key, file] of Object.entries(Ticket.files)){
                        var icon = "file-earmark";
                        list.item(
                            { icon: icon, field: file.filename, click: function(item){} },
                            function(item){},
                        );
                    }
                }, 
            );

            var references = $(document.createElement("div")).addClass('mt-3 d-flex flex-column justify-content-center align-items-start').appendTo(row.col2.row1.col1);
            references.header = $(document.createElement("h4")).html('References').appendTo(references);
            references.list = new List(
                references,
                {
                    class: { list: "bg-transparent rounded w-100 border-0" },
                    tools: { upload: { icon: "plus-lg", label: "Add", color: "success", callback: function(tool){} } },
                },
                function(list){
                    for(const [category, values] of Object.entries(Ticket.references)){
                        list.item(
                            function(item){
                                item.field.container = $(document.createElement("div")).addClass('d-flex justify-content-start align-items-center').appendTo(item.field);
                                item.field.category = $(document.createElement("strong")).addClass('me-2 text-capitalize').html(category + ':').appendTo(item.field.container);
                                item.field.values = $(document.createElement("div")).appendTo(item.field.container);
                                item.field.values.list = {};
                                for(const [key, value] of Object.entries(values)){
                                    item.field.values.list[key] = $(document.createElement("div")).addClass('btn-group m-1').appendTo(item.field.values);
                                    item.field.values.list[key].value = $(document.createElement("button")).addClass('btn btn-sm btn-primary').html(value).appendTo(item.field.values.list[key]);
                                    item.field.values.list[key].delete = $(document.createElement("button")).addClass('btn btn-sm btn-danger').appendTo(item.field.values.list[key]);
                                    item.field.values.list[key].delete.icon = $(document.createElement("i")).addClass('bi bi-x').appendTo(item.field.values.list[key].delete);
                                    item.field.values.list[key].value.click(function(){
                                        Helper.copyToClipboard(value);
                                    });
                                    item.field.values.list[key].delete.click(function(){
                                        item.field.values.list[key].remove();
                                    });
                                }
                            },
                        );
                    }
                }, 
            );

            var meta = $(document.createElement("div")).addClass('mt-3 d-flex flex-column justify-content-center align-items-start').appendTo(row.col2.row1.col1);
            meta.header = $(document.createElement("h4")).html('Meta').appendTo(meta);
            meta.list = new List(
                meta,
                {
                    class: { list: "bg-transparent rounded w-100 border-0" },
                    tools: { upload: { icon: "plus-lg", label: "Add", color: "success", callback: function(tool){} } },
                    actions: {
                        delete: { icon: "trash", color: "danger", callback: function(action){} },
                    },
                },
                function(list){
                    for(const [key, value] of Object.entries(Ticket.meta)){
                        list.item(
                            { field: value, click: function(item){} },
                            function(item){},
                        );
                    }
                }, 
            );
        },
    );
});