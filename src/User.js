import React, { Component } from 'react'

import bankService from './services/Bank_service'

class Users extends Component {

    state={

        users:[]
    };

    componentDidMount(){
        bankService.getUsers.then(users=>{

            this.setState({

                users
            })
        })

    }
    delete(userId){
        bankService.deleteUsers(userId).then(users=>{

          alert("User deleted")
        })

         }

         edit(userId){

            this.props.history.push("/edit/"+userId);
         }
    render(){
        <div>

            <table>
                <tr>
                <td>name</td>
                <td>email</td>
                <td>actions</td>
                </tr>
            {

              users.map(user=><tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><button onClick={()=>this.delete(user.id)}></button>delete</td>
                  </tr>)

            }
            </table>
           
        </div>


    }
}

export default Users;