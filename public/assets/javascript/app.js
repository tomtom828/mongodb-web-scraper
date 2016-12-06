$(document).ready(function(){

  // Nav Bar Mobile Slider
  $(".button-collapse").sideNav();


  // NOTE THAT THE JQUERY BELOW ISNT ENTIRELY NEEDED SINCE I HAVE FORM ACTIONS
  // BUT I JUST WANTED TO USE THE "LOCATION.RELOAD" 
  // THIS TO KEEP THE SCROLL AT THE CORRECT POSTION AFTER MAKING A POST REQ


  // Click Listener for FORM SUBMISSION to ADD a comment
  $('.add-comment-button').on('click', function(){

    // http://stackoverflow.com/questions/1960240/jquery-ajax-submit-form
    // http://stackoverflow.com/questions/17097947/jquery-using-a-variable-as-a-selector
   
    // Get _id of comment to be deleted
    var articleId = $(this).data("id");

    // URL root (so it works in eith Local Host for Heroku)
    var baseURL = window.location.origin;

    // Get Form Data by Id
    var frmName = "form-add-" + articleId;
    var frm = $('#' + frmName);


    // AJAX Call to delete Comment
    $.ajax({
      url: baseURL + '/add/comment/' + articleId,
      type: 'POST',
      data: frm.serialize(),
    })
    .done(function() {
      // Refresh the Window after the call is done
      location.reload();
    });
    
    // Prevent Default
    return false;

  });


  // Click Listener for FORM SUBMISSION to DELETE a comment
  $('.delete-comment-button').on('click', function(){

    // Get _id of comment to be deleted
    var commentId = $(this).data("id");

    // URL root (so it works in eith Local Host for Heroku)
    var baseURL = window.location.origin;

    // AJAX Call to delete Comment
    $.ajax({
      url: baseURL + '/remove/comment/' + commentId,
      type: 'POST',
    })
    .done(function() {
      // Refresh the Window after the call is done
      location.reload();
    });
    
    // Prevent Default
    return false;

  });
  
});