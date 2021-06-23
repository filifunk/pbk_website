export default class APIService {

  static SubmitEmail(body) {
    
    return fetch(`http://localhost:5000/add`, {
    //return fetch(`https://pbk-comingsoon.herokuapp.com/add`, {
      'method':'POST',
      mode: 'cors',
      headers: {
	'Content-Type':'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(resp => console.log("email here"))
    .catch(error => console.log(error))
  }

  static SubmitIG(body) {
    
    return fetch(`http://localhost:5000/addig`, {
    //return fetch(`https://pbk-comingsoon.herokuapp.com/add`, {
      'method':'POST',
      mode: 'cors',
      headers: {
	'Content-Type':'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(resp => console.log(body))
    .catch(error => console.log(error))
  }
}
