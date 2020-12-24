// this is javaScript code for static website

$('.count').counterUp({
    delay: 10,
    time: 3000
});

// Get the button:
mybutton = document.getElementById("myBtn");

// When th user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
}

// When th user clicks on the button, scroll to the top of the document

function topFunction() {
    document.body.scrollTop = 0; // for safari
    document.documentElement.scrollTop = 0; // for chrome, firefox, opera

}
// for typed js
let type = new Typed('#typed',
    {
        stringsElement: '#typed-string',
        typeSpeed: 100,
        startDelay: 1000,
        backSpeed: 20,
        backDelay: 500,
        loop: true,
        loopCount: true,
        showCursor: false,
        cursor: "|",
        attr: null,
        contentType: 'html',
        callback: function () { },
        preStringTyped: function () { },
        onStringTyped: function () { },
        resetCallBack: function () { },

    });

