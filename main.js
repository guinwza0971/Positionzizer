function calculatepositionsize() {
    let cash = document.getElementById("totalcash").value
    let risk = document.getElementById("riskpercent").value
    let leverage = document.getElementById("leverage").value
    let entryprice = document.getElementById("entryprice").value
    let exitprice = document.getElementById("exitprice").value
    let percentchange = document.getElementById("percentchange").value
    let mode

    const radiolist = document.getElementsByName("stoptype")
    radiolist.forEach(element => {
        if(element.checked == true)
        {
            mode = element.value
        }
    });
    
    let calculatedresult

    if(mode =="useprice")
    {
        calculatedresult = (cash * risk) / ((leverage) * Math.abs(entryprice - exitprice)/entryprice*100)
    }

    if(mode =="usepercent")
    {
        calculatedresult = (cash * risk) / ((leverage) * percentchange)
    }

    document.getElementById("result").innerHTML = calculatedresult;
}