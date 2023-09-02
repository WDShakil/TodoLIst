let inputData = document.querySelector(".data_input");
let addBtn = document.querySelector(".add_btn");
let listWrapper = document.querySelector(".list__wrapper");
const deleteSound = new Audio("deletSound.mp3");
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
    listWrapper.appendChild(createItem);
    // Task context
    let taskText = document.createElement("p");
    taskText.innerText = inputData.value;
    createItem.appendChild(taskText);

    let rightpart = document.createElement("div");
    // Edit button and check button
    let timeslot = document.createElement("span");
    rightpart.appendChild(timeslot);
    timeslot.setAttribute("class", "time");
    timeslot.innerHTML = getCurrentTime();
    // Time Slot end
    createItem.appendChild(rightpart);
    rightpart.setAttribute("id", "rightPart");
    // Edit button and check button
    // Add Edit and Check buttons/icons
    let editButton = document.createElement("i");
    rightpart.appendChild(editButton);
    editButton.classList.add("ri-pencil-line");
    editButton.setAttribute("id", "edit_item");

    editButton.addEventListener("click", function () {
      // const updatedText = prompt("Edit Task:", createItem.innerText.trim());
      // if (updatedText !== null) {
      //   createItem.innerText = updatedText;
      // }
      inputData.focus();
      inputData.value = taskText.innerText.trim();
    });
    // check button
    let checkButton = document.createElement("i");
    rightpart.appendChild(checkButton);
    checkButton.classList.add("ri-checkbox-circle-line");
    checkButton.setAttribute("id", "check_item");

    // Event listener for marking a task as completed
    checkButton.addEventListener("click", function () {
      taskText.classList.toggle("completed");
      checkButton.classList.toggle("completedicon");
    });

    let close = document.createElement("i");
    rightpart.appendChild(close);

    close.classList.add("ri-close-line");
    close.setAttribute("id", "remove_item");

    listWrapper.insertBefore(createItem, listWrapper.firstChild);

    let removeItem = document.querySelector("#remove_item");
    removeItem.addEventListener("click", function () {
      listWrapper.removeChild(createItem);
      deleteSound.play();
      deleteSound.volume = 0.3;
    });
    inputData.value = "";
    inputData.focus();
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
