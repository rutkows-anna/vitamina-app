import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { tileData } from './ChallengeDescription';

const Progress = () => {
  const useStyles = makeStyles((theme) => ({   
    gridList: {
      height: 450,
    },
    tileStyling: {
      width: 100,
      height: 450,
      padding: '10px'
    },
    boxShadow:{
      boxShadow: '3px 3px 5px #aaaaaa',
    }
  
        }));
        const classes = useStyles();
        
        
       let challengeList = [];
        for(let i = 0; i < localStorage.length; i++){
          let key = localStorage.key(i);
          challengeList.push(key); 
        }

        return (

          <div>
               <h1 style={{margin: '1%'}}>Wyzwania w trakcie realizacji</h1>
      <GridList cellHeight={180} cols={2}>
        {tileData.map(tile => {
                        if(challengeList.includes(`InProgress${tile.id}`)){
                            return (
            <GridListTile key={tile.id} className={classes.tileStyling}>  

              <img className={classes.boxShadow} src={tile.img} alt={tile.title}/>
              <Link to={`challenges/${tile.id}`}>
              <GridListTileBar
                title={tile.title}
                subtitle={<span>{tile.category}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  </IconButton>
                }
              />
               </Link>
            </GridListTile>
        ) } })}
      </GridList>
      <h1 style={{margin: '1%'}}>Wyzwania zakończone</h1>
      <GridList cellHeight={180} cols={2}>
        {tileData.map(tile => {
                        if(challengeList.includes(`Finished${tile.id}`)){
                            return (
            <GridListTile key={tile.id} className={classes.tileStyling}>  

              <img className={classes.boxShadow} src={tile.img} alt={tile.title}/>
              <Link to={`challenges/${tile.id}`}>
              <GridListTileBar
                title={tile.title}
                subtitle={<span>{tile.category}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  </IconButton>
                }
              />
               </Link>
            </GridListTile>
        ) } })}
      </GridList>
    </div>
          )
   
};
        

export default Progress;