import React from 'react'

function SkeletonLoader({classNames}) {
  return (
    <div className={`${classNames} bg-gray-200 animate-pulse rounded-sm`}></div>
  )
}

export default SkeletonLoader