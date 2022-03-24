import React, { useState, useEffect } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Carousel from 'react-material-ui-carousel'
import Link from '@mui/material/Link';
import axios from 'axios'
import './index.css'
export default function Details() {
  const { state } = useLocation()
  const [details, setDetails] = useState('')
  async function fetchDetails() {
    const responseData = await axios.get(`http://localhost:8000/details`, { params: state })
    return responseData.data
  }
  const navigate = useNavigate()
  useEffect(() => {
    fetchDetails().then(data => {
      if (data.success) {
        setDetails(data.data)
        console.log("Details", data.data)
      }
    }).catch(err => {
      console.log(err)
    })
  }, [])
  const itemData = details.photo ? JSON.parse(details.photo) : []
  // console.log("PHOTOS",itemData)
  if (!details) {
    return <div>Loading...</div>
  }
  return (
    <Container>
      <Carousel className='carousel'>
        {itemData.length ? itemData.map((item) => (
          <img
            alt="The house from the offer."
            src={item}
            loading='lazy'
            className='carousel-img'
          />

        )) : <div>Loading...</div>}
      </Carousel>
      <Box sx={{ width: 500, height: 450 }}>
        <List>
          <ListItem disablePadding>
            <ListItemText primary="Property Name" />
            <ListItemText secondary={details.name} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Address" />
            <ListItemText secondary={details.property_address} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="City" />
            <ListItemText secondary={details.city} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="State" />
            <ListItemText secondary={details.state} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Phone" />
            <ListItemText secondary={details.phone} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Type" />
            <ListItemText secondary={details.property_type} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="County" />
            <ListItemText secondary={details.county} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Zip Code" />
            <ListItemText secondary={details.zip} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Capacity" />
            <ListItemText secondary={details.capacity} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Map Link" />
            <ListItemText secondary={details.map ? <Link href={`${details.map}`}>View Location</Link> : 'No location available'} />
          </ListItem>
        </List>
      </Box>
    </Container>
  )
}
