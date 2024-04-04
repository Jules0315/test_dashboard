document.addEventListener('DOMContentLoaded', function() {
    // Find the iframe element
    var iframe = document.querySelector('iframe');
    // Get the current src attribute value
    var src = iframe.getAttribute('src');
    // Append a unique timestamp query string to the src
    var newSrc = src + '&timestamp=' + new Date().getTime();
    // Set the modified src attribute back to the iframe
    iframe.setAttribute('src', newSrc);

    console.log('Iframe src updated to bypass cache');
});

