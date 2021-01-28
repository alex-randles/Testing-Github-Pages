var isCordovaFunctionTriggered = false;
var TemenosLoader = ( function() {
    var timer = null;
    var enabled = true;
	var elementId,
		imgSrc,
		showMask,
		delay,
		spinner;
    function setup(settings) {
		elementId = settings.id;
		imgSrc    = settings.imgSrc;
		showMask  = settings.showMask;
		delay     = settings.delay;

		//spinner = new Spinner({top: "40%"}).spin();

        $("body").append("<div class='tc-screenMask'></div>")
                 .append( $("#WRAPPER_" + elementId)  );
		$('.spinnerWaitingText').show(); // show the default spinner
		$("#WRAPPER_" + elementId).removeClass('customLoginSpinner'); // removed the class on the body element used to style the custom spinner
    }

	function _showWaiting() {
		var imgId = "WRAPPER_" + elementId;
		//$("#" + imgId).append(spinner.el).show();
		if ( $("#WRAPPER_" + elementId).hasClass('customLoginSpinner') ){
			$("#" + imgId).css('visibility' , 'visible');
		}else{
			$("#" + imgId).show();
		}
		if (showMask == "Y")
			$(".tc-screenMask").height( $(document).height() ).fadeIn();
	}

	function triggerShowImmediate() {
		if (enabled){
			_showWaiting();
		}
		return true;
	}

    function triggerShow() {
		//check if disable input flag is set
		if (arguments && arguments.length > 4 && arguments[4] === false)
			setEnabled(false);
        
		if (enabled)
        {
			//cant find a way of animating image after timeout, so in ios, show immediately.
            if (delay != "" && !$("html").is(".ios")) {
				if (timer == null){
	                timer = setTimeout( _showWaiting, parseInt(delay) );
				}
			}
            else {
                 _showWaiting();
	    }
        }
        
		return true;
    }

	//ios does handle ajax requests ok, so temporarily remove ios flag
	function triggerShowAjax() {
		//don't trigger for nav check...
		if (arguments[4] == "AjaxBrowserNavigationCheck") 
			return true;
		
		var isIOS = $("html").is(".ios");
		if (isIOS){
			$("html").removeClass("ios")
		}
		triggerShow();

		if (isIOS){
			$("html").addClass("ios")
		}
		return true;
	}

    function triggerHide(ns, ajaxCaller, result, req) {
    	var openAjaxRequests = getQSize(ns);
        if (timer && openAjaxRequests == 0 && !isCordovaFunctionTriggered) {
            clearTimeout(timer);
        }
        var imgId = "WRAPPER_" + elementId;
        if ( document.getElementById(imgId) ) {
            if (req && req.responseText && req.responseText.indexOf("REDISPLAY") >= 0) {
                //do nothing if response redisplays
            }
            else {
            	if (openAjaxRequests == 0 && !isCordovaFunctionTriggered) {
                    $("#" + imgId).fadeOut();
                    $(".tc-screenMask").fadeOut();
                    timer = null;            		
            	}
            }
        }
        return true;
    }

    function setEnabled(p_enabled) {
        enabled = p_enabled;
    }

    function setEnabledTrue() {
        setEnabled(true);
        return true;
    }
	
	 function hideSpinnerOnCordovaCallback() {
	 isCordovaFunctionTriggered= false;
	 triggerHide();
	 return true;
	}

    return ({
        setup                : setup,
        setEnabled           : setEnabled,
        setEnabledTrue       : setEnabledTrue,
        triggerShow          : triggerShow,
        triggerShowAjax      : triggerShowAjax,
        triggerShowImmediate : triggerShowImmediate,
        triggerHide          : triggerHide,
		hideSpinnerOnCordovaCallback : hideSpinnerOnCordovaCallback
		
    })
})();

