document.getElementById('bulb').addEventListener('click', toggleBulb);

function toggleBulb() {
    var bulb = document.getElementById('bulb');
    var body = document.body;
    if (bulb.src === 'https://i.pngimg.me/thumb/f/720/comhiclipartnpvmg.jpg') {
        bulb.src = 'https://png.pngtree.com/png-vector/20230215/ourmid/pngtree-shine-idea-lightbulb-in-yellow-and-gray-color-png-image_6579931.png';
        body.classList.remove('dark-mode');
    } else {
        bulb.src = 'https://i.pngimg.me/thumb/f/720/comhiclipartnpvmg.jpg';
        body.classList.add('dark-mode');
    }
}