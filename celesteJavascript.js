navBarDash = document.getElementById("navBarDash");
navBarGlitch = document.getElementById("navBarGlitch");

dashingDrop = document.getElementById("dashDrop");
glitchDrop = document.getElementById("glitchDrop");

navBarDash.addEventListener("mouseover", dashDropDown);
navBarDash.addEventListener("mouseout", dashDropClose);

navBarGlitch.addEventListener("mouseover", glitchDropDown);
navBarGlitch.addEventListener("mouseout", glitchDropClose);

function dashDropDown() {
    dashingDrop.style.display = "block";
}

function dashDropClose() {
    if (dashingDrop.style.display == "block") {
        dashingDrop.style.display = "none";
      }
}

function glitchDropDown() {
    glitchDrop.style.display = "block";
}

function glitchDropClose() {
    if (glitchDrop.style.display == "block") {
        glitchDrop.style.display = "none";
      }
}