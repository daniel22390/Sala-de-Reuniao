$.Login = {

  //Eventos relacionados a pagina de login
  Eventos: function(){

    //controle entre view de cadastro e login
    $('.login').on('click', ".view", function(){
      $('.login-option').hide()
      $(`#${$(this).attr('data-option-id')}`).show()
    })

    //envia formulario de cadastro de usuario
    $('.login').on('submit', "#cadastraUsuario", function(ev){
      ev.preventDefault();
      $.Login.validaCadastro()
    })

    //envia formulario com dados de login
    $('.login').on('submit', "#loginUsuario", function(ev){
      ev.preventDefault()
    })
  },

  //validacao de cadastro de usuario
  validaCadastro: function(){
    let validations = [
      {
        validation: function(){
          return $('#login_user').val() != ""
        },
        msgError: "Preencha o nome de usuário!"
      },
      {
        validation: function(){
          return $('#password_user').val() != ""
        },
        msgError: "Preencha uma senha!"
      },
      {
        validation: function(){
          return $('#password_conf_user').val() == $('#password_user').val()
        },
        msgError: "As senha possuem valores diferentes!"
      },
    ]

    for(let i = 0; i < validations.length; i++){
      let res = validations[i].validation();
      if(!res){
        $.Modal.Alert.open('error', validations[i].msgError)
        return false
      }
    }

    $.Login.Cadastra();
  },

  //Envia dados de cadastro para o servidor
  Cadastra: async function(){
    let res = await $.Request.ajaxSync(
      $('.cadastraUsuario').attr('method'),
      $('.cadastraUsuario').attr('action'),
      $('.cadastraUsuario').serialize(),
    )

    
  }
}

$( document ).ready(function() {
  $.Login.Eventos();
});