// document.querySelector('.bgButton').onclick = abc ;

// function abc(){
//     document.querySelector('.leftNavbar').style.backgroundColor='#34495e'
//     document.querySelector('.logo').style.backgroundColor='#34495e'
//     document.querySelector('.img-menu').style.backgroundColor='#34495e'

// };

google.charts.load("current", { packages: ["line"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("number", "Day");
  data.addColumn("number", "Marshmallow Stuffed crust Pizza");
  data.addColumn("number", "Neapolitan Pizza");
  data.addColumn("number", "Italian  Zucchini Shrimp");

  data.addRows([
    [1, 78.8, 80.8, 41.8],
    [2, 30.9, 69.5, 32.4],
    [3, 25.4, 57, 25.7],
    [4, 11.7, 18.8, 10.5],
    [5, 11.9, 17.6, 10.4],
    [6, 8.8, 13.6, 7.7],
    [7, 7.6, 12.3, 9.6],
    [8, 12.3, 29.2, 10.6],
    [9, 16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11, 5.3, 7.9, 4.7],
    [12, 6.6, 8.4, 5.2],
    [13, 4.8, 6.3, 3.6],
    [14, 4.2, 6.2, 3.4],
  ]);

  var options = {
    chart: {
      title: "Sales Analytics",
    },
    width: 880,
    height: 260,
    axes: {
      x: {
        0: { side: "top" },
      },
    },
  };

  var chart = new google.charts.Line(document.getElementById("line_top_y"));

  chart.draw(data, google.charts.Line.convertOptions(options));
}
