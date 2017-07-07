function submit_login()
{
	var txt_username = document.getElementById('txt_username').value;
	var txt_password = document.getElementById('txt_password').value;
	var dataString = "username=" + txt_username + "&password=" + txt_password;

	// alert(dataString);
	$.ajax
	({
	  type: "POST",
	  url: "ajax.php",
	  data: dataString,
	  success: function(html)
	  {
	     alert(html);
	  }
	});
}