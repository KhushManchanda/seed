



function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("data.json", function(text){
    var data = JSON.parse(text);
    
    
    const siliconScore = ((0.1)*data.one + (0.2)*data.two + (0.4)*data.three + (0.2)*data.four + (0.1)*data.five)*1.4;
    // const para3 = document.createElement("h4");
    // const wyre = document.getElementById("wyre");
    // para3.style.color = "lightblue";
    // para3.innerHTML("Valuation");
    // wyre.appendChild(para3);
    if(data.company == "hellomd"){
    const para = document.createElement("h4");
    const para2 = document.createElement("h4");
    const b = document.createElement("br");
    const b1 = document.createElement("br");
    const b2 = document.createElement("br");
    const b3 = document.createElement("br");
    const b4 = document.createElement("br");
    const node = document.createTextNode("Valuation                    " + data.one + " /10");
    const node2 = document.createTextNode("Customer base               " + data.two+ " /10");
    const node3 = document.createTextNode("Cash Flow and profitability " + data.three+ " /10");
    const node4 = document.createTextNode("Scalability                 " + data.four+  " /10");
    const node5 = document.createTextNode("Hype                        " + data.five+ " /10");
    const node6 = document.createTextNode("Silicon Score               " + parseInt(siliconScore)+ " /14");
    para.appendChild(node);
    para.appendChild(b);
    para.appendChild(node2);
    para.appendChild(b1);
    para.appendChild(node3);
    para.appendChild(b2);
    para.appendChild(node4);
    para.appendChild(b3);
    para.appendChild(node5);
    para.appendChild(b4);
    para2.appendChild(node6)
    para2.style.fontSize = "22px";
    para2.style.color = "white";

    document.getElementById("para1").appendChild(para);
    document.getElementById("para1").appendChild(para2);
    para1.style.color = "lightblue";
    para1.style.fontSize = "18px";
    para1.style.fontFamily = "Open Sans";
    head1.innerHTML = data.company;
    info.innerHTML = "HelloMD is a digital healthcare platform for medical cannabis doctor consultations.";
    
    }
    

    
    
    
});

