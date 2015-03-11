/* global $, Dashing, Rickshaw, rivets */

Dashing.widgets.Bar = function (dashboard) {
    var self = this,
        widget;
    self.__init__ =  Dashing.utils.widgetInit(dashboard, 'bar');
    self.row = 1;
    self.col = 2;
    self.data = {};
    self.getWidget = function () {
        return widget;
    };
    self.getData = function () {};
    self.interval = 3000;
};

rivets.id = 0;
rivets.getId = function() {
    var o = rivets.prefix + rivets.id;
    rivets.id++;
    return o;
};

rivets.binders['dashing-bar'] = function(el, data) {
    var container = el.parentNode;


    if (!$(container).is(':visible')) return;
    id = rivets.getId();

    // instantiate our graph!

    polyjs.chart({
        title: 'total Flow',
        dom: container,
        width: 500,
        height: 350,
        layer: {
            data: polyjs.data({data: data}),
            type: 'bar',
            x: 'sensor',
            y: 'flow',
            color: { const: 'green' }
        }
    });

    if (data.afterRender) data.afterRender();
    window[id] = graph;
    container.dataset.id = id;
};
