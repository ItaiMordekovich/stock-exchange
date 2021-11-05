//====================================== Milestone 1 ======================================

// const userInput = document.getElementById("searchInput");

// document.getElementById("searchButton").addEventListener("click", function () {

//     document.getElementById("spinnerResults").classList.remove("d-none");

//     const stockExchange_URL = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${userInput.value}&amp;limit=10&amp;exchange=NASDAQ`;

//     fetch(stockExchange_URL)
//         .then(function (response) {
//             //console.log(response);
//             return response.json();
//         })

//         .then(data => {
//             //console.log(data);
//             for (let i = 0; i < 10; i++) {

//                 const companyName = data[i].name;
//                 const companySymbol = data[i].symbol;




//                 document.getElementById("ulResults")
//                 const liResults = document.createElement("li");
//                 const companyLink = document.createElement("a");
//                 companyLink.target = "blank";
//                 companyLink.innerHTML = `${companyName} (${companySymbol})`
//                 companyLink.href = `./company.html?symbol=${companySymbol}`
//                 liResults.appendChild(companyLink)
//                 document.getElementById("ulResults").append(liResults)
//                 liResults.classList.add("liResults");
//                 companyLink.classList.add("text-decoration-none")
//                 document.getElementById("spinnerResults").classList.add("d-none");
//             }
//         })

//     document.getElementById("ulResults").innerHTML = "";
// });


//====================================== Milestone 3 ======================================

const userInput = document.getElementById("searchInput");

document.getElementById("searchButton").addEventListener("click", function () {

    document.getElementById("spinnerResults").classList.remove("d-none");

    const stockExchange_URL = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${userInput.value}&amp;limit=10&amp;exchange=NASDAQ`;


    fetch(stockExchange_URL)
        .then(function (response) {
            //console.log(response);
            return response.json();
        })

        .then(async (data) => {
            //console.log(data);
            for (let i = 0; i < 10; i++) {

                const companyName = data[i].name;
                const companySymbol = data[i].symbol;
                
                const company_URL = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${companySymbol}`
                const response = await fetch(company_URL);
                const data2 = await response.json();
                //console.log(data2);

                const companyChangesPercentage = data2.profile.changesPercentage; 
                const companyImage = data2.profile.image;

                const liResults = document.createElement("li");
                const compImg = document.createElement(`img`);
                const companyLink = document.createElement("a");
                const liSymbol = document.createElement("span");
                const liPercentage = document.createElement("span"); 

                liResults.setAttribute(`class`, `liResults`); 
                compImg.setAttribute(`src`, companyImage);
                compImg.setAttribute(`class`, `compImg`);
                companyLink.target = "blank";
                companyLink.innerHTML = `${companyName}`; 
                companyLink.href = `./company.html?symbol=${companySymbol}`;
                liSymbol.setAttribute(`class`, `liSymbol`);
                liSymbol.innerHTML = `(${companySymbol})`; 
                liPercentage.setAttribute(`class`, `liPercentage`); 
                liPercentage.innerHTML = `(${companyChangesPercentage}%)`; 
                
                liResults.appendChild(compImg);
                liResults.appendChild(companyLink);
                liResults.appendChild(liSymbol); 
                liResults.appendChild(liPercentage); 
                document.getElementById("ulResults").appendChild(liResults);
                companyLink.classList.add("text-decoration-none");
                document.getElementById("spinnerResults").classList.add("d-none");

                function changePercentage() { 
                    if (companyChangesPercentage < 0) {
                        liPercentage.classList.add("text-danger");
                    } else {
                        liPercentage.classList.add("greenPercentage");
                        liPercentage.innerHTML = `(+${companyChangesPercentage}%)`;
                    }
                }
                changePercentage(); 
            }
        })

    document.getElementById("ulResults").innerHTML = "";
});

// ====================================== Milestone 4 ======================================

// const companyList_URL = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/etf/list`

// async function companyList() {
//     const response = await fetch(companyList_URL);
//     const data = await response.json();
//     //console.log(data);
    
//     const marquee = document.getElementById("marquee");
   
//     for (let i = 0; i < 100; i++) {
        
//         const companySymbol = data[i].symbol;
//         const companyPrice = data[i].price;
        
//         const companyPriceNode = document.createElement("span");
//         companyPriceNode.setAttribute(`class`, `marqueeCompanyPrice`);
//         companyPriceNode.textContent= companyPrice;


//         const companySymbolNode = document.createElement("span");
//         companySymbolNode.setAttribute(`class`, `marqueeCompanySymbol`);
//         companySymbolNode.textContent= companySymbol;

//         marquee.appendChild(companySymbolNode)                          
//         marquee.appendChild(companyPriceNode);
//     }
// }
// companyList();

// =========================================================================================

