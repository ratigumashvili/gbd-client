import React from 'react'

function Family({params}) {
  return (
    <div>Family {JSON.stringify(params, null, 2)}</div>
  )
}

export default Family
