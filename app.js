// Imported Images in a Array by giving complete url
var imges = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png', 'img/6.png', 'img/7.png', 'img/8.png'];

var landing_page = "https://clientefavoritofordsp.com/?utm_source=NBids&utm_medium=bannerinterativo&utm_campaign=ABRADIF_Junho"

var output = document.getElementById('output');

openfile(imges[0]);
//APICall("impression");

// adding Event Listener
document.getElementById("output").addEventListener('click', function() {
                    //console.log('Click');
                    clickpattern();});



// Opening a  file
function openfile(filepath){
    output.src = filepath;
    //console.log("Current Img URL = ", output.src);
};

// click count but it refreshes again as per page loads
function APICall(n){
  // console.log(n,"no")
  var x =JSON.stringify({ key:n})
  fetch('https://demo.infuseads.com:8081/core/key-count/?id=2', {
    method: 'POST',
    body: x,
    headers: {
      'Content-type':  'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      return response.json();
      // alert("Asd")
    }
    return Promise.reject(response);
  }).then(function (data) {
    console.log(data);
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });

};

window.onload = function(){
  var x =JSON.stringify({ key:"impression"})
  fetch('https://demo.infuseads.com:8081/core/key-count/?id=2', {
    method: 'POST',
    body: x,
    headers: {
      'Content-type':  'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      return response.json();
      // alert("Asd")
    }
    return Promise.reject(response);
  }).then(function (data) {
    console.log(data,"ddddddddddddddddddddddd");
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });
}

function pg2func(op){

    var blue = document.getElementById("blue");
    blue.style = "position: absolute;top: 293px;left: 241px;height: 66px;background: transparent;width: 70px;border-radius: 2%;border: 1px solid transparent;";
    blue.onclick= function(){APICall("page2leftkey1"); op.src = imges[1];};

    var red = document.getElementById("red");
    red.style = "position: absolute;top: 293px;left: 310px;height: 66px;background: transparent;width: 67px;border-radius: 2%;border: 1px solid transparent;";
    red.onclick= function(){APICall("page2leftkey2"); op.src = imges[2];};

    var black = document.getElementById("black");
    black.style = "position: absolute;top: 293px;left: 375px;height: 66px;background: transparent;width: 70px;border-radius: 2%;border: 1px solid transparent;";
    black.onclick= function(){APICall("page2leftkey3"); op.src = imges[3];};

    var maroon = document.getElementById("maroon");
    maroon.style = "position: absolute;top: 293px;left: 442px;height: 66px;background: transparent;width: 66px;border-radius: 2%;border: 1px solid transparent;";
    maroon.onclick= function(){APICall("page2rightkey1"); op.src = imges[4];};

    var darkgrey = document.getElementById("darkgrey");
    darkgrey.style = "position: absolute;top: 293px;left: 510px;height: 66px;background: transparent;width: 65px;border-radius: 2%;border: 1px solid transparent;";
    darkgrey.onclick= function(){APICall("page2rightkey2"); op.src = imges[5];};

    var white = document.getElementById("white");
    white.style = "position: absolute;top: 293px;left: 575px;height: 66px;background: transparent;width: 67px;border-radius: 2%;border: 1px solid transparent;";
    white.onclick= function(){APICall("page2rightkey3"); op.src = imges[6];};

    var grey = document.getElementById("grey");
    grey.style = "position: absolute;top: 293px;left: 640px;height: 66px;background: transparent;width: 70px;border-radius: 2%;border: 1px solid transparent;";
    grey.onclick= function(){APICall("page4"); op.src = imges[7];};

    var knowmore = document.getElementById("knowmore");
    knowmore.style = "position: absolute;top: 710px;left: 513px;height: 65px;background: transparent;width: 220px;border-radius: 2%;border: 1px solid transparent;";
    knowmore.onclick= function(){APICall("page3"); window.open(landing_page)};
};

// Clicking of Images
function clickpattern(){
    var op = document.getElementById('output');
    op.onmousedown = GetCoordinates;

    if (op.src.search('1.png') > -1)
    {
        op.src = imges[1];
        APICall("page1");
        pg2func(op);
    }
    else if (op.src.search('2.png') > -1)
    {
        pg2func(op);
    }
};


function FindPosition(oElement){
  if(typeof( oElement.offsetParent ) != "undefined")
  {
    for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
    {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
      return [ posX, posY ];
    }
    else
    {
      return [ oElement.x, oElement.y ];
    }
};

//Getting a Co-ordinates of Mouse click
function GetCoordinates(e){

  var PosX = 0;
  var PosY = 0;
  var ImgPos;
  ImgPos = FindPosition(output);

  if (!e) var e = window.event;
  if (e.pageX || e.pageY)
  {
    PosX = e.pageX;
    PosY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      PosX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      PosY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
  PosX = PosX - ImgPos[0];
  PosY = PosY - ImgPos[1];
  //document.getElementById("x").innerHTML = PosX;
  //document.getElementById("y").innerHTML = PosY;
  return (PosX, PosY);
};