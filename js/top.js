

function mudarTema()

{

   var  d = document.body.classList.toggle("escuro");

    var l = document.getElementById("btn");

 

    if( d == true ) 

    {

        l.innerHTML = "light_mode";

    }

    else

    {

 

        l.innerHTML = "dark_mode";

    }

 

 

}