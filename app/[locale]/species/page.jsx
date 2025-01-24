import { redirect } from 'next/navigation'
import BrowseByTaxonomy from '../_components/BrowseByTaxonomy'

export default function Species() {
  const redirectTo = redirect()

  console.log(redirectTo)
  return ( 
    <div>
      <BrowseByTaxonomy />
    </div>
  )
}
