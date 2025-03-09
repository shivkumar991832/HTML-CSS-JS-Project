// math.random method to generte number

// console.log(Math.random() + 100)







// function ko upper define kiya jata hai
// const mycolorGen = () =>{
//     let red = Math.floor(Math.random()*256);
//     let green = Math.floor(Math.random()* 256);
//     let blue = Math.floor(Math.random() * 256);
  
//     let colorMyBox = document.querySelector('#colorBox')
//     colorMyBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

//     let h1tag = document.querySelector("#text")
//     // h1tag.innerHTML = `rgb(${red}, ${green}, ${blue})`
//     h1tag.innerHTML = `rgb(${red}, ${green}, ${blue})`







const mycolorGen = () =>{
    // we need generate 6 digit including char
    let str = "0123456789ABCDEF"
    let color = "";


    console.log(color)
     
    for( let i = 0; i<6; i++ ){ 
    let index = Math.floor(Math.random() * str.length);
    let ltr = str.charAt(index)
    color += ltr;

    }





    let red = Math.floor(Math.random()*16);
    let green = Math.floor(Math.random()* 16);
    let blue = Math.floor(Math.random() * 16);
  
    let colorMyBox = document.querySelector('#colorBox')
    colorMyBox.style.backgroundColor = `#${color}`;

    let h1tag = document.querySelector("#text")
    h1tag.innerHTML = `#${color}`
}


let button = document.querySelector("#btn");
button.addEventListener( "click" ,mycolorGen);
window.addEventListener('load', mycolorGen)




