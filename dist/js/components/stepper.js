$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.Component(
        "stepper", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                stepper: null, //Stepper Element
                controls: 'card card-body my-2', //Stepper Controls Element
                steps: 'card card-body my-2', //Stepper Steps Element
                pagination: 'card card-body my-2', //Stepper Pagination Element
            },
            color: null, //Set Accent Color
            properties: { //Default Step Options
            },
        },
        function(stepper,component){ //Callback
            stepper.add( //Add step to the stepper //Note: This function can be called multiple times to add multiple steps. It can also called outside of the callback function.
                {}, //Options
                function(step){ //Callback Function
                    console.log(step);
                    step.content.html('<div class="p-5 bg-success rounded">Step 1</div>');
                },
            );
            stepper.add( //Add step to the stepper //Note: This function can be called multiple times to add multiple steps. It can also called outside of the callback function.
                {}, //Options
                function(step){  //Callback Function
                    console.log(step);
                    step.content.html('<div class="p-5 bg-warning rounded">Step 2</div>');
                },
            );
            stepper.add( //Add step to the stepper //Note: This function can be called multiple times to add multiple steps. It can also called outside of the callback function.
                {}, //Options
                function(step){  //Callback Function
                    console.log(step);
                    step.content.html('<div class="p-5 bg-danger rounded">Step 3</div>');
                },
            );
        },
    );

    // Javascript Code
    let scriptCode = '';
    scriptCode += '// Builder' + "\n";
    scriptCode += 'const sampleBuilder = new Builder();' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Component' + "\n";
    scriptCode += 'const sampleComponent = sampleBuilder.Component(' + "\n";
    scriptCode += '    "stepper", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            stepper: null, //Stepper Element' + "\n";
    scriptCode += '            controls: \'card card-body my-2\', //Stepper Controls Element' + "\n";
    scriptCode += '            steps: \'card card-body my-2\', //Stepper Steps Element' + "\n";
    scriptCode += '            pagination: \'card card-body my-2\', //Stepper Pagination Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        color: null, //Set Accent Color' + "\n";
    scriptCode += '        properties: { //Default Step Options' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(stepper,component){ //Callback' + "\n";
    scriptCode += '        stepper.add( //Add step to the stepper //Note: This function can be called multiple times to add multiple steps. It can also called outside of the callback function.' + "\n";
    scriptCode += '            {}, //Options' + "\n";
    scriptCode += '            function(step){ //Callback Function' + "\n";
    scriptCode += '                console.log(step);' + "\n";
    scriptCode += '                step.content.html(\'<div class="p-5 bg-success rounded">Step 1</div>\');' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        stepper.add( //Add step to the stepper //Note: This function can be called multiple times to add multiple steps. It can also called outside of the callback function.' + "\n";
    scriptCode += '            {}, //Options' + "\n";
    scriptCode += '            function(step){  //Callback Function' + "\n";
    scriptCode += '                console.log(step);' + "\n";
    scriptCode += '                step.content.html(\'<div class="p-5 bg-warning rounded">Step 2</div>\');' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        stepper.add( //Add step to the stepper //Note: This function can be called multiple times to add multiple steps. It can also called outside of the callback function.' + "\n";
    scriptCode += '            {}, //Options' + "\n";
    scriptCode += '            function(step){  //Callback Function' + "\n";
    scriptCode += '                console.log(step);' + "\n";
    scriptCode += '                step.content.html(\'<div class="p-5 bg-danger rounded">Step 3</div>\');' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        );' + "\n";
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