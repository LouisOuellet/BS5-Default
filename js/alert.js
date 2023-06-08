$(document).ready(function(){

    // Sample
    const sampleObject = new Alert(
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
        function(alert){}, //Callback Function
    );

    // Code
    let scriptCode = '';
    scriptCode += 'const sampleObject = new Alert(' + "\n";
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
    scriptCode += '    function(alert){}, //Callback Function' + "\n";
    scriptCode += ');';
    
    const code = new Code(
        '#code',
        {
            language: 'javascript',
            title: 'Code',
            clipboard:true,
            fullscreen:true,
            collapsed:true,
            code:scriptCode,
        },
        function(element,code){}
    );

    let pretty = prettier.format($('#example').html(), { parser: "html", tabWidth: 4, useTabs: true, plugins: prettierPlugins });
    
    const html = new Code(
        '#htmlcode',
        {
            language: 'markup',
            title: 'Code',
            clipboard:true,
            fullscreen:true,
            collapsed:true,
            code:pretty,
        },
        function(element,code){}
    );
});