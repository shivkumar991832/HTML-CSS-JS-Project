let modeChanger = document.querySelector(".dark-mode")
let dark = document.querySelector('.dark')
let countrysection = document.querySelector('.country-section')
let body = document.querySelector('body');
const prevbtn = document.querySelector('#prevbtn')
const nextbtn = document.querySelector('#nextbtn')
let scrollup = document.querySelector('.scrollup')




let page = 1;
let pageItem = 16;
// lets create country as global variable
let country = [];
// console.log(country.length)

const getFetchCountryData = async () =>{
  let countryData = await axios.get("https://restcountries.com/v3.1/all")
//   console.log(data)
  country = countryData.data;
  showCountry(country)

// country is a array
}



const showCountry = (myCountry)=>{

let startIndex = (page-1)*pageItem;
let endIndex = page*pageItem;
let items = myCountry.slice(startIndex, endIndex);

items.forEach((element)=>{
  
    let div = document.createElement('div');
    div.classList.add("country-info")
    // console.log(div)
     
   div.innerHTML = `
    <img class="country-img" src=${element.flags.png} alt="">
            <div class="details">
                <div class="country-name">${element.name.common}</div>
                <div class="country-details">
                    <p>Name: <span>${element.name.common}</span> </p>
                    <p>Region: <span>${element.region}</span></p>
                    <p>Capital: <span>${element.capital}</span></p>
            </div>
        </div>`
   
   
              //  console.log(div)
   
      countrysection.appendChild(div)
    
});

};

getFetchCountryData();







nextbtn.addEventListener("click", ()=>{
  let totalPage = Math.ceil(country.length / pageItem);
  console.log(totalPage)
  if(page < totalPage){
    page++;
    showCountry(country);
    console.log(page);
    prevbtn.disabled = false;
  }else{
    prevbtn.disabled = true;
  }
 
})


if(page <= 1){
  prevbtn.disabled = true;
}

prevbtn.addEventListener("click", ()=>{
  if(page > 1 ){
   page--;
   console.log(page)
   showCountry(country)
   prevbtn.disabled = false;
   nextbtn.disabled = false;

   
  }else{
    prevbtn.disabled = true;
  }

})

scrollup.addEventListener("click", ()=>{
 window.scrollTo({top: 0, behavior:"smooth"});
});








modeChanger.addEventListener("click", ()=>{
    if(body.classList.contains('light')){
      body.classList.remove("light")
      body.classList.add('dark')
      modeChanger.innerHTML = `Dark Mode`
      
    }else{
      body.classList.remove("dark")
      body.classList.add('light') 
      modeChanger.innerHTML = `Light Mode`
    }
})
















