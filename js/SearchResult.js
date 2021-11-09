

class SearchResults {
    
    searchResultsContainer;
    constructor(container) {
        
        this.searchResultsContainer = container;
    }

    async renderResults(companies) {
        
        this.searchResultsContainer.innerHTML = "";

        for (let i = 0; i < 10; i++) {
            console.log(this);
            const companyName = companies[i].name;
            const companySymbol = companies[i].symbol;

            const company_URL = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${companySymbol}`
            const response = await fetch(company_URL);
            const company = await response.json();

            const companyChangesPercentage = company.profile.changesPercentage;
            const companyImage = company.profile.image;

            const liResults = document.createElement("li");
            const compImg = document.createElement('img');
            const companyLink = document.createElement("a");
            const liSymbol = document.createElement("span");
            const liPercentage = document.createElement("span");

            compImg.setAttribute('src', companyImage);
            compImg.setAttribute('class', 'compImg');
            companyLink.target = "blank";
            companyLink.innerHTML = `${companyName}`;
            companyLink.href = `./company.html?symbol=${companySymbol}`;
            companyLink.classList.add("text-decoration-none");
            liSymbol.setAttribute('class', 'liSymbol');
            liSymbol.innerHTML = `(${companySymbol})`;
            liPercentage.setAttribute('class', 'liPercentage');
            liPercentage.innerHTML = `(${companyChangesPercentage}%)`;

            liResults.setAttribute('class', 'liResults');
            liResults.appendChild(compImg);
            liResults.appendChild(companyLink);
            liResults.appendChild(liSymbol);
            liResults.appendChild(liPercentage);

            const resultsWrapper = document.createElement("div");
            const results = document.createElement("ul");
            results.setAttribute('class', 'list-unstyled');
            results.setAttribute('id', 'ulResults');
            results.appendChild(liResults);
            resultsWrapper.appendChild(results);
            this.searchResultsContainer.appendChild(resultsWrapper);

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

    }
}
