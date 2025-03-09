let form = document.querySelector('#form')
form.addEventListener("submit", (e) =>{
    e.preventDefault()

    let height = Number(document.querySelector('#height').value)
    console.log(height)

    let weight = Number(document.querySelector('#weight').value)
    console.log(weight)

    let res = 703* (weight / ( Math.pow(height, 2)/100));
    let bmi = res.toFixed(2);
    console.log(res)

    let result = document.querySelector('#res')    

    if( bmi <= 18.5){
        result.innerHTML = `Your BMI is ${bmi} & Your Under Weight`
        result.style.color = "blue"
    }else if ( bmi>18.5 && bmi <=24.9 ){
        result.innerHTML = `Your BMI is ${bmi} & Your Normal Weight`
         result.style.color = "green"
       
    }else if (bmi > 25 && bmi <= 29.9){
          result.innerHTML = `Your BMI is ${bmi} & your Overweight`
           result.style.color = "red"
    }else{
         result.innerHTML = `Your BMI is ${bmi} & Your Obese`
          result.style.color = "red"
        
    }


    // jab sara kam ho jaye input ko empy kardo

    document.querySelector('#height').value = ""
    document.querySelector('#weight').value = ""
} )







