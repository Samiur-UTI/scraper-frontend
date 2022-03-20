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
        // console.log("Details",data.data)
      }
    }).catch(err=>{
      console.log(err)
    })
  },[])
  const itemData = details.photo ? JSON.parse(details.photo): []
  // console.log("PHOTOS",itemData)
  if(!details){
    return <div>Loading...</div>
  }
  return(
    <Container>
      <ImageList sx={{ width: 500, height: 450 }} cols={1} rowHeight={100}>
        {itemData.length ? itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item}`}
              srcSet={`${item}`}
              loading="lazy"
            />
          </ImageListItem>
        )): <div>Loading...</div>}
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
