const input = document.querySelector("#input")


function display(callback){
    input.value += callback
}

function calculate(){
    try{
        input.value = eval(input.value)
    }catch(error){
        input.value = "error"

    }
}

function wipe(){
    input.value = ""
}