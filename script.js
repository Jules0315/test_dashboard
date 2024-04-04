window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Category Count"
        },
        axisY: {
            title: "Count"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            legendText: "Categories",
            dataPoints: [      
                { y: 10, label: "Category 1" },
                { y: 15, label: "Category 2" },
                { y: 5, label: "Category 3" },
                { y: 20, label: "Category 4" }
            ]
        }]
    });
    chart.render();
}

