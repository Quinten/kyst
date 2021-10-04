let gridSize = 8;
let frameWidth = 8;
let frameHeight = 8;
let frames = "A3H2A6H2A6G2A6H2A5B1H2B1A4D1I2D1A4B1D2B1A10|A1B1C4B1A2D1C4D1A2D1C1E2C1D1A2B1D1E2D1B1A2B2D2B2A3B4A18|A21C3A4E2C2A3B1E2C2A3B1D1C3A4B1D2B1A8|A3B2D1C2A3B2D1C2A4B1D1C2A4B1D1E1C1A4B2D1E1A4B3D1A5B3A6B2|A35E2A5C1E2C1A4C4A4C4A2|A2C1E2C1A4C1E2C1A4C4A4C4A4C1E2C1A4C1E2C1A4C4A4C4A2|A39B1A5B3A4B3D1A4B2D1E1|A3B2D1C2A3B2D1C2A4B1D1E1C1A4B1D1E1C1A4B1D1E1C1A4B1D1E1C1A3B2D1C2A3B2D1C2|A16C3A5C2E2A4C2E2B1A3C3D1B1A3B1D2B1A12|C2D1B2A3C2D1B2A3C2D1B1A4C1E1D1B1A4E1D1B2A4D1B3A4B3A5B2A6|A16C10E2C2E2C2E2C2E2C8A16|C4F3C15E2C2E3C5E3C3D8B10A4B2|A32B1A7B3A5D1B3A4E1D1B2A4|C2D1B2A3C2D1B2A3C1E1D1B1A4C1E1D1B1A4C1E1D1B1A4C1E1D1B1A4C2D1B2A3C2D1B2A3|A32B2A4B10D8C8|F64|A3B2D1C2A3B2D1C2A3B2D1E1C1A2B3D1E1C1B5D1E1C1B5D1E1C1D5E1C9E1|C2D1B2A3C2D1B2A3C1E1D1B2A3C1E1D1B3A2C1E1D1B5C1E1D1B5C2E1D5E1C7|F2C6F1C27E2C4E1D5C1E1D2B4C1E1D1B5|C6F2C7F1C18E2C4D5E1C2B4D2E1C1B5D1E1C1|A64|A64|A64|A64|A64|A1B1C4B1A2D1C4D1A2D1C1E2C1D1A2B1D1E2D1B1A2B2D2B2A3B4A18|A39B1A5B3A4B3D1A4B2D1E1|B2A4B2A2B4A18B2A4B10D8C8|A32B2A4B10D8C8|A3B2D1C2A3B2D1C2A3B2D1E1C1A2B3D1E1C1B5D1E1C1B5D1E1C1D5E1C9E1|F9G3F2G1F2G3F5E3F7G3F5G3F5G3F5E3F2|A3H2A6H2A6G2A6H2A5B1H2B1A4D1I2D1A4B1D2B1A10|A1B1A7B1A6B1A7B1A7B1A7B1A8B1A7B1A6|A18B4A2B2A4B2A32|A3B2D1C2A3B2D1C2A4B1D1E1C1A4B1D1E1C1A4B1D1E1C1A4B1D1E1C1A3B2D1C2A3B2D1C2|F64|F17G2F6G2F6G2F2G2F2E2F2G2F6E2F9|G4F4G4F4E4F1G3E1G7E1G5E2F1G5E2F1E5F3E5F2|F9G5F3G5F3G5F3E5F3E3G3F5G3F5E3F1|A2I4A3I6A2I6A1I1A1I4A1I4E2I14E2I3G1I6G1|C2D1B2A3C2D1B2A3C1E1D1B1A4C1E1D1B1A4C1E1C1F2C1A2F8I16|A34C1F2C1A2F8I16|A3B2D1C2A3B2D1C2A4B1D1C2A4B1D1E1C1A4B2D1E1A4B3D1A5B3A6B2|C1F6C6E3C5E3C9E3C4D1E3D4B1D3B6A4B2|C2E4C30E3C1D4E3D1B4D3B3A4B2|C4F3C15E2C2E3C5E3C3D8B10A4B2|C6F2C7F1C18E2C4D5E1C2B4D2E1C1B5D1E1C1|G1D6G2D6G2D6G1H1D6H25G1H6G1|F1E1F1E1F1E1F1E1F1E1F1E1F1E1F1E1F1E1F1E1F1E1F1E1F1E1F1E1F1E1F1E1F1E1F1E1F1E1F1E1G8H2I1G2I1H4I1H2I1H2|E24F2E4F2E8G8H2I1G2I1H4I1H2I1H2|E24F2E4F2E24F8|E3F1E3F1E3F1E3F1E7F1E7F1E7F1E7F1E3F1E3F1E3F1E3F1|J64|J1F1J7F1J11F1J7F1J1F1J7F1J7F3J1F1J5F1J1F1J4|F2J1F2J1F2J1F1J1F2J1F2J3F5J3F2J1F1J2F3J4F4J1F1J1F10J1F3J1F2|G1D6G2D6G2D6G1H1D2I2D2H4I2H6I2H11G1H6G1|F2E6F1E21F2E19F1E7F1E3F1|E5F3E6F2E7F3E5F1E7F1E7F1E3F1E3F1E3F1E3F1|F4H1G2H1F3H2G3F2H3G3F2H3G3F2H3G4F1I1H2G3F2I1H2G3F2I1H2G3|H1G2H1F4G3H2F3G3H3F2G3H3F2G3H3F1G4H2I1F1G4H2I1F1E1G3H2I1F2|D64|D6F1D7F4D6F2D6F1D5F1D13F2D5F3D2|F3D3F6D2F15D5F3D2F1D3F6D2F9D2F2|G1D6G1E1D6E12G2E6I2E3F1E2I2E2F17|E3F1E7F1E18F2E8F1E7F2E6F8|E3F1E3F1E3F1E3F1E7F3E5F1E7F1E6F2E5F11|F2H3G2H1F2H2I4G2H1I2E3G2I2E2G2E2I1E3I2F2I1E3I2F16|H1G2H3F2I4H2F2E3I2H1F2G2E2I2F2I2E3I1F2I2E3I1F18|F8E1F1E1F1E1F1E1F1E1F1E1F1E1F1E1F17E1F1E1F1E1F1E1F1E1F1E1F1E1F1E1F9|E1F7E2F1E2F2E3F2E1F2E1F2E1F3E1F1E1F4E2F1E1F11E3F2E2F1E2F2|$64|$64";
let palette = {"A":"#54769b","B":"#79a5b7","C":"#3a4e68","D":"#e0f8d5","E":"#7c816c","F":"#b5ae91","G":"#e0dab6","H":"#d4564a","I":"#5a473e","J":"#e6e56f"};

