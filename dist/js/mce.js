$(document).ready(function(){

    // Sample
    
    const sampleObject = new MCE(
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                mce: null, //MCE Element
            },
        },
        function(ide){ // Callback
        }, 
    );

    // Code

    let scriptCode = '';
    scriptCode += 'const sampleObject = new MCE(' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            mce: null, //MCE Element' + "\n";
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