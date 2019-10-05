import React from "react";
import { Card } from "react-bootstrap";
import moment from "moment";

const Notification = props => {
  const { notifications } = props;
  return (
    <Card>
      <Card.Body>
        <Card.Title>Notification</Card.Title>
        <ul className="list-group list-group-flush">
          {notifications &&
            notifications.map(item => {
              return (
                <li className="list-group-item" key={item.id}>
                  <Card.Text>
                    <span class="text-success pr-2">{item.user}</span>
                    <span>{item.content}</span>
                    <br />
                    <small className="text-muted">
                      {moment(item.time.toDate()).fromNow()}
                    </small>
                  </Card.Text>
                </li>
              );
            })}
        </ul>
      </Card.Body>
    </Card>
  );
};
export default Notification;
