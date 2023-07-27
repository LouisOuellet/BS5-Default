$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Sample
    let sampleCode = "";
    sampleCode += "// Placeholder JavaScript code" + "\n";
    sampleCode += "function doSomething() {" + "\n";
    sampleCode += "    // TODO: Implement functionality" + "\n";
    sampleCode += "    console.log('Placeholder code');" + "\n";
    sampleCode += "}" + "\n";
    sampleCode += "" + "\n";
    sampleCode += "// Sample usage" + "\n";
    sampleCode += "doSomething();";

    // Component
    const sampleComponent = sampleBuilder.component(
        "code", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                component: "w-100", //Component Element
            },
            language: "javascript", //Set Language
            title: "Example", //Set Title
            clipboard:true, //Enable/Disable Clipboard
            fullscreen:true, //Enable/Disable Fullscreen
            code:sampleCode, //Set Code
        },
        function(code,component){ //Callback
        },
    );

    // Javascript Code
    let scriptCode = '';
    scriptCode += '// Builder' + "\n";
    scriptCode += 'const sampleBuilder = new Builder();' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Sample' + "\n";
    scriptCode += 'let sampleCode = "";' + "\n";
    scriptCode += 'sampleCode += "// Placeholder JavaScript code" + "\\n";' + "\n";
    scriptCode += 'sampleCode += "function doSomething() {" + "\\n";' + "\n";
    scriptCode += 'sampleCode += "    // TODO: Implement functionality" + "\\n";' + "\n";
    scriptCode += 'sampleCode += "    console.log(\'Placeholder code\');" + "\\n";' + "\n";
    scriptCode += 'sampleCode += "}" + "\\n";' + "\n";
    scriptCode += 'sampleCode += "" + "\\n";' + "\n";
    scriptCode += 'sampleCode += "// Sample usage" + "\\n";' + "\n";
    scriptCode += 'sampleCode += "doSomething();";' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Component' + "\n";
    scriptCode += 'const sampleComponent = sampleBuilder.component(' + "\n";
    scriptCode += '    "code", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            component: "w-100", //Component Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        language: "javascript", //Set Language' + "\n";
    scriptCode += '        title: "Example", //Set Title' + "\n";
    scriptCode += '        clipboard:true, //Enable/Disable Clipboard' + "\n";
    scriptCode += '        fullscreen:true, //Enable/Disable Fullscreen' + "\n";
    scriptCode += '        code:sampleCode, //Set Code' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(code,component){ //Callback' + "\n";
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
$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.component(
        "code", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                component: "w-100", //Component Element
            },
            language: "javascript", //Set Language
            title: "Example", //Set Title
            clipboard:true, //Enable/Disable Clipboard
            fullscreen:true, //Enable/Disable Fullscreen
            code:sampleCode, //Set Code
        },
        function(code,component){ //Callback
        },
    );

    // Javascript Code
    let scriptCode = '';
    scriptCode += '// Builder' + "\n";
    scriptCode += 'const sampleBuilder = new Builder();' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Component' + "\n";

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