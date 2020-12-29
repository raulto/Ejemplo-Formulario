window.onload = function(){

    var formulario = document.getElementById("formulario"),
    elementos = formulario.elements,
    boton = document.getElementById("boton");

    var validarnombre = function(e){
        if (formulario.txtNombre.value == 0) {
            alert("completa el input");
            e.preventDefault();

        }
    }

    var validarRadio = function(e){
        if (formulario.sexo[0].checked == true || formulario.sexo[1].checked == true) {        
        }else{            
            alert("seleccionar sexo");
        e.preventDefault();
    }
    }

    function validar(e){
        
        validarnombre(e);
        validarRadio(e);

    };

    formulario.addEventListener("submit",validar);

};