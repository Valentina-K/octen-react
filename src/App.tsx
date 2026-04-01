import './App.css'
import type {IUser} from "./models/IUser.ts";
import {useFetch} from "./hooks/useFetch.tsx";
import type {IUsersResponse} from "./models/IUsersResponse.ts";

function App() {
const {users} = useFetch<IUsersResponse>('https://dummyjson.com/users', { users: [], total: 0, limit: 0, skip: 0 }) as IUsersResponse;

  return (
      <>
          {users.map((user: IUser) =>
              <div key={user.id}>{user.id}: {user.firstName} {user.lastName}</div>
          )}
      </>
  )
}

export default App
