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
                reset: function(form){}, //Reset Callback
                clear: function(form){}, //Clear Callback
            },
        },
        function(form,component){ //Callback
            form.add( //Add Inputs
                {
                    name: 'rating', //Input Name
                    label: 'Rating', //Input Label
                    icon: 'star-half', //Input Icon
                    type: 'range', //Input Type
                    value: 1, //Input Value
                    min: 1, //Input Minimum Value
                    max: 5, //Input Maximum Value
                    options: { //Range Options Labels
                        1:'Very Bad',
                        2:'Bad',
                        3:'OK',
                        4:'Good',
                        5:'Very Good',
                    },
                    class: { //Add Classes
                        input: null, //Input Element
                        label: 'text-bg-primary', //Label Element
                        field: null, //Field Element
                    },
                },
                function(input,form){
                    // console.log(input.val()); // Returns Input Value
                    input.reset(); // Resets Input Value
                    input.val(3); // Sets Input Value
                },
            );

            form.reset(); // Resets Form
            form.val({rating:5}); // Sets Form Value
            // console.log(form.val()); // Returns Form Value
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
    scriptCode += '            reset: function(form){}, //Reset Callback' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(form,component){ //Callback' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '        form.reset(); // Resets Form' + "\n";
    scriptCode += '        form.val({username:\'jack.doe@domain.com\'}); // Sets Form Value' + "\n";
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