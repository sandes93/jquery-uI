var selections = {'#hotel-choices': hotel, '#restaurant-choices':restaurant, '#activity-choices': activity};

$(document).ready(function() {
    initializeMap();

    var keys = Object.keys(selections);
    for (var prop in keys) {
    	var currentProp = keys[prop];
    	if(selections.hasOwnProperty(currentProp)){
    		var mySelect = $(currentProp)
	        $.each(selections[currentProp], function(val, text) {
	           mySelect.append(
	               $('<option></option>').val(val).html(text.name)
	            )
	        });
       }
    }
});

$(".btn-primary").click(function() {

   //console.log( "Handler for .click() called." );
   var $category = $(this).closest( "div" ).find("select").attr('id');
   var $result = $( "#"+$category+" option:selected" ).text();
   $('#'+$category.split("-")[0]).append($('<div class="itinerary-item"><span class="title">'+$result+'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>'));
   // console.log($result)
   // console.log($category)
   var options = selections['#'+$category]

   for (var i = 0; i < options.length; i++) {
       if (options[i].name === $result){
           locArr = options[i].place.location;
           drawMarker($category.split('-')[0], locArr)
           //onsole.log(locArr)
           break
       }
   }

   });

$(document).on('click', '.remove', function(){
    // console.log($(this).closest('div').find("span").empty());
    console.log($(this).closest('div').empty());
});

$('#day-add').click(function(){
    console.log($(this).closest('div').last().text())
    $('<button class="btn btn-circle day-btn">!!</button>').insertBefore($(this))
    // $(this).closest('div').append('<button class="btn btn-circle day-btn">!!</button>')
    // console.log('works')
});
