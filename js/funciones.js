

document.addEventListener("keydown", function(){
    const nombreObtenido = document.getElementById("inst").value;
    document.getElementById("uni").innerHTML = nombreObtenido;
});


$(document).ready(function(){
    $("#btn").click(function(){
        cambiarAzul();
    });

    $("#btn2").click(function(){
        cambiarVerde();
    });

    $("#btn3").click(function(){
        cambiarAmarillo();
    });

    $("#btn4").click(function(){
        restablecer();
    });
});

function cambiarAzul(){
    $("#unlam").removeClass();
    $("#unlam").addClass("azul");
}

function cambiarVerde(){
    $("#unlam").removeClass();
    $("#unlam").addClass("verde");
}

function cambiarAmarillo(){
    $("#unlam").removeClass();
    $("#unlam").addClass("amarillo");
}

function restablecer(){
    $("#unlam").removeClass();
    $("#unlam").addClass("restablecer");
}