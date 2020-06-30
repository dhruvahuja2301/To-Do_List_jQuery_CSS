$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", ".delete", function(event){
	// const x =confirm("Are you sure you want to delete it");
	// if(x) {
		$(this).parent().fadeOut(function(){
			$(this).remove();		
		});
		event.stopPropagation();	
	// }	
});
$("input[type='text']").on("keypress",function(event){
	if(event.which === 13) {
		const newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span class='delete'><i class='fa fa-trash-o'></i></span> "+newTodo+"</li>");
	}
});
$(".fa-plus").on("click", function(){
	$("input[type='text']").slideToggle();
});
	$("input[type='text']").fadeOut(0.1);
