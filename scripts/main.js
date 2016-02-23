  
var isMobile = window.matchMedia("only screen and (max-width: 400px)");

function showImages() {
  var gridElem = document.querySelector('.grid');
  var gridMasonry = new Masonry(gridElem, {
    // options
    itemSelector: '.grid-item'
  });

  imagesLoaded(gridElem).on('progress', function() {
     $('.logo').css('display', 'none');
    gridMasonry.layout();
  });
}

if (!isMobile.matches) {
  $('.grid').fadeIn('slow', showImages());
} else if (isMobile.matches) {
  setTimeout(function() {
    $('.logo').css('display', 'none');
    $('.grid').fadeIn('slow');
  }, 1000);
}

$('#infoModal').on('show.bs.modal', function (event) {
  var gridItem = $(event.relatedTarget);
  var image = gridItem.data('image');
  var modal = $(this);

  modal.find('.modal-image').attr('src', image);
});