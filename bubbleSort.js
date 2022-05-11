// console.log("hi")

// get the array_box;
var array_box = document.getElementById("arrayBox");

// define a function that generates different boxes in arrayBox.


function generateArray() {
    for (let i = 0; i < 15; i++) {
        // value of the number that the array will have
        var boxValue = Math.ceil(Math.random() * 100);

        // create a div element in which will act as a container with the value boxValue
        var singleBlock = document.createElement("div");
        singleBlock.classList.add("singleBlockBox");

        // define the height of sblocks.
        singleBlock.style.height = `${boxValue*3.5}px`;

        // transform each singleblocks by some amount so that they dont overlap on each other.
        singleBlock.style.transform = `translate(${i*27.15}px)`;


        // boxValue or the number that will be shown above the each singleArrayBlock
        var singleBlock_label = document.createElement("label");
        singleBlock_label.classList.add("block_id");
        singleBlock_label.innerText = boxValue;
        singleBlock_label.style.color = "blue";

        // add this boxValue/number above the array block.
        singleBlock.appendChild(singleBlock_label);
        array_box.appendChild(singleBlock);

    }
}

function swap(ele1, ele2) {
    return new Promise((resolve) => {
        // swap the styling of the blocks
        var tempEle = ele1.style.transform;
        ele1.style.transform = ele2.style.transform;
        ele2.style.transform = tempEle;

        window.requestAnimationFrame(() => {
            setTimeout(() => {
                array_box.insertBefore(ele2, ele1);
                resolve();
            }, 25);
        });
    });
}

async function bubbleSort(delay = 10) {
    // select all the array boxes;
    var blocks = document.querySelectorAll(".singleBlockBox");
    for (let i = 0; i < blocks.length; i++) {
        for (let j = 0; j < blocks.length - i - 1; j++) {
            blocks[j].style.backgroundColor = "#6ce9af";
            blocks[j + 1].style.backgroundColor = "#6ce9af";

            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, delay)
            });
            var value1 = Number(blocks[j].childNodes[0].innerText);
            var value2 = Number(blocks[j + 1].childNodes[0].innerText);


            if (value2 < value1) {
                await swap(blocks[j], blocks[j + 1]);
                blocks = document.querySelectorAll(".singleBlockBox");
            }

        }

    }
}
generateArray();
bubbleSort();