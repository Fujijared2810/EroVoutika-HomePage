// JavaScript for Partnerships section
window.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const items = Array.from(track.children);
    const totalItems = items.length;

    const cloneCount = 3; // Number of times to clone the items to ensure smooth scrolling

    for (let i = 0; i < cloneCount; i++) {
      items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
      });
    }

    // Updates the keyframes to match the total width of the cloned items
    const trackWidth = track.scrollWidth;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-${trackWidth / cloneCount}px);
        }
      }
    `;
    document.head.appendChild(styleSheet);

    // Label text visibility handling
    const labelText = document.querySelector('.label-text');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        if (isElementInViewport(labelText)) {
            labelText.classList.add('visible');
        } else {
            labelText.classList.remove('visible');
        }
    }

    // Initial check
    onScroll();

    // Add scroll event listener
    window.addEventListener('scroll', onScroll);
});
// JavaScript for Partnerships section end here