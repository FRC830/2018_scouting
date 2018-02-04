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
			else if ($('#comments').val().toLowerCase().indexOf("up up down down left right left right b a start") != -1){
			$('.content').css('background','/static/custom/Donkey_Kong.png')
		}
		else {
			$('img:nth(0)').attr('src', '/static/custom/known.png')
		}
	})
})
var count = 0;
$(function() {
    $("#submit").click(function(){
        count++;
        if (count >= 3){
            $(".form-field").fadeOut(2000).fadeIn(2000);
        }
        var comments = $("#comments").val();
		if(comments.length > 110){
			alert("Achievement! You wrote an essay! \n\nCongratulations on finishing your short story entitled \"Comments\"");
		}
		
        var match = $("#match_id").val();
        if (match == 1){
            alert("Achievement Get: \n'We are Number One!' \n(scout the first match)");
        }else if (match >= 81){
            alert("Achievement Get: \n'Take the Red Pill' \n(break the matrix by scouting past match 80)");
        }
        var team = $("#team_id").val();
        if (team == 830){
            alert("Achievement Get: \nRodents of Unusual Size \n(I don't believe they exist)");
        }
        var switchCubes = $("#cube_switch").val();
        var scaleCubes = $("#cube_scale").val();
        var vaultCubes = $("#cube_vault").val();
        var cubesPickedUp = $("#cube_count").val();
        if (switchCubes < 0 || scaleCubes < 0 || vaultCubes < 0 || cubesPickedUp < 0){
            alert("Achievement Get: \nOur Princess is in Another Castle \n(score negative cubes)");
        }
        if (switchCubes >= 100 || scaleCubes >= 100 || vaultCubes >= 100 || cubesPickedUp >= 100){
        	alert("Achievement Get: \n0 to 100 real quick \n(have more than 100 cubes in any field)");
        }
        var techFouls =  parseInt($("#tech_fouls").val()) 
        var fouls = parseInt($("#fouls").val());
        if (fouls >= 1 && techFouls >= 1){
            alert("Achievement Get: \n The Cake is a Lie \n(get both a foul and a tech foul)");
        }
        var autonLine = $("#cross_line").prop('checked')
        var autonScale = $("#auton_ci_scale").prop('checked')
        if (autonLine && autonScale){
        	alert("Achievement Get: \n It's super effective! \n(cross the line and score a cube in the scale during auton)");
        }
    });
});