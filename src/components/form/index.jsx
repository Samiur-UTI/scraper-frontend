import React from 'react'
import { Box, InputLabel, MenuItem, Select, TextField, Button, FormControl } from '@mui/material';
import { useFormik } from 'formik';
import './index.css';
export default function Form() {
    const formik = useFormik({
        initialValues: {

        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className='form-container'>
            <form onSubmit={formik.handleSubmit}>
                <TextField
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
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
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
