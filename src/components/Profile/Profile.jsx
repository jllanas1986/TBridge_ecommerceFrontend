import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { Card, Spin } from 'antd';

const Profile = () => {
    const {getUserInfo, user} = useContext(UserContext);
    useEffect(()=>{
        getUserInfo();
    }, [] );
    if(!user){
        return  <div>
                    <p>Enter your data in Login section</p>
                    <Spin size="large" />
                </div>
        }

    console.log(user)
  return (
    <div>
    <Card
        title="Profile"
        extra={<a href="#">{user.role}</a>}
        style={{
            width: 300,
        }}
        >
        <img style={{
            width: 100,
        }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt=""></img>
        <p>{user.name}</p>
        <p>{user.email}</p>
    </Card>
    </div>
  )
}

export default Profile