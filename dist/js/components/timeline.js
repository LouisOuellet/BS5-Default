$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.Component(
        "timeline", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                component: null, //Component Element
                timeline: null, //Timeline Element
                item: "border rounded", //Item Element
                icon: null, //Icon Element
                object: null, //Object Element
                filters: null, //Filters Element
            },
            order: "DESC", //Order of the items
            showNow: true, //Enable/Disable the now line
            showStart: true, //Enable/Disable the start line
            properties: { //Default options for items
                icon: "circle", //Icon
                color: "secondary", //Color
                type: "", //Type, used for filtering
                datetime: null, //Date and time //Default is now
                order: null, //Overwrite the order of the item
                label: true, //Show/Hide the datetime label
                class: { //Add Classes
                    item: null, //Item Element
                    icon: null, //Icon Element
                    object: null, //Object Element
                },
            },
        },
        function(timeline,component){ //Callback
            timeline.add( //Add an item to the timeline //Note: This function can be called multiple times to add multiple items. It can also called outside of the callback function.
                {
                    icon: "chat-dots", //Icon
                    color: "primary", //Color
                    type: "lorem", //Type, used for filtering
                    datetime: null, //Date and time //Default is now
                    order: null, //Overwrite the order of the item
                    label: true, //Show/Hide the datetime label
                    class: { //Add Classes
                        item: null, //Item Element
                        icon: null, //Icon Element
                        object: null, //Object Element
                    },
                }, //Options for items
                function(object,timeline){ //Callback
            
                    // Set Tools
                    var deleteTool = $(document.createElement("a")).attr("href","#").addClass("text-decoration-none").prependTo(object.tools);
                    deleteTool.i = $(document.createElement("i")).addClass("bi bi-trash me-1").appendTo(deleteTool);
                    deleteTool.append("Delete");
            
                    // Set Content
                    var header = $(document.createElement("div")).addClass("card-header border-0").appendTo(object.item);
                    header.h5 = $(document.createElement("h5")).addClass("card-title").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.").appendTo(header);
                }
            );
            timeline.add( //Add an item to the timeline //Note: This function can be called multiple times to add multiple items. It can also called outside of the callback function.
                {
                    icon: "chat-text", //Icon
                    color: "primary", //Color
                    type: "ipsum", //Type, used for filtering
                    datetime: null, //Date and time //Default is now
                    order: null, //Overwrite the order of the item
                    label: true, //Show/Hide the datetime label
                    class: { //Add Classes
                        item: null, //Item Element
                        icon: null, //Icon Element
                        object: null, //Object Element
                    },
                }, //Options for items
                function(object,timeline){ //Callback
            
                    // Set Tools
                    var deleteTool = $(document.createElement("a")).attr("href","#").addClass("text-decoration-none").prependTo(object.tools);
                    deleteTool.i = $(document.createElement("i")).addClass("bi bi-trash me-1").appendTo(deleteTool);
                    deleteTool.append("Delete");
            
                    // Set Content
                    var header = $(document.createElement("div")).addClass("card-header border-0").appendTo(object.item);
                    header.h5 = $(document.createElement("h5")).addClass("card-title").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.").appendTo(header);
                }
            );
        },
    );

    // Javascript Code
    let scriptCode = '';
    scriptCode += '// Builder' + "\n";
    scriptCode += 'const sampleBuilder = new Builder();' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Component' + "\n";
    scriptCode += 'const sampleComponent = sampleBuilder.Component(' + "\n";
    scriptCode += '    "timeline", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            component: null, //Component Element' + "\n";
    scriptCode += '            timeline: null, //Timeline Element' + "\n";
    scriptCode += '            item: "border rounded", //Item Element' + "\n";
    scriptCode += '            icon: null, //Icon Element' + "\n";
    scriptCode += '            object: null, //Object Element' + "\n";
    scriptCode += '            filters: null, //Filters Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        order: "DESC", //Order of the items' + "\n";
    scriptCode += '        showNow: true, //Enable/Disable the now line' + "\n";
    scriptCode += '        showStart: true, //Enable/Disable the start line' + "\n";
    scriptCode += '        properties: { //Default options for items' + "\n";
    scriptCode += '            icon: "circle", //Icon' + "\n";
    scriptCode += '            color: "secondary", //Color' + "\n";
    scriptCode += '            type: "", //Type, used for filtering' + "\n";
    scriptCode += '            datetime: null, //Date and time //Default is now' + "\n";
    scriptCode += '            order: null, //Overwrite the order of the item' + "\n";
    scriptCode += '            label: true, //Show/Hide the datetime label' + "\n";
    scriptCode += '            class: { //Add Classes' + "\n";
    scriptCode += '                item: null, //Item Element' + "\n";
    scriptCode += '                icon: null, //Icon Element' + "\n";
    scriptCode += '                object: null, //Object Element' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(timeline,component){ //Callback' + "\n";
    scriptCode += '        timeline.add( //Add an item to the timeline //Note: This function can be called multiple times to add multiple items. It can also called outside of the callback function.' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                icon: "chat-dots", //Icon' + "\n";
    scriptCode += '                color: "primary", //Color' + "\n";
    scriptCode += '                type: "lorem", //Type, used for filtering' + "\n";
    scriptCode += '                datetime: null, //Date and time //Default is now' + "\n";
    scriptCode += '                order: null, //Overwrite the order of the item' + "\n";
    scriptCode += '                label: true, //Show/Hide the datetime label' + "\n";
    scriptCode += '                class: { //Add Classes' + "\n";
    scriptCode += '                    item: null, //Item Element' + "\n";
    scriptCode += '                    icon: null, //Icon Element' + "\n";
    scriptCode += '                    object: null, //Object Element' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '            }, //Options for items' + "\n";
    scriptCode += '            function(object,timeline){ //Callback' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '                // Set Tools' + "\n";
    scriptCode += '                var deleteTool = $(document.createElement("a")).attr("href","#").addClass("text-decoration-none").prependTo(object.tools);' + "\n";
    scriptCode += '                deleteTool.i = $(document.createElement("i")).addClass("bi bi-trash me-1").appendTo(deleteTool);' + "\n";
    scriptCode += '                deleteTool.append("Delete");' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '                // Set Content' + "\n";
    scriptCode += '                var header = $(document.createElement("div")).addClass("card-header border-0").appendTo(object.item);' + "\n";
    scriptCode += '                header.h5 = $(document.createElement("h5")).addClass("card-title").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.").appendTo(header);' + "\n";
    scriptCode += '            }' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        timeline.add( //Add an item to the timeline //Note: This function can be called multiple times to add multiple items. It can also called outside of the callback function.' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                icon: "chat-text", //Icon' + "\n";
    scriptCode += '                color: "primary", //Color' + "\n";
    scriptCode += '                type: "ipsum", //Type, used for filtering' + "\n";
    scriptCode += '                datetime: null, //Date and time //Default is now' + "\n";
    scriptCode += '                order: null, //Overwrite the order of the item' + "\n";
    scriptCode += '                label: true, //Show/Hide the datetime label' + "\n";
    scriptCode += '                class: { //Add Classes' + "\n";
    scriptCode += '                    item: null, //Item Element' + "\n";
    scriptCode += '                    icon: null, //Icon Element' + "\n";
    scriptCode += '                    object: null, //Object Element' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '            }, //Options for items' + "\n";
    scriptCode += '            function(object,timeline){ //Callback' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '                // Set Tools' + "\n";
    scriptCode += '                var deleteTool = $(document.createElement("a")).attr("href","#").addClass("text-decoration-none").prependTo(object.tools);' + "\n";
    scriptCode += '                deleteTool.i = $(document.createElement("i")).addClass("bi bi-trash me-1").appendTo(deleteTool);' + "\n";
    scriptCode += '                deleteTool.append("Delete");' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '                // Set Content' + "\n";
    scriptCode += '                var header = $(document.createElement("div")).addClass("card-header border-0").appendTo(object.item);' + "\n";
    scriptCode += '                header.h5 = $(document.createElement("h5")).addClass("card-title").text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.").appendTo(header);' + "\n";
    scriptCode += '            }' + "\n";
    scriptCode += '        );' + "\n";
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