let screen = document.querySelector(".screen");
let keys = document.querySelectorAll(".keys");

let string ="";
let arr = Array.from(keys);
arr.forEach(key=>{
    key.addEventListener("click",(e)=>{
       
        let a = e.target.innerHTML;
        
        if((screen.innerHTML=="0"&&a=="*")||(screen.innerHTML=="0"&&a=="/")||(screen.innerHTML=="0"&&a=="+")||(screen.innerHTML=="0"&&a=="/")){
        }
        else if((screen.innerHTML=="-"&&a=="*")||(screen.innerHTML=="-"&&a=="/")||(screen.innerHTML=="-"&&a=="+")||(screen.innerHTML=="-"&&a=="/")||(screen.innerHTML=="-"&&a=="-")){   
        }
        else if(a=="="){
            let b = eval(string);
            console.log(b)
            screen.innerHTML = b;
            string = b;
        }
        else if(a=="AC"){
            string = ""
            a = 0
            screen.innerHTML = a;
        }
        else if(a=="X"){
            if(screen.innerHTML.length==1){
                screen.innerHTML = "0";
                string ="";
            }else{
                string = screen.innerHTML.slice(0,screen.innerHTML.length-1);
                screen.innerHTML = string; 
            }  
        }
        else if(string.length>12){

        }
        else if(a=="."&&string==""){
            screen.innerHTML = "0.";
            string= "0."
        }
        else if(a=="."){
            if(!string.includes(".")||string.includes("+")||string.includes("-")||string.includes("*")||string.includes("/")){
            string+=a;
            screen.innerHTML=string;
            }
        }
        else{
            string+=a;
            screen.innerHTML=string;
            
        }
        console.log(string);
    })
})
