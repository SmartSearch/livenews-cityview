var preload='<div id="preloader" syle="text-align:center;margin:0;"><img src="/assets/img/ajax-loader1.gif"></div>';
var noresult='<ul class="jspPane"><li>      <div class="txt_widget"> <p class="autor"> 0 Resultados </p> <p>Esta consulta no genera resultados </p>       </div>    </li></ul>';
var activo="";
var divVacio='<div class="flexa"></div>';
function mapaClick(coordenadas)
{

     map.panTo(coordenadas);
     $("div.visible .content_widget").html("");
    $("#mod_iconSports .tit_widget")[0].innerHTML=divVacio+" Deportes Santander ";
    $("#mod_iconPics .tit_widget")[0].innerHTML=divVacio+" Ciudad Santander";
     if($(".active #iconSports").length!=1)
          $("#mod_iconCity .tit_widget").html(divVacio+" Ciudad Santander");
     else
          $("#mod_iconSports .tit_widget").html(divVacio+" Deportes Santander ");

}

function santanderEsteClick(event)
{
    //coordenadas = new google.maps.LatLng(43.472356,-3.793079);
    //map.panTo(coordenadas);
var latitudLongitud = event.latLng;
var latitud = latitudLongitud.lat();
var longitud =latitudLongitud.lng();

    if ($(".active").length==0)
        $(".icon_menuSidebar #iconCity").parent().addClass("active");

    if (activo != ""  && $(".active").lenght==1 )
    {
        $("#"+activo)[0].parentNode.className = $("#"+activo)[0].parentNode.className + " active ";
    
    }
    $(".modulo_widget").removeClass("visible");
    if($(".active #iconCity").length==1)
    {
        link="ws/lateral.php?origen=city&latitud="+latitud+"&longitud="+longitud;
       // $("#mod_iconCity .tit_widget").html(divVacio+" Ciudad Santander ");
        $("#mod_iconCity").addClass("visible");
        $("#iconCity")[0].parentNode.className =  $("#iconCity")[0].parentNode.className + "   active ";

    }
    if($(".active #iconSports").length==1)

    {
        $("#iconSports")[0].parentNode.className =  $("#iconSports")[0].parentNode.className + " active ";

        //link="ws/deportes.php?sector=este";
		 link="ws/lateral.php?origen=sport&latitud="+latitud+"&longitud="+longitud;
        //$("#mod_iconSports .tit_widget").html(divVacio+" Results for SPORTS Smart Search: ");
        $("#mod_iconSports").addClass("visible");
    }

 if($(".active #iconEvents").length==1)

    {
        $("#iconEvents")[0].parentNode.className =  $("#iconEvents")[0].parentNode.className + " active ";

        //link="ws/deportes.php?sector=este";
         link="ws/lateral.php?origen=sport&latitud="+latitud+"&longitud="+longitud;
        //$("#mod_iconSports .tit_widget").html(divVacio+" Results for SPORTS Smart Search: ");
        $("#mod_iconEvents").addClass("visible");
    }

 if($(".active #iconPics").length==1)

    {
        $("#iconPics")[0].parentNode.className =  $("#iconPics")[0].parentNode.className + " active ";

        //link="ws/deportes.php?sector=este";
         link="ws/lateral.php?origen=sport&latitud="+latitud+"&longitud="+longitud;
        //$("#mod_iconSports .tit_widget").html(divVacio+" Results for SPORTS Smart Search: ");
        $("#mod_iconPics").addClass("visible");
    }

   
 if($(".active #iconVideo").length==1)

    {
        $("#iconVideo")[0].parentNode.className =  $("#iconVideo")[0].parentNode.className + " active ";

        //link="ws/deportes.php?sector=este";
         link="ws/lateral.php?origen=traffic&latitud="+latitud+"&longitud="+longitud;
        //$("#mod_iconSports .tit_widget").html(divVacio+" Results for SPORTS Smart Search: ");
        $("#mod_iconVideo").addClass("visible");
    }


    $("div.visible .content_widget").html( preload);
    $.ajax({
          url: link,
          context: document.body,
          timeout:8000,
          error: function(x, t, m) {
              if(t==="timeout") {
                  $("div.visible .content_widget").html(noresult);
              } else {
                 
              }
         }
    }).done(function(data) { 
       $(" div.visible .content_widget").html(data);
	  // $(" div.visible .playerContainer").html(data);
       $(".jspContainer").height("100%");
    });
}
function santanderOesteClick()
{
    coordenadas = new google.maps.LatLng(43.466127,-3.834664);
    map.panTo(coordenadas);

    if ($(".active").length==0)
        $(".icon_menuSidebar #iconCity").parent().addClass("active");
    if (activo != ""  && $(".active").lenght==1 )
    {
        $("#"+activo)[0].parentNode.className =  $("#"+activo)[0].parentNode.className + " active ";

    }


    $(".modulo_widget").removeClass("visible");
    if($(".active #iconSports").length!=1)
    {
        $("#iconCity")[0].parentNode.className =  $("#iconCity")[0].parentNode.className + " active ";
        link="ws/lateral.php?sector=oeste";
        $("#mod_iconCity .tit_widget").html(divVacio+" Results for CITY Smart Search in Plaza del Ayuntamiento");
        $("#mod_iconCity").addClass("visible");
    }
    else
    {
        link="ws/deportes.php?sector=oeste";
        $("#iconSports")[0].parentNode.className =  $("#iconSports")[0].parentNode.className + " active ";
        $("#mod_iconSports .tit_widget").html(divVacio+" Results for SPORTS Smart Search: ");
         $("#mod_iconSports").addClass("visible");
    }

    $("div.visible .content_widget").html( preload);
    $.ajax({
url: link,
        context: document.body,
        timeout:8000,
        error: function(x, t, m) {
            if(t==="timeout") {
                $("div.visible .content_widget").html(noresult);
            } else {

            }
        }                                         
    }).done(function(data) {
        $("div.visible .content_widget").html(data);
        $(".jspContainer").height("100%");
    });
}

