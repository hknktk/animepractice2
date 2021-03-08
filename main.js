{
  let section = document.querySelector('section');
  let text = document.querySelector('.text');
  let innerText = document.querySelector('.innerText');
  window.addEventListener('scroll',function(){
    let value = window.scrollY;
    section.style.clipPath = "circle("+value*2+"px at center center)";
    text.style.left = 70 - value/2 + "%";
    text.style.opacity = 0 + value/150 ;
    innerText.style.left = 70 - value/2 + "%";
    innerText.style.opacity = 0 + value/150 ;
  })
}