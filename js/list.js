$(document).ready(function(){

    // Sample
    
    const sampleObject = new List(
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                list: "card rounded w-100", //List Element
            },
            tools: { //Tools located at the top of the list
                add: {
                    icon: "plus-lg", //Icon
                    label: null, //Label
                    color: "success", //Color
                    class: null, //Added Classes
                    callback: function(tool){}, //Executed when the tool is created
                },
            },
            actions: { //Actions located at the end of each list item
                delete: {
                    icon: "trash", //Icon
                    label: null, //Label
                    color: "danger", //Color
                    class: null, //Added Classes
                    callback: function(action){}, //Executed when the action is created
                },
            },
            icon: null, //Default Icon for list items
            callback: { //Callbacks
                tool: null, //Executed when a tool is created
                action: null, //Executed when an action is created
                item: null, //Executed when an item is created
                click: null, //Executed when an item is clicked
                dblclick: null, //Executed when an item is clicked twice
            },
        },
        function(list){ //Callback
            list.item( //Add an item to the list //Note: This function can be called multiple times to add multiple items. It can also called outside of the callback function.
                {
                    icon: null, //Icon
                    field: "Lorem Ipsum", //Add Content to the list item
                    click: null, //Executed when this item is clicked
                    dblclick: null, //Executed when this item is clicked twice
                },
                function(item){}, //Executed when this item is created
            );
        }, 
    );

    // Code

    let scriptCode = '';
    scriptCode += 'const sampleObject = new List(' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            list: "card rounded w-100", //List Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        tools: { //Tools located at the top of the list' + "\n";
    scriptCode += '            add: {' + "\n";
    scriptCode += '                icon: "plus-lg", //Icon' + "\n";
    scriptCode += '                label: null, //Label' + "\n";
    scriptCode += '                color: "success", //Color' + "\n";
    scriptCode += '                class: null, //Added Classes' + "\n";
    scriptCode += '                callback: function(tool){}, //Executed when the tool is created' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        actions: { //Actions located at the end of each list item' + "\n";
    scriptCode += '            delete: {' + "\n";
    scriptCode += '                icon: "trash", //Icon' + "\n";
    scriptCode += '                label: null, //Label' + "\n";
    scriptCode += '                color: "danger", //Color' + "\n";
    scriptCode += '                class: null, //Added Classes' + "\n";
    scriptCode += '                callback: function(action){}, //Executed when the action is created' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        icon: null, //Default Icon for list items' + "\n";
    scriptCode += '        callback: { //Callbacks' + "\n";
    scriptCode += '            tool: null, //Executed when a tool is created' + "\n";
    scriptCode += '            action: null, //Executed when an action is created' + "\n";
    scriptCode += '            item: null, //Executed when an item is created' + "\n";
    scriptCode += '            click: null, //Executed when an item is clicked' + "\n";
    scriptCode += '            dblclick: null, //Executed when an item is clicked twice' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(list){ //Callback' + "\n";
    scriptCode += '        list.item( //Add an item to the list //Note: This function can be called multiple times to add multiple items. It can also called outside of the callback function.' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                icon: null, //Icon' + "\n";
    scriptCode += '                field: "Lorem Ipsum", //Add Content to the list item' + "\n";
    scriptCode += '                click: null, //Executed when this item is clicked' + "\n";
    scriptCode += '                dblclick: null, //Executed when this item is clicked twice' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(item){}, //Executed when this item is created' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '    }, ' + "\n";
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