function santanderEsteClickprueba()
{
    setTimeout(santanderEsteClick,0);
}
    
function poligonos()
{
      var poligonoEste = [
              new google.maps.LatLng(43.46587409009197, -3.763767878353974),
              new google.maps.LatLng(43.460703420456376, -3.8030783336762397),
              new google.maps.LatLng(43.49078677846986,-3.8198153179291694),
              new google.maps.LatLng(43.493201378620434,-3.780247370541474)]
     var poligonoOeste  =  [
     new google.maps.LatLng(43.460703420456376, -3.8030783336762397),
     new google.maps.LatLng(43.49078677846986, -3.8198153179291694),
     new google.maps.LatLng(43.476324829031434,-3.875433604061982),
     new google.maps.LatLng(43.41344780750694,-3.8244501751069038)]
     santanderEste =new google.maps.Polygon({
        paths: poligonoEste,
    strokeColor: "#FF0000",
    strokeOpacity: 0.1,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.1
      });
      santanderOeste =new google.maps.Polygon({
                 paths: poligonoOeste,
                       strokeColor: "#AAF0D1",
                       strokeOpacity: 0.2,
                       strokeWeight: 2,
                       fillColor: "#AAF0D1",
                       fillOpacity: 0.2
               });


 /* santanderEstePoint = new google.maps.Marker({
      position: new google.maps.LatLng(43.472356,-3.793079),
      title: 'Avenida Reina Victoria'
  });

  santanderOestePoint = new google.maps.Marker({
      position: new google.maps.LatLng(43.466127,-3.834664),
      title: 'Plaza del Ayuntamiento'
  });

    santanderEstePoint.setMap(map);
    santanderOestePoint.setMap(map);
    google.maps.event.addListener(santanderEstePoint, 'click', santanderEsteClick);
    google.maps.event.addListener(santanderOestePoint, 'click', santanderOesteClick);*/
}
$(document).ready(function ()
        {
            $("#lupa").keypress(function(event)
                {
                    if (event.keyCode==13)
                    {
                        if ($("li.active").length>0)
                          {
                              activo=$("li.active")[0].children[0].attributes[0].value;
                              $("li.active").removeClass("active");
                          }
                       
                          $(".modulo_widget").removeClass("visible");
                          $("div.visible .content_widget").html( preload);
                          $("#mod_iconEvents").addClass("visible");
                          $("#mod_iconEvents .tit_widget").html(divVacio+"Result for : "+$("#lupa")[0].value);
                          $.ajax({
                                url: "ws/lateral.php?query=" + $("#lupa")[0].value ,
                                context: document.body ,
                               timeout:8000,
                              error: function(x, t, m) {
                                  if(t==="timeout") {
                                      $("div.visible .content_widget").html(noresult);
                                  } else {

                                  }
                              }
                          }).done(function(data) {
                               $("div.visible .content_widget").html(data);
                          });

                  }
                });
        });


