$(document).ready(function(){

    // Sample
    $('#example').click(function(){
        Notifications.add(
            {
                label: "A new monthly report is ready to download!",
            },
            function(notification){},
        );
    });

    // Code

    let scriptCode = '';
    scriptCode += '// Create Notification Area' + "\n";
	scriptCode += 'const Notifications = new Notification(' + "\n";
	scriptCode += '	"#notificationArea", // selector being the JQuery selector to find the notification area' + "\n";
	scriptCode += '	{' + "\n";
    scriptCode += '        class: { // class(es) to add to the notification area' + "\n";
    scriptCode += '            object: null, // class(es) to add to the notification area object' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        callbacks: {' + "\n";
    scriptCode += '            click: null, // callback function to run when a notification is clicked' + "\n";
    scriptCode += '            markAll: null, // callback function to run when the mark all as read button is clicked' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        icon: "bell", // icon to use for the notification area' + "\n";
    scriptCode += '        color: "danger", // color to use for the notification area badges' + "\n";
    scriptCode += '        onReadDelay: 1000, // delay in milliseconds before the onRead callback is run' + "\n";
    scriptCode += '        defaults: { // default values for notifications' + "\n";
    scriptCode += '            class: { // class(es) to add to the notification' + "\n";
    scriptCode += '                item: null, // class(es) to add to the notification item' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            click: null, // callback function to run when a notification is clicked' + "\n";
    scriptCode += '            onRead: null, // callback function to run when a notification is marked as read' + "\n";
    scriptCode += '            icon: "bell", // icon to use for the notification' + "\n";
    scriptCode += '            color: "primary", // color to use for the notification badge' + "\n";
    scriptCode += '            datetime: null, // datetime to use for the notification' + "\n";
    scriptCode += '            label: null, // label to use for the notification' + "\n";
    scriptCode += '            isRead: false, // whether the notification is read or not' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '	function(notification){ // callback function to run when the notification area is created' + "\n";
    scriptCode += '		notification.add( // add a notification to the notification area' + "\n";
    scriptCode += '			{' + "\n";
    scriptCode += '                class: { // class(es) to add to the notification' + "\n";
    scriptCode += '                    item: null, // class(es) to add to the notification item' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '                click: null, // callback function to run when a notification is clicked' + "\n";
    scriptCode += '                onRead: null, // callback function to run when a notification is marked as read' + "\n";
    scriptCode += '                icon: "bell", // icon to use for the notification' + "\n";
    scriptCode += '                color: "primary", // color to use for the notification badge' + "\n";
    scriptCode += '                datetime: null, // datetime to use for the notification' + "\n";
    scriptCode += '                label: "A new monthly report is ready to download!", // label to use for the notification' + "\n";
    scriptCode += '                isRead: false, // whether the notification is read or not' + "\n";
    scriptCode += '			},' + "\n";
    scriptCode += '			function(notification){}, // callback function to run when the notification is created' + "\n";
    scriptCode += '		);' + "\n";
    scriptCode += '	},' + "\n";
    scriptCode += ');';
    
    const code = new Code(
        '#code',
        {
            language: 'javascript',
            title: 'Code',
            clipboard:true,
            fullscreen:true,
            collapsed:false,
            code:scriptCode,
        },
        function(element,code){}
    );
});