// Simulate fetching data from the backend
function fetchData(widgetId) {
    // Replace this with actual API calls to your backend
    // For now, let's generate random data as an example
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({ x: i, y: Math.floor(Math.random() * 100) });
    }
    return data;
  }
  
  // Update the content of a widget with the fetched data
  function updateWidget(widgetId) {
    const ctx = document.getElementById(`chart${widgetId.charAt(widgetId.length - 1)}`).getContext('2d');
    const data = fetchData(widgetId);
  
    new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Dataset',
          borderColor: 'rgb(75, 192, 192)',
          data: data,
          fill: false,
        }],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
          },
          y: {
            min: 0,
            max: 100,
          },
        },
      },
    });
  }
  
  // Update widgets on page load
  document.addEventListener('DOMContentLoaded', function () {
    updateWidget('widget1');
    updateWidget('widget2');
    updateWidget('widget3');
    updateWidget('widget4');
    updateWidget('widget5');
  });
  
  // Update widgets every 5 seconds (for example)
  setInterval(function () {
    updateWidget('widget1');
    updateWidget('widget2');
    updateWidget('widget3');
    updateWidget('widget4');
    updateWidget('widget5');
  }, 5000);
  