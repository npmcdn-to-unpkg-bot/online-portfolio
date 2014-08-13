var cinemas = [
      ['Westcity', -36.881655, 174.634554, 4, 'http://www.eventcinemas.co.nz/Cinema/Westcity', 'Level 4 <br> Westfield Westcity <br> Edsel St'], 
      ['St Lukes', -36.882984, 174.733601, 5, 'http://www.eventcinemas.co.nz/Cinema/St-Lukes', 'Level 2 <br> Westfield St Lukes <br> St Lukes Rd'],
      ['Broadway', -36.865885, 174.778689, 3, 'http://www.eventcinemas.co.nz/Cinema/Broadway', '77 Broadway <br> Newmarket'],
      ['Queen Street', -36.851386, 174.763969, 2, 'http://www.eventcinemas.co.nz/Cinema/Queen-Street', 'Metro Building <br> Level 3 <br> 291-297 Queen St']
    ];

function initializeMap(){
    var marker, i;
    var infowindow;

    var mapOptions = {
      center: new google.maps.LatLng(-36.872009, 174.701477),
      zoom: 10
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);

    var image = 'images/cinema.png';

    infowindow = new google.maps.InfoWindow();


    for (i = 0; i < cinemas.length; i++){

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(cinemas[i][1],cinemas[i][2]),
            map: map,
            icon: image,
            title:"Event Cinemas " + cinemas[i][0],
            zIndex: cinemas[i][3]
          });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent('<div id="content">'+
              '<h4 id="firstHeading" style="color: #333">Event Cinemas ' + cinemas[i][0] + '</h4>'+
              '<div id="bodyContent">'+
              '<p style="color: #333">' + cinemas[i][5] + '</p>'+
              '<a href="' +  cinemas[i][4] + '" target="_blank" >Visit Site </a> ' +
              '</div>'+
              '</div>');
              infowindow.open(map, marker);
            }
        })(marker, i));

    }

}

// google.maps.event.addDomListener(window, 'resize', initialize);
google.maps.event.addDomListener(window, 'load', initializeMap);
