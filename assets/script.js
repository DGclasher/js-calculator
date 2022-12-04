const display = document.querySelector("#display")
const btns = document.querySelectorAll("button")

btns.forEach((item)=>{
    item.onclick = () => {
        if(item.id=="clear"){
            display.innerText = "";
        }
        else if(item.id=="backspace"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length-1);
        }
        else if(item.id == "equal" && display.innerText!=""){
            let value = eval(display.innerText);
            display.innerText = value;
            // console.log(value);
        }
        else if(item.id=="equal" && display.innerText==""){
            display.innerText = "Empty!";
        }
        else{
            display.innerText += item.id;
        }
    }
})