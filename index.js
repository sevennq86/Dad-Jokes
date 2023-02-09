$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

// variable to grab the button
const button = document.querySelector("#jokeButton")

// event listener function
button.addEventListener("click", function () {
  makeApiRequest();
});

async function makeApiRequest() {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      "Accept": "application/json"
    }
  })

  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  
  // const data = await response.json();

  // console.log(data);
}
