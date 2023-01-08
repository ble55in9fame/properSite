$("#btn").on("click", loveCalc);
function loveCalc() {
    var started = false;
    var getInputValue = $("#tbone").val();
    var getInputValue1 = $("#tbtwo").val();
    var love = Math.floor(Math.random() * 101);
    if (!started) {
        if (getInputValue.length > 2 && getInputValue1.length > 2) {
            if (love < 50) {
                $("#results").text(
                    "" + getInputValue + " and " + getInputValue1 + " love eachother " + love + "%," +
                    " They do not Love each Other. 😭"
                );
            } else if (love > 50) {
                $("#results").text(
                    "" + getInputValue + " and " + getInputValue1 + " Love each Other " + love + "%" +
                    " ❤️"
                );
            }
            $("#tbone").val(" ");
            $("#tbtwo").val(" ");
        }
        started = true;
    }
}
