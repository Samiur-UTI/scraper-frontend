import React,{useEffect,useState} from 'react'
import { MenuItem, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import axios from 'axios';
import './index.css';
export default function Form() {
    const [data,setData] = useState({
        facility: '',
        name: '',
        address: '',
        city: '',
        county: '',
        phone: ''
    })
    async function fetchData(){
        const response = await axios.get('localhost:8000/');
        console.log(response);
        return response;
    }
    useEffect(() => {
        fetchData();
    },[])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: data ,
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className='form-container'>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    margin='normal'
                    fullWidth
                    variant="outlined"
                    name="facility"
                    label="Facility"
                    select
                    value=''
                    onChange={formik.handleChange}
                    error={
                        formik.touched.governorates &&
                        Boolean(formik.errors.governorates)
                    }
                    helperText={
                        formik.touched.governorates && formik.errors.governorates
                    }
                >
                    <MenuItem key={""} value={""}>
                        No Selected // Or Empty
                    </MenuItem>
                    <MenuItem value='sama'>
                        Option 1
                    </MenuItem>
                </TextField>
                <TextField
                    fullWidth
                    margin='normal'
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    margin='normal'
                    name="address"
                    label="Street Address"
                    type="text"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                    fullWidth
                    margin='normal'
                    name="city"
                    label="City"
                    type="text"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                    fullWidth
                    margin='normal'
                    variant="outlined"
                    name="county"
                    label="County"
                    select
                    value=''
                    onChange={formik.handleChange}
                    error={
                        formik.touched.governorates &&
                        Boolean(formik.errors.governorates)
                    }
                    helperText={
                        formik.touched.governorates && formik.errors.governorates
                    }
                >
                    <MenuItem key={""} value={""}>
                        No Selected // Or Empty
                    </MenuItem>
                    <MenuItem value='vuda'>
                        Option 1
                    </MenuItem>
                </TextField>
                <TextField
                    fullWidth
                    margin='normal'
                    name="phone"
                    label="Phone Number"
                    type="number"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}
