var gridElem = document.querySelector('.grid');
var gridMasonry = new Masonry(gridElem, {
  // options
  itemSelector: '.grid-item'
});

imagesLoaded(gridElem).on('progress', function() {
  gridMasonry.layout();
});

$('#infoModal').on('show.bs.modal', function (event) {
  var gridItem = $(event.relatedTarget);
  var image = gridItem.data('image');
  var modal = $(this);

  modal.find('.modal-image').attr('src', image);
})