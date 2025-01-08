let np = document.getElementById('np')
let resultat= document.getElementById('resultat')
function est_premier(nombre){
    if(nombre == 2 || nombre ==3){
        return true;
    }

    if (nombre == 1) {
        return false; 
    }

for (let i = 2 ; i <= nombre - 1; i++) {
    if (nombre % i == 0) {
        return false; // Ce n'est pas un nombre premier
    }
}
    return true;
}
np.addEventListener('submit',
    function(e){
    e.preventDefault()
// Afficher les nombres premiers entre 1 et 100
let premiers = "";
for (let j = 1; j <= 100; j++) {
    if ( est_premier(j) == true) {
        premiers += j+' ';
        resultat.textContent =  premiers;
    }
}
})


let ft = document.getElementById('ft')
let input2= document.getElementById('input2')
let resultat2 = document.getElementById('resultat2')

ft.addEventListener('submit',
    function(e){
        e.preventDefault()
        let a = '';
        for (let i = 1; i <= input2.value; i++){
            if (input2.value % i == 0){
                a += i +' '
                resultat2.textContent =" les facteurs sont :" +a
            }
        }

    } )




let nbp = document.getElementById('nbp');
let input3= document.getElementById('input3');
let resultat3 = document.getElementById('resultat3');
let somme = 0;
let compteur = 0;
nbp.addEventListener('submit',
    function(e){
        e.preventDefault()
        do{
            let note = parseInt(input3.value);

            if(note >= 0){
                somme += note;
                compteur++;
            }
            else{
                resultat3.textContent = "la moyenne des entiers saisis est: " + somme/compteur;
            }
        }while(note >= 0)
    } )





    let tr = document.getElementById('tr')
    let input4= document.getElementById('input4')
    let resultat4 = document.getElementById('resultat4')
    let height = 5; 
    
    tr.addEventListener('submit',
        function(e){
            e.preventDefault()
            let row = "";
        for (let i = 0 ; i <= height; i++) {
            for (let j =  0; j <= i; j++) {
                if(i % 2 == 0){
                    row += "*";
                    resultat4.innerHTML = row
                }
            }
            row += "<br>";
        }
}
)