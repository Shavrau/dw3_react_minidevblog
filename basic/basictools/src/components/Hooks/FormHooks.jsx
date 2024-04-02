import React, { useState } from 'react'

const FormHooks = () => {
    const [list] = useState(['Letícia', 'Enzo', 'Kayro', 'Gustavo'])
    const [number, setNumber] = useState(15)
    const [user, setUser] = useState(
        [
            {id:1, nome:'José Carlos', idade:44},
            {id:2, nome:'Maria Rosa', idade:25},
            {id:3, nome:'Ana Sofia', idade:31},
            {id:4, nome:'Paulo José', idade:21},
            {id:5, nome:'Marcus Daniel', idade:25},
            {id:6, nome:'Victor Hugo', idade:34},
            {id:7, nome:'Victoria Kamilly', idade:19},
            {id:8, nome:'Pedro Lucas', idade:37},
        ]
    )
    // const deleteRandomUser = () => {       
    //     const randomNumber = Math.floor(Math.random() * user.length);
    //     setUser((prevUser) => {
    //         return prevUser.filter((user) => user.id !== randomNumber);
    //     });
    // };

      const deleteRandomUser = () => {       
          const randomNumber = Math.floor(Math.random() * user.length);
          const filteredUsers = user.filter(u => u.id !== user[randomNumber].id)
          setUser(filteredUsers);
      };

    return (
        <>
            <div>
                <p>
                    <strong>Valor do número: </strong>{number}
                </p>
                <button onClick={() => {setNumber(32); console.log(number)}}>Mudar</button>
            </div>
            <div>
                <ul>
                    {
                        list.map((item, i) => (
                            <li key = {i}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <table>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            nome
                        </th>
                        <th>
                            idade
                        </th>
                    </tr>
                        {
                            user.map((item, i) => (
                                <tr key= {i}>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.idade}</td>
                                    
                                </tr>
                            ))
                        }
                </table>
                <button onClick={deleteRandomUser}>Excluir Randomicamente</button>
            </div>
        </>
    )
}

export default FormHooks