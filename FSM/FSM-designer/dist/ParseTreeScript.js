var canvas = document.getElementsByTagName("canvas")[0];
var context = canvas.getContext("2d");
var height = canvas.height = window.innerHeight;
var width = canvas.width = window.innerWidth;
//var mouseClicked = false, mouseReleased = true;
var drawer = 'circle';
var dragging = false;
var dragStartLoc;
var arrowClicked = 0;

document.addEventListener("click", onMouseClick, false);
document.addEventListener("mousemove", onMouseMove, false);

function onMouseClick(e) {
  if (drawer.localeCompare('circle') == 0){
    arrowClicked = 0;
    context.beginPath();
    context.arc(e.clientX, e.clientY-150, 20, 0, Math.PI * 2);
    context.stroke();
  } else if (drawer.localeCompare('dcircle') == 0){
    arrowClicked = 0;
    context.beginPath();
    context.arc(e.clientX, e.clientY-150, 20, 0, Math.PI * 2);
    context.stroke();
    context.beginPath();
    context.arc(e.clientX, e.clientY-150, 25, 0, Math.PI * 2);
    context.stroke();
  }
  else if (drawer.localeCompare('arrow') == 0){
    arrowClicked = 1;
    canvas.addEventListener('mousedown', dragStart, false);
    canvas.addEventListener('mousemove', drag, false);
    canvas.addEventListener('mouseup', dragStop, false);
  }
  else {
        //
    }
}

function drawLine(position) {
  if(arrowClicked == 1){
    context.beginPath();
    context.moveTo(dragStartLoc.x, dragStartLoc.y);
    context.lineTo(position.x, position.y);
    context.stroke();
  }
}

  function onMouseMove(e) {
    // if (mouseClicked) {
    //     context.beginPath();
    //     context.arc(e.clientX, e.clientY, 7.5, 0, Math.PI * 2, false);
    //     context.lineWidth = 5;
    //     context.strokeStyle = "#fff";
    //     context.stroke();
    // }
  }

  function changeDrawer(e){
    drawer = e;
  //alert(drawer);
}

function dragStart(event){
  dragging = true;
  dragStartLoc = getCanvasCoords(event);
}

function drag(event){
  var position;
  if(dragging === true){
    position = getCanvasCoords(event);
  }
}

function dragStop(event){
  dragging = false;
  var position = getCanvasCoords(event);
  drawLine(position);
}

function getCanvasCoords(event){
  var x = event.clientX - canvas.getBoundingClientRect().left;
  var y = event.clientY - canvas.getBoundingClientRect().top;
  return{x: x, y: y};
}
