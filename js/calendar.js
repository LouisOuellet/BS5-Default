$(document).ready(function() {
    var calendarEl = $('#example');
    var calendar = new FullCalendar.Calendar(calendarEl[0], {
        themeSystem: 'bootstrap5',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'multiMonthYear,dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialDate: '2023-05-10',
        initialView: 'dayGridMonth',
        // eventDidMount: function(info) {
        //     $(info.el).css('box-sizing', 'border-box');
        // },
        events: [
            {
                title: 'My Event',
                start: '2023-07-01',
                end: '2023-07-02',
                classNames: 'text-bg-danger',
            },
            {
                title: 'My Event',
                start: '2023-06-01',
                end: '2023-06-02',
                display: 'background',
                // classNames: 'text-bg-danger',
            },
            // {
            //     title: 'My Event',
            //     start: '2023-08-01',
            //     end: '2023-08-02',
            //     display: 'inverse-background',
            //     // classNames: 'text-bg-danger',
            // },
        ],
        dateClick: function(info) {
            // alert('Date: ' + info.dateStr);
        },
        selectable: true,
        select: function(info) {
            // alert('selected ' + info.startStr + ' to ' + info.endStr);
        },
        editable: true, // This makes events draggable and resizable
        eventDragMinDistance: 5,
        // This function will be called when an event's date/time is changed.
        eventDrop: function(info) {
            // alert(info.event.title + " was dropped on " + info.event.start.toISOString());
    
            // Here is where you would make a call to your server to update the event in the database,
            // e.g., using jQuery's $.post method or the Fetch API.
        },
        // This function will be called when an event's length is changed.
        eventResize: function(info) {
            // alert(info.event.title + " end is now " + info.event.end.toISOString());
    
            // Again, here is where you would make a call to your server to update the event in the database.
        },
    });
    calendar.render();
    $('.fc-header-toolbar').addClass('p-4 pb-2');
});

// $(document).ready(function(){

//     // Sample
//     const sampleObject = new Calendar(
//         "#example", //Selector or JQuery Object to appendTo
//         {
//             class: { //Add Classes
//                 wrapper: null, //Ribbon Wrapper Element
//                 ribbon: "fs-4", //Ribbon Element
//             },
//             color: "danger", //Set Color
//             label: "Ribbon", //Set Label
//             icon: "bookmark", //Set Icon
//             size: "xl", //Set Size
//         },
//         function(ribbon){}, //Callback Function
//     );

//     // Code
//     let scriptCode = '';
//     scriptCode += '' + "\n";
    
//     const code = new Code(
//         '#code',
//         {
//             language: 'javascript',
//             title: 'Code',
//             clipboard:true,
//             fullscreen:true,
//             collapsed:true,
//             code:scriptCode,
//         },
//         function(element,code){}
//     );

//     let pretty = prettier.format($('#example').html(), { parser: "html", tabWidth: 4, useTabs: true, plugins: prettierPlugins });
    
//     const html = new Code(
//         '#htmlcode',
//         {
//             language: 'markup',
//             title: 'Code',
//             clipboard:true,
//             fullscreen:true,
//             collapsed:true,
//             code:pretty,
//         },
//         function(element,code){}
//     );
// });