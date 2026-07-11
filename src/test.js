const EventEmitter= require("events");

const event= new EventEmitter();


event.on("what",()=>console.log("msg"))
event.emit("what")