(function(){
  if(!window.FileReader) {
  	return; // No soportado
  }

  const readFile = function()  {

    if (this.files && this.files[0]) {
      var arrayBase64 = [];//porque asi se accede a la data
      const imageLoad = new FileReader();
      imageLoad.addEventListener("load", function(e) {
        document.getElementById("img-content").src= e.target.result;
        // document.getElementById("b64").innerHTML = e.target.result;
        arrayBase64.push(e.target.result);
        // arrayBase64["yyy"] = e.target.result.split(",");
      });
      imageLoad.readAsDataURL( this.files[0] );
      var data = this.files;
      generateJSON(arrayBase64, data);
    }
  }

  const generateJSON = function(arrayImage, dataFile) {
    console.log( arrayImage.length);
    // console.log(arrayImage.yyy);
    console.log(dataFile);
    const xxx = arrayImage;
    console.log(xxx);
    const objectFile = {
      "name":dataFile[0].name,
      "type":dataFile[0].type
      // "content": xxx[1]
    }
    console.log(objectFile);
  }

  document.getElementById("input-file").addEventListener("change", readFile);
})()
