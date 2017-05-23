import axios from 'axios'

/**
 * 账号密码登录
 */

var login = (username, password) => {
  return new Promise((resolve, reject) => {
    axios.get("http://easy-mock.com/mock/59224b5b9aba4141cf29a034/szyd/api/v1/user/login?loginName=" + username + "&loginPassword=" + password + "&isSavePwd=true", {
      withCredentials: false
    }).then(function(response){
      const {result, msg, egdContext} = response.data;
      if(!result)
        resolve({result, data: msg})
      else
        resolve({result, data: eval("(" + egdContext + ")")})
    }).catch(function(error){
      resolve({result: false, data: error})
    });
  })
}

/**
 * 退出登录
 */
var unLogin = () =>{

}

export {login, unLogin}
