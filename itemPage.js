const itemID = localStorage.getItem("itemID");

const getSingleItem = () => {
    fetch(`https://634440b5242c1f347f8265b0.mockapi.io/Cars/${itemID}`
    )
.then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    const itemImage = document.getElementById('itemImage');
    itemImage.classList.add("itemImage");
    itemImage.style.backgroundImage = `url(${data.Photo})`;

    const itemTitle = document.getElementById('itemTitle');
    itemTitle.innerHTML = data.Title;

    const itemPrice = document.getElementById('itemPrice');
    itemPrice.innerHTML = `${data.Price} ` + 'Eur';

    const itemPlace = document.getElementById('itemPlace');
    itemPlace.innerHTML = data.Place;

    const aboutItem = document.getElementById('aboutItem');
    aboutItem.innerHTML = data.About;

    
  })
}
getSingleItem();

const deleteItem = async () => {
     await fetch(`https://634440b5242c1f347f8265b0.mockapi.io/Cars/${itemID}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
  .then((res) => {
  })
  .catch((error) => {
    console.log(error)
  }) 
};

const timeOutFN = () => {
  setTimeout(() => {
  document.querySelector(".item-wrapper").innerHTML = "";
  document.getElementById("notification").innerHTML = "Prekė pašalinta"; 
}, 2000);
};




