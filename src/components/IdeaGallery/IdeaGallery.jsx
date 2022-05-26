import React from 'react';
import { Card, Dimmer, Segment, Image  } from 'semantic-ui-react'
import IdeaCard from '../IdeaCard/IdeaCard';
// import Loader from '../Loader/Loader';

export default function IdeaFeed({ideas, numPhotosCol, isProfile, removeIdea, user }){

    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
        {/* {loading ? (
          <Segment>
            <Dimmer active inverted>
              <Loader size="small">Loading</Loader>
            </Dimmer>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
        ) : null} */}
        {ideas.map((idea) => {
          return (
            <IdeaCard
              idea={idea}
              key={idea._id}
              isProfile={isProfile}
              removeIdea={removeIdea}
              user={user}
            />
          );
        })}
      </Card.Group>
  
    )
}