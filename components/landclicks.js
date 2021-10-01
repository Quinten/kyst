let gridSize = 8;

let update = c => {
    let {pointer} = c.entities.input;
    if (pointer.justUp && !pointer.movedDown) {
        let cam = c.entities.camera.data;
        let x = Math.floor(
            (pointer.x - cam.x) / gridSize
        );
        let y = Math.floor(
            (pointer.y - cam.y) / gridSize
        );
        let posKey = '' + x + 'x' + y;
        let {data} = c.entity;
        if (data[posKey] !== undefined) {
            delete data[posKey];
        } else {
            data[posKey] = 1;
        }
        let {sound} = c.entity;
        sound.play = true;
    }
};

let draw = c => {
    let {ctx} = c;
    ctx.restore();
    ctx.save();
    let {zoom} = c.entities.viewport.resize;
    ctx.scale(zoom, zoom);
    let cam = c.entities.camera.data;
    ctx.translate(cam.x, cam.y);
    let {data} = c.entity;
    Object.keys(data).forEach(posKey => {
        let [x, y] = posKey.split('x');
        x = Number(x) * gridSize;
        y = Number(y) * gridSize;
        ctx.fillStyle = '#B5AE91';
        ctx.fillRect(x, y, gridSize, gridSize);
    });
};

export default Object.freeze({
    update,
    draw
});
