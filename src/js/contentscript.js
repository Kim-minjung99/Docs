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
    $('[draggable="true"]').on("dragstart", (e) => {
        e.dataTransfer = e.originalEvent.dataTransfer;
        e.dataTransfer.setData('data', "dropped text"); // 문자열 전달
    });
}

