let body = document.querySelector("body")

body.addEventListener("mousemove", (e)=>{
   let span = document.createElement('span')
   let size = Math.floor(Math.random()*100)
   span.style.height = `${size}px`
   span.style.width = `${size}px`
   span.style.left = `${e.clientX}px`
   span.style.top =` ${e.clientY}px`
   // clientX and clientY continously change






   body.appendChild(span)
   
})



// for disable right click
// body.addEventListener("contextmenu", (e)=>{
//    e.preventDefault()
// })