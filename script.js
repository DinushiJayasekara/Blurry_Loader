const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const scaleMap = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

let load = 0;

let inter = setInterval(() => {
    load++;

    if (load > 99) {
        clearInterval(inter);
    }

    console.log(load);

    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = scaleMap(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scaleMap(load, 0, 100, 30, 0)}px`;
}, 30);