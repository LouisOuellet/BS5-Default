$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Components
    // Badge 1
    const sampleComponentBadge1 = sampleBuilder.Component(
        "badge", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                component: null, //Component Element
                badge: "my-2", //Info Element
                icon: null, //Icon Frame Element
                content: null, //Content Element
            },
            icon:"currency-dollar", //Set Icon
            color:"success", //Set Color
        },
        function(badge,component){ //Callback

            // Set Content
            var header = $(document.createElement("h5")).addClass("m-0").html("Objective").appendTo(component.content);
            var paragraph = $(document.createElement("p")).addClass("m-0").html("+ 1,352 $").appendTo(component.content);
        },
    );
    // Badge 2
    const sampleComponentBadge2 = sampleBuilder.Component(
        "badge", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                component: null, //Component Element
                badge: "my-2 text-bg-success", //Info Element
                icon: null, //Icon Frame Element
                content: null, //Content Element
            },
            icon:"currency-dollar", //Set Icon
            color: null, //Set Color
        },
        function(badge,component){ //Callback

            // Set Content
            var header = $(document.createElement("h5")).addClass("").html("Objective").appendTo(component.content);
            var value = $(document.createElement("p")).addClass("fw-bold").html("+ 1,352 $").appendTo(component.content);
            var progress = sampleBuilder.Component(
                "progress", //Component Name
                component.content, //Selector or JQuery Object to appendTo
                {
                    class: { //Classes
                        component: "w-100", //Progress Element
                        label: "d-none", //Label Element
                    },
                    size: "2px", //Set Size
                    color: "secondary", //Set Color
                    striped: true, //Set Striped
                    animated: true, //Set Animated
                    scale: 100, //Set Scale
                },
                function(progress,component){ //Callback
                    progress.set(50); //Set Progress //Note: This function can be called multiple times. It can also called outside of the callback function.
                },
            );
            var paragraph = $(document.createElement("p")).addClass("m-0").html("70% Increase in 30 Days").appendTo(component.content);
        },
    );
    // Info
    const sampleComponentInfo = sampleBuilder.Component(
        "info", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                component: null, //Component Element
                info: "my-2", //Info Element
                icon: null, //Icon Frame Element
                content: null, //Content Element
                link: null, //Link Element
            },
            icon:"currency-dollar", //Set Icon
            color:"success", //Set Color
            link: "?p=box", //Set Link
        },
        function(info,component){ //Callback

            // Set Content
            var header = $(document.createElement("h1")).addClass("fw-bold").html("+ 1,352 $").appendTo(component.content);
            var paragraph = $(document.createElement("p")).addClass().html("Objective").appendTo(component.content);
        },
    );

    // Javascript Code
    let scriptCode = '';
    scriptCode += '// Builder' + "\n";
    scriptCode += 'const sampleBuilder = new Builder();' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Components' + "\n";
    scriptCode += '// Badge 1' + "\n";
    scriptCode += 'const sampleComponentBadge1 = sampleBuilder.Component(' + "\n";
    scriptCode += '    "badge", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            component: null, //Component Element' + "\n";
    scriptCode += '            badge: "my-2", //Info Element' + "\n";
    scriptCode += '            icon: null, //Icon Frame Element' + "\n";
    scriptCode += '            content: null, //Content Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        icon:"currency-dollar", //Set Icon' + "\n";
    scriptCode += '        color:"success", //Set Color' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(badge,component){ //Callback' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '        // Set Content' + "\n";
    scriptCode += '        var header = $(document.createElement("h5")).addClass("m-0").html("Objective").appendTo(component.content);' + "\n";
    scriptCode += '        var paragraph = $(document.createElement("p")).addClass("m-0").html("+ 1,352 $").appendTo(component.content);' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += ');' + "\n";
    scriptCode += '// Badge 2' + "\n";
    scriptCode += 'const sampleComponentBadge2 = sampleBuilder.Component(' + "\n";
    scriptCode += '    "badge", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            component: null, //Component Element' + "\n";
    scriptCode += '            badge: "my-2 text-bg-success", //Info Element' + "\n";
    scriptCode += '            icon: null, //Icon Frame Element' + "\n";
    scriptCode += '            content: null, //Content Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        icon:"currency-dollar", //Set Icon' + "\n";
    scriptCode += '        color: null, //Set Color' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(badge,component){ //Callback' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '        // Set Content' + "\n";
    scriptCode += '        var header = $(document.createElement("h5")).addClass("").html("Objective").appendTo(component.content);' + "\n";
    scriptCode += '        var value = $(document.createElement("p")).addClass("fw-bold").html("+ 1,352 $").appendTo(component.content);' + "\n";
    scriptCode += '        var progress = sampleBuilder.Component(' + "\n";
    scriptCode += '            "progress", //Component Name' + "\n";
    scriptCode += '            component.content, //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                class: { //Classes' + "\n";
    scriptCode += '                    component: "w-100", //Progress Element' + "\n";
    scriptCode += '                    label: "d-none", //Label Element' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '                size: "2px", //Set Size' + "\n";
    scriptCode += '                color: "secondary", //Set Color' + "\n";
    scriptCode += '                striped: true, //Set Striped' + "\n";
    scriptCode += '                animated: true, //Set Animated' + "\n";
    scriptCode += '                scale: 100, //Set Scale' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(progress,component){ //Callback' + "\n";
    scriptCode += '                progress.set(50); //Set Progress //Note: This function can be called multiple times. It can also called outside of the callback function.' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        var paragraph = $(document.createElement("p")).addClass("m-0").html("70% Increase in 30 Days").appendTo(component.content);' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += ');' + "\n";
    scriptCode += '// Info' + "\n";
    scriptCode += 'const sampleComponentInfo = sampleBuilder.Component(' + "\n";
    scriptCode += '    "info", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            component: null, //Component Element' + "\n";
    scriptCode += '            info: "my-2", //Info Element' + "\n";
    scriptCode += '            icon: null, //Icon Frame Element' + "\n";
    scriptCode += '            content: null, //Content Element' + "\n";
    scriptCode += '            link: null, //Link Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        icon:"currency-dollar", //Set Icon' + "\n";
    scriptCode += '        color:"success", //Set Color' + "\n";
    scriptCode += '        link: "?p=box", //Set Link' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(info,component){ //Callback' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '        // Set Content' + "\n";
    scriptCode += '        var header = $(document.createElement("h1")).addClass("fw-bold").html("+ 1,352 $").appendTo(component.content);' + "\n";
    scriptCode += '        var paragraph = $(document.createElement("p")).addClass().html("Objective").appendTo(component.content);' + "\n";
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
        let pretty = prettier.format(sampleComponentBadge1.outerHTML() + sampleComponentBadge2.outerHTML() + sampleComponentInfo.outerHTML(), { parser: "html", tabWidth: 4, useTabs: true, plugins: prettierPlugins });
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