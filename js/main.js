$(document).ready(function() {
  let modalLink = $('[data-toggle="modal"]');
  let modal = $('.modal');
  let modalClose = $(".modal-close");
  let form = $('.form');

  modalLink.on('click', toggleModal);
  modalClose.on('click', toggleModal);

  function toggleModal (e) {
    e.preventDefault();
    $("body").toggleClass("no-scroll");
    $('.modal-header__title').text($(this).attr('data-title'));
    modal.toggleClass('modal_visible');
  }

  form.on('submit', function sendForm(e) {
    e.preventDefault();
    $.ajax ({
      type: "POST",
      url: "mail.php",
      dataType: "html",
      data: $(this).serialize(),
      success: function (data, textStatus, jqXHR) {
        console.log('Success, server returned:' + data);
      },
      error: function (response) {
        console.log('Error: ' + response);
      }
    })
  })
})