frames = frames.split('|');

/*

// no solid tiles around
let weight = 0;

// top connects
if (y === 0 || data[y - 1][x] === 1) {
    weight += 1;
}

// right connects
if (x === (w - 1) || data[y][x + 1] === 1) {
    weight += 2;
}

// bottom connects
if (y === (h - 1) || data[y + 1][x] === 1) {
    weight += 4;
}

// left connects
if (x === 0 || data[y][x - 1] === 1) {
    weight += 8;
}

// top, right, bottom, left connects
if (weight === 15) {
    // top left is open
    if (y > 0 && x > 0 && data[y - 1][x - 1] !== 1) {
        weight += 1;
    }
    // top right is open
    if (y > 0 && x < (w - 1) && data[y - 1][x + 1] !== 1) {
        weight += 2;
    }
    // bottom right is open
    if (y < (h - 1) && x < (w - 1) && data[y + 1][x + 1] !== 1) {
        weight += 3;
    }
    // bottom left is open
    if (y < (h - 1) && x > 0  && data[y + 1][x - 1] !== 1) {
        weight += 4;
    }
}

*/

let updateAround = (data, x, y, blob = true) => {

    if (blob) {
        for (let iy = y - 1; iy <= y + 1; iy = iy + 1) {
            for (let ix = x - 1; ix <= x + 1; ix = ix + 1) {
                let posKey = '' + ix + 'x' + iy;
                data[posKey] = 0;
            }
        }
    }
    /*
    for (let iy = y - 1; iy <= y + 1; iy = iy + 1) {
        for (let ix = x - 1; ix <= x + 1; ix = ix + 1) {
            let posKey = '' + ix + 'x' + iy;
            if (data[posKey] !== undefined) {
                updateTile(data, ix, iy);
            }
        }
    }
    */
    Object.keys(data).forEach(key => {
        let [ix, iy] = key.split('x');
        updateTile(data, Number(ix), Number(iy));
    });
};

let updateTile = (data, x, y) => {

    // no solid tiles around
    let weight = 0;

    // top connects
    if (data['' + x + 'x' + (y - 1)] !== undefined) {
        weight += 1;
    }

    // right connects
    if (data['' + (x + 1) + 'x' + y] !== undefined) {
        weight += 2;
    }

    // bottom connects
    if (data['' + x + 'x' + (y + 1)] !== undefined) {
        weight += 4;
    }

    // left connects
    if (data['' + (x - 1) + 'x' + y] !== undefined) {
        weight += 8;
    }

    if (weight === 15) {
        // top left is open
        if (data['' + (x - 1) + 'x' + (y - 1)] === undefined) {
            weight += 1;
        }
        // top right is open
        if (data['' + (x + 1) + 'x' + (y - 1)] === undefined) {
            weight += 2;
        }
        // bottom right is open
        if (data['' + (x + 1) + 'x' + (y + 1)] === undefined) {
            weight += 3;
        }
        // bottom left is open
        if (data['' + (x - 1) + 'x' + (y + 1)] === undefined) {
            weight += 4;
        }
    }

    data['' + x + 'x' + y] = weight;

};

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
        //if (data[posKey] !== undefined) {
        //    delete data[posKey];
        //    updateAround(data, x, y, false);
        //} else {
            data[posKey] = 0;
            updateAround(data, x, y);
        //}
        //let {sound} = c.entity;
        //sound.play = true;
    }
};

let draw = c => {
    let {ctx} = c;
    ctx.restore();
    ctx.save();
    let {zoom} = c.entities.viewport.resize;
    ctx.scale(zoom, zoom);
    let cam = c.entities.camera.data;
    ctx.translate(Math.floor(cam.x), Math.floor(cam.y));
    let {data} = c.entity;
    Object.keys(data).forEach(posKey => {
        let [x, y] = posKey.split('x');
        x = Number(x) * gridSize;
        y = Number(y) * gridSize;
        let frameData = frames[data[posKey]];
        frameData = frameData.replace(/(\D)(\d+)/g, (_, char, count) => char.repeat(count));
        [...frameData].forEach((c, i) => {
            let color = palette[c];
            if (color === undefined) {
                return;
            }
            let xb = i % gridSize;
            let yb = Math.floor(i / gridSize);
            ctx.fillStyle = color;
            ctx.fillRect(x + xb, y + yb, 1, 1);
        });
    });
};

export default Object.freeze({
    update,
    draw
});
