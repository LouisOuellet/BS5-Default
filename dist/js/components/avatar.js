$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.Component(
        "avatar", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                object: "rounded-circle", //Object Element
            },
            email: "louis@laswitchtech.com", //Set Email
            extension: false, //Set Extension
            size: "512px", //Set Size
            default: "mp", //Set Default if not found
            force: false, //Set Force Default
            rating: false, //Set Rating
        },
        function(avatar,component){ //Callback
        },
    );

    // Javascript Code
    let scriptCode = '';
    scriptCode += '// Builder' + "\n";
    scriptCode += 'const sampleBuilder = new Builder();' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Component' + "\n";
    scriptCode += 'const sampleComponent = sampleBuilder.Component(' + "\n";
    scriptCode += '    "avatar", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            object: "rounded-circle", //Object Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        email: "louis@laswitchtech.com", //Set Email' + "\n";
    scriptCode += '        extension: false, //Set Extension' + "\n";
    scriptCode += '        size: "512px", //Set Size' + "\n";
    scriptCode += '        default: "mp", //Set Default if not found' + "\n";
    scriptCode += '        force: false, //Set Force Default' + "\n";
    scriptCode += '        rating: false, //Set Rating' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(avatar,component){ //Callback' + "\n";
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