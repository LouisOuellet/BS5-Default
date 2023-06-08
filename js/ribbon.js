$(document).ready(function(){

    // Sample
    const sampleObject = new Ribbon(
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                wrapper: null, //Ribbon Wrapper Element
                ribbon: "fs-4", //Ribbon Element
            },
            color: "danger", //Set Color
            label: "Ribbon", //Set Label
            icon: "bookmark", //Set Icon
            size: "xl", //Set Size
        },
        function(ribbon){}, //Callback Function
    );

    // Code
    let scriptCode = '';
    scriptCode += 'const sampleObject = new Ribbon(' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            wrapper: null, //Ribbon Wrapper Element' + "\n";
    scriptCode += '            ribbon: "fs-4", //Ribbon Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        color: "danger", //Set Color' + "\n";
    scriptCode += '        label: "Ribbon", //Set Label' + "\n";
    scriptCode += '        icon: "bookmark", //Set Icon' + "\n";
    scriptCode += '        size: "xl", //Set Size' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(ribbon){}, //Callback Function' + "\n";
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