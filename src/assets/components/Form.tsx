
import {useForm} from 'react-hook-form'
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
const schema = z.object({
activity : z.string().min(3,{message:'It must be minimum 3 characters'})
})
type FormData = z.infer<typeof schema>
interface Props{
onSubmit : (data:FormData)=>void
}
const Form = ({onSubmit}:Props) => {
const {register,formState:{errors},handleSubmit,reset} = useForm<FormData>({resolver:zodResolver(schema)})
  return (
  
    <form onSubmit={(handleSubmit((data)=>{
          onSubmit(data)
          reset()
    }))}>
  <div  className="mb-3 form-group"><label htmlFor="todo" className='form-label'>Enter your activity: </label>
  <input {...register('activity')} type="text" id='todo' className='form-control mb-3' />{errors.activity && <p className='text-dark'>{errors.activity.message}</p>}
  <button type='submit' className='btn btn-primary'>Add This</button>
  </div>
      </form>
  )
}

export default Form