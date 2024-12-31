$(function(){
    console.log("jquery::",jQuery);
    init();
});

const elementList = [];

const init = () => {
    createDraggableElement();
    eventListener();
}

const createDraggableElement = () => {
    // create draggable content
    const elements = $("span");
    elements.each((idx, ele)=>{
        console.log("ele::", ele);
        $(ele).attr('draggable', 'true');
    })
}

const eventListener = () => {
    // this scope
    $('[draggable="true"]').on("dragstart", function (e) {
        e.dataTransfer = e.originalEvent.dataTransfer;
        e.dataTransfer.setData('data', this.innerHTML); // this는 드래그된 요소를 참조
        
        // container add
        // content-script.js
        const dataToSend = { message: "Hello from content-script!", details: "Extra information" };

        // Send message to background script
        chrome.runtime.sendMessage({ type: "DATA_FROM_CONTENT", payload: dataToSend });
    });
}

