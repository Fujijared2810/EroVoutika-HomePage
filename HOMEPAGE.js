// Javascript for Partnerships section
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
    
    // Update the keyframes to match the total width of the cloned items
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
  });
  // Javascript for Partnerships section ends here