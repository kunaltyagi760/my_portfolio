document.addEventListener('DOMContentLoaded', function () {
    var mobileMenuBtn = document.getElementById('mobile-menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');

    // Toggle mobile menu visibility
    mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu if clicked outside the menu or on the hamburger icon
    document.addEventListener('click', function (event) {
        if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Close mobile menu when clicking on navigation links
    var navLinks = document.querySelectorAll('.mobile-menu-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    
    const resumeButtons = document.querySelectorAll('.resume-button');

    function downloadResume() {
        
        const resumePath = 'https://drive.google.com/file/d/1OIcQRNDcMzlTFxn2oosYkm45f-MLN4k5/view?usp=sharing';

        const link = document.createElement('a');
        link.href = resumePath;
        link.target = '_blank';
        link.download = 'Your_Resume.pdf';

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    }

    resumeButtons.forEach(function (button) {
        button.addEventListener('click', downloadResume);
    });
});

var type = new TypeIt("#typing", {
    lifeLike: false,
    speed: 0,
    loop: true,
})

function typing_stuff(typing_string) {

    var typing_string_len = typing_string.length;
    for (var i = 0; i < typing_string_len; i++) {
        type.type(typing_string[i])
        type.pause(100)
    }
    type.pause(2000)
    for (var i = 0; i < typing_string_len; i++) {
        type.delete(1)
        type.pause(100)
    }
}

typing_stuff("a Full Stack Developer")
typing_stuff("a Django Developer")
typing_stuff("an Algorithm Developer")
typing_stuff("learning MERN stack")


type.go();

var type = new TypeIt("#typing1", {
    lifeLike: false,
    speed: 0,
    loop: true,
})

function typing_stuff(typing_string) {

    var typing_string_len = typing_string.length;
    for (var i = 0; i < typing_string_len; i++) {
        type.type(typing_string[i])
        type.pause(100)
    }
    type.pause(2000)
    for (var i = 0; i < typing_string_len; i++) {
        type.delete(1)
        type.pause(100)
    }
}

typing_stuff("an algorithm developer")
typing_stuff("a python developer")
typing_stuff("a django developer")

type.go();


