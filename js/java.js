$ (".suma").click(function () {

    let var1 = parseInt($(".pepito").val());
    let var2 = parseInt($(".nombre").val());

    $(".resultado").html(var1 + var2) 

});

$ (".resta").click(function () {

    let var1 = parseInt($(".pepito").val());
    let var2 = parseInt($(".nombre").val());

    $(".resultado1").html(var1 - var2) 

});

$ (".multiplicacion").click(function () {

    let var1 = parseInt($(".pepito").val());
    let var2 = parseInt($(".nombre").val());

    $(".resultado2").html(var1 * var2) 

});

$ (".divicion").click(function () {

    let var1 = parseInt($(".pepito").val());
    let var2 = parseInt($(".nombre").val());

    $(".resultado3").html(var1 / var2) 

});



