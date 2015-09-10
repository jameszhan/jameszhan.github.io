seajs.config({
    base: "./modules/",
    alias: {
        "jquery": "jquery/jquery/1.10.1/jquery.js"
    }
});

$(document).ready(function(){
    $('[data-include]').each(function(i, e){
        var $this = $(e),
            url = $this.data('include');
        $.get(url).done(function(data){
            $this.append(data);
        });
    });
}).on('click', '[data-demo-script]', function(i, e){
    var $this = $(this),
        url = $this.data('demo-script');
    seajs.use(url);
});



