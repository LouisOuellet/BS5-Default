$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.Component(
        "calendar", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            themeSystem: 'bootstrap5', //bootstrap5, bootstrap4, bootstrap3, standard
            headerToolbar: { //Header Toolbar
                left: 'prev,next today', //prev,next today
                center: 'title', //title
                right: 'multiMonthYear,dayGridMonth,timeGridWeek,timeGridDay' //dayGridMonth,timeGridWeek,timeGridDay
            },
            initialDate: null, //Initial Date
            initialView: 'dayGridMonth', //dayGridMonth,timeGridWeek,timeGridDay
            selectable: false, //Enable Selecting
            editable: false, //Enable Editing
            eventDragMinDistance: 0, //Minimum Distance to Drag Event
            class: { //Add Classes
                component: null, //Calendar Wrapper Element
                header: 'p-4 pb-2', //Header Element
            },
            callback: { //Callback Functions
                dateClick: function(info) {}, //Date Click
                select: function(info) {}, //Date Select
                eventClick: function(info) {}, //Event Click
                eventMouseEnter: function(info) {}, //Event Mouse Enter
                eventMouseLeave: function(info) {}, //Event Mouse Leave
                eventDrop: function(info) {}, //Event Drop
                eventResize: function(info) {}, //Event Resize
                eventDidMount: function(info) {}, //Event Did Mount
            },
            events: [
                {
                    title: 'My Event', //Title
                    description: 'This is a cool event', //Description
                    icon: 'person', //Icon
                    start: '2023-08-01', //Start Date
                    end: '2023-08-02', //End Date
                    allDay: true, //All Day
                    color: 'danger', //Color
                },
            ],
            properties: { //Default Event
                start: null, //Start Date
                end: null, //End Date
                allDay: false, //All Day
                isBackground: false, //Is Background Event
                color: null, //Color
                icon: null, //Icon
                title: null, //Title
                description: null, //Description
                popover: true, //Show Popover
                callback: { //Callback Functions
                    click: function(info) {}, //Click
                    mouseEnter: function(info) {}, //Mouse Enter
                    mouseLeave: function(info) {}, //Mouse Leave
                    drop: function(info) {}, //Drop
                    resize: function(info) {}, //Resize
                },
            },
        },
        function(calendar,component){ //Callback
            calendar.add({ //Add Event
                title: 'My Event', //Title
                description: 'This is a cool event', //Description
                start: '2023-08-07', //Start Date
                end: '2023-08-08', //End Date
                color: 'success', //Color
            });
        },
    );

    // Javascript Code
    let scriptCode = '';
    scriptCode += '// Builder' + "\n";
    scriptCode += 'const sampleBuilder = new Builder();' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Component' + "\n";
    scriptCode += 'const sampleComponent = sampleBuilder.Component(' + "\n";
    scriptCode += '    "calendar", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        themeSystem: \'bootstrap5\', //bootstrap5, bootstrap4, bootstrap3, standard' + "\n";
    scriptCode += '        headerToolbar: { //Header Toolbar' + "\n";
    scriptCode += '            left: \'prev,next today\', //prev,next today' + "\n";
    scriptCode += '            center: \'title\', //title' + "\n";
    scriptCode += '            right: \'multiMonthYear,dayGridMonth,timeGridWeek,timeGridDay\' //dayGridMonth,timeGridWeek,timeGridDay' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        initialDate: null, //Initial Date' + "\n";
    scriptCode += '        initialView: \'dayGridMonth\', //dayGridMonth,timeGridWeek,timeGridDay' + "\n";
    scriptCode += '        selectable: false, //Enable Selecting' + "\n";
    scriptCode += '        editable: false, //Enable Editing' + "\n";
    scriptCode += '        eventDragMinDistance: 0, //Minimum Distance to Drag Event' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            component: null, //Calendar Wrapper Element' + "\n";
    scriptCode += '            header: \'p-4 pb-2\', //Header Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        callback: { //Callback Functions' + "\n";
    scriptCode += '            dateClick: function(info) {}, //Date Click' + "\n";
    scriptCode += '            select: function(info) {}, //Date Select' + "\n";
    scriptCode += '            eventClick: function(info) {}, //Event Click' + "\n";
    scriptCode += '            eventMouseEnter: function(info) {}, //Event Mouse Enter' + "\n";
    scriptCode += '            eventMouseLeave: function(info) {}, //Event Mouse Leave' + "\n";
    scriptCode += '            eventDrop: function(info) {}, //Event Drop' + "\n";
    scriptCode += '            eventResize: function(info) {}, //Event Resize' + "\n";
    scriptCode += '            eventDidMount: function(info) {}, //Event Did Mount' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        events: [' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                title: \'My Event\', //Title' + "\n";
    scriptCode += '                description: \'This is a cool event\', //Description' + "\n";
    scriptCode += '                icon: \'person\', //Icon' + "\n";
    scriptCode += '                start: \'2023-08-01\', //Start Date' + "\n";
    scriptCode += '                end: \'2023-08-02\', //End Date' + "\n";
    scriptCode += '                allDay: true, //All Day' + "\n";
    scriptCode += '                color: \'danger\', //Color' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        ],' + "\n";
    scriptCode += '        properties: { //Default Event' + "\n";
    scriptCode += '            start: null, //Start Date' + "\n";
    scriptCode += '            end: null, //End Date' + "\n";
    scriptCode += '            allDay: false, //All Day' + "\n";
    scriptCode += '            isBackground: false, //Is Background Event' + "\n";
    scriptCode += '            color: null, //Color' + "\n";
    scriptCode += '            icon: null, //Icon' + "\n";
    scriptCode += '            title: null, //Title' + "\n";
    scriptCode += '            description: null, //Description' + "\n";
    scriptCode += '            popover: true, //Show Popover' + "\n";
    scriptCode += '            callback: { //Callback Functions' + "\n";
    scriptCode += '                click: function(info) {}, //Click' + "\n";
    scriptCode += '                mouseEnter: function(info) {}, //Mouse Enter' + "\n";
    scriptCode += '                mouseLeave: function(info) {}, //Mouse Leave' + "\n";
    scriptCode += '                drop: function(info) {}, //Drop' + "\n";
    scriptCode += '                resize: function(info) {}, //Resize' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(calendar,component) {' + "\n";
    scriptCode += '        calendar.add({ //Add Event' + "\n";
    scriptCode += '            title: \'My Event\', //Title' + "\n";
    scriptCode += '            description: \'This is a cool event\', //Description' + "\n";
    scriptCode += '            start: \'2023-08-07\', //Start Date' + "\n";
    scriptCode += '            end: \'2023-08-08\', //End Date' + "\n";
    scriptCode += '            color: \'success\', //Color' + "\n";
    scriptCode += '        });' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += ');' + "\n";


    // Code
    const code = sampleBuilder.Component(
        "code", //Component Name
        "#code", //Selector or JQuery Object to appendTo
        {
            language: 'javascript',
            title: 'Code',
            clipboard:true,
            fullscreen:true,
            collapsed:true,
            code:scriptCode,
        },
    );

    // HTML Code
    let pretty = prettier.format(sampleComponent.outerHTML(), { parser: "html", tabWidth: 4, useTabs: true, plugins: prettierPlugins });
    const html = sampleBuilder.Component(
        "code", //Component Name
        "#htmlcode", //Selector or JQuery Object to appendTo
        {
            language: 'markup',
            title: 'Code',
            clipboard:true,
            fullscreen:true,
            collapsed:true,
            code:pretty,
        },
    );
});