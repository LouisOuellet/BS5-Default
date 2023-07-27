$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.component(
        "card", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                component: "w-100", //Collapse Element
            },
            icon: "card-text", //Set Icon
            title: "What is Lorem Ipsum?", //Set Title
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", //Set Body
            footer: null, //Set Footer
            strech: false, //Enable/Disable Strech
            hideHeader: false, //Enable/Disable Hide Header
            hideFooter: true, //Enable/Disable Hide Footer
            close:true, //Enable/Disable Close Button
            fullscreen: true, //Enable/Disable Fullscreen Button
            collapse: true, //Enable/Disable Collapse Button
            collapsed: false, //Enable/Disable Collapse
        },
        function(card,component){ //Callback
        },
    );

    // Javascript Code
    let scriptCode = '';
    scriptCode += '// Builder' + "\n";
    scriptCode += 'const sampleBuilder = new Builder();' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Component' + "\n";
    scriptCode += 'const sampleComponent = sampleBuilder.component(' + "\n";
    scriptCode += '    "card", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            collapse: "w-100", //Collapse Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        icon: "card-text", //Set Icon' + "\n";
    scriptCode += '        title: "What is Lorem Ipsum?", //Set Title' + "\n";
    scriptCode += '        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", //Set Body' + "\n";
    scriptCode += '        footer: null, //Set Footer' + "\n";
    scriptCode += '        strech: false, //Enable/Disable Strech' + "\n";
    scriptCode += '        hideHeader: false, //Enable/Disable Hide Header' + "\n";
    scriptCode += '        hideFooter: true, //Enable/Disable Hide Footer' + "\n";
    scriptCode += '        close:true, //Enable/Disable Close Button' + "\n";
    scriptCode += '        fullscreen: true, //Enable/Disable Fullscreen Button' + "\n";
    scriptCode += '        collapse: true, //Enable/Disable Collapse Button' + "\n";
    scriptCode += '        collapsed: false, //Enable/Disable Collapse' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(card,component){ //Callback' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += ');';

    // Code
    const code = sampleBuilder.component(
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
    const html = sampleBuilder.component(
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