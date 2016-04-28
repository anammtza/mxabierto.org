var MXAbierto   = {
    _map        : null,

    _selected   : null,

    _members    : {
        '05'            : {
            data        : 'http://busca.datos.gob.mx/#!/instituciones/estado-de-coahuila/',
            name        : 'Coahuila de Zaragoza',
            resources   : 14,
            site        : 'http://coahuila.gob.mx',
        },
        '14'            : {
            data        : 'http://busca.datos.gob.mx/#!/instituciones/estado-de-jalisco/',
            name        : 'Jalisco',
            resources   : 154,
            site        : 'http://www.jalisco.gob.mx'
        },
        '17'            : {
            data        : 'http://busca.datos.gob.mx/#!/instituciones/estado-de-morelos/',
            name        : 'Morelos',
            resources   : 15,
            site        : 'http://morelos.gob.mx'
        },
        '30'            : {
            data        : 'http://busca.datos.gob.mx/#!/instituciones/estado-de-veracruz/',
            name        : 'Veracruz de Ignacio de la Llave',
            resources   : 58,
            site        : 'http://www.veracruz.gob.mx'
        }
    },

    init        : function () {
        MXAbierto._setMap();
    },

    _drawStates : function () {
        var that    = this,
            styles  = {
                defaultStyle    : {
                    color       : '#ffffff',
                    opacity     : 1,
                    weight      : 1,
                    fillColor   : '#308e7c',
                    fillOpacity : 1
                },
                highlightStyle  : {
                    fillColor   : '#00cc99'
                }
            };

        $.get( 'data/states_topo.json', function ( data ) {
            var states  = topojson.feature( data, data.objects.states );

            L.geoJson( states, {
                onEachFeature   : function ( feature, layer ) {
                    layer.setStyle( styles.defaultStyle );

                    ( function ( layer ) {
                        layer.on( 'mouseover', function () {
                            layer.setStyle( styles.highlightStyle );
                        });
                        layer.on( 'mouseout', function () {
                            if ( feature.properties.selected ) {
                                layer.setStyle( styles.highlightStyle );
                            } else {
                                layer.setStyle( styles.defaultStyle );
                            }
                        });
                        layer.on( 'click', function () {
                            if ( that._selected ) {
                                that._selected.feature.properties.selected  = false;
                                that._selected.layer.setStyle( styles.defaultStyle );
                            }

                            if ( that._members[ feature.properties.CVE_ENT ] ) {
                                var info    = that._members[ feature.properties.CVE_ENT ];
                                $( 'h3', '#data-container .info-container' ).html( info.name );
                                $( '#member-data', '#data-container' ).html( info.resources );
                                $( '#member-data-link', '#data-container' ).attr( 'href', info.data );
                                $( '.info-container', '#data-container' ).fadeIn();
                            } else {
                                $( '.info-container', '#data-container' ).fadeOut();
                            }

                            feature.properties.selected = true;
                            layer.setStyle( styles.highlightStyle );

                            that._selected  = {
                                feature : feature,
                                layer   : layer
                            };
                        });
                    })( layer, feature.properties );
                }
            }).addTo( that._map );
        });
    },

    _setMap     : function () {
        this._drawStates();

        this._map   = L.map( 'map', {
            dragging        : false,
            scrollWheelZoom : false
        }).setView( [ 24.127, -102 ], 5 );
        L.tileLayer( 'http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
            attribution     : 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
            minZoom         : 5,
            maxZoom         : 5
        }).addTo( this._map );
    }
};

$( document ).ready( MXAbierto.init );