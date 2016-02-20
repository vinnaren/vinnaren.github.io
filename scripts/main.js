
function showImages() {
  var gridElem = document.querySelector('.grid');
  var gridMasonry = new Masonry(gridElem, {
    // options
    itemSelector: '.grid-item'
  });

  imagesLoaded(gridElem).on('progress', function() {
    gridMasonry.layout();
  });
}

setTimeout(function() {
  $('.logo').css('display', 'none');
  $('.video').css('display', 'block');
  setTimeout(function() {
    $('.video').css('display', 'none');
    $('.grid').fadeIn('slow', showImages());
  }, 210000);
}, 2000);

$('#infoModal').on('show.bs.modal', function (event) {
  var gridItem = $(event.relatedTarget);
  var image = gridItem.data('image');
  var modal = $(this);

  modal.find('.modal-image').attr('src', image);
});