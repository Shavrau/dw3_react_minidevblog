import React from 'react'
import styles from '../ShowUserName/ShowUserName.module.css'

const ShowUserName = (props) => {
  return (
    <>
    <table >
        <tr>
            <th>User Name</th>
        </tr>
            {
            props.list.map((item, i) => (
                item.active && <tr key={i} className={i % 2==0 ? styles.pair : styles.odd}>{item.userName}</tr>
            )) 
            }
    </table>
    </>
  )
}

export default ShowUserName