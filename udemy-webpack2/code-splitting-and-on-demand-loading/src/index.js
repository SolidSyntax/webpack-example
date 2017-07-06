
const button = document.createElement('button');
button.innerText = 'Load image';
button.onclick = () => {
    const importPromise = System.import('./image-viewer/image_viewer'); //Import using the build in module system
    importPromise.then(module => {
        module.default();

    });
};

document.body.appendChild(button);