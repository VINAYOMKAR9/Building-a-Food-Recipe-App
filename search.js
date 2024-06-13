import navbar from './navbar.js'

let searchByName = document.querySelector('#searchByName')
let subtn = document.querySelector('#sub')
let navbarbox = document.querySelector('#navbar')
let container = document.querySelector('#container')
navbarbox.innerHTML=navbar()

subtn.addEventListener('click',()=>{
    let searchvalue=searchByName.value
    // console.log(searchvalue);
    getData(url,searchvalue);
})










let url='https://www.themealdb.com/api/json/v1/1/search.php?s='

async function getData(url,searchvalue){
    try{

        let res = await fetch(`${url}${searchvalue}`)
    let data= await res.json()
console.log(data.meals);
displayData(data.meals)
}
catch(err){
    console.log('err in code');
}
}

function displayData(data){
    container.innerHTML=null
    data.map((el,ind)=>{
        let card = document.createElement('div')
        card.setAttribute('id','card')
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