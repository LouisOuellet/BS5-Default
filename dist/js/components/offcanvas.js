$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.Component(
        "offcanvas", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                component: null, //Offcanvas Object
            },
            icon: 'layout-sidebar-inset-reverse', //Add Icon
            title: 'Offcanvas', //Add Title
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', //Add Body
            dismissible: true, //Set Dismissible
            backdrop: true, //Set Backdrop
            scroll: false, //Set Scroll
            color: null, //Add Color
            side: null, //Set Side
        },
        function(offcanvas,component){ //Callback
        },
    );

    // Javascript Code
    let scriptCode = '';
    scriptCode += '// Builder' + "\n";
    scriptCode += 'const sampleBuilder = new Builder();' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Component' + "\n";
    scriptCode += 'const sampleComponent = sampleBuilder.Component(' + "\n";
    scriptCode += '    "offcanvas", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            component: null, //Offcanvas Object' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        icon: \'layout-sidebar-inset-reverse\', //Add Icon' + "\n";
    scriptCode += '        title: \'Offcanvas\', //Add Title' + "\n";
    scriptCode += '        body: \'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\\\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\', //Add Body' + "\n";
    scriptCode += '        dismissible: true, //Set Dismissible' + "\n";
    scriptCode += '        backdrop: true, //Set Backdrop' + "\n";
    scriptCode += '        scroll: false, //Set Scroll' + "\n";
    scriptCode += '        color: null, //Add Color' + "\n";
    scriptCode += '        side: null, //Set Side' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(offcanvas,component){ //Callback' + "\n";
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