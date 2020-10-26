import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_frozen from "@amcharts/amcharts4/themes/frozen";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Buttons from '../components/Buttons';
import '../styles/pages/GraphFor.css'

export default function GraphThree(){

  
    am4core.useTheme(am4themes_frozen);
    am4core.useTheme(am4themes_animated);
    
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chart.data = [
      {
        month: "Jan",
        value: 4200,
      },
      {
        month: "Fev",
        value: 10600,
      },
      {
        month: "Mar",
        value: 6300,
      },
      {
        month: "Abr",
        value: 9950,
      },
      {
        month: "Mai",
        value: 4500,
      },
      {
        month: "Jun",
        value: 12500,
      },
      {
        month: "Jul",
        value: 9950,
      },
      {
        month: "Ago",
        value: 6200,
      },
      {
        month: "Set",
        value: 9750,
      },
      {
        month: "Out",
        value: 11500,
      },
      {
        month: "Nov",
        value: 5900,
      },
      {
        month: "Dez",
        value: 9500,
      },
    ];
    
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.minGridDistance = 0;
    categoryAxis.fontSize = 11;
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 12500;
    valueAxis.strictMinMax = false;
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
    series.dataFields.categoryX = "month";
    series.dataFields.valueY = "value";
    series.columns.template.tooltipText = "{valueY.value}";
    series.columns.template.tooltipY = 0;
    series.columns.template.strokeOpacity = 0;

  return(
    <>
    <Buttons/>
    <div id='title'>Faturamento (Mil)</div>
    <div id="chartdiv"></div>
    </>
  )
}
