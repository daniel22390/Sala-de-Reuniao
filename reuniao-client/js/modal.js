$.Modal = {
  Alert: {
    open: function(type, msg){
      $('#modal-alert .modal-body .icon-alert').html(type === 'error' ? '<i style="color: red;" class="fas fa-5x fa-exclamation-circle"></i>' : '<i style="color: green;" class="fas fa-5x fa-check-circle"></i>')
      $('#modal-alert .modal-body p').text(msg)
      $('#modal-alert').modal('show')
    },
    close: function(){
      $('#modal-alert').modal('hide')
    }
  }
}