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
  msgId: number
  channelId: number
  content: string
}

export interface ISendMessages {
  content: string
}

