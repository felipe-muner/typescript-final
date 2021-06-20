import fetcher from "./fetcher";

class Message {
  constructor(server) {
    this.server = server;
  }
  async getMessagesById(id) {
    const res = await fetcher.get({
      url: this.server + "/api/messages/" + id,
      data: {},
    });
    const data = await res.json();
    return data;
  }
}

export default Message;
