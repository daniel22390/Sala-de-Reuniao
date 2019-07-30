$.Request = {
  root: "/",

  //requisicao assincrona com callbacks
  ajaxAsync = function(type, url, params, successCalback, errorCalback){
    $.ajax({
      url: this.root + url,
      headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}, 
      method: type,
      crossDomain: true,
      dataType: 'json',
      data: params,
    })
    .done(successCalback)
    .fail(errorCalback);
  },

  //requisicao sincrona
  ajaxSync = async function(type, url, params = {}){
    try{
      const res = await $.ajax({
        url: this.root + url,
        headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}, 
        method: type,
        crossDomain: true,
        dataType: 'json',
        data: params,
      })

      return res;
    } catch(err){

    }
  }
}