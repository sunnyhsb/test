$(document).ready ->
  width = $(window).width()
  height = $(window).height()
  offX = $('.box3').width()/2
  offY = $('.box3').height()/2
  x = width/2
  y = height/2

  paper = Raphael x-offX,y-offY,offX*2,offY*2
  rect = paper.rect 0,0,width,height
              .attr 'stroke-width':0

  hourHand = paper.path "M #{offX} ,#{offY} l150,0 l0,-10 l-150,0 l0,10"
