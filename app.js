window.onload=function(){
    var search = document.getElementById("searchButton");
    search.addEventListener('click',handleClick);

}

var httpRequest = new XMLHttpRequest();
var url = "superheroes.php";

function handleClick(e){

    e.preventDefault();
    

    var url = "superheroes.php";
    var hero= document.getElementById("heroSearcher").value;
    hero=hero.trim();
    
    var sendToPhp=url+"?query="+hero;

    httpRequest.onreadystatechange = getList();

    httpRequest.open('GET',sendToPhp)
    httpRequest.send();
}

function getList(){
    var resField=document.getElementById('result');
    if (httpRequest.readyState == XMLHttpRequest.DONE){
        if(httpRequest.status==200){
            var resp= httpRequest.responseText;
            resField.innerHTML=resp;
        }else{
            alert("No superheroes found.");
        }
    }
}