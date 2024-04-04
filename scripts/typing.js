const text = "Computer Science Student";
const typingSpeed = 100;
const typingDelay = 1000;

let index = 0;
let typingInterval;
$(document).ready(function() {
    $(document).on('mousemove', function(e) {
        $('#circularcursor').css({
            left: e.pageX,
            top: e.pageY
        });
    });
});

function typeText() {
    if (index < text.length) {
        document.getElementById('student').textContent += text.charAt(index);
        index++;
        updateIndicatorHeight(); 
        typingInterval = setTimeout(typeText, typingSpeed);
    } else {
        clearTimeout(typingInterval);
        fadeOutIndicator();
    }
}

// Function to update typing indicator height
function updateIndicatorHeight() {
    const h2Height = document.getElementById('student').offsetHeight;
    document.getElementById('typing-indicator').style.height = h2Height -12 + 'px';
}

// Function to start fade-out animation
function fadeOutIndicator() {
    const indicator = document.getElementById('typing-indicator');
    indicator.style.animation = 'fadeOut 2s forwards';
}

// Start typing after a delay
setTimeout(typeText, typingDelay);
