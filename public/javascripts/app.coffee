$(document).ready ->
  p = Raphael 0,0,'100%','100%'
  rec = p.rect 0,0,'100%','100%'
    .attr 'fill':'#ccc'

  header = p.rect 0,0,'100%',35
    .attr 'fill':'90-#aaa-#eee','stroke-width':0

  header.glow()# color:'#000',width:100

  c = p.circle 200,200,150
  c.glow()

  r = p.rect 200,500,'100%',100
    .attr 'fill':'90-#aaa-#eee','stroke-width':0
  r.glow()
  null