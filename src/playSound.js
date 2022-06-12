export default function playSound(url, volume, isPowerOn) {
    if (isPowerOn) {
        var audio = new Audio(url);
        audio.volume = volume;
        audio.play();
    }
}