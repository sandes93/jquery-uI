$(document).ready(function() {
    var selections = {'#hotel-choices': hotel, '#restaurant-choices':restaurant, '#activity-choices': activity};
    console.log(Object.keys(selections));
    var keys = Object.keys(selections);
    for (var prop in keys) {
    	console.log(keys[prop])
    	var currentProp = keys[prop];
    	if(selections.hasOwnProperty(currentProp)){
    		var mySelect = $(currentProp)
    		console.log(currentProp);
	        $.each(selections[currentProp], function(val, text) {
	           mySelect.append(
	               $('<option></option>').val(val).html(text.name)

	            )

	        });
       }
    }
});



// $(".btn-circle").click(function() {
//        console.log( "Handler for .click() called." );
//        var $category = $(this).closest( "div" ).find("select").attr('id');
//        var $cat =$category.split("-")[0];
//        var $result = $( "#"+$category+" option:selected" ).text();
//        // console.log(hotels[$('#hotel-choices').val()]);
        
//        console.log($result+"s");
//        $('#'+$category.split("-")[0]).append($('<p></p>').html($result));

//        for (var i = 0; i < $cat.length; i++) {
//            if ($cat[i].name === $result){
//                locArr = $cat[i].place.location;
//                console.log(locArr);
//                break;

//            }
//        }

//    });


// //value
// $('#dropDownId').val();
// //text
// $('#dropDownId :selected').text();


// $('#genreList').append('<li><a href="#" onclick="searchGenres(\'' + genreName + '\')