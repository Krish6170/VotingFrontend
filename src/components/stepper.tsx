import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import {Input  } from "@material-ui/core";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { AddCandidates,AddVote,StartVote } from "../hooks/useVote";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }),
);

function getSteps() {
  return ['Add Candidates', 'Add Voters', 'Start Vote'];
}

function getStepContent(step: number,handleInputChange:any,amount:Array<string>) {




  switch (step) {
    case 0:
      

      return(<div>
          <Input onChange={handleInputChange}></Input>
          {/* <div>
              {amount}
          </div> */}
      </div>);
    case 1:
      return (<div>
        <Input onChange={handleInputChange}></Input>
        {/* <div>
            {amount}
        </div> */}
    </div>);
    case 2:
        return (<div>
            <Input onChange={handleInputChange}></Input>
            {/* <div>
                {amount}
            </div> */}
        </div>);
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  
  const [amount, setAmount] = React.useState< Array< string>>([""])
  
  const { AddBulkCand, addCandidateBulk_status } = AddCandidates();
  const { AddBulkVote,  addCandidateVote_status  } = AddVote();
  const { StartVoting,  StartVote_status  } = StartVote();
 
  
//   const handleInputAddCandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       const newAmount = event.target.value === "" ? "" : String(event.target.value)
//       const valueArray=newAmount.split(",").map(function(item) {
//         return item.trim();
//       })
      
//       console.log(valueArray )
//       return AddBulkCand(valueArray);
//   }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = event.target.value === "" ? "" : String(event.target.value)
    const valueArray=newAmount.split(",").map(function(item) {
      return item.trim();
    })    
    console.log(valueArray )
    setAmount(valueArray)
    
}



  const handleNext = () => {
    
    if(activeStep==0)
    {
        AddBulkCand(amount)
        setAmount([""])

    }
    if(activeStep==1)
    {   console.log(activeStep)
        AddBulkVote(amount)
        setAmount([""])
  
    }
    if(activeStep==2 )
    {   let time_val=amount[0]
        let int_time_value=parseInt(time_val)
        StartVoting(int_time_value)
        setAmount([""])
    }


    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    
    
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };




  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index,handleInputChange,amount)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>

        </Paper>
      )}
    </div>
  );
}