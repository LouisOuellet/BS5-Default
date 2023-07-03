$(document).ready(function(){

    // Sample
    const sampleObject = new Calendar(
        '#example', //Selector or JQuery Object to appendTo
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
                wrapper: null, //Calendar Wrapper Element
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
                    title: 'My Event',
                    description: 'This is a cool event',
                    icon: 'person',
                    start: '2023-07-01',
                    end: '2023-07-02',
                    allDay: true,
                    color: 'danger',
                },
            ],
            defaults: { //Default Event
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
        function(calendar){ //Callback Function
            calendar.add({ //Add Event
                title: 'My Event',
                description: 'This is a cool event',
                start: '2023-07-07',
                end: '2023-07-08',
                color: 'success',
            });
        },
    );

    // Code
    let scriptCode = '';
    scriptCode += "const sampleObject = new Calendar(" + "\n";
    scriptCode += "    '#example', //Selector or JQuery Object to appendTo" + "\n";
    scriptCode += "    {" + "\n";
    scriptCode += "        themeSystem: 'bootstrap5', //bootstrap5, bootstrap4, bootstrap3, standard" + "\n";
    scriptCode += "        headerToolbar: { //Header Toolbar" + "\n";
    scriptCode += "            left: 'prev,next today', //prev,next today" + "\n";
    scriptCode += "            center: 'title', //title" + "\n";
    scriptCode += "            right: 'multiMonthYear,dayGridMonth,timeGridWeek,timeGridDay' //dayGridMonth,timeGridWeek,timeGridDay" + "\n";
    scriptCode += "        }," + "\n";
    scriptCode += "        initialDate: null, //Initial Date" + "\n";
    scriptCode += "        initialView: 'dayGridMonth', //dayGridMonth,timeGridWeek,timeGridDay" + "\n";
    scriptCode += "        selectable: false, //Enable Selecting" + "\n";
    scriptCode += "        editable: false, //Enable Editing" + "\n";
    scriptCode += "        eventDragMinDistance: 0, //Minimum Distance to Drag Event" + "\n";
    scriptCode += "        class: { //Add Classes" + "\n";
    scriptCode += "            wrapper: null, //Calendar Wrapper Element" + "\n";
    scriptCode += "            header: 'p-4 pb-2', //Header Element" + "\n";
    scriptCode += "        }," + "\n";
    scriptCode += "        callback: { //Callback Functions" + "\n";
    scriptCode += "            dateClick: function(info) {}, //Date Click" + "\n";
    scriptCode += "            select: function(info) {}, //Date Select" + "\n";
    scriptCode += "            eventClick: function(info) {}, //Event Click" + "\n";
    scriptCode += "            eventMouseEnter: function(info) {}, //Event Mouse Enter" + "\n";
    scriptCode += "            eventMouseLeave: function(info) {}, //Event Mouse Leave" + "\n";
    scriptCode += "            eventDrop: function(info) {}, //Event Drop" + "\n";
    scriptCode += "            eventResize: function(info) {}, //Event Resize" + "\n";
    scriptCode += "            eventDidMount: function(info) {}, //Event Did Mount" + "\n";
    scriptCode += "        }," + "\n";
    scriptCode += "        events: [" + "\n";
    scriptCode += "            {" + "\n";
    scriptCode += "                title: 'My Event'," + "\n";
    scriptCode += "                description: 'This is a cool event'," + "\n";
    scriptCode += "                icon: 'person'," + "\n";
    scriptCode += "                start: '2023-07-01'," + "\n";
    scriptCode += "                end: '2023-07-02'," + "\n";
    scriptCode += "                allDay: true," + "\n";
    scriptCode += "                color: 'danger'," + "\n";
    scriptCode += "            }," + "\n";
    scriptCode += "        ]," + "\n";
    scriptCode += "        defaults: { //Default Event" + "\n";
    scriptCode += "            start: null, //Start Date" + "\n";
    scriptCode += "            end: null, //End Date" + "\n";
    scriptCode += "            allDay: false, //All Day" + "\n";
    scriptCode += "            isBackground: false, //Is Background Event" + "\n";
    scriptCode += "            color: null, //Color" + "\n";
    scriptCode += "            icon: null, //Icon" + "\n";
    scriptCode += "            title: null, //Title" + "\n";
    scriptCode += "            description: null, //Description" + "\n";
    scriptCode += "            popover: true, //Show Popover" + "\n";
    scriptCode += "            callback: { //Callback Functions" + "\n";
    scriptCode += "                click: function(info) {}, //Click" + "\n";
    scriptCode += "                mouseEnter: function(info) {}, //Mouse Enter" + "\n";
    scriptCode += "                mouseLeave: function(info) {}, //Mouse Leave" + "\n";
    scriptCode += "                drop: function(info) {}, //Drop" + "\n";
    scriptCode += "                resize: function(info) {}, //Resize" + "\n";
    scriptCode += "            }," + "\n";
    scriptCode += "        }," + "\n";
    scriptCode += "    }," + "\n";
    scriptCode += "    function(calendar){ //Callback Function" + "\n";
    scriptCode += "        calendar.add({ //Add Event" + "\n";
    scriptCode += "            title: 'My Event'," + "\n";
    scriptCode += "            description: 'This is a cool event'," + "\n";
    scriptCode += "            start: '2023-07-07'," + "\n";
    scriptCode += "            end: '2023-07-08'," + "\n";
    scriptCode += "            color: 'success'," + "\n";
    scriptCode += "        });" + "\n";
    scriptCode += "    }," + "\n";
    scriptCode += ");";
    
    const code = new Code(
        '#code',
        {
            language: 'javascript',
            title: 'Code',
            clipboard:true,
            fullscreen:true,
            collapsed:true,
            code:scriptCode,
        },
        function(element,code){}
    );

    let pretty = prettier.format($('#example').html(), { parser: "html", tabWidth: 4, useTabs: true, plugins: prettierPlugins });
    
    const html = new Code(
        '#htmlcode',
        {
            language: 'markup',
            title: 'Code',
            clipboard:true,
            fullscreen:true,
            collapsed:true,
            code:pretty,
        },
        function(element,code){}
    );
});