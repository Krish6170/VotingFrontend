import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

interface VoteCalc
{
    totalV:Number,
    voteC:Number
};

export default function LinearWithValueLabel({totalV,voteC}:VoteCalc) {
  const classes = useStyles();
  let per_vote:number=(Number(voteC)/Number(totalV))*100
  // console.log(`per ${per_vote}` )

//   const [progress, setProgress] = React.useState(3);




  return (
    <div className={classes.root}>
       
      <LinearProgressWithLabel value={per_vote} />
    </div>
  );
}
