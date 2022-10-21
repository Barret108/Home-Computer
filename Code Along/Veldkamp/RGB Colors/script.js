
document.getElementById('btnIn').addEventListener("click", rgbPreview);

function rgbPreview() {
   // Input

    let rValue = document.getElementById("redIn").value
    let gValue = document.getElementById("greenIn").value
    let bValue = document.getElementById("blueIn").value

   // Process

    let rgbstring = "rgb" + "(" + rValue + ", " + gValue + ", " + bValue + ")";

   // Output

    document.getElementById("display").style.background = rgbstring;

}