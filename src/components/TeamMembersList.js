import React from 'react';

import TeamMemberCard from "./TeamMemberCard.jsx";
import { MembersList } from "./TeamMemberList";
import "./TeamMemberCard.css";

import CssBaseline from '@material-ui/core/CssBaseline'; // ??
import Grid from '@material-ui/core/Grid';               // ??
import Container from '@material-ui/core/Container';

const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'flex-start',
		overflow: 'hidden',
		padding: 0
	},
	x: {
		margin: 50
	},
	gridList: {
		width: 500,
     height: 450,
     
     display: 'flex',
     flexWrap: 'wrap',
		justifyContent: 'flex-start',
		overflow: 'hidden',
		padding: 0
  }
};

const classes = styles;

const TeamMembersListComponent = () => (

  <>
    <Container className={classes.gridList} style={{width: '100%', margin: '0%', padding: '0%'}}>
    <ul className="team-card" style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      
      listStyleType: 'none',

      padding: '0px',
      width: '95%',
      margin: '0% auto'

    }}
    >

      {
        MembersList.map((member) => (
          <li key={member.id} style={{width: '160px', height: '280px', margin: '5% 3%', boxShadow: '3px 3px 5px #aaaaaa'}}>
            <TeamMemberCard card={member} />
          </li>
        ))
      }
    </ul>
    </Container>
  </>

)

export default TeamMembersListComponent;



