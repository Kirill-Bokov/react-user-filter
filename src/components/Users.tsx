type User = {
  id: number;
  name: string;
};

type UsersProps = {
  users: User[];
};

const Users = ({ users }: UsersProps) => (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);

export default Users;
