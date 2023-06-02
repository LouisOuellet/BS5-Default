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

    // Sample
    
    const sampleObject = new Table(
        "#example", //Selector or JQuery Object to appendTo
        {
            showButtonsLabel: false,
            selectTools:true,
            actions:{
              remove:{
                label:"Remove",
                icon:"trash",
                action:function(event, table, node, row, data){
                  table.delete(row);
                },
              },
            },
            datatable:{
                columnDefs:[
                    { target: 0, visible: true, responsivePriority: 1, title: "Name", name: "name", data: "name" },
                    { target: 1, visible: true, responsivePriority: 1000, title: "Position", name: "position", data: "position" },
                    { target: 2, visible: true, responsivePriority: 1000, title: "Office", name: "office", data: "office" },
                    { target: 3, visible: true, responsivePriority: 2, title: "Age", name: "age", data: "age" },
                ],
                buttons:[
                    {
                        text: '<i class="bi-plus-lg"></i>',
                        action:function(e, dt, node, config){
                            console.log(e, dt, node, config);
                            dt.row.add(records[Helper.randomNumber(0,9)]).draw();
                        },
                    }
                ],
            },
        },
        function(table){ //Callback
            for(const [key, record] of Object.entries(records)){
                table.add(record);
            }
        }, 
    );

    // Code

    let scriptCode = '';
    scriptCode += '' + "\n";
    
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
});