// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
 
  url : "https://api.wunderground.com/api/key/geolookup/conditions/astronomy/q/" + lat + "," + long + ".jsonp",       
  dataType : "jsonp",
  success : function(data) {
console.log
  var location = data['location']['city'];
  var state = data['location']['state'];
  $("#cityDisplay").text(location + "," + state);
      

var temp_f = Math.round(parseInt(data['current_observation']['temp_f']));
            
    var state = data['location']['state'];
        var summar = data["current_observation"]["weather"];
      var sRH = data["moon_phase"]["sunrise"]["hour"];
                var sRM = data["moon_phase"]["sunrise"]["minute"];
                var sSH = data["moon_phase"]["sunset"]["hour"];
                var sSM = data["moon_phase"]["sunset"]["minute"];
               
        
                $("#cityDisplay").text(location + ", " + state);
                $("#summary").text(summar);
                $("#currentTemp").text(temp_f + "°");
                $("#add1").text("Sunrise: " + sRH + ":" + sRM);
                $("#add2").text("Sunset: " + sSH + ":" + sSM + " (military)");
                $("#add3").text("Humidity: " + sSH + "%");
                $("title").prepend(location + ", " + state + " | ");

               



      $("#cover").fadeOut(250);
    }
           });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
