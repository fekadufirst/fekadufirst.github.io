var returned;

$('#query').keyup(function () {
    // All code will be inside of this block
    var value = $('#query').val();

    var rExp = new RegExp(value, "i");

    $.getJSON("https://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
        console.log(data);
        returned = data
        var output = '<ol>';
        $.each(data.RESULTS, function (key, val) {
            if (val.name.search(rExp) != -1) {
                output += '<li>';
                output += '<a href="https://www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
                output += '</li>';
            }
        }); // end each
        output += '</ol>';
        $("#searchResults").html(output); // send results to the page



    }); // end getJSON
}); // end keyup


$('#searchResults').on('click', 'a', function (event) {
    event.preventDefault();
    index = $(this).index("a");
    getData(returned.RESULTS[index].lat, returned.RESULTS[index].lon);
    $('#searchResults').toggle();



});

function getData(lat, long) {
    $.ajax({

        url: "https://api.wunderground.com/api/e9d989d4d615f0c3/geolookup/conditions/astronomy/forecast/q/" + lat + "," + long + ".jsonp",
        dataType: "jsonp",
        success: function (data) {
            console.log(data)
            var location = data['location']['city'];
            var state = data['location']['state'];
            $("#cityDisplay").text(location + "," + state);


            var temp_f = Math.round(parseInt(data['current_observation']['temp_f']));

            var state = data['location']['state'];
            var summar = data["current_observation"]["weather"];
            var high = data["forecast"]["simpleforecast"]["forecastday"]["0"]["high"]["fahrenheit"];
            var low = data['forecast']['simpleforecast']['forecastday']['0']['low']['fahrenheit'];
            var sRH = data["moon_phase"]["sunrise"]["hour"];
            var sRM = data["moon_phase"]["sunrise"]["minute"];
            var sSH = data["moon_phase"]["sunset"]["hour"];
            var sSM = data["moon_phase"]["sunset"]["minute"];



            $("#cityDisplay").text(location + ", " + state);
            $("#summary").text(summar);
            $("#currentTemp").text(temp_f + "°");
            $("#high").text("High: " + high + "°");
            $("#low").text("Low: " + low + "°");
            $("#add1").text("Sunrise: " + sRH + ":" + sRM);
            $("#add2").text("Sunset: " + sSH + ":" + sSM + " (military)");
            $("#add3").text("Humidity: " + sSH + "%");
            $("title").prepend(location + ", " + state + " | ");






            $("#cover").fadeOut(250);
        }
    });
}


// A function for changing a string to TitleCase
function toTitleCase(str) {
    return str.replace(/\w+/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}