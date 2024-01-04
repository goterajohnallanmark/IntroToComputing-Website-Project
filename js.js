function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}



document.addEventListener("DOMContentLoaded", function() {
    var backButton = document.getElementById("back-to-top");

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backButton.style.display = "block";
        } else {
            backButton.style.display = "none";
        }
    };

    backButton.onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
});

function handleKeyPress(event, nextInput) {
    if (event.key === "Enter") {
        document.getElementById(nextInput).focus();
    }
}

function sendMessage() {
    var confirmation = document.getElementById('confirmation');
    confirmation.style.display = 'block';
}

function closeConfirmation() {
    var confirmation = document.getElementById('confirmation');
    confirmation.style.display = 'none';
}