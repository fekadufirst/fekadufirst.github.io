$(function () {
    $.getJSON("product.json", function (result) {
        console.log(result)
        $("#Nike").text(result.Men[0].brand);
        $("#nstyle").text(result["Men"][0]["style"]);
        $("#nprice").text(result["Men"][0]["price"]);
        $("#balance").text(result.Men[1].brand);
        $("#tstyle").text(result["Men"][1]["style"]);
        $("#tprice").text(result["Men"][1]["price"]);
        $("#endure").text(result.Men[2].brand);
        $("#kstyle").text(result["Men"][2]["style"]);
        $("#kprice").text(result["Men"][2]["price"]);



        $("#mike").text(result.Women[0].brand);
        $("#astyle").text(result["Women"][0]["style"]);
        $("#aprice").text(result["Women"][0]["price"]);
        $("#bbooks").text(result.Women[1].brand);
        $("#cstyle").text(result["Women"][1]["style"]);
        $("#cprice").text(result["Women"][1]["price"]);
        $("#asfa").text(result.Women[2].brand);
        $("#hstyle").text(result["Women"][2]["style"]);
        $("#hprice").text(result["Women"][2]["price"]);


        $("#buma").text(result.Children[0].brand);
        $("#dstyle").text(result["Children"][0]["style"]);
        $("#dprice").text(result["Children"][0]["price"]);
        $("#dedeb").text(result.Children[1].brand);
        $("#estyle").text(result["Children"][1]["style"]);
        $("#eprice").text(result["Children"][1]["price"]);
        $("#balancenew").text(result.Children[2].brand);
        $("#istyle").text(result["Children"][2]["style"]);
        $("#iprice").text(result["Children"][2]["price"]);


    });
});