$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

// variable to grab the button
const button = document.querySelector("#jokeButton")
const nextButton = document.querySelector("#nextButton")

// event listener function for buttons
button.addEventListener("click", function () {
  makeApiRequest();
});

nextButton.addEventListener("click", function () {
  
  makeApiRequest();
});




//async api call to display joke in modal
async function makeApiRequest() {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      "Accept": "application/json"
    }
  })

    .then(response => response.json())
    .then(data => {
      let joke = data.joke
      const jokeDisp = document.querySelector('.modal-body');
      let para = document.createElement("p")
      para.innerText = null;
      para.innerText = joke;
      jokeDisp.appendChild(para)
    });

}
 