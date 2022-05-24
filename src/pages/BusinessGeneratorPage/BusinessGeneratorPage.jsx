import React, { useState } from "react";
import "./BusinessGeneratorPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
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
import BusinessIdea from '../../components/BusinessIdea/BusinessIdea';

export default function LoginPage(props) {
  const [error, setError] = useState("");
  const [idea, setIdea] = useState("");

  const navigate = useNavigate();

  // function handleChange(e) {
  //   setIdea({
  //     ...idea,
  //     [e.target.name]: e.target.value,
  //   });
  // }

  function generateIdea() {
    const ideaString = "This is an idea!"
    return ideaString
  }

  async function handleSave(e) {
    e.preventDefault();
    if (idea === "") {
      //do nothing
    }
    else {
      console.log(idea);
      //save the idea
    }

  }

  async function handleIdea(e) {
    e.preventDefault();
    setIdea(generateIdea())

  }

  return (
    <>
      <Grid
        textAlign="center"
       
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Generate a Business Idea
          </Header>
          <BusinessIdea 
            value={idea}>
            
            </BusinessIdea>
            <Button
                color="teal"
                fluid
                size="large"
                type="submit"
                onClick={handleSave}
                className="btn"
              >

                Save Idea
            </Button>
            <br />
            <Button
                color="teal"
                fluid
                size="large"
                type="submit"
                onClick={handleIdea}
                className="btn"
              >

                Generate Disruptive Business Idea
            </Button>
          <Message>
            New to us? <Link to="/signup">Sign Up</Link>
          </Message>
          {error ? <ErrorMessage error={error} /> : null}
        </Grid.Column>
      </Grid>
    </>
  );
}

