let addIcons = _ => {
    let c = document.createElement('canvas');
    c.width = 1024;
    c.height = 1024;
    let ctx = c.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 1024, 1024);
    ctx.fillStyle = 'black';
    ctx.fillRect(256, 256, 512, 512);
    let icon = c.toDataURL();
    let favi = document.createElement('link');
    favi.rel = 'icon';
    favi.type = 'image/png';
    favi.href = icon;
    document.head.appendChild(favi);
    let touch = document.createElement('link');
    touch.rel = 'apple-touch-icon';
    touch.href = icon;
    document.head.appendChild(touch);
    let name = document.title;
    let short_name = document.title;
    let description = document.querySelector('[name=description]').getAttribute('content');
    let theme_color = document.body.style.background;
    let tc = document.createElement('meta');
    tc.name = 'theme-color';
    tc.content = theme_color;
    document.head.appendChild(tc);
    let background_color = theme_color;
    let display = 'standalone';
    let start_url = window.location.href;
    let scope = start_url.replace(/[^/]+$/, '');
    let icons = [{src: icon, type: 'image/png', sizes: '1024x1024'}];
    let manifest = document.createElement('link');
    manifest.rel = 'manifest';
    manifest.href = 'data:application/json,' + JSON.stringify({
        name, short_name, description, background_color,
        theme_color, display, start_url, scope, icons
    });
    document.head.appendChild(manifest);
};
addIcons();

/*
let deferredPrompt = undefined;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});
*/

if ('serviceWorker' in navigator) {
    window.addEventListener('load', e => {
        navigator.serviceWorker.register('./sw.js').then(registration => {
            //console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, err => {
            //console.log('ServiceWorker registration failed: ', err);
        });
    });
}

fetch('./entities.json').then(r => r.json()).then(entities => {

    let components = {};
    let systemTypes = [
        'preupdate',
        'update',
        'postupdate',
        'draw'
    ];
    let systems = {};
    systemTypes.forEach(system => {
        systems[system] = {};
    });
    let calls = {};

    let importComponent = comp => {
        import('./components/' + comp + '.js')
            .catch(r => console.warn(r.message))
            .then(m => {
                components[comp] = m.default || {};
                systemTypes.forEach(system => {
                    if (
                        m.default !== undefined
                        && m.default[system] !== undefined
                    ) {
                        systems[system][comp] = m.default[system];
                    }
                });
            }).catch(r => console.warn(r.message));
    };

    let ctx = canvas.getContext('2d');
    let timer = 0;
    let delta = 0;
    let onF = time => {
        delta = time - timer;
        timer = time;
        //console.log(delta);

        systemTypes.forEach(system => {
            calls[system] = [];
        });

        entities.system.states.forEach(stateId => {
            entities[stateId].state.entities.forEach(id => {
                let entity = entities[id];
                Object.keys(entity).forEach(comp => {
                    let component = entity[comp];
                    if (components[comp] === undefined) {
                        components[comp] = {};
                        importComponent(comp);
                        return;
                    }
                    systemTypes.forEach(system => {
                        if (systems[system][comp] !== undefined) {
                            calls[system].push({
                                system: systems[system][comp],
                                c: {
                                    entities,
                                    id,
                                    entity,
                                    comp,
                                    component,
                                    stateId,
                                    delta,
                                    time,
                                    ctx
                                }
                            });
                        }
                    });
                });
            });
        });

        systemTypes.forEach(systemType => {
            calls[systemType].forEach(call => {
                let {system, c} = call;
                system(c);
            });
        });

        requestAnimationFrame(onF);
    };
    onF(0);

    if (loading !== undefined) {
        loading.remove();
    }
});
