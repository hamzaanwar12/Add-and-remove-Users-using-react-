// import styled from "styled-components"
import "./AddUser.css"

const AddUser = (props)=>
{
    let userList = ""
    if(props.users.length !== 0)
    {
        userList = props.users.map(Element => <h2 key = {Element.key}>{Element.name}({Element.age} Years Old)</h2>)
    }

    if(userList!=="")
        return(
            <div className="list">
                <h3>Users List</h3>
                {userList}
            </div>
        )
}

export default AddUser
