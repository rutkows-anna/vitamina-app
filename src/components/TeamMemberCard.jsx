import React from "react";
import { makeStyles } from "@material-ui/core";
import { MembersList } from "./TeamMemberList";

import "./TeamMemberCard.css";

import GitHubImg from "./image/github.svg";
import FacebookImg from "./image/facebook.svg";
import LinkedInImg from "./image/linkedin.svg";

const TeamMemberCard = ( {card} ) => (

  <div className="root" 
    style={{
      display: 'block', 
      flexWrap: 'wrap', 
      flexDirection: 'column', 
      width: '100%', 
      height: '100%', 
      marginLeft: 'auto', 
      marginRight: 'auto', 
      alignItems: 'center', 
      alignContent: 'center', 
      textAlign: 'center', 
      border: 'solid 1px rgba(39, 39, 39, 0.2)'
    }}>

      <figure style={{
        width: '100%', 
        height: '57.5%', 
        overflow: 'hidden', 
        margin: '0'
      }}>
        <img 
          src={card.img} 
          alt="Zdjęcie członka zespołu"

          style={{width: '100%', height: '100%', borderRadius: 'inherit'}}
        />
      </figure>
      <h3 style={{width: '100%', margin: '20px auto 0px', padding: '' }} >{card.name}</h3>
      <h4 style={{width: '100%', margin: '10px auto'}}>{card.title}</h4>

      <div style={{
        display: 'flex', 
        justifyContent: 'space-around',
        width: '100%'
      }}>

        <a href={card.urlGH} style={{
          color: '#1890ff'
        }}>
          <img src={GitHubImg} style={{width: '25px', height: '25px', color: '#1890ff'}} />
        </a>
        <a href={card.urlFB} style={{
          color: '#1890ff'
        }}>
          <img src={FacebookImg} style={{width: '25px', height: '25px', color: '#1890ff'}} />
        </a>
        <a href={card.urlLN} style={{
          color: '#1890ff'
        }}>
          <img src={LinkedInImg} style={{width: '25px', height: '25px', color: '#1890ff'}} />
        </a>

      </div>
  </div>
)

export default TeamMemberCard;