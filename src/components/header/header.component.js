import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Button } from '@mui/material'

const Header = () => {
  return (
    <Box component={'header'}>
      <NavLink to={'/'}>
        <Button>Đơn hàng</Button>
      </NavLink>
    </Box>
  )
}

export default Header
