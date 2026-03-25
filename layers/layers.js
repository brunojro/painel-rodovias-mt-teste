var wms_layers = [];

var format_Base_limites_UFs_BRasilbr_uf_2024_0 = new ol.format.GeoJSON();
var features_Base_limites_UFs_BRasilbr_uf_2024_0 = format_Base_limites_UFs_BRasilbr_uf_2024_0.readFeatures(json_Base_limites_UFs_BRasilbr_uf_2024_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Base_limites_UFs_BRasilbr_uf_2024_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Base_limites_UFs_BRasilbr_uf_2024_0.addFeatures(features_Base_limites_UFs_BRasilbr_uf_2024_0);
var lyr_Base_limites_UFs_BRasilbr_uf_2024_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Base_limites_UFs_BRasilbr_uf_2024_0, 
                style: style_Base_limites_UFs_BRasilbr_uf_2024_0,
                popuplayertitle: 'Base_limites_UFs_BRasil — br_uf_2024',
                interactive: true,
                title: '<img src="styles/legend/Base_limites_UFs_BRasilbr_uf_2024_0.png" /> Base_limites_UFs_BRasil — br_uf_2024'
            });
var format_Acidentes_MT_Pontos_Publi_1 = new ol.format.GeoJSON();
var features_Acidentes_MT_Pontos_Publi_1 = format_Acidentes_MT_Pontos_Publi_1.readFeatures(json_Acidentes_MT_Pontos_Publi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acidentes_MT_Pontos_Publi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acidentes_MT_Pontos_Publi_1.addFeatures(features_Acidentes_MT_Pontos_Publi_1);
var lyr_Acidentes_MT_Pontos_Publi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acidentes_MT_Pontos_Publi_1, 
                style: style_Acidentes_MT_Pontos_Publi_1,
                popuplayertitle: 'Acidentes_MT_Pontos_Publi',
                interactive: true,
    title: 'Acidentes_MT_Pontos_Publi<br />\
    <img src="styles/legend/Acidentes_MT_Pontos_Publi_1_0.png" /> 0<br />\
    <img src="styles/legend/Acidentes_MT_Pontos_Publi_1_1.png" /> <br />' });
var format_Acidentes_MT_Contagem_publi_2 = new ol.format.GeoJSON();
var features_Acidentes_MT_Contagem_publi_2 = format_Acidentes_MT_Contagem_publi_2.readFeatures(json_Acidentes_MT_Contagem_publi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acidentes_MT_Contagem_publi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acidentes_MT_Contagem_publi_2.addFeatures(features_Acidentes_MT_Contagem_publi_2);
var lyr_Acidentes_MT_Contagem_publi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acidentes_MT_Contagem_publi_2, 
                style: style_Acidentes_MT_Contagem_publi_2,
                popuplayertitle: 'Acidentes_MT_Contagem_publi',
                interactive: true,
    title: 'Acidentes_MT_Contagem_publi<br />\
    <img src="styles/legend/Acidentes_MT_Contagem_publi_2_0.png" /> 0 - 38<br />\
    <img src="styles/legend/Acidentes_MT_Contagem_publi_2_1.png" /> 38 - 125<br />\
    <img src="styles/legend/Acidentes_MT_Contagem_publi_2_2.png" /> 125 - 267<br />\
    <img src="styles/legend/Acidentes_MT_Contagem_publi_2_3.png" /> 267 - 556<br />' });
var format_ICM_MT_2026_01_publi_simpl_3 = new ol.format.GeoJSON();
var features_ICM_MT_2026_01_publi_simpl_3 = format_ICM_MT_2026_01_publi_simpl_3.readFeatures(json_ICM_MT_2026_01_publi_simpl_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ICM_MT_2026_01_publi_simpl_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ICM_MT_2026_01_publi_simpl_3.addFeatures(features_ICM_MT_2026_01_publi_simpl_3);
var lyr_ICM_MT_2026_01_publi_simpl_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ICM_MT_2026_01_publi_simpl_3, 
                style: style_ICM_MT_2026_01_publi_simpl_3,
                popuplayertitle: 'ICM_MT_2026_01_publi_simpl',
                interactive: true,
    title: 'ICM_MT_2026_01_publi_simpl<br />\
    <img src="styles/legend/ICM_MT_2026_01_publi_simpl_3_0.png" /> BOM<br />\
    <img src="styles/legend/ICM_MT_2026_01_publi_simpl_3_1.png" /> PÉSSIMO<br />\
    <img src="styles/legend/ICM_MT_2026_01_publi_simpl_3_2.png" /> REGULAR<br />\
    <img src="styles/legend/ICM_MT_2026_01_publi_simpl_3_3.png" /> RUIM<br />\
    <img src="styles/legend/ICM_MT_2026_01_publi_simpl_3_4.png" /> <br />' });
