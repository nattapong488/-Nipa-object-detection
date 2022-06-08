
// axios post
// const axios = require('./node_modules/axios/index');
// axios({
//     method: 'post',
//     url: 'https://nvision.nipa.cloud/api/v1/object-detection',
//     data: {
        
//     }
// }).then(function (resp) {
//     console.log('Success:', resp)
// }).catch(function (err) {
//     console.log('Eror', err)
// })


// convert base64
// function encodeImageFileAsURL(element) {
//     var file = element.files[0];
//     var reader = new FileReader();
//     reader.onloadend = function () {
//         console.log("RESULT", reader.result);
//     };
//     reader.readAsDataURL(file);
// }



//send Api


// const objectDetectionService = nvision.objectDetection({
//     apiKey: "cdb29f355cb4059995e054208cd7c06a332acfb83a0a29592e88c58f78a7e4f8a8c0c3cfd71391e67b466dc00b475424ac"
// });

// objectDetectionService.predict(
//     reader.result
// ).then((result) => {
//     // Outout the result object to console
//     console.log(result);
// });