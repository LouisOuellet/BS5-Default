$(document).ready(function(){

    // Sample
    
    const sampleObject = new Modal(
        "#example", //Selector or JQuery Object to add click event to
        {
            class: { //Add Classes
                modal: null, //Modal Element
                dialog: null, //Dialog Element
                content: null, //Content Element
                header: null, //Header Element
                body: null, //Body Element
                footer: null, //Footer Element
            },
            callback: { //Add Callbacks
                submit: function(element,modal){ //On Submit
                    console.log("Submit", element,modal);
                },
                cancel: function(element,modal){ //On Cancel
                    console.log("Cancel", element,modal);
                },
                fullscreen: function(element,modal){ //On Fullscreen Toggle
                    console.log("Fullscreen", element,modal);
                },
                close: function(element,modal){ //On Close
                    console.log("Close", element,modal);
                },
                onShow: function(element,modal){ //On Show
                    console.log("Show", element,modal);
                },
                onHide: function(element,modal){ //On Hide
                    console.log("Hide", element,modal);
                },
            },
            onEnter: true, //Enable/Disable Submit on Enter
            close:true, //Enable/Disable Close Button
            fullscreen:true, //Enable/Disable Fullscreen Button
            destroy:false, //Enable/Disable Destroy on Hide
            icon: "info-circle", //Set Icon
            title: "Lorem Ipsum", //Set Title
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", //Set Body
            static: false, //Enable/Disable Static Backdrop
            cancel: true, //Enable/Disable Cancel
            submit: true, //Enable/Disable Submit
            center: false, //Enable/Disable Centered Modal
            size: "none", //Set Size
        },
        function(element,modal){ // callback
            modal.add( //Add an action to the modal //Note: This function can be called multiple times to add multiple action. It can also called outside of the callback function.
                {
                    icon: null, //Set Icon
                    label: "action", //Set Label
                    color: null, //Set Color
                },
                function(action,element,modal){}, //Executed when this action is clicked
            );
        },
    );

    // Code

    let scriptCode = '';
    scriptCode += 'const sampleObject = new Modal(' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to add click event to' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            modal: null, //Modal Element' + "\n";
    scriptCode += '            dialog: null, //Dialog Element' + "\n";
    scriptCode += '            content: null, //Content Element' + "\n";
    scriptCode += '            header: null, //Header Element' + "\n";
    scriptCode += '            body: null, //Body Element' + "\n";
    scriptCode += '            footer: null, //Footer Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        callback: { //Add Callbacks' + "\n";
    scriptCode += '            submit: function(element,modal){ //On Submit' + "\n";
    scriptCode += '                console.log("Submit", element,modal);' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            cancel: function(element,modal){ //On Cancel' + "\n";
    scriptCode += '                console.log("Cancel", element,modal);' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            fullscreen: function(element,modal){ //On Fullscreen Toggle' + "\n";
    scriptCode += '                console.log("Fullscreen", element,modal);' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            close: function(element,modal){ //On Close' + "\n";
    scriptCode += '                console.log("Close", element,modal);' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            onShow: function(element,modal){ //On Show' + "\n";
    scriptCode += '                console.log("Show", element,modal);' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            onHide: function(element,modal){ //On Hide' + "\n";
    scriptCode += '                console.log("Hide", element,modal);' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        onEnter: true, //Enable/Disable Submit on Enter' + "\n";
    scriptCode += '        close:true, //Enable/Disable Close Button' + "\n";
    scriptCode += '        fullscreen:true, //Enable/Disable Fullscreen Button' + "\n";
    scriptCode += '        destroy:false, //Enable/Disable Destroy on Hide' + "\n";
    scriptCode += '        icon: "info-circle", //Set Icon' + "\n";
    scriptCode += '        title: "Lorem Ipsum", //Set Title' + "\n";
    scriptCode += '        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", //Set Body' + "\n";
    scriptCode += '        static: false, //Enable/Disable Static Backdrop' + "\n";
    scriptCode += '        cancel: true, //Enable/Disable Cancel' + "\n";
    scriptCode += '        submit: true, //Enable/Disable Submit' + "\n";
    scriptCode += '        center: false, //Enable/Disable Centered Modal' + "\n";
    scriptCode += '        size: "none", //Set Size' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(element,modal){ // callback' + "\n";
    scriptCode += '        modal.add( //Add an action to the modal //Note: This function can be called multiple times to add multiple action. It can also called outside of the callback function.' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                icon: null, //Set Icon' + "\n";
    scriptCode += '                label: "action", //Set Label' + "\n";
    scriptCode += '                color: null, //Set Color' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(action,element,modal){}, //Executed when this action is clicked' + "\n";
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
            collapsed:true,
            code:scriptCode,
        },
        function(element,code){}
    );
});