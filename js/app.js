(function(){

if(!window.FileReader) {
	return; // No soportado
}

function readFile() {
  // console.log(this.files[0]);
  if (this.files && this.files[0]) {

    var FR= new FileReader();

    FR.addEventListener("load", function(e) {
      document.getElementById("img-visualizador").src       = e.target.result;
      document.getElementById("b64").innerHTML = e.target.result;
      console.log(e.target.result.split(','));
    });
    // console.log(this.files[0]);
    FR.readAsDataURL( this.files[0] );
  }

}

document.getElementById("input-file").addEventListener("change", readFile);

})()
