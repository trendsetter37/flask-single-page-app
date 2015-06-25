$(document).ready(function () {
	console.log("readayyy");

	$('#try-again').hide();
	$('form').on("submit", function() {
		console.log("The form has been submitted");
		var valueOne = $("input[name='location']").val();
		var valueTwo = $("input[name='language']").val();
		console.log(valueOne, valueTwo);

		// ajax to the backend
		$.ajax({
			type: "POST",
			url: "/",
			data: { first: valueOne, second: valueTwo},
			success: function(results) {
				if (results.items.length > 0) {
					$('input').hide();
					$('#try-again').show();
					
					$('#results').html("");
					results.items.forEach(function(user) {
					var img = '<img src="' + user.avatar_url + '" class="avatar">'; 
					$('#results').append('<br>');			
					$('#results').append(img);
					$('#results').append('<br><a href="' + user.html_url + '">' +
					user.login + '</a>')
					$('#results').append('<br><br>');
				});
				} else {
					// clear results
					$('#results').html("");
					$('#results').html("<p>No results found.</p>");
					
				}				
				
				//$('input').val("");
				$("input[name='location']").focus();
				
			},
			error: function(error) {
				alert("There was an error");
				console.log(error)
			}
		});
	});
	$('#try-again').on("click", function() {
		$('input').val('').show();
		$('#try-again').hide();
		$('#results').html('');
	});
});