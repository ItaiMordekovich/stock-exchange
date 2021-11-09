

const companyList_URL = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/etf/list`

class Marquee {
    marqueeContainer; 
    constructor(container) {
        this.marqueeContainer = container;
    }

    async load() {
        const response = await fetch(companyList_URL);
        const data = await response.json();


        for (let i = 0; i < 100; i++) {
            const dataCompany = data[i];
            const companySymbol = data[i].symbol;
            const companyPrice = data[i].price;

            const companyPriceNode = document.createElement("span");
            companyPriceNode.setAttribute('class', 'marqueeCompanyPrice');
            companyPriceNode.textContent = companyPrice;


            const companySymbolNode = document.createElement("span");
            companySymbolNode.setAttribute('class', 'marqueeCompanySymbol');
            companySymbolNode.textContent = companySymbol;

            this.marqueeContainer.appendChild(companySymbolNode)
            this.marqueeContainer.appendChild(companyPriceNode);
        }
    }
}



