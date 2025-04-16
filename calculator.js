const operation = prompt ("Que opertacion vas a hacer?");
const dato1 = prompt("dame el primer numero");
const dato2 = prompt("dame el segundo numero");
if (operation==="suma"){
    suma(dato1, dato2);
}else if (operation==="resta"){
    resta(dato1, dato2);
}else if (operation==="multiplicacion"){
    multiplicacion(dato1, dato2);
}else if (operation==="division"){
    suma(dato1, dato2);
}else{
    return "Recuerda escribir suma, resta, multiplicacion o division"
}


function suma (dato1, dato2){
    return dato1+dato2;
}
function resta (dato1, dato2){
    return dato1-dato2;
}
function multiplicacion (dato1, dato2){
    return dato1*dato2;
}
function division (dato1, dato2){
    if(dato2===0){
        return "La división por cero no esta definida";
    }else{
        return dato1/dato2
    }
}