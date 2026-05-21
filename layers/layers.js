var wms_layers = [];

var format_Batas_Administrasi_0 = new ol.format.GeoJSON();
var features_Batas_Administrasi_0 = format_Batas_Administrasi_0.readFeatures(json_Batas_Administrasi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_0.addFeatures(features_Batas_Administrasi_0);
var lyr_Batas_Administrasi_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Administrasi_0, 
                style: style_Batas_Administrasi_0,
                popuplayertitle: 'Batas_Administrasi',
                interactive: true,
                title: '<img src="styles/legend/Batas_Administrasi_0.png" /> Batas_Administrasi'
            });
var format_AreaKomersial_1 = new ol.format.GeoJSON();
var features_AreaKomersial_1 = format_AreaKomersial_1.readFeatures(json_AreaKomersial_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaKomersial_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaKomersial_1.addFeatures(features_AreaKomersial_1);
var lyr_AreaKomersial_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaKomersial_1, 
                style: style_AreaKomersial_1,
                popuplayertitle: 'Area Komersial',
                interactive: true,
                title: '<img src="styles/legend/AreaKomersial_1.png" /> Area Komersial'
            });
var format_AreaPerumahan_2 = new ol.format.GeoJSON();
var features_AreaPerumahan_2 = format_AreaPerumahan_2.readFeatures(json_AreaPerumahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPerumahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPerumahan_2.addFeatures(features_AreaPerumahan_2);
var lyr_AreaPerumahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPerumahan_2, 
                style: style_AreaPerumahan_2,
                popuplayertitle: 'Area Perumahan',
                interactive: true,
                title: '<img src="styles/legend/AreaPerumahan_2.png" /> Area Perumahan'
            });
var format_AreaPublik_3 = new ol.format.GeoJSON();
var features_AreaPublik_3 = format_AreaPublik_3.readFeatures(json_AreaPublik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPublik_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPublik_3.addFeatures(features_AreaPublik_3);
var lyr_AreaPublik_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPublik_3, 
                style: style_AreaPublik_3,
                popuplayertitle: 'Area Publik',
                interactive: true,
                title: '<img src="styles/legend/AreaPublik_3.png" /> Area Publik'
            });
var format_ClipAreaKomersil_4 = new ol.format.GeoJSON();
var features_ClipAreaKomersil_4 = format_ClipAreaKomersil_4.readFeatures(json_ClipAreaKomersil_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClipAreaKomersil_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClipAreaKomersil_4.addFeatures(features_ClipAreaKomersil_4);
var lyr_ClipAreaKomersil_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClipAreaKomersil_4, 
                style: style_ClipAreaKomersil_4,
                popuplayertitle: 'Clip Area Komersil',
                interactive: true,
                title: '<img src="styles/legend/ClipAreaKomersil_4.png" /> Clip Area Komersil'
            });
var format_ClipAreaPerumahan_5 = new ol.format.GeoJSON();
var features_ClipAreaPerumahan_5 = format_ClipAreaPerumahan_5.readFeatures(json_ClipAreaPerumahan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClipAreaPerumahan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClipAreaPerumahan_5.addFeatures(features_ClipAreaPerumahan_5);
var lyr_ClipAreaPerumahan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClipAreaPerumahan_5, 
                style: style_ClipAreaPerumahan_5,
                popuplayertitle: 'Clip Area Perumahan',
                interactive: true,
                title: '<img src="styles/legend/ClipAreaPerumahan_5.png" /> Clip Area Perumahan'
            });
var format_ClipAreaPublik_6 = new ol.format.GeoJSON();
var features_ClipAreaPublik_6 = format_ClipAreaPublik_6.readFeatures(json_ClipAreaPublik_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClipAreaPublik_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClipAreaPublik_6.addFeatures(features_ClipAreaPublik_6);
var lyr_ClipAreaPublik_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClipAreaPublik_6, 
                style: style_ClipAreaPublik_6,
                popuplayertitle: 'Clip Area Publik',
                interactive: true,
                title: '<img src="styles/legend/ClipAreaPublik_6.png" /> Clip Area Publik'
            });
