function setAvatar(imgElement) {
    let oldSrc = imgElement.src;
    imgElement.onerror = function () {
        imgElement.src = oldSrc;
    }
    let src = window.prompt('Nhập vào url ảnh đại diện', 'https://');
    imgElement.src = src;
}

function setProgressBarValue(progressBar) {
    let value = window.prompt('Nhập vào phần trăm', '0');
    if (isNaN(value)) {
        alert('Nhập vào số');
        return;
    }

    if (value < 0 || value > 100) {
        alert('Nhập giá trị hợp lệ từ 0 đến 100');
        return;
    }
    
    progressBar.setAttribute("aria-valuenow", value);
    progressBar.style.width = value + '%';
}

function drag(event) {
    event.dataTransfer.setData("id", event.target.id);
}
  
function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    let sourceId = event.dataTransfer.getData("id");
    let targetId = event.target.parentNode.id;
    if (!targetId.startsWith('cv-block-')) {
        return;
    }
    let sourceElement = document.getElementById(sourceId);
    let targetElement = document.getElementById(targetId);
    let parentElement = targetElement.parentNode;
    parentElement.insertBefore(sourceElement, targetElement);
}

function setCvBlockIds() {
    let cvBlocks = document.getElementsByClassName('cv__block-info');
    for(let i = 0; i < cvBlocks.length; i++) {
        let cvBlock = cvBlocks[i];
        cvBlock.setAttribute('id', 'cv-block-' + i);
    }   
}
setCvBlockIds();