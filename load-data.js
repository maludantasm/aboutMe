function fetchJSONData() {
    fetch("./assets/data/info.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            return res.json();
        })

        .then((data) => {
            const currentPage = window.location.pathname.split('/');

            data.forEach(item => {
                if (item.page === currentPage[2] || (currentPage[1] === "aboutMe" && currentPage[2] === "")) {
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
        case "index.html":
        case "":
            const headerNameElement = document.getElementById("name");
            const headerageNationalityElement = document.getElementById("age-nationality");
            const infoBlockContainer = document.getElementById("body-container");

            headerNameElement.textContent = pageData["header-info"]["name"];
            headerageNationalityElement.textContent = pageData["header-info"]["age-nationality"];

            pageData["info-block"].forEach((info) => {
                const infoBlock = document.createElement("div");
                infoBlock.classList.add("info-block");

                const plaque = document.createElement("div");
                plaque.classList.add("plaque");

                const svgMarkup = `<svg class="left" width="24" height="40" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="32" x="4" y="4" rx="8" ry="8" style="fill:#F5F5F7; stroke-width:2px; stroke:#1D1D1F"/>
                </svg>`;

                const svgMarkup1 = `<svg class="right" width="24" height="40" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="32" x="4" y="4" rx="8" ry="8" style="fill:#F5F5F7; stroke-width:2px; stroke:#1D1D1F"/>
                </svg>`;

                const blockTitle = document.createElement("p");
                blockTitle.classList.add("block-title");
                blockTitle.textContent = info["block-title"];

                const infoUnordList = document.createElement("ul");

                info["content"].forEach((item) => {
                    const contentText = document.createElement("li");
                    contentText.textContent = item;

                    infoUnordList.appendChild(contentText);
                })

                plaque.innerHTML = svgMarkup+svgMarkup1;

                infoBlock.appendChild(plaque)
                infoBlock.appendChild(blockTitle)
                infoBlock.appendChild(infoUnordList)
                infoBlockContainer.appendChild(infoBlock)
            })

            break;
        
        case "designer.html":
            const cvContentContainer = document.querySelector(".cv-content");

            const frameContainer = document.createElement("div");
            frameContainer.classList.add("grid-container");

            pageData["info-frame"].forEach((frame) => {
                const contentFrame = document.createElement("div");
                contentFrame.classList.add("grid-item");

                const itemTitle = document.createElement("p");
                itemTitle.classList.add("item-title");
                itemTitle.textContent = frame["item-title"];

                const itemContent = document.createElement("div");
                itemContent.classList.add("item-content");

                if (itemTitle.textContent === "portfolio") {
                    frame["content"].forEach((item) => {
                        const portfolioLink = document.createElement("a");
                        portfolioLink.classList.add("portfolio-link");

                        const contentText = document.createElement("p");
                        contentText.textContent = item;

                        if (item === "Maid My Day") {
                            portfolioLink.href = "https://www.figma.com/proto/PYT9epKi3AxUk7KgQfEBBP/mldm_proj_final?node-id=53-4638&node-type=canvas&t=IqPJat6cTOqNGihx-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=53%3A4638";
                        }

                        else if (item === "Sportlink") {
                            portfolioLink.href = "https://www.figma.com/proto/ys0C9f5YKyNxBNfhNDZYi7/sports-project?node-id=471-583&node-type=canvas&t=X9Udw4Rw2wJoNjEM-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=471%3A583";
                        }

                        portfolioLink.target = "_blank";

                        const folderSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        folderSvg.setAttribute("width", "32");
                        folderSvg.setAttribute("height", "32");
                        folderSvg.setAttribute("fill", "currentColor");
                        folderSvg.setAttribute("class", "bi bi-file-play");
                        folderSvg.setAttribute("viewBox", "0 0 16 16");

                        const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        path1.setAttribute("d", "M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z");
                        folderSvg.appendChild(path1);

                        const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        path2.setAttribute("d", "M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z");   

                        folderSvg.appendChild(path2);
    
                        portfolioLink.appendChild(folderSvg);
                        portfolioLink.appendChild(contentText);

                        itemContent.appendChild(portfolioLink);
                    })
                }

                else {
                    frame["content"].forEach((item) => {
                        const contentText = document.createElement("p");
                        contentText.textContent = item;
    
                        itemContent.appendChild(contentText);
                    })
                }

                contentFrame.appendChild(itemTitle);
                contentFrame.appendChild(itemContent);

                frameContainer.appendChild(contentFrame);
                cvContentContainer.appendChild(frameContainer);
            })

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

                const svgMarkup2 = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#55FF8C" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
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
                cmdText.innerHTML = svgMarkup2;
                cmdText.appendChild(cmdSymbol);
                cmdText.appendChild(cmdCommand);
                cmdLine.appendChild(cmdText);
                cmdLine.appendChild(cmdBracket2);

                cmdBlock.appendChild(cmdLine);

                const result = document.createElement("div");
                result.classList.add("grid-container");
                result.classList.add("result");

                command["result"].forEach((item) => {
                    if (command["command"] === "cd More-info" && item === "Github") {
                        const resultText = document.createElement("a");
                        resultText.classList.add("grid-item");
                
                        resultText.href = "https://github.com/maludantasm";
                        resultText.target = "_blank";

                        resultText.textContent = item;
                        result.appendChild(resultText);
                    }

                    else {
                        const resultText = document.createElement("p");
                        resultText.classList.add("grid-item");
                        resultText.textContent = item;
                        result.appendChild(resultText);
                    }
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