import React from 'react'

function Order({params}) {
  return (
    <div>Order {JSON.stringify(params, null, 2)}</div>
  )
}

export default Order