import Channel from "./channel";
import Message from "./message";

const server = "http://localhost:3000";

export default {  
  channel: new Channel(server),  
  message: new Message(server),
};