import './style.css'

const test = document.getElementById("list");

//Få vist i consolen
fetch("http://localhost:8080/devops_starter_war_exploded/api/person/all")
.then(response => response.json())
.then(data => console.log(data));

fetch("http://localhost:8080/devops_starter_war_exploded/api/person/all")
.then((res) => res.json())
.then((data) => (test.innerHTML = data[0].email +" "+ data[0].firstname +" "+ data[0].lastname))
.catch((err) => console.log(err));