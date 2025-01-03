$(function(){
    console.log("jquery::",jQuery);
    init();
})

const elementList = [];
// const port = chrome.runtime.connect({ name: "DOCS-PORT" });    // PORT

const init = () => {
    createDraggableElement();
    eventListener();
}

const createDraggableElement = () => {
    // create draggable content
    const elements = $("span");
    elements.each((idx, ele)=>{
        // console.log("ele::", ele);
        $(ele).attr('draggable', 'true');
    })
}

const eventListener = () => {
    // this scope
    $('[draggable="true"]').on("dragstart", function (e) {
        // container add
        const dataToSend = { type: "DRAG_DATA", payload: this };
        // Send message to background script
        chrome.runtime.sendMessage(dataToSend, (response)=>{
            
            // error
            if(chrome.runtime.lastError){
                alert("메세지 에러 발생::", chrome.runtime.lastError.message);
            }

            if(response.status == "success"){
                console.log("contentScript response:::", response);
            }
        });

    });

}

