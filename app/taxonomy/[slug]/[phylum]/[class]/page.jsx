import React from 'react'

function TaxonClass({params}) {
  return (
    <div>TaxonClass
        {JSON.stringify(params, null, 2)}
    </div>
  )
}

export default TaxonClass