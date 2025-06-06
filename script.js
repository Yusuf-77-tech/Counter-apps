const countlabel = document.getElementById("count")
let count = 0

function get(){
    count++
    countlabel.textContent = count
    
}

function be(){
    count--
    countlabel.textContent = count
    
}

function me(){
    count = 0
    countlabel.textContent = count
    
}