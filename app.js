async function jsonData() {
  let display = document.getElementById("display");

  let getData = await fetch("http://127.0.0.1:5500/demo.json");
  let toConvert = await getData.json();
  console.log(toConvert);

  toConvert.forEach((value, index) => {
    display.innerHTML += `<div class="col card p-3 mt-3 me-3 d-inline-block text-center">
        <h4 class="text-nowrap overflow-hidden">${value.title}</h4>
        <div class="text-center"><img src=${value.image} alt="" class="" height="150px width=150px"></div>
        <h5 class="text-primary">Price:${value.price}</h5>
        <a href="" class="btn btn-primary">Buy</a></div>`;
  });
}
jsonData();
