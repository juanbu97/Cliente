{

    let muestraOculta = function () {

        let idEnlace = this.id;
        let trozos = idEnlace.split('_');
        let numero = trozos[1];
        let parrafo = document.getElementById("contenidos_" + numero);


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
        let enlaces = document.getElementsByTagName("a");

        //enlaces.addEventListener("click",muestraOculta);

        for (i in enlaces) {
            enlaces[i].onclick = muestraOculta;
        }
    }

    document.addEventListener("DOMContentLoaded", inicia);


}