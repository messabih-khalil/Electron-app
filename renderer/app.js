const { ipcRenderer } = require("electron");
const { addItem } = require("./items");

const showModal = document.getElementById("show-modal");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close");

const addBtn = document.getElementById("add-item");

const url = document.getElementById("url");

showModal.addEventListener("click", () => {
  modal.style.display = "flex";
  url.focus();
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// get input data

addBtn.addEventListener("click", () => {
  if (url.value) {
    ipcRenderer.send("new-item", url.value);
  }
});

// response

ipcRenderer.on("new-item-response", (e, data) => {
  // console.log(data);
  addItem(data);
  modal.style.display = "none";
  url.value = "";
});
