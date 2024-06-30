
function openDocumentation() {
    window.open("https://developer.mozilla.org/en-US/docs/Web", "_blank");
}
function run() {
    let htmlCode = document.getElementById("html").value;
    let cssCode = document.getElementById("css").value;
    let jsCode = document.getElementById("javascript").value;
    let outputScreen = document.getElementById("output")

    outputScreen.contentDocument.body.innerHTML = htmlCode + "<style>"+cssCode + "</style>";
    outputScreen.contentWindow.eval(jsCode);
}
