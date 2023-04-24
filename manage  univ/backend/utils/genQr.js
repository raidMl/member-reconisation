const qr = require("qrcode")
// let data = {
//    link:"localhost:5000/"
//     email:
//         "khababa@gmdf.com"
// }

// let stJson = JSON.stringify(data)

const id = "64246ca39549b99c5d1bcf1e"
data = "http://localhost:5000/user/" + id

// qr.toString(stJson, { type: "terminal" }, function (error, code) {
//     if (error)
//         return console.log(error)
//     console.log(code)

// })

//________________________USING DATA URL
// qr.toDataURL(stJson, function (error, code) {
//     if (error)
//         return console.log(error)
//     console.log(code)

// })

// ++++++++++++++++++USING FILE IMG++++++++++++


//generate random name 
const crypto = require('crypto');

function generateRandomName(originalName) {
    const hash = crypto.randomBytes(10).toString('hex');
    const extension = originalName.split('.').pop();
    return `${hash}.${extension}`;
}

const originalName = 'my-image.jpg';
const randomName = generateRandomName(originalName);
console.log(randomName); // Example output: '4f5b7c9d2e.jpg'






//check file exist or not

const fs = require('fs');

function checkIfImageExists(filename) {
    try {
        fs.accessSync(filename, fs.constants.F_OK);
        return true;
    } catch (err) {
        return false;
    }
}

const filename = `images/${randomName}`;
if (checkIfImageExists(filename)) {
    console.log('The image exists!');
} else {
    console.log('The image does not exist.');
    //generate qr image
    qr.toFile(`./images/${randomName}.png`, data, function (error) {
        if (error)
            return console.log(error)

    })
}

