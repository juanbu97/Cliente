{
    let enlaces;
    let numero = trozos[1];
    let idEnlace = this.id;
    let trozos = idEnlace.split('_');
    
    let muestraOculta = function() {

       
        

        switch (parrafo.style.display) {
            case 'none':
                parrafo.style.display = 'block';
                this.innerHTML = 'Ocultar contenidos';
                break;
            case 'block':
            case '':
                parrafo.style.display = 'none';
                this.innerHTML = 'Mostrar contenidos';
                break;
        }
    }

    let inicia = function () {
        enlaces.getElementsByTagName("a");
        parrafo.getElementById("contenidos_"+numero);
        enlaces.addEventListener("click",muestraOculta);

        for (i in enlaces) {
            enlaces[i].onclick = muestraOculta;
        }
    }

    document.addEventListener("DOMContentLoaded", inicia);


}