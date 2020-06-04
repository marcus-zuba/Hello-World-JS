//Testando a ideia de pegar o scroll do mouse e trabalhar com ele (Página dinamica conforme vai rolando a tela)

window.addEventListener("scroll", function(evt){
  var scroll = this.scrollY;
  // console.log(scroll);
  $imagem = $('#imagem');
  let opacity = $imagem.css('opacity');
  opacity = parseFloat(opacity);
  opacity=opacity+0.1;
  console.log(opacity);
  $imagem.css('opacity',opacity);
});
