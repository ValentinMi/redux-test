import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "antd";

const UserProfil = ({ match }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `http://goweb.eu.ngrok.io/users/${match.params.id}`
      );
      setUser(data.user);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  const { firstname, lastname, email, avatarUrl } = user;

  return (
    <>
      {isLoading ? (
        "loading..."
      ) : (
        <Card
          title={firstname + " " + lastname}
          cover={<img alt="Profil" src={avatarUrl} />}
          style={{ width: "30%" }}
        >
          <p>{email}</p>
        </Card>
      )}
    </>
  );
};

export default UserProfil;
