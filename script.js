document.addEventListener('DOMContentLoaded', function() {
    var refreshButton = document.getElementById('refreshButton');
    refreshButton.addEventListener('click', function() {
        var iframe = document.querySelector('iframe');
        var src = iframe.src.split('&timestamp=')[0]; // Remove any existing timestamp
        iframe.src = src + '&timestamp=' + new Date().getTime(); // Append new timestamp
        console.log('Iframe reloaded manually.');
    });
});

