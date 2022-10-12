const addItem = () => {
    let itemInfo =  {
      Title: document.getElementById('title').value,
      Price: document.getElementById('price').value,
      Photo: document.getElementById('photo').value,
      About : document.getElementById('about').value,
      Place: document.getElementById('place').value,
    }
    
     fetch("https://634440b5242c1f347f8265b0.mockapi.io/Cars", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemInfo),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => { 
        console.log(data);
        const successNotification = document.getElementById('notification');
        successNotification.innerHTML = "Prekė sėkmingai įvesta"
      })
      .catch((error) => {
        console.log(error)
      }) 
    }

