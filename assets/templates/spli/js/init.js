$(document).ready(function() {
	$(document).on('click', '.all-models-series .one-click, .series-models-list .one-click', function (e) {
        $(this).blur();
        e.preventDefault();
        buttonclick = $(this);
        $.magnificPopup.open({
            mainClass: 'mfp-zoom-out',
            items: {
                src: '#one_click_form',
                type: 'inline'
            },
            removalDelay: 300,
            callbacks: {
                open: function() {
                    var magnificPopup = $.magnificPopup.instance;
                    elem = buttonclick;
                    if(elem.data('price') != 0) {
                        $('#form_oc_text').show();
                        $('#form_oc_text2').hide();
                        $('#form_oc_price').text(elem.data('price'));
                        $('#price_form').val(elem.data('price'));
                        
                    } else {
                        $('#form_oc_text').hide();
                        $('#form_oc_text2').show();
                        $('#price_form').val('под заказ');
                    }
                    $('#form_id').val(elem.data('id'));
                    $('#form_oc_name').text(elem.data('name'));
                    $('#item_form').val(elem.data('name'));
                }
            }
        });
    });
    $(document).on('click', '.i-seen-cheaper', function (e) {
        $(this).blur();
        e.preventDefault();
        buttonclick = $(this);
        $.magnificPopup.open({
			mainClass: 'mfp-zoom-out',
            items: {
                src: '#i_seen_cheaper',
                type: 'inline'
            },
			removalDelay: 300,
            callbacks: {
                open: function() {
                    var magnificPopup = $.magnificPopup.instance;
                    elem = buttonclick;
                    if(elem.data('price') != 0) {
                        $('#form_oc_text').show();
                        $('#form_oc_text2').hide();
                        $('#form_oc_price').text(elem.data('price'));
                        $('#price_form').val(elem.data('price'));
                        
                    } else {
                        $('#form_oc_text').hide();
                        $('#form_oc_text2').show();
                        $('#price_form').val('под заказ');
                    }
                    $('#form_id').val(elem.data('id'));
                    $('#form_oc_name').text(elem.data('name'));
                    $('#item_form').val(elem.data('name'));
                }
            }
        });
    });
	$(document).on('click', '.order-phone', function (e) {
        $(this).blur();
        e.preventDefault();
        buttonclick = $(this);
        $.magnificPopup.open({
			mainClass: 'mfp-zoom-out',
            items: {
                src: '#callback_form',
                type: 'inline'
            },
			removalDelay: 300,
        });
    });
	$('#show_data_organization').change(function(){
	  if($(this).is(':checked')){
		$('.legal-form').show();
	  } else {
		$('.legal-form').hide();
	  }
	});
	$('.external-gallery').click(function( event ) {
        event.preventDefault();
        id = $(this).data('id');
        //console.log(id);
        var items = [];
        $.ajax({
                url: '/galleryload.html?id=' + id,
                type:'GET',
                success: function(data){
                    var res = JSON.parse(data);
                    $.each(res, function(i, item) {
                        items.push({
                            src: item.url,
                            title: item.name
                        });
                    });
                },
                complete: function() {
                // console.log(items.length);
                $.magnificPopup.open({
                    items: items,
                    type: 'image',
                    tLoading: 'Загрузка изображения #%curr%...',
                    mainClass: 'mfp-img-mobile',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                    },
                        callbacks: {
                        buildControls: function() {
                            if (items.length > 1) {
                                  // re-appends controls inside the main container
                                  this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
                                }}
                    },
            		image: {
            			tError: '<a href="%url%">Изображение #%curr%</a> невозможно загрузить.',
            			titleSrc: function(item) {
            				//return //item.el.attr('title');
            				///console.log(items);
            				/*var $gallery = $('.gallery');
            				var $result = '';
            				if ($gallery.find('li').length>0) {
            					$result = '<div class="mfp-pager">' + 
            						'<div class="arrow_prev">' +
            							'<button type="button" class="prev arrow" onclick="javascript:$(\'.gallery\').magnificPopup(\'prev\');return false;">Назад</button>' +
            						'</div>' + 
            						'<div class="dots">' +
            							'<ul class="dots" style="display: inline-block;">';
            					for (var i=0; i<$gallery.find('li').length; i++) {
            						var $cl_active = '';
            						if (item.index == i) $cl_active = ' class="active"'; else $cl_active = '';
            						var $thumb = $gallery.find('li:eq('+i+')').find('img').attr('src');
            						$result += '<li'+$cl_active+'>' +
            								'<button type="button" onclick="javascript:$(\'.gallery\').magnificPopup(\'goTo\', '+i+');return false;"><img src="' + $thumb + '" width="50"></button>' +
            							'</li>';
            					}
            					$result += '</ul>' +
            						'</div>' +
            						'<div class="arrow_next">' +
            							'<button type="button" class="next arrow" onclick="javascript:$(\'.gallery\').magnificPopup(\'next\');return false;">Вперед</button>' +
            						'</div>' +
            					'</div>';
            				}*/
            				return $result;
            			}
            		}
                });
             }
        });    
    });
});