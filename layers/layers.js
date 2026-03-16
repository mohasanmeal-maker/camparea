var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SubBlockt20240519_a3_camp_subblock_outlines_1 = new ol.format.GeoJSON();
var features_SubBlockt20240519_a3_camp_subblock_outlines_1 = format_SubBlockt20240519_a3_camp_subblock_outlines_1.readFeatures(json_SubBlockt20240519_a3_camp_subblock_outlines_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubBlockt20240519_a3_camp_subblock_outlines_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubBlockt20240519_a3_camp_subblock_outlines_1.addFeatures(features_SubBlockt20240519_a3_camp_subblock_outlines_1);
var lyr_SubBlockt20240519_a3_camp_subblock_outlines_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubBlockt20240519_a3_camp_subblock_outlines_1, 
                style: style_SubBlockt20240519_a3_camp_subblock_outlines_1,
                popuplayertitle: 'Sub-Block — t20240519_a3_camp_subblock_outlines',
                interactive: false,
                title: '<img src="styles/legend/SubBlockt20240519_a3_camp_subblock_outlines_1.png" /> Sub-Block — t20240519_a3_camp_subblock_outlines'
            });
var format_Blockt20240519_a2_camp_block_outlines_2 = new ol.format.GeoJSON();
var features_Blockt20240519_a2_camp_block_outlines_2 = format_Blockt20240519_a2_camp_block_outlines_2.readFeatures(json_Blockt20240519_a2_camp_block_outlines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Blockt20240519_a2_camp_block_outlines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Blockt20240519_a2_camp_block_outlines_2.addFeatures(features_Blockt20240519_a2_camp_block_outlines_2);
var lyr_Blockt20240519_a2_camp_block_outlines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Blockt20240519_a2_camp_block_outlines_2, 
                style: style_Blockt20240519_a2_camp_block_outlines_2,
                popuplayertitle: 'Block — t20240519_a2_camp_block_outlines',
                interactive: false,
    title: 'Block — t20240519_a2_camp_block_outlines<br />\
    <img src="styles/legend/Blockt20240519_a2_camp_block_outlines_2_0.png" /> A<br />\
    <img src="styles/legend/Blockt20240519_a2_camp_block_outlines_2_1.png" /> B<br />\
    <img src="styles/legend/Blockt20240519_a2_camp_block_outlines_2_2.png" /> C<br />\
    <img src="styles/legend/Blockt20240519_a2_camp_block_outlines_2_3.png" /> D<br />\
    <img src="styles/legend/Blockt20240519_a2_camp_block_outlines_2_4.png" /> E<br />\
    <img src="styles/legend/Blockt20240519_a2_camp_block_outlines_2_5.png" /> F<br />\
    <img src="styles/legend/Blockt20240519_a2_camp_block_outlines_2_6.png" /> G<br />\
    <img src="styles/legend/Blockt20240519_a2_camp_block_outlines_2_7.png" /> <br />' });
var format_Campt20230412_a1_camp_outlines_3 = new ol.format.GeoJSON();
var features_Campt20230412_a1_camp_outlines_3 = format_Campt20230412_a1_camp_outlines_3.readFeatures(json_Campt20230412_a1_camp_outlines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Campt20230412_a1_camp_outlines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campt20230412_a1_camp_outlines_3.addFeatures(features_Campt20230412_a1_camp_outlines_3);
var lyr_Campt20230412_a1_camp_outlines_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Campt20230412_a1_camp_outlines_3, 
                style: style_Campt20230412_a1_camp_outlines_3,
                popuplayertitle: 'Camp — t20230412_a1_camp_outlines',
                interactive: false,
                title: '<img src="styles/legend/Campt20230412_a1_camp_outlines_3.png" /> Camp — t20230412_a1_camp_outlines'
            });
