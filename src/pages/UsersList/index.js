import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { getUsers, removeUser } from "../../actions/users.actions";
import { List, Card, Button, Spin } from "antd";

const UsersList = ({ history }) => {
  const users = useSelector(state => state.users.list);
  const isLoading = useSelector(state => state.users.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      {isLoading ? (
        <Spin style={{ padding: "100px 100px" }} />
      ) : (
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={users}
          renderItem={user => (
            <List.Item>
              <Card
                title={user.firstname}
                cover={<img alt="Profil" src={user.avatarUrl} />}
              >
                <Button
                  onClick={() => history.push(`/users/${user.id}`)}
                  type="primary"
                >
                  Modifier
                </Button>
                <Button
                  onClick={() => dispatch(removeUser(user.id))}
                  type="danger"
                >
                  Supprimer
                </Button>
              </Card>
            </List.Item>
          )}
        />
      )}
    </>
  );
};

export default connect()(UsersList);
