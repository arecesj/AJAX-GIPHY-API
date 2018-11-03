'use strict';
$(document).ready(function() {
  $('#search-giphy').on('click', function(event) {
    event.preventDefault();
    let memeSearch = $('#meme-search').val();
    let dataObject = { q: memeSearch, api_key: 'dc6zaTOxFJmzC' };
    $.get('http://api.giphy.com/v1/gifs/search', dataObject, memeGen);
    $('#meme-search').val('');
  });
  function memeGen(res) {
    let rowMemes = $('#row-memes');
    let meme = `
      <img class="img-fluid m-5" src=${res.data[0].images.fixed_width.url}>
      </img>
    `;
    rowMemes.append($(meme));
  }
  $('#delete-memes').on('click', function(event) {
    event.preventDefault();
    $('section').html('');
  });
});
