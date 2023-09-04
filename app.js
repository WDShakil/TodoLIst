let inputData = document.querySelector(".data_input");
let addBtn = document.querySelector(".add_btn");
let listWrapper = document.querySelector(".list__wrapper");
const deleteSound = new Audio("deletSound.mp3");
let errorMsg = document.querySelector(".error");
// This is the main function
addBtn.addEventListener("click", function () {
  addTask();
});
// To Add Using The Enter Button
inputData.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});

function addTask() {
  //This line will help to must be input some value
  if (inputData.value.trim() !== "") {
    // This message will show when the user add a task
    errorMassage("Task Added", "#4cb04c");
    errorMsg.classList.add("msgshow");
    setTimeout(errorRemove, 1000);

    // This is list of task
    let createItem = document.createElement("li");
    listWrapper.appendChild(createItem);
    // Task context
    let taskText = document.createElement("p");
    taskText.innerText = inputData.value;
    createItem.appendChild(taskText);
    taskText.setAttribute("class", "leftPart");

    // Right Part of the Task item
    let rightpart = document.createElement("div");
    createItem.appendChild(rightpart);
    rightpart.setAttribute("id", "rightPart");
    // This part will show the current time of the user when they add any task
    let timeslot = document.createElement("span");
    rightpart.appendChild(timeslot);
    timeslot.setAttribute("class", "time");
    timeslot.innerHTML = getCurrentTime();

    // Edit Button
    let editButton = document.createElement("i");
    rightpart.appendChild(editButton);
    editButton.classList.add("ri-pencil-line");
    editButton.setAttribute("id", "edit_item");

    editButton.addEventListener("click", function () {
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
      editButton.classList.toggle("hide");
    });

    let close = document.createElement("i");
    rightpart.appendChild(close);

    close.classList.add("ri-close-line");
    close.setAttribute("id", "remove_item");
    listWrapper.insertBefore(createItem, listWrapper.firstChild);
    close.addEventListener("click", function () {
      listWrapper.removeChild(createItem);
      deleteSound.play();

      errorMassage("Task Deleted", "red");
      errorMsg.classList.add("msgshow");
      setTimeout(errorRemove, 1000);
    });

    inputData.value = "";
    inputData.focus();
  }
}
// To Create Error Message
function errorMassage(msgcontent, color) {
  let msg = document.querySelector(".error_msg");
  msg.innerHTML = msgcontent;
  errorMsg.style.backgroundColor = color;
}

let errorMsgRemove = document.querySelector("#error_remove");
errorMsgRemove.addEventListener("click", function () {
  errorMsg.classList.remove("msgshow");
});
function errorRemove() {
  errorMsg.classList.remove("msgshow");
}

// This function Will work for get Current time of the user
function getCurrentTime() {
  const now = new Date();
  const options = {
    timeZone: "Asia/Dhaka",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  };
  return now.toLocaleTimeString("en-US", options);
}
