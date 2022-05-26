import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
function IdeaCard({ idea, isProfile, removeIdea, user }) {
  function removeIdeaClick(ideaId) {
    removeIdea(idea._id)
  }

  // if the logged users id doesn't exist in the post.likes array, then the heart should be
  // grey, because the user hasn't liked the post, and the click handler should be addLike
  console.log(idea);
  return (
    <Card key={idea._id} raised>
      {isProfile ? (
        ""
      ) : (
        <Card.Content textAlign="left">
          <Card.Header>
            <Link to={`/${idea.user.username}`}>
              {/* <Image
                size="large"
                avatar
                src={
                  idea.user.photoUrl
                    ? post.user.photoUrl
                    : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                }
              /> */}
              {idea.user.username}
            </Link>
          </Card.Header>
        </Card.Content>
      )}

      {/* <Image src={`${idea.photoUrl}`} wrapped ui={false} /> */}
      <Card.Content>
        <Card.Description>{idea.idea}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={"right"}>
        <Button
        onClick={removeIdeaClick} />
      </Card.Content>
    </Card>
  );
}

export default IdeaCard;
