const magik = magikcraft.io;

function r(t = 5) {
	const times = t * 1000 / 300;
    let n = times;
    magik.setTimeout(shield, 300);
    magik.dixit('Magical Shield YO!');
    function shield() {
        n--;
        const location = magik.hic();
        const nearbyEntities = location.getWorld().getNearbyEntities(location, 8, 8, 8);
        nearbyEntities.forEac
    }
}
