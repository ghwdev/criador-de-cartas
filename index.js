$(document).ready(function() {
$(".butao").click(function(){

  var vn = $(".nome").val()
$(".nome1").text(vn)

var vd = $(".vidai").val()
$(".vdi").text(vd)

var mn = $(".manai").val()
$(".mni").text(mn)

var hdi = $(".hd").val()
$(".descricao").text(hdi)


var el = $(".elixi").val()
$(".elixi1").text(hdi)

});
});
var imgi =document.getElementById("img")
imgi.addEventListener('change', function(event) {
const file = event.target.files[0];
const objectURL = URL.createObjectURL(file);
var  imgp =document.querySelectorAll(".iagem")
   imgp.forEach(function(element) {
        element.src = objectURL;
    });

})
// Seleciona o botão e a div a ser convertida
document.querySelector(".butao2").addEventListener("click", function() {
  const div = document.querySelector(".carta");

  // Usa html2canvas para capturar a div como imagem
  html2canvas(div).then(canvas => {
    // Converte o canvas para uma imagem em formato JPEG
    const imgData = canvas.toDataURL("image/jpeg");

    // Cria um link temporário para download
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "minha-carta.jpg";  // Nome do arquivo
    link.click();  // Inicia o download da imagem
  });
});
