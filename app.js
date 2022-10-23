let bubbleAlg = document.getElementById("bubbleAlg");
let bubbleApp = document.querySelector("bubbleAlg");
let arrStart = document.querySelector(".arrStart");
let arrCountInput = document.getElementById("arrCountInput");
let userInput = document.querySelector(".userInput");

arrStart.addEventListener("click", function () {
    if (arrCountInput.value > 10) {
        alert("Dizinin Elaman sayisi 1-10 aralıqında olması lazım. Lütfen yeniden Deneyim ")
    } else {
        let bubbleAlgCont = document.querySelector(".bubbleAlgCont");
        let bubbleAppCont = document.querySelector(".bubbleAppCont");
        bubbleAlgCont.style.left = "100%";
        bubbleAlgCont.style.animation = "bubbleAlgCont 1s";
        userInput.innerHTML = arrCountInput.value + " - "
        bubbleAppCont.style.left = "0";
        bubbleAppCont.style.animation = "bubbleAppCont 1s";

        let x = arrCountInput.value
        let y = parseInt(x);
        for (var i = 0; i < y; i++) {
            let createInputEl = document.createElement("input");
            createInputEl.type = "number";
            createInputEl.value = "1";
            createInputEl.className = "userEnteredInputValue";
            document.querySelector(".userEntered").appendChild(createInputEl);
        }
        let bubbleSortBtn = document.querySelector(".bubbleSortBtn");
        // let smallToBigBtn = document.querySelector(".smallToBigBtn");
        let userEnteredInputValue = document.querySelectorAll(".userEnteredInputValue")
        let arr = new Array();

        bubbleSortBtn.addEventListener("click", function () {
            for (let g = 0; g < userEnteredInputValue.length; g++) {
                let m = parseInt(userEnteredInputValue[g].value);
                arr.push(m)
                // ----------------------------------------------------------------------------
                //         // BuBBle Sort Alqorithm Code Area Start In the Here
                for (var q = 0; q < arr.length; q++) {
                    for (var w = 0; w < (arr.length - q - 1); w++) {
                        if (arr[w] > arr[w + 1]) {
                            var temp = arr[w]
                            arr[w] = arr[w + 1]
                            arr[w + 1] = temp
                        }
                    }
                }

                // arr.sort(function (a, b) {
                //     return a - b;
                // });
                // ----------------------------------------------------------------------------
                //         // BuBBle Sort Alqorithm Code Area End of The the Here
            }
            for (let v = 0; v < arr.length; v++) {
                let p = document.createElement("input")
                p.value = `${arr[v]}`
                let resultBubble = document.querySelector(".resultBubble")
                resultBubble.appendChild(p)
                console.log(typeof arr[v])
            }
        })

        // smallToBigBtn.addEventListener("click", function () {
        //     for (let g = 0; g < userEnteredInputValue.length; g++) {
        //         let m = parseInt(userEnteredInputValue[g].value);
        //         arr.push(m)
        //         // ----------------------------------------------------------------------------
        //         // BuBBle Sort Alqorithm Code Area Start In the Here
        //         // for (var q = 0; q < arr.length; q++) {
        //         //     for (var w = 0; w < (arr.length - q - 1); w++) {
        //         //         if (arr[w] > arr[w + 1]) {
        //         //             var temp = arr[w]
        //         //             arr[w] = arr[w + 1]
        //         //             arr[w + 1] = temp
        //         //         }
        //         //     }
        //         // }
        //         // ----------------------------------------------------------------------------
        //         // BuBBle Sort Alqorithm Code Area End of The the Here
        //     }
        //     for (let v = 0; v < arr.length; v++) {
        //         let p = document.createElement("input")
        //         p.value = `${arr[v]}`
        //         let resultBubble = document.querySelector(".resultBubble")
        //         resultBubble.appendChild(p)
        //         console.log(typeof arr[v])
        //     }
        // })

    }
})