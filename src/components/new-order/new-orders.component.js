import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const NewOrder = ({ onSubmit }) => {
  const [values, setValues] = useState({
    ten: '',
    com: '1',
    suon: '',
    suonCay: '',
    trung: '',
    cha: '',
    bi: '',
    lapXuong: '',
    comThem: '',
    ghiChu: '',
  })
  const handleChange = (e) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(values, setValues)
  }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '8.9%' },
        display: `flex`,
        flexWrap: `wrap`,
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField onChange={handleChange} size="small" name="ten" label="Tên" value={values.ten} />
      <TextField
        onChange={handleChange}
        size="small"
        name="com"
        label="Cơm"
        type="number"
        InputProps={{ inputProps: { min: 0, max: 10 } }}
        value={values.com}
      />
      <TextField
        onChange={handleChange}
        size="small"
        name="suon"
        label="Sườn"
        type="number"
        InputProps={{ inputProps: { min: 0, max: 10 } }}
        value={values.suon}
      />
      <TextField
        onChange={handleChange}
        size="small"
        name="suonCay"
        label="Sườn cây"
        type="number"
        InputProps={{ inputProps: { min: 0, max: 10 } }}
        value={values.suonCay}
      />
      <TextField
        onChange={handleChange}
        size="small"
        name="trung"
        label="Trứng"
        type="number"
        InputProps={{ inputProps: { min: 0, max: 10 } }}
        value={values.trung}
      />
      <TextField
        onChange={handleChange}
        size="small"
        name="cha"
        label="Chả"
        type="number"
        InputProps={{ inputProps: { min: 0, max: 10 } }}
        value={values.cha}
      />
      <TextField
        onChange={handleChange}
        size="small"
        name="bi"
        label="Bì"
        type="number"
        InputProps={{ inputProps: { min: 0, max: 10 } }}
        value={values.bi}
      />
      <TextField
        onChange={handleChange}
        size="small"
        name="lapXuong"
        label="Lạp Xưởng"
        type="number"
        InputProps={{ inputProps: { min: 0, max: 10 } }}
        value={values.lapXuong}
      />
      <TextField
        onChange={handleChange}
        size="small"
        name="comThem"
        label="Cơm Thêm"
        type="number"
        InputProps={{ inputProps: { min: 0, max: 10 } }}
        value={values.comThem}
      />
      <TextField onChange={handleChange} size="small" name="ghiChu" label="Ghi chú" value={values.ghiChu} />
      <Button type="submit" variant="text" sx={{ display: `none` }}>
        Lên đơn
      </Button>
    </Box>
  )
}

export default NewOrder
