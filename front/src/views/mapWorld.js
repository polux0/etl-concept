import React, { Component } from "react";
import Highcharts from "highcharts/";
import MapChart from "../components/Map.js";
//import mapData from "../components/mapData.js"; //map of norway for details
import mapDataWorld from "../components/mapDataWorld.js"; 


require("highcharts/modules/map")(Highcharts);
// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['fo', 0],
    ['us', 1],
    ['jp', 2],
    ['in', 3],
    ['fr', 4],
    ['cn', 5],
    ['sw', 6],
    ['sh', 7],
    ['ec', 8],
    ['au', 9],
    ['ph', 10],
    ['es', 11],
    ['bu', 12],
    ['mv', 13],
    ['sp', 14],
    ['gb', 15],
    ['gr', 16],
    ['dk', 17],
    ['gl', 18],
    ['pr', 19],
    ['um', 20],
    ['vi', 21],
    ['ca', 22],
    ['cv', 23],
    ['dm', 24],
    ['sc', 25],
    ['jm', 26],
    ['om', 27],
    ['vc', 28],
    ['sb', 29],
    ['lc', 30],
    ['no', 31],
    ['kn', 32],
    ['bh', 33],
    ['id', 34],
    ['mu', 35],
    ['se', 36],
    ['ru', 37],
    ['tt', 38],
    ['br', 39],
    ['bs', 40],
    ['pw', 41],
    ['cl', 42],
    ['gd', 43],
    ['ee', 44],
    ['ag', 45],
    ['tw', 46],
    ['fj', 47],
    ['bb', 48],
    ['it', 49],
    ['mt', 50],
    ['pg', 51],
    ['vu', 52],
    ['sg', 53],
    ['cy', 54],
    ['km', 55],
    ['va', 56],
    ['sm', 57],
    ['az', 58],
    ['am', 59],
    ['sd', 60],
    ['ly', 61],
    ['tj', 62],
    ['mx', 63],
    ['gt', 64],
    ['ls', 65],
    ['np', 66],
    ['uz', 67],
    ['bd', 68],
    ['mn', 69],
    ['pt', 70],
    ['ma', 71],
    ['tz', 72],
    ['ar', 73],
    ['sa', 74],
    ['nl', 75],
    ['ye', 76],
    ['ae', 77],
    ['ke', 78],
    ['tr', 79],
    ['fi', 80],
    ['my', 81],
    ['pa', 82],
    ['ir', 83],
    ['ht', 84],
    ['do', 85],
    ['hr', 86],
    ['th', 87],
    ['cd', 88],
    ['kw', 89],
    ['de', 90],
    ['be', 91],
    ['ie', 92],
    ['mm', 93],
    ['gq', 94],
    ['ug', 95],
    ['kz', 96],
    ['er', 97],
    ['tn', 98],
    ['tl', 99],
    ['mr', 100],
    ['dz', 101],
    ['pe', 102],
    ['ao', 103],
    ['mz', 104],
    ['cr', 105],
    ['sv', 106],
    ['kh', 107],
    ['bz', 108],
    ['kp', 109],
    ['kr', 110],
    ['ve', 111],
    ['gy', 112],
    ['hn', 113],
    ['ga', 114],
    ['il', 115],
    ['ni', 116],
    ['mw', 117],
    ['tm', 118],
    ['zm', 119],
    ['nc', 120],
    ['za', 121],
    ['lt', 122],
    ['et', 123],
    ['gh', 124],
    ['si', 125],
    ['ba', 126],
    ['jo', 127],
    ['sy', 128],
    ['mc', 129],
    ['al', 130],
    ['uy', 131],
    ['cnm', 132],
    ['rw', 133],
    ['sx', 134],
    ['bo', 135],
    ['cm', 136],
    ['cg', 137],
    ['eh', 138],
    ['me', 139],
    ['rs', 140],
    ['bj', 141],
    ['tg', 142],
    ['af', 143],
    ['ua', 144],
    ['sk', 145],
    ['jk', 146],
    ['pk', 147],
    ['bg', 148],
    ['ro', 149],
    ['qa', 150],
    ['li', 151],
    ['at', 152],
    ['sz', 153],
    ['hu', 154],
    ['ne', 155],
    ['lu', 156],
    ['ad', 157],
    ['ci', 158],
    ['lr', 159],
    ['sl', 160],
    ['bn', 161],
    ['iq', 162],
    ['ge', 163],
    ['gm', 164],
    ['ch', 165],
    ['td', 166],
    ['ng', 167],
    ['kv', 168],
    ['lb', 169],
    ['dj', 170],
    ['bi', 171],
    ['sr', 172],
    ['gw', 173],
    ['sn', 174],
    ['gn', 175],
    ['zw', 176],
    ['pl', 177],
    ['mk', 178],
    ['py', 179],
    ['by', 180],
    ['lv', 181],
    ['bf', 182],
    ['ss', 183],
    ['na', 184],
    ['la', 185],
    ['co', 186],
    ['ml', 187],
    ['md', 188],
    ['cz', 189],
    ['cf', 190],
    ['bt', 191],
    ['kg', 192],
    ['nz', 193],
    ['cu', 194],
    ['vn', 195],
    ['mg', 196],
    ['eg', 197],
    ['so', 198],
    ['is', 199],
    ['lk', 200],
    ['bw', 201]
];


const mapOptions = {
  chart: {
    map: 'custom/world-eckert3' //smt from package http://jsfiddle.net/gh/get/library/pure/highslide-software/highcharts.com/tree/master/samples/mapdata/custom/world-eckert3
  },
  title: {
    text: "Highmaps basic demo" //title
  },
  subtitle: {
    text: 'Source map: <a href="http://code.highcharts.com/mapdata/custom/world-eckert3.js">World, Eckert III projection, medium resolution</a>' //subtitle
  },
  mapNavigation: {
    enabled: true,  //probably zooming option
    buttonOptions: {  
        verticalAlign: 'bottom' //position of zooming button
    }
  },
  // tooltip: {
  //   pointFormatter: function() {
  //     return this.properties["woe-label"].split(",")[0];
  //   }  //error problem
  // },
  colorAxis: {
    min: 0,
    stops: [[0, "#ADFF2F"], [0.33, "#B22222"], [0.67, "#4444FF"], [1, "#FFFF00"]] 
    //colors of the map, unlimited number of points, it goes from 0 to 1
  },
  series: [
    {
      mapData: mapDataWorld, //map coordinates
      dataLabels: {
        enabled: false, // true for names of countries
        format: '{point.name}' //formating 
      },
      name: "World",
      data: data  //data for mapping countries from map coordinates
    }
  ]
};



class WorldMap extends Component {

  render() {
    return(
    <div>

      <MapChart options={mapOptions} highcharts={Highcharts} />
    
    </div>
    )
  }
}
export default WorldMap;