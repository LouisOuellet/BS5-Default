$(document).ready(function(){

    // Sample
    
    const sampleObject = new Table(
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                object: null, //Object Element
            },
        },
        function(dropdown){ //Callback
        }, 
    );

    // Code

    let scriptCode = '';
    scriptCode += '' + "\n";
    
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
});