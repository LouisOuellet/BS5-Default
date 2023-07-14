$(document).ready(function(){

    // Sample
    
    const sampleObject = new IDE(
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                ide: null, //IDE Element
                numbers: null, //Line Numbers Element
                input: null, //Textarea Element
            },
        },
        function(ide){ // Callback
        }, 
    );

    // Code

    let scriptCode = '';
    scriptCode += 'const sampleObject = new IDE(' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            ide: null, //IDE Element' + "\n";
    scriptCode += '            numbers: null, //Line Numbers Element' + "\n";
    scriptCode += '            input: null, //Textarea Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(ide){ // Callback' + "\n";
    scriptCode += '    }, ' + "\n";
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