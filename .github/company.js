
//====================================== Milestone 2 ======================================

const urlParams = new URLSearchParams(window.location.search);
const symbolString = urlParams.get('symbol');
const company_URL = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbolString}`


fetch(company_URL)
    .then(function (response) {
        //console.log(response);
        return response.json();
    })

    .then(data => {
        //console.log(data);

        const companyImage = data.profile.image;
        const companyName = data.profile.companyName;
        const companyIndustry = data.profile.industry;
        const companyDescription = data.profile.description;
        const companyPrice = data.profile.price;
        const companyChangesPercentage = data.profile.changesPercentage;
        const companyWebsite = data.profile.website;


        document.getElementById("logo").src = companyImage;
        document.getElementById("companyName").innerHTML = companyName;
        document.getElementById("industry").innerHTML = `(${companyIndustry})`;
        document.getElementById("description").innerHTML = companyDescription;
        document.getElementById("stockPrice").innerHTML = `Stock Price: $${companyPrice}`;
        document.getElementById("percentage").innerHTML = `(${companyChangesPercentage}%)`;
        document.getElementById("website").innerHTML = companyWebsite;

        function changePercentage() {
            if (companyChangesPercentage < 0) {
                document.getElementById("percentage").classList.add("text-danger");
            } else {
                document.getElementById("percentage").classList.add("text-success");
                document.getElementById("percentage").innerHTML = `(+${companyChangesPercentage}%)`;
            }
        }
        changePercentage();
    });



const companyHistory_URL = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/${symbolString}?serietype=line`

let closeStockPrice = [];
let dateStockPrice = [];

fetch(companyHistory_URL)
    .then(function (response) {
        return response.json();
    })

    .then(data => {
        document.getElementById("spinnerChart").classList.remove("d-none");
        for (let i = 0; i < 30; i++) {
            closeStockPrice.push(data.historical[i].close);
            dateStockPrice.push(data.historical[i].date);
        }

        function stockPriceHistoryChart(){
            document.getElementById("spinnerChart").classList.add("d-none");

            const ctx = document.getElementById('chart').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dateStockPrice,
                    datasets: [{
                        label: 'Stock Price History',
                        data: closeStockPrice,
                        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                        borderColor: ['rgba(255, 99, 132, 1)'],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
        stockPriceHistoryChart();
    })
