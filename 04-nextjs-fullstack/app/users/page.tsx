async function getUsers() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  return response.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main>
      <h1>Users</h1>

      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
