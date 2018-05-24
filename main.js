document.getElementById("reset").addEventListener("click", reset);

document.getElementById("select-rotation-1").addEventListener("click", this.selectRotation.bind(null, 'one'), false);
document.getElementById("select-rotation-2").addEventListener("click", this.selectRotation.bind(null, 'two'), false);
document.getElementById("select-rotation-3").addEventListener("click", this.selectRotation.bind(null, 'three'), false);

document.getElementById("select-rotation-1-path-1").addEventListener("click", this.selectSubRotation.bind(null, 'one'), false);
document.getElementById("select-rotation-1-path-2").addEventListener("click", this.selectSubRotation.bind(null, 'two'), false);

function selectRotation(option) {
    console.log(option);

    document.getElementById("previous-rotation-start").style.display = "block";
    document.getElementById("select-rotations-start").style.display = "none";
    document.getElementById("select-rotations-1").style.display = "none";

    if (option === 'one') {
        document.getElementById("previous-rotation-1").style.display = "block";
        document.getElementById("sub-rotation-1").style.display = "block";
    } else if (option === 'two') {
        document.getElementById("previous-rotation-start").style.display = "block";
        document.getElementById("sub-rotation-2").style.display = "block";
    } else if (option === 'three') {
        document.getElementById("previous-rotation-start").style.display = "block";
        document.getElementById("sub-rotation-3").style.display = "block";
    }
}

function selectSubRotation(option) {
    document.getElementById("sub-rotation-1").style.display = "none";

    if (option === 'one') {
        document.getElementById("previous-rotation-1-part-1").style.display = "block";
        document.getElementById("sub-rotation-1-part-1").style.display = "block";
    } else if (option === 'two') {
        document.getElementById("previous-rotation-1-part-2").style.display = "block";
        document.getElementById("sub-rotation-1-part-2").style.display = "block";
    }
}

function reset() {
    document.getElementById("select-rotations-1").style.display = "flex";

    var previous_rotations = document.querySelectorAll(".previous-rotation");
    var sub_rotations = document.querySelectorAll(".sub-rotation");

    console.log(previous_rotations);
    console.log(sub_rotations);

    for (var i = 0; i< previous_rotations.length; i++) {
        previous_rotations[i].style.display = "none";
    }

    for (var i = 0; i< sub_rotations.length; i++) {
        sub_rotations[i].style.display = "none";
    }
}