(function(){
  if(!window.FileReader) {
  	return; // No soportado
  }

  const readFile = function()  {

    if (this.files && this.files[0]) {
      var arrayBase64 = [];//porque asi se accede a la data
      const imageLoad = new FileReader();
      imageLoad.addEventListener("load", (e) => {
        var data = this.files;
        document.getElementById("img-content").src= e.target.result;
        var base64 = e.target.result;
        generateJSON(base64, data);
      });
      imageLoad.readAsDataURL( this.files[0] );
    }
  }

  let generateJSON = function(arrayImage, dataFile) {

    const stringBase64 = arrayImage.split(',');
    const objectFile = {
      "name":dataFile[0].name,
      "type":dataFile[0].type,
      "content": stringBase64[1]
    }
    console.log(objectFile);
  }

  document.getElementById("input-file").addEventListener("change", readFile);
})()
