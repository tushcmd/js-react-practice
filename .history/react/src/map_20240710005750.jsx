import { useState, useEffect } from 'react'


const UserList = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()).then(data => setUsers(data));
    }, []);

    // for (let i = 1; i <= 100; i++) {
    //     if (i % 3 === 0 && i % 5 === 0 ) {
    //         console.log("FizzBuzz");
    //     } else if (i % 3 === 0) {
    //         console.log("Fizz");
    //     } else if (i % 5 === 0 ) {
    //         console.log("Buzz");
    //     } else {
    //         console.log(i);
    //     }
        
    // }

    const workers = [ 'ken', 'mike', 'jack', 'biko', 'sam', 'dave' ];

    for (const worker of workers) {
        console.log(worker)
    }

    
    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList