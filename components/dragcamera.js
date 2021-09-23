let update = c => {
    let {component} = c;
    let {pointer} = c.entities.input;
    if (!pointer.isDown) {
        return;
    }
    if (
        Math.abs(pointer.downX - pointer.x) > 16
        || Math.abs(pointer.downY - pointer.y) > 16
    ) {
        component.x = component.x + pointer.x - pointer.lastX;
        component.y = component.y + pointer.y - pointer.lastY;
    }
};

export default Object.freeze({
    update
});
