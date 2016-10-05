var selections = {'#hotel-choices': hotel, '#restaurant-choices':restaurant, '#activity-choices': activity};

var interactiveObject = [{hotel:[],restaurant:[],activity:[]}];


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
var currentDay = ($('.day-buttons').children().length)-1;

   for (var i = 0; i < options.length; i++) {
       if (options[i].name === $result){
           locArr = options[i].place.location;
           drawMarker($category.split('-')[0], locArr)
           //console.log(options[i])

           // if(interactiveObject.length < currentDay){
           //    interactiveObject.push({hotel:[],restaurant:[],activity:[]})
           // }
           console.log(interactiveObject);
           interactiveObject[currentDay-1][$category.split("-")[0]].push(options[i]);
           console.log(interactiveObject);
           

          


            break;
       }

   }

   });

$(document).on('click', '.remove', function(){
    // console.log($(this).closest('div').find("span").empty());
    console.log($(this).closest('div').empty());
    var count = $().closest('div').children().length
     interactiveObject[$(this).closest('h4').attr('id')].splice(count,1);
});

$('#day-add').click(function(){
    //console.log($(this).closest('div').last().text())
    var count =  $(this).closest('div').children().length
    interactiveObject.push({hotel:[],restaurant:[],activity:[]})

   $('<button class="btn btn-circle day-btn">'+count+'</button>').insertBefore($(this))


    
});




