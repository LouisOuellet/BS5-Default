$(document).ready(function(){

    const Form = {
        card: $('#new'),
        title: $('#newTitle'),
        article: $('#newArticle'),
    }
    const Preview = {
        card: $('#preview'),
        title: $('#previewTitle'),
        article: $('#previewArticle'),
    }

    Preview.card.find('.timeago').timeago();

    Form.title.on('input propertychange',function(){
        Preview.title.html(Form.title.val());
    });

    const IDEEditor = new IDE(
        Form.article,
        {
            callback: {
                input: function(input,editor){
                    Preview.article.html(editor.toHTML());
                }
            }
        }
    );
});