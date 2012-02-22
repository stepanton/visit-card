$(document).ready(function(){
	strings = [
		'Lorem ipsum dolor'
		,'Also known as thevar1able'
		,'Resistance is useless!'
		,'Yet another linux user'
		,'Cake is a lie!'
		,'Still alive!'
	];
	$('.about, .likes').toggle();
	$('.desc a').text(strings[Math.round(Math.random()*strings.length)]);
	$('#triangle').toggle(function(){ //sliding down
		$('#main').animate({height:'400px'},'fast');
		$(this).attr('class','up');
		$(this).animate({top:'485px'},'fast');
		$(".about, .likes").animate({height:'toggle'},'fast');
	}, function(){ //Sliding Up
		$('#main').animate({height:'170px'},'fast');
		$(this).attr('class','down');
		$(this).animate({top:'255px'},'fast');
		$(".about, .likes").animate({height:'toggle'},'fast');
	});
});