let ul= document.querySelector(`ul`);

   function showScroll(){
    quotes.forEach(n=>{
        let li = document.createElement(`li`)
        let p = document.createElement(`p`)
        let small=document.createElement(`small`)
        p.innerText=n.quoteText
        small.innerText=n.quoteAuthor
        li.append(p,small)
        ul.append(li)
     })}
   ul.addEventListener('scroll', showScroll)
   showScroll()

