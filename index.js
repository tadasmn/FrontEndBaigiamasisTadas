const itemsWrapper = document.getElementById('items');
const getAllItems = async () => {
    await fetch("https://634440b5242c1f347f8265b0.mockapi.io/Cars")
.then((res) => {
    return res.json();
})
.then((data) => {
    data.sort((a,b) => {return a.Price - b.Price;});
    console.log(data);
    data.forEach((item) => {
       
        const itemWrapper = document.createElement("div");
        itemWrapper.classList.add("item");

        const itemPrice = document.createElement("div");
        itemPrice.classList.add("itemPrice");
    
        const itemImageWrapper = document.createElement("div");
        itemImageWrapper.classList.add("itemImageSection");
        itemImageWrapper.style.backgroundImage = `url(${item.Photo})`;

        itemImageWrapper.addEventListener("click", () => {
            localStorage.setItem("itemID", item.id);
            window.location.replace("./itemPage.html")
        });

        const itemTitle = document.createElement('div');
        itemTitle.classList.add('itemTitle');

        itemTitle.addEventListener("click", () => {
            localStorage.setItem("itemID", item.id);
            window.location.replace("./itemPage.html")
        });

        itemTitle.innerHTML = item.Title;
        itemPrice.innerHTML = `${item.Price} Eur`;

        itemWrapper.append(itemPrice, itemImageWrapper, itemTitle);
        itemsWrapper.append(itemWrapper);
    });
})
    .catch((error) => {
    console.log(error)
  }) 
};
getAllItems();





