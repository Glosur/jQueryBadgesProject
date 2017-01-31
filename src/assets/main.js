$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/Glosur.json',
    dataType: 'jsonp',
    success: function(response) {
     response.courses.completed.forEach(function(course)  {
      	var badge = $('#badges').append(`<div class="course"><h3>${course.title}</h3></div>`);
      	console.log(course);
      	//badge.find('div').prepend('<h3>' + course.title + '</h3>');
      });
    }
  });

});
