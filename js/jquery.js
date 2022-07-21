$(document).ready(function () {
    $(".intro h1").fadeIn(2000, function () {
        $(".intro p").fadeIn(2500, function () {
            $(".intro button").fadeIn(3000)
        });
    });
    $(".intro button").click(function () {
        $(".intro").fadeOut(function () {
            $(".container").fadeIn()
        });
    });
});
// 
let prog=document.querySelector('progress')

prog.onclick=function(){
  this.value= "50"
}