$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.Component(
        "list", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                component: "card rounded w-100", //List Element
            },
            tools: { //Tools located at the top of the list
                add: {
                    icon: "plus-lg", //Icon
                    label: null, //Label
                    color: "success", //Color
                    class: null, //Added Classes
                    callback: function(tool,list){}, //Executed when the tool is created
                },
            },
            actions: { //Actions located at the end of each list item
                delete: {
                    icon: "trash", //Icon
                    label: null, //Label
                    color: "danger", //Color
                    class: null, //Added Classes
                    callback: function(action,item,list){}, //Executed when the action is created
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
        function(list,component){ //Callback
            list.tool( //Add a tool to the list //Note: This function can be called multiple times to add multiple tools. It can also called outside of the callback function.
                {
                    icon: "plus-lg", //Icon
                    label: null, //Label
                    color: "success", //Color
                    class: null, //Added Classes
                    name: "add", //Name
                    callback: function(tool,list){}, //Executed when this tool is created
                },
            )
            list.action( //Add an action to the list item //Note: This function can be called multiple times to add multiple actions. It can also called outside of the callback function.
                {
                    icon: "trash", //Icon
                    label: null, //Label
                    color: "danger", //Color
                    class: null, //Added Classes
                    name: "delete", //Name
                    callback: function(action,item,list){}, //Executed when this action is created
                },
            );
            list.add( //Add an item to the list //Note: This function can be called multiple times to add multiple items. It can also called outside of the callback function.
                {
                    icon: null, //Icon
                    field: "Lorem Ipsum", //Add Content to the list item
                    click: null, //Executed when this item is clicked
                    dblclick: null, //Executed when this item is clicked twice
                },
                function(item,list){}, //Executed when this item is created
            );
            list.get(); //Get the list
        },
    );

    // Javascript Code
    let scriptCode = '';
    scriptCode += '// Builder' + "\n";
    scriptCode += 'const sampleBuilder = new Builder();' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Component' + "\n";
    scriptCode += 'const sampleComponent = sampleBuilder.Component(' + "\n";
    scriptCode += '    "list", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            component: "card rounded w-100", //List Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        tools: { //Tools located at the top of the list' + "\n";
    scriptCode += '            add: {' + "\n";
    scriptCode += '                icon: "plus-lg", //Icon' + "\n";
    scriptCode += '                label: null, //Label' + "\n";
    scriptCode += '                color: "success", //Color' + "\n";
    scriptCode += '                class: null, //Added Classes' + "\n";
    scriptCode += '                callback: function(tool,list){}, //Executed when the tool is created' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        actions: { //Actions located at the end of each list item' + "\n";
    scriptCode += '            delete: {' + "\n";
    scriptCode += '                icon: "trash", //Icon' + "\n";
    scriptCode += '                label: null, //Label' + "\n";
    scriptCode += '                color: "danger", //Color' + "\n";
    scriptCode += '                class: null, //Added Classes' + "\n";
    scriptCode += '                callback: function(action,item,list){}, //Executed when the action is created' + "\n";
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
    scriptCode += '    function(list,component){ //Callback' + "\n";
    scriptCode += '        list.tool( //Add a tool to the list //Note: This function can be called multiple times to add multiple tools. It can also called outside of the callback function.' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                icon: "plus-lg", //Icon' + "\n";
    scriptCode += '                label: null, //Label' + "\n";
    scriptCode += '                color: "success", //Color' + "\n";
    scriptCode += '                class: null, //Added Classes' + "\n";
    scriptCode += '                name: "add", //Name' + "\n";
    scriptCode += '                callback: function(tool,list){}, //Executed when this tool is created' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        )' + "\n";
    scriptCode += '        list.action( //Add an action to the list item //Note: This function can be called multiple times to add multiple actions. It can also called outside of the callback function.' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                icon: "trash", //Icon' + "\n";
    scriptCode += '                label: null, //Label' + "\n";
    scriptCode += '                color: "danger", //Color' + "\n";
    scriptCode += '                class: null, //Added Classes' + "\n";
    scriptCode += '                name: "delete", //Name' + "\n";
    scriptCode += '                callback: function(action,item,list){}, //Executed when this action is created' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        list.add( //Add an item to the list //Note: This function can be called multiple times to add multiple items. It can also called outside of the callback function.' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                icon: null, //Icon' + "\n";
    scriptCode += '                field: "Lorem Ipsum", //Add Content to the list item' + "\n";
    scriptCode += '                click: null, //Executed when this item is clicked' + "\n";
    scriptCode += '                dblclick: null, //Executed when this item is clicked twice' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(item,list){}, //Executed when this item is created' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        list.get(); //Get the list' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += ');';

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
    setTimeout(function(){
        let pretty = prettier.format(sampleComponent.outerHTML(), { parser: "html", tabWidth: 4, useTabs: true, plugins: prettierPlugins });
        const html = builder.Component(
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
    }, 0);
});