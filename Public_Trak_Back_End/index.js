const protobuf = require('protobufjs');
const fs = require('fs');

// Read the protobuf data
const buffer = fs.readFileSync('vehicle_data.pb');

// Decode the protobuf data
const message = VehiclePosition.decode(buffer);

// Convert the protobuf message to JSON
const jsonMessage = VehiclePosition.toObject(message, {
  defaults: true, // Include default values
  longs: Number, // Convert longs to Number (requires protobuf.js 6.0.0+)
  enums: String, // Enums as string names
  bytes: String, // Bytes as base64 encoded strings
});

console.log(jsonMessage);


