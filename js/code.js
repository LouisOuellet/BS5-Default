$(document).ready(function(){

    // Sample

    let sample = '';
    sample += '// Placeholder JavaScript code' + "\n";
    sample += 'function doSomething() {' + "\n";
    sample += '    // TODO: Implement functionality' + "\n";
    sample += '    console.log("Placeholder code");' + "\n";
    sample += '}' + "\n";
    sample += '' + "\n";
    sample += '// Sample usage' + "\n";
    sample += 'doSomething();';
    
    const sampleObject = new Code(
        '#example',
        {
            class: {
                object: "w-100",
            },
            language: 'javascript',
            title: "Example",
            clipboard:true,
            fullscreen:true,
            code:sample,
        },
        function(element,code){}
    );

    // Code

    let scriptCode = '';
    scriptCode += 'const sampleObject = new Code(' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            object: "w-100", //Code Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        language: "javascript", //Set Language of Code Block' + "\n";
    scriptCode += '        title: "Example", //Set Title of Code Block' + "\n";
    scriptCode += '        code:sample, //String Containing the code to display' + "\n";
    scriptCode += '        clipboard:true, //Enable/Disable the clipboard' + "\n";
    scriptCode += '        fullscreen:true, //Enable/Disable the fullscreen' + "\n";
    scriptCode += '        highlight:true, //Enable/Disable the highlighting' + "\n";
    scriptCode += '        collapse:true, //Enable/Disable the collapsible' + "\n";
    scriptCode += '        collapsed:true, //Default state of the collapsible' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(element,code){}  //Callback' + "\n";
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