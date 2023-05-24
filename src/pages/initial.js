import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import StepContent from '@mui/material/StepContent';
// import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { StepIcon, Stepper, Step, StepLabel, StepContent, Button, Typography, Box, Paper } from '@mui/material';

const steps = [
  {
    label: '',
    description: `Please fill in your name below.`,
  },
  {
    label: '',
    description:
      'Please fill in your city location',
  },
  {
    label: '',
    description: `tell us your Telephone Number`,
  },
  {
    label: '',
    description: 'tell us your House Address'
  },
  {
    label: '',
    description: 'tell us your country of residence'
  }
];


const StyledStepIcon = styled(StepIcon)(({ theme }) => ({
    '& .MuiStepIcon-active': {
      color: theme.palette.secondary.main,
    },
    '& .MuiStepIcon-completed': {
      color: theme.palette.secondary.main,
    },
    '& .MuiStepIcon-text': {
      display: 'none',
    },
  }));
  
  export default function FormPage() {
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  
    const getStepContent = (step) => {
      switch (step) {
        case 0:
          return (
            <>
              <h4> Let's Start with your name </h4>
              <small>Enter your name here</small>
            </>
          );
        case 1:
          return (
            <>
              <h4> Step 2 </h4>
              <small>Enter step 2 details here</small>
            </>
          );
        case 2:
          return (
            <>
              <h4> Step 3 </h4>
              <small>Enter step 3 details here</small>
            </>
          );
        case 3:
          return (
            <>
              <h4> Step 4 </h4>
              <small>Enter step 4 details here</small>
            </>
          );
        case 4:
          return (
            <>
              <h4> Last Step </h4>
              <small>Enter last step details here</small>
            </>
          );
        default:
          return "Unknown step";
      }
    };
  
    return (
      <>
        <h4>My Skill Level</h4>
        <small>Answer the following questions to begin your plan</small>
        <hr />
  
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ width: "50%", pr: 2 }}>
            {activeStep === steps.length ? (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
                ) : (
                <Box>
                    {getStepContent(activeStep)}
                    <Box sx={{ mb: 2 }}>
                        <div>
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                                >
                            {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                            </Button>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                                >
                            Back
                            </Button>
                        </div>
                    </Box>
                </Box>
            )}
          </Box>
  
          <Box sx={{ width: "50%" }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step) => (
                <Step key={step.label}>
                  <StepLabel>{step.label}</StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    {activeStep === steps.length ? (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            Reset
                            </Button>
                        </Paper>
                        ) : (
                        <Box>
                            {getStepContent(activeStep)}
                            <Box sx={{ mb: 2 }}>
                            <div>
                                <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                                >
                                {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                                </Button>
                                <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                                >
                                Back
                                </Button>
                            </div>
                            </Box>
                        </Box>
                        )
                    }
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Box>
      </>
    );
  }
  

  {/* {
      index === 4 ? (
          <Typography variant="caption">Last step</Typography>
      ) : index === 0 ? (
          <h4> Let's Start with your name </h4>
      ) : null
      } */}