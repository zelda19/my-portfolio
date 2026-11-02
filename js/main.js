document.documentElement.classList.add('js');

// The one animated moment: terminal lines print in once on page load.
(function () {
    const lines = document.querySelectorAll('#term .tl');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
        lines.forEach(l => l.classList.add('is-on'));
        return;
    }

    lines.forEach((line, i) => {
        // The ASCII art appears first, then each info line follows quickly.
        setTimeout(() => line.classList.add('is-on'), 250 + i * 130);
    });
})();