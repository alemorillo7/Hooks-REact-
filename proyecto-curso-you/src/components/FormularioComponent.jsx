

import { UseForm } from '../hooks/UseForm'

export const FormularioComponent = () => {

  
const initialForm={
    username: ``,
    email: ``,
    password: ``,
}
  const{formulario,username,email,password,onInputChange}= UseForm(initialForm)

  

         const onSubmit= (event)=>{
            event.preventDefault()
            console.log(formulario)
        }

     

  return (
    <form onSubmit={onSubmit}>
    <div className="mb-3">
      <label htmlFor="username" >User Name</label>
      <input type="text" className="form-control" name="username" placeholder="Enter your Username"value={username} onChange={onInputChange}></input>
     
    </div>
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input type="email" className="form-control" name="email" placeholder="Enter email"value={email} onChange={onInputChange}></input>
      
    </div>
    <div className="form-group">
      <label htmlFor="password" >Password</label>
      <input type="password" className="form-control" name="password" placeholder="Password"value={password} onChange={onInputChange}></input>
    </div>
   
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}
