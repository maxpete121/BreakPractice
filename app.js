



function theKing() {
    document.getElementById("pc-two").style.display = "none";
    document.getElementById("pc-three").style.display = "none";
    document.getElementById("choose-pc").style.display = "none";
    let comOne = document.getElementById("pc-one");
    if(comOne = "pc-one") {
        document.getElementById("pc-one").style.display = "block";
    }

}

function theQueen() {
    document.getElementById("pc-one").style.display = "none";
    document.getElementById("pc-three").style.display = "none";
    document.getElementById("choose-pc").style.display = "none";
    let comOne = document.getElementById("pc-Two");
    if(comOne = "pc-two") {
        document.getElementById("pc-two").style.display = "block";
    }

}

function theEmperor() {
    document.getElementById("pc-one").style.display = "none";
    document.getElementById("pc-two").style.display = "none";
    document.getElementById("choose-pc").style.display = "none";
    let comOne = document.getElementById("pc-three");
    if(comOne = "pc-three") {
        document.getElementById("pc-three").style.display = "block";
    }

}

function partOne() {
    document.getElementById("part-start").style.display = "none";
    let partShow = document.getElementById("part-one");
    if(partShow = "part-one") {
        document.getElementById("part-one").style.display = "block";
    }

    
}