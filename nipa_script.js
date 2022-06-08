

//JavaScript Webcam
var video = document.querySelector("#webcam");
var stopVideo = document.querySelector("#stop");
var startVideo = document.querySelector("#start");

// openwebcam auto
if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;

        })
        .catch(function (err0r) {
            console.log("Something went wrong!");
        });
}

stopVideo.addEventListener("click", stop, false);
startVideo.addEventListener("click", start, true);

// stop
function stop(e) {
    var stream = video.srcObject;
    var tracks = stream.getTracks();

    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }

    video.srcObject = null;
}
// start
function start(e) {
    navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;

        })
        .catch(function (err0r) {
            console.log("Something went wrong!");
        });
}

// ==============end webcam


// JavaScript Upload_picture
var renderFile = function (event) {
    var r = new FileReader();
    r.onload = function () {
        var preview = document.getElementById("preview");
        preview.src = r.result;
        preview.style.outline = "15px solid rgba(148, 148, 148, 0.35)";
        preview.style.borderRadius="8px";
        
    }; 
    r.readAsDataURL(event.target.files[0]);
};

// clearPicture


// Webcam capture
let click_button = document.querySelector("#snap");
let canvas = document.querySelector("#canvas");
click_button.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // let image_data_url = canvas.toDataURL('image/jpeg');
});


// convert base64
// function encodeImageFileAsURL(photo) {
//     var file = photo.files[0];
//     var reader = new FileReader();
//     reader.onloadend = function () {
//         document.getElementById("analy").innerHTML = reader.result
//         console.log("RESULT", reader.result);
//     };
//     reader.readAsDataURL(file);
// }

// api
// import nvision from "./@nipacloud/nvision"

// const objectDetectionService = nvision.objectDetection({
//     apiKey: "cdb29f355cb4059995e05420dc8d963f657898bf3a5f2f5e7a88c58279f5e4a0a1c4c4cf874594b42e413fc45c425425ac"
// });

// objectDetectionService.predict({
//     rawData: "BASE64_ENCODED_IMAGE"
// }).then((result) => {
//     // Outout the result object to console
//     console.log(result);
// });



