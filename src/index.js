document.addEventListener('DOMContentLoaded', () => {
    fetch("http://localhost:3000/dogs")
    .then(res => res.json())
    .then(data => data.forEach(dogData => renderDog(dogData)))
    editOnClick()

})

function renderDog(dogData){
    //console.log(dogData)

    const tr = document.createElement("tr")


    const card = `
  <td>${dogData.name}</td>
  <td>${dogData.breed}</td>
  <td>${dogData.sex}</td>
  <td><button class="btn">Edit</button></td>
     `;

     tr.innerHTML = card
     //console.log(tr)

    document.querySelector("thead.blue").appendChild(tr)
    
    
}

function editOnClick(){
    
    const button = document.getElementsByClassName("btn")

    console.log(button)
    


}
