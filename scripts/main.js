var gridElem = document.querySelector('.grid');
var gridMasonry = new Masonry(gridElem, {
  // options
  itemSelector: '.grid-item'
});

imagesLoaded(gridElem).on('progress', function() {
  gridMasonry.layout();
});