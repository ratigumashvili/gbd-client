import { getData } from '../_lib/apiCalls'
import { caucasus } from '../_lib/data'
import { PageTitle } from './Translations'

async function Caucasus({ params }) {

  const { data } = await getData('static-page/caucasian', params.locale)

  return (
    <div className="py-4">
      <PageTitle />
      <div className="text-content font-firaGo"
        dangerouslySetInnerHTML={{ __html: data?.meta_data_localized?.text }}
      />
      {/* {JSON.stringify(data?.meta_data_localized?.text, null, 2)} */}
    </div>
  )
}

export default Caucasus