var format_FacilityInfo_4 = new ol.format.GeoJSON();
var features_FacilityInfo_4 = format_FacilityInfo_4.readFeatures(json_FacilityInfo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FacilityInfo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FacilityInfo_4.addFeatures(features_FacilityInfo_4);
var lyr_FacilityInfo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FacilityInfo_4, 
                style: style_FacilityInfo_4,
                popuplayertitle: 'Facility Info',
                interactive: true,
                title: '<img src="styles/legend/FacilityInfo_4.png" /> Facility Info'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_SubBlockt20240519_a3_camp_subblock_outlines_1.setVisible(true);lyr_Blockt20240519_a2_camp_block_outlines_2.setVisible(true);lyr_Campt20230412_a1_camp_outlines_3.setVisible(true);lyr_FacilityInfo_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SubBlockt20240519_a3_camp_subblock_outlines_1,lyr_Blockt20240519_a2_camp_block_outlines_2,lyr_Campt20230412_a1_camp_outlines_3,lyr_FacilityInfo_4];
lyr_SubBlockt20240519_a3_camp_subblock_outlines_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'District': 'District', 'Upazila': 'Upazila', 'Union': 'Union', 'SBlockSSID': 'SBlockSSID', 'SBlockName': 'SBlockName', 'SBlockLabe': 'SBlockLabe', 'BlockSSID': 'BlockSSID', 'BlockName': 'BlockName', 'BlockLabel': 'BlockLabel', 'CampSSID': 'CampSSID', 'CampName': 'CampName', 'SMSDCamp': 'SMSDCamp', 'NPMCamp': 'NPMCamp', 'CampLabel': 'CampLabel', 'CNameAlias': 'CNameAlias', 'AreaAcres': 'AreaAcres', 'AreaSqM': 'AreaSqM', 'AreaSqKM': 'AreaSqKM', 'CentroidX': 'CentroidX', 'CentroidY': 'CentroidY', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Blockt20240519_a2_camp_block_outlines_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'District': 'District', 'Upazila': 'Upazila', 'Union': 'Union', 'BlockSSID': 'BlockSSID', 'BlockName': 'BlockName', 'BlockLabel': 'BlockLabel', 'CampSSID': 'CampSSID', 'CampName_1': 'CampName_1', 'SMSDCamp': 'SMSDCamp', 'NPMCamp': 'NPMCamp', 'CampLabel': 'CampLabel', 'CNameAlias': 'CNameAlias', 'CentroidX': 'CentroidX', 'CentroidY': 'CentroidY', 'AreaAcres': 'AreaAcres', 'AreaSqM': 'AreaSqM', 'AreaSqKM': 'AreaSqKM', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Campt20230412_a1_camp_outlines_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'District': 'District', 'Upazila': 'Upazila', 'Union': 'Union', 'CampSSID': 'CampSSID', 'CampName': 'CampName', 'SMSDCamp': 'SMSDCamp', 'NPMCamp': 'NPMCamp', 'CNameAlias': 'CNameAlias', 'CampLabel': 'CampLabel', 'Settlement': 'Settlement', 'CentroidX': 'CentroidX', 'CentroidY': 'CentroidY', 'AreaAcres': 'AreaAcres', 'AreaSqM': 'AreaSqM', 'AreaSqKM': 'AreaSqKM', 'Type': 'Type', 'Camp_Let': 'Camp_Let', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FacilityInfo_4.set('fieldAliases', {'New Facility ID': 'New Facility ID', 'NAME OF VOLUNTEER': 'NAME OF VOLUNTEER', 'CAMP': 'CAMP', 'BLOCK': 'BLOCK', 'SUB-BLOCK': 'SUB-BLOCK', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_SubBlockt20240519_a3_camp_subblock_outlines_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'District': 'TextEdit', 'Upazila': 'TextEdit', 'Union': 'TextEdit', 'SBlockSSID': 'TextEdit', 'SBlockName': 'TextEdit', 'SBlockLabe': 'TextEdit', 'BlockSSID': 'TextEdit', 'BlockName': 'TextEdit', 'BlockLabel': 'TextEdit', 'CampSSID': 'TextEdit', 'CampName': 'TextEdit', 'SMSDCamp': 'TextEdit', 'NPMCamp': 'TextEdit', 'CampLabel': 'TextEdit', 'CNameAlias': 'TextEdit', 'AreaAcres': 'TextEdit', 'AreaSqM': 'TextEdit', 'AreaSqKM': 'TextEdit', 'CentroidX': 'TextEdit', 'CentroidY': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Blockt20240519_a2_camp_block_outlines_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'District': 'TextEdit', 'Upazila': 'TextEdit', 'Union': 'TextEdit', 'BlockSSID': 'TextEdit', 'BlockName': 'TextEdit', 'BlockLabel': 'TextEdit', 'CampSSID': 'TextEdit', 'CampName_1': 'TextEdit', 'SMSDCamp': 'TextEdit', 'NPMCamp': 'TextEdit', 'CampLabel': 'TextEdit', 'CNameAlias': 'TextEdit', 'CentroidX': 'TextEdit', 'CentroidY': 'TextEdit', 'AreaAcres': 'TextEdit', 'AreaSqM': 'TextEdit', 'AreaSqKM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Campt20230412_a1_camp_outlines_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'District': 'TextEdit', 'Upazila': 'TextEdit', 'Union': 'TextEdit', 'CampSSID': 'TextEdit', 'CampName': 'TextEdit', 'SMSDCamp': 'TextEdit', 'NPMCamp': 'TextEdit', 'CNameAlias': 'TextEdit', 'CampLabel': 'TextEdit', 'Settlement': 'TextEdit', 'CentroidX': 'TextEdit', 'CentroidY': 'TextEdit', 'AreaAcres': 'TextEdit', 'AreaSqM': 'TextEdit', 'AreaSqKM': 'TextEdit', 'Type': 'TextEdit', 'Camp_Let': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_FacilityInfo_4.set('fieldImages', {'New Facility ID': '', 'NAME OF VOLUNTEER': '', 'CAMP': '', 'BLOCK': '', 'SUB-BLOCK': '', 'LATITUDE': '', 'LONGITUDE': '', });
lyr_SubBlockt20240519_a3_camp_subblock_outlines_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'District': 'no label', 'Upazila': 'no label', 'Union': 'no label', 'SBlockSSID': 'no label', 'SBlockName': 'no label', 'SBlockLabe': 'no label', 'BlockSSID': 'no label', 'BlockName': 'no label', 'BlockLabel': 'no label', 'CampSSID': 'no label', 'CampName': 'no label', 'SMSDCamp': 'no label', 'NPMCamp': 'no label', 'CampLabel': 'no label', 'CNameAlias': 'no label', 'AreaAcres': 'no label', 'AreaSqM': 'no label', 'AreaSqKM': 'no label', 'CentroidX': 'no label', 'CentroidY': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Blockt20240519_a2_camp_block_outlines_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'District': 'no label', 'Upazila': 'no label', 'Union': 'no label', 'BlockSSID': 'no label', 'BlockName': 'no label', 'BlockLabel': 'no label', 'CampSSID': 'no label', 'CampName_1': 'no label', 'SMSDCamp': 'no label', 'NPMCamp': 'no label', 'CampLabel': 'no label', 'CNameAlias': 'no label', 'CentroidX': 'no label', 'CentroidY': 'no label', 'AreaAcres': 'no label', 'AreaSqM': 'no label', 'AreaSqKM': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Campt20230412_a1_camp_outlines_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'District': 'no label', 'Upazila': 'no label', 'Union': 'no label', 'CampSSID': 'no label', 'CampName': 'no label', 'SMSDCamp': 'no label', 'NPMCamp': 'no label', 'CNameAlias': 'no label', 'CampLabel': 'no label', 'Settlement': 'no label', 'CentroidX': 'no label', 'CentroidY': 'no label', 'AreaAcres': 'no label', 'AreaSqM': 'no label', 'AreaSqKM': 'no label', 'Type': 'no label', 'Camp_Let': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FacilityInfo_4.set('fieldLabels', {'New Facility ID': 'no label', 'NAME OF VOLUNTEER': 'no label', 'CAMP': 'no label', 'BLOCK': 'no label', 'SUB-BLOCK': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', });
lyr_FacilityInfo_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});