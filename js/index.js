var mpgTab = new bootstrap.Tab(document.querySelector("#mpg"));
var mpgTab2 = new bootstrap.Tab(document.querySelector("#mpg2"));
var mpgTab3 = new bootstrap.Tab(document.querySelector("#mpg3"));

var colorOne = "#3ddbd9";

function renderMpgChart(data, max, min) {
  d3.select("svg").remove();
  console.log(max, min);

  var tooltip = d3.select("#chart-mpg1").append("div").attr("class", "tooltip");
  mpg1tooltipmouseover = function (event, d) {
    tooltip.style("opacity", 0.4);
  };
  mpg1tooltipmousemove = function (event, d) {
    tooltip
      .html(`${d.Make}, ${d.Fuel}, ${d.EngineCylinders}`)
      .style("left", event.pageX + 5 + "px")
      .style("top", event.pageY - 30 + "px");
  };

  mpg1annotations = d3.annotation().annotations([
    {
      note: {
        label: "Cylinders > 7 have city MPG less than 20",
      },
      x: 50,
      y: 250,
      dy: -70,
      dx: 40,
    },
  ]);

  size = 500;
  (margin = { top: 50, right: 50, bottom: 50, left: 50 }),
    (width = size - margin.left - margin.right),
    (height = size - margin.top - margin.bottom);

  svg = d3
    .select("#chart-mpg1")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  var x = d3.scaleLog([10, 150], [0, size - margin.left * 2]).base(10);
  var y = d3.scaleLog([10, 150], [size - margin.left * 2, 0]).base(10);
  var xAxis = d3
    .axisBottom(x)
    .tickValues([10, 20, 50, 100])
    .tickFormat(d3.format("~s"));

  var yAxis = d3
    .axisLeft(y)
    .tickValues([10, 20, 50, 100])
    .tickFormat(d3.format("~s"));

  svg
    .append("g")
    .selectAll("circle")
    .data(
      data.filter((d) => +max >= +d.EngineCylinders && +d.EngineCylinders > min)
    )
    .join("circle")
    .attr("cx", function (d) {
      return x(d.AverageCityMPG);
    })
    .attr("cy", function (d) {
      return y(d.AverageHighwayMPG);
    })
    .attr("r", function (d) {
      return 2 + +d.EngineCylinders;
    })
    .style("fill", function name(d) {
      return colorOne;
    })
    .style("stroke", (d) => "red")
    .on("mouseover", mpg1tooltipmouseover)
    .on("mousemove", mpg1tooltipmousemove);
  // .on("mouseleave", mpg1tooltipmouseleave);

  svg.append("g").call(mpg1annotations);

  svg
    .append("line")
    .style("stroke", "lightgreen")
    .style("stroke-width", 2)
    .attr("x1", 0)
    .attr("y1", size - margin.left * 2)
    .attr("x2", size - margin.left * 3)
    .attr("y2", margin.left);

  d3.select("svg")
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .call(yAxis);

  d3.select("svg")
    .append("g")
    .attr("transform", `translate(${margin.left}, ${size - margin.top})`)
    .call(xAxis);
}

function renderMpgChart2(data, max, min) {
  d3.select("svg").remove();
  console.log(max, min);
  var tooltip = d3.select("#chart-mpg2").append("div").attr("class", "tooltip");
  mpg1tooltipmouseover = function (event, d) {
    tooltip.style("opacity", 0.4);
  };
  mpg1tooltipmousemove = function (event, d) {
    tooltip
      .html(`${d.Make}, ${d.Fuel}, ${d.EngineCylinders}`)

      .style("left", event.pageX + 10 + "px")
      .style("top", event.pageY - 50 + "px");
  };
  mpg1tooltipmouseleave = function (event, d) {
    tooltip.transition().duration(500);
    tooltip.style("opacity", 0);
  };

  mpg1annotations = d3.annotation().annotations([
    {
      note: {
        label: "8 > Cylinders > 3 have city MPG between 10 and 45.",
      },
      x: 170,
      y: 170,
      dy: -70,
      dx: 40,
    },
  ]);

  size = 500;
  (margin = { top: 50, right: 50, bottom: 50, left: 50 }),
    (width = size - margin.left - margin.right),
    (height = size - margin.top - margin.bottom);

  svg1 = d3
    .select("#chart-mpg2")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  var x = d3.scaleLog([10, 150], [0, size - margin.left * 2]).base(10);
  var y = d3.scaleLog([10, 150], [size - margin.left * 2, 0]).base(10);
  var xAxis = d3
    .axisBottom(x)
    .tickValues([10, 20, 50, 100])
    .tickFormat(d3.format("~s"));

  var yAxis = d3
    .axisLeft(y)
    .tickValues([10, 20, 50, 100])
    .tickFormat(d3.format("~s"));

  svg1
    .append("g")
    .selectAll("circle")
    .data(
      data.filter((d) => +max >= +d.EngineCylinders && +d.EngineCylinders > min)
    )
    .join("circle")
    .attr("cx", function (d) {
      return x(d.AverageCityMPG);
    })
    .attr("cy", function (d) {
      return y(d.AverageHighwayMPG);
    })
    .attr("r", function (d) {
      return 2 + +d.EngineCylinders;
    })
    .style("fill", function name(d) {
      return colorOne;
    })
    .style("stroke", (d) => "red")
    .on("mouseover", mpg1tooltipmouseover)
    .on("mousemove", mpg1tooltipmousemove);
  // .on("mouseleave", mpg1tooltipmouseleave);
  svg1.append("g").call(mpg1annotations);

  svg1
    .append("line")
    .style("stroke", "lightgreen")
    .style("stroke-width", 2)
    .attr("x1", 0)
    .attr("y1", size - margin.left * 2)
    .attr("x2", size - margin.left * 3)
    .attr("y2", margin.left);

  console.log("yAxis", yAxis);
  d3.select("svg")
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .call(yAxis);

  d3.select("svg")
    .append("g")
    .attr("transform", `translate(${margin.left}, ${size - margin.top})`)
    .call(xAxis);
}

