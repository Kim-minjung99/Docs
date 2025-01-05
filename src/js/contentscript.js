$(function(){
    console.log("jquery::",jQuery);
    init();
})

const elementList = [];
var elementNum = 0;
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

        this.id = `draggedCont${elementNum}`

        elementNum++;
        
        // container add
        const dataToSend = { type: "DRAG_DATA", payload: $(this).text() };
        // Send message to background script
        chrome.runtime.sendMessage(dataToSend, (response)=>{

            console.log("sendMessage");
            
            // error
            if(chrome.runtime.lastError){
                alert("메세지 에러 발생::", chrome.runtime.lastError.message);
                return;
            }

            if(response.status == "success"){
                console.log("contentScript response:::", response);
            }
        });

    });

}

