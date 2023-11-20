let cor_botao = () => {

    let x = document.querySelectorAll("button");
    
    for (i = 0; i < x.length; i++){
        if (i % 2 == 0){
            x[i].style.backgroundColor = "#fff3d1";
        }
        else{
            x[i].style.backgroundColor = "#ffd1e3";
        }
    }
}
document.addEventListener("DOMContentLoaded", cor_botao); //DOMContentLoaded carregar a pagina

document.addEventListener("click", myFunction); //usei a função como parâmetro para ficar mais claro

function myFunction() {
  alert ("Seu novo animalzinho ficará feliz de ter um novo lar =)");
}

