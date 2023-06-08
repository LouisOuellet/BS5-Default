$(document).ready(function(){

    // Sample
    const sampleObject = new Blockquote(
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                figure: null, //Figure Element
                blockquote: null, //Blockquote Element
                figcaption: null, //Figcaption Element
                cite: null, //Cite Element
            },
            quote: "A well-known quote, contained in a blockquote element.", //Set Quote
            author: "Someone famous", //Set Author
            source: "Source Title", //Set Source
        },
        function(blockquote){}, //Callback Function
    );

    // Code
    let scriptCode = '';
    scriptCode += 'const sampleObject = new Blockquote(' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            figure: null, //Figure Element' + "\n";
    scriptCode += '            blockquote: null, //Blockquote Element' + "\n";
    scriptCode += '            figcaption: null, //Figcaption Element' + "\n";
    scriptCode += '            cite: null, //Cite Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        quote: "A well-known quote, contained in a blockquote element.", //Set Quote' + "\n";
    scriptCode += '        author: "Someone famous", //Set Author' + "\n";
    scriptCode += '        source: "Source Title", //Set Source' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(blockquote){}, //Callback Function' + "\n";
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