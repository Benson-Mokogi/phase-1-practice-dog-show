function fetchDogs(){
    fetch("http://localhost:3000/dogs")
    .then(res => res.json())
    .then(data => data.map(dogData => renderDogs(dogData)))
}

fetchDogs()

function renderDogs(dogData){
    const tr = document.createElement("tr")
    const card= `
    <tr>
  <td>${dogData.name}</td>
  <td>${dogData.breed}</td>
  <td>${dogData.sex}</td>
  <td><button id="btn-${dogData.id}">Edit</button></td>
</tr>
    `;

    tr.innerHTML = card
    document.querySelector("thead").appendChild(tr)

    const button = document.getElementById(`btn-${dogData.id}`).addEventListener("click", ()=>{
        populateOnClick(dogData)
    })
}

function populateOnClick(dogData){
    console.log(`We're here at button number ${dogData.id}`)
    const name = document.querySelector('input[name="name"]')
    const breed = document.querySelector('input[name="breed"]')
    const sex = document.querySelector('input[name="sex"]')

    name.value = dogData.name
    breed.value = dogData.breed
    sex.value = dogData.sex

    const form = document.querySelector("#dog-form")
    const submit = form.querySelector('input[type="submit"]')


    submit.addEventListener("click", (event)=>{
        event.preventDefault()
        
        patchMethod(dogData)})
}

function patchMethod(dogData){
    const newName = document.querySelector('input[name="name"]').value;
    const newBreed = document.querySelector('input[name="breed"]').value;
    const newSex = document.querySelector('input[name="sex"]').value;

    let dogObject = {
        name: newName,
        breed: newBreed,
        sex: newSex
    };

console.log(dogObject.name)
console.log(dogObject.breed)
console.log(dogObject.sex)

    
    fetch(`http://localhost:3000/dogs/${dogData.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dogObject)

    })
    .then(resp => resp.json())
    .then(newData => console.log(newData))
    

}