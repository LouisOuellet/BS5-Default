$(document).ready(function(){

    // Sample
    let offcanvasCode = null;
    const sampleObject = new Offcanvas(
        '#example', //Selector or JQuery Object to add click event to
        {
            class: { //Add Classes
                object: null, //Offcanvas Object
            },
            icon: 'layout-sidebar-inset-reverse', //Add Icon
            title: 'Offcanvas', //Add Title
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', //Add Body
            dismissible: true, //Set Dismissible
            backdrop: true, //Set Backdrop
            scroll: false, //Set Scroll
            color: null, //Add Color
            side: null, //Set Side
        },
        function(offcanvas, element){ // Callback Function
            offcanvasCode = element;
        },
    );

    // Code
    let scriptCode = "";
    scriptCode += "const sampleObject = new Offcanvas(" + "\n";
    scriptCode += "    '#example', //Selector or JQuery Object to add click event to" + "\n";
    scriptCode += "    {" + "\n";
    scriptCode += "        class: { //Add Classes" + "\n";
    scriptCode += "            object: null, //Offcanvas Object" + "\n";
    scriptCode += "        }," + "\n";
    scriptCode += "        icon: 'layout-sidebar-inset-reverse', //Add Icon" + "\n";
    scriptCode += "        title: 'Offcanvas', //Add Title" + "\n";
    scriptCode += "        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', //Add Body" + "\n";
    scriptCode += "        dismissible: true, //Set Dismissible" + "\n";
    scriptCode += "        backdrop: true, //Set Backdrop" + "\n";
    scriptCode += "        scroll: false, //Set Scroll" + "\n";
    scriptCode += "        color: null, //Add Color" + "\n";
    scriptCode += "        side: null, //Set Side" + "\n";
    scriptCode += "    }," + "\n";
    scriptCode += "    function(offcanvas, element){}, // Callback Function" + "\n";
    scriptCode += ");" + "\n";
    
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

    let pretty = prettier.format(offcanvasCode.prop('outerHTML'), { parser: "html", tabWidth: 4, useTabs: true, plugins: prettierPlugins });
    
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