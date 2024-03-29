$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.Component(
        "dropdown", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                object: null, //Object Element
                button: null, //Button Element
                menu: null, //Menu Element
            },
            icon: "three-dots-vertical", //Icon
            label: "My Dropdown", //Label
        },
        function(dropdown){ //Callback
            dropdown.item( //Add an item to the dropdown //Note: This function can be called multiple times to add multiple items. It can also called outside of the callback function.
                {
                    class: { //Add Classes
                        item: "text-bg-primary", //Item Element
                        button: null, //Button Element
                        label: null, //Label Element
                    },
                    link: "?p=profile", //Link
                    icon: null, //Icon
                    label: "Profile", //Label
                    visible: null, //Condition for visibility // This can be a function or a boolean
                    click: null, //Click Event
                },
                function(item){}, //Callback
            );
            dropdown.seperator(); //Add a seperator to the dropdown //Note: This function can be called multiple times to add multiple seperators. It can also called outside of the callback function.
            dropdown.item( //Add an item to the dropdown //Note: This function can be called multiple times to add multiple items. It can also called outside of the callback function.
                {
                    class: { //Add Classes
                        item: null, //Item Element
                        button: null, //Button Element
                        label: null, //Label Element
                    },
                    link: null, //Link
                    icon: "gear", //Icon
                    label: null, //Label
                    visible: null, //Condition for visibility // This can be a function or a boolean
                    click: null, //Click Event
                },
                function(item){}, //Callback
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
    scriptCode += '    "dropdown", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            object: null, //Object Element' + "\n";
    scriptCode += '            button: null, //Button Element' + "\n";
    scriptCode += '            menu: null, //Menu Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        icon: "three-dots-vertical", //Icon' + "\n";
    scriptCode += '        label: "My Dropdown", //Label' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(dropdown){ //Callback' + "\n";
    scriptCode += '        dropdown.item( //Add an item to the dropdown //Note: This function can be called multiple times to add multiple items. It can also called outside of the callback function.' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                class: { //Add Classes' + "\n";
    scriptCode += '                    item: "text-bg-primary", //Item Element' + "\n";
    scriptCode += '                    button: null, //Button Element' + "\n";
    scriptCode += '                    label: null, //Label Element' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '                link: "?p=profile", //Link' + "\n";
    scriptCode += '                icon: null, //Icon' + "\n";
    scriptCode += '                label: "Profile", //Label' + "\n";
    scriptCode += '                visible: null, //Condition for visibility // This can be a function or a boolean' + "\n";
    scriptCode += '                click: null, //Click Event' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(item){}, //Callback' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        dropdown.seperator(); //Add a seperator to the dropdown //Note: This function can be called multiple times to add multiple seperators. It can also called outside of the callback function.' + "\n";
    scriptCode += '        dropdown.item( //Add an item to the dropdown //Note: This function can be called multiple times to add multiple items. It can also called outside of the callback function.' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                class: { //Add Classes' + "\n";
    scriptCode += '                    item: null, //Item Element' + "\n";
    scriptCode += '                    button: null, //Button Element' + "\n";
    scriptCode += '                    label: null, //Label Element' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '                link: null, //Link' + "\n";
    scriptCode += '                icon: "gear", //Icon' + "\n";
    scriptCode += '                label: null, //Label' + "\n";
    scriptCode += '                visible: null, //Condition for visibility // This can be a function or a boolean' + "\n";
    scriptCode += '                click: null, //Click Event' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(item){}, //Callback' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '    }, ' + "\n";
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