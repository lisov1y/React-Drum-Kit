export default function playSound(url, isPowerOn) {
    if (isPowerOn) {
        var audio = new Audio(url);
        audio.play();
    }
}