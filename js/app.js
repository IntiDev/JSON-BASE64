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
        document.getElementById("b64").innerHTML = e.target.result;
        arrayBase64.push(e.target.result);
        // console.log(JSON.stringify(e.target.result));
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
    // CODIGO PARA DESCARGAR ARCHIVO
    const imgName = objectFile.name;
    const fileName = imgName.split(".");
    // console.log(fileName
    const linkDownload = document.getElementById("link");
    linkDownload.setAttribute("download", fileName[0] + ".json");
    // linkDownload.addEventListener("click", downloadJSON);
    linkDownload.addEventListener("click", function(code) {
      console.log("HOLAAAA", code);
      this.href = 'data:image/jpeg;charset=utf-8,'
      + encodeURIComponent(objectFile);
    });
  }

  // const downloadJSON = function(code) {
  //   this.href = 'data:text/plain;charset=utf-8,'
  //   + encodeURIComponent(objectFile);
  // };
  document.getElementById("input-file").addEventListener("change", readFile);
})()
