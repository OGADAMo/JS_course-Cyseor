//Crypto Chart
const CryptoChart = document.getElementById('CryptoChart');
const labelsCrypto = [
    "16 Jul 2021",
    "16 Aug 2021",
    "16 Sep 2021",
    "16 Oct 2021",
    "16 Nov 2021",
    "16 Dec 2021",
    "16 Jan 2022",
    "16 Feb 2022",
    "16 Mar 2022",
    "16 Apr 2022",
    "16 May 2022",
    "16 Jun 2022",
    "16 Jul 2022",

];

new Chart(CryptoChart, {
    type: "line",
    data: {
        labels: labelsCrypto,
        datasets: [
            {
                label: "BTC",
                data: [200000, 290000, 304000, 394000, 399000, 316000, 280000, 290000, 280000, 281000, 215000, 145000, 155000],
                borderColor: "rgba(66, 138, 245, 1)",
            },
            {
                label: "ETH",
                data: [11000, 20000, 21000, 24000, 28000, 26000, 22000, 20000, 19000, 21000, 14000, 7000, 9400],
                borderColor: "rgba(235, 134, 52, 1)",
            },
            {
                label: "DODGE",
                data: [1, 2, 1.5, 1.5, 1.5, 1.2, 1, 0.7, 1, 0.6, 0.4, 0.5],
                borderColor: "rgba(100, 200, 2, 1)",
            }
        ]

    }
});

//Radar Chart
new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "1950",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [8.77,55.61,21.69,6.62,6.82]
        }, {
          label: "2050",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data: [25.48,54.16,7.61,8.06,4.45]
        },{
            label: "2000",
            fill: true,
            backgroundColor: "rgba(10,99,132,0.2)",
            borderColor: "rgba(10,99,132,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(10,99,132,1)",
            pointBorderColor: "#fff",
            data: [20.48,10.16,20.61,40.06,30.45]
          },
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Distribution in % of world population'
      }
    }
});

//Line Chart
const lineChart = document.getElementById('lineChart');
const labels = [
    "22 Maj",
    "23 Maj",
    "24 Maj",
    "25 Maj",
    "26 Maj",
    "27 Maj",
    "28 Maj",
    "29 Maj",
    "30 Maj",
    "31 Maj",
    "01 Maj",
    "03 Maj",
    "04 Maj",
    "05 Maj",
    "06 Maj",
    "07 Maj",
    "08 Maj",
    "09 Maj",
];

new Chart(lineChart, {
    type: "line",
    data: {
        labels: labels,
        datasets: [
            {
                label: "Povratni pregledi",
                data: [1844, 1554, 1273, 1284, 1126, 946 , 964 , 1793, 1432, 1130, 1074, 954, 856, 833, 1536, 1416, 1248, 1226],
                borderColor: "rgba(66, 138, 245, 1)",
            },
            {
                label: "Novi pregledi",
                data: [1199, 1314, 1147, 1403, 1217, 1015, 1138, 1272, 957 , 862 , 716 , 712, 610, 585, 847 , 744 , 756 , 781],
                borderColor: "rgba(235, 134, 52, 1)",
            }
        ]

    }
});

//PieChart
const pieChart = document.getElementById('pieChart');
new Chart(pieChart, {
    type: "pie",
    data: {
        labels: ["Serbia", "BiH", "Croatia", "N. Mac", "MNE", "Other"], 
        datasets: [
            {
                label: "Drzave",
                data: [49.6, 20.3, 9.5, 3.6, 2.6, 14.4],
                backgroundColor: [
                    "rgba(52, 235, 143, 1)",
                    "rgba(235, 201, 52, 1)",
                    "rgba(52, 153, 235, 1)",
                    "rgba(235, 52, 119, 1)",
                    "rgba(186, 52, 235, 1)",
                    "rgba(52, 153, 170, 1)",



                    

                ]
            }
            
        ]

    }
});


//Bar Chart
const barChart = document.getElementById('barChart');
new Chart(barChart, {
    type: "bar",
    data: {
        labels: ["13 - 17", "18 - 24", "25 - 34", "35 - 44", "45 – 54", "55 – 64", "65+"], 
        datasets: [
            {
                label: "Publika po godinama",
                data: [1.7, 43.3, 34.4, 13.6, 5.6, 1.2, 0.3],
                backgroundColor: [
                    "rgba(52, 235, 143, 1)",
                    "rgba(235, 201, 52, 1)",
                    "rgba(52, 153, 235, 1)",
                    "rgba(235, 52, 119, 1)",
                    "rgba(186, 52, 235, 1)",
                    "rgba(52, 153, 170, 1)",
                    "rgba(200, 240, 170, 1)",

                ]
            }
            
        ]

    }
});