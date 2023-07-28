$(document).ready(function(){

    // Sample Data
    const records = [
        {name:'Airi Satou',position:'Accountant',office:'Tokyo',age:'33'},
        {name:'Angelica Ramos',position:'Chief Executive Officer (CEO)',office:'London',age:'47'},
        {name:'Ashton Cox',position:'Junior Technical Author',office:'San Francisco',age:'66'},
        {name:'Bradley Greer',position:'Software Engineer',office:'London',age:'41'},
        {name:'Brenden Wagner',position:'Software Engineer',office:'San Francisco',age:'28'},
        {name:'Brielle Williamson',position:'Integration Specialist',office:'New York',age:'61'},
        {name:'Bruno Nash',position:'Software Engineer',office:'London',age:'38'},
        {name:'Caesar Vance',position:'Pre-Sales Support',office:'New York',age:'21'},
        {name:'Cara Stevens',position:'Sales Assistant',office:'New York',age:'46'},
        {name:'Cedric Kelly',position:'Senior Javascript Developer',office:'Edinburgh',age:'22'},
    ];

    // Builder
    const sampleBuilder = new Builder();

    // Component
    const sampleComponent = sampleBuilder.component(
        "table", //Component Name
        "#example", //Selector or JQuery Object to appendTo
        {
            class: { //Classes
                buttons: "px-4 pt-4", //Buttons
                table: "border-top", //Table
                footer: "px-4 pt-2 pb-4", //Footer
            },
            showButtonsLabel: false, //Show Buttons Label
            selectTools:true, //Select Tools
            actions:{ //Actions, These are the buttons that appear in the table's action column
              remove:{
                label:'Remove',
                icon:'trash',
                action:function(event, table, node, row, data){
                  table.delete(row);
                },
              },
            },
            datatable:{ //Datatable options
                columnDefs:[
                    { target: 0, visible: true, responsivePriority: 1, title: 'Name', name: 'name', data: 'name' },
                    { target: 1, visible: true, responsivePriority: 1000, title: 'Position', name: 'position', data: 'position' },
                    { target: 2, visible: true, responsivePriority: 1000, title: 'Office', name: 'office', data: 'office' },
                    { target: 3, visible: true, responsivePriority: 2, title: 'Age', name: 'age', data: 'age' },
                ],
                buttons:[
                    {
                        text: '<i class=\'bi-plus-lg\'></i>',
                        action:function(e, dt, node, config){
                            console.log(e, dt, node, config);
                            dt.row.add(records[Helper.randomNumber(0,9)]).draw();
                        },
                    }
                ],
            },
        },
        function(table,component){ //Callback
            for(const [key, record] of Object.entries(records)){
                table.add(record); //Add record to table
            }
        },
    );

    // Javascript Code
    let scriptCode = '';
    scriptCode += '// Builder' + "\n";
    scriptCode += 'const sampleBuilder = new Builder();' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// Component' + "\n";
    scriptCode += 'const sampleComponent = sampleBuilder.component(' + "\n";
    scriptCode += '    "table", //Component Name' + "\n";
    scriptCode += '    "#example", //Selector or JQuery Object to appendTo' + "\n";
    scriptCode += '    {' + "\n";
    scriptCode += '        class: { //Classes' + "\n";
    scriptCode += '            buttons: "px-4 pt-4", //Buttons' + "\n";
    scriptCode += '            table: "border-top", //Table' + "\n";
    scriptCode += '            footer: "px-4 pt-2 pb-4", //Footer' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        showButtonsLabel: false, //Show Buttons Label' + "\n";
    scriptCode += '        selectTools:true, //Select Tools' + "\n";
    scriptCode += '        actions:{ //Actions, These are the buttons that appear in the table\'s action column' + "\n";
    scriptCode += '          remove:{' + "\n";
    scriptCode += '            label:\'Remove\',' + "\n";
    scriptCode += '            icon:\'trash\',' + "\n";
    scriptCode += '            action:function(event, table, node, row, data){' + "\n";
    scriptCode += '              table.delete(row);' + "\n";
    scriptCode += '            },' + "\n";
    scriptCode += '          },' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '        datatable:{ //Datatable options' + "\n";
    scriptCode += '            columnDefs:[' + "\n";
    scriptCode += '                { target: 0, visible: true, responsivePriority: 1, title: \'Name\', name: \'name\', data: \'name\' },' + "\n";
    scriptCode += '                { target: 1, visible: true, responsivePriority: 1000, title: \'Position\', name: \'position\', data: \'position\' },' + "\n";
    scriptCode += '                { target: 2, visible: true, responsivePriority: 1000, title: \'Office\', name: \'office\', data: \'office\' },' + "\n";
    scriptCode += '                { target: 3, visible: true, responsivePriority: 2, title: \'Age\', name: \'age\', data: \'age\' },' + "\n";
    scriptCode += '            ],' + "\n";
    scriptCode += '            buttons:[' + "\n";
    scriptCode += '                {' + "\n";
    scriptCode += '                    text: \'<i class=\\\'bi-plus-lg\\\'></i>\',' + "\n";
    scriptCode += '                    action:function(e, dt, node, config){' + "\n";
    scriptCode += '                        console.log(e, dt, node, config);' + "\n";
    scriptCode += '                        dt.row.add(records[Helper.randomNumber(0,9)]).draw();' + "\n";
    scriptCode += '                    },' + "\n";
    scriptCode += '                }' + "\n";
    scriptCode += '            ],' + "\n";
    scriptCode += '        },' + "\n";
    scriptCode += '    },' + "\n";
    scriptCode += '    function(table,component){ //Callback' + "\n";
    scriptCode += '        for(const [key, record] of Object.entries(records)){' + "\n";
    scriptCode += '            table.add(record); //Add record to table' + "\n";
    scriptCode += '        }' + "\n";
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