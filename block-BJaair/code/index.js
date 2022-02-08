let div= document.querySelector(`div`)
let form=document.querySelector(`form`)

let dataStore= JSON.parse(localStorage.getItem('cards'))||[];

form.addEventListener(`submit`,(event)=>{
event.preventDefault();
let title=event.target.firstElementChild.value;
let category= event.firstElementChild.nextElementSibling.value;
dataStore.push({title,category});

})