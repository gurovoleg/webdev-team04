$(document).ready(function() {
	
	$(".left-panel").customScrollbar({preventDefaultScroll: true});

	// Upload file. Кнопка загрузки фотографии
	$('.file__upload-input').change(function() {
  		var label = $(this).parent().find('label');
  		if($(this).val() === '') {
     		label.text('No File');
  		} else {
     	label.text($(this).val().replace('C:\\fakepath\\',''));
  		}
	});

});