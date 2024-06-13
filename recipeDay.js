import navbar from './navbar.js'

let navbarbox = document.querySelector('#navbar')
navbarbox.innerHTML=navbar()


let container = document.querySelector('#containerecipe')


async function getData(){
    try{
    let res = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
    let data= await res.json()
    console.log(data.meals);
    displayData(data.meals)
    }
    catch(err){
    console.log('err in code');
    }
    }
    
    
getData()




function displayData(data){
    //    container.innerHTML=null
       data.map((el,ind)=>{
           let card = document.createElement('div')
           card.setAttribute('id','recipecard')
           let name = document.createElement('h3');
           name.textContent=`Dice Name : ${el.strMeal}`
           
           let id = document.createElement('p');
           id.textContent=`Dice Id : ${el.idMeal}`
           
           
           let type = document.createElement('p');
           type.textContent=`Dice Type : ${el.strCategory}`
           
           
           let instructions = document.createElement('p');
           instructions.textContent=`Dice Instructions : ${el.strInstructions}`
   
           let details = document.createElement('a');
           details.href=el.strSource
           details.textContent=`More details`
   
   
           card.append(name,id,type,instructions,details);
           container.append(card)
   
       })
   }