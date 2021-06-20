import fetcher from "./fetcher";

class Channel {
  constructor(server) {
    this.server = server
  }
  // async getAll() {
  //   return await fetcher.get("/school");
  // }
  async getAllChannels(){
    const res = await fetcher.get({
      url: this.server + "/api/channels",
      data: {},
    })
    const data = await res.json()
    return data
  }
  async newMessage(payload) {
    const res = await fetcher.post({
      url: this.server + "/api/" + payload.id,
      data: payload,
    });
    const data = await res.json();
    return data;
  }
}

export default Channel;
