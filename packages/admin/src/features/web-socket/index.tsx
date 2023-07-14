let websocket: WebSocket | null = new WebSocket("ws://192.168.93.198:6647/fms-websocket");

websocket.onopen = function () {
  console.log("Connected to WebSocket server");
};

websocket.onclose = function () {
  console.log("Disconnected from WebSocket server");
  websocket = null;
};


export default websocket;