import { Button, Grid, Paper, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

const OrderList = ({ orders, onDone, onDelete }) => {
  return (
    <>
      {!orders.length && (
        <Typography textAlign={'center'} variant="subtitle1">
          Hiện không có đơn hàng.
        </Typography>
      )}
      {!!orders.length && (
        <Grid container sx={{ my: 4 }}>
          <Grid item textAlign={'center'} xs={0.9}>
            <Button>Tên</Button>
          </Grid>
          <Grid item textAlign={'center'} xs={0.9}>
            <Button>Cơm</Button>
          </Grid>
          <Grid item textAlign={'center'} xs={0.9}>
            <Button>Sườn</Button>
          </Grid>
          <Grid item textAlign={'center'} xs={0.9}>
            <Button> Sườn Cây</Button>
          </Grid>
          <Grid item textAlign={'center'} xs={0.9}>
            <Button> Trứng</Button>
          </Grid>
          <Grid item textAlign={'center'} xs={0.9}>
            <Button>Chả</Button>
          </Grid>
          <Grid item textAlign={'center'} xs={0.9}>
            <Button>Bì</Button>
          </Grid>
          <Grid item textAlign={'center'} xs={0.9}>
            <Button>Lạp Xưởng</Button>
          </Grid>
          <Grid item textAlign={'center'} xs={0.9}>
            <Button>Cơm thêm</Button>
          </Grid>
          <Grid item textAlign={'center'} xs={0.9}>
            <Button>Ghi chú</Button>
          </Grid>
          <Grid item textAlign={'center'} xs={0.9}>
            <Button>Tiền</Button>
          </Grid>
          <Grid item textAlign={'center'} xs={2}>
            <Button>Thao tác</Button>
          </Grid>
        </Grid>
      )}
      {!!orders.length &&
        orders
          .filter((order) => order.completed === false)
          .map((order) => (
            <Paper key={order.id} elevation={1} sx={{ padding: `10px 0`, marginTop: 1 }}>
              <Grid container alignItems={'center'}>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.ten}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.com}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.suon}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.suonCay}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.trung}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.cha}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.bi}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.lapXuong}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.comThem}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.ghiChu}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.price}
                </Grid>
                <Grid item textAlign={'right'} xs={1}>
                  <Button variant="outlined" color="success" onClick={() => onDone(order)}>
                    Xong
                  </Button>
                </Grid>
                <Grid item textAlign={'center'} xs={1} onClick={() => onDelete(order)}>
                  <Button variant="outlined" color="error">
                    Xóa
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          ))}
      {!!orders.length && (
        <Typography textAlign={'center'} sx={{ my: 2 }}>
          Đã hoàn thành ({orders.filter((order) => order.completed === true).reduce((total, order) => total + +order.price, 0)}.000 đ)
        </Typography>
      )}
      {!!orders.length &&
        orders
          .filter((order) => order.completed === true)
          .map((order) => (
            <Paper
              key={order.id}
              elevation={1}
              sx={{ padding: `10px 0`, marginTop: 1, background: (theme) => (theme.palette.mode === 'dark' ? grey[800] : grey[100]) }}
            >
              <Grid container alignItems={'center'}>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.ten}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.com}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.suon}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.suonCay}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.trung}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.cha}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.bi}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.lapXuong}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.comThem}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.ghiChu}
                </Grid>
                <Grid item textAlign={'center'} xs={0.9}>
                  {order.price}
                </Grid>
                <Grid item textAlign={'right'} xs={1}>
                  <Button variant="outlined" color="success" onClick={() => onDone(order)}>
                    Hoàn
                  </Button>
                </Grid>
                <Grid item textAlign={'center'} xs={1} onClick={() => onDelete(order)}>
                  <Button variant="outlined" color="error">
                    Xóa
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          ))}
    </>
  )
}

export default OrderList
