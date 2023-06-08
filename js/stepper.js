$(document).ready(function(){

    // Sample
    const sampleObject = new Stepper(
        '#example', //Selector or JQuery Object to add click event to
        {
            class: { //Add Classes
                stepper: null, //Stepper Element
                controls: 'card card-body my-2', //Stepper Controls Element
                steps: 'card card-body my-2', //Stepper Steps Element
                pagination: 'card card-body my-2', //Stepper Pagination Element
            },
            color: null, //Set Accent Color
            defaults: { //Default Step Options
            },
        },
        function(stepper){ // Callback Function
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

    // Code
    let scriptCode = "";
    scriptCode += "const sampleObject = new Stepper(" + "\n";
    scriptCode += "    '#example', //Selector or JQuery Object to add click event to" + "\n";
    scriptCode += "    {" + "\n";
    scriptCode += "        class: { //Add Classes" + "\n";
    scriptCode += "            stepper: null, //Stepper Element" + "\n";
    scriptCode += "            controls: 'card card-body my-2', //Stepper Controls Element" + "\n";
    scriptCode += "            steps: 'card card-body my-2', //Stepper Steps Element" + "\n";
    scriptCode += "            pagination: 'card card-body my-2', //Stepper Pagination Element" + "\n";
    scriptCode += "        }," + "\n";
    scriptCode += "        color: null, //Set Accent Color" + "\n";
    scriptCode += "        defaults: { //Default Step Options" + "\n";
    scriptCode += "        }," + "\n";
    scriptCode += "    }," + "\n";
    scriptCode += "    function(stepper){ // Callback Function" + "\n";
    scriptCode += "        stepper.add( //Add step to the stepper //Note: This function can be called multiple times to add multiple steps. It can also called outside of the callback function." + "\n";
    scriptCode += "            {}, //Options" + "\n";
    scriptCode += "            function(step){ //Callback Function" + "\n";
    scriptCode += "                console.log(step);" + "\n";
    scriptCode += "                step.content.html('<div class=\"p-5 bg-success rounded\">Step 1</div>');" + "\n";
    scriptCode += "            }," + "\n";
    scriptCode += "        );" + "\n";
    scriptCode += "        stepper.add( //Add step to the stepper //Note: This function can be called multiple times to add multiple steps. It can also called outside of the callback function." + "\n";
    scriptCode += "            {}, //Options" + "\n";
    scriptCode += "            function(step){  //Callback Function" + "\n";
    scriptCode += "                console.log(step);" + "\n";
    scriptCode += "                step.content.html('<div class=\"p-5 bg-warning rounded\">Step 2</div>');" + "\n";
    scriptCode += "            }," + "\n";
    scriptCode += "        );" + "\n";
    scriptCode += "        stepper.add( //Add step to the stepper //Note: This function can be called multiple times to add multiple steps. It can also called outside of the callback function." + "\n";
    scriptCode += "            {}, //Options" + "\n";
    scriptCode += "            function(step){  //Callback Function" + "\n";
    scriptCode += "                console.log(step);" + "\n";
    scriptCode += "                step.content.html('<div class=\"p-5 bg-danger rounded\">Step 3</div>');" + "\n";
    scriptCode += "            }," + "\n";
    scriptCode += "        );" + "\n";
    scriptCode += "    }," + "\n";
    scriptCode += ");";
    
    const code = new Code(
        '#code',
        {
            language: 'javascript',
            title: 'Code',
            clipboard:true,
            fullscreen:true,
            collapsed:true,
            code:scriptCode,
        },
        function(element,code){}
    );

    let pretty = prettier.format($('#example').html(), { parser: "html", tabWidth: 4, useTabs: true, plugins: prettierPlugins });
    
    const html = new Code(
        '#htmlcode',
        {
            language: 'markup',
            title: 'Code',
            clipboard:true,
            fullscreen:true,
            collapsed:true,
            code:pretty,
        },
        function(element,code){}
    );
});