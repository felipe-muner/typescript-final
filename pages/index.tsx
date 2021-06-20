import { GetStaticProps } from "next";
import Head from "next/head";
import Channels from "../components/channels";
import Messages from "../components/messages";
import SendMessage from "../components/sendMessage";
import ShowDetails from "../components/showDetails";
import { IChannel, IFullName, IPost } from "../types/index";
import Api from "../api";
import utilStyles from "../styles/utils.module.css";

export default function Home({ allChannels }: { allChannels: IChannel[] }) {
  // const user: IFullName = { firstName: "felipe", lastName: "muner" };
  // const myPost: IPost = { id: "filename", body: "body", title: "title" };
  //   <ShowDetails user={user} myPost={myPost}></ShowDetails>

  return (
    <div>
      <h1>13</h1>
      <h1>{JSON.stringify(allChannels)}</h1>
      <div className={utilStyles.container}>
        <div>Left div</div>
        <div>Middle div</div>
        <div>Right div</div>
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
