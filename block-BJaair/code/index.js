let ul= document.querySelector(`ul`)
let form=document.querySelector(`form`)

let cardsData= JSON.parse(localStorage.getItem('cards'))||[];
cardsData=cardsData.filter((elm)=>elm.title!==""&&elm.category!=="")

form.addEventListener(`submit`,(event)=>{
event.preventDefault();
let title=event.target.elements.title.value;
let category= event.target.elements.category.value;
cardsData.push({title,category});
localStorage.setItem(`cards`,JSON.stringify(cardsData))
cardUI(cardsData,ul)
event.target.elements.title.value="";
event.target.elements.category.value="";
})
function handleEdit(event,info,id,label){
let elm = event.target;
let input = document.createElement(`input`)
input.value=info

input.addEventListener(`keyup`,(e)=>{
    if(e.keyCode===13){
        let updatedValue=e.target.value;
        cardsData[id][label]=updatedValue;
        console.log(updatedValue)
        localStorage.setItem(`cards`,JSON.stringify(cardsData))
        cardUI()
    }
});

input.addEventListener(`blur`,(e)=>{
   
        let updatedValue=e.target.value;
        cardsData[id][label]=updatedValue;
        console.log(updatedValue)
        localStorage.setItem(`cards`,JSON.stringify(cardsData))
        cardUI()
    
})


let parent= event.target.parentElement;
parent.replaceChild(input,elm)
}

function cardUI(data=cardsData,root=ul){
    root.innerHTML=" ";
    let fragment=new DocumentFragment();
data.forEach((cardInfo,index)=>{
    let li =document.createElement(`li`);
    let p =document.createElement(`p`);
    p.innerText=cardInfo.category
    p.addEventListener(`dblclick`,(event)=>handleEdit(event,cardInfo.category,index,`category`))
    let h2=document.createElement(`h2`)
    h2.innerText=cardInfo.title
    
    h2.addEventListener(`dblclick`,(event)=>handleEdit(event,cardInfo.title,index,`title`))
    li.append(p,h2);
    fragment.appendChild(li);
})
root.append(fragment)
}
cardUI(cardsData,ul)