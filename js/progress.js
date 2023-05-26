$(document).ready(function(){

    // Sample
    const sampleObject = new Progress(
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Classes
                progress: "w-100", //Progress Element
                bar: null, //Bar Element
                label: null, //Label Element
            },
            size: null, //Set Size
            color: null, //Set Color
            striped: true, //Set Striped
            animated: true, //Set Animated
            scale: 100, //Set Scale
            label: "{percent}", //Set Label //Note: Some placeholders are available. {progress} {scale} {percent}
        },
        function(progress){ //Callback
            progress.set(50); //Set Progress //Note: This function can be called multiple times. It can also called outside of the callback function.
        }, 
    );

    // Code

    let scriptCode = '';
    scriptCode += 'const sampleObject = new Progress(' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Classes' + "\n";
    scriptCode += '            progress: "w-100", //Progress Element' + "\n";
    scriptCode += '            bar: null, //Bar Element' + "\n";
    scriptCode += '            label: null, //Label Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        size: null, //Set Size' + "\n";
    scriptCode += '        color: null, //Set Color' + "\n";
    scriptCode += '        striped: true, //Set Striped' + "\n";
    scriptCode += '        animated: true, //Set Animated' + "\n";
    scriptCode += '        scale: 100, //Set Scale' + "\n";
    scriptCode += '        label: "{percent}", //Set Label //Note: Some placeholders are available. {progress} {scale} {percent}' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(progress){ //Callback' + "\n";
    scriptCode += '        progress.set(50); //Set Progress //Note: This function can be called multiple times. It can also called outside of the callback function.' + "\n";
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
});