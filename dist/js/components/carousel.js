$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.Component(
        "carousel", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            fade: false, //Fade Effect
            touch: true, //Touch Support
            autoplay: 'carousel', //Autoplay //Note: This can be set to 'carousel', true or null
            indicators: true, //Indicators
            controls: true, //Controls
            properties: { //Default Slide Options
                class: { //Add Classes
                    slide: null, //Slide Element
                    image: null, //Slide Image Element
                    caption: null, //Slide Caption Element
                },
                interval: null, //Slide Interval
                caption: null, //Slide Caption
                source: null, //Slide Image Source
                alt: null, //Slide Image Alt
            },
        },
        function(carousel,component){ //Callback
            carousel.add( //Add slide to the carousel //Note: This function can be called multiple times to add multiple slides. It can also called outside of the callback function.
                { //Options
                    class: { //Add Classes
                        slide: null, //Slide Element
                        image: null, //Slide Image Element
                        caption: null, //Slide Caption Element
                    },
                    interval: null, //Slide Interval
                    caption: '<h3>Mountain</h3>', //Slide Caption
                    source: 'https://picsum.photos/id/235/1280/720/', //Slide Image Source
                    alt: 'picsum', //Slide Image Alt
                },
                function(slide){}, //Callback Function
            );
            carousel.add( //Add slide to the carousel //Note: This function can be called multiple times to add multiple slides. It can also called outside of the callback function.
                { //Options
                    class: { //Add Classes
                        slide: null, //Slide Element
                        image: null, //Slide Image Element
                        caption: null, //Slide Caption Element
                    },
                    interval: null, //Slide Interval
                    caption: '<h3>Houses</h3>', //Slide Caption
                    source: 'https://picsum.photos/id/236/1280/720/', //Slide Image Source
                    alt: 'picsum', //Slide Image Alt
                },
                function(slide){}, //Callback Function
            );
            carousel.add( //Add slide to the carousel //Note: This function can be called multiple times to add multiple slides. It can also called outside of the callback function.
                { //Options
                    class: { //Add Classes
                        slide: null, //Slide Element
                        image: null, //Slide Image Element
                        caption: null, //Slide Caption Element
                    },
                    interval: null, //Slide Interval
                    caption: '<h3>Dog</h3>', //Slide Caption
                    source: 'https://picsum.photos/id/237/1280/720/', //Slide Image Source
                    alt: 'picsum', //Slide Image Alt
                },
                function(slide){}, //Callback Function
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
    scriptCode += '    "carousel", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        fade: false, //Fade Effect' + "\n";
    scriptCode += '        touch: true, //Touch Support' + "\n";
    scriptCode += '        autoplay: \'carousel\', //Autoplay //Note: This can be set to \'carousel\', true or null' + "\n";
    scriptCode += '        indicators: true, //Indicators' + "\n";
    scriptCode += '        controls: true, //Controls' + "\n";
    scriptCode += '        properties: { //Default Slide Options' + "\n";
    scriptCode += '            class: { //Add Classes' + "\n";
    scriptCode += '                slide: null, //Slide Element' + "\n";
    scriptCode += '                image: null, //Slide Image Element' + "\n";
    scriptCode += '                caption: null, //Slide Caption Element' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            interval: null, //Slide Interval' + "\n";
    scriptCode += '            caption: null, //Slide Caption' + "\n";
    scriptCode += '            source: null, //Slide Image Source' + "\n";
    scriptCode += '            alt: null, //Slide Image Alt' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(carousel,component){ //Callback' + "\n";
    scriptCode += '        carousel.add( //Add slide to the carousel //Note: This function can be called multiple times to add multiple slides. It can also called outside of the callback function.' + "\n";
    scriptCode += '            { //Options' + "\n";
    scriptCode += '                class: { //Add Classes' + "\n";
    scriptCode += '                    slide: null, //Slide Element' + "\n";
    scriptCode += '                    image: null, //Slide Image Element' + "\n";
    scriptCode += '                    caption: null, //Slide Caption Element' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '                interval: null, //Slide Interval' + "\n";
    scriptCode += '                caption: \'<h3>Mountain</h3>\', //Slide Caption' + "\n";
    scriptCode += '                source: \'https://picsum.photos/id/235/1280/720/\', //Slide Image Source' + "\n";
    scriptCode += '                alt: \'picsum\', //Slide Image Alt' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(slide){}, //Callback Function' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        carousel.add( //Add slide to the carousel //Note: This function can be called multiple times to add multiple slides. It can also called outside of the callback function.' + "\n";
    scriptCode += '            { //Options' + "\n";
    scriptCode += '                class: { //Add Classes' + "\n";
    scriptCode += '                    slide: null, //Slide Element' + "\n";
    scriptCode += '                    image: null, //Slide Image Element' + "\n";
    scriptCode += '                    caption: null, //Slide Caption Element' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '                interval: null, //Slide Interval' + "\n";
    scriptCode += '                caption: \'<h3>Houses</h3>\', //Slide Caption' + "\n";
    scriptCode += '                source: \'https://picsum.photos/id/236/1280/720/\', //Slide Image Source' + "\n";
    scriptCode += '                alt: \'picsum\', //Slide Image Alt' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(slide){}, //Callback Function' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        carousel.add( //Add slide to the carousel //Note: This function can be called multiple times to add multiple slides. It can also called outside of the callback function.' + "\n";
    scriptCode += '            { //Options' + "\n";
    scriptCode += '                class: { //Add Classes' + "\n";
    scriptCode += '                    slide: null, //Slide Element' + "\n";
    scriptCode += '                    image: null, //Slide Image Element' + "\n";
    scriptCode += '                    caption: null, //Slide Caption Element' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '                interval: null, //Slide Interval' + "\n";
    scriptCode += '                caption: \'<h3>Dog</h3>\', //Slide Caption' + "\n";
    scriptCode += '                source: \'https://picsum.photos/id/237/1280/720/\', //Slide Image Source' + "\n";
    scriptCode += '                alt: \'picsum\', //Slide Image Alt' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(slide){}, //Callback Function' + "\n";
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