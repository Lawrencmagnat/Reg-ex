// For masterCard

function CardCheck() {
    var type = document.getElementById("type").value;
    type = parseInt(type);
    var cardno = document.getElementById("card").value;
    if (type == '1') {
        var cardRegex = /^5[1-5]{1}[0-9]{2}[/s]?[0-9]{4}[\s]?[0-9]{4}$/;
        if (cardRegex.test(cardno)) { alert("It is A valid Master-Card"); }
        else { alert("Invalid Card"); }

    }

    //We will be writting for  
    else if (type == "2") {

        var cardRegex = /^4{1}[0-9]{3}[\s]?[0-9]{4}[\s]?[0-9]{4}$/;
        var cardRegex1 = /^4{1}[0-9]{3}[\s]?[0-9]{4}[\s]?[0-9]{4}$/;
        if(RegExp.test(cardno)|| cardRegex1.test(cardno)){alert("It is Valid Visa Card");}
else{alert("Invalid Card")}

    }
    

}