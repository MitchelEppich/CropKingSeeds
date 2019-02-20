document.addEventListener("DOMContentLoaded", function(event) {
    //do work
    var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date();
    (function() {
        var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = "https://embed.tawk.to/5ae8bd0d5f7cdf4f0533c472/default";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        s0.parentNode.insertBefore(s1, s0);
        if (document.getElementById("tawkto")) {
            document.getElementById("tawkto").addEventListener("click", toggleTawk);
        }
        document.addEventListener("scroll", function(e) {
            var jumpToTop = document.getElementById("jumpToTop");
            if (window.scrollY < window.innerHeight) {
                jumpToTop.style.display = "none";
            }
            if (window.scrollY >= window.innerHeight) {
                jumpToTop.style.display = "block";
            }
        });
    })();

    function toggleTawk() {
        Tawk_API.toggle();
    }
});
