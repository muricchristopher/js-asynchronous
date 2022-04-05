const root = document.querySelector('#root');


fetch('https://murichristopher.github.io/10ProjectsIn10Hours-challenge/')
  .then(res => res.text())
  .then(data => insert(data))

function insert(data){
  root.innerHTML = data
}
