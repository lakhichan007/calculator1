let display = document.getElementById("display")
let buttons = document.querySelectorAll("button")
let screnvalue = ""
for (ele of buttons) {
    ele.addEventListener("click", (event) => {
        let buttontext = event.target.innerText

        if(buttontext=="="){
            display.value=eval(screnvalue)
        }
        else if (buttontext == "C") {
            screnvalue = ""
            display.value = screnvalue
        }
        else {
            screnvalue += buttontext
            display.value = screnvalue
        }
    })
}