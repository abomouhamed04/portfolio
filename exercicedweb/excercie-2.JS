let fo =document.getElementById('fo')
let input = document.getElementById('input')
let resultat =document.getElementById('resultat')
fo.addEventListener( 'submit',
    function(e){
    e.preventDefault()
    for(let i = 1 ;i <= 10; i++){
resultat.textContent +=i+' '
    }


    }
)

let wh =document.getElementById('wh')
let input2 = document.getElementById('input2')
let resultat2 =document.getElementById('resultat2')
let somme = 0
let i = 1
wh.addEventListener( 'submit',
    function(e){
    e.preventDefault()
    while(i <= 100){
        somme= somme+i
        i++
resultat2.textContent  = "la somme entre 1 est 100 est:"+somme
    }
}
)

let pt =document.getElementById('pt');
let resultat3 =document.getElementById('resultat3');
const nobreMagie = 35;
let input3;
pt.addEventListener( 'submit',
    function(e){
    e.preventDefault()

    do{
        input3 = parseInt(prompt("entrer un nombre"));
        console.log(input3);
        

        if(input3 > nobreMagie){
            alert("plus petit");
        }else if(input3 < nobreMagie){
            alert("plus grand")
        }else{
            alert("vous avez trouve bravo")
            break;
        }

    }while(input3 != nobreMagie);
    
}
)

let fb =document.getElementById('fb')
let input4 = document.getElementById('input4')
let resultat4 =document.getElementById('resultat4')
fb.addEventListener( 'submit',
    function(e){
        let n = 0 ,b = 1 ,c ;
        let affiche = "";
    e.preventDefault()
    for(let i = 0 ;i <= input4.value; i++){
       c = n + b
       b = n
       n = c

       affiche += b + " "
    }
    resultat4.textContent = affiche;
}
)