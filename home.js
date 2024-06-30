function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address");
        return false;
    }

    var phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
        alert("Please enter a valid 10-digit phone number");
        return false;
    }

    return true;
}
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );

  
  // Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the 'revealed' class to elements in the viewport
function revealElements() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('revealed');
        }
    });
}

// Listen for scroll events and reveal elements
window.addEventListener('scroll', revealElements);

// Reveal elements on page load
window.addEventListener('load', revealElements);