function renderMpgChart3(data, max, min) {
  console.log(max, min);
  d3.select("svg").remove();
  mpg1tooltip = d3.select("#chart-mpg3").append("div").attr("class", "tooltip");
  mpg1tooltipmouseover = function (event, d) {
    mpg1tooltip.style("opacity", 0.4);
  };
  mpg1tooltipmousemove = function (event, d) {
    mpg1tooltip
      .html(`${d.Make}, ${d.Fuel}, ${d.EngineCylinders}`)
      .style("left", event.pageX + 10 + "px")
      .style("top", event.pageY - 50 + "px");
  };


  cylinderSelect = document.getElementById("cylinderSelect").value;
  console.log("CylinderSelectCylinderSelect", cylinderSelect);
  var numberCylindersLessThan = 4;

  if (cylinderSelect == "four") {
    numberCylindersLessThan = 4;
  } else if (cylinderSelect == "seven") {
    numberCylindersLessThan = 7;
  } else if (cylinderSelect == "nine") {
    numberCylindersLessThan = 9;
  } else if (cylinderSelect == "thirteen") {
    numberCylindersLessThan = 13;
  }
  console.log("CylinderSelectCylinderSelect", numberCylindersLessThan);

  mpg1annotations = d3.annotation().annotations([
    {
      note: {
        label: "3 > Cylinders have city MPG greater than 25",
      },
      x: 200,
      y: 150,
      dy: -70,
      dx: 40,
    },
  ]);

  size = 500;

  (margin = { top: 50, right: 50, bottom: 50, left: 50 }),
    (width = size - margin.left - margin.right),
    (height = size - margin.top - margin.bottom);

  var svg = d3
    .select("#chart-mpg3")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  var x = d3.scaleLog([10, 150], [0, size - margin.left * 2]).base(10);
  var y = d3.scaleLog([10, 150], [size - margin.left * 2, 0]).base(10);
  var xAxis = d3
    .axisBottom(x)
    .tickValues([10, 20, 50, 100])
    .tickFormat(d3.format("~s"));

  var yAxis = d3
    .axisLeft(y)
    .tickValues([10, 20, 50, 100])
    .tickFormat(d3.format("~s"));

  svg
    .append("g")
    .selectAll("circle")
    .data(data.filter((d) => numberCylindersLessThan > +d.EngineCylinders))
    .join("circle")
    .attr("cx", function (d) {
      return x(d.AverageCityMPG);
    })
    .attr("cy", function (d) {
      return y(d.AverageHighwayMPG);
    })
    .attr("r", function (d) {
      return 2 + +d.EngineCylinders;
    })
    .style("fill", function name(d) {
      return colorOne;
    })
    .style("stroke", (d) => "red")
    .on("mouseover", mpg1tooltipmouseover)
    .on("mousemove", mpg1tooltipmousemove);
  svg.append("g").call(mpg1annotations);

  svg
    .append("line")
    .style("stroke", "lightgreen")
    .style("stroke-width", 2)
    .attr("x1", 0)
    .attr("y1", size - margin.left * 2)
    .attr("x2", size - margin.left * 3)
    .attr("y2", margin.left);

  d3.select("svg")
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .call(yAxis);

  d3.select("svg")
    .append("g")
    .attr("transform", `translate(${margin.left}, ${size - margin.top})`)
    .call(xAxis);
}

d3.csv("./data/cars2017.csv").then(function (data) {
  var max = 20;
  var min = 0;
  renderMpgChart(data, max, (min = 7));

  var tabElms = document.querySelectorAll('a[data-bs-toggle="list"]');
  console.log("tabElms", tabElms);
  tabElms.forEach(function (tabElm) {
    tabElm.addEventListener("shown.bs.tab", function (event) {
      switch (event.target.getAttribute("id")) {
        case "mpg":
          renderMpgChart(data, (max = 20), (min = 7));
          break;
        case "mpg2":
          renderMpgChart2(data, (max = 7), (min = 3));
          break;
        case "mpg3":
          renderMpgChart3(data, (max = 3), (min = -1));
          break;
        default:
          break;
      }
    });
  });

  document
    .getElementById("cylinderSelect")
    .addEventListener("change", function () {
      console.log("changed");
      renderMpgChart3(data, max, min);
    });
});
