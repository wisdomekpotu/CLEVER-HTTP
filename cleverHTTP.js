/**
 * cleverHTTP Library
 * Library for making HTTP requests
 *
 * @version 1.0.0
 * @author Wisdom Ekpotu
 * @license MIT
 * 
 */


class cleverHTTP(){

  //MAKE A HTTP GET REQUEST
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  };


  //MAKE A HTTP POST REQUEST
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  };


  //MAKE A HTTP PUT REQUEST
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(() => resolve(data))
        .catch(err => reject(err))
    })
  }

  //MAKE A HTTP DELETE REQUEST
  delete (url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(data => resolve("DELETED"))
        .catch(err => reject(err))
    })
  }
}



