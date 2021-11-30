import React, {useState, useEffect} from 'react'
import APIService from '../components/APIService'

function IgersForm() {
  
  const[ighandle, setIGhandle] = useState('')

  useEffect(() => {
    setIGhandle()
  },[])
  
  const submitIG = () => {
    APIService.SubmitIG({ighandle})
    .then(setIGhandle(''))
    .then(resp=> console.log(resp))
    .then(resp=> console.log("hi igers"))
    .then(resp=> console.log({ighandle}))
    //.catch(error => console.log(error))

  }
  return (
    <div>
      <div className = "mb-3">
      <label htmlFor = "ighandle" className = "form-label"></label>
      <input type="text" className="form-control"
      //value = {email|| ''}
      value = {ighandle}
      placeholder = "Please enter instagram handle"
      onChange = {(e) => setIGhandle(e.target.value)}
      />

      <button
      onClick = {submitIG}
      className = "btn btn-success mt-3"
      >Submit</button>
      </div>
    </div>

    )

}

export default IgersForm
