/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { MenuItem, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './index.css';
export default function Form() {
    const [property, setProperty] = useState('')
    const [county, setCounty] = useState('')
    let navigate = useNavigate();
    async function fetchData() {
        const response = await axios.get('http://localhost:8000');
        return response.data;
    }
    useEffect(() => {
        const data = fetchData();
        data.then(res => {
            if(res.success) {
                const { property, county } = res.data;
                // console.log(
                //     property,
                //     county
                // )
                setProperty(property);
                setCounty(county);
            }else{
                console.log(res)
            }
        }).catch(err => {
            console.log(err);
        })
    }, [])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            facility: property,
            name: '',
            city: '',
            county: county,
        },
        onSubmit: async (values) => {
            console.log(values);
            const response = await axios.post('http://localhost:8000/search', values);
            console.log(response.data);
            if(response.data.success) {
                navigate('/search',{state: response.data});
            }
            else alert('Something went wrong, search again');
        },
    });
    if (property.length > 0 && county.length > 0) {
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
                        defaultValue=''
                        value={formik.values.facility}
                        onChange={formik.handleChange}
                        required
                        error={
                            formik.touched.governorates &&
                            Boolean(formik.errors.governorates)
                        }
                        helperText={
                            formik.touched.governorates && formik.errors.governorates
                        }
                    >
                        {property.map((item) => (
                            <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
                        ))}
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
                        required
                        label="County"
                        select
                        value={formik.values.county}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.governorates &&
                            Boolean(formik.errors.governorates)
                        }
                        helperText={
                            formik.touched.governorates && formik.errors.governorates
                        }
                    >
                        {county.map((item) => (
                            <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
                        ))}
                    </TextField>
                    <Button color="primary" variant="contained" type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
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
                    <MenuItem>
                        <em>None</em>
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
                        Empty
                    </MenuItem>
                </TextField>
                <Button color="primary" variant="contained" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}
