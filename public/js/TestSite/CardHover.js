setTimeout(() => {
    document.querySelector('.cardsB').onmousemove = e => {
        for (const cardB of document.getElementsByClassName("cardB")) {
            const rect = cardB.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
            cardB.style.setProperty("--mouse-x", `${x}px`);
            cardB.style.setProperty("--mouse-y", `${y}px`);
        };
    };
}, 500);