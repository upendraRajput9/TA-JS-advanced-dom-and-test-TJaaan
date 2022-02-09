let ul= document.querySelector(`ul`);
max=3
index=0
   function showScroll(){
   for(let i=0;i<max;i++){
        let li = document.createElement(`li`)
        let p = document.createElement(`p`)
        let small=document.createElement(`small`)
        p.innerText=quotes[index].quoteText
        small.innerText=quotes[index].quoteAuthor
        li.append(p,small)
        ul.append(li)
        index++
     }
    }
   
   showScroll()

   document.addEventListener('scroll', ()=>{
       let scrollTop=document.documentElement.scrollTop;
       let scrollHeight=document.documentElement.scrollHeight;
       let clientHeight=document.documentElement.clientHeight;
       if(scrollTop+clientHeight>=scrollHeight&&index<quotes.length){
        showScroll()
       }
   })

