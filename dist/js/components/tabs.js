$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.Component(
        "tabs", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                component: "w-100", //Container Element
                card: null, //Card Element
                header: null, //Header Element
                body: null, //Body Element
                footer: null, //Footer Element
                navbar: 'nav-pills', //Navbar Element
                content: null, //Content Element
            },
            icon: 'segmented-nav', //Add Icon
            title: 'Tabs', //Add Title
            footer: null, //Add Footer
            stretch: false, //Stretch to Container
            hideHeader: false, //Hide Header
            hideFooter: true, //Hide Footer
            close: true, //Close Button
            fullscreen: true, //Fullscreen Button
            collapse: true, //Collapse Button
            collapsed: false, //Collapsed by Default
            properties: { //Default Tab Options
                class: { //Add Classes
                    nav: null, //Nav Element
                    tab: null, //Tab Element
                },
                icon: null, //Add Icon
                label: null, //Add Label
                callback: null, //Callback Function
            },
        },
        function(tabs,component){ //Callback
            tabs.add( //Add tab to the navbar //Note: This function can be called multiple times to add multiple tabs. It can also called outside of the callback function.
                'tab1', //Name of the tab
                {
                    class: { //Add Classes
                        nav: null, //Nav Element
                        tab: null, //Tab Element
                    },
                    icon: null, //Add Icon
                    label: null, //Add Label
                    callback: null, //Callback Function
                }, //Options
                function(tab,nav){ //Callback Function
                    tab.text('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')
                },
            );
            tabs.add( //Add tab to the navbar //Note: This function can be called multiple times to add multiple tabs. It can also called outside of the callback function.
                'tab2', //Name of the tab
                {
                    class: { //Add Classes
                        nav: null, //Nav Element
                        tab: null, //Tab Element
                    },
                    icon: 'sign-turn-right', //Add Icon
                    label: 'Label', //Add Label
                    callback: null, //Callback Function
                }, //Options
                function(tab,nav){ //Callback Function
                    tab.text('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).')
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
    scriptCode += '    "tabs", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            component: "w-100", //Container Element' + "\n";
    scriptCode += '            card: null, //Card Element' + "\n";
    scriptCode += '            header: null, //Header Element' + "\n";
    scriptCode += '            body: null, //Body Element' + "\n";
    scriptCode += '            footer: null, //Footer Element' + "\n";
    scriptCode += '            navbar: \'nav-pills\', //Navbar Element' + "\n";
    scriptCode += '            content: null, //Content Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        icon: \'segmented-nav\', //Add Icon' + "\n";
    scriptCode += '        title: \'Tabs\', //Add Title' + "\n";
    scriptCode += '        footer: null, //Add Footer' + "\n";
    scriptCode += '        stretch: false, //Stretch to Container' + "\n";
    scriptCode += '        hideHeader: false, //Hide Header' + "\n";
    scriptCode += '        hideFooter: true, //Hide Footer' + "\n";
    scriptCode += '        close: true, //Close Button' + "\n";
    scriptCode += '        fullscreen: true, //Fullscreen Button' + "\n";
    scriptCode += '        collapse: true, //Collapse Button' + "\n";
    scriptCode += '        collapsed: false, //Collapsed by Default' + "\n";
    scriptCode += '        properties: { //Default Tab Options' + "\n";
    scriptCode += '            class: { //Add Classes' + "\n";
    scriptCode += '                nav: null, //Nav Element' + "\n";
    scriptCode += '                tab: null, //Tab Element' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            icon: null, //Add Icon' + "\n";
    scriptCode += '            label: null, //Add Label' + "\n";
    scriptCode += '            callback: null, //Callback Function' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(tabs,component){ //Callback' + "\n";
    scriptCode += '        tabs.add( //Add tab to the navbar //Note: This function can be called multiple times to add multiple tabs. It can also called outside of the callback function.' + "\n";
    scriptCode += '            \'tab1\', //Name of the tab' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                class: { //Add Classes' + "\n";
    scriptCode += '                    nav: null, //Nav Element' + "\n";
    scriptCode += '                    tab: null, //Tab Element' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '                icon: null, //Add Icon' + "\n";
    scriptCode += '                label: null, //Add Label' + "\n";
    scriptCode += '                callback: null, //Callback Function' + "\n";
    scriptCode += '            }, //Options' + "\n";
    scriptCode += '            function(tab,nav){ //Callback Function' + "\n";
    scriptCode += '                tab.text(\'Content\')' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        tabs.add( //Add tab to the navbar //Note: This function can be called multiple times to add multiple tabs. It can also called outside of the callback function.' + "\n";
    scriptCode += '            \'tab2\', //Name of the tab' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                class: { //Add Classes' + "\n";
    scriptCode += '                    nav: null, //Nav Element' + "\n";
    scriptCode += '                    tab: null, //Tab Element' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '                icon: null, //Add Icon' + "\n";
    scriptCode += '                label: null, //Add Label' + "\n";
    scriptCode += '                callback: null, //Callback Function' + "\n";
    scriptCode += '            }, //Options' + "\n";
    scriptCode += '            function(tab,nav){ //Callback Function' + "\n";
    scriptCode += '                tab.text(\'Content\')' + "\n";
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