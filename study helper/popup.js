document.addEventListener("DOMContentLoaded", function () {
    // alert("hi");

    function vid(link) {
        window.open(link, "_blank");
    }
    document.getElementById("Mathematics").onclick = function(){
        // alert(this.id);
        // console.log(this.id);
        vid("https://youtu.be/17KmNrG9pE4?t=6")
    }

    document.getElementById("Physics").onclick = function(){
        // alert(this.id);
        // console.log(this.id);
        vid("https://youtu.be/-15VC4Yxzys?t=14")
    }

    document.getElementById("Chemistry").onclick = function(){
        // alert(this.id);
        // console.log(this.id);
        vid("https://www.youtube.com/watch?v=-15VC4Yxzys")
    }

    document.getElementById("Computers").onclick = function(){
        // alert(this.id);
        // console.log(this.id);
        vid("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
});
