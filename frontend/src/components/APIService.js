export default class APIService {

  static SubmitEmail(body) {
    return fetch(`https://pbk-comingsoon.herokuapp.com/add`, {
      'method':'POST',
      mode: 'cors',
      headers: {
	'Content-Type':'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(resp => console.log("hello world"))
    //.catch(error => console.log(error))
  }
}
