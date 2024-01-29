setTimeout(() => {
    document.querySelector('body').onmousemove = e => {
        for (const follow of document.getElementsByClassName("follow")) {
            const rect = follow.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
            setTimeout(() => {
                follow.style.setProperty("--mouse-x", `${x}px`);
                follow.style.setProperty("--mouse-y", `${y}px`);
            }, 0);
        };
    };
}, 1000);