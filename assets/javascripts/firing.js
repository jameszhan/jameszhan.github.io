$(document).ready(function(){
    $('[data-include]').each(function(i, e){
        var $this = $(e),
            url = $this.data('include');
        $.get(url).done(function(data){
            $this.append(data);
        });
    });
});