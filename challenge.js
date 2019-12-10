const counter = document.querySelector('#counter');
// this function setInterval sets interval 1000ms is 1 second, increment is
let interval = setInterval( increment, 1000); 
const minus = document.querySelector('button#minus');
const plus = document.querySelector('button#plus');
const heart = document.querySelector('button#heart'); 
let totalLikes = 0;
const pause = document.querySelector('#pause')
const commentForm = document.querySelector('form')

  let isPaused = false;

function increment(){
    if(!isPaused){
        counter.innerHTML =+ parseInt(counter.innerText) + 1;
    }
}
function dicremnt(){
    counter.innerHTML = parseInt(counter.innerText) - 1;
}

document.addEventListener("DOMContentLoaded", function() {
    interval
  });

  minus.addEventListener('click', e=>{
    dicremnt();
  })

  plus.addEventListener('click', e=>{
    increment();
  })

  likes = document.querySelector(".likes")
  let li = document.createElement('li')
  likes.appendChild(li)
  li.style.display= 'none'
  heart.addEventListener('click', e=>{
    totalLikes++
    li.style.display = 'block'
    li.innerHTML = `${totalLikes} have been liked`
  })


  pause.addEventListener('click', e=>{
      if(pause.innerHTML === "pause"){

          e.preventDefault();
          isPaused= true;
          minus.disabled = true;
          plus.disabled = true;
          heart.disabled = true;
          pause.innerHTML = 'resume'
      }else{
        isPaused= false;
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        pause.innerHTML = 'pause'
      }
  })

  commentForm.addEventListener('submit', e=>{
      e.preventDefault();
      let value = commentForm.children[0].value

    const d=document.querySelector(".comments"),
            p=document.createElement("p");
            
            p.innerText=value,d.appendChild(p)
  })