import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
export default function ResultTable() {
  const {state} = useLocation()
  const navigate = useNavigate()
  console.log("Table State",state)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='right'>Property Name</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Zip Code</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Capacity</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.data.map((row) => (
            <TableRow
              key={uuidv4()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right" onClick={() => { navigate(`/${row.property_name}`,{state:row}) }}><Link>{row.property_name}</Link></TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right">{row.zip}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.property_type}</TableCell>
              <TableCell align="right">{row.capacity}</TableCell>
              <TableCell align="right">{row.property_address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
