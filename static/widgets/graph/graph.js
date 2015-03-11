/* global $, Dashing, Rickshaw, rivets */

Dashing.widgets.Graph = function (dashboard) {
    var self = this,
        widget;
    self.__init__ =  Dashing.utils.widgetInit(dashboard, 'graph');
    self.row = 1;
    self.col = 2;
    self.data = {};
    self.getWidget = function () {
        return widget;
    };
    self.getData = function () {};
    self.interval = 360000000;
};

rivets.id = 0;
rivets.getId = function() {
    var o = rivets.prefix + rivets.id;
    rivets.id++;
    return o;
};

rivets.binders['dashing-graph'] = function(el, data) {
    var container = el.parentNode, id, graph, xAxis, yAxis, alerts;
    if (!data) return;
    if (!$(container).is(':visible')) return;
    if (data.beforeRender) data.beforeRender();
    if (/rickshaw_graph/.test(container.className)) {
        graph = window[container.dataset.id];
        graph.series[0].data = data;
        graph.update();
        return;
    }
    id = rivets.getId();
    /*
    graph = new Rickshaw.Graph({
        element: container, 
        width: container.width, 
        height: container.height, 
        series: [{
            color: '#ccc',
            data: data
        }]
    });
    */

    var seriesData = [ [], [], [] ];
    var random = new Rickshaw.Fixtures.RandomData(150);

    for (var i = 0; i < 150; i++) {
        random.addData(seriesData);
    }

    var palette = new Rickshaw.Color.Palette( { scheme: 'classic9' } );

    // instantiate our graph!

    var graph = new Rickshaw.Graph( {
        element: container,
        renderer: 'area',
        stroke: true,
        preserve: true,
        series: [
            {
                color: palette.color(),
                data: seriesData[0],
                name: 'Moscow'
            }, {
                color: palette.color(),
                data: seriesData[1],
                name: 'Shanghai'
            }, {
                color: palette.color(),
                data: seriesData[2],
                name: 'Amsterdam'
            }
        ]
    } );

    graph.render();


    //graph.render();

    var ticksTreatment = 'glow';

    var xAxis = new Rickshaw.Graph.Axis.Time( {
        graph: graph,
        ticksTreatment: ticksTreatment,
        timeFixture: new Rickshaw.Fixtures.Time.Local()
    } );

    xAxis.render();
/**********************/

    setInterval( function() {
        random.removeData(seriesData);
        random.addData(seriesData);
        graph.update();

    }, 3000 );


    if (data.afterRender) data.afterRender();
    window[id] = graph;
    container.dataset.id = id;
};
