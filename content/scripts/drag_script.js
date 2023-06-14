
var ims = document.getElementsByClassName('draggable');

for(var i = 0; i < ims.length; i++){
  ims[i].onmousedown = function(e) {
    mousedown(e);
  };


  function mousedown(e){
    var element = e.currentTarget;
    var coords = getCoords(element);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;

    element.style.position = 'absolute';
    document.body.appendChild(element);
    moveAt(e);

    element.style.zIndex = 1000; // над другими элементами

    function moveAt(e) {
      element.style.left = e.pageX - shiftX + 'px';
      element.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
      moveAt(e);
    };

    element.onmouseup = function() {
      document.onmousemove = null;
      element.onmouseup = null;
    };

  }

  ims[i].ondragstart = function() {
    return false;
  };

  function getCoords(elem) {   // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
      top: /*box.top*/elem.y + pageYOffset,
      left: /*box.left*/ elem.x + pageXOffset
    };
  }
}
