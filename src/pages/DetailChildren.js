import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { Container, Typography, Divider, Stack, Box, CircularProgress, Stepper, Step, StepLabel, StepContent, Button, Paper } from '@mui/material'
import {fetchChildrenById, fetchMedicalRecords, fetchMedicalTreatment} from '../redux/actions/index'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function DetailChildren () {

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
  
  const {id} = useParams()
  useEffect(() => {
    dispatch(fetchChildrenById(id))
    dispatch(fetchMedicalRecords(id))
    dispatch(fetchMedicalTreatment())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  let children = useSelector(state => state.children)
  let medical= useSelector(state => state.medical)
  let treatment = useSelector(state => state.treatment)


  const dispatch = useDispatch()

  function getTreatmentName(idTreatment) {
    if(idTreatment===undefined||idTreatment===0) return 'kunjungan'
    else if(idTreatment===null) return 'kelahiran'
    let result = treatment.treatment.result.find(el => el.id === idTreatment)
    return result.name
  }

  if (children.loading || medical.loadingRecord || treatment.loadingTreatment) {
    return (
      <>
      <Container>
        <Stack sx={{display: 'flex', direction: 'row'}}>
        <Box          
          sx={{
            width: "100%",
            height: "100%",
            display: 'flex',
            mx:'auto',
            justifyContent: 'center'
          }}>
          <CircularProgress />
        </Box>
        </Stack>
      </Container>  
      </>
    )
  }
  console.log(treatment.treatment);
  return (
    <Container>
      <Stack sx={{display: 'flex', direction: 'row'}} divider={<Divider></Divider>}>
        <Box
          sx={{
            width: "100%",
            justifyContent: 'space-evenly',
            marginTop: 10,
            marginBottom: 10
          }}
        >
          {/* <Typography variant="h5" sx={{ marginBottom: 5 }}>Biodata</Typography> */}
          <Card sx={{ maxWidth: 345, mx:"auto" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="350"
                image={children.children.result.gender !== 'pria' ? "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png" : "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/boy_afro_kid_child-256.png"}
                alt="Avatar"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {children.children.result.name}
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                  {children.children.result.nik}
                </Typography>
                <Typography variant="body2" color="text.secondary">{children.children.result.pob}, {new Date(children.children.result.dob).toDateString()} </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: 'flex',
            direction: 'column',
            justifyContent: 'space-evenly',
            marginTop: 10
          }}
        >
          <Box
          sx={{
            width: "100%",
          }}
          >
            <Typography variant="h5"  sx={{marginBottom: 5}}>Timeline Medical Record</Typography>
            <Stepper activeStep={activeStep} orientation="vertical">
              {medical.medicalRecords.result.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel>
                    {getTreatmentName(step.id_treatment)}
                    <Typography sx={{fontSize: 10, opacity:0.7}}>
                      {new Date(step.createdAt).toISOString().split('T')[0]}
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.note}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? 'Finish' : 'Continue'}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length-1 && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>All steps completed - you&apos;re finished</Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button>
              </Paper>
            )}
          </Box>
        </Box>
      </Stack>
      
    </Container>
  )
}

export default DetailChildren