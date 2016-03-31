$('.collection-item').on('click',function(){
  var $badge = $('.badge', this);
  if($badge.length == 0){
    $badge = $('<span class="badge brown-text">0</span>').appendTo(this);
  }

  $badge.text(parseInt($badge.text()) + 1);
});

$('.modal-trigger').leanModal();

$('.abrePedido').on('click',function(){

  var txt = '';
  $('.badge').parent().each(function(){
      var produto = this.firstChild.textContent;
      var quant = this.lastChild.textContent;

      txt += produto + ":" + quant + '\n';
  });

  $('#resumo').text(txt);
});

$('.collection').on('click','.badge',function(){
  $(this).remove();
  return false;
});

$('.limpa-pedido').on('click',function(){
  $('#numeroMesa').val('');
  $('.badge').remove();
});
