window.onload=function(){
    var search = document.getElementById("searchButton");
    search.addEventListener('click',handleClick);

}

var httpRequest = new XMLHttpRequest();
var url = "superheroes.php";

function handleClick(e){

    //preventDefault();
    

    var url = "superheroes.php";

    httpRequest.onreadystatechange = getList();

    httpRequest.open('GET',url)
    httpRequest.send();
}

function getList(){
    if (httpRequest.readyState == XMLHttpRequest.DONE){
        if(httpRequest.status==200){
            var resp= httpRequest.responseText;
            alert(resp);
        }else{
            alert("No superheroes found.");
        }
    }
}