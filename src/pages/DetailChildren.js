import React, {useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { Container, Typography, Button, Stack, Box, CircularProgress } from '@mui/material'
import {fetchChildrenById} from '../redux/actions/index'

function DetailChildren () {
  const children = useSelector(state => state.children)


  let history = useHistory()
  const dispatch = useDispatch()
  const {id} = useParams()

  useEffect(() => {
    dispatch(fetchChildrenById(id))
  },[])

  if (children.loading) {
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  }



  return (
    <Container>
      <Stack>
        <Typography variant="h2">Detail Anak</Typography>
        <Button>Show</Button>
      </Stack>
      
    </Container>
  )
}

export default DetailChildren 