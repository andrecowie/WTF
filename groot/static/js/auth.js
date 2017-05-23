var authenticate = function(){
	data = {'authe': $('#password').val() , 'auth':$("#passworde").val() };
	$.ajax({
		type:'POST',
		url:'/youdontknowthisurl',
		contentType: 'application/json;charset=UTF-8',
		data: JSON.stringify(data, null, '\t'),
		success: function(result){
			var response = JSON.parse(result);
			location.reload();

		}
	});
};
