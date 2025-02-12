// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Investigar bien todo antes de comenzar con el desafío

let arrayAmigos = []; // Array que contiene a los amigos 
let txtAmigo = document.getElementById("amigo"); // Tomamos el amigo del campo txt


function agregarAmigo(nombreAmigo) {


    nombreAmigo = txtAmigo.value

    if (nombreAmigo === "") {

        alert("Debe ingresar un nombre valido");
        document.getElementById("amigo").focus();
    } else {

        arrayAmigos.push(nombreAmigo);
        listaAmigos.innerHTML += `<li>${nombreAmigo}</li>`;


        alert(`Agregado ${nombreAmigo} ahora el array contiene ${arrayAmigos} `);



        txtAmigo.value = ""; // Borro el contenido del txt
        document.getElementById("amigo").focus();


    }
}

function sortearAmigo() {

    maxNum = arrayAmigos.length;


    let elegido = Math.floor(Math.random() * arrayAmigos.length); //Math.floor(Math.random(maxNum)*10  +1);
    alert(`El numero maximo es ${maxNum} y el random es ${elegido} y el nombre es ${arrayAmigos[elegido]} `);



    
}




//document.getElementById("listaAmigos").textContent("tololo");

/*for (let i = 0; i < arrayAmigos.length; i++) {

        listaAmigos.innerHTML += `<li></li>`;
        listaAmigos.innerHTML += `<li>${arrayAmigos[i]}</li>`;
      }
    
    }*/