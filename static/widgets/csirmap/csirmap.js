/* global $, rivets, Dashing, Dashboard */

Dashing.widgets.Csirmap = function (dashboard) {
    var self = this,
        widget;
    this.__init__ = Dashing.utils.widgetInit(dashboard, 'csirmap');
    this.row = 1;
    this.col = 1;
    this.color = '#96bf48';
    this.data = {};
    this.getWidget = function () {
        return widget;
    };
    this.getData = function () {};
    this.interval = 1000;
};

/*
 x 200 320 320
 y 400 225 623
*/


rivets.id = 0;
rivets.getId = function() {
    var o = rivets.prefix + rivets.id;
    rivets.id++;
    return o;
};

rivets.binders['dashing-csirmap'] = function(el, data) {
    alert('called');
    if (!data) return;
    el.id = rivets.getId();

    alert(el.id);
    
    var sampleSVG = d3.select(el.parentNode)
        .append("svg");

    sampleSVG.append("circle")        // attach a circle
    .attr("cx", 200)           // position the x-center
    .attr("cy", 400)           // position the y-center
    .attr("r", 100);
    $('.dashing-csirmap').csirmap();
};