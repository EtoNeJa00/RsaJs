async function getKeyPair(){
function arrayBufferToBase64(arrayBuffer) {
    var byteArray = new Uint8Array(arrayBuffer);
    var byteString = '';
    for(var i=0; i < byteArray.byteLength; i++) {
        byteString += String.fromCharCode(byteArray[i]);
    }
    var b64 = window.btoa(byteString);

    return b64;
}

function addNewLines(str) {
    var finalString = '';
    while(str.length > 0) {
        finalString += str.substring(0, 64) + '\n';
        str = str.substring(64);
    }
    return finalString;
}

function toPem(privateKey) {
    var b64 = addNewLines(arrayBufferToBase64(privateKey));
    var pem = "-----BEGIN PRIVATE KEY-----\n" + b64 + "-----END PRIVATE KEY-----";
    
    return pem;
}
function toPemPb(publicKey) {
    var b64 = addNewLines(arrayBufferToBase64(publicKey));
    var pem = "-----BEGIN PUBLIC KEY-----\n" + b64 + "-----END PUBLIC KEY-----";
    
    return pem;
}

var KeyPair = new Object();

const keyPair = await window.crypto.subtle.generateKey(
    {
        name: "RSASSA-PKCS1-v1_5",
        modulusLength: 1024, 
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
        hash: {name: "SHA-256"} 
    },
    true,
    ["sign", "verify"]
).then(async function(keyPair) {
    await window.crypto.subtle.exportKey("spki",keyPair.publicKey).
		then( function(exportedPublicKey) {
         KeyPair.pubKey = toPemPb(exportedPublicKey);
    });
	await window.crypto.subtle.exportKey("pkcs8", keyPair.privateKey).
		then( function(exportedPrivateKey) {
         KeyPair.privKey = toPem(exportedPrivateKey);
    });
  });
 return await KeyPair;

}
 
async function signing(Data){
	
var KeyPair = await getKeyPair();

const jsEncrypt = new JSEncrypt();
jsEncrypt.setPrivateKey(KeyPair.pubKey);
jsEncrypt.setPublicKey(KeyPair.privKey);

const signature = jsEncrypt.sign(Data, CryptoJS.SHA256, "sha256");

var ret = new Object;
ret.keyPair = KeyPair;
ret.sign = signature;

return ret;
}
