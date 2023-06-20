$(document).ready(function(){

    // Sample
    
    const sampleObject = new Card(
        "#example",
        {
            class: {
                container: "w-100",
            },
            icon: "card-text",
            title: "What is Lorem Ipsum?",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            footer: null,
            strech: false,
            hideHeader: false,
            hideFooter: true,
            close:true,
            fullscreen: true,
            collapse: true,
            collapsed: false,
        },
        function(card){},
    );

    // Code

    let scriptCode = '';
    scriptCode += 'const sampleObject = new Card(' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            container: "w-100", //Container Element' + "\n";
    scriptCode += '            card: null, //Card Element' + "\n";
    scriptCode += '            header: null, //Card Header Element' + "\n";
    scriptCode += '            body: null, //Card Body Element' + "\n";
    scriptCode += '            footer: null, //Card Footer Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        icon: "card-text", //Set Icon' + "\n";
    scriptCode += '        title: "What is Lorem Ipsum?", //Set Title' + "\n";
    scriptCode += '        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", //Set Body' + "\n";
    scriptCode += '        footer: null, //Set Footer' + "\n";
    scriptCode += '        stretch: false, //Enable/Disable Stretch (Allows the card to fill the height available in it\'s parent element)' + "\n";
    scriptCode += '        hideHeader: false, //Show/Hide Header' + "\n";
    scriptCode += '        hideFooter: true, //Show/Hide Footer' + "\n";
    scriptCode += '        close:true, //Enable/Disable Close' + "\n";
    scriptCode += '        fullscreen: true, //Enable/Disable FullScreen' + "\n";
    scriptCode += '        collapse: true, //Enable/Disable Collapsible' + "\n";
    scriptCode += '        collapsed: false, //Set default state of collapsible' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(card){}, //Callback' + "\n";
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