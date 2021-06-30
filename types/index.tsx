// types/index.ts

export interface IPost {
  id: string
  body: string
  title: string
}

export interface IFullName {
  firstName: string
  lastName: string
}

export interface IChannel {
  id: number,
  name: string
}

export interface IMessage {
  msgId: string
  channelId: string
  content: string
}

export interface ISendMessages {
  content: string
}

