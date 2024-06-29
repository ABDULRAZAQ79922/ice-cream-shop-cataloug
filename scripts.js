function buyNow(iceCream) {
    document.getElementById('iceCreamName').innerText = iceCream;
    document.getElementById('confirmationPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('confirmationPopup').style.display = 'none';
}

function confirmOrder() {
    closePopup();
    document.getElementById('successMessage').style.display = 'block';
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
    }, 3000);
    scatterConfetti();
}

function scatterConfetti() {
    const successMessage = document.getElementById('successMessage');
    const rect = successMessage.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 300;

        confetti.style.setProperty('--x', `${radius * Math.cos(angle)}px`);
        confetti.style.setProperty('--y', `${radius * Math.sin(angle)}px`);
        confetti.style.left = `${centerX}px`;
        confetti.style.top = `${centerY}px`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}

function getRandomColor() {
    const colors = ['#ff6347', '#ffeb3b', '#4caf50', '#2196f3', '#ff5722', '#9c27b0'];
    return colors[Math.floor(Math.random() * colors.length)];
}
