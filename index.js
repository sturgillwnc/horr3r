(async function init() {
    console.log(`initializing..`);
    
    let canvas = document.getElementById(`screen`);
    canvas.setAttribute(`width`, `640`);
    canvas.setAttribute(`height`, `480`);

    let contxt = canvas.getContext(`2d`);
    contxt.fillStyle = `#000000`;
    contxt.fillRect(0, 0, canvas.width, canvas.height);
})();