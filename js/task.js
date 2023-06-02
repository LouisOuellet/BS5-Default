$(document).ready(function(){

    // Sample
    $('#example').click(function(){
        Tasks.add(
            {
                label: "Monthly Report",
                progress: {
                    scale: 3,
                    color: "success",
                },
            },
            function(task){
                task.set(2);
            },
        );
    });

    // Code
    let scriptCode = '';
    scriptCode += '// Create Task Area' + "\n";
    scriptCode += 'const Tasks = new Task(' + "\n";
    scriptCode += '    "#taskArea", // selector being the JQuery selector to find the task area' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { // class being the class to add to the task area' + "\n";
    scriptCode += '            object: null, // object being the class to add to the task area object' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        callback: { // callback being the callback function to call when a task is added' + "\n";
    scriptCode += '            click: null, // click being the callback function to call when a task is clicked' + "\n";
    scriptCode += '            viewAll: null, // viewAll being the callback function to call when the view all button is clicked' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        icon: "list-task", // icon being the icon to use for the task area' + "\n";
    scriptCode += '        color: "primary", // color being the color to use for the task area' + "\n";
    scriptCode += '        defaults: { // defaults being the default properties to use for tasks' + "\n";
    scriptCode += '            class: { // class being the class to add to the task' + "\n";
    scriptCode += '                item: null, // item being the class to add to the task item' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            label: null, // label being the label to use for the task' + "\n";
    scriptCode += '            progress: { // progress being the progress bar properties to use for the task' + "\n";
    scriptCode += '                size: null, // size being the size to use for the progress bar' + "\n";
    scriptCode += '                color: "primary", // color being the color to use for the progress bar' + "\n";
    scriptCode += '                striped: true, // striped being the striped property to use for the progress bar' + "\n";
    scriptCode += '                animated: true, // animated being the animated property to use for the progress bar' + "\n";
    scriptCode += '                scale: 100, // scale being the scale to use for the progress bar' + "\n";
    scriptCode += '                label: "", // label being the label to use for the progress bar' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(task){ // task being the task object' + "\n";
    scriptCode += '        task.add( // add being the function to add a task' + "\n";
    scriptCode += '            {' + "\n";
    scriptCode += '                label: "Monthly Report", // label being the label to use for the task' + "\n";
    scriptCode += '                progress: { // progress being the progress bar properties to use for the task' + "\n";
    scriptCode += '                    scale: 3, // scale being the scale to use for the progress bar' + "\n";
    scriptCode += '                    color: "success", // color being the color to use for the progress bar' + "\n";
    scriptCode += '                },' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '            function(task){ // task being the task object' + "\n";
    scriptCode += '                task.set(2); // set the progress of the task' + "\n";
    scriptCode += '            },' + "\n";
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