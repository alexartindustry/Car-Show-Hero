$(document).ready(function(){
    var isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
    if (isIOS) {
    var canvasVideo = new CanvasVideoPlayer({
        videoSelector: '.video',
        canvasSelector: '.canvas',
        timelineSelector: false,
        autoplay: true,
        makeLoop: true,
        pauseOnClick: false,
        audio: false
    });
    } else {
    // Use HTML5 video
    document.querySelectorAll('.canvas')[0].style.display = 'none';
    }  

    $( ".with-video" ).hover(function() {
    $(this).find('video').get(0).currentTime = 0;
    $(this).find('video').get(0).play();
    });
    /*
    let clip = document.querySelector(".video-responsive");
    clip.addEventListener("mouseover", function (e) { 
        clip.getElementsByClassName('.video-tag')[0].currentTime = 0;
        clip.getElementsByClassName('.video-tag')[0].pause();
        clip.currentTime = 0;
        clip.play();
    }) */
});