let form = document.getElementById("form")

let prenom = document.getElementById("firstname")
let nom = document.getElementById("lastname")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let message = document.getElementById("message")

let messEror = document.getElementById("messError")

form.addEventListener("submit", 
    function(e){
        e.preventDefault()
    
    if(prenom.value !== "" && 
        nom.value !== "" && 
        email.value !== "" && 
        phone.value !== "" && 
        message.value !== ""){
        
        
        messEror.innerHTML = "Votre formulaire a ete soumis avec sucee"
        
        
    }else{
    
        messEror.innerHTML = "veuillez remplir tous les champs"

    }
})