document.addEventListener('DOMContentLoaded', function() {
    
    const $formularioCreate = document.getElementById('formularioCreate');
    const $marca = document.getElementById('marca');

    
    $formularioCreate.addEventListener('submit', function(e){
        let marca = String($marca.value).trim();
        if(marca.length === 0){
            notificacionSwal(document.title,"Debes ingresar una Marca", "warning", "ok")
            e.preventDefault();
        }
    });

   
});