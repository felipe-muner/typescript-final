import { GetStaticProps } from "next";
import Head from "next/head";
import Channels from "../components/channels";
import Messages from "../components/messages";
import SendMessage from "../components/sendMessage";
import { IChannel, IMessage} from "../types/index";
import Api from "../api";
import utilStyles from "../styles/utils.module.css";
import { useState,useEffect } from "react";

export default function Home({ allChannels }: { allChannels: IChannel[] }) {
  const [loading, setLoading] = useState<Boolean>(false);
  const [channel, setChannel] = useState<IChannel>();
  const [messages, setMessages] = useState<IMessage[]>();
  // const user: IFullName = { firstName: "felipe", lastName: "muner" };
  // const myPost: IPost = { id: "filename", body: "body", title: "title" };
  // <ShowDetails user={user} myPost={myPost}></ShowDetails>

  async function getMessagesById() {
    console.log('vou', channel)
    setLoading(true)
    const filteredList = await Api.message.getMessagesById(channel);
    setMessages(filteredList);
    setLoading(false)
  }

  useEffect(() => {
    if (channel) {
      getMessagesById();
    }
  }, [channel]);

  return (
    <div>
      {channel}
      <div className={utilStyles.container}>
        <div className={utilStyles.channel}>
          <Channels channels={allChannels} setChannel={setChannel} />
        </div>
        <div className={utilStyles.messages}>
          <Messages channel={channel} messages={messages} />
        </div>
        <div className={utilStyles.form}>
          <SendMessage channel={channel} />
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
