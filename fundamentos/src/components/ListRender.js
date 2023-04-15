import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Daniele", "Bob", "Felipe"])
    const [users, setUsers] = useState([
        { id: 1, name: "Daniele", age: 28},
        { id: 2, name: "Felipe", age: 27},
        { id: 3, name: "Bob", age: 7}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <div>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <ul>{users.map((user) => (
            <li key={user.id}>{user.name} - {user.age}</li>
        ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender