

//BUTTONS
const navButton = document.querySelectorAll('nav a');
const btn1 = document.querySelector('.btn:nth-type(1)');
const btn2 = document.querySelector('.btn:nth-type(2)');
const btn3 = document.querySelector('.btn:nth-type(3)');

/*EVENTS*/
//Event1
function mouseNav() {
    target.style.color = 'yellow';
}
navButton.addEventListener('mouseover', mouseNav)
//Event2
btn1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'orange';
   })
//Event3
btn2.addEventListener('mouseenter', e => {
    btn2.style.border = '5px dotted orange';
     e.target.style.backgroundColor = 'green';
   });
//Event4
   btn2.addEventListener('mouseleave', e => {
    btn2.style.border = '3px solid black';
    e.target.style.backgroundColor = 'white';
  });
   //Event5
   function escKey(event) {
    if (event.key === 'Escape') {
        modal.classList.add('off');
    }
}
   //Event6
   btn3.onclick = function(event) {
    console.log("But what happened to the other guy...");
}
   //Event7
   btn3.addEventListener('dblclick', function (e) {
    btn3.classList.toggle('large');
  });
   //Event8
   btn3.addEventListener('mousemove', e => {
    if (isDrawing === true) {
      drawLine(context, x, y, e.offsetX, e.offsetY);
      x = e.offsetX;
      y = e.offsetY;
    }
  });
   //Event9
   btn1.addEventListener("mouseout", function( event ) {
    event.target.style.color = "pink";
   //Event10

   btn3.addEventListener('keyup', logKey);
  }

   /*Cancel Events*/
   btn2.addEventListener('click', (event) => { event.stopPropagation() };

   Array.from(document.links).forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
    })
})