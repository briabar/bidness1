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

      {/* <Image src={`${idea.photoUrl}`} wrapped ui={false} /> */}
      <Card.Content>
        <Card.Description>{user.bio}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={"right"}>
        <Button/>
      </Card.Content>
    </Card>
  );
}

export default IdeaCard;
