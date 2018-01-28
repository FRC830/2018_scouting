$(function() {
	$('#comments').keyup(function(){
		if ($('#comments').val().toLowerCase().indexOf("rainbow") != -1) {
			$('.content').css('background','linear-gradient(to bottom, rgba(255,44,40,1) 0%,rgba(255,128,0,1) 17%,rgba(255,246,0,1) 34%,rgba(0,170,0,1) 50%,rgba(0,219,201,1) 66%,rgba(43,0,216,1) 83%,rgba(165,46,121,1) 100%)');
		}
		else {
			$('.content').css('background','white');
		}

		if ($('#comments').val().toLowerCase().indexOf("stop it") != -1){
			$('img:nth(0)').attr('src', '/static/custom/stopit.gif')
		}		
		else if ($('#comments').val().toLowerCase().indexOf("jerry") != -1){
			$('img:nth(0)').attr('src', '/static/custom/Jerry.gif')
		}
		else if ($('#comments').val().toLowerCase().indexOf("water game") != -1){
			$('img:nth(0)').attr('src', '/static/custom/watergame.png')
		}
		else if ($('#comments').val().toLowerCase().indexOf("swerve") != -1){
			$('img:nth(0)').attr('src', '/static/custom/swerve.jpg')
		}
		else {
			$('img:nth(0)').attr('src', '/static/custom/known.png')
		}
		
	})

})



