let age =document.getElementById('age')
let input =document.getElementById('input')
let resultat =document.getElementById('resultat')

age.addEventListener('submit',
    function(e){
        e.preventDefault()
        if(input.value<18){
            resultat.textContent = "Vous  êtes mineur."
        }
    else{
    resultat.textContent = "Vous  êtes majeur   ."
    }

}
)

let saisir = document.getElementById('saisir')
let input2 = document.getElementById('input2')
let resultat2 = document.getElementById('resultat2')

saisir.addEventListener('submit',
    function(e){
        e.preventDefault()
        if(input2.value % 2 == 0){
            resultat2.textContent ="le nombre est pair."
        }
        else{
            resultat2.textContent ="le nombre est impair." 
        } 
    }
)

let mois = document.getElementById('mois')
let input3 = document.getElementById('input3')
let resultat3 =document.getElementById('resultat3')

mois.addEventListener('submit',
    function(e){
        e.preventDefault()
        
switch(parseInt(input3.value)){
    case 1:
    resultat3.textContent = "janvier"
    break;
    case 2:
    resultat3.textContent = "fevrier"
    break;
    case 3:
    resultat3.textContent = "mars"
    break;
    case 4:
    resultat3.textContent = "avril"
    break;
    case 5:
    resultat3.textContent = "mais"
    break;
    case 6:
        resultat3.textContent = "juin"
        break;
        case 7:
        resultat3.textContent = "juillet"
        break;
        case 8:
            resultat3.textContent = "aout"
            break;
            case 9:
                resultat3.textContent = "septembre"
                break;
                case 10:
                    resultat3.textContent = "octobre"
                    break;
                    case 11:
                        resultat3.textContent = "novembre"
                        break;
                        case 12:
                            resultat3.textContent = "decembre"
                            break;
                            default:
                                resultat3.textContent = "ce mois n'exsite pas. veuilles choisir entre 1 et 12 svp"
                                break;
}
}
)