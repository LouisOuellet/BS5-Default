$(document).ready(function(){

    // Sample
    $('#example').click(function(){
        Toasts.add(
            {
                icon: "bell",
                title: "Bootstrap 5 Toast",
                body: "See? Just like this.",
            },
            function(toast){},
        );
    });

    // Code
    let scriptCode = '';
    scriptCode += '// Create Toast Area' + "\n";
    scriptCode += 'const Toasts = new Toast(' + "\n";
    scriptCode += '    "#toastArea", // selector being the JQuery selector to find the toast area' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { // class being the class to add to the toast area' + "\n";
    scriptCode += '            object: null, // object being the class to add to the toast area object' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        callback: { // callback being the callback function to call when a toast is added' + "\n";
    scriptCode += '            click: null, // click being the callback function to call when a toast is clicked' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        position: "top-center", // position being the position of the toast area' + "\n";
    scriptCode += '        defaults: { // defaults being the default options for the toast' + "\n";
    scriptCode += '            class: { // class being the class to add to the toast' + "\n";
    scriptCode += '                item: null, // item being the class to add to the toast item' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            callback: { // callback being the callback function to call when a toast is added' + "\n";
    scriptCode += '                click: null, // click being the callback function to call when a toast is clicked' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            color: null, // color being the color of the toast' + "\n";
    scriptCode += '            icon: null, // icon being the icon of the toast' + "\n";
    scriptCode += '            title: null, // title being the title of the toast' + "\n";
    scriptCode += '            body: null, // body being the body of the toast' + "\n";
    scriptCode += '            datetime: null, // datetime being the datetime of the toast' + "\n";
    scriptCode += '            delay: 5000, // delay being the delay of the toast' + "\n";
    scriptCode += '            autohide: true, // autohide being the autohide of the toast' + "\n";
    scriptCode += '            animation: true, // animation being the animation of the toast' + "\n";
    scriptCode += '            dismissible: true, // dismissible being the dismissible of the toast' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(toastArea){ // callback being the callback function to call when a toast area is created' + "\n";
    scriptCode += '        toastArea.add( // add being the function to add a toast' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                icon: "bell", // icon being the icon of the toast' + "\n";
    scriptCode += '                title: "Bootstrap 5 Toast", // title being the title of the toast' + "\n";
    scriptCode += '                body: "See? Just like this.", // body being the body of the toast' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(toast){}, // callback being the callback function to call when a toast is added' + "\n";
    scriptCode += '        );' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += ');';
    
    const code = new Code(
        '#code',
        {
            language: 'javascript',
            title: 'Code',
            clipboard:true,
            fullscreen:true,
            collapsed:false,
            code:scriptCode,
        },
        function(element,code){}
    );
});