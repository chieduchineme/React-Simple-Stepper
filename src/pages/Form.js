import React from 'react';
import { Stepper, Step, StepLabel, StepContent, Button, Typography, Box, Paper} from '@mui/material';
import Stack from '@mui/material/Stack';
import { leftSteps, steps, getStepContent } from '../api/formData';
import { ColorlibStepIcon, CircleStepIcon } from '../components/StyledIcons/styledIcons';
import { Introduction } from '../components/Introduction/Introduction';
import { withSidebarLayout } from '../components/HOC.js/hoc';
import "../../src/App.css";

function FormPage() {
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
     
    return (
      <div style={{display:"flex", flexDirection:"column"}}>
          <Introduction />
          <Stack sx={{ width: "100%", display:"flex", flexDirection:"row"}}>
            <Stepper activeStep={activeStep} orientation="vertical" >            
              {leftSteps.map((step) => (
                <Step key={step.label} >
                    <div className='leftSteps'>
                        {step.label}
                    </div>
                  <StepContent style={{visibility:"hidden", marginLeft:"-6em"}}    >
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
                                {activeStep === steps.length - 1 ? "Finish" : "Next Step"}
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
            <Stepper activeStep={activeStep} orientation="vertical" connector={<hr className="hrLine" />}>
              {steps.map((step) => (
                <Step key={step.label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}  >
                  </StepLabel>
                  <StepContent style={{visibility:"hidden", marginLeft:"-24em"}}  >
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
                                {activeStep === steps.length - 1 ? "Finish" : "Next Step"}
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
            <Stepper activeStep={activeStep} orientation="vertical">        
              {steps.map((step) => (
                <Step key={step.label} >                     
                  <StepLabel StepIconComponent={CircleStepIcon} >
                    {step.label}
                  </StepLabel>          
                  <StepContent  >             
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
                                {activeStep === steps.length - 1 ? "Finish" : "Next Step"}
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
          </Stack>
      </div>
    );
}

export default  withSidebarLayout(FormPage);
  
  
