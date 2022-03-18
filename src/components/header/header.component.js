import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Button, FormControlLabel, FormGroup, Grid, Switch } from '@mui/material'
import { darkContext } from '../../contexts/theme.context'
const Header = () => {
  const { darkMode, toggleMode } = useContext(darkContext)
  return (
    <Box component={'header'}>
      <Grid container justifyContent="space-around">
        <Grid item>
          <NavLink to={'/'}>
            <Button>Đơn hàng</Button>
          </NavLink>
        </Grid>
        <Grid>
          <FormGroup>
            <FormControlLabel control={<Switch onChange={toggleMode} />} label={`${darkMode ? 'Tối' : 'Sáng'}`} />
          </FormGroup>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Header
