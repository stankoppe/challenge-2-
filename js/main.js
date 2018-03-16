function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;

  t = setTimeout(function() {
    startTime()
  }, 500);


  if (h == 7){
    document.body.style.background = "url('sunset-3219318_1920.jpg')"; //sunrise
    document.getElementById("demo").innerHTML = "De zon komt nu op";
  }
  else if (h == 9){
    document.body.style.background = "url('alarm-clock-1191561_1920.jpg')"; //wakey wakey
    document.getElementById("demo").innerHTML = "Het is nu tijd om op te staan";

  }
  else if (h == 19){
    document.body.style.background = "url('sunset-3220635_1920.jpg')"; //sunset
    document.getElementById("demo").innerHTML = "De zon gaat nu onder";
  }
  else {
    document.body.style.background = "url('red-planet-571902_1920.jpg')"; //al het overige
  }


}
startTime();
