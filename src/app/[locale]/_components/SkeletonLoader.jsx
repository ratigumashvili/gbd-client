import React from 'react'

function SkeletonLoader({className}) {
  return (
    <div className={`${className} bg-gray-200 animate-pulse rounded-md`}></div>
  )
}

export default SkeletonLoader