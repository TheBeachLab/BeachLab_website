// JS for tbl page
// by Fran Sanchez

// scroll function
window.onscroll = function () {
 // calculate global scroll percent	
 var scrollpercent = 100* window.scrollY / (document.body.offsetHeight - window.innerHeight);
 // apply scroll percent to top progress var
 document.querySelector("progress").value = scrollpercent
};

window.onscroll();
