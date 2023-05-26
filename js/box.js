$(document).ready(function(){

    // Sample

    const sampleObjectBox1 = new Box(
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                box: "my-2", //Box Element
                iconFrame: null, //Icon Frame Element
                content: null, //Content Element
                link: null, //Link Element
            },
            icon:"currency-dollar", //Set Icon
            color:"success", //Set Color
            type: "info", //Set Type
            link: null, //Set Link
        },
        function(box){ //Callback

            // Set Content
            var header = $(document.createElement("h5")).addClass("m-0").html("Objective").appendTo(box.content);
            var paragraph = $(document.createElement("p")).addClass("m-0").html("+ 1,352 $").appendTo(box.content);
        }
    );

    const sampleObjectBox2 = new Box(
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                box: "my-2 text-bg-success", //Box Element
                iconFrame: null, //Icon Frame Element
                content: null, //Content Element
                link: null, //Link Element
            },
            icon:"currency-dollar", //Set Icon
            color: null, //Set Color
            type: "info", //Set Type
            link: null, //Set Link
        },
        function(box){ //Callback

            // Set Content
            var header = $(document.createElement("h5")).addClass("").html("Objective").appendTo(box.content);
            var value = $(document.createElement("p")).addClass("fw-bold").html("+ 1,352 $").appendTo(box.content);
            var progress = new Progress(
                box.content,
                {
                    class: {
                        progress: "w-100",
                        label: "d-none",
                    },
                    size: "2px",
                    color: "secondary",
                    striped: true,
                    animated: true,
                    scale: 100,
                },
                function(progress){
                    progress.set(50);
                },
            );
            var paragraph = $(document.createElement("p")).addClass("m-0").html("70% Increase in 30 Days").appendTo(box.content);
        }
    );

    const sampleObjectBox3 = new Box(
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                box: "my-2", //Box Element
                iconFrame: null, //Icon Frame Element
                content: null, //Content Element
                link: null, //Link Element
            },
            icon:"currency-dollar", //Set Icon
            color:"success", //Set Color
            type: "small", //Set Type
            link: "?p=box", //Set Link
        },
        function(box){ //Callback

            // Set Content
            var header = $(document.createElement("h1")).addClass("fw-bold").html("+ 1,352 $").appendTo(box.content);
            var paragraph = $(document.createElement("p")).addClass().html("Objective").appendTo(box.content);
        }
    );

    // Code

    let scriptCode = '';
    scriptCode += '// Sample 1' + "\n";
    scriptCode += 'const sampleObjectBox1 = new Box(' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            box: "my-2", //Box Element' + "\n";
    scriptCode += '            iconFrame: null, //Icon Frame Element' + "\n";
    scriptCode += '            content: null, //Content Element' + "\n";
    scriptCode += '            link: null, //Link Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        icon:"currency-dollar", //Set Icon' + "\n";
    scriptCode += '        color:"success", //Set Color' + "\n";
    scriptCode += '        type: "info", //Set Type' + "\n";
    scriptCode += '        link: null, //Set Link' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(box){ //Callback' + "\n";
    scriptCode += '        ' + "\n";
    scriptCode += '        // Set Content' + "\n";
    scriptCode += '        var header = $(document.createElement("h5")).addClass("m-0").html("Objective").appendTo(box.content);' + "\n";
    scriptCode += '        var paragraph = $(document.createElement("p")).addClass("m-0").html("+ 1,352 $").appendTo(box.content);' + "\n";
    scriptCode += '    }' + "\n";
    scriptCode += ');' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Sample 2' + "\n";
    scriptCode += 'const sampleObjectBox2 = new Box(' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            box: "my-2 text-bg-success", //Box Element' + "\n";
    scriptCode += '            iconFrame: null, //Icon Frame Element' + "\n";
    scriptCode += '            content: null, //Content Element' + "\n";
    scriptCode += '            link: null, //Link Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        icon:"currency-dollar", //Set Icon' + "\n";
    scriptCode += '        color: null, //Set Color' + "\n";
    scriptCode += '        type: "info", //Set Type' + "\n";
    scriptCode += '        link: null, //Set Link' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(box){ //Callback' + "\n";
    scriptCode += '        ' + "\n";
    scriptCode += '        // Set Content' + "\n";
    scriptCode += '        var header = $(document.createElement("h5")).addClass("").html("Objective").appendTo(box.content);' + "\n";
    scriptCode += '        var value = $(document.createElement("p")).addClass("fw-bold").html("+ 1,352 $").appendTo(box.content);' + "\n";
    scriptCode += '        var progress = new Progress(' + "\n";
    scriptCode += '            box.content,' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                class: {' + "\n";
    scriptCode += '                    progress: "w-100",' + "\n";
    scriptCode += '                    label: "d-none",' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '                size: "2px",' + "\n";
    scriptCode += '                color: "secondary",' + "\n";
    scriptCode += '                striped: true,' + "\n";
    scriptCode += '                animated: true,' + "\n";
    scriptCode += '                scale: 100,' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(progress){' + "\n";
    scriptCode += '                progress.set(50);' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        var paragraph = $(document.createElement("p")).addClass("m-0").html("70% Increase in 30 Days").appendTo(box.content);' + "\n";
    scriptCode += '    }' + "\n";
    scriptCode += ');' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Sample 3' + "\n";
    scriptCode += 'const sampleObjectBox3 = new Box(' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            box: "my-2", //Box Element' + "\n";
    scriptCode += '            iconFrame: null, //Icon Frame Element' + "\n";
    scriptCode += '            content: null, //Content Element' + "\n";
    scriptCode += '            link: null, //Link Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        icon:"currency-dollar", //Set Icon' + "\n";
    scriptCode += '        color:"success", //Set Color' + "\n";
    scriptCode += '        type: "small", //Set Type' + "\n";
    scriptCode += '        link: "?p=box", //Set Link' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(box){ //Callback' + "\n";
    scriptCode += '        ' + "\n";
    scriptCode += '        // Set Content' + "\n";
    scriptCode += '        var header = $(document.createElement("h1")).addClass("fw-bold").html("+ 1,352 $").appendTo(box.content);' + "\n";
    scriptCode += '        var paragraph = $(document.createElement("p")).addClass().html("Objective").appendTo(box.content);' + "\n";
    scriptCode += '    }' + "\n";
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