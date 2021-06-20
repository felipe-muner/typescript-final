interface IFullName {
  firstName: string;
  lastName: string;
}
export interface IPost {
  id: string
  body: string
  title: string
}

export default function ShowDetails({
  user,
  myPost
}: {
  user: IFullName;
  myPost: IPost;
}) {
  return <div>
    <h1>{user.firstName + " " + user.lastName}</h1>
    <h1>{myPost.title + " " + myPost.id}</h1>
    </div>
}
