document.getElementById('idButton').addEventListener('click', einfugenText);
document.getElementById('idButtonMatch').addEventListener('click', matchTextArea);
document.getElementById('idButtonMatchP').addEventListener('click', matchTextP);
document.getElementById('idButtonSearch').addEventListener('click', matchSearch);

//Get match of textarea - REGEX
function matchTextArea() {
    var valueTarea = document.getElementById('idTextarea').value;
    const regex = /China/;
    const isExisting = regex.test(valueTarea);
    console.log(isExisting);
}
//Get match of p element - REGEX
function matchTextP() {
    var valuePelement = document.querySelectorAll(".classP");
    var newValue = [];
    const regex = /China/;
    var isExisting;
    for(text of valuePelement) {
        newValue.push(text.innerText);
        isExisting = regex.test(newValue);
        console.log(newValue);
    };
    console.log(isExisting);
}
//Get match of search element - REGEX
function matchSearch() {
    valuePelement = document.querySelectorAll(".classP");
    var newValue = [];
    const regex = /China/;
    var isExisting;
    for(text of valuePelement) {
        newValue.push(text.innerText);
        isExisting = regex.test(newValue);
        console.log(newValue);
    };
    console.log(isExisting);
}

//ADD EVENT
function einfugenText(e) {
    e.preventDefault();
    //GET INPUT VALUE
    var valueTarea = document.getElementById('idTextarea').value;
    

    if(valueTarea == "") {
        alert("Bitte schreiben Sie einen Text innerhab des Kastens.");
    } else {
        //CREATE P ELEMENT
        newP = document.createElement("p");
        //ADD TEXT NODE WITH INPUT VALUE TO newIp
        newP.appendChild(document.createTextNode(valueTarea));
        //SET CLASS TO newP
        newP.className = 'classP';
        //SET ID TO newP
        newP.setAttribute('id', 'newPId');
        //CREATE LI ELEMENT
        var newLi = document.createElement("li");
        //SET ID TO newLi
        newLi.setAttribute('id','idLi');
        //SET CLASS TO newTarea
        newLi.className = 'classLi';          
        //ADD newP TO newLi
        newLi.appendChild(newP);
        //ADD newLi TO UL
        var newUl = document.getElementById('idUl');
        newUl.appendChild(newLi);
        //CREATE DISPLAY BUTTON
        var viewDetailButton = document.createElement('button');
        //SET CLASS TO viewDetailButton
        viewDetailButton.classList.add("classDetailButton");
        //SET ID TO viewDetailButton
        viewDetailButton.setAttribute('id', 'idDisplay');
        //SET TYPE to viewDetailButton
        viewDetailButton.setAttribute('type', 'button');
        //ADD NAME TO viewDetailButton
        viewDetailButton.appendChild(document.createTextNode('View Detail'));        
        //ADD viewDetailButton TO newLi
        newLi.appendChild(viewDetailButton);
        
        //GET MODAL
        var modal = document.getElementById('myModal');
        //GET SPAN
        var span = document.getElementsByClassName('close')[0];
        //GET MODAL CONTENT
        var modalContent = document.getElementById('idModal-content');
        
        //CREATE CLONE OF newP
        var node = newLi.firstChild; //oder [0]
        var clone = node.cloneNode(true);
        //SET newLi.firstChild(p element) CLONE ID 
        clone.setAttribute('id', 'idClone');
        //SET CLASS TO newLi.firstChild(p element)
        clone.className = "classPClone";
        //ADD newLi CLONE TO modalContent
        modalContent.appendChild(clone);    
        
        //DISPLAY BOX
        viewDetailButton.addEventListener('click', displayBox);
        function displayBox() {
            if(viewDetailButton.classList.contains('classDetailButton')) {
                modal.style.display = "block";
                modalContent.style.display = "block";
                span.style.display = "block";
                clone.style.display = "block";
            }
        }
         
        //CLOSE BOX
        span.addEventListener('click', closeBox);
        function closeBox() {
            if(span.classList.contains('close')) {
                modal.style.display = "none";
                modalContent.style.display = "none";
                clone.style.display = "none";
            }
        }
        
        //CLEAR TEXT AREA 
        var clearInput = document.getElementById("idTextarea");
        clearInput.value = "";
    }
}

//TOTAL OF WORDS AND VOWELS
// document.getElementById('idButton').addEventListener('click', countWort);

// function countWort() {
//     var text = document.getElementById('idTextarea').value;
//     var textString = text.toString();
//     var textArray = Array.from(textString);
//     var noText = 0;
//     var totalWort = 0;
//     var countVowel = 0;
//     for(var i = 0; i < textArray.length; i++) {
//         if(textArray[i] == " ") { //Mit array verwenden wir " ", mit text verwenden wir "";
//             noText++;
//         }
//         if((textArray[i] == "a") || (textArray[i] == "A") || (textArray[i] == "e") || 
//         (textArray[i] == "E") || (textArray[i] == "i") || (textArray[i] == "I") || 
//         (textArray[i] == "o") || (textArray[i] == "O") || (textArray[i] == "u") || 
//         (textArray[i] == "U")) {
//             countVowel++;
//         }  
//     }
//     console.log("die Gesamtzahl von Wörter ist:" + (totalWort = textArray.length - noText));
//     console.log("die Gesamtzahl von Vokale ist:" + (countVowel));
// }