var format_Jalann_Fix_Bisa_7 = new ol.format.GeoJSON();
var features_Jalann_Fix_Bisa_7 = format_Jalann_Fix_Bisa_7.readFeatures(json_Jalann_Fix_Bisa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalann_Fix_Bisa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalann_Fix_Bisa_7.addFeatures(features_Jalann_Fix_Bisa_7);
var lyr_Jalann_Fix_Bisa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalann_Fix_Bisa_7, 
                style: style_Jalann_Fix_Bisa_7,
                popuplayertitle: 'Jalann_Fix_Bisa',
                interactive: true,
                title: '<img src="styles/legend/Jalann_Fix_Bisa_7.png" /> Jalann_Fix_Bisa'
            });
var format_Halte_Fixbisa_8 = new ol.format.GeoJSON();
var features_Halte_Fixbisa_8 = format_Halte_Fixbisa_8.readFeatures(json_Halte_Fixbisa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halte_Fixbisa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_Fixbisa_8.addFeatures(features_Halte_Fixbisa_8);
var lyr_Halte_Fixbisa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_Fixbisa_8, 
                style: style_Halte_Fixbisa_8,
                popuplayertitle: 'Halte_Fix bisa',
                interactive: true,
                title: '<img src="styles/legend/Halte_Fixbisa_8.png" /> Halte_Fix bisa'
            });

