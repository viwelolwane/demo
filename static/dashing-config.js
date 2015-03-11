var dashboard = new Dashboard();


/*
dashboard.addWidget('convergence_widget', 'Linegraph', {
    getData: function () {
        $.extend(this.data, {
            
        });
    }
});

dashboard.addWidget('csir_widget', 'Csirmap', {
    getData: function () {
        $.extend(this.data, {

        });
    }
});

dashboard.addWidget('convergence', 'Bar', {
    getData: function () {
        $.extend(this.data, {
            title: 'Convergence',
            value: '41',
            more_info: '',
            data: [ 
                    { x: 0, y: 40 }, 
                    { x: 1, y: 49 }, 
                    { x: 2, y: 38 }, 
                    { x: 3, y: 30 }, 
                    { x: 4, y: 32 }
                ]
            });
    }
});
*/

function getRandom(){
    var seriesData = [ [], [], [] ];
    var random = new Rickshaw.Fixtures.RandomData(150);

    for (var i = 0; i < 150; i++) {
        random.addData(seriesData);
        console.log(seriesData);
    }


    return seriesData;
}
/*
dashboard.addWidget('convergence_widget', 'Graph', {
    getData: function () {
        $.extend(this.data, {
            title: '',
            value: '',
            more_info: '',
            data: [ 
                    getRandom()
                ]
            });
    }
});
*/
/***
dashboard.addWidget('convergence_widget', 'Bar', {
    getData: function () {
        $.extend(this.data, {
            title: '',
            value: '',
            more_info: '',
            data: [ 
                {sensor: 'Sensor1', flow: 10},
                {sensor: 'Sensor2', flow: 20},
                {sensor: 'Sensor3', flow: 30},
                {sensor: 'Sensor4', flow: 40}
            ]
        });
    }
});
***/

dashboard.addWidget('knob_widget', 'Knob', {
    data: {
        title: '',
        more_info: '',
        value: 0
    },

    getData: function () {
        var self = this;

        $.extend(self.data, {
            value: 23,
            data: {
                angleArc: 250,
                fgColor: '#90ee90',
                angleOffset: -125,
                displayInput: true,
                displayPrevious: false,
                step: 1,
                min: 0,
                max: 10000,
                readOnly: true
            }
        });
        self.data.value = Math.floor((Math.random() * 10000) + 1);;
        //self.data.updated_at = lastUpdate();

        //home.publish('knob/render');
        //$('.dashing-knob').hide();
    }
});

/*******
dashboard.addWidget('olayers_widget', 'Olayers', {
    data: {
        title: '',
        more_info: '',
        value: 0
    },

    getData: function () {
        var self = this;

        $.extend(self.data, {
            value: 23,
            data: {
                angleArc: 250,
                fgColor: '#90ee90',
                angleOffset: -125,
                displayInput: true,
                displayPrevious: false,
                step: 1,
                min: 0,
                max: 10000,
                readOnly: true
            }
        });
        self.data.value = Math.floor((Math.random() * 10000) + 1);;
        //self.data.updated_at = lastUpdate();

        //home.publish('knob/render');
        //$('.dashing-knob').hide();
    }
});
************/