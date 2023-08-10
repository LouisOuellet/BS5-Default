$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.Component(
        "ribbon", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                component: null, //Component Element
                wrapper: null, //Ribbon Wrapper Element
                ribbon: "fs-4", //Ribbon Element
            },
            color: "danger", //Set Color
            label: "Ribbon", //Set Label
            icon: "bookmark", //Set Icon
            size: "xl", //Set Size
        },
        function(ribbon,component){ //Callback
        },
    );

    // Javascript Code
    let scriptCode = '';
    scriptCode += '// Builder' + "\n";
    scriptCode += 'const sampleBuilder = new Builder();' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Component' + "\n";
    scriptCode += 'const sampleComponent = sampleBuilder.Component(' + "\n";
    scriptCode += '    "ribbon", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            component: null, //Component Element' + "\n";
    scriptCode += '            wrapper: null, //Ribbon Wrapper Element' + "\n";
    scriptCode += '            ribbon: "fs-4", //Ribbon Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        color: "danger", //Set Color' + "\n";
    scriptCode += '        label: "Ribbon", //Set Label' + "\n";
    scriptCode += '        icon: "bookmark", //Set Icon' + "\n";
    scriptCode += '        size: "xl", //Set Size' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(ribbon,component){ //Callback' + "\n";
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
    let pretty = prettier.format(sampleComponent.outerHTML(), { parser: "html", tabWidth: 4, useTabs: true, plugins: prettierPlugins });
    const html = sampleBuilder.Component(
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
});