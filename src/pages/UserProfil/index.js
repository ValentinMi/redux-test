import React from "react";
import { connect, useSelector } from "react-redux";
import { Card, Button } from "antd";

const UserProfil = () => {
  const user = useSelector(state => state.users.currentUser);
  const { firstname, lastname, email, avatarUrl } = user;

  return (
    <>
      <Card
        title={firstname + " " + lastname}
        cover={<img alt="Profil" src={avatarUrl} />}
        style={{ width: "30%" }}
      >
        <p>{email}</p>
      </Card>
    </>
  );
};

export default connect()(UserProfil);
