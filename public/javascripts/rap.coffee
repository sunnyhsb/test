$(document).ready ->
  p = Raphael 0,0,'100%','100%'
  p.setViewBox(0,0,w,h,true)
  p.setSize('100%','100%')
  head_ref = $('#header')
  header = p.rect 0,0,head_ref.width(),head_ref.height()
    .attr 'fill':'#f00','stroke-width':5,'stroke':'#0f0'