import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_frozen from "@amcharts/amcharts4/themes/frozen";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import '../styles/pages/GraphFor.css';
import Buttons from '../components/Buttons';


export default function GraphFor(){

  
  am4core.useTheme(am4themes_frozen);
  am4core.useTheme(am4themes_animated);
  
  let chart = am4core.create("chartdiv", am4charts.XYChart);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
  
  chart.data = [
    {
      tribute: "II",
      number: 2000,
    },
    {
      tribute: "IPI",
      number: 2000
    },
    {
      tribute: "PIS",
      number: 2250
    },
    {
      tribute: "COFINS",
      number: 2800
    },
    {
      tribute: "ICMS",
      number: 2900
    },
  ];
  
  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.dataFields.category = "tribute";
  categoryAxis.renderer.minGridDistance = 0;
  categoryAxis.fontSize = 11;
  
  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 400;
  valueAxis.max = 3500;
  valueAxis.strictMinMax = true;
  valueAxis.renderer.minGridDistance = 30;
  let axisBreak = valueAxis.axisBreaks.create();
  
  let d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
  axisBreak.breakSize = 0.05 * (1 - d) / d; // 0.05 means that the break will take 5% of the total value axis height
  
  let hoverState = axisBreak.states.create("hover");
  hoverState.properties.breakSize = 0;
  hoverState.properties.opacity = 0.1;
  hoverState.transitionDuration = 1500;
  
  axisBreak.defaultState.transitionDuration = 1000;
  
  let series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.categoryX = "tribute";
  series.dataFields.valueY = "number";
  series.columns.template.tooltipText = "{valueY.value}";
  series.columns.template.tooltipY = 0;
  series.columns.template.strokeOpacity = 0;
  
  // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
  //series.columns.template.adapter.add("fill", function(fill, target) {
  //  return chart.colors.getIndex(target.dataItem.index);
  //});

  return(
    <>
    <Buttons/>
    <div id='title'>Impostos de Nacionalização (Mil)</div>
    <div id="chartdiv"></div>
    </>
  )
}
