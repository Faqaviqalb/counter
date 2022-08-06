let counter = 0;
let value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach( (btn) =>{
    btn.addEventListener( "click" , (element)=>{
        const styles = element.currentTarget.classList;
        if (styles.contains("decrease") ){
            counter--;
        }
        else if(styles.contains("increase")){
            counter++;
        }
        else{
            counter=0;
        }
        value.textContent = counter;
        if(counter>0){
            value.style.color='green';
        }
        else if(counter<0){
            value.style.color = 'red';
        }
        else{
            value.style.color = 'black';
        }

    })
    
    
})