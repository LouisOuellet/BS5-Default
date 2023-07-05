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

const Unique = [
    '3896PARS88842657',
    '10013000684572',
    'ticket-3',
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
    {id:1,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:1,priority:1,category:'Customs',subCategory:'Customs Declarations',item:null,subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
    {id:2,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:2,priority:2,category:'HR',subCategory:'Request',item:'Vacation Request',subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
    {id:3,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:3,priority:3,category:'IT',subCategory:'Remote Assistance',item:null,subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
    {id:4,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:4,priority:4,category:'Customs',subCategory:'Customs Declarations',item:null,subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
    {id:5,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:5,priority:1,category:'Customs',subCategory:'Customs Declarations',item:null,subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
    {id:6,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:6,priority:2,category:'Customs',subCategory:'Customs Declarations',item:null,subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
    {id:7,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:7,priority:3,category:'Customs',subCategory:'Customs Declarations',item:null,subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
    {id:8,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:8,priority:4,category:'Customs',subCategory:'Customs Declarations',item:null,subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
    {id:9,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:9,priority:1,category:'Customs',subCategory:'Customs Declarations',item:null,subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
    {id:10,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:1,priority:2,category:'Customs',subCategory:'Customs Declarations',item:null,subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
    {id:11,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:2,priority:3,category:'Customs',subCategory:'Customs Declarations',item:null,subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
    {id:12,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:3,priority:4,category:'Customs',subCategory:'Customs Declarations',item:null,subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
    {id:13,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:4,priority:1,category:'Customs',subCategory:'Customs Declarations',item:null,subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
    {id:14,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:5,priority:2,category:'Customs',subCategory:'Customs Declarations',item:null,subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
    {id:15,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:6,priority:3,category:'Customs',subCategory:'Customs Declarations',item:null,subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
    {id:16,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:7,priority:4,category:'Customs',subCategory:'Customs Declarations',item:null,subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
    {id:17,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:8,priority:1,category:'Customs',subCategory:'Customs Declarations',item:null,subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
    {id:18,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:9,priority:2,category:'Customs',subCategory:'Customs Declarations',item:null,subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
    {id:19,created:DemoDate,modified:DemoDate,owner:'michael.smith@domain.com',office:'Head Quarters',team:'IT',status:1,priority:3,category:'Customs',subCategory:'Customs Declarations',item:null,subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'john.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
    {id:20,created:DemoDate,modified:DemoDate,owner:'emma.johnson@domain.com',office:'Head Quarters',team:'IT',status:2,priority:4,category:'Customs',subCategory:'Customs Declarations',item:null,subject:'Sample Ticket',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',assignedTo:'jane.doe@domain.com',assignedBy:'david.brown@domain.com',remoteID:'123456789',remotePassword:'!QAZxsw2',start:DemoDate,end:DemoDate,assignedOn:DemoDate,openedOn:DemoDate,closedOn:DemoDate,posts:Posts,references:References,meta:Meta,unique:Unique,files:Files},
];

const Ticket = Records[2];

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
    1: {
        label: 'Low',
        description: 'The issue is minor and does not affect functionality.',
        icon: 'arrow-down',
        color: 'secondary',
        alt:[
            "This issue is like a tiny pothole on a highway. Drivers might notice, but it won't slow down the traffic.",
            "This issue is like finding an extra stamp on your passport. Unusual, but not a showstopper.",
            "This issue is like a misplaced shipping label. Might raise an eyebrow, but it won't derail the shipment.",
            "This issue is like a delayed lunch break at the customs office. A bit annoying, but you'll manage.",
        ],
    },
    2: {
        label: 'Medium',
        description: 'The issue has some impact on functionality but workarounds may be available.',
        icon: 'arrow-left-right',
        color: 'info',
        alt:[
            "This issue is like a traffic jam on a side street. It's causing some detours, but the main route is still open.",
            "This issue is like a misplaced customs form. A bit of a hassle, but we've got duplicates.",
            "This issue is like a missing pallet from the inventory. It's a puzzle, but we can find it or work around it.",
            "This issue is like a holiday rush at the courier office. Tense, but we've handled worse.",
        ],
    },
    3: {
        label: 'High',
        description: 'The issue is causing significant disruption to services.',
        icon: 'arrow-up',
        color: 'warning',
        alt:[
            "This issue is like a roadblock on a main street. It's causing major rerouting and delays.",
            "This issue is like a power outage at the customs office. It's halting the flow, and we need to act fast.",
            "This issue is like a lost shipping container. It's a major problem affecting the entire supply chain.",
            "This issue is like a strike at the transport company. It's a crisis, and we need a contingency plan.",
        ],
    },
    4: {
        label: 'Urgent',
        description: 'The issue needs immediate attention, usually because it is causing a stop to critical services.',
        icon: 'exclamation-diamond-fill',
        color: 'danger',
        alt:[
            "This issue is like a bridge collapse. We need all hands on deck to address this immediately!",
            "This issue is like a lockdown at customs. Nothing's moving until we address this situation.",
            "This issue is like a cargo ship run aground. It's a crisis that's halting everything in its wake.",
            "This issue is like a wildfire near the transport routes. We need to act fast or face serious consequences.",
        ],
    },
    5: {
        label: 'Critical',
        description: 'The issue is severely impacting critical services and needs to be fixed immediately.',
        icon: 'exclamation-triangle-fill',
        color: 'dark',
        alt:[
            "This issue is like all the city's traffic lights failing at once. We're facing total gridlock until this is fixed.",
            "This issue is like a server failure at the global customs network. We're blind and need to fix it now!",
            "This issue is like an airplane stuck on the runway. It's holding up everything and needs immediate resolution.",
            "This issue is like a landslide blocking the main rail route. We need a mountain of effort to solve this!",
        ],
    },
};

const Options = {lockCategory: false, lockSubCategory: false, lockItem: false, defaultPriority: 1, defaultSubject: null, showCalendar:false, showSubject:true, showDescription:true, showPriority: true, showRemoteAccess: false, showDates: false, showFiles:false, showReferences:false, showMeta:false, showFeed:true, showAccept:false, showDecline:false, showShare: true, showClose: true, showArchive: true};
const OptionsITRemoteAssistance = {lockCategory: false, lockSubCategory: false, lockItem: false, defaultPriority: 2, defaultSubject: '%SUBCATEGORY% - ID:%REMOTEID% Password:%REMOTEPASSWORD%', showCalendar:false, showSubject:false, showDescription:true, showPriority: true, showRemoteAccess: true, showDates: false, showFiles:true, showReferences:false, showMeta:false, showFeed:true, showAccept:false, showDecline:false, showShare: true, showClose: true, showArchive: true};
const OptionsHRRequest = {lockCategory: true, lockSubCategory: true, lockItem: true, defaultPriority: 1, defaultSubject: '%ITEM% - From:%START% To:%END%', showCalendar:true, showSubject:false, showDescription:true, showPriority: false, showCalendar:true, showRemoteAccess: false, showDates: true, showFiles:false, showReferences:false, showMeta:false, showFeed:true, showAccept:true, showDecline:true, showShare: true, showClose: true, showArchive: true};
// List of Variables
// - %CATEGORY%
// - %SUBCATEGORY%
// - %ITEM%
// - %SUBJECT%
// - %REMOTEID%
// - %REMOTEPASSWORD%
// - %START%
// - %END%

const Categories = {
    'Accounting': {label: 'Accounting', description: 'Accounting related issues.', icon: 'currency-dollar', color: 'info', sub: {
        'Billing': {label: 'Billing', category: 'Accounting', description: 'Billing related issues',  icon: 'credit-card-2-front-fill', color: 'info', opts: Options, trigger: ''},
        'Claims': {label: 'Claims', category: 'Accounting', description: 'Claims related issues',  icon: 'shield-shaded', color: 'info', opts: Options, trigger: ''},
    }},
    'Consultations': {label: 'Consultations', description: 'Consultations related issues.', icon: 'people-fill', color: 'info', sub: {
        'Claims': {label: 'Claims', category: 'Consultations', description: 'Claims related issues',  icon: 'shield-shaded', color: 'info', opts: Options, trigger: ''},
        'Auditing': {label: 'Auditing', category: 'Consultations', description: 'Auditing related issues.',  icon: 'file-earmark-text-fill', color: 'info', opts: Options, trigger: ''},
        'Appointment Scheduling': {label: 'Appointment Scheduling', category: 'Consultations', description: 'Manage and schedule appointments',  icon: 'calendar', color: 'primary', opts: Options, trigger: ''},
        'Customer Service': {label: 'Customer Service', category: 'Consultations', description: 'Customer Service related issues.',  icon: 'people-fill', color: 'info', opts: Options, trigger: ''},
        'Appeal': {label: 'Appeal', category: 'Consultations', description: 'Manage appeal consultations',  icon: 'balance-scale', color: 'primary', opts: Options, trigger: ''},
        'Ruling': {label: 'Ruling', category: 'Consultations', description: 'Manage ruling consultations',  icon: 'gavel', color: 'primary', opts: Options, trigger: ''},
        'CITT': {label: 'CITT', category: 'Consultations', description: 'CITT related consultations',  icon: 'building', color: 'primary', opts: Options, trigger: ''},
    }},
    'Customs': {label: 'Customs', description: 'Customs related issues.', icon: 'shield-shaded', color: 'info', sub: {
        'Customs Declarations': {label: 'Customs Declarations', category: 'Customs', description: 'Manage customs declarations',  icon: 'paperclip', color: 'success', opts: Options, trigger: ''},
        'Customer Service': {label: 'Customer Service', category: 'Customs', description: 'Customer Service related issues.',  icon: 'people-fill', color: 'info', opts: Options, trigger: ''},
    }},
    'Finance': {label: 'Finance', description: 'Finance related issues.', icon: 'currency-dollar', color: 'info', sub: {
        'Budgeting': {label: 'Budgeting', category: 'Finance', description: 'Financial planning and budgeting',  icon: 'wallet', color: 'danger', opts: Options, trigger: ''},
    }},
    'HR': {label: 'HR', description: 'Human Resources related issues.', icon: 'people-fill', color: 'info', sub: {
        'Payroll': {label: 'Payroll', category: 'HR', description: 'Payroll related issues.',  icon: 'file-earmark-text-fill', color: 'info', opts: Options, trigger: ''},
        'Benefits': {label: 'Benefits', category: 'HR', description: 'Benefits related issues.',  icon: 'file-earmark-text-fill', color: 'info', opts: Options, trigger: ''},
        'Compensation': {label: 'Compensation', category: 'HR', description: 'Compensation related issues.',  icon: 'file-earmark-text-fill', color: 'info', opts: Options, trigger: ''},
        'Employee Relations': {label: 'Employee Relations', category: 'HR', description: 'Employee Relations related issues.',  icon: 'file-earmark-text-fill', color: 'info', opts: Options, trigger: '', sub: {
            'Training': {label: 'Training', category: 'HR', subCategory: 'Employee Relations', description: 'Training related issues.', icon: 'file-earmark-text-fill', color: 'info'},
            'Hiring': {label: 'Hiring', category: 'HR', subCategory: 'Employee Relations', description: 'Hiring related issues.', icon: 'file-earmark-text-fill', color: 'info'},
            'Recruiting': {label: 'Recruiting', category: 'HR', subCategory: 'Employee Relations', description: 'Recruiting related issues.', icon: 'file-earmark-text-fill', color: 'info'},
            'Termination': {label: 'Termination', category: 'HR', subCategory: 'Employee Relations', description: 'Termination related issues.', icon: 'file-earmark-text-fill', color: 'info'},
        }},
        'Request': {label: 'Request', category: 'HR', description: 'Request related issues.', icon: 'file-earmark-text-fill', color: 'info', opts: OptionsHRRequest, trigger: '', sub: {
            'Vacation Request': {label: 'Vacation Request', category: 'HR', subCategory: 'Request', description: 'Request for vacation', icon: 'umbrella-beach', color: 'info'},
            'Sick Day Request': {label: 'Sick Day Request', category: 'HR', subCategory: 'Request', description: 'Sick leave requests', icon: 'procedures', color: 'info'},
        }},
    }},
    'IT': {label: 'IT', description: 'Information Technology related issues.', icon: 'cpu-fill', color: 'info', sub: {
        'Software Issues': {label: 'Software Issues', category: 'IT', description: 'Troubleshooting software issues', icon: 'laptop-code', color: 'warning', opts: Options, trigger: '', sub: {
            'Microsoft Office Issues': {label: 'Microsoft Office Issues', category: 'IT', subCategory: 'Software Issues', description: 'Troubleshooting Microsoft Office issues', icon: 'file-earmark-text-fill', color: 'warning'},
            'Adobe Issues': {label: 'Adobe Issues', category: 'IT', subCategory: 'Software Issues', description: 'Troubleshooting Adobe issues', icon: 'file-earmark-text-fill', color: 'warning'},
            'ITMR4 Issues': {label: 'ITMR4 Issues', category: 'IT', subCategory: 'Software Issues', description: 'Troubleshooting ITMR4 issues', icon: 'file-earmark-text-fill', color: 'warning'},
            'ITMR5 Issues': {label: 'ITMR5 Issues', category: 'IT', subCategory: 'Software Issues', description: 'Troubleshooting ITMR5 issues', icon: 'file-earmark-text-fill', color: 'warning'},
            'eM Client Issues': {label: 'eM Client Issues', category: 'IT', subCategory: 'Software Issues', description: 'Troubleshooting eM Client issues', icon: 'file-earmark-text-fill', color: 'warning'},
            'Other Software Issues': {label: 'Other Software Issues', category: 'IT', subCategory: 'Software Issues', description: 'Troubleshooting other software issues', icon: 'file-earmark-text-fill', color: 'warning'},
        }},
        'Network Issues': {label: 'Network Issues', category: 'IT', description: 'Troubleshooting network issues', icon: 'router', color: 'warning', opts: Options, trigger: '', sub: {
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
        'Server Issues': {label: 'Server Issues', category: 'IT', description: 'Troubleshooting server issues', icon: 'hdd', color: 'warning', opts: Options, trigger: '', sub: {
            'Database Issues': {label: 'Database Issues', category: 'IT', subCategory: 'Server Issues', description: 'Troubleshooting database issues', icon: 'database', color: 'warning'},
            'File Server Issues': {label: 'File Server Issues', category: 'IT', subCategory: 'Server Issues', description: 'Troubleshooting file server issues', icon: 'file-earmark', color: 'warning'},
            'Print Server Issues': {label: 'Print Server Issues', category: 'IT', subCategory: 'Server Issues', description: 'Troubleshooting print server issues', icon: 'printer', color: 'warning'},
            'Application Server Issues': {label: 'Application Server Issues', category: 'IT', subCategory: 'Server Issues', description: 'Troubleshooting application server issues', icon: 'server', color: 'warning'},
            'Authentication Server Issues': {label: 'Authentication Server Issues', category: 'IT', subCategory: 'Server Issues', description: 'Troubleshooting authentication server issues', icon: 'person-badge', color: 'warning'},
        }},
        'Service Issues': {label: 'Service Issues', category: 'IT', description: 'Troubleshooting service issues', icon: 'cloud-fog', color: 'warning', opts: Options, trigger: '', sub: {
            'Cloud Issues': {label: 'Cloud Issues', category: 'IT', subCategory: 'Service Issues', description: 'Troubleshooting cloud issues', icon: 'cloud-fog', color: 'warning'},
            'Email Issues': {label: 'Email Issues', category: 'IT', subCategory: 'Service Issues', description: 'Troubleshooting email issues', icon: 'envelope-fill', color: 'warning'},
            'Website Issues': {label: 'Web Issues', category: 'IT', subCategory: 'Service Issues', description: 'Troubleshooting website issues', icon: 'globe', color: 'warning'},
            'Virtual Desktop Issues': {label: 'Virtual Desktop Issues', category: 'IT', subCategory: 'Service Issues', description: 'Troubleshooting virtual desktop issues', icon: 'desktop', color: 'warning'},
        }},
        'Remote Assistance': {label: 'Remote Assistance', category: 'IT', description: 'Remote assistance', icon: 'file-earmark-arrow-up-fill', color: 'warning', opts: OptionsITRemoteAssistance, trigger: ''},
    }},
    'Legal': {label: 'Legal', description: 'Legal related issues.', icon: 'gavel-fill', color: 'info', sub: {
        'Contract Review': {label: 'Contract Review', category: 'Legal', description: 'Legal review of contracts',  icon: 'file-contract', color: 'secondary', opts: Options, trigger: ''},
    }},
    'Logistics': {label: 'Logistics', description: 'Logistics related issues.', icon: 'truck', color: 'info', sub: {
        'Delivery Tracking': {label: 'Delivery Tracking', category: 'Logistics', description: 'Logistics and delivery tracking',  icon: 'truck', color: 'light', opts: Options, trigger: ''},
        'Customer Service': {label: 'Customer Service', category: 'Logistics', description: 'Customer Service related issues.',  icon: 'people-fill', color: 'info', opts: Options, trigger: ''},
        'Tracking': {label: 'Tracking', category: 'Logistics', description: 'Track operational activities',  icon: 'map-marked', color: 'dark', opts: Options, trigger: ''},
    }},
    'Operations': {label: 'Operations', description: 'Operations related issues.', icon: 'tools', color: 'info', sub: {
        'Process Improvement': {label: 'Process Improvement', category: 'Operations', description: 'Improvement of operational processes',  icon: 'tools', color: 'dark', opts: Options, trigger: ''},
        'Dispatch': {label: 'Dispatch', category: 'Operations', description: 'Manage dispatch operations',  icon: 'forward', color: 'dark', opts: Options, trigger: ''},
        'Tracking': {label: 'Tracking', category: 'Operations', description: 'Track operational activities',  icon: 'map-marked', color: 'dark', opts: Options, trigger: ''},
    }},
    'Sales': {label: 'Sales', description: 'Sales related issues.', icon: 'cart-fill', color: 'info', sub: {
        'Client Prospecting': {label: 'Client Prospecting', category: 'Sales', description: 'Prospecting new clients',  icon: 'handshake', color: 'primary', opts: Options, trigger: ''},
        'Customer Service': {label: 'Customer Service', category: 'Sales', description: 'Customer Service related issues.',  icon: 'people-fill', color: 'info', opts: Options, trigger: ''},
        'Contracts': {label: 'Contracts', category: 'Sales', description: 'Contracts related issues.',  icon: 'file-earmark-text-fill', color: 'info', opts: Options, trigger: ''},
    }},
    'Security': {label: 'Security', description: 'Security related issues.', icon: 'shield-lock-fill', color: 'info', sub: {
        'Access Control': {label: 'Access Control', category: 'Security', description: 'Manage security access control',  icon: 'shield-alt', color: 'danger', opts: Options, trigger: ''},
    }},
    'Other': {label: 'Other', description: 'Other issues.', icon: 'question-circle-fill', color: 'info', sub: {
        'General Enquiry': {label: 'General Enquiry', category: 'Other', description: 'General enquiries and other issues',  icon: 'question', color: 'info', opts: Options, trigger: ''},
    }},
};