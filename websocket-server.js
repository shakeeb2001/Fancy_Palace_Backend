const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 57909 }); // Default port for Barcode to PC

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received: ${message}`);
    // Broadcast the message to all connected clients
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.send('Connected to WebSocket server');
});

console.log('WebSocket server is running on ws://localhost:57909');
