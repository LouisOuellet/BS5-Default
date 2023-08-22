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
                submit: function(form){ //Submit Callback
                    console.log(form.val()); // Returns Form Value
                },
                val: function(form){}, //Val Callback
                reset: function(form){ //Reset Callback
                    console.log(form.val()); // Returns Form Value
                },
                clear: function(form){ //Clear Callback
                    console.log(form.val()); // Returns Form Value
                },
            },
        },
        function(form,component){ //Callback
            form.add( //Add Inputs
                {
                    name: 'username', //Input Name
                    label: 'Username', //Input Label
                    icon: 'person', //Input Icon
                    type: 'text', //Input Type
                    value: 'john.doe@domain.com', //Input Value
                    options: null, //Input Options
                    class: { //Add Classes
                        input: null, //Input Element
                        label: 'text-bg-primary', //Label Element
                        field: 'mb-3', //Field Element
                    },
                },
                function(input,form){
                    console.log(input.val()); // Returns Input Value
                    input.reset(); // Resets Input Value
                    input.val('jane.doe@domain.com'); // Sets Input Value
                },
            );
            form.add( //Add Inputs
                {
                    name: 'role', //Input Name
                    label: 'Role', //Input Label
                    icon: 'shield', //Input Icon
                    type: 'select', //Input Type
                    value: 'administrator', //Input Value
                    options: [ //Input Options
                        {id:'administrator',text:'Administrator'},
                        {id:'moderator',text:'Moderator'},
                        {id:'user',text:'User'},
                    ],
                    class: { //Add Classes
                        input: null, //Input Element
                        label: 'text-bg-dark', //Label Element
                        field: 'mb-3', //Field Element
                    },
                },
                function(input,form){
                    console.log(input.val()); // Returns Input Value
                    input.reset(); // Resets Input Value
                    input.val('moderator'); // Sets Input Value
                },
            );
            form.add( //Add Inputs
                {
                    name: 'description', //Input Name
                    label: 'Description', //Input Label
                    icon: 'person-vcard', //Input Icon
                    type: 'textarea', //Input Type
                    value: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', //Input Value
                    options: null, //Input Options
                    class: { //Add Classes
                        input: null, //Input Element
                        label: 'text-bg-info', //Label Element
                        field: 'mb-3', //Field Element
                    },
                },
                function(input,form){
                    console.log(input.val()); // Returns Input Value
                    input.reset(); // Resets Input Value
                    input.val('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'); // Sets Input Value
                },
            );
            form.add( //Add Inputs
                {
                    name: 'bio', //Input Name
                    label: 'Bio', //Input Label
                    icon: 'code', //Input Icon
                    type: 'ide', //Input Type
                    value: "# Lorem Ipsum\n\nNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", //Input Value
                    options: null, //Input Options
                    class: { //Add Classes
                        input: null, //Input Element
                        label: 'text-bg-warning', //Label Element
                        field: 'mb-3', //Field Element
                    },
                },
                function(input,form){
                    console.log(input.val()); // Returns Input Value
                    input.reset(); // Resets Input Value
                    input.val('# Lorem Ipsum\n\nNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'); // Sets Input Value
                },
            );
            form.add( //Add Inputs
                {
                    name: 'brief', //Input Name
                    label: 'Brief', //Input Label
                    icon: 'person-lines-fill', //Input Icon
                    type: 'mce', //Input Type
                    value: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", //Input Value
                    options: null, //Input Options
                    class: { //Add Classes
                        input: null, //Input Element
                        label: 'text-bg-danger', //Label Element
                        field: 'mb-3', //Field Element
                    },
                },
                function(input,form){
                    console.log(input.val()); // Returns Input Value
                    input.reset(); // Resets Input Value
                    input.val('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'); // Sets Input Value
                },
            );
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
                        label: 'text-bg-success', //Label Element
                        field: 'mb-3', //Field Element
                    },
                },
                function(input,form){
                    // console.log(input.val()); // Returns Input Value
                    input.reset(); // Resets Input Value
                    input.val(3); // Sets Input Value
                },
            );
            form.add( //Add Inputs
                {
                    name: 'clear', //Input Name
                    label: 'Clear', //Input Label
                    icon: 'x-lg', //Input Icon
                    type: 'clear', //Input Type
                    value: null, //Input Value
                    options: null, //Input Options
                    class: { //Add Classes
                        input: null, //Input Element
                        label: 'w-100', //Label Element
                        field: 'mb-3', //Field Element
                    },
                },
                function(input,form){
                    console.log(input.val()); // Returns Input Value
                    input.reset(); // Resets Input Value
                    input.val('100'); // Sets Input Value
                },
            );
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
                        field: 'mb-3', //Field Element
                    },
                },
                function(input,form){
                    console.log(input.val()); // Returns Input Value
                    input.reset(); // Resets Input Value
                    input.val('10'); // Sets Input Value
                },
            );
            form.add( //Add Inputs
                {
                    name: 'submit', //Input Name
                    label: 'Submit', //Input Label
                    icon: 'save', //Input Icon
                    type: 'submit', //Input Type
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
                    input.val('1'); // Sets Input Value
                },
            );

            form.reset(); // Resets Form
            form.val({ // Sets Form Value
                username:'jack.doe@domain.com',
                role:'user',
                description:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
                bio:'# Lorem Ipsum\n\nNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
                rating:5,
                clear:'200',
                reset:'20',
                submit:'2',
            });
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
    scriptCode += '            field: \'mb-3\', //Field Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        callback:{ //Add Callbacks' + "\n";
    scriptCode += '            submit: function(form){ //Submit Callback' + "\n";
    scriptCode += '                console.log(form.val()); // Returns Form Value' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            val: function(form){}, //Val Callback' + "\n";
    scriptCode += '            reset: function(form){ //Reset Callback' + "\n";
    scriptCode += '                console.log(form.val()); // Returns Form Value' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            clear: function(form){ //Clear Callback' + "\n";
    scriptCode += '                console.log(form.val()); // Returns Form Value' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(form,component){ //Callback' + "\n";
    scriptCode += '        form.add( //Add Inputs' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                name: \'username\', //Input Name' + "\n";
    scriptCode += '                label: \'Username\', //Input Label' + "\n";
    scriptCode += '                icon: \'person\', //Input Icon' + "\n";
    scriptCode += '                type: \'text\', //Input Type' + "\n";
    scriptCode += '                value: \'john.doe@domain.com\', //Input Value' + "\n";
    scriptCode += '                options: null, //Input Options' + "\n";
    scriptCode += '                class: { //Add Classes' + "\n";
    scriptCode += '                    input: null, //Input Element' + "\n";
    scriptCode += '                    label: \'text-bg-primary\', //Label Element' + "\n";
    scriptCode += '                    field: null, //Field Element' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(input,form){' + "\n";
    scriptCode += '                console.log(input.val()); // Returns Input Value' + "\n";
    scriptCode += '                input.reset(); // Resets Input Value' + "\n";
    scriptCode += '                input.val(\'jane.doe@domain.com\'); // Sets Input Value' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        form.add( //Add Inputs' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                name: \'role\', //Input Name' + "\n";
    scriptCode += '                label: \'Role\', //Input Label' + "\n";
    scriptCode += '                icon: \'shield\', //Input Icon' + "\n";
    scriptCode += '                type: \'select\', //Input Type' + "\n";
    scriptCode += '                value: \'administrator\', //Input Value' + "\n";
    scriptCode += '                options: [ //Input Options' + "\n";
    scriptCode += '                    {id:\'administrator\',text:\'Administrator\'},' + "\n";
    scriptCode += '                    {id:\'moderator\',text:\'Moderator\'},' + "\n";
    scriptCode += '                    {id:\'user\',text:\'User\'},' + "\n";
    scriptCode += '                ],' + "\n";
    scriptCode += '                class: { //Add Classes' + "\n";
    scriptCode += '                    input: null, //Input Element' + "\n";
    scriptCode += '                    label: \'text-bg-dark\', //Label Element' + "\n";
    scriptCode += '                    field: null, //Field Element' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(input,form){' + "\n";
    scriptCode += '                console.log(input.val()); // Returns Input Value' + "\n";
    scriptCode += '                input.reset(); // Resets Input Value' + "\n";
    scriptCode += '                input.val(\'moderator\'); // Sets Input Value' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        form.add( //Add Inputs' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                name: \'description\', //Input Name' + "\n";
    scriptCode += '                label: \'Description\', //Input Label' + "\n";
    scriptCode += '                icon: \'person-vcard\', //Input Icon' + "\n";
    scriptCode += '                type: \'textarea\', //Input Type' + "\n";
    scriptCode += '                value: \'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\', //Input Value' + "\n";
    scriptCode += '                options: null, //Input Options' + "\n";
    scriptCode += '                class: { //Add Classes' + "\n";
    scriptCode += '                    input: null, //Input Element' + "\n";
    scriptCode += '                    label: \'text-bg-info\', //Label Element' + "\n";
    scriptCode += '                    field: null, //Field Element' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(input,form){' + "\n";
    scriptCode += '                console.log(input.val()); // Returns Input Value' + "\n";
    scriptCode += '                input.reset(); // Resets Input Value' + "\n";
    scriptCode += '                input.val(\'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\'); // Sets Input Value' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        form.add( //Add Inputs' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                name: \'bio\', //Input Name' + "\n";
    scriptCode += '                label: \'Bio\', //Input Label' + "\n";
    scriptCode += '                icon: \'code\', //Input Icon' + "\n";
    scriptCode += '                type: \'ide\', //Input Type' + "\n";
    scriptCode += '                value: \'# Lorem Ipsum\n\nNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\', //Input Value' + "\n";
    scriptCode += '                options: null, //Input Options' + "\n";
    scriptCode += '                class: { //Add Classes' + "\n";
    scriptCode += '                    input: null, //Input Element' + "\n";
    scriptCode += '                    label: \'text-bg-warning\', //Label Element' + "\n";
    scriptCode += '                    field: null, //Field Element' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(input,form){' + "\n";
    scriptCode += '                console.log(input.val()); // Returns Input Value' + "\n";
    scriptCode += '                input.reset(); // Resets Input Value' + "\n";
    scriptCode += '                input.val(\'# Lorem Ipsum\n\nNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\'); // Sets Input Value' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        form.add( //Add Inputs' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                name: \'brief\', //Input Name' + "\n";
    scriptCode += '                label: \'Brief\', //Input Label' + "\n";
    scriptCode += '                icon: \'person-lines-fill\', //Input Icon' + "\n";
    scriptCode += '                type: \'mce\', //Input Type' + "\n";
    scriptCode += '                value: \'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\', //Input Value' + "\n";
    scriptCode += '                options: null, //Input Options' + "\n";
    scriptCode += '                class: { //Add Classes' + "\n";
    scriptCode += '                    input: null, //Input Element' + "\n";
    scriptCode += '                    label: \'text-bg-danger\', //Label Element' + "\n";
    scriptCode += '                    field: null, //Field Element' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(input,form){' + "\n";
    scriptCode += '                console.log(input.val()); // Returns Input Value' + "\n";
    scriptCode += '                input.reset(); // Resets Input Value' + "\n";
    scriptCode += '                input.val(\'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\'); // Sets Input Value' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        form.add( //Add Inputs' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                name: \'clear\', //Input Name' + "\n";
    scriptCode += '                label: \'Clear\', //Input Label' + "\n";
    scriptCode += '                icon: \'x-lg\', //Input Icon' + "\n";
    scriptCode += '                type: \'clear\', //Input Type' + "\n";
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
    scriptCode += '                input.val(\'100\'); // Sets Input Value' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        );' + "\n";
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
    scriptCode += '        form.add( //Add Inputs' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                name: \'submit\', //Input Name' + "\n";
    scriptCode += '                label: \'Submit\', //Input Label' + "\n";
    scriptCode += '                icon: \'save\', //Input Icon' + "\n";
    scriptCode += '                type: \'submit\', //Input Type' + "\n";
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
    scriptCode += '                input.val(\'1\'); // Sets Input Value' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '        form.reset(); // Resets Form' + "\n";
    scriptCode += '        form.clear(); // Clears Form' + "\n";
    scriptCode += '        form.val({' + "\n";
    scriptCode += '            username:\'jack.doe@domain.com\',' + "\n";
    scriptCode += '            role:\'user\',' + "\n";
    scriptCode += '            description:\'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\',' + "\n";
    scriptCode += '            bio:\'# Lorem Ipsum\n\nNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\',' + "\n";
    scriptCode += '            clear:\'200\',' + "\n";
    scriptCode += '            reset:\'20\',' + "\n";
    scriptCode += '            submit:\'2\',' + "\n";
    scriptCode += '        });' + "\n";
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