lyr_Batas_Administrasi_0.setVisible(true);lyr_AreaKomersial_1.setVisible(true);lyr_AreaPerumahan_2.setVisible(true);lyr_AreaPublik_3.setVisible(true);lyr_ClipAreaKomersil_4.setVisible(true);lyr_ClipAreaPerumahan_5.setVisible(true);lyr_ClipAreaPublik_6.setVisible(true);lyr_Jalann_Fix_Bisa_7.setVisible(true);lyr_Halte_Fixbisa_8.setVisible(true);
var layersList = [lyr_Batas_Administrasi_0,lyr_AreaKomersial_1,lyr_AreaPerumahan_2,lyr_AreaPublik_3,lyr_ClipAreaKomersil_4,lyr_ClipAreaPerumahan_5,lyr_ClipAreaPublik_6,lyr_Jalann_Fix_Bisa_7,lyr_Halte_Fixbisa_8];
lyr_Batas_Administrasi_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nama Kelur': 'Nama Kelur', 'Nama Kecam': 'Nama Kecam', 'Nama Kab/K': 'Nama Kab/K', 'Nama Provi': 'Nama Provi', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luas (M2)': 'Luas (M2)', 'Luas Kedir': 'Luas Kedir', });
lyr_AreaKomersial_1.set('fieldAliases', {'NAMZON': 'NAMZON', });
lyr_AreaPerumahan_2.set('fieldAliases', {'NAMZON': 'NAMZON', });
lyr_AreaPublik_3.set('fieldAliases', {'NAMZON': 'NAMZON', });
lyr_ClipAreaKomersil_4.set('fieldAliases', {'Zona': 'Zona', 'OBJECTID': 'OBJECTID', 'Nama Halte': 'Nama Halte', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Jangkauan ': 'Jangkauan ', 'Luas (M2)': 'Luas (M2)', 'Luas Total': 'Luas Total', 'Persentase': 'Persentase', });
lyr_ClipAreaPerumahan_5.set('fieldAliases', {'NAMZON': 'NAMZON', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Jangkauan': 'Jangkauan', 'LuasM2': 'LuasM2', 'LuasAllM2': 'LuasAllM2', 'Persentase': 'Persentase', });
lyr_ClipAreaPublik_6.set('fieldAliases', {'Zona': 'Zona', 'OBJECTID': 'OBJECTID', 'Nama Halte': 'Nama Halte', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Jangkauan ': 'Jangkauan ', 'Luas (M2)': 'Luas (M2)', 'Luas Total': 'Luas Total', 'Persentase': 'Persentase', });
lyr_Jalann_Fix_Bisa_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Klasifikas': 'Klasifikas', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'Nama Jalan': 'Nama Jalan', 'SBDATA': 'SBDATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Halte_Fixbisa_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nama Halte': 'Nama Halte', 'Jenis': 'Jenis', });
lyr_Batas_Administrasi_0.set('fieldImages', {'OBJECTID': '', 'Nama Kelur': '', 'Nama Kecam': '', 'Nama Kab/K': '', 'Nama Provi': '', 'SUMBER': '', 'LUASHA': '', 'Shape_Leng': '', 'Shape_Area': '', 'Luas (M2)': '', 'Luas Kedir': '', });
lyr_AreaKomersial_1.set('fieldImages', {'NAMZON': '', });
lyr_AreaPerumahan_2.set('fieldImages', {'NAMZON': '', });
lyr_AreaPublik_3.set('fieldImages', {'NAMZON': '', });
lyr_ClipAreaKomersil_4.set('fieldImages', {'Zona': '', 'OBJECTID': '', 'Nama Halte': '', 'REMARK': '', 'type': '', 'start': '', 'Jangkauan ': '', 'Luas (M2)': '', 'Luas Total': '', 'Persentase': '', });
lyr_ClipAreaPerumahan_5.set('fieldImages', {'NAMZON': '', 'OBJECTID': '', 'Name': '', 'REMARK': '', 'type': '', 'start': '', 'Jangkauan': '', 'LuasM2': '', 'LuasAllM2': '', 'Persentase': '', });
lyr_ClipAreaPublik_6.set('fieldImages', {'Zona': '', 'OBJECTID': '', 'Nama Halte': '', 'REMARK': '', 'type': '', 'start': '', 'Jangkauan ': '', 'Luas (M2)': '', 'Luas Total': '', 'Persentase': '', });
lyr_Jalann_Fix_Bisa_7.set('fieldImages', {'OBJECTID': '', 'Klasifikas': '', 'ORDE01': '', 'ORDE02': '', 'ORDE03': '', 'ORDE04': '', 'JNSRSR': '', 'STSJRN': '', 'WADMPR': '', 'WADMKK': '', 'Nama Jalan': '', 'SBDATA': '', 'SHAPE_Leng': '', 'Shape_Le_1': '', });
lyr_Halte_Fixbisa_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nama Halte': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_Batas_Administrasi_0.set('fieldLabels', {'OBJECTID': 'no label', 'Nama Kelur': 'no label', 'Nama Kecam': 'no label', 'Nama Kab/K': 'no label', 'Nama Provi': 'no label', 'SUMBER': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luas (M2)': 'no label', 'Luas Kedir': 'no label', });
lyr_AreaKomersial_1.set('fieldLabels', {'NAMZON': 'no label', });
lyr_AreaPerumahan_2.set('fieldLabels', {'NAMZON': 'no label', });
lyr_AreaPublik_3.set('fieldLabels', {'NAMZON': 'no label', });
lyr_ClipAreaKomersil_4.set('fieldLabels', {'Zona': 'no label', 'OBJECTID': 'no label', 'Nama Halte': 'no label', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Jangkauan ': 'no label', 'Luas (M2)': 'no label', 'Luas Total': 'no label', 'Persentase': 'no label', });
lyr_ClipAreaPerumahan_5.set('fieldLabels', {'NAMZON': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Jangkauan': 'no label', 'LuasM2': 'no label', 'LuasAllM2': 'no label', 'Persentase': 'no label', });
lyr_ClipAreaPublik_6.set('fieldLabels', {'Zona': 'no label', 'OBJECTID': 'no label', 'Nama Halte': 'no label', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Jangkauan ': 'no label', 'Luas (M2)': 'no label', 'Luas Total': 'no label', 'Persentase': 'no label', });
lyr_Jalann_Fix_Bisa_7.set('fieldLabels', {'OBJECTID': 'no label', 'Klasifikas': 'no label', 'ORDE01': 'no label', 'ORDE02': 'no label', 'ORDE03': 'no label', 'ORDE04': 'no label', 'JNSRSR': 'no label', 'STSJRN': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'Nama Jalan': 'no label', 'SBDATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Halte_Fixbisa_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'Nama Halte': 'inline label - always visible', 'Jenis': 'hidden field', });
lyr_Halte_Fixbisa_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});