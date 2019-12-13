<script type="text/javascript">
$(function(){

	$('.btnList ul li a').each(function(){
		$(this).bind('click', function(e){
			if ($(this).parent().is('.on')){
				$(this).parent().removeClass('on');
				$(this).find('>img').attr('src',$(this).find('>img').attr('src').replace(/on\.png$/, 'off.png'));
			} else {
				$(this).parent().addClass('on');
				$(this).find('>img').attr('src',$(this).find('>img').attr('src').replace(/off\.png$/, 'on.png'));
			}
		});
	});

});
</script>
