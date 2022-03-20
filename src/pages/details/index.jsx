import React,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios'
export default function Details() {
  const {state} = useLocation()
  const [details,setDetails] = useState('')
  async function fetchDetails(){
    const responseData = await axios.get(`http://localhost:8000/details`,{params:state})
    return responseData.data
  }
  useEffect(()=>{
    fetchDetails().then(data=>{
      if(data.success){
        setDetails(data.data)
        console.log("Details",data.data)
      }
    }).catch(err=>{
      console.log(err)
    })
  },[])
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];
  if(!details){
    return <div>Loading...</div>
  }
  return(
    <Container>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ width: 500, height: 450 }}>
      <List>
          <ListItem disablePadding>
              <ListItemText primary="Property Name" />
              <ListItemText primary={details.name} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemText primary="Address"/>
              <ListItemText primary={details.property_address} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemText primary="City"/>
              <ListItemText primary={details.city} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemText primary="State"/>
              <ListItemText primary={details.state} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemText primary="Phone"/>
              <ListItemText primary={details.phone} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemText primary="Type"/>
              <ListItemText primary={details.property_type} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemText primary="County"/>
              <ListItemText primary={details.county} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemText primary="Zip Code"/>
              <ListItemText primary={details.zip} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemText primary="Capacity"/>
              <ListItemText primary={details.capacity} />
          </ListItem>
        </List>
      </Box>     
    </Container>
  )
}
