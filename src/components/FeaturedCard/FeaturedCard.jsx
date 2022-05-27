import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
function IdeaCard({ user }) {
  console.log("user prop -->", user);
  return (
    <Card key={user._id} raised>
        <Card.Content textAlign="left">
          <Card.Header>
            <Link to={`/${user.username}`}>
              <Image
                size="small"
                avatar
                rounded
                src={
                  user.photoUrl
                    ? user.photoUrl
                    : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                }
              />
              {user.username}
            </Link>
          </Card.Header>
        </Card.Content>
      <Card.Content>
        <Card.Description>{user.bio}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={"right"}>
      </Card.Content>
    </Card>
  );
}

export default IdeaCard;
