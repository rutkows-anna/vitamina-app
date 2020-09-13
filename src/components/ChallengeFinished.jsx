// import React from 'react';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import { Link } from "react-router-dom";
// import { tileData } from './ChallengeDescription';

// const ChallengeFinished = () => {
//   const useStyles = makeStyles((theme) => ({   
//     gridList: {
//       height: 450,
//     },
//     tileStyling: {
//       width: 100,
//       height: 450,
//       padding: '10px',
//       borderRadius: '8px'
//     },
//     tileStyle: {
//       borderRadius: '8px',
//       boxShadow: 'rgba(39, 39, 39, 0.2) 2px 2px 4px'
//     }
  
//         }));
//         const classes = useStyles();
        
        
//        let challengeList = [];
//         for(let i = 0; i < localStorage.length; i++){
//           let key = localStorage.key(i);
//           challengeList.push(key); 
//         }

//         return (
//       <div>
//         <h1 style={{margin: '1%'}}>Wyzwania zakończone</h1>
//         <GridList cellHeight={180} cols={2}>
//           {tileData.map(tile => {
//                           if(challengeList.includes(`Finished${tile.id}`)){
//                               return (
//               <GridListTile key={tile.id} classes={{ tile: classes.tileStyle}} style={{cursor:'pointer'}}>  

//                 <img className={classes.tileStyle} src={tile.img} alt={tile.title} />
//                 <Link to={`challenges/${tile.id}`}>
//                 <GridListTileBar
//                   title={tile.title}
//                   subtitle={<span>{tile.category}</span>}
//                   actionIcon={
//                     <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
//                     </IconButton>
//                   }
//                 />
//                 </Link>
//               </GridListTile>
//           ) } })}
//         </GridList>
//     </div>
//           )
   
// };
        

// export default ChallengeFinished;