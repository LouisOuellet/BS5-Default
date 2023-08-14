$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.Component(
        "accordion", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                accordion: null, //Accordion Element
                item: null, //Accordion Item Element
            },
            flush: false, //Flush Accordion
            alwaysOpen: true, //Always have one item open
            properties: { //Default Tab Options
                icon: "gear", //Add Icon
                title: null, //Add Title
                content: null, //Add Content
            },
        },
        function(accordion,component){ //Callback
            accordion.add( //Add item to the accordion //Note: This function can be called multiple times to add multiple item. It can also called outside of the callback function.
                {
                    icon: null, //Add Icon
                    title: 'Accordion Item #1', //Add Title
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', //Add Content
                },
                function(item,accordion){}, //Callback Function
            );
            accordion.add( //Add item to the accordion //Note: This function can be called multiple times to add multiple item. It can also called outside of the callback function.
                {
                    title: 'Accordion Item #2', //Add Title
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', //Add Content
                },
                function(item,accordion){}, //Callback Function
            );
            accordion.add( //Add item to the accordion //Note: This function can be called multiple times to add multiple item. It can also called outside of the callback function.
                {
                    title: 'Accordion Item #3', //Add Title
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', //Add Content
                },
                function(item,accordion){}, //Callback Function
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
    scriptCode += '    "accordion", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            accordion: null, //Accordion Element' + "\n";
    scriptCode += '            item: null, //Accordion Item Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        flush: false, //Flush Accordion' + "\n";
    scriptCode += '        alwaysOpen: true, //Always have one item open' + "\n";
    scriptCode += '        properties: { //Default Tab Options' + "\n";
    scriptCode += '            icon: "gear", //Add Icon' + "\n";
    scriptCode += '            title: null, //Add Title' + "\n";
    scriptCode += '            content: null, //Add Content' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(accordion,component){ //Callback' + "\n";
    scriptCode += '        accordion.add( //Add item to the accordion //Note: This function can be called multiple times to add multiple item. It can also called outside of the callback function.' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                icon: null, //Add Icon' + "\n";
    scriptCode += '                title: \'Accordion Item #1\', //Add Title' + "\n";
    scriptCode += '                content: \'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s\', //Add Content' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(item,accordion){}, //Callback Function' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        accordion.add( //Add item to the accordion //Note: This function can be called multiple times to add multiple item. It can also called outside of the callback function.' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                icon: null, //Add Icon' + "\n";
    scriptCode += '                title: \'Accordion Item #2\', //Add Title' + "\n";
    scriptCode += '                content: \'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s\', //Add Content' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(item,accordion){}, //Callback Function' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        accordion.add( //Add item to the accordion //Note: This function can be called multiple times to add multiple item. It can also called outside of the callback function.' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                icon: null, //Add Icon' + "\n";
    scriptCode += '                title: \'Accordion Item #3\', //Add Title' + "\n";
    scriptCode += '                content: \'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s\', //Add Content' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(item,accordion){}, //Callback Function' + "\n";
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