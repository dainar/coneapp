
import $ from 'jquery';

export const iniciaSesion = (correo,contraseña, callback) =>{
    var body = {};
    body.email = correo;
    body.password = contraseña;
    $.ajax({
        url: "https://reqres.in/api/login",
        method: "POST",
        data: JSON.stringify(body),
        contentType: "application/json",
        dataType: "json",
        success: (sesion) => {
            callback(sesion);
        },
        error: (error) => {
            callback({error: true})
        }
    });
}

export const registerSesion = (correo,contraseña, callback) =>{
    var body = {};
    body.email = correo;
    body.password = contraseña;
    $.ajax({
        url: "https://reqres.in/api/register",
        method: "POST",
        data: JSON.stringify(body),
        contentType: "application/json",
        dataType: "json",
        success: (sesion) => {
            callback(sesion);
        },
        error: (error) => {
            callback({error: true})
        }
    });
}

