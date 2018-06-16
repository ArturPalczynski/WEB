

function getUsers(){
    
    var getUsersButton = document.getElementById("get-users-button");

    var url = "http://localhost:3000/users";
    //var url = "/users";

    var xmlhttp = new XMLHttpRequest();
    

    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var user = JSON.parse(this.responseText);

       // console.log(user.name);
        //console.log(user.surname);

        document.getElementById("userName").setAttribute("value",user.name);
        document.getElementById("userSureName").setAttribute("value", user.surname);
        

        }
    };


    xmlhttp.open("GET", url, true);
    xmlhttp.send(); 
/*
    $.get(url, null, function(dane){

        alert(dane.name);

    });
*/ 
    }

    


