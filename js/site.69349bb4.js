var MXAbierto   = {
    _cluster    : null,

    _icons      : {},

    _map        : null,

    _selected   : null,

    _members    : [
        {
            coords      : [ 27.365227, -102.015292 ],
            data        : 'http://datos.gob.mx/busca/organization/estado-de-coahuila',
            icon        : 'state',
            most        : 'http://datos.gob.mx/busca/dataset/sistema-estatal-de-investigadores-del-estado-de-morelos',
            name        : 'Coahuila de Zaragoza',
            resource    : 'Sistema Estatal de Investigadores del Estado de Morelos',
            resources   : 14,
            site        : 'http://coahuila.gob.mx',
        },
        {
            coords      : [ 20.211931, -103.960313 ],
            data        : 'http://datos.gob.mx/busca/organization/estado-de-jalisco',
            icon        : 'state',
            most        : 'http://datos.gob.mx/busca/dataset/curvas-de-nivel-maestra',
            name        : 'Jalisco',
            resource    : 'Curvas de nivel maestra en formato KML',
            resources   : 154,
            site        : 'http://www.jalisco.gob.mx'
        },
        {
            coords      : [ 18.885672, -99.219904 ],
            data        : 'http://datos.gob.mx/busca/organization/estado-de-morelos',
            icon        : 'state',
            most        : 'http://datos.gob.mx/busca/dataset/nomina-de-programas-del-poder-ejecutivo',
            name        : 'Morelos',
            resource    : 'Nómina de Burócratas y Programas del Poder Ejecutivo',
            resources   : 27,
            site        : 'http://morelos.gob.mx'
        },
        {
            coords      : [ 30.684445, -115.323386 ],
            data        : '',
            icon        : 'state',
            most        : '',
            name        : 'Baja California',
            resource    : '',
            resources   : 0,
            site        : 'http://www.bajacalifornia.gob.mx'
        },
        {
            coords      : [ 19.589700, -99.445123 ],
            data        : 'http://datos.gob.mx/busca/organization/estado-de-mexico',
            icon        : 'state',
            most        : '',
            name        : 'Estado de México',
            resource    : '',
            resources   : 14,
            site        : 'http://www.edomex.gob.mx'
        },
        {
            coords      : [ 29.729286, -110.565640 ],
            data        : 'http://datos.gob.mx/busca/organization/estado-de-sonora',
            icon        : 'state',
            most        : 'http://datos.gob.mx/busca/dataset/licitaciones-publicas-y-simplificadas-o-invitacion-restringida-de-obra-publica',
            name        : 'Sonora',
            resource    : 'Licitaciones públicas y simplificadas o invitación restringida de obra pública.',
            resources   : 6,
            site        : 'http://www.sonora.gob.mx'
        },
        {
            coords      : [ 25.796292, -99.826943 ],
            data        : '',
            icon        : 'state',
            most        : '',
            name        : 'Nuevo León',
            resource    : '',
            resources   : 0,
            site        : 'http://www.nl.gob.mx'
        },
        {
            coords      : [ 19.128665, -103.878721 ],
            data        : '',
            icon        : 'state',
            most        : '',
            name        : 'Colima',
            resource    : '',
            resources   : 0,
            site        : 'http://colima.gob.mx'
        },
        {
            coords      : [ 18.628424, -96.213227 ],
            data        : 'http://datos.gob.mx/busca/organization/estado-de-veracruz',
            icon        : 'state',
            most        : 'http://datos.gob.mx/busca/dataset/infracciones-de-transito-en-el-estado-de-veracruz-2015',
            name        : 'Veracruz de Ignacio de la Llave',
            resource    : 'Sanciones impuestas por violaciones a la Ley y/o Reglamento de Transito y Seguidad Vial del Estado.',
            resources   : 58,
            site        : 'http://www.veracruz.gob.mx'
        },
        {
            coords      : [ 25.671171, -100.394986 ],
            data        : 'http://datos.gob.mx/busca/organization/ayuntamiento-de-san-pedro-garza-garcia',
            icon        : 'mun',
            most        : 'http://datos.gob.mx/busca/dataset/indicadores-municipales-de-san-pedro-garza-garcia',
            name        : 'San Pedro Garza García, Nuevo León',
            resource    : 'Accidentes de Transito (Seguridad Municipal)',
            resources   : 24,
            site        : 'http://www.sanpedro.gob.mx'
        },
        {
            coords      : [ 31.690196, -106.428175 ],
            data        : 'http://datos.gob.mx/busca/organization/ayuntamiento-de-ciudad-juarez',
            icon        : 'mun',
            most        : 'http://datos.gob.mx/busca/dataset/atlas-de-riesgos',
            name        : 'Juárez, Chihuahua',
            resource    : 'Tabla de información sobre mapas que integran el atlas de riesgo de Juárez/Chihuahua> del año 2015',
            resources   : 7,
            site        : 'http://www.juarez.gob.mx'
        },
        {
            coords      : [ 17.985373, -94.544641 ],
            data        : 'http://datos.gob.mx/busca/organization/ayuntamiento-de-minatitlan',
            icon        : 'mun',
            most        : 'http://datos.gob.mx/busca/dataset/tipos-de-usos',
            name        : 'Minatitlán, Veracruz de Ignacio de la Llave',
            resource    : 'Catalogo de Tipos de Usos de los Pmunios',
            resources   : 16,
            site        : 'http://minatitlan.gob.mx'
        },
        {
            coords      : [ 19.519144, -96.913713 ],
            data        : 'http://datos.gob.mx/busca/organization/ayuntamiento-de-xalapa',
            icon        : 'mun',
            most        : 'http://datos.gob.mx/busca/dataset/unidades-medicas-y-servicios-de-salud-en-xalapa',
            name        : 'Xalapa, Veracruz de Ignacio de la Llave',
            resource    : 'Ubicación de centros médicos en Xalapa',
            resources   : 76,
            site        : 'http://xalapa.gob.mx'
        },
        {
            coords      : [ 19.200553, -96.138134 ],
            data        : 'http://datos.gob.mx/busca/organization/ayuntamiento-de-veracruz',
            icon        : 'mun',
            most        : 'http://datos.gob.mx/busca/dataset/propiedad-social-parcelas-y-tierras-de-uso-comun-componente-espacial',
            name        : 'Veracruz, Veracruz de Ignacio de la Llave',
            resource    : 'Tabla de datos de identificación de propiedad social, parcelas y tierras de uso común de del año <2015>',
            resources   : 27,
            site        : 'http://www.veracruzmunicipio.gob.mx'
        },
        {
            coords      : [ 25.541775, -103.453186 ],
            data        : 'http://datos.gob.mx/busca/organization/ayuntamiento-de-torreon',
            icon        : 'mun',
            most        : 'http://datos.gob.mx/busca/dataset/accidentes-viales-por-ebriedad',
            name        : 'Torreón, Coahuila de Zaragoza',
            resource    : 'Horas de Accidentes Viales por Estado de Ebriedad',
            resources   : 11,
            site        : 'http://www.torreon.gob.mx'
        },
        {
            coords      : [ 19.044157, -98.197049 ],
            data        : 'http://datos.gob.mx/busca/organization/ayuntamiento-de-puebla',
            icon        : 'mun',
            most        : 'http://datos.gob.mx/busca/dataset/directorio-de-las-mesas-directivas-de-vecinos-en-barrios-colonias-fraccionamientos-y-unidades-h',
            name        : 'Puebla, Puebla',
            resource    : 'Directorio de las Mesas Directivas de Vecinos en Barrios, Colonias, Fraccionamientos y Unidades Habitacionales',
            resources   : 82,
            site        : 'http://www.pueblacapital.gob.mx'
        },
        {
            coords      : [ 25.912007, -109.173469 ],
            data        : '',
            icon        : 'mun',
            most        : '',
            name        : 'Ahome, Sinaloa',
            resource    : '',
            resources   : 0,
            site        : 'http://ahome.gob.mx'
        },
        {
            coords      : [ 32.639991, -115.474963 ],
            data        : '',
            icon        : 'mun',
            most        : '',
            name        : 'Mexicali, Baja California',
            resource    : '',
            resources   : 0,
            site        : 'http://mexicali.gob.mx'
        },
        {
            coords      : [ 23.751691, -99.150254 ],
            data        : '',
            icon        : 'mun',
            most        : '',
            name        : 'Victoria, Tamaulipas',
            resource    : '',
            resources   : 0,
            site        : 'http://www.ciudadvictoria.gob.mx'
        },
        {
            coords      : [ 20.631561, -87.171421 ],
            data        : '',
            icon        : 'mun',
            most        : '',
            name        : 'Solidaridad, Quintana Roo',
            resource    : '',
            resources   : 0,
            site        : 'http://www.municipiodesolidaridad.gob.mx'
        },
        {
            coords      : [ 26.049975, -98.294103 ],
            data        : 'http://datos.gob.mx/busca/organization/ayuntamiento-de-reynosa',
            icon        : 'mun',
            most        : 'http://datos.gob.mx/busca/dataset/inventario-institucional-de-datos-de-ayuntamiento-de-reynosa',
            name        : 'Reynosa, Tamaulipas',
            resource    : 'Inventario Institucional de Datos de Ayuntamiento de Reynosa',
            resources   : 1,
            site        : 'http://www.reynosa.gob.mx'
        },
        {
            coords      : [ 28.651713, -106.122329 ],
            data        : 'http://datos.gob.mx/busca/organization/ase-chihuahua',
            icon        : 'auto',
            most        : 'http://datos.gob.mx/busca/dataset/calificaciones-de-las-entidades-del-sistema-del-indice-de-rendicion-de-cuentas',
            name        : 'Auditoría Superior del Estado de Chihuahua',
            resource    : 'Calificaciones-IRC',
            resources   : 7,
            site        : 'http://chihuahua.gob.mx'
        },
        {
            coords      : [ 20.985684, -101.286308 ],
            data        : 'http://datos.gob.mx/busca/organization/ase-guanajuato',
            icon        : 'auto',
            most        : '',
            name        : 'Auditoría Superior del Estado de Guanajuato',
            resource    : '',
            resources   : 5,
            site        : 'http://www.guanajuato.gob.mx'
        }
    ],

    init        : function () {
        MXAbierto._setMap();
        MXAbierto._loadBlog();
        MXAbierto._loadTools();
    },

    _addMarkers : function () {
        var that        = this;
        this._cluster   = L.markerClusterGroup({
            spiderfyOnMaxZoom   : true
        });

        for ( var i = 0; i < this._members.length; i++ ) {
            this._members[i].marker     = L.marker([ this._members[i].coords[0], this._members[i].coords[1] ], {
                icon    : this._icons[ this._members[i].icon ]
            });
            this._cluster.addLayer( this._members[i].marker );


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

        this._map.addLayer( this._cluster );
    },

    _drawStates : function () {
        var that    = this,
            styles  = {
                defaultStyle    : {
                    color       : '#ffffff',
                    opacity     : 1,
                    weight      : 1,
                    fillColor   : '#999999',
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

                    if ( feature.properties.CVE_ENT == '17' || feature.properties.CVE_ENT == '14' || feature.properties.CVE_ENT == '05' ||
                         feature.properties.CVE_ENT == '02' || feature.properties.CVE_ENT == '30' || feature.properties.CVE_ENT == '06' || feature.properties.CVE_ENT == '15' || feature.properties.CVE_ENT == '26' ) {
                        layer.setStyle( styles.highlightStyle );
                    } else {
                        layer.setStyle( styles.defaultStyle );
                    }
                }
            }).addTo( that._map );
        });
    },

    _getWidget  : function ( post ) {
        return `
            <div class="widget">
                <div class="row">
                    <div class="col-md-6">
                        <a href="http://datos.gob.mx/herramientas/${ post.slug }" target="_blank">
                            <img src="http://datos.gob.mx/${ post.grid_photo.path }">
                        </a>
                    </div>
                    <div class="col-md-6">
                        <div class="body">
                            <h4><a href="http://datos.gob.mx/herramientas/${ post.slug }" target="_blank">${ post.name }</a></h4>
                            <p class="category"><a href="http://datos.gob.mx/${ post.section.slug }?category=${ post.category.slug }" target="_blank">${ post.category.name }</a></p>
                            <p class="author">${ post.author }</p>
                            <p><small><a href="http://datos.gob.mx/herramientas/${ post.slug }" target="_blank">Leer Más</a></small></p>
                        </div>
                    </div>
                </div>
            </div>`;
    },

    _loadBlog   : function () {
        $.get( 'http://datos.gob.mx/cms-api/posts', {
            expanded    : true,
            featured    : false,
            order       : 'DESC',
            page        : 1,
            per_page    : 2,
            section     : '5768ab0e68f81c6e0052014f',
            sort        : 'creation_date',
            status      : 'PUBLISHED',
            tag         : '5768ab0e68f81c6e0052015e'
        }, function ( data ) {
            var posts   = data.results;

            for ( var i = 0; i < posts.length; i++ ) {
                $( '#blog-posts' ).append( $( MXAbierto._getWidget( posts[i] ) ) );
            }
        });
    },

    _loadTools  : function () {
        $.get( 'http://datos.gob.mx/cms-api/posts', {
            expanded    : true,
            featured    : false,
            order       : 'DESC',
            page        : 1,
            per_page    : 2,
            section     : '5768ab0e68f81c6e0052014e',
            sort        : 'creation_date',
            status      : 'PUBLISHED',
            tag         : '5768ab0e68f81c6e0052015e'
        }, function ( data ) {
            var posts   = data.results;

            for ( var i = 0; i < posts.length; i++ ) {
                $( '#tool-posts' ).append( $( MXAbierto._getWidget( posts[i] ) ) );
            }
        });
    },

    _setIcons   : function () {
        this._icons.state   = L.icon({
            iconUrl     : 'img/marker-state.ab42645d.png',
            shadowUrl   : 'img/marker-shadow.e7bd5e4b.png',
            iconSize    : [ 25, 41 ],
            iconAnchor  : [ 12, 41 ],
            popupAnchor : [ 1, -34 ],
            shadowSize  : [ 41, 41 ]
        });

        this._icons.mun     = L.icon({
            iconUrl     : 'img/marker-municipality.7a700976.png',
            shadowUrl   : 'img/marker-shadow.e7bd5e4b.png',
            iconSize    : [ 25, 41 ],
            iconAnchor  : [ 12, 41 ],
            popupAnchor : [ 1, -34 ],
            shadowSize  : [ 41, 41 ]
        });

        this._icons.auto    = L.icon({
            iconUrl     : 'img/marker-auto.8ad7e50a.png',
            shadowUrl   : 'img/marker-shadow.e7bd5e4b.png',
            iconSize    : [ 25, 41 ],
            iconAnchor  : [ 12, 41 ],
            popupAnchor : [ 1, -34 ],
            shadowSize  : [ 41, 41 ]
        });
    },

    _setMap     : function () {
        this._drawStates();

        this._map   = L.map( 'map', {
            dragging        : true,
            scrollWheelZoom : true
        }).setView( [ 24.127, -102 ], 3 );
        L.tileLayer( 'http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
            attribution     : 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
            minZoom         : 3,
            maxZoom         : 8
        }).addTo( this._map );

        this._setIcons();
        this._addMarkers();
    }
};

$( document ).ready( MXAbierto.init );
