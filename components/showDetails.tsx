interface IFullName {
  firstName: string;
  lastName: string;
}

export default function ShowDetails({
  user,
}: {
  user: IFullName;
}) {
  return <h1>{user.firstName + " " + user.lastName}</h1>
}
