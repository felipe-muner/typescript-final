import { GetStaticProps } from "next";
import Head from "next/head";
import Channels from "../components/channels";
import Messages from "../components/messages";
import SendMessage from "../components/sendMessage";
import { IChannel, IMessage } from "../types/index";
import Api from "../api";
import classes from "../styles/utils.module.css";
import { useState, useEffect } from "react";

export default function Home({ allChannels }: { allChannels: IChannel[] }) {
  const [channel, setChannel] = useState<IChannel>();
  const [messages, setMessages] = useState<IMessage[]>();

  const addMsg = (q: { msg: string }) => {
    setMessages((prevState: any) => [
      ...prevState,
      { msgId: Math.random().toString(), content: q.msg },
    ]);
  };

  async function getMessagesById() {
    const list: IMessage[] = await Api.message.getMessagesById(channel);
    setMessages(list);
  }

  useEffect(() => {
    if (channel) {
      getMessagesById();
    }
  }, [channel]);

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.channel}>
          <Channels channels={allChannels} setChannel={setChannel} />
        </div>
        <div className={classes.messages}>
          <Messages channel={channel} messages={messages} />
        </div>
        <div className={classes.form}>
          <SendMessage channel={channel} addMsg={addMsg} />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allChannels = await Api.channel.getAllChannels();
  return {
    props: {
      allChannels,
    },
  };
};
