$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.Component(
        "progress", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Classes
                progress: "w-100", //Progress Element
                bar: null, //Bar Element
                label: null, //Label Element
            },
            callback: { //Callbacks
                change: function(progress){}, //On Change
            },
            size: null, //Set Size
            color: null, //Set Color
            striped: true, //Set Striped
            animated: true, //Set Animated
            scale: 100, //Set Scale
            label: "{percent}", //Set Label //Note: Some placeholders are available. {progress} {scale} {percent}
        },
        function(progress,component){ //Callback
            progress.set(50); //Set Progress //Note: This function can be called multiple times. It can also called outside of the callback function.
        },
    );

    // Javascript Code
    let scriptCode = '';
    scriptCode += '// Builder' + "\n";
    scriptCode += 'const sampleBuilder = new Builder();' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Component' + "\n";
    scriptCode += 'const sampleComponent = sampleBuilder.Component(' + "\n";
    scriptCode += '    "progress", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Classes' + "\n";
    scriptCode += '            progress: "w-100", //Progress Element' + "\n";
    scriptCode += '            bar: null, //Bar Element' + "\n";
    scriptCode += '            label: null, //Label Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        callback: { //Callbacks' + "\n";
    scriptCode += '            change: function(progress){}, //On Change' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        size: null, //Set Size' + "\n";
    scriptCode += '        color: null, //Set Color' + "\n";
    scriptCode += '        striped: true, //Set Striped' + "\n";
    scriptCode += '        animated: true, //Set Animated' + "\n";
    scriptCode += '        scale: 100, //Set Scale' + "\n";
    scriptCode += '        label: "{percent}", //Set Label //Note: Some placeholders are available. {progress} {scale} {percent}' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(progress,component){ //Callback' + "\n";
    scriptCode += '        progress.set(50); //Set Progress //Note: This function can be called multiple times. It can also called outside of the callback function.' + "\n";
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