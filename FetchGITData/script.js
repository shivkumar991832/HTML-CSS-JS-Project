
let gitinfo = document.querySelector(".git-info")


const fetchGitData = async (users)=>{
   let response= await fetch(`https://api.github.com/users/${users}`)
   let gitData = await response.json();
   console.log(gitData);


   if(gitData.id){

   gitinfo.style.display = "block"

   let pic = document.querySelector('#img')
   pic.src = `${gitData.avatar_url}`
      
     
   let name = document.querySelector('.name')
      name.innerHTML =  `Name: ${gitData.name} `
      let bio = document.querySelector(".bio")
      bio.innerHTML = `Bio: ${gitData.bio} `
      let location = document.querySelector('.location')
      location.innerHTML = `Location: ${gitData.location}` 
     

   } else {
      gitinfo.style.display = 'none';
      document.querySelector('#error').innerHTML = `GitData not found`;
     
   }


 }
  

   
let btn = document.querySelector('#btn')
btn.addEventListener("click", (e)=>{ 
   e.preventDefault();
   let gitName = document.querySelector("#git-name").value
   fetchGitData(gitName)
} )


