/* global $, rivets, Dashing, Dashboard */

Dashing.widgets.Olayers = function(dashboard) {
    var self = this,
        widget;
    this.__init__ = Dashing.utils.widgetInit(dashboard, 'olayers');
    this.row = 1;
    this.col = 1;
    this.data = {};
    this.getWidget = function () {
        return widget;
    };
    this.getData = function () {};
    this.interval = 1000000000;
};

rivets.id = 0;
rivets.getId = function() {
    var o = rivets.prefix + rivets.id;
    rivets.id++;
    return o;
};

rivets.binders['dashing-olayers'] = function(el, data) {
    var container = el.parentNode;

      var data1 = polyjs.data({data1:{
        cat: ['a', 'a', 'a', 'a', 'a', 'a', 'b', 'b', 'b', 'b', 'b', 'b'],
        val: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12.12413252523523]
      }});

      var spec = {
        data: data1,
        value: 'sum(val)',
        filter: {cat: {in: ['b']}},
        dom: container
      };

      c = polyjs.numeral(spec, (function(err, graph){ console.error(err); console.log(graph); }));

    /*
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
    */
};