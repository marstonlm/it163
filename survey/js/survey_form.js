var outputName = document.querySelector('#outputName');
const outputAge = document.querySelector('#outputAge');


const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener("click", clickHandler, false);



function clickHandler() {
    let inputName = document.querySelector('#inputName');
    let inputAge = document.querySelector('#inputAge');
    let inputAnimal = document.querySelector('#inputAnimal');
    let inputAnimalPic = document.querySelector('#inputAnimalPic');

    let outputName = document.querySelector('#outputName');
    let outputAge = document.querySelector('#outputAge'); 
    let outputAnimal = document.querySelector('#outputAnimal');



    





    outputName.innerHTML = inputName.value;
    outputAge.innerHTML = inputAge.value;
    outputAnimal.innerHTML = inputAnimal.value;

    console.log("Button clicked");

    /*Closes popup box */
    document.getElementById("popupForm").style.display = "none";
    console.log('Form closed');
}





// Open form
function openForm() {
    document.getElementById("popupForm").style.display = "block";
    console.log('Form opened');
  }

// Close form
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    console.log('Form closed')
  }