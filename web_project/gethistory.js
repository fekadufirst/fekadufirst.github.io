$(function () {
    $.getJSON("collecthistory.json", function (result) {
        console.log(result)
        $("#top").text(result.Pages[0].Paragraph);
        $("#second").text(result.Pages[1].Paragraph);
        $("#next").text(result.Pages[2].Paragraph);
        $("#middle").text(result.Pages[3].Paragraph);
        $("#bottom").text(result.Pages[4].Paragraph);
        $("#last").text(result.Pages[5].Paragraph);

    });
});