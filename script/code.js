document.addEventListener('mousemove', function(e){

    let rainbowImages = [
    '<img src="images/cursor/cursorRed.png">', 
    '<img src="images/cursor/cursorYellow.png">',
    '<img src="images/cursor/cursorBlue.png">',
    '<img src="images/cursor/cursorGreen.png">']

    let body = document.querySelector('body');
    let rainbow = document.createElement('span');
    let x = e.pageX;
    let y = e.pageY;

    rainbow.style.left = x+'px';
    rainbow.style.top = y+'px';

    let icon = rainbowImages[Math.floor(Math.random() * rainbowImages.length)];
    rainbow.innerHTML = icon;



    body.appendChild(rainbow);

    setTimeout(function(){
        rainbow.remove();
    }, 200)
})