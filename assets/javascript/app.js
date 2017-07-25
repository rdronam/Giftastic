$(document).ready(function(){

    $('button').on('click', function() {
        var superhero = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + superhero + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response) {


                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var superheroDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var superheroImage = $('<img/>');

                    superheroImage.addClass('anImg')

                    superheroImage.attr('src', results[i].images.fixed_height.url);

                    superheroImage.attr('data-still', results[i].images.fixed_height_still.url)

                    superheroImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    superheroDiv.append(p);

                    superheroDiv.append(superheroImage);

                    superheroDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });

    var superheros = [''];

    
        //This function "adds" the buttons 

        // handles the event when clicked
        $('#theButton').on('click', function(){
            var superheroButton = $("#gif-input").val();
            //adds the new animal

            var newButton = $("<button/>").addClass( "btn btn-info superhero").attr('data-name', auperheroButton).html(superheroButton).css({'margin': '5px'});
            
            $("#animalsbuttons").append(newButton);
                console.log("Work");

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalButton + "&api_key=dc6zaTOxFJmzC&limit=10";
                console.log(superheroButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var superheroDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var superheroImage = $('<img/>');

                    superheroImage.addClass('anImg')

                    superheroImage.attr('src', results[i].images.fixed_height_still.url);

                    superheroImage.attr('data-still', results[i].images.fixed_height_still.url)

                    superheroImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    superheroDiv.append(p);

                    superheroDiv.append(superheroImage);

                    superheroDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

            $("#gif-input").val("");
            return false;
        })
  
});