function countWords() {
  var string = $.trim($("textarea").val()),
      words = string.replace(/\s+/gi, ' ').split(' ').length
      chars = string.length;
  if(!chars)words=0;

  $(".word-count").contents().filter(function(){
    return this.nodeType == 3;
  })[0].nodeValue = words
}

$(document).on('page:change', function() {
  $(".word-count").hover(function() {
    $(this).find(".wordz").toggleClass("hidden")
  })

  $(".close").hover(function() {
    $(".save-exit").toggleClass("hidden")
  })

  $(".close").click(function() {
    $("body").html("<span class=\"loading\">Loading...</span>")
  })

  // Run this when the page loads so you can get an initial count.
  // Otherwise, the word count will be zero until you start typing again.
  countWords()

  $("textarea").focus().on('input', countWords)
})
