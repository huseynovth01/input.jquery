
// let firstform = document.querySelector("#firstform");

// function submitt (e){
//     e.preventDefault();
//     let form = this
//     let formData = new FormData(form)

//     fetch("https://jsonplaceholder.typicode.com/posts", {

//         method: "POST",
//         body: formData,
//     }).then(response =>{response.json();})
//     .then(data=>{
//         console.log("Succes", data)
//     })
//     .catch(error =>  {

//         console.log(error);
//     })
// }

//   firstform.addEventListener('submit',submitt)


//----------------------------------------------

//Jquery

$(document).ready(function(){
    $("#firstform").submit(function (e){
        e.preventDefault();

        let name = $("#name").val();
        let email = $("#email").val();

        let inputData = {
            name: name,
            email: email
        };

        const baseUrl = "https://jsonplaceholder.typicode.com/posts";
        $.post(baseUrl, inputData, function(response) {
            console.log("Server response: ", response);
        });
    });
});




