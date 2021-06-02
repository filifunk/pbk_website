import React, {useState, useEffect} from 'react'
import APIService from '../components/APIService'

function Form() {
  
  const[email, setEmail] = useState('')

  useEffect(() => {
    setEmail()
  },[])
  
  const submitEmail = () => {
    APIService.SubmitEmail({email})
    .then(setEmail(''))
    .then(resp=> console.log(resp))
    .then(resp=> console.log("hi"))
    .then(resp=> console.log({email}))
    //.catch(error => console.log(error))

  }
  return (
    <div>
      <div className = "mb-3">
      <label htmlFor = "email" className = "form-label"></label>
      <input type="text" className="form-control"
      //value = {email|| ''}
      value = {email}
      placeholder = "Please enter e-mail"
      onChange = {(e) => setEmail(e.target.value)}
      />

      <button
      onClick = {submitEmail}
      className = "btn btn-success mt-3"
      >Submit</button>
      </div>
    </div>

    )

}

export default Form
