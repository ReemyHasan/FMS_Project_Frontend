const websocket = new WebSocket("ws://192.168.26.46:6647/fms-websocket");

websocket.onopen = function () {
  console.log("Connected to WebSocket server");
};

websocket.onclose = function () {
  console.log("Disconnected from WebSocket server");
};

export default websocket;