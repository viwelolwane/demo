/* global $, rivets, Dashing, Dashboard */

Dashing.widgets.Knob = function(dashboard) {
    var self = this,
        widget;
    this.__init__ = Dashing.utils.widgetInit(dashboard, 'knob');
    this.row = 1;
    this.col = 1;
    this.data = {};
    this.getWidget = function () {
        return widget;
    };
    this.getData = function () {};
    this.interval = 36000000;
};

rivets.id = 0;
rivets.getId = function() {
    var o = rivets.prefix + rivets.id;
    rivets.id++;
    return o;
};

rivets.binders['dashing-knob'] = function(el, data) {
    if (!data) return;
    el.id = rivets.getId();

    container = el.parentNode;
    if (!$(container).is(':visible')) return;
    var map = new ol.Map({
        target: container,
        layers: [
              new ol.layer.Tile({
              source: new ol.source.OSM()
            })
          ],
          view: new ol.View({
            center: ol.proj.transform([28.2786, -25.7556], 'EPSG:4326', 'EPSG:3857'),
            zoom: 18
          })
        });
}




    //alert(el.parentNode);
    /*
    var jsonCircles = [
        { "x_axis": 30, "y_axis": 30, "radius": 10, "color" : "green" },
        { "x_axis": 150, "y_axis": 200, "radius": 10, "color" : "purple"},
        { "x_axis": 400, "y_axis": 500, "radius": 10, "color" : "red"}
    ];

    var sampleSVG = d3.select(el.parentNode)
        .append("svg");

    sampleSVG.append("circle").selectAll("circle")
         .data(data)
       .enter().append("svg:circle")
         .attr("stroke", "black")
         .attr("fill", function(d, i) { return 'green'; })
         .attr("cx", function(d, i) { return d.x; })
         .attr("cy", function(d, i) { return d.y; })
         .attr("r", function(d, i) { return d.r; });


    var w = 547, h = 827;      
    var colors = d3.scale.category20();

    var vis = d3.select(el.parentNode).append("svg:svg")
          .attr("width", w)
          .attr("height", h);

    var jsonCircles = [
        { x: 220, y: 440, r: 10 },
        { x: 285, y: 200, r: 10},
        { x: 400, y: 500, r: 10}
    ];

    vis.selectAll("circle")
        .data(jsonCircles)
       .enter().append("svg:circle")
         .attr("stroke", "black")
         .attr("fill", function(d, i) { return colors(i); })
         .attr("cx", function(d, i) { return d.x; })
         .attr("cy", function(d, i) { return d.y; })
         .attr("r", function(d, i) { return d.r; })
         .append("svg:title")
         .text(function(d) { return "sensor"; });

    $('circle').tipsy({ 
        gravity: 'w', 
        html: true, 
        title: function() {
          var d = this.__data__, c = colors(d.i);
          return 'Hi there! My color is <span style="color:' + c + '">' + c + '</span>'; 
        }
      });
    */