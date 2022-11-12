myFunction = function() 
{
    var first = document.getElementById("firstname").value;
    var second = document.getElementById("lastname").value;
    var third = document.getElementById("badgeNumb").value;
    var info = (first+second)
    if (info.length>20) {
      alert("Too many characters!");
    }
    else if (third.length != 3) {
      alert("Invalid Badge Number!")
    }
    else {
    document.getElementById("here").innerHTML = "Login Successful, Welcome, " + first + " " + second + " " + " Badge # " + third;
    document.getElementById("launch").disabled = false;
    }
  if (info =="") 
  {
  alert("Please provide valid credentials");
  }
 
}
  function start() {
    var currTime = 10;
    var i = 1;
    while (i < 12) {
  
  
      if (i == 11) {
        setTimeout(function() {
          //for when countdown reaches its end
          document.getElementById("countdownTimer").innerHTML = "WE <br> HAVE <br> LIFTOFF!!!!!";
        }, 1000 * i);
      } else if (i > 6) { //point of no return
        setTimeout(function() {
          document.getElementById("countdownTimer").innerHTML =
            " Warning Launch Imminent!!" + "<br>" + currTime + " seconds";
          currTime = currTime - 1;
        }, 1000 * i);
      } else {
        setTimeout(function() {
          // original count
          document.getElementById("countdownTimer").innerHTML = "Time Left " + currTime + " seconds";
          currTime = currTime - 1;
        }, 1000 * i);
      }
      i = i + 1;
  
    }
  
  }
  