import $ from 'jquery';

export const newUsers = (page, callback) =>{
   
 
    $.ajax({
        url: "https://reqres.in/api/users?page="+page,
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: (response) => {
            callback(response);
        },
        error: (error) => {
            callback({error: true})
        }
    });
}
