var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_SATELITE_1 = new ol.layer.Tile({
            'title': 'SATELITE',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_FRACCION_2 = new ol.format.GeoJSON();
var features_FRACCION_2 = format_FRACCION_2.readFeatures(json_FRACCION_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRACCION_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRACCION_2.addFeatures(features_FRACCION_2);
var lyr_FRACCION_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FRACCION_2, 
                style: style_FRACCION_2,
                popuplayertitle: 'FRACCION',
                interactive: false,
                title: '<img src="styles/legend/FRACCION_2.png" /> FRACCION'
            });
var format_MANZANAZ_3 = new ol.format.GeoJSON();
var features_MANZANAZ_3 = format_MANZANAZ_3.readFeatures(json_MANZANAZ_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANZANAZ_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANZANAZ_3.addFeatures(features_MANZANAZ_3);
var lyr_MANZANAZ_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANZANAZ_3, 
                style: style_MANZANAZ_3,
                popuplayertitle: 'MANZANAZ',
                interactive: false,
                title: '<img src="styles/legend/MANZANAZ_3.png" /> MANZANAZ'
            });
var format_81_4 = new ol.format.GeoJSON();
var features_81_4 = format_81_4.readFeatures(json_81_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_81_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_81_4.addFeatures(features_81_4);
var lyr_81_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_81_4, 
                style: style_81_4,
                popuplayertitle: '81',
                interactive: true,
    title: '81<br />\
    <img src="styles/legend/81_4_0.png" /> <br />\
    <img src="styles/legend/81_4_1.png" /> <br />\
    <img src="styles/legend/81_4_2.png" /> <br />\
    <img src="styles/legend/81_4_3.png" /> <br />\
    <img src="styles/legend/81_4_4.png" /> <br />' });
var format_80_5 = new ol.format.GeoJSON();
var features_80_5 = format_80_5.readFeatures(json_80_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_80_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_80_5.addFeatures(features_80_5);
var lyr_80_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_80_5, 
                style: style_80_5,
                popuplayertitle: '80',
                interactive: true,
    title: '80<br />\
    <img src="styles/legend/80_5_0.png" /> <br />\
    <img src="styles/legend/80_5_1.png" /> <br />\
    <img src="styles/legend/80_5_2.png" /> <br />\
    <img src="styles/legend/80_5_3.png" /> <br />\
    <img src="styles/legend/80_5_4.png" /> <br />' });
var format_82_6 = new ol.format.GeoJSON();
var features_82_6 = format_82_6.readFeatures(json_82_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_82_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_82_6.addFeatures(features_82_6);
var lyr_82_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_82_6, 
                style: style_82_6,
                popuplayertitle: '82',
                interactive: true,
    title: '82<br />\
    <img src="styles/legend/82_6_0.png" /> <br />\
    <img src="styles/legend/82_6_1.png" /> <br />\
    <img src="styles/legend/82_6_2.png" /> <br />\
    <img src="styles/legend/82_6_3.png" /> <br />\
    <img src="styles/legend/82_6_4.png" /> <br />' });
