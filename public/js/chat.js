// CLIENT_SEND_MESSAGE
const formSendData = document.querySelector(".chat .inner-form");
if (formSendData) {
  const btnSendData = document.querySelector("button");
  if (btnSendData) {
    btnSendData.addEventListener("click", (e) => {
      e.preventDefault();
      const inputElement = document.querySelector('input[name="content"]');
      if (inputElement) {
        const data = inputElement.value;
        socket.emit("CLIENT_SEND_MESSAGE", data);
        inputElement.value = "";
      }
    });
  }
}
// END CLIENT_SEND_MESSAGE
