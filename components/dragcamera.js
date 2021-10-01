let update = c => {
    let {data} = c.entity;
    let {pointer} = c.entities.input;
    if (!pointer.isDown) {
        return;
    }
    if (
        pointer.movedDown
        || Math.abs(pointer.downX - pointer.x) > 4
        || Math.abs(pointer.downY - pointer.y) > 4
    ) {
        data.x = data.x + pointer.x - pointer.lastX;
        data.y = data.y + pointer.y - pointer.lastY;
        pointer.movedDown = true;
    }
};

export default Object.freeze({
    update
});
