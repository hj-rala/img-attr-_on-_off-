$('.mapBtns ul li a').on('hover', function(e){
		$(this).find('>img').attr('src',function(index, attr){
			if (attr.match('_on')){
				return attr.replace('_on.png','_off.png');
			} else {
				return attr.replace('_off.png','_on.png');
			}
		});
	});
