import React from 'react';
import { Card, Dimmer, Segment, Image  } from 'semantic-ui-react'
import FeaturedCard from '../FeaturedCard/FeaturedCard';
// import Loader from '../Loader/Loader';

export default function FeaturedFeed({users, numPhotosCol}){
    console.log("USERS BEFORE MAP -->", users)
    const featuresCard = users.map((user, idx) => {
        console.log("USER in map-->", user)
          return (
            <FeaturedCard
              user={user}
              key={idx}
            />
          );
        })
    console.log(featuresCard)
    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
        {featuresCard}
      </Card.Group>
  
    )
}