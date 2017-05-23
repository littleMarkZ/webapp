import axios from 'axios'

/**
 * 获取我的议题信息
 */

var getPage4My = () => {
  return new Promise((resolve, reject) => {
    axios.get("http://easy-mock.com/mock/59224b5b9aba4141cf29a034/szyd/api/v1/issue", {
      withCredentials: false,
      params: {
        viewType: 'my'
      }
    }).then(function(response){
      resolve({result: true, data: response.data})
    }).catch(function(error){
      resolve({result: false, data: error})
    });
  })
}

let openYt = (id) => {
  return new Promise((resolve, reject) => {
    axios.get("http://easy-mock.com/mock/59224b5b9aba4141cf29a034/szyd/api/v1/issue/" + id, {
      withCredentials: false
    }).then(function(response){
      resolve({result: true, data: response.data})
    }).catch(function(error){
      resolve({result: false, data: error})
    })
  })
}

let getPageByStatusExe = (status) => {
  return new Promise((resolve, reject) => {
    axios.get("http://easy-mock.com/mock/59224b5b9aba4141cf29a034/szyd/api/v1/issue/exe/view/" + status, {
      withCredentials: false
    }).then(function(response){
      resolve({result: true, data: response.data})
    }).catch(function(error){
      resolve({result: false, data: error})
    });
  })
}

let openYtLog = (id) => {
  return new Promise((resolve, reject) => {
    axios.get("http://easy-mock.com/mock/59224b5b9aba4141cf29a034/szyd/api/v1/issue/exe/" + id, {
      withCredentials: false
    }).then(function(response){
      resolve({result: true, data: response.data})
    }).catch(function(error){
      resolve({result: false, data: error})
    })
  })
}

var getPageByStatus = (status) => {
  return new Promise((resolve, reject) => {
    axios.get("http://easy-mock.com/mock/59224b5b9aba4141cf29a034/szyd/api/v1/issues/todo/" + status, {
      withCredentials: false
    }).then(function(response){
      resolve({result: true, data: response.data})
    }).catch(function(error){
      resolve({result: false, data: error})
    });
  })
}

export {getPage4My, getPageByStatus, openYt, getPageByStatusExe, openYtLog}
