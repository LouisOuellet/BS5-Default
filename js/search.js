$(document).ready(function(){

    // Code

    let scriptCode = '';
    scriptCode += '// Live Search Utility' + "\n";
    scriptCode += 'Search.add(container); // Add JQuery object to live search // container being the JQuery object that contains the search results' + "\n";
    scriptCode += 'Search.set(object); // Add Search attributes to JQuery object for live search // object being the JQuery object of a search result' + "\n";
    scriptCode += 'Search.get(); // Get Search field(s) // Note: Search inputs require the class "search" to be added to the input' + "\n";
    scriptCode += '' + "\n";
    scriptCode += '// To Create your own Live Search Utility' + "\n";
    scriptCode += 'const CustomSearch = new UtilitySearch(selector); // selector being the JQuery selector find the search input(s)' + "\n";
    
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