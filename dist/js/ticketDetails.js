$(document).ready(function(){

    const DemoDate = '2021-01-01 00:00:00';

    const Files = [
        { id:1, created:DemoDate, modified:DemoDate, owner:'john.doe@domain.com', updated_by:'john.doe@domain.com', name:'manifest.pdf', filename:'manifest.pdf', dirname:'/data/tickets/1/', checksum:'4jd6bn944t3hr5n46879aw4ret69549', file:null, type:'pdf', size:3864978, encoding:'base64', meta:'{}', isAttachment:true },
        { id:2, created:DemoDate, modified:DemoDate, owner:'john.doe@domain.com', updated_by:'john.doe@domain.com', name:'billoflading.pdf', filename:'billoflading.pdf', dirname:'/data/tickets/1/', checksum:'4jd6bn944t3hr5n46879aw4ret69549', file:null, type:'pdf', size:3864978, encoding:'base64', meta:'{}', isAttachment:true },
        { id:3, created:DemoDate, modified:DemoDate, owner:'john.doe@domain.com', updated_by:'john.doe@domain.com', name:'purchaseorder.pdf', filename:'purchaseorder.pdf', dirname:'/data/tickets/1/', checksum:'4jd6bn944t3hr5n46879aw4ret69549', file:null, type:'pdf', size:3864978, encoding:'base64', meta:'{}', isAttachment:true },
        { id:4, created:DemoDate, modified:DemoDate, owner:'john.doe@domain.com', updated_by:'john.doe@domain.com', name:'commercialinvoice.pdf', filename:'commercialinvoice.pdf', dirname:'/data/tickets/1/', checksum:'4jd6bn944t3hr5n46879aw4ret69549', file:null, type:'pdf', size:3864978, encoding:'base64', meta:'{}', isAttachment:true },
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

    const Contacts = [
        {id: 'michael.smith@domain.com', text: 'michael.smith@domain.com'},
        {id: 'emma.johnson@domain.com', text: 'emma.johnson@domain.com'},
        {id: 'john.doe@domain.com', text: 'john.doe@domain.com'},
        {id: 'jane.doe@domain.com', text: 'jane.doe@domain.com'},
        {id: 'david.brown@domain.com', text: 'david.brown@domain.com'},
    ];

    const Posts = [
        {id:1,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {id:2,created:DemoDate,modified:DemoDate,owner:'jane.doe@domain.com',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {id:3,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {id:4,created:DemoDate,modified:DemoDate,owner:'jane.doe@domain.com',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {id:5,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    ];

    const Records = [
        {id:1,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:1,priority:1,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
        {id:2,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:2,priority:2,category:'HR',subCategory:'Request',item:'Vacation Request',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
        {id:3,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:3,priority:3,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
        {id:4,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:4,priority:4,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
        {id:5,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:5,priority:1,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
        {id:6,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:6,priority:2,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
        {id:7,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:7,priority:3,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
        {id:8,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:8,priority:4,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
        {id:9,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:9,priority:1,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
        {id:10,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:1,priority:2,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
        {id:11,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:2,priority:3,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
        {id:12,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:3,priority:4,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
        {id:13,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:4,priority:1,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
        {id:14,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:5,priority:2,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
        {id:15,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:6,priority:3,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
        {id:16,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:7,priority:4,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
        {id:17,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:8,priority:1,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
        {id:18,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:9,priority:2,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
        {id:19,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:1,priority:3,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
        {id:20,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:2,priority:4,category:'Customs',subCategory:'Dispatch',item:'Other',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,files:Files},
    ];

    const Ticket = Records[1];

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

    

    const Categories = {
        'Accounting': {label: 'Accounting', description: 'Accounting related issues.', icon: 'currency-dollar', color: 'info', sub: {
            'Billing': {label: 'Billing', category: 'Accounting', description: 'Billing related issues', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'credit-card-2-front-fill', color: 'info'},
            'Claims': {label: 'Claims', category: 'Accounting', description: 'Claims related issues', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'shield-shaded', color: 'info'},
        }},
        'Consultations': {label: 'Consultations', description: 'Consultations related issues.', icon: 'people-fill', color: 'info', sub: {
            'Claims': {label: 'Claims', category: 'Consultations', description: 'Claims related issues', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'shield-shaded', color: 'info'},
            'Auditing': {label: 'Auditing', category: 'Consultations', description: 'Auditing related issues.', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'file-earmark-text-fill', color: 'info'},
            'Appointment Scheduling': {label: 'Appointment Scheduling', category: 'Consultations', description: 'Manage and schedule appointments', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'calendar', color: 'primary'},
            'Customer Service': {label: 'Customer Service', category: 'Consultations', description: 'Customer Service related issues.', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'people-fill', color: 'info'},
            'Appeal': {label: 'Appeal', category: 'Consultations', description: 'Manage appeal consultations', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'balance-scale', color: 'primary'},
            'Ruling': {label: 'Ruling', category: 'Consultations', description: 'Manage ruling consultations', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'gavel', color: 'primary'},
            'CITT': {label: 'CITT', category: 'Consultations', description: 'CITT related consultations', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'building', color: 'primary'},
        }},
        'Customs': {label: 'Customs', description: 'Customs related issues.', icon: 'shield-shaded', color: 'info', sub: {
            'Customs Declarations': {label: 'Customs Declarations', category: 'Customs', description: 'Manage customs declarations', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'paperclip', color: 'success'},
            'Customer Service': {label: 'Customer Service', category: 'Customs', description: 'Customer Service related issues.', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'people-fill', color: 'info'},
        }},
        'Finance': {label: 'Finance', description: 'Finance related issues.', icon: 'currency-dollar', color: 'info', sub: {
            'Budgeting': {label: 'Budgeting', category: 'Finance', description: 'Financial planning and budgeting', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'wallet', color: 'danger'},
        }},
        'HR': {label: 'HR', description: 'Human Resources related issues.', icon: 'people-fill', color: 'info', sub: {
            'Payroll': {label: 'Payroll', category: 'HR', description: 'Payroll related issues.', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'file-earmark-text-fill', color: 'info'},
            'Benefits': {label: 'Benefits', category: 'HR', description: 'Benefits related issues.', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'file-earmark-text-fill', color: 'info'},
            'Compensation': {label: 'Compensation', category: 'HR', description: 'Compensation related issues.', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'file-earmark-text-fill', color: 'info'},
            'Employee Relations': {label: 'Employee Relations', category: 'HR', description: 'Employee Relations related issues.', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'file-earmark-text-fill', color: 'info', sub: {
                'Training': {label: 'Training', category: 'HR', subCategory: 'Employee Relations', description: 'Training related issues.', icon: 'file-earmark-text-fill', color: 'info'},
                'Hiring': {label: 'Hiring', category: 'HR', subCategory: 'Employee Relations', description: 'Hiring related issues.', icon: 'file-earmark-text-fill', color: 'info'},
                'Recruiting': {label: 'Recruiting', category: 'HR', subCategory: 'Employee Relations', description: 'Recruiting related issues.', icon: 'file-earmark-text-fill', color: 'info'},
                'Termination': {label: 'Termination', category: 'HR', subCategory: 'Employee Relations', description: 'Termination related issues.', icon: 'file-earmark-text-fill', color: 'info'},
            }},
            'Request': {label: 'Request', category: 'HR', description: 'Request related issues.', files:false, references:false, meta:false, feed:false, accept:true, deny:true, icon: 'file-earmark-text-fill', color: 'info', sub: {
                'Vacation Request': {label: 'Vacation Request', category: 'HR', subCategory: 'Request', description: 'Request for vacation', icon: 'umbrella-beach', color: 'info'},
                'Sick Day Request': {label: 'Sick Day Request', category: 'HR', subCategory: 'Request', description: 'Sick leave requests', icon: 'procedures', color: 'info'},
            }},
        }},
        'IT': {label: 'IT', description: 'Information Technology related issues.', icon: 'cpu-fill', color: 'info', sub: {
            'Software Issues': {label: 'Software Issues', category: 'IT', description: 'Troubleshooting software issues', files:true, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'laptop-code', color: 'warning', sub: {
                'Microsoft Office Issues': {label: 'Microsoft Office Issues', category: 'IT', subCategory: 'Software Issues', description: 'Troubleshooting Microsoft Office issues', icon: 'file-earmark-text-fill', color: 'warning'},
                'Adobe Issues': {label: 'Adobe Issues', category: 'IT', subCategory: 'Software Issues', description: 'Troubleshooting Adobe issues', icon: 'file-earmark-text-fill', color: 'warning'},
                'ITMR4 Issues': {label: 'ITMR4 Issues', category: 'IT', subCategory: 'Software Issues', description: 'Troubleshooting ITMR4 issues', icon: 'file-earmark-text-fill', color: 'warning'},
                'ITMR5 Issues': {label: 'ITMR5 Issues', category: 'IT', subCategory: 'Software Issues', description: 'Troubleshooting ITMR5 issues', icon: 'file-earmark-text-fill', color: 'warning'},
                'eM Client Issues': {label: 'eM Client Issues', category: 'IT', subCategory: 'Software Issues', description: 'Troubleshooting eM Client issues', icon: 'file-earmark-text-fill', color: 'warning'},
                'Other Software Issues': {label: 'Other Software Issues', category: 'IT', subCategory: 'Software Issues', description: 'Troubleshooting other software issues', icon: 'file-earmark-text-fill', color: 'warning'},
            }},
            'Network Issues': {label: 'Network Issues', category: 'IT', description: 'Troubleshooting network issues', files:true, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'router', color: 'warning', sub: {
                'Internet Issues': {label: 'Internet Issues', category: 'IT', subCategory: 'Network Issues', description: 'Troubleshooting internet issues', icon: 'wifi', color: 'warning'},
                'Intranet Issues': {label: 'Intranet Issues', category: 'IT', subCategory: 'Network Issues', description: 'Troubleshooting intranet issues', icon: 'wifi', color: 'warning'},
                'VPN Issues': {label: 'VPN Issues', category: 'IT', subCategory: 'Network Issues', description: 'Troubleshooting VPN issues', icon: 'wifi', color: 'warning'},
                'LAN Issues': {label: 'LAN Issues', category: 'IT', subCategory: 'Network Issues', description: 'Troubleshooting LAN issues', icon: 'wifi', color: 'warning'},
                'WAN Issues': {label: 'WAN Issues', category: 'IT', subCategory: 'Network Issues', description: 'Troubleshooting WAN issues', icon: 'wifi', color: 'warning'},
                'Wireless Issues': {label: 'Wireless Issues', category: 'IT', subCategory: 'Network Issues', description: 'Troubleshooting wireless issues', icon: 'wifi', color: 'warning'},
                'Firewall Issues': {label: 'Firewall Issues', category: 'IT', subCategory: 'Network Issues', description: 'Troubleshooting firewall issues', icon: 'wifi', color: 'warning'},
                'Router Issues': {label: 'Router Issues', category: 'IT', subCategory: 'Network Issues', description: 'Troubleshooting router issues', icon: 'wifi', color: 'warning'},
                'Switch Issues': {label: 'Switch Issues', category: 'IT', subCategory: 'Network Issues', description: 'Troubleshooting switch issues', icon: 'wifi', color: 'warning'},
                'Modem Issues': {label: 'Modem Issues', category: 'IT', subCategory: 'Network Issues', description: 'Troubleshooting modem issues', icon: 'wifi', color: 'warning'},
                'Network Cable Issues': {label: 'Network Cable Issues', category: 'IT', subCategory: 'Network Issues', description: 'Troubleshooting network cable issues', icon: 'wifi', color: 'warning'},
                'Network Card Issues': {label: 'Network Card Issues', category: 'IT', subCategory: 'Network Issues', description: 'Troubleshooting network card issues', icon: 'wifi', color: 'warning'},
            }},
            'Server Issues': {label: 'Server Issues', category: 'IT', description: 'Troubleshooting server issues', files:true, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'hdd', color: 'warning', sub: {
                'Database Issues': {label: 'Database Issues', category: 'IT', subCategory: 'Server Issues', description: 'Troubleshooting database issues', icon: 'database', color: 'warning'},
                'File Server Issues': {label: 'File Server Issues', category: 'IT', subCategory: 'Server Issues', description: 'Troubleshooting file server issues', icon: 'file-earmark', color: 'warning'},
                'Print Server Issues': {label: 'Print Server Issues', category: 'IT', subCategory: 'Server Issues', description: 'Troubleshooting print server issues', icon: 'printer', color: 'warning'},
                'Application Server Issues': {label: 'Application Server Issues', category: 'IT', subCategory: 'Server Issues', description: 'Troubleshooting application server issues', icon: 'server', color: 'warning'},
                'Authentication Server Issues': {label: 'Authentication Server Issues', category: 'IT', subCategory: 'Server Issues', description: 'Troubleshooting authentication server issues', icon: 'person-badge', color: 'warning'},
            }},
            'Service Issues': {label: 'Service Issues', category: 'IT', description: 'Troubleshooting service issues', files:true, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'cloud-fog', color: 'warning', sub: {
                'Cloud Issues': {label: 'Cloud Issues', category: 'IT', subCategory: 'Service Issues', description: 'Troubleshooting cloud issues', icon: 'cloud-fog', color: 'warning'},
                'Email Issues': {label: 'Email Issues', category: 'IT', subCategory: 'Service Issues', description: 'Troubleshooting email issues', icon: 'envelope-fill', color: 'warning'},
                'Website Issues': {label: 'Web Issues', category: 'IT', subCategory: 'Service Issues', description: 'Troubleshooting website issues', icon: 'globe', color: 'warning'},
                'Virtual Desktop Issues': {label: 'Virtual Desktop Issues', category: 'IT', subCategory: 'Service Issues', description: 'Troubleshooting virtual desktop issues', icon: 'desktop', color: 'warning'},
            }},
        }},
        'Legal': {label: 'Legal', description: 'Legal related issues.', icon: 'gavel-fill', color: 'info', sub: {
            'Contract Review': {label: 'Contract Review', category: 'Legal', description: 'Legal review of contracts', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'file-contract', color: 'secondary'},
        }},
        'Logistics': {label: 'Logistics', description: 'Logistics related issues.', icon: 'truck', color: 'info', sub: {
            'Delivery Tracking': {label: 'Delivery Tracking', category: 'Logistics', description: 'Logistics and delivery tracking', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'truck', color: 'light'},
            'Customer Service': {label: 'Customer Service', category: 'Logistics', description: 'Customer Service related issues.', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'people-fill', color: 'info'},
            'Tracking': {label: 'Tracking', category: 'Logistics', description: 'Track operational activities', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'map-marked', color: 'dark'},
        }},
        'Operations': {label: 'Operations', description: 'Operations related issues.', icon: 'tools', color: 'info', sub: {
            'Process Improvement': {label: 'Process Improvement', category: 'Operations', description: 'Improvement of operational processes', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'tools', color: 'dark'},
            'Dispatch': {label: 'Dispatch', category: 'Operations', description: 'Manage dispatch operations', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'forward', color: 'dark'},
            'Tracking': {label: 'Tracking', category: 'Operations', description: 'Track operational activities', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'map-marked', color: 'dark'},
        }},
        'Sales': {label: 'Sales', description: 'Sales related issues.', icon: 'cart-fill', color: 'info', sub: {
            'Client Prospecting': {label: 'Client Prospecting', category: 'Sales', description: 'Prospecting new clients', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'handshake', color: 'primary'},
            'Customer Service': {label: 'Customer Service', category: 'Sales', description: 'Customer Service related issues.', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'people-fill', color: 'info'},
            'Contracts': {label: 'Contracts', category: 'Sales', description: 'Contracts related issues.', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'file-earmark-text-fill', color: 'info'},
        }},
        'Security': {label: 'Security', description: 'Security related issues.', icon: 'shield-lock-fill', color: 'info', sub: {
            'Access Control': {label: 'Access Control', category: 'Security', description: 'Manage security access control', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'shield-alt', color: 'danger'},
        }},
        'Other': {label: 'Other', description: 'Other issues.', icon: 'question-circle-fill', color: 'info', sub: {
            'General Enquiry': {label: 'General Enquiry', category: 'Other', description: 'General enquiries and other issues', files:false, references:false, meta:false, feed:true, accept:false, deny:false, icon: 'question', color: 'info'},
        }},
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
            row.col1 = $(document.createElement('div')).addClass('col-6 col-xxl-7').appendTo(row);
            row.col2 = $(document.createElement('div')).addClass('col-6 col-xxl-5').appendTo(row);
            row.col2.row1 = $(document.createElement('div')).addClass('row p-3').appendTo(row.col2);
            row.col2.row1.col1 = $(document.createElement('div')).addClass('col-12').appendTo(row.col2.row1);
            row.col1.row1 = $(document.createElement('div')).addClass('row p-3').appendTo(row.col1);
            row.col1.row1.col1 = $(document.createElement('div')).addClass('col-6').appendTo(row.col1.row1);
            row.col1.row1.col2 = $(document.createElement('div')).addClass('col-6').appendTo(row.col1.row1);
            row.col1.row1.col3 = $(document.createElement('div')).addClass('col-12').appendTo(row.col1.row1);
            row.col1.row2 = $(document.createElement('div')).addClass('row p-3 pb-0').appendTo(row.col1);
            row.col1.row2.col1 = $(document.createElement('div')).addClass('col-12 border-bottom').appendTo(row.col1.row2);
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

            const Reply = function(object, quote = null, author = null){
                var modal = new Modal(
                    object,
                    {
                        callback: {
                            submit: function(element,modal){
                                element.textarea = element.find('textarea');
                                if(quote){
                                    let parser = new DOMParser();
                                    let doc = parser.parseFromString(quote, 'text/html');
                                    let elementsToRemove = doc.getElementsByClassName('reply-quote');
                                    for (let element of Array.from(elementsToRemove)) {
                                        element.parentNode.removeChild(element);
                                    }
                                    quote = doc.documentElement.innerHTML;
                                    element.quote = new Alert(
                                        {
                                            class: {
                                                alert: "ms-3 reply-quote",
                                            },
                                            color: "secondary",
                                            dismissible: false,
                                            icon: "chat-quote",
                                            title: author,
                                            content: quote,
                                        }
                                    );
                                    quote = element.quote.outerHTML();
                                }
                                ticketFeed.post(
                                    {
                                        username: Ticket.owner,
                                        content: element.textarea.tinymce().getContent() + quote,
                                    }
                                );
                                modal.hide();
                            },
                        },
                        icon: "reply",
                        title: "Reply to ticket",
                        size: "lg",
                    },
                    function(element,modal){
                        element.dialog.content.body.addClass('p-0');
                        element.textarea = $(document.createElement("textarea")).addClass('').appendTo(element.dialog.content.body);
                        element.textarea.tinymce({
                            height: 400,
                            menubar: false,
                            plugins: [
                               'advlist','autolink',
                               'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
                               'fullscreen','insertdatetime','media','table','help','wordcount'
                            ],
                            toolbar: 'undo redo | a11ycheck casechange blocks | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist checklist outdent indent | removeformat | code table help',
                            init_instance_callback: function (editor) {
                                var container = $(editor.getContainer());
                                container.addClass("rounded-0 border-0");
                                container.find('.tox-statusbar').addClass("d-none");
                            },
                        });
                        element.dialog.content.footer.submit.text("Post");
                    },
                );
            };

            const Share = function(object){
                var modal = new Modal(
                    object,
                    {
                        callback: {
                            submit: function(element,modal){
                                console.log("Submit", element,modal);
                            },
                        },
                        icon: "share",
                        title: "Share this ticket to",
                    },
                    function(element,modal){
                        element.select = $(document.createElement("select")).attr('multiple','multiple').appendTo(element.dialog.content.body);
                        element.select.select2(
                            {
                                data: Contacts, 
                                tags: true,
                                multiple: true,
                                templateResult:function(option){
                                    if (!option.id) { return option.text; }
                                    var $option = $(
                                        '<span><i class="bi bi-envelope me-1"></i> ' + option.text + '</span>'
                                    );
                                    return $option;
                                },
                                templateSelection:function(option){
                                    if (!option.id) { return option.text; }
                                    var $option = $(
                                        '<span><i class="bi bi-envelope"></i> ' + option.text + '</span>'
                                    );
                                    return $option;
                                },
                            }
                        );
                        element.select.val([Ticket.owner,Ticket.assignedTo]).trigger('change');
                        element.dialog.content.footer.submit.text("Share");
                    },
                );
            };

            const Close = function(object){
                var modal = new Modal(
                    object,
                    {
                        callback: {
                            submit: function(element,modal){
                                console.log("Submit", element,modal);
                            },
                        },
                        icon: "question-diamond",
                        title: "Are you sure you",
                        body: "Are you sure you want to close this ticket?",
                    },
                    function(element,modal){
                        element.dialog.content.footer.submit.text("Close");
                    },
                );
            };

            const Archive = function(object){
                var modal = new Modal(
                    object,
                    {
                        callback: {
                            submit: function(element,modal){
                                console.log("Submit", element,modal);
                            },
                        },
                        icon: "question-diamond",
                        title: "Are you sure you",
                        body: "Are you sure you want to archive this ticket?",
                    },
                    function(element,modal){
                        element.dialog.content.footer.submit.text("Archive");
                    },
                );
            };

            var subject = $(document.createElement("h2")).html(Ticket.subject).appendTo(row.col1.row2.col1);
            var datetime = {};
            datetime.openedOn = new Date(Ticket.openedOn);
            var openedOn = $(document.createElement('div')).addClass('mt-1 mb-2').appendTo(row.col1.row2.col1);
            openedOn.Label = $(document.createElement('span')).addClass('me-2').text('Opened On:').appendTo(openedOn);
            openedOn.icon = $(document.createElement('i')).addClass('bi-clock me-1').appendTo(openedOn);
            openedOn.timeago = $(document.createElement('time')).addClass('timeago').attr('data-bs-toggle','tooltip').attr('title',datetime.openedOn.toLocaleString()).attr('data-bs-title',datetime.openedOn.toLocaleString()).attr('data-bs-placement','top').attr('datetime',datetime.openedOn.toLocaleString()).html(datetime.openedOn.toLocaleString()).appendTo(openedOn);
            openedOn.timeago.timeago();
            openedOn.timeago.bootstrap = new bootstrap.Tooltip(openedOn.timeago);
            if(Ticket.closedOn){
                datetime.closedOn = new Date(Ticket.closedOn);
                var closedOn = {};
                closedOn.Label = $(document.createElement('span')).addClass('ms-3 me-2').text('Closed On:').appendTo(openedOn);
                closedOn.icon = $(document.createElement('i')).addClass('bi-clock me-1').appendTo(openedOn);
                closedOn.timeago = $(document.createElement('time')).addClass('timeago').attr('data-bs-toggle','tooltip').attr('title',datetime.closedOn.toLocaleString()).attr('data-bs-title',datetime.closedOn.toLocaleString()).attr('data-bs-placement','top').attr('datetime',datetime.closedOn.toLocaleString()).html(datetime.closedOn.toLocaleString()).appendTo(openedOn);
                closedOn.timeago.timeago();
                closedOn.timeago.bootstrap = new bootstrap.Tooltip(closedOn.timeago);
            }
            var description = $(document.createElement("p")).html(Ticket.description).appendTo(row.col1.row2.col1);

            const ticketFeed = new Feed(
                row.col1.row3.col1,
                {
                    controls:{
                        reply:{
                            icon:"reply",
                            label:"Reply",
                            callback:function(control,post,feed){
                                Reply(control,post.content.html(),post.user.link.text());
                            },
                        },
                        edit:{
                            icon:"pencil-square",
                            color:"warning",
                            label:"Edit",
                            callback:function(control,post,feed){
                                var modal = new Modal(
                                    control,
                                    {
                                        callback: {
                                            submit: function(element,modal){
                                                element.textarea = element.find('textarea');
                                                post.content.html(element.textarea.tinymce().getContent());
                                                modal.hide();
                                            },
                                        },
                                        icon: "pencil-square",
                                        title: "Edit Post",
                                        size: "lg",
                                    },
                                    function(element,modal){
                                        element.dialog.content.body.addClass('p-0');
                                        element.textarea = $(document.createElement("textarea")).addClass('').appendTo(element.dialog.content.body);
                                        element.tinymce = element.textarea.tinymce({
                                            height: 400,
                                            menubar: false,
                                            plugins: [
                                               'advlist','autolink',
                                               'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
                                               'fullscreen','insertdatetime','media','table','help','wordcount'
                                            ],
                                            toolbar: 'undo redo | a11ycheck casechange blocks | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist checklist outdent indent | removeformat | code table help',
                                            init_instance_callback: function (editor) {
                                                var container = $(editor.getContainer());
                                                container.addClass("rounded-0 border-0");
                                                container.find('.tox-statusbar').addClass("d-none");
                                            },
                                            setup: function(editor) {
                                                editor.on('init', function(e) {
                                                    editor.setContent(post.content.html());
                                                });
                                            }
                                        });
                                    },
                                );
                            },
                        },
                        delete:{
                            icon:"trash",
                            color:"danger",
                            label:"Delete",
                            callback:function(control,post,feed){
                                control.modal = new Modal(
                                    control,
                                    {
                                        callback: {
                                            submit: function(element,modal){
                                                post.remove();
                                                modal.hide();
                                            },
                                        },
                                        icon: "question-diamond",
                                        title: "Are you sure you",
                                        body: "Are you sure you want to delete this post?",
                                    },
                                    function(element,modal){
                                        element.dialog.content.footer.submit.text("Delete");
                                    },
                                );
                            },
                        },
                    },
                },
                function(feed){
                    for(const [key, post] of Object.entries(Ticket.posts)){
                        feed.post(
                            {
                                datetime: post.created,
                                username: post.owner,
                                content: post.content,
                            },
                        );
                    }
                }, 
            );

            var controls = $(document.createElement("div")).addClass('btn-group w-100 mb-3').appendTo(row.col2.row1.col1);
            controls.reply = $(document.createElement("button")).addClass('btn btn-primary d-flex flex-column justify-content-center align-items-center').appendTo(controls);
            controls.reply.icon = $(document.createElement("i")).addClass('bi bi-reply fs-3').appendTo(controls.reply);
            controls.reply.label = $(document.createElement("span")).addClass('d-none d-md-block').html("Reply").appendTo(controls.reply);
            Reply(controls.reply);
            controls.share = $(document.createElement("button")).addClass('btn btn-info d-flex flex-column justify-content-center align-items-center').appendTo(controls);
            controls.share.icon = $(document.createElement("i")).addClass('bi bi-share fs-3').prependTo(controls.share);
            controls.share.label = $(document.createElement("span")).addClass('d-none d-md-block').html("Share").appendTo(controls.share);
            Share(controls.share);
            controls.close = $(document.createElement("button")).addClass('btn btn-dark d-flex flex-column justify-content-center align-items-center').appendTo(controls);
            controls.close.icon = $(document.createElement("i")).addClass('bi bi-x-circle fs-3').prependTo(controls.close);
            controls.close.label = $(document.createElement("span")).addClass('d-none d-md-block').html("Close").appendTo(controls.close);
            Close(controls.close);
            controls.archive = $(document.createElement("button")).addClass('btn btn-light d-flex flex-column justify-content-center align-items-center').appendTo(controls);
            controls.archive.icon = $(document.createElement("i")).addClass('bi bi-archive fs-3').prependTo(controls.archive);
            controls.archive.label = $(document.createElement("span")).addClass('d-none d-md-block').html("Archive").appendTo(controls.archive);
            Archive(controls.archive);

            var ticketOwner = $(document.createElement("h4")).html('Owner').appendTo(row.col2.row1.col1);
            ticketOwner.container = $(document.createElement("div")).addClass('d-flex justify-content-start align-items-center ms-2 user-select-none').appendTo(row.col2.row1.col1);
            ticketOwner.container.avatar = new Avatar(
                Ticket.owner,
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
            ).appendTo(ticketOwner.container);
            ticketOwner.container.contactInfo = $(document.createElement("div")).addClass('ms-2 d-flex flex-column justify-content-center align-items-start').appendTo(ticketOwner.container);
            ticketOwner.container.contactInfo.contact = $(document.createElement("strong")).text(Ticket.owner).appendTo(ticketOwner.container.contactInfo);

            var ticketAssigned = $(document.createElement("h4")).html('Assigned To').addClass('mt-3').appendTo(row.col2.row1.col1);
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
            ticketAssigned.container.contactInfo.title = $(document.createElement("span")).text('Team Lead Customer Support').appendTo(ticketAssigned.container.contactInfo);
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
            details.category.update = function(category = null){
                var select = details.category.select;
                select.empty();
                $.each(Categories, function(key, value) {
                    select.append($("<option></option>")
                        .attr("value", key)
                        .text(value.label));
                });
                if(category){
                    select.val(category);
                }
            };

            details.subCategory = $(document.createElement("strong")).addClass('mt-2').html('Sub Category: ').appendTo(details);
            details.subCategory.select = $(document.createElement("select")).addClass('form-select w-100').appendTo(details);
            details.subCategory.update = function(subCategory = null){
                var select = details.subCategory.select;
                var categoryKey = details.category.select.val();
                select.empty();
                if(typeof Categories[categoryKey] !== 'undefined' && typeof Categories[categoryKey].sub !== 'undefined'){
                    details.subCategory.removeClass('d-none');
                    details.subCategory.select.removeClass('d-none');
                    $.each(Categories[categoryKey].sub, function(key, value) {
                        select.append($("<option></option>")
                            .attr("value", key)
                            .text(value.label));
                    });
                    if(subCategory){
                        select.val(subCategory);
                    }
                } else {
                    details.subCategory.addClass('d-none');
                    details.subCategory.select.addClass('d-none');
                }
            };

            details.item = $(document.createElement("strong")).addClass('mt-2').html('Item: ').appendTo(details);
            details.item.select = $(document.createElement("select")).addClass('form-select w-100').appendTo(details);
            details.item.update = function(item = null){
                var select = details.item.select;
                var categoryKey = details.category.select.val();
                var subCategoryKey = details.subCategory.select.val();
                select.empty();
                if(typeof Categories[categoryKey] !== 'undefined' && typeof Categories[categoryKey].sub !== 'undefined' && typeof Categories[categoryKey].sub[subCategoryKey] !== 'undefined' && typeof Categories[categoryKey].sub[subCategoryKey].sub !== 'undefined'){
                    details.item.removeClass('d-none');
                    details.item.select.removeClass('d-none');
                    $.each(Categories[categoryKey].sub[subCategoryKey].sub, function(key, value) {
                        select.append($("<option></option>")
                            .attr("value", key)
                            .text(value.label));
                    });
                    if(item){
                        select.val(item);
                    }
                } else {
                    details.item.addClass('d-none');
                    details.item.select.addClass('d-none');
                }
                if(typeof Categories[categoryKey].sub[subCategoryKey] !== 'undefined'){
                    console.log('files: ' + Categories[categoryKey].sub[subCategoryKey].files, files)
                    console.log('references: ' + Categories[categoryKey].sub[subCategoryKey].references, references)
                    console.log('meta: ' + Categories[categoryKey].sub[subCategoryKey].meta, meta)
                    console.log('feed: ' + Categories[categoryKey].sub[subCategoryKey].feed, ticketFeed)
                    console.log('accept: ' + Categories[categoryKey].sub[subCategoryKey].accept, accept)
                    console.log('deny: ' + Categories[categoryKey].sub[subCategoryKey].deny, deny)
                    if(Categories[categoryKey].sub[subCategoryKey].files){
                        files.removeClass('d-none');
                    } else {
                        files.addClass('d-none');
                    }
                    if(Categories[categoryKey].sub[subCategoryKey].references){
                        references.removeClass('d-none');
                    } else {
                        references.addClass('d-none');
                    }
                    if(Categories[categoryKey].sub[subCategoryKey].meta){
                        meta.removeClass('d-none');
                    } else {
                        meta.addClass('d-none');
                    }
                    if(Categories[categoryKey].sub[subCategoryKey].feed){
                        ticketFeed.show();
                    } else {
                        ticketFeed.hide();
                    }
                    if(Categories[categoryKey].sub[subCategoryKey].accept){
                        accept.show();
                    } else {
                        accept.hide();
                    }
                    if(Categories[categoryKey].sub[subCategoryKey].deny){
                        deny.show();
                    } else {
                        deny.hide();
                    }
                }
            };

            details.category.select.change(function() {
                details.subCategory.update();
                details.item.update();
            });
            details.subCategory.select.change(function() {
                details.item.update();
            });
            
            details.submit = $(document.createElement("div")).addClass('px-3 w-100 mt-3').appendTo(details);
            details.submit.button = $(document.createElement("button")).addClass('btn btn-success w-100').html('Save changes').appendTo(details.submit);
            details.submit.button.icon = $(document.createElement("i")).addClass('bi bi-save me-2').prependTo(details.submit.button);

            var accept = $(document.createElement("div")).addClass('px-3 w-100 mt-3').appendTo(details);
            accept.button = $(document.createElement("button")).addClass('btn btn-success w-100').html('Accept').appendTo(accept);
            accept.button.icon = $(document.createElement("i")).addClass('bi bi-check-lg me-2').prependTo(accept.button);

            var deny = $(document.createElement("div")).addClass('px-3 w-100 mt-3').appendTo(details);
            deny.button = $(document.createElement("button")).addClass('btn btn-danger w-100').html('Deny').appendTo(deny);
            deny.button.icon = $(document.createElement("i")).addClass('bi bi-x-lg me-2').prependTo(deny.button);

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

            details.category.update(Ticket.category);
            details.subCategory.update(Ticket.subCategory);
            details.item.update(Ticket.item);
        },
    );
});