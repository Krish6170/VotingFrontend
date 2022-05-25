import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useVote } from "../hooks/useVote";

const useStyles = makeStyles({
  root: {
    maxWidth: 354,
    flexGrow:1
    
  },
  media: {
    height: 140,
  },
});

interface candidateprpos
{
    name:string,
    index:number

}


export default function MediaCard({name,index}:candidateprpos) {
  const classes = useStyles();
  const { test_call, test_win_status } = useVote();
  const handleVote = () => {
    return test_call(index);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
  
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
       <Button onClick={handleVote} variant="contained" color="primary">
        Vote
      </Button>
      </CardActions>
    </Card>
  );
}