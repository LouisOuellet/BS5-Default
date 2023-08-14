$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.Component(
        "blockquote", //Component Name
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
        function(blockquote,component){ //Callback
        },
    );

    // Javascript Code
    let scriptCode = '';
    scriptCode += '// Builder' + "\n";
    scriptCode += 'const sampleBuilder = new Builder();' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Component' + "\n";
    scriptCode += 'const sampleComponent = sampleBuilder.Component(' + "\n";
    scriptCode += '    "blockquote", //Component Name' + "\n";
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
    scriptCode += '    function(blockquote,component){ //Callback' + "\n";
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
    setTimeout(function(){
        let pretty = prettier.format(sampleComponent.outerHTML(), { parser: "html", tabWidth: 4, useTabs: true, plugins: prettierPlugins });
        const html = builder.Component(
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
    }, 0);
});