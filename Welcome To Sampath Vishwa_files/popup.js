function loadBlockUI(){

	$.blockUI.defaults.css.border			= 'none'; 
	$.blockUI.defaults.css.width			= 'auto'; 
	$.blockUI.defaults.css.cursor			= 'auto';
	$.blockUI.defaults.css.left				= 'auto';
	$.blockUI.defaults.css.top				= '20%';
		
	$.blockUI.defaults.overlayCSS.cursor	= 'auto';
	$.blockUI.defaults.overlayCSS.cursor	= 'auto';

}

function showPopup(popup){

	$.blockUI({ message: $(popup) });
	
	if(!($(popup).hasClass('wait'))){
	  var background	= $('.blockOverlay');
	  var closeBtn		= $('.popup span.close');	
	  var okBtn			= $('.popup input[type=button]');	
  
	  $([background, closeBtn, okBtn]).each(function() {
		  $(this).click($.unblockUI);
	  });
    }
}

function showConfirmation(confMsg){
   	$('#confMsgTag').html(confMsg);
	$.unblockUI();
   	showPopup($('.popup.form.form-data'));
}

