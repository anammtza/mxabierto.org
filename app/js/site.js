var MXAbierto   = {
    _icons      : {},

    _map        : null,

    _selected   : null,

    _members    : [
        {
            coords      : [ 25.421876, -101.001023 ],
            data        : 'http://busca.datos.gob.mx/#!/instituciones/estado-de-coahuila/',
            icon        : 'state',
            most        : 'http://busca.datos.gob.mx/#!/conjuntos/sistema-estatal-de-investigadores-del-estado-de-morelos/',
            name        : 'Coahuila de Zaragoza',
            resource    : 'Sistema Estatal de Investigadores del Estado de Morelos',
            resources   : 14,
            site        : 'http://coahuila.gob.mx',
        },
        {
            coords      : [ 20.670465, -103.383661 ],
            data        : 'http://busca.datos.gob.mx/#!/instituciones/estado-de-jalisco/',
            icon        : 'state',
            most        : 'http://busca.datos.gob.mx/#!/conjuntos/curvas-de-nivel-maestra/',
            name        : 'Jalisco',
            resource    : 'Curvas de nivel maestra en formato KML',
            resources   : 154,
            site        : 'http://www.jalisco.gob.mx'
        },
        {
            coords      : [ 18.921598, -99.234934 ],
            data        : 'http://busca.datos.gob.mx/#!/instituciones/estado-de-morelos/',
            icon        : 'state',
            most        : 'http://busca.datos.gob.mx/#!/conjuntos/nomina-de-programas-del-poder-ejecutivo',
            name        : 'Morelos',
            resource    : 'Nómina de Burócratas y Programas del Poder Ejecutivo',
            resources   : 15,
            site        : 'http://morelos.gob.mx'
        },
        {
            coords      : [ 18.940608, -96.513252 ],
            data        : 'http://busca.datos.gob.mx/#!/instituciones/estado-de-veracruz/',
            icon        : 'state',
            most        : 'http://busca.datos.gob.mx/#!/conjuntos/infracciones-de-transito-en-el-estado-de-veracruz-2015/',
            name        : 'Veracruz de Ignacio de la Llave',
            resource    : 'Sanciones impuestas por violaciones a la Ley y/o Reglamento de Transito y Seguidad Vial del Estado.',
            resources   : 58,
            site        : 'http://www.veracruz.gob.mx'
        },
        {
            coords      : [ 25.665034, -100.401787 ],
            data        : 'http://busca.datos.gob.mx/#!/instituciones/ayuntamiento-de-san-pedro-garza-garcia/',
            icon        : 'mun',
            most        : 'http://busca.datos.gob.mx/#!/conjuntos/indicadores-municipales-de-san-pedro-garza-garcia/',
            name        : 'San Pedro Garza García, Nuevo León',
            resource    : 'Accidentes de Transito (Seguridad Municipal)',
            resources   : 14,
            site        : 'http://www.sanpedro.gob.mx'
        },
        {
            coords      : [ 31.69, -106.43 ],
            data        : 'http://busca.datos.gob.mx/#!/instituciones/ayuntamiento-de-ciudad-juarez/',
            icon        : 'mun',
            most        : 'http://busca.datos.gob.mx/#!/conjuntos/atlas-de-riesgos/',
            name        : 'Juárez, Chihuahua',
            resource    : 'Tabla de información sobre mapas que integran el atlas de riesgo de Juárez/Chihuahua> del año 2015',
            resources   : 7,
            site        : 'http://www.juarez.gob.mx'
        },
        {
            coords      : [ 17.98, -94.54 ],
            data        : 'http://busca.datos.gob.mx/#!/instituciones/ayuntamiento-de-minatitlan/',
            icon        : 'mun',
            most        : 'http://busca.datos.gob.mx/#!/conjuntos/tipos-de-usos/',
            name        : 'Minatitlán, Veracruz de Ignacio de la Llave',
            resource    : 'Catalogo de Tipos de Usos de los Pmunios',
            resources   : 16,
            site        : 'http://minatitlan.gob.mx'
        },
        {
            coords      : [ 19.53, -96.92 ],
            data        : 'http://busca.datos.gob.mx/#!/instituciones/ayuntamiento-de-xalapa/',
            icon        : 'mun',
            most        : 'http://busca.datos.gob.mx/#!/conjuntos/unidades-medicas-y-servicios-de-salud-en-xalapa/',
            name        : 'Xalapa, Veracruz de Ignacio de la Llave',
            resource    : 'Ubicación de centros médicos en Xalapa',
            resources   : 76,
            site        : 'http://xalapa.gob.mx'
        },
        {
            coords      : [ 19.19, -93.135 ],
            data        : 'http://busca.datos.gob.mx/#!/instituciones/ayuntamiento-de-veracruz/',
            icon        : 'mun',
            most        : 'http://busca.datos.gob.mx/#!/conjuntos/propiedad-social-parcelas-y-tierras-de-uso-comun-componente-espacial/',
            name        : 'Veracruz, Veracruz de Ignacio de la Llave',
            resource    : 'Tabla de datos de identificación de propiedad social, parcelas y tierras de uso común de del año <2015>',
            resources   : 14,
            site        : 'http://www.veracruzmunicipio.gob.mx'
        },
        {
            coords      : [ 25.540427, -103.458617 ],
            data        : 'http://busca.datos.gob.mx/#!/instituciones/ayuntamiento-de-torreon/',
            icon        : 'mun',
            most        : 'http://busca.datos.gob.mx/#!/conjuntos/accidentes-viales-por-ebriedad/',
            name        : 'Torreón, Coahuila de Zaragoza',
            resource    : 'Horas de Accidentes Viales por Estado de Ebriedad',
            resources   : 11,
            site        : 'http://www.torreon.gob.mx'
        },
        {
            coords      : [ 19.006988, -98.183022 ],
            data        : 'http://busca.datos.gob.mx/#!/instituciones/ayuntamiento-de-puebla/',
            icon        : 'mun',
            most        : 'http://busca.datos.gob.mx/#!/conjuntos/directorio-de-las-mesas-directivas-de-vecinos-en-barrios-colonias-fraccionamientos-y-unidades-h/',
            name        : 'Puebla, Puebla',
            resource    : 'Directorio de las Mesas Directivas de Vecinos en Barrios, Colonias, Fraccionamientos y Unidades Habitacionales',
            resources   : 83,
            site        : 'http://www.pueblacapital.gob.mx'
        },
        {
            coords      : [ 26.092619, -98.278283 ],
            data        : 'http://busca.datos.gob.mx/#!/instituciones/ayuntamiento-de-reynosa/',
            icon        : 'mun',
            most        : 'http://busca.datos.gob.mx/#!/conjuntos/construcciones-componente-espacial',
            name        : 'Reynosa, Tamaulipas',
            resource    : 'Tabla de datos de la construcción de predios urbanos de Reynosa del año 2014',
            resources   : 3,
            site        : 'http://www.reynosa.gob.mx'
        },
        {
            coords      : [ 28.651610, -106.122501 ],
            data        : 'http://busca.datos.gob.mx/#!/instituciones/ase-chihuahua/',
            icon        : 'auto',
            most        : 'http://busca.datos.gob.mx/#!/conjuntos/calificaciones-de-las-entidades-del-sistema-del-indice-de-rendicion-de-cuentas/',
            name        : 'Auditoría Superior del Estado de Chihuahua',
            resource    : 'Calificaciones-IRC',
            resources   : 7,
            site        : 'http://chihuahua.gob.mx'
        }
    ],

    init        : function () {
        MXAbierto._setMap();
    },

    _addMarkers : function () {
        var that    = this;

        for ( var i = 0; i < this._members.length; i++ ) {
            this._members[i].marker     = L.marker([ this._members[i].coords[0], this._members[i].coords[1] ], {
                icon    : this._icons[ this._members[i].icon ]
            }).addTo( this._map );

            this._members[i].marker.on( 'click', function ( e ) {
                for ( var j = 0; j < that._members.length; j++ ) {
                    if ( that._members[j].marker._leaflet_id == e.target._leaflet_id ) {
                        var info    = that._members[j];
                        $( 'h3', '#data-container .info-container' ).html( info.name );
                        $( '#member-data', '#data-container' ).html( info.resources );
                        $( '#member-resource a', '#data-container' ).html( info.resource ).attr( 'href', info.most );
                        $( '#member-data-link', '#data-container' ).attr( 'href', info.data );
                        $( '.info-container', '#data-container' ).fadeIn();
                    }
                }
            });
        }
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
                            layer.setStyle( styles.defaultStyle );
                        });
                    })( layer, feature.properties );
                }
            }).addTo( that._map );
        });
    },

    _setIcons   : function () {
        this._icons.state   = L.icon({
            iconUrl     : '../img/marker-state.png',
            shadowUrl   : '../img/marker-shadow.png',
            iconSize    : [ 25, 41 ],
            iconAnchor  : [ 12, 41 ],
            popupAnchor : [ 1, -34 ],
            shadowSize  : [ 41, 41 ]
        });

        this._icons.mun     = L.icon({
            iconUrl     : '../img/marker-municipality.png',
            shadowUrl   : '../img/marker-shadow.png',
            iconSize    : [ 25, 41 ],
            iconAnchor  : [ 12, 41 ],
            popupAnchor : [ 1, -34 ],
            shadowSize  : [ 41, 41 ]
        });

        this._icons.auto    = L.icon({
            iconUrl     : '../img/marker-auto.png',
            shadowUrl   : '../img/marker-shadow.png',
            iconSize    : [ 25, 41 ],
            iconAnchor  : [ 12, 41 ],
            popupAnchor : [ 1, -34 ],
            shadowSize  : [ 41, 41 ]
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

        this._setIcons();
        this._addMarkers();
    }
};

$( document ).ready( MXAbierto.init );