var format_Rodovia_base_simplificada_publi_4 = new ol.format.GeoJSON();
var features_Rodovia_base_simplificada_publi_4 = format_Rodovia_base_simplificada_publi_4.readFeatures(json_Rodovia_base_simplificada_publi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rodovia_base_simplificada_publi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rodovia_base_simplificada_publi_4.addFeatures(features_Rodovia_base_simplificada_publi_4);
var lyr_Rodovia_base_simplificada_publi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rodovia_base_simplificada_publi_4, 
                style: style_Rodovia_base_simplificada_publi_4,
                popuplayertitle: 'Rodovia_base_simplificada_publi',
                interactive: true,
    title: 'Rodovia_base_simplificada_publi<br />\
    <img src="styles/legend/Rodovia_base_simplificada_publi_4_0.png" /> Concessão Federal<br />\
    <img src="styles/legend/Rodovia_base_simplificada_publi_4_1.png" /> Convênio Adm.Federal/Estadual<br />\
    <img src="styles/legend/Rodovia_base_simplificada_publi_4_2.png" /> Convênio Adm.Federal/Municipal<br />\
    <img src="styles/legend/Rodovia_base_simplificada_publi_4_3.png" /> Distrital<br />\
    <img src="styles/legend/Rodovia_base_simplificada_publi_4_4.png" /> Estadual<br />\
    <img src="styles/legend/Rodovia_base_simplificada_publi_4_5.png" /> Federal<br />\
    <img src="styles/legend/Rodovia_base_simplificada_publi_4_6.png" /> Municipal<br />\
    <img src="styles/legend/Rodovia_base_simplificada_publi_4_7.png" /> <br />' });

