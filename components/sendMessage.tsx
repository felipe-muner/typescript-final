import { useState, useEffect } from "react";
import Api from "../api";
import { IChannel } from "../types";

export default function Messages({
  channel,
  addMsg,
}: {
  channel: IChannel;
  addMsg: any;
}) {
  const [query, setQuery] = useState<{ msg: string }>({
    msg: "",
  });

  useEffect(() => {
    if (channel) setQuery({ msg: "" });
  }, [channel]);

  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await Api.channel.newMessage({ msg: query.msg, channelId: channel });
    addMsg(query);
    setQuery({ msg: "" });
  };
  if (!channel)
    return (
      <div>
        <h3> Select a channel to send messages</h3>
      </div>
    );
  return (
    <div>
      <h3>New Message</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="msg"
            autoComplete="none"
            value={query.msg}
            onChange={handleParam()}
          />
        </div>
        <button disabled={!query.msg} type="submit" color="primary">
          Submit
        </button>
      </form>
    </div>
  );
}
