import { IMessage, IChannel } from "../../types/index";

export let channels: IChannel[] = [
  { id: 1, name: "BILLS" },
  { id: 2, name: "TASKS" },
  { id: 3, name: "TRIP" },
  { id: 4, name: "DREAMS" },
];

export let autoIncrement = { id: 1 };

export let msgs: IMessage[] = [
  {
    msgId: autoIncrement.id++,
    channelId: 1,
    content: "ndustry. Lorem Ipsum has been the industry's ",
  },
  {
    msgId: autoIncrement.id++,
    channelId: 2,
    content: "nt of a page when looking at its ",
  },
  {
    msgId: autoIncrement.id++,
    channelId: 1,
    content: "ook like readable English. Many desktop publishin",
  },
  {
    msgId: autoIncrement.id++,
    channelId: 2,
    content: "odel text, and a search for 'lorem i",
  },
  {
    msgId: autoIncrement.id++,
    channelId: 3,
    content: "ook like readable English. Many desktop publishin",
  },
  {
    msgId: autoIncrement.id++,
    channelId: 3,
    content: "odel text, and a search for 'lorem i",
  },
  {
    msgId: autoIncrement.id++,
    channelId: 4,
    content: "ndustry. Lorem Ipsum has been the industry's ",
  },
  {
    msgId: autoIncrement.id++,
    channelId: 1,
    content: "nt of a page when looking at its ",
  },  
];