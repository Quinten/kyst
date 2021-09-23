let draw = c => {
    let {ctx} = c;
    ctx.restore();
    ctx.save();
    let {zoom} = c.entities.viewport.resize;
    ctx.scale(zoom, zoom);
    let {dragcamera} = c.entities.camera;
    ctx.translate(dragcamera.x, dragcamera.y);
    let {x, y, width, height, fill} = c.component;
    ctx.fillStyle = fill;
    ctx.fillRect(x, y, width, height);
};

export default Object.freeze({
    draw
});
