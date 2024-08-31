function fetchJSONData() {
    fetch("./assets/data/info.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            return res.json();
        })

        .then((data) => {
            const currentPage = window.location.pathname.split('/')[2];
            console.log(currentPage)

            data.forEach(item => {
                if (item.page === currentPage) {
                    loadPage(item);
                }
            });
        })

        .catch((error) => {
            console.error("Unable to fetch data:", error);
        });
}
  
function loadPage(pageData) {
    switch (pageData.page) {
        case " ":
        case "index.html":
            const headerNameElement = document.getElementById("name");
            const headerageNationalityElement = document.getElementById("age-nationality");

            headerNameElement.textContent = pageData["header-info"]["name"];
            headerageNationalityElement.textContent = pageData["header-info"]["age-nationality"];

            break;
        
        case "designer.html":
            break;  

        case "dev.html":
            const headerTitleElement = document.querySelector(".header-title");
            const firstLineElement = document.querySelector(".first-line");
            const secondLineElement = document.querySelector(".second-line");
            const cmdBlockContainer = document.querySelector(".cmd-content");

            headerTitleElement.textContent = pageData["header-title"];
            firstLineElement.textContent = pageData["first-line"];
            secondLineElement.textContent = pageData["second-line"];

            function typeCommand(commandElement, commandText, typingSpeed) {
                let currentCharIndex = 0;
            
                function type() {
                    if (currentCharIndex === commandText.length) return;
            
                    commandElement.textContent += commandText[currentCharIndex];
                    currentCharIndex++;
            
                    setTimeout(type, typingSpeed);
                }
            
                type();
            }

            pageData["cmd-block"].forEach((command) => {
                const cmdBlock = document.createElement("div");
                cmdBlock.classList.add("cmd-block");

                const cmdLine = document.createElement("div");
                cmdLine.classList.add("cmd-line");

                const cmdText = document.createElement("div");
                cmdText.classList.add("cmd-text");

                const cmdBracket1 = document.createElement("p");
                cmdBracket1.classList.add("brackets");
                cmdBracket1.textContent = "[";

                const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#55FF8C" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                    </svg>`;

                const cmdSymbol = document.createElement("p");
                cmdSymbol.classList.add("symbol");
                cmdSymbol.textContent = "~";

                const cmdCommand = document.createElement("p");
                cmdCommand.classList.add("command");

                const cmdBracket2 = document.createElement("p");
                cmdBracket2.classList.add("brackets");
                cmdBracket2.style.position = "absolute";
                cmdBracket2.style.right = "3%";
                cmdBracket2.textContent = "]";

                cmdLine.appendChild(cmdBracket1);
                cmdText.innerHTML = svgMarkup;
                cmdText.appendChild(cmdSymbol);
                cmdText.appendChild(cmdCommand);
                cmdLine.appendChild(cmdText);
                cmdLine.appendChild(cmdBracket2);

                cmdBlock.appendChild(cmdLine);

                const result = document.createElement("div");
                result.classList.add("grid-container");
                result.classList.add("result");

                command["result"].forEach((item) => {
                    const resultText = document.createElement("p");
                    resultText.classList.add("grid-item");
                    resultText.textContent = item;
                    result.appendChild(resultText);
                });

                cmdBlock.appendChild(result);
                cmdBlockContainer.appendChild(cmdBlock);

                typeCommand(cmdCommand, command["command"], 80);
            })

            break;

        default:
            console.error("Invalid page:", pageData.page);
            break;
    }
}
  
  fetchJSONData();