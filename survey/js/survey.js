
var outputName = document.querySelector('#outputName');
const outputAge = document.querySelector('#outputAge');


const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener("click", clickHandler, false);



function clickHandler() {
    let inputName = document.querySelector('#inputName');
    let inputAge = document.querySelector('#inputAge');
    let inputAnimal = document.querySelector('#inputAnimal');

    let outputName = document.querySelector('#outputName');
    let outputAge = document.querySelector('#outputAge'); 
    let outputAnimalPic = document.querySelector('#outputAnimal');

    /* Radio buttons for animal */
    /* Still needs to change img */
    const rbsPic = document.querySelectorAll('#inputAnimal[name="choice"]');
    let selectedValuePic;
    for (const rb of rbsPic) {
      if (rb.checked) {
        selectedValuePic = rb.value;
      }
    }

/* HTML and console output */
    outputName.innerHTML = inputName.value;
    console.log("inputName.value is " + inputName.value);

    outputAge.innerHTML = inputAge.value;
    console.log('inputAge value is ' + inputAge.value);

    outputAnimal.innerHTML = selectedValuePic;
    console.log('inputAnimal value is ' + selectedValuePic);





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