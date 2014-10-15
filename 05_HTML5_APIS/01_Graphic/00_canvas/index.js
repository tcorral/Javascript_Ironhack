/**
 * http://www.tutorialspoint.com/html5/html5_canvas.htm
 * <!DOCTYPE HTML>
 * <html>
 *   <head>
 *     <style>
 *       #mycanvas{
 *          border:1px solid red;
 *       }
 *     </style>
 *   </head>
 *   <body>
 *      <canvas id="mycanvas" width="100" height="100"></canvas>
 *   </body>
 * </html>
 */
var canvas = document.getElementById("board");
var context = canvas.getContext("2d");

canvas.addEventListener("touchstart", callbackOnTouchStart, false);
canvas.addEventListener("touchmove", callbackOnTouchMove, false);
canvas.addEventListener("touchend", callbackOnTouchEnd, false);
canvas.addEventListener("touchcancel", callbackOnTouchCancel, false);

var hero = document.getElementById("hero");
context.drawImage(hero, direction * tileSize, 0, tileSize, tileSize, x, y, tileSize, tileSize);