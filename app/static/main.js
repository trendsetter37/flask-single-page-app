$(document).ready(function () {
	console.log("readayyy");
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
				console.log(results);
				results.items.forEach(function(user) {
					var img = '<img src="' + user.avatar_url + '" width="200" height="200">'; 
					$('#results').append('<br>');			
					$('#results').append(img);
					$('#results').append('<br><a href="' + user.html_url + '">' +
					user.login + '</a>')
					$('#results').append('<br><br>');
				});
				
				$('input').val("");
				
			},
			error: function(error) {
				alert("There was an error");
				console.log(error)
			}
		});
	});
});