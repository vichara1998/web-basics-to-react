function getData() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((json) => {
      let display = "";
      for (let i = 0; 5 > i; i++)
        display += `<div class="card m-1" style="width: 15rem;">
       
        <div class="card-body">
              <div class="card-title" style="width: 40px; height:40px; border-radius: 50%; 
              background-color: aqua; align-items: center; display:flex; justify-content:center;
     ">${json[i].id}</div>
              <h1 class="card-subtitle mb-2 text-body-secondary">
                ${json[i].title}
              </h1>
               <!--<img style="height:200px; object-fit:cover;" src="${json[i].url}">-->
              <!-- <img style="height:200px; object-fit:cover;" src="${json[i].thumbnailUrl}">-->
               <img style="height:200px; object-fit:cover; margin-bottom:10px" src="https://picsum.photos/200/300?grayscale"  >
                <img style="height:200px; object-fit:cover;" src="https://picsum.photos/200/300"  >
            </div>
          </div>`;
      document.getElementById("display").innerHTML = display;
    })
    .catch((err) => console.log(err));
}
