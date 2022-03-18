import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import NewOrder from '../components/new-order/new-orders.component'
import OrderList from '../components/order-list/order-list.component'

const PRICE = {
  com: 20,
  suon: 10,
  suonCay: 15,
  trung: 5,
  cha: 5,
  bi: 5,
  lapXuong: 10,
  comThem: 5,
}

const calPrice = (order) => {
  let result = 0
  for (const key in PRICE) {
    result += +PRICE[key] * +order[key]
  }
  return result
}

const Home = () => {
  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')) || [])

  const handleSubmit = (values, setValues) => {
    const { ten, suon, suonCay, trung, cha, bi, lapXuong } = values
    if (!ten) return alert('Nhập tên đi')
    if (+suon + +suonCay + +trung + +cha + +bi + +lapXuong <= 0) return alert('Chọn món đi')
    const newOrders = { ...values, id: uuidv4(), completed: false, date: new Date(), price: calPrice(values) }
    setOrders((orders) => [...orders, newOrders])
    setValues({
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
  }

  const handleDone = (targetOrder) => {
    setOrders((orders) => orders.filter((order) => order.id !== targetOrder.id))
    setOrders((orders) => [...orders, { ...targetOrder, completed: !targetOrder.completed }])
  }
  const handleDelete = (targetOrder) => setOrders((orders) => orders.filter((order) => order.id !== targetOrder.id))

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders))
  }, [orders])
  return (
    <>
      <Typography variant="h4" sx={{ mb: 4 }} textAlign={'center'}>
        Đơn hàng
      </Typography>
      <NewOrder onSubmit={handleSubmit} />
      <OrderList orders={orders} onDone={handleDone} onDelete={handleDelete} />
    </>
  )
}

export default Home
