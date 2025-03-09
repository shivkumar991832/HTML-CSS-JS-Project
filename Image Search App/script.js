let inputBox = document.querySelector(".input");
let btn = document.querySelector(".btn");
let searchRes = document.querySelector(".search-result");
let imageBox = document.querySelector(".box");
let showmorebtn = document.querySelector(".show-more-btn")
let description = document.querySelector(".desc")


let page = 1;

const searchImageFun = async (name)=>{
    let response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${name}&client_id=nROIKEwuPU8CFpFkHv35-3ZUDhcURiwpnqOl7fhGSLk&per_page=12`)
    let data = await response.json(); 

    let arrayImage = data.results;
    console.log(arrayImage)

    if(page == 1){
      searchRes.innerHTML = "";
    }

    
    
  
//    arrayImage.forEach((element)=>{
//        let divElement = document.createElement("div");
//        divElement.classList.add("search-result");
//        console.log(divElement)

//        divElement.innerHTML = ` <div class="box">
//        <img class="img" src=${element.urls.small} alt="">
//        <div class="des">${element.alt_description}</div>
//        </div>`


//        searchRes.appendChild(divElement);
//    });
   

arrayImage.forEach((element)=>{
   let createImg = document.createElement("img") 
   createImg.src = element.urls.small
   let div = document.createElement("div")
   div.classList.add("desc")
   div.innerHTML = element.alt_description
   console.log(div)
   console.log(createImg)

   searchRes.appendChild(createImg)
   
   searchRes.appendChild(div)
  

 
  
});

showmorebtn.style.display = "block";


 
};



let form = document.querySelector("#form")
form.addEventListener('submit', (e)=>{
    e.preventDefault();
 let imageBox = inputBox.value
    searchImageFun(imageBox)

})


showmorebtn.addEventListener("click", (e)=>{
  e.preventDefault()
  page++;
  let imageBox = inputBox.value
 
  searchImageFun(imageBox);
})




