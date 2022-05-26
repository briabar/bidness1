import React from 'react';
import { Card, Dimmer, Segment, Image  } from 'semantic-ui-react'
import PostCard from '../PostCard/PostCard';
// import Loader from '../Loader/Loader';

export default function PostFeed({ideas, numPhotosCol, isProfile, user }){

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
            <PostCard
              idea={idea}
              key={idea._id}
              isProfile={isProfile}
              user={user}
            />
          );
        })}
      </Card.Group>
  
    )
}