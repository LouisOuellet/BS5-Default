$(document).ready(function(){

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.component(
        "feed", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Add Classes
                feed: "card card-body", //Feed Element
                post: null, //Post Element
            },
            properties: { //Default for individual Post Values
                username: null, //Username
                content: null, //Content
                datetime: null, //Datetime
                class: { //Add Classes
                    post: null, //Post Element
                },
            },
            controls:{ //Controls
                like:{ //Like Control
                    icon:"hand-thumbs-up", //Icon
                    label:"Like", //Label
                    callback:function(control,post,feed){}, //Executed when the control is created
                },
                share:{ //Share Control
                    icon:"share", //Icon
                    label:"Share", //Label
                    callback:function(control,post,feed){}, //Executed when the control is created
                },
                note:{ //Note Control
                    icon:"sticky", //Icon
                    label:"Note", //Label
                    callback:function(control,post,feed){}, //Executed when the control is created
                },
                comment:{ //Comment Control
                    icon:"chat-text", //Icon
                    label:"Commments", //Label
                    callback:function(control,post,feed){}, //Executed when the control is created
                },
                edit:{ //Edit Control
                    icon:"pencil-square", //Icon
                    color:"warning", //Color
                    label:"Edit", //Label
                    callback:function(control,post,feed){}, //Executed when the control is created
                },
                delete:{ //Delete Control
                    icon:"trash", //Icon
                    color:"danger", //Color
                    label:"Delete", //Label
                    callback:function(control,post,feed){}, //Executed when the control is created
                },
            },
        },
        function(feed,component){ //Callback
            feed.add(
                {
                    class: { //Add Classes
                        post: null, //Post Element
                    },
                    datetime: null, //Datetime
                    username: "john.doe@domain.com", //Username
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", //Content
                },
                function(post,feed){}, //Callback
            );
            feed.add(
                {
                    class: { //Add Classes
                        post: null, //Post Element
                    },
                    datetime: null, //Datetime
                    username: "john.doe@domain.com", //Username
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", //Content
                },
                function(post,feed){}, //Callback
            );
            feed.add(
                {
                    class: { //Add Classes
                        post: null, //Post Element
                    },
                    datetime: null, //Datetime
                    username: "john.doe@domain.com", //Username
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", //Content
                },
                function(post,feed){}, //Callback
            );
        },
    );

    // Javascript Code
    let scriptCode = '';
    scriptCode += '// Builder' + "\n";
    scriptCode += 'const sampleBuilder = new Builder();' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Component' + "\n";
    scriptCode += 'const sampleComponent = sampleBuilder.component(' + "\n";
    scriptCode += '    "feed", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Add Classes' + "\n";
    scriptCode += '            feed: "card card-body", //Feed Element' + "\n";
    scriptCode += '            post: null, //Post Element' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        properties: { //Default for individual Post Values' + "\n";
    scriptCode += '            username: null, //Username' + "\n";
    scriptCode += '            content: null, //Content' + "\n";
    scriptCode += '            datetime: null, //Datetime' + "\n";
    scriptCode += '            class: { //Add Classes' + "\n";
    scriptCode += '                post: null, //Post Element' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        controls:{ //Controls' + "\n";
    scriptCode += '            like:{ //Like Control' + "\n";
    scriptCode += '                icon:"hand-thumbs-up", //Icon' + "\n";
    scriptCode += '                label:"Like", //Label' + "\n";
    scriptCode += '                callback:function(control,post,feed){}, //Executed when the control is created' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            share:{ //Share Control' + "\n";
    scriptCode += '                icon:"share", //Icon' + "\n";
    scriptCode += '                label:"Share", //Label' + "\n";
    scriptCode += '                callback:function(control,post,feed){}, //Executed when the control is created' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            note:{ //Note Control' + "\n";
    scriptCode += '                icon:"sticky", //Icon' + "\n";
    scriptCode += '                label:"Note", //Label' + "\n";
    scriptCode += '                callback:function(control,post,feed){}, //Executed when the control is created' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            comment:{ //Comment Control' + "\n";
    scriptCode += '                icon:"chat-text", //Icon' + "\n";
    scriptCode += '                label:"Commments", //Label' + "\n";
    scriptCode += '                callback:function(control,post,feed){}, //Executed when the control is created' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            edit:{ //Edit Control' + "\n";
    scriptCode += '                icon:"pencil-square", //Icon' + "\n";
    scriptCode += '                color:"warning", //Color' + "\n";
    scriptCode += '                label:"Edit", //Label' + "\n";
    scriptCode += '                callback:function(control,post,feed){}, //Executed when the control is created' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            delete:{ //Delete Control' + "\n";
    scriptCode += '                icon:"trash", //Icon' + "\n";
    scriptCode += '                color:"danger", //Color' + "\n";
    scriptCode += '                label:"Delete", //Label' + "\n";
    scriptCode += '                callback:function(control,post,feed){}, //Executed when the control is created' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(feed,component){ //Callback' + "\n";
    scriptCode += '        feed.add(' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                class: { //Add Classes' + "\n";
    scriptCode += '                    post: null, //Post Element' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '                datetime: null, //Datetime' + "\n";
    scriptCode += '                username: "john.doe@domain.com", //Username' + "\n";
    scriptCode += '                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", //Content' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(post,feed){}, //Callback' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        feed.add(' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                class: { //Add Classes' + "\n";
    scriptCode += '                    post: null, //Post Element' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '                datetime: null, //Datetime' + "\n";
    scriptCode += '                username: "john.doe@domain.com", //Username' + "\n";
    scriptCode += '                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.", //Content' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(post,feed){}, //Callback' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '        feed.add(' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                class: { //Add Classes' + "\n";
    scriptCode += '                    post: null, //Post Element' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '                datetime: null, //Datetime' + "\n";
    scriptCode += '                username: "john.doe@domain.com", //Username' + "\n";
    scriptCode += '                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", //Content' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(post,feed){}, //Callback' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += ');';

    // Code
    const code = sampleBuilder.component(
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
    const html = sampleBuilder.component(
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