function desenhaImagens(){
    canvas = document.getElementById("canv");
    ctx = canvas.getContext("2d");
    img = new Image();
    img.src = "img/nave.png";
    img.onload = functioon() {
        ctx.drawImage(img,0,0);
        ctx.drawImage(img,600,0,100,100);
    }
}