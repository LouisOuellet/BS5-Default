$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.Component(
        "references", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: {
                component: null,
                list: null,
                form: null,
            },
            callback: {
                add: function(values){ console.log("adding");console.log(values); },
                remove: function(type, reference){ console.log("removing");console.log(type, reference); },
            },
            types: [
                {"id": "ccn","text": "Cargo Control Number"},
                {"id": "cn","text": "Container"},
                {"id": "tr","text": "Transaction"},
                {"id": "po","text": "Purchase Order"},
                {"id": "inv","text": "Invoice"},
                {"id": "other","text": "Other"}
            ],
            default: "other",
        },
        function(references,component){ //Callback
            references.add("ccn","1234ABCD123456789");
            references.add("cn","ABCD123456");
            references.add("cn","ABCD123457");
            references.add("tr","12345123456789");
            references.add("po","ABCD");
            references.add("inv","INV-1234");
        },
    );

    // Javascript Code
    let scriptCode = '';
    scriptCode += '// Builder' + "\n";
    scriptCode += 'const sampleBuilder = new Builder();' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Component' + "\n";
    scriptCode += 'const sampleComponent = sampleBuilder.Component(' + "\n";
    scriptCode += '    "references", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: {' + "\n";
    scriptCode += '            component: null,' + "\n";
    scriptCode += '            list: null,' + "\n";
    scriptCode += '            form: null,' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        callback: {' + "\n";
    scriptCode += '            add: function(values){ console.log("adding");console.log(values); },' + "\n";
    scriptCode += '            remove: function(type, reference){ console.log("removing");console.log(type, reference); },' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        types: [' + "\n";
    scriptCode += '            {"id": "ccn","text": "Cargo Control Number"},' + "\n";
    scriptCode += '            {"id": "cn","text": "Container"},' + "\n";
    scriptCode += '            {"id": "tr","text": "Transaction"},' + "\n";
    scriptCode += '            {"id": "po","text": "Purchase Order"},' + "\n";
    scriptCode += '            {"id": "inv","text": "Invoice"},' + "\n";
    scriptCode += '            {"id": "other","text": "Other"}' + "\n";
    scriptCode += '        ],' + "\n";
    scriptCode += '        default: "other",' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(references,component){ //Callback' + "\n";
    scriptCode += '        references.add("ccn","1234ABCD123456789");' + "\n";
    scriptCode += '        references.add("cn","ABCD123456");' + "\n";
    scriptCode += '        references.add("cn","ABCD123457");' + "\n";
    scriptCode += '        references.add("tr","12345123456789");' + "\n";
    scriptCode += '        references.add("po","ABCD");' + "\n";
    scriptCode += '        references.add("inv","INV-1234");' + "\n";
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