const items = document.getElementById("items");
let idCounter = 0;
exports.addItem = item => {
  console.log(item);
  let newItem = `
  <div id="item" data-id=${idCounter++}>
          <!-- image -->
          <img src="https://via.placeholder.com/100" alt="" />
          <!-- title -->
          <p>${item.item}</p>
        </div>`;

  items.innerHTML += newItem;
};
