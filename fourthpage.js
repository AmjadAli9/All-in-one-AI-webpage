document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('forecastChart').getContext('2d');
    const forecastBtn = document.getElementById('forecastBtn');

    const chartConfig = {
        type: 'line',
        data: {
            labels: [],  // Dates will be populated here
            datasets: [{
                label: 'Historical Data',
                data: [],  // Historical data values will be populated here
                borderColor: 'blue',
                fill: false
            }, {
                label: 'Predicted Data',
                data: [],  // Predicted data values will be populated here
                borderColor: 'green',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'linear',
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Value'
                    }
                }
            }
        }
    };

    const forecastChart = new Chart(ctx, chartConfig);

    function generateMockData() {
        const historicalData = [];
        const predictedData = [];
        const labels = [];

        // Generate historical data
        for (let i = 0; i < 30; i++) {
            labels.push(i);
            historicalData.push(Math.sin(i / 5) * 20 + 50 + (Math.random() * 10 - 5));
        }

        // Generate predicted data
        for (let i = 30; i < 40; i++) {
            labels.push(i);
            predictedData.push(Math.sin(i / 5) * 20 + 50 + (Math.random() * 10 - 5));
        }

        return { labels, historicalData, predictedData };
    }

    function updateChart() {
        const { labels, historicalData, predictedData } = generateMockData();

        forecastChart.data.labels = labels;
        forecastChart.data.datasets[0].data = historicalData;
        forecastChart.data.datasets[1].data = new Array(30).fill(null).concat(predictedData);

        forecastChart.update();
    }

    forecastBtn.addEventListener('click', updateChart);
    updateChart();  // Initialize with default data
});
