function getIDs(){var e,t=[501439,401042,310488,811404,221299,320549,610686,620887,711573,910198,920222,330836,211164,100811][(document.getElementById("mySelect").selectedIndex)-1],n=document.getElementById("number").value,d=t;for(e=0;e>=-(n-2);e--)d+=","+--t;document.getElementById("out").innerHTML=d}

var input = document.getElementById("number");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("Generate").click();
    }
});
