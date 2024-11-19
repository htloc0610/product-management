const Chat = require("../../models/chat.model");

// [GET] /chat
module.exports.index = (req, res) => {
  const userID = "123";

  // Socket
  // Để tạo đúng 1 socket duy nhất
  _io.once("connection", (socket) => {
    console.log("a user connected", socket.id);
    socket.on("CLIENT_SEND_MESSAGE", (content) => {
      console.log(content);
    });
  });
  // End socket
  res.render("client/pages/chat/index.pug", {
    pageTitle: "Trang chủ",
  });
};
