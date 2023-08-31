let inputData = document.querySelector(".data_input");
let addBtn = document.querySelector(".add_btn");
let listWrapper = document.querySelector(".list__wrapper");

addBtn.addEventListener("click", function () {
  addTask();
});

inputData.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});

function addTask() {
  //This line will help to must be input some value
  if (inputData.value.trim() !== "") {
    let createItem = document.createElement("li");
    createItem.innerText = inputData.value;
    listWrapper.appendChild(createItem);

    let rightpart = document.createElement("div");
    createItem.appendChild(rightpart);
    rightpart.setAttribute("id", "rightPart");

    let timeslot = document.createElement("span");
    rightpart.appendChild(timeslot);
    timeslot.setAttribute("class", "time");
    timeslot.innerHTML = getCurrentTime();

    let close = document.createElement("i");
    rightpart.appendChild(close);

    close.classList.add("ri-close-line");
    close.setAttribute("id", "remove_item");

    listWrapper.insertBefore(createItem, listWrapper.firstChild);

    let removeItem = document.querySelector("#remove_item");
    removeItem.addEventListener("click", function () {
      listWrapper.removeChild(createItem);
    });
    inputData.value = "";
  }
}
function getCurrentTime() {
  const now = new Date();
  console.log(now);
  const options = {
    timeZone: "Asia/Dhaka",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  };
  return now.toLocaleTimeString("en-US", options);
}
