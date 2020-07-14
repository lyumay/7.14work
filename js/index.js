
function toggleBlock() {
    var topTip = document.getElementsByClassName("head-inner");
    var bottomClock = document.getElementsByClassName("goodPaper");
    for (let i = 0 ; i < topTip.length; i++){
        topTip[i].addEventListener("mouseover",function () {
            for (let j = 0 ; j < topTip.length; j++){
                topTip[j].style.backgroundColor = "#f1f1f1";
                topTip[j].style.color = "#000";
                bottomClock[j].style.display = "none";
            }
            this.style.backgroundColor = "#00b262";
            this.style.color = "#fff";
            bottomClock[i].style.display = "block";
        })
    }
}

toggleBlock()

    let i = 0;
    setInterval(function () {
        var topTip = document.getElementsByClassName("head-inner");
        var bottomClock = document.getElementsByClassName("goodPaper");
            if(i == topTip.length){
                i = 0;
                console.log(i);
            }
            for (let j = 0 ; j < topTip.length; j++){
                topTip[j].style.backgroundColor = "#f1f1f1";
                topTip[j].style.color = "#000";
                bottomClock[j].style.display = "none";
            }
            topTip[i].style.backgroundColor = "#00b262";
            topTip[i].style.color = "#fff";
            bottomClock[i].style.display = "block";
            i++;
    },5000)



