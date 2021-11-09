

class SearchForm {
    searchFormContainer;
    constructor(container) {
        this.searchFormContainer = container;
    }

    async onSearch(param) {
        const inputWrapper = document.createElement("div");
        inputWrapper.setAttribute('class', 'input-group mb-3');

        const searchInput = document.createElement("input");
        searchInput.setAttribute('class', 'form-control ms-5');
        searchInput.setAttribute('id', 'searchInput');
        searchInput.setAttribute('type', 'search');

        const searchSpinner = document.createElement("div");
        searchSpinner.setAttribute('class', 'spinner-grow d-none mx-2');
        searchSpinner.setAttribute('id', 'spinnerResults');
        searchSpinner.setAttribute('role', 'status');

        const searchButton = document.createElement("button");
        searchButton.setAttribute('class', 'input-group-text btn btn-primary me-5');
        searchButton.setAttribute('id', 'searchButton');
        searchButton.textContent = 'Search';
        searchButton.addEventListener("click", function () {
            searchSpinner.classList.remove("d-none");
            const stockExchange_URL = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${searchInput.value}&amp;limit=10&amp;exchange=NASDAQ`;
            fetch(stockExchange_URL).then(function (response) {
                return response.json();
            }).then(async (companies) => {
                param(companies);
            })
        })

        inputWrapper.appendChild(searchInput);
        inputWrapper.appendChild(searchButton);
        inputWrapper.appendChild(searchSpinner);
        this.searchFormContainer.appendChild(inputWrapper);
    }
}