var format_83_7 = new ol.format.GeoJSON();
var features_83_7 = format_83_7.readFeatures(json_83_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_83_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_83_7.addFeatures(features_83_7);
var lyr_83_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_83_7, 
                style: style_83_7,
                popuplayertitle: '83',
                interactive: true,
    title: '83<br />\
    <img src="styles/legend/83_7_0.png" /> <br />\
    <img src="styles/legend/83_7_1.png" /> <br />\
    <img src="styles/legend/83_7_2.png" /> <br />\
    <img src="styles/legend/83_7_3.png" /> <br />\
    <img src="styles/legend/83_7_4.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_SATELITE_1.setVisible(true);lyr_FRACCION_2.setVisible(false);lyr_MANZANAZ_3.setVisible(true);lyr_81_4.setVisible(true);lyr_80_5.setVisible(true);lyr_82_6.setVisible(true);lyr_83_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SATELITE_1,lyr_FRACCION_2,lyr_MANZANAZ_3,lyr_81_4,lyr_80_5,lyr_82_6,lyr_83_7];
lyr_FRACCION_2.set('fieldAliases', {'fid': 'fid', 'FRACCION': 'FRACCION', });
lyr_MANZANAZ_3.set('fieldAliases', {'fid': 'fid', 'MANZANA': 'MANZANA', });
lyr_81_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Manzana': 'Manzana', 'Lote': 'Lote', 'Estado': 'Estado', 'Cuota': 'Cuota', 'Credito': 'Credito', 'Contado': 'Contado', });
lyr_80_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Manzana': 'Manzana', 'Lote': 'Lote', 'Cuota': 'Cuota', 'Crédito': 'Crédito', 'Contado': 'Contado', });
lyr_82_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Manzana': 'Manzana', 'Lote': 'Lote', 'Estado': 'Estado', 'Cuota': 'Cuota', 'Credito': 'Credito', 'Contado': 'Contado', });
lyr_83_7.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Mz': 'Mz', 'Lt': 'Lt', 'Estado': 'Estado', 'Cuota': 'Cuota', 'Crédito': 'Crédito', 'Contado': 'Contado', });
lyr_FRACCION_2.set('fieldImages', {'fid': '', 'FRACCION': 'TextEdit', });
lyr_MANZANAZ_3.set('fieldImages', {'fid': 'TextEdit', 'MANZANA': 'TextEdit', });
lyr_81_4.set('fieldImages', {'fid': '', 'ID': 'TextEdit', 'Manzana': 'TextEdit', 'Lote': 'TextEdit', 'Estado': 'TextEdit', 'Cuota': 'TextEdit', 'Credito': 'TextEdit', 'Contado': 'TextEdit', });
lyr_80_5.set('fieldImages', {'fid': '', 'ID': 'TextEdit', 'Manzana': 'TextEdit', 'Lote': 'TextEdit', 'Cuota': 'TextEdit', 'Crédito': 'TextEdit', 'Contado': 'TextEdit', });
lyr_82_6.set('fieldImages', {'fid': '', 'ID': 'TextEdit', 'Manzana': 'TextEdit', 'Lote': 'TextEdit', 'Estado': 'TextEdit', 'Cuota': 'TextEdit', 'Credito': 'TextEdit', 'Contado': 'TextEdit', });
lyr_83_7.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Mz': 'TextEdit', 'Lt': 'TextEdit', 'Estado': 'TextEdit', 'Cuota': 'TextEdit', 'Crédito': 'TextEdit', 'Contado': 'TextEdit', });
lyr_FRACCION_2.set('fieldLabels', {'fid': 'no label', 'FRACCION': 'header label - visible with data', });
lyr_MANZANAZ_3.set('fieldLabels', {'fid': 'no label', 'MANZANA': 'header label - visible with data', });
lyr_81_4.set('fieldLabels', {'fid': 'no label', 'ID': 'header label - visible with data', 'Manzana': 'header label - visible with data', 'Lote': 'header label - visible with data', 'Estado': 'header label - visible with data', 'Cuota': 'header label - visible with data', 'Credito': 'header label - visible with data', 'Contado': 'header label - visible with data', });
lyr_80_5.set('fieldLabels', {'fid': 'no label', 'ID': 'header label - visible with data', 'Manzana': 'header label - visible with data', 'Lote': 'header label - visible with data', 'Cuota': 'header label - visible with data', 'Crédito': 'header label - visible with data', 'Contado': 'header label - visible with data', });
lyr_82_6.set('fieldLabels', {'fid': 'no label', 'ID': 'header label - visible with data', 'Manzana': 'header label - visible with data', 'Lote': 'header label - visible with data', 'Estado': 'header label - visible with data', 'Cuota': 'header label - visible with data', 'Credito': 'header label - visible with data', 'Contado': 'header label - visible with data', });
lyr_83_7.set('fieldLabels', {'fid': 'no label', 'ID': 'header label - visible with data', 'Mz': 'header label - visible with data', 'Lt': 'header label - visible with data', 'Estado': 'header label - visible with data', 'Cuota': 'header label - visible with data', 'Crédito': 'header label - visible with data', 'Contado': 'header label - visible with data', });
lyr_83_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});