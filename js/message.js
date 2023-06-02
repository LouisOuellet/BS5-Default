$(document).ready(function(){

    // Sample
    $('#example').click(function(){
        Messages.add(
            {
                label: "A new monthly report is ready to download!",
                name: "Louis Ouellet",
                email: "louis@laswitchtech.com",
            },
            function(message){},
        );
    });

    // Code

    let scriptCode = '';
    scriptCode += '// Create Message Area' + "\n";
    scriptCode += 'const Messages = new Message(' + "\n";
    scriptCode += '    "#messageArea", // selector being the JQuery selector to find the message area' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { // class(es) to add to the message area' + "\n";
    scriptCode += '            object: null, // class(es) to add to the message area object' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        callback: { // callback functions to run when an event is triggered' + "\n";
    scriptCode += '            click: null, // callback function to run when a message is clicked' + "\n";
    scriptCode += '            viewMore: null, // callback function to run when the view more button is clicked' + "\n";
    scriptCode += '            onRead: null, // callback function to run when a message is read' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        icon: "envelope", // icon to use for the message area' + "\n";
    scriptCode += '        color: "info", // color to use for the message area' + "\n";
    scriptCode += '        onReadDelay: 500, // delay in milliseconds before the onRead callback is called' + "\n";
    scriptCode += '        defaults: { // default values for a message' + "\n";
    scriptCode += '            class: { // class(es) to add to the message' + "\n";
    scriptCode += '                item: null, // class(es) to add to the message item' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            click: null, // callback function to run when a message is clicked' + "\n";
    scriptCode += '            onRead: null, // callback function to run when a message is read' + "\n";
    scriptCode += '            datetime: null, // datetime to use for the message' + "\n";
    scriptCode += '            label: null, // label to use for the message' + "\n";
    scriptCode += '            email: null, // email to use for the message' + "\n";
    scriptCode += '            name: null, // name to use for the message' + "\n";
    scriptCode += '            isRead: false, // whether the message is read or not' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(message){ // callback function to run when a message is added' + "\n";
    scriptCode += '        Messages.add( // add a message to the message area' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                class: { // class(es) to add to the message' + "\n";
    scriptCode += '                    item: null, // class(es) to add to the message item' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '                click: null, // callback function to run when a message is clicked' + "\n";
    scriptCode += '                onRead: null, // callback function to run when a message is read' + "\n";
    scriptCode += '                datetime: null, // datetime to use for the message' + "\n";
    scriptCode += '                label: "A new monthly report is ready to download!", // label to use for the message' + "\n";
    scriptCode += '                email: "louis@laswitchtech.com", // email to use for the message' + "\n";
    scriptCode += '                name: "Louis Ouellet", // name to use for the message' + "\n";
    scriptCode += '                isRead: false, // whether the message is read or not' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(message){},' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '    },' + "\n";
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