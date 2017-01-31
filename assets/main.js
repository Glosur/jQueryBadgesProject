$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/Glosur.json',
    dataType: 'jsonp',
    success: function(response) {
      for (course in response.courses.completed) {
      	$('#badges').append('<div class="course"></div>');
      }
    }
  });

});
