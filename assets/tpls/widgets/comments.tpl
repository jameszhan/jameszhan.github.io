<!-- 多说评论框 start -->
<div class="ds-thread"
     data-thread-key="/assets/tpls/widgets/comments.tpl"
     data-title="Comments"
     data-url="http://jameszhan.github.io/assets/tpls/widgets/comments.tpl"></div>
<!-- 多说评论框 end -->
<!-- 多说公共JS代码 start (一个网页只需插入一次) -->
<script type="text/javascript">
    var duoshuoQuery = {short_name:"jameszhan"};
     (function() {
        var ds = document.createElement('script');
        ds.type = 'text/javascript';ds.async = true;
        ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
        ds.charset = 'UTF-8';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
    })();

    $(document).on('click', '#ds-thread textarea[name=message]', function(){
        $('#ds-sync-checkbox').prop('checked', false);
    });
</script>
<!-- 多说公共JS代码 end -->


