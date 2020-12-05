canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=100;
background_image="mars.jpg";
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add(){
    background_image1=new Image();
    background_image1.onload=uploadbackground;
    background_image1.src=background_image;
    background_image2=new Image();
    background_image2.onload=uploadrover;
    background_image2.src=rover_image;

}
function uploadbackground(){
    ctx.drawImage(background_image1,0,0,canvas.width,canvas.height);
}


