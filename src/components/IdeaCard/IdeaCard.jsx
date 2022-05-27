import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
function IdeaCard({ idea, isProfile, removeIdea, user }) {
  function removeIdeaClick(ideaId) {
    console.log("THIS ONE IS BEING DELETED!--->", ideaId);
    removeIdea(ideaId)
  }

  // if the logged users id doesn't exist in the post.likes array, then the heart should be
  // grey, because the user hasn't liked the post, and the click handler should be addLike
  console.log(idea);
  return (
    <Card key={idea._id} raised>
      {!idea ? (
        ""
      ) : (
        <Card.Content textAlign="left">
          <Card.Header>
            <Link to={`/${idea.user.username}`}>
              {idea.user.username}
            </Link>
          </Card.Header>
        </Card.Content>
      )}

      <Card.Content>
        <Card.Description>{idea.idea}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={"right"}>
        <Button
        color="red"
        onClick={() => removeIdeaClick(idea._id)}>Delete</Button>
      </Card.Content>
    </Card>
  );
}

export default IdeaCard;
