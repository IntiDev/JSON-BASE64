(function(){
  if(!window.FileReader) {
  	return; // No soportado
  }

  const readFile = function()  {

    if (this.files && this.files[0]) {
      const imageLoad = new FileReader();
      imageLoad.addEventListener("load", (e) => {
        const data = this.files;
        document.getElementById("img-content").src= e.target.result;
        const base64 = e.target.result;
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
    // CODIGO PARA DESCARGAR ARCHIVO
    const imgName = objectFile.name;
    const fileName = imgName.split(".");
    // console.log(fileName
    const linkDownload = document.getElementById("link");
    linkDownload.setAttribute("download", fileName[0] + ".json");
    // linkDownload.addEventListener("click", downloadJSON);
    linkDownload.addEventListener("click", function(code) {
      this.href = 'data:text/javascript;charset=utf-8,' + encodeURIComponent(JSON.stringify(objectFile));
    });
  }

  // const downloadJSON = function(code) {
  //   this.href = 'data:text/plain;charset=utf-8,'
  //   + encodeURIComponent(objectFile);
  // };
  document.getElementById("input-file").addEventListener("change", readFile);
})()
