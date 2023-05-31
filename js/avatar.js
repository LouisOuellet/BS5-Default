$(document).ready(function(){

    // Sample
    
    const sampleObject = new Avatar(
        "louis@laswitchtech.com", //Email
        {
            class: { //Add Classes
                object: "rounded-circle", //Object Element
            },
            extension: false, //Set Extension
            size: "512px", //Set Size
            default: "mp", //Set Default if not found
            force: false, //Set Force Default
            rating: false, //Set Rating
        },
        function(avatar){}, //Callback
    );
    // Append to #example
    sampleObject.appendTo("#example");

    // Code

    let scriptCode = '';
    scriptCode += '' + "\n";
    scriptCode += 'const sampleObject = new Avatar(' + "\n";
    scriptCode += '    "louis@laswitchtech.com", //Email' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            object: "rounded-circle", //Object Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        extension: false, //Set Extension' + "\n";
    scriptCode += '        size: "512px", //Set Size' + "\n";
    scriptCode += '        default: "mp", //Set Default if not found' + "\n";
    scriptCode += '        force: false, //Set Force Default' + "\n";
    scriptCode += '        rating: false, //Set Rating' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(avatar){}, //Callback' + "\n";
    scriptCode += ');' + "\n";
    scriptCode += '// Append to #example' + "\n";
    scriptCode += 'sampleObject.appendTo("#example");';
    
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