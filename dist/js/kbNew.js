$(document).ready(function(){

    const Form = {
        title: $('#newTitle'),
        article: $('#newArticle'),
    }
    const Preview = {
        title: $('#previewTitle'),
        article: $('#previewArticle'),
    }

    Form.title.change(function(){
        Preview.title.html(Form.title.val());
    });
    Form.article.change(function(){
        var converter = new showdown.Converter(),
            html = converter.makeHtml(Form.article.val());
        Preview.article.html(html);
    });
});