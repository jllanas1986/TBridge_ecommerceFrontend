import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { Card, Spin, Collapse } from 'antd';
import "./Profile.scss"


const Profile = () => {
    const { Panel } = Collapse;
    const {getUserInfo, user} = useContext(UserContext);
    useEffect(()=>{
        getUserInfo();
    }, [] );
    if(!user){
        return  <div>
                    <p>Datos de acceso incorrectos</p>
                    <Spin size="large" />
                </div>
        }

    console.log(user)
    return (
        <div className="profileContainer">
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
            {/* <h2>Orders</h2>
            {user.orderIds.map(order => {
                return (
                    <Collapse defaultActiveKey={['1']} >
                        <Panel header={order.createdAt} key="1">
                            <p>{}</p>
                        </Panel>
                    </Collapse>
                )
            })} */}
            <Collapse defaultActiveKey={['1']} >
                <Panel header="This is panel header 1" key="1">
                    <p>{}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>{}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>{}</p>
                </Panel>
            </Collapse>
        </div>
    )
}

export default Profile