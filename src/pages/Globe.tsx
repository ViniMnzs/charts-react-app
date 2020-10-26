import React from 'react';
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4core from "@amcharts/amcharts4/core";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import '../styles/pages/Globe.css'
import Buttons from '../components/Buttons';

export default function Globe(){

//let map = am4core.create("chartdiv", am4maps.MapChart);
//map.geodata = am4geodata_worldLow;
//map.projection = new am4maps.projections.Orthographic();
//map.deltaLongitude = 40;

var chart = am4core.create("chartdiv", am4maps.MapChart);
chart.geodata = am4geodata_worldLow;
chart.projection = new am4maps.projections.Orthographic();

var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;

var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#74B266");

var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#367B25");

var label = chart.chartAndLegendContainer.createChild(am4core.Label);
label.text = "chart.deltaLongitude = 0";
label.fontSize = 18;
label.align = "center"
label.padding(5, 10, 5, 10);
label.background.fillOpacity = 0.05;
label.background.fill = am4core.color("#000");

var slider = chart.chartAndLegendContainer.createChild(am4core.Slider);
slider.start = 0.5;
slider.margin( 20, 0, 20, 0);
slider.valign = "bottom";
slider.align = "center";
slider.width = 100;
slider.events.on("rangechanged", function(ev) {
  var deltaLongitude = 360 * ev.target.start - 145;
  chart.deltaLongitude = deltaLongitude;
  label.text = "chart.deltaLongitude = " + chart.numberFormatter.format(deltaLongitude, "[green]#.|[red]#.|[#555]#");
});

var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
graticuleSeries.mapLines.template.line.stroke = am4core.color("#67b7dc");
graticuleSeries.mapLines.template.line.strokeOpacity = 0.2;
graticuleSeries.fitExtent = false;

chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#aadaff");
chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;

var lineSeries1 = chart.series.push(new am4maps.MapLineSeries());
lineSeries1.data = [{
  "multiGeoLine": [
    [
      { "latitude": -15.7801, "longitude": -47.9292 },
      { "latitude": -26.195246, "longitude": 28.034088 }
    ]
]}];
var lineSeries2 = chart.series.push(new am4maps.MapLineSeries());
lineSeries2.data = [{
  "multiGeoLine": [
    [
        { "latitude": -15.7801, "longitude": -47.9292 },
        { "latitude": 51.5072, "longitude":  -0.1275}
    ]
]}];
var lineSeries3 = chart.series.push(new am4maps.MapLineSeries());
lineSeries3.data = [{
  "multiGeoLine": [
    [
        { "latitude": -15.7801, "longitude": -47.9292 },
        { "latitude": 38.9041, "longitude": -77.0171 }
    ]
]}];
var lineSeries4 = chart.series.push(new am4maps.MapLineSeries());
lineSeries4.data = [{
  "multiGeoLine": [
    [
        { "latitude": -15.7801, "longitude": -47.9292 },
        { "latitude": 38.7071, "longitude": -9.13549 }
    ]
]}];

lineSeries1.mapLines.template.stroke = am4core.color("red");
lineSeries2.mapLines.template.stroke = am4core.color("blue");
lineSeries3.mapLines.template.stroke = am4core.color("violet");
lineSeries4.mapLines.template.stroke = am4core.color("black");

    return(
        <div id='page'>
        <Buttons/>
        <div id="chartdiv"></div>
        </div>
    );
}