import Chart from 'chart.js/auto';

document.addEventListener('DOMContentLoaded', function () {
    const statusCtx = document.getElementById('statusChart')?.getContext('2d');
    const categoryCtx = document.getElementById('categoryChart')?.getContext('2d');

    if (statusCtx && window.statusLabels && window.statusCounts) {
        new Chart(statusCtx, {
            type: 'doughnut',
            data: {
                labels: window.statusLabels,
                datasets: [{
                    label: 'Report Status',
                    data: window.statusCounts,
                    backgroundColor: ['#f59e0b', '#3b82f6', '#10b981', '#6b7280'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    }
                }
            }
        });
    }

    if (categoryCtx && window.categoryLabels && window.categoryCounts) {
        new Chart(categoryCtx, {
            type: 'bar',
            data: {
                labels: window.categoryLabels,
                datasets: [{
                    label: 'Reports per Category',
                    data: window.categoryCounts,
                    backgroundColor: '#6366f1',
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            precision: 0
                        }
                    }
                }
            }
        });
    }
});
