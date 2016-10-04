$(document).ready(function() {
    var selections = [['#hotel-choices', hotels], ['#restaurant-choices',restaurants], ['#activity-choices', activities]];

    for (var i = 0; i < selections.length; i++) {
        var mySelect = $(selections[i][0]);
        $.each(selections[i][1], function(val, text) {
           mySelect.append(
               $('<option></option>').val(val).html(text.name)
            )
        });
    }
});


