$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.component(
        "alert", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                alert: null, //Alert Element
            },
            color: "danger", //Set Color
            dismissible: true, //Set Dismissible
            icon: "slash-circle", //Set Icon
            title: "Alert!", //Set Title
            content: "Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.", //Set Content
        },
        function(alert,component){ //Callback
        },
    );

    // Javascript Code
    let scriptCode = '';
    scriptCode += '// Builder' + "\n";
    scriptCode += 'const sampleBuilder = new Builder();' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Component' + "\n";
    scriptCode += 'const sampleComponent = sampleBuilder.component(' + "\n";
    scriptCode += '    "alert", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            alert: null, //Alert Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        color: "danger", //Set Color' + "\n";
    scriptCode += '        dismissible: true, //Set Dismissible' + "\n";
    scriptCode += '        icon: "slash-circle", //Set Icon' + "\n";
    scriptCode += '        title: "Alert!", //Set Title' + "\n";
    scriptCode += '        content: "Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.", //Set Content' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(alert,component){ //Callback' + "\n";
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