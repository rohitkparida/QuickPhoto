// ________________Retrieving_Img_Data_And_Changing_Img_Src_____________
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
          $('img').attr('src', e.target.result);
          console.log(e.target.result)
          localStorage.src = e.target.result
          localStorage.old = 'present'
          console.log(localStorage.src)
      }
      reader.readAsDataURL(input.files[0]);
  }
}
// ________________Triggring_Input_____________
$("#imgInp").change(function(){
  readURL(this);
  $("img").css("display","block")
});

// ________________Retrieving_And_Changing_To_Existing_Img_Src_____________
if (localStorage.old === 'present') {
  $('img').attr('src', localStorage.src);
  $("img").css("display","block")
}

// Registering ServiceWorker

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });
}

