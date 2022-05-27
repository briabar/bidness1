import React, { useState, useEffect } from "react";
import "./FeaturedPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import FeaturedFeed from "../../components/FeaturedFeed/FeaturedFeed";
import PageHeader from "../../components/PageHeader/PageHeader";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
// import BusinessIdeaForm from '../../components/BusinessIdeaForm/BusinessIdeaForm';
// import * as ideaAPI from "../../utils/ideaAPI";


export default function FeaturedPage(props) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function getUsers() {
    try {
      const users1 = await userService.getAll();
      setUsers(users1.users);
      console.log(users1)

    } catch (err) {
      console.log(err.message, " this is the error");
      setError(err.message);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Grid
        textAlign="center"
       
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
        <PageHeader handleLogout={props.handleLogout} user={props.user}/>
          <Header as="h2" color="teal" textAlign="center">
            Featured Entrepreneurs
          </Header>
          <FeaturedFeed users={users} numPhotosCol="1" ></FeaturedFeed>
          <Message>
            New to us? <Link to="/signup">Sign Up</Link>
          </Message>
          {error ? <ErrorMessage error={error} /> : null}
        </Grid.Column>
      </Grid>
    </>
  );
}

