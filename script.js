//your code here
$(document).ready(function() {
    var images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg"
    ];
    
    // Function to shuffle the images array
    function shuffleImages() {
        for (var i = images.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = images[i];
            images[i] = images[j];
            images[j] = temp;
        }
    }
    
    // Function to render the images
    function renderImages() {
        shuffleImages();
        $(".tile").each(function(index) {
            $(this).attr("src", images[index]);
            $(this).addClass("img" + (index + 1));
        });
    }
    
    // Function to reset the state
    function resetState() {
        $(".tile").removeClass("selected");
        $(".tile").off("click");
        $("#reset").hide();
        $("#verify").hide();
        $("#para").hide();
        $("#h").show();
    }
    
    // Function to handle tile click
    function handleTileClick() {
        $(this).toggleClass("selected");
        var selectedTiles = $(".tile.selected");
        
        if (selectedTiles.length === 0) {
            $("#reset").hide();
            $("#verify").hide();
        } else if (selectedTiles.length === 1) {
            $("#reset").show();
            $("#verify").hide();
        } else if (selectedTiles.length === 2) {
            $("#reset").hide();
            $("#verify").show();
        } else {
            $(".tile").removeClass("selected");
            $("#reset").hide();
            $("#verify").hide();
        }
    }
    
    // Function to handle reset button click
    function handleResetClick() {
        resetState();
        renderImages();
        $(".tile").on("click", handleTileClick);
    }
    
    // Function to handle verify button click
    function handleVerifyClick() {
        var selectedTiles = $(".tile.selected");
        
        if (selectedTiles.length === 2) {
            var class1 = selectedTiles.eq(0).attr("class");
            var class2 = selectedTiles.eq(1).attr("class");
            
            if (class1 === class2) {
                $("#para").text

