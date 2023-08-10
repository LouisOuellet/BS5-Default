$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.Component(
        "form", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class:{ //Add Classes
                component: null, //Component Element
                form: null, //Form Element
                input: null, //Input Element
                label: null, //Label Element
                field: null, //Field Element
            },
            callback:{ //Add Callbacks
                submit: function(form){}, //Submit Callback
                val: function(form){}, //Val Callback
                reset: function(form){ //Reset Callback
                    console.log(form.val()); // Returns Form Value
                },
                clear: function(form){}, //Clear Callback
            },
        },
        function(form,component){ //Callback
            form.add( //Add Inputs
                {
                    name: 'reset', //Input Name
                    label: 'Reset', //Input Label
                    icon: 'arrow-clockwise', //Input Icon
                    type: 'reset', //Input Type
                    value: null, //Input Value
                    options: null, //Input Options
                    class: { //Add Classes
                        input: null, //Input Element
                        label: 'w-100', //Label Element
                        field: null, //Field Element
                    },
                },
                function(input,form){
                    console.log(input.val()); // Returns Input Value
                    input.reset(); // Resets Input Value
                    input.val('10'); // Sets Input Value
                },
            );

            form.reset(); // Resets Form
            form.val({reset:'20'}); // Sets Form Value
            console.log(form.val()); // Returns Form Value
            form.submit(); // Submits Form
        },
    );

    // Javascript Code
    let scriptCode = '';
    scriptCode += '// Builder' + "\n";
    scriptCode += 'const sampleBuilder = new Builder();' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Component' + "\n";
    scriptCode += 'const sampleComponent = sampleBuilder.Component(' + "\n";
    scriptCode += '    "form", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class:{ //Add Classes' + "\n";
    scriptCode += '            component: null, //Component Element' + "\n";
    scriptCode += '            form: null, //Form Element' + "\n";
    scriptCode += '            input: null, //Input Element' + "\n";
    scriptCode += '            label: null, //Label Element' + "\n";
    scriptCode += '            field: null, //Field Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        callback:{ //Add Callbacks' + "\n";
    scriptCode += '            submit: function(form){}, //Submit Callback' + "\n";
    scriptCode += '            val: function(form){}, //Val Callback' + "\n";
    scriptCode += '            reset: function(form){ //Reset Callback' + "\n";
    scriptCode += '                console.log(form.val()); // Returns Form Value' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(form,component){ //Callback' + "\n";
    scriptCode += '        form.add( //Add Inputs' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                name: \'reset\', //Input Name' + "\n";
    scriptCode += '                label: \'Reset\', //Input Label' + "\n";
    scriptCode += '                icon: \'arrow-clockwise\', //Input Icon' + "\n";
    scriptCode += '                type: \'reset\', //Input Type' + "\n";
    scriptCode += '                value: null, //Input Value' + "\n";
    scriptCode += '                options: null, //Input Options' + "\n";
    scriptCode += '                class: { //Add Classes' + "\n";
    scriptCode += '                    input: null, //Input Element' + "\n";
    scriptCode += '                    label: \'w-100\', //Label Element' + "\n";
    scriptCode += '                    field: null, //Field Element' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(input,form){' + "\n";
    scriptCode += '                console.log(input.val()); // Returns Input Value' + "\n";
    scriptCode += '                input.reset(); // Resets Input Value' + "\n";
    scriptCode += '                input.val(\'10\'); // Sets Input Value' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '        form.reset(); // Resets Form' + "\n";
    scriptCode += '        form.clear(); // Clears Form' + "\n";
    scriptCode += '        form.val({reset:\'20\'}); // Sets Form Value' + "\n";
    scriptCode += '        console.log(form.val()); // Returns Form Value' + "\n";
    scriptCode += '        form.submit(); // Submits Form' + "\n";
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
    let pretty = prettier.format(sampleComponent.outerHTML(), { parser: "html", tabWidth: 4, useTabs: true, plugins: prettierPlugins });
    const html = sampleBuilder.Component(
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
});