$ (".suma").click(function () {

    let var1 = parseInt($(".pepito").val());
    let var2 = parseInt($(".nombre").val());
    let resultado=suma (var1,var2);
    $(".resultado").html(resultado) ;

});

function suma(a,b){
    return a+b;
}

$ (".resta").click(function () {

    let var1 = parseInt($(".pepito").val());
    let var2 = parseInt($(".nombre").val());
    let resultado=resta (var1,var2);
    $(".resultado1").html(resultado) ;
});

function resta(a,b){
    return a-b;
}

$ (".multiplicacion").click(function () {

    let var1 = parseInt($(".pepito").val());
    let var2 = parseInt($(".nombre").val());
    let resultado=multiplicacion (var1,var2);
    $(".resultado2").html(resultado) ;
});

function multiplicacion(a,b){
    return a*b;
}

$ (".divicion").click(function () {

    let var1 = parseInt($(".pepito").val());
    let var2 = parseInt($(".nombre").val());
    let resultado=divicion (var1,var2);
    $(".resultado3").html(resultado) ;
});

function divicion(a,b){
    return a/b;
}



