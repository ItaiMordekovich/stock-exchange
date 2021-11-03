
//====================================== Milestone 1 ======================================

const userInput = document.getElementById("searchInput");

document.getElementById("searchButton").addEventListener("click", function () {

    document.getElementById("spinnerResults").classList.remove("d-none");
    
    const stockExchange_URL = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${userInput.value}&amp;limit=10&amp;exchange=NASDAQ`;

    fetch(stockExchange_URL)
        .then(function (response) {
            // console.log(response);
            return response.json();
        })

        .then(data => {
            // console.log(data);
            for (let i = 0; i < 10; i++) {
                
                const companyName = data[i].name;
                const companySymbol = data[i].symbol;
               

                document.getElementById("ulResults")
                const liResults = document.createElement("li");
                const companyLink = document.createElement("a");
                companyLink.target ="blank";
                companyLink.innerHTML = `${companyName} (${companySymbol})` 
                companyLink.href = `./company.html?symbol=${companySymbol}` 
                liResults.appendChild(companyLink)
                document.getElementById("ulResults").append(liResults)
                liResults.classList.add("liResults");
                companyLink.classList.add("text-decoration-none")
                document.getElementById("spinnerResults").classList.add("d-none");
            }
        })
        
    document.getElementById("ulResults").innerHTML = "";
});
