function drawImage(){
  var sampleImage = 'img/samplecolours.jpg';

  // get the canvas element
  var canvas = document.getElementById('image-canvas');
  var ctx = canvas.getContext('2d');

   // Draw shapes
   var img = new Image();
   img.src = sampleImage;
   
   img.onload = function() {
      ctx.drawImage(img,0,0);
   }
}