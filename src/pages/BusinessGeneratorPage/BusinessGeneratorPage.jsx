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
import * as ideaAPI from "../../utils/ideaAPI";


export default function LoginPage(props) {
  const [error, setError] = useState("");
  const [idea, setIdea] = useState("");

  const navigate = useNavigate();

  const busStart = [
    'Micro',
    'Space',
    'Air',
    'Mc',
    'Pana',
    'Toyo',
    'Cheese Cake',
    'Mega',
    'Cosmo',
    'Eat N\'',
    'Neuro',
    'Euro' 
  ]

  const busEnd = [
    'Vision',
    'Hub',
    'Industries',
    'Eats',
    'Guns',
    'Tech',
    'Horse',
  ]

  const busNouns = [
    'block chain',
    'AI',
    'machine learning',
    'psychology',
    'gender studies',
    'facial recognition',
    'synergy',
    'solutions',
    'portfolio',
    'metrics',
    'KPIs',
    'engagement',
  ]

  const busAdjs = [
    'scalable',
    'modular',
    'peerless',
    'multi faceted',
    'user driven',
    'user forward',
    'engineer approved',
    'portable',
    'synergistic',
    'iconic',
    'first in class',
    'proven',
    'viral',
    'performant',
    'state of the art'
  ]

  const busNames = [
    // 'PornHub', //too spicy for class?
    'Amazon',
    'McDonalds',
    'Cheesecake Factory',
    'NetFlix',
    'SpaceX',
    'Tesla',
    'ITunes',
    'Google',
    'Tinder',
    'Trojan',
    'Neuro Link',
  ]

  const busAdvs = [
    'syngergistically',
    'disruptingly',
    'agressively',
    'extremely',
    'subtly',
    'massively',
    'fundamentally',

  ]

  const busTypes = [
    'fast food',
    'media services',
    'Aerospace startups',
    'entertainment',
    'advertisement',
    'engineering',
    'dating websites',
    'equestrian',
    'sports',
    'E-sports',
    'video game companies',
    'education'
  ]

  const busVerbs = [
    'disrupt',
    'reinvent',
    'enable',
    'flip the script on',
    'expand',
    'refactor',
    'draw attention to',
  ]
  // function handleChange(e) {
  //   setIdea({
  //     ...idea,
  //     [e.target.name]: e.target.value,
  //   });
  // }

  function generateIdea() {
    const bizName = `${busStart[
      Math.floor(Math.random() * busStart.length)]}${busEnd[
      Math.floor(Math.random() * busEnd.length)]}`

    const sentenceForms = [
      `${bizName} is the ${busNames[
        Math.floor(Math.random() * busNames.length)]} of ${busTypes[
        Math.floor(Math.random() * busTypes.length)]}. Using ${busAdjs[
        Math.floor(Math.random() * busAdjs.length)]} ${busNouns[
        Math.floor(Math.random() * busNouns.length)]} technology, ${bizName} is able to ${busAdvs[
          Math.floor(Math.random() * busAdvs.length)]} ${busVerbs[
            Math.floor(Math.random() * busVerbs.length)]} current ${busNouns[
              Math.floor(Math.random() * busNouns.length)]} markets.`,
    ]
    const ideaString = sentenceForms[0]
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
      const formData = new FormData()
      formData.append('idea', idea)
      handleAddIdea(formData); 
    }

  }

  async function handleIdea(e) {
    e.preventDefault();
    setIdea(generateIdea())

  }
  
  async function handleAddIdea(idea) {
    try {
      // setLoading(true);
      console.log("THIS IS IDEA, ", idea)
      const data = await ideaAPI.create(idea);

      setIdea([data.idea, ...idea]);
      // setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
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

