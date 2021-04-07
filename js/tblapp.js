// JS for tbl page
// by Fran Sanchez

// debug
console.log(document.documentElement.scrollHeight);
console.log(window.innerHeight);
console.log(window.scrollY);

// scroll function
window.onscroll = function () {
    // calculate global scroll percent	
    var scrollpercent = Math.round(100 * window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
    // apply scroll percent to top progress var
    document.querySelector("progress").value = scrollpercent
};

window.onscroll();
