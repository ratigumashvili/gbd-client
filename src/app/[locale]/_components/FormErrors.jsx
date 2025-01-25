import Alert from './icons/Alert'

function FormErrors({error}) {
  return (
    <div className='text-pink-500 text-sm mt-1 py-2 flex items-center gap-2'>
        <Alert /> <p>{error}</p>
    </div>
  )
}

export default FormErrors