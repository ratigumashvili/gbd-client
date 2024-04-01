import { caucasus } from '../_lib/data'

function Caucasus() {
  return (
    <div className="py-4">
      <h2 className="text-2xl font-medium mb-4">Caucasus</h2>
      <div className="text-content"
        dangerouslySetInnerHTML={{ __html: caucasus.data }}
      />
    </div>
  )
}

export default Caucasus