lyr_Base_limites_UFs_BRasilbr_uf_2024_0.setVisible(true);lyr_Acidentes_MT_Pontos_Publi_1.setVisible(true);lyr_Acidentes_MT_Contagem_publi_2.setVisible(true);lyr_ICM_MT_2026_01_publi_simpl_3.setVisible(true);lyr_Rodovia_base_simplificada_publi_4.setVisible(true);
var layersList = [lyr_Base_limites_UFs_BRasilbr_uf_2024_0,lyr_Acidentes_MT_Pontos_Publi_1,lyr_Acidentes_MT_Contagem_publi_2,lyr_ICM_MT_2026_01_publi_simpl_3,lyr_Rodovia_base_simplificada_publi_4];
lyr_Base_limites_UFs_BRasilbr_uf_2024_0.set('fieldAliases', {'fid': 'fid', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', });
lyr_Acidentes_MT_Pontos_Publi_1.set('fieldAliases', {'fid': 'fid', 'Data': 'Data', 'BR': 'BR', 'km': 'km', 'Municipio': 'Municipio', 'Causa Acidente': 'Causa Acidente', 'Tipo Acidente': 'Tipo Acidente', 'Fase do Dia': 'Fase do Dia', 'Condição Meteorológica': 'Condição Meteorológica', 'tipo_pista': 'tipo_pista', 'Traçado': 'Traçado', 'Pessoas': 'Pessoas', 'Mortos': 'Mortos', 'Feridos leves': 'Feridos leves', 'Feridos Graves': 'Feridos Graves', 'Veículos': 'Veículos', 'Rodovia': 'Rodovia', 'UF': 'UF', });
lyr_Acidentes_MT_Contagem_publi_2.set('fieldAliases', {'fid': 'fid', 'UF': 'UF', 'BR': 'BR', 'km Inicial': 'km Inicial', 'km Final': 'km Final', 'Contagem Acidentes': 'Contagem Acidentes', 'Total mortos': 'Total mortos', 'Total feridos graves': 'Total feridos graves', 'Total feridos leves': 'Total feridos leves', 'Total Veículos': 'Total Veículos', 'Total Pessoas': 'Total Pessoas', 'Total UPS': 'Total UPS', 'Causa Principal': 'Causa Principal', 'Fase dia Principal': 'Fase dia Principal', 'Meteorológica Principal': 'Meteorológica Principal', });
lyr_ICM_MT_2026_01_publi_simpl_3.set('fieldAliases', {'fid': 'fid', 'UF': 'UF', 'Rodovia': 'Rodovia', 'superficie': 'superficie', 'data_aval': 'data_aval', 'IP': 'IP', 'IC': 'IC', 'ICM': 'ICM', 'Condição da via': 'Condição da via', 'km inicial': 'km inicial', 'km final': 'km final', });
lyr_Rodovia_base_simplificada_publi_4.set('fieldAliases', {'fid': 'fid', 'id_trecho_': 'id_trecho_', 'BR': 'BR', 'UF': 'UF', 'Local inicial': 'Local inicial', 'local final': 'local final', 'km incial': 'km incial', 'km final': 'km final', 'extensão': 'extensão', 'Sup': 'Sup', 'Obras': 'Obras', 'administração': 'administração', 'ds_superfi': 'ds_superfi', 'Legenda': 'Legenda', 'sg_legenda': 'sg_legenda', 'leg_multim': 'leg_multim', });
lyr_Base_limites_UFs_BRasilbr_uf_2024_0.set('fieldImages', {'fid': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Acidentes_MT_Pontos_Publi_1.set('fieldImages', {'fid': '', 'Data': '', 'BR': '', 'km': '', 'Municipio': '', 'Causa Acidente': '', 'Tipo Acidente': '', 'Fase do Dia': '', 'Condição Meteorológica': '', 'tipo_pista': '', 'Traçado': '', 'Pessoas': '', 'Mortos': '', 'Feridos leves': '', 'Feridos Graves': '', 'Veículos': '', 'Rodovia': '', 'UF': '', });
lyr_Acidentes_MT_Contagem_publi_2.set('fieldImages', {'fid': 'TextEdit', 'UF': 'TextEdit', 'BR': 'TextEdit', 'km Inicial': 'TextEdit', 'km Final': 'TextEdit', 'Contagem Acidentes': 'TextEdit', 'Total mortos': 'TextEdit', 'Total feridos graves': 'TextEdit', 'Total feridos leves': 'TextEdit', 'Total Veículos': 'TextEdit', 'Total Pessoas': 'TextEdit', 'Total UPS': 'TextEdit', 'Causa Principal': 'TextEdit', 'Fase dia Principal': 'TextEdit', 'Meteorológica Principal': 'TextEdit', });
lyr_ICM_MT_2026_01_publi_simpl_3.set('fieldImages', {'fid': 'TextEdit', 'UF': 'TextEdit', 'Rodovia': 'TextEdit', 'superficie': 'TextEdit', 'data_aval': 'TextEdit', 'IP': 'TextEdit', 'IC': 'TextEdit', 'ICM': 'TextEdit', 'Condição da via': 'TextEdit', 'km inicial': 'TextEdit', 'km final': 'TextEdit', });
lyr_Rodovia_base_simplificada_publi_4.set('fieldImages', {'fid': 'TextEdit', 'id_trecho_': 'TextEdit', 'BR': 'TextEdit', 'UF': 'TextEdit', 'Local inicial': 'TextEdit', 'local final': 'TextEdit', 'km incial': 'TextEdit', 'km final': 'TextEdit', 'extensão': 'TextEdit', 'Sup': 'TextEdit', 'Obras': 'TextEdit', 'administração': 'TextEdit', 'ds_superfi': 'TextEdit', 'Legenda': 'TextEdit', 'sg_legenda': 'TextEdit', 'leg_multim': 'TextEdit', });
lyr_Base_limites_UFs_BRasilbr_uf_2024_0.set('fieldLabels', {'fid': 'inline label - always visible', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', });
lyr_Acidentes_MT_Pontos_Publi_1.set('fieldLabels', {'fid': 'no label', 'Data': 'no label', 'BR': 'no label', 'km': 'no label', 'Municipio': 'no label', 'Causa Acidente': 'no label', 'Tipo Acidente': 'no label', 'Fase do Dia': 'no label', 'Condição Meteorológica': 'no label', 'tipo_pista': 'no label', 'Traçado': 'no label', 'Pessoas': 'no label', 'Mortos': 'no label', 'Feridos leves': 'no label', 'Feridos Graves': 'no label', 'Veículos': 'no label', 'Rodovia': 'no label', 'UF': 'no label', });
lyr_Acidentes_MT_Contagem_publi_2.set('fieldLabels', {'fid': 'no label', 'UF': 'no label', 'BR': 'no label', 'km Inicial': 'no label', 'km Final': 'no label', 'Contagem Acidentes': 'no label', 'Total mortos': 'no label', 'Total feridos graves': 'no label', 'Total feridos leves': 'no label', 'Total Veículos': 'no label', 'Total Pessoas': 'no label', 'Total UPS': 'no label', 'Causa Principal': 'no label', 'Fase dia Principal': 'no label', 'Meteorológica Principal': 'no label', });
lyr_ICM_MT_2026_01_publi_simpl_3.set('fieldLabels', {'fid': 'no label', 'UF': 'no label', 'Rodovia': 'no label', 'superficie': 'no label', 'data_aval': 'no label', 'IP': 'no label', 'IC': 'no label', 'ICM': 'no label', 'Condição da via': 'no label', 'km inicial': 'no label', 'km final': 'no label', });
lyr_Rodovia_base_simplificada_publi_4.set('fieldLabels', {'fid': 'no label', 'id_trecho_': 'no label', 'BR': 'no label', 'UF': 'no label', 'Local inicial': 'no label', 'local final': 'no label', 'km incial': 'no label', 'km final': 'no label', 'extensão': 'no label', 'Sup': 'no label', 'Obras': 'no label', 'administração': 'no label', 'ds_superfi': 'no label', 'Legenda': 'no label', 'sg_legenda': 'no label', 'leg_multim': 'no label', });
lyr_Rodovia_base_simplificada_publi_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});