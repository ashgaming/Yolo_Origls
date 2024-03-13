import React,{useState,useEffect} from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Table,Button} from 'react-bootstrap'
import { useDispatch,useSelector } from "react-redux";
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { listUsers } from '../Actions/userAction';
import '../CSS/userlist.css'
export default function UserListScreen() {
    const dispatch = useDispatch()
    const userList = useSelector(state=>state.userList)
    const {loading,error,users} = userList

    useEffect(()=>{
        dispatch(listUsers())
    },[dispatch])
  return (
    <div>
        {loading?(<Loader />):
        error?(<Message varient='danger' text={error}></Message>):
        (
            <Table striped bordered hover responsive className='table-sm'>
                <thead>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>Last Login</th>
                    <th>Joined Date</th>
                    <th>Active</th>
                    <th>ADMIN</th>
                    <th></th>
                </thead>
                <tbody>
                    {users.map(user=>(
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.date_joined && user.date_joined.substring(0,10)}</td>
                            <td>{user.last_login && user.last_login.substring(0,10)}</td>
                            <td>{user.isActive ? <article style={{backgroundColor:'green'}} className='activesignal'></article>:
                            <article style={{backgroundColor:'red'}}className='activesignal'></article>}</td>
                            <td>{user.isAdmin ? <article style={{backgroundColor:'green',padding:'2px'}}>Admin</article>:
                            <article style={{backgroundColor:'Yellow',padding:'2px'}}>user</article>}</td>

                            
                        </tr>
                    ))}
                </tbody>
            </Table>


            
        )}
    </div>
  )
}
