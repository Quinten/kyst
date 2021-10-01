let draw = c => {
    let {ctx} = c;
    let {x, y, width, height, fill} = c.component;
    ctx.fillStyle = fill;
    ctx.fillRect(x, y, width, height);
};

export default Object.freeze({
    draw
});
