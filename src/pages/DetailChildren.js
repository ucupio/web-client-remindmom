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
          <Typography variant="h5" sx={{marginBottom: 5}}>Biodata</Typography>
          <Box
            sx={{
              // width: "100%",
              display: 'flex',
              direction: 'column'
            }}
          >
            <Stack
              direction="column"
              spacing={2}
              sx={{
                flex: 1,
                mx: 'auto'
              }}
            >
              <Typography variant="p">NIK</Typography>
              <Typography variant="p">Name</Typography>
              <Typography variant="p">Status</Typography>
              <Typography variant="p">Gender</Typography>
              <Typography variant="p">Height</Typography>
              <Typography variant="p">Weight</Typography>
              <Typography variant="p">DOB</Typography>
              <Typography variant="p">POB</Typography>
            </Stack>
            <Stack
              direction="column"
              spacing={2}
              sx={{
                flex: 1,
                mx: 'auto'
              }}
            >
              <Typography variant="p">:</Typography>
              <Typography variant="p">:</Typography>
              <Typography variant="p">:</Typography>
              <Typography variant="p">:</Typography>
              <Typography variant="p">:</Typography>
              <Typography variant="p">:</Typography>
              <Typography variant="p">:</Typography>
              <Typography variant="p">:</Typography>
            </Stack>
            <Stack
              direction="column"
              spacing={2}
              sx={{
                flex: 1,
                mx: 'auto'
              }}
            >
              <Typography variant="p">{children.children.result.nik}</Typography>
              <Typography variant="p">{children.children.result.name}</Typography>
              <Typography variant="p">{children.children.result.status}</Typography>
              <Typography variant="p">{children.children.result.gender}</Typography>
              <Typography variant="p">{children.children.result.height}</Typography>
              <Typography variant="p">{children.children.result.weight}</Typography>
              <Typography variant="p">{new Date(children.children.result.dob).toISOString().split('T')[0]}</Typography>
              <Typography variant="p">{children.children.result.pob}</Typography>
            </Stack>
          </Box>
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
            <Typography variant="h5"  sx={{marginBottom: 5}}>Timeline Treatment</Typography>
            <Stepper activeStep={activeStep} orientation="vertical">
              {medical.medicalRecords.result.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    // optional={
                    //   index === medical.medicalRecords.result.length-1 ? (
                    //     <Typography variant="caption">Last step</Typography>
                    //   ) : null
                    // }
                  >
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

        {/* <Box
          sx={{
            width: "100%",
          }}
        >
        <Box
          sx={{
            width: "100%",
          }}
          >
            <Typography variant="h5">Medical record</Typography>
            <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <DetailTable key={row.name} row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Box
          sx={{
            width: "100%",
          }}
          >
            <Typography variant="h5">Visualization Medical Record</Typography>
            <Line options={options} data={data} />
          </Box>
        </Box> */}
      </Stack>
      
    </Container>
  )
}

export default DetailChildren