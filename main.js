canvas=document.getElementById("Mycanvas");
ctx=canvas.getContext("2d");
colour="black";
widthofline=1;
var colour;
var radius;
var width;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
current_position_of_mouse_x=e.clientx-canvasoffsetLeft;
current_position_of_mouse_y=e.clientx-canvasoffsetTop;
if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctxmoveTo(last_position_o_x,last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke()
}
last_position_of_x=current_position_of_mouse_x;
last_position_of_y=current_position_of_mouse_y;
}