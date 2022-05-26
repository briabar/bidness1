import { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
// import PageHeader from "../../components/Header/Header";
// import Loading from "../../components/Loader/Loader";
import ProfileBio from "../../components/ProfileBio/ProfileBio";
import IdeaGallery from "../../components/IdeaGallery/IdeaGallery";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import ideaAPI from "../../utils/ideaAPI";

import { useParams } from "react-router-dom";





export default function ProfilePage(props) {
//   const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const [ideas, setIdeas] = useState([]);
  // We need to grab the username out of the url,
  const { username } = useParams();
  console.log(username);

  async function removeIdea(ideaId) {
      try {
          const data = await ideaAPI.removeIdea(ideaId);
          console.log(data, 'heres idea removal');
          getProfile();
      } catch(error) {
          console.log(error);
          setError(error.message)
      }
  }

  async function getProfile() {
    try {
      const data = await userService.getProfile(username);
      console.log(data, " < -- data");
    //   setLoading(() => false);
      setUser(data.user);
      setIdeas(data.ideas);
    } catch (err) {
      console.log(err);
      setError("Profile Doesn't exists, CHECK YOUR TERMINAL FOR EXPRESS!");
    }
  }

  useEffect(() => {
    getProfile();
  }, []);




  if (error) {
    return (
      <>
        {/* <PageHeader handleLogout={props.handleLogout} user={props.user}/> */}
        <ErrorMessage error={error} />;
      </>
    );
  }

//   if (loading) {
//     return (
//       <>
//         {/* <PageHeader handleLogout={props.handleLogout} user={props.user}/> */}
//         <Loading />
//       </>
//     );
//   }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          {/* <PageHeader handleLogout={props.handleLogout} user={props.user}/> */}
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <ProfileBio user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column style={{ maxWidth: 750 }}>
        <span>{user.username}'s Business Ideas</span>
        <IdeaGallery
            isProfile={true}
            ideas={ideas}
            numPhotosCol={1}
            user={props.user}
            removeIdea={removeIdea}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}