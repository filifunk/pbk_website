export default class APIService {

  static SubmitEmail(body) {
    return fetch(`http://127.0.0.1:5000/add`, {
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
