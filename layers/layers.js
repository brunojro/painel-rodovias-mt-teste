var wms_layers = [];

var format_Limites_estados_simpl_0 = new ol.format.GeoJSON();
var features_Limites_estados_simpl_0 = format_Limites_estados_simpl_0.readFeatures(json_Limites_estados_simpl_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limites_estados_simpl_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limites_estados_simpl_0.addFeatures(features_Limites_estados_simpl_0);
var lyr_Limites_estados_simpl_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limites_estados_simpl_0, 
                style: style_Limites_estados_simpl_0,
                popuplayertitle: 'Limites_estados_simpl',
                interactive: true,
                title: '<img src="styles/legend/Limites_estados_simpl_0.png" /> Limites_estados_simpl'
            });
var format_Acidentes_BR_Pontos_publi_1 = new ol.format.GeoJSON();
var features_Acidentes_BR_Pontos_publi_1 = format_Acidentes_BR_Pontos_publi_1.readFeatures(json_Acidentes_BR_Pontos_publi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acidentes_BR_Pontos_publi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acidentes_BR_Pontos_publi_1.addFeatures(features_Acidentes_BR_Pontos_publi_1);
cluster_Acidentes_BR_Pontos_publi_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Acidentes_BR_Pontos_publi_1
});
var lyr_Acidentes_BR_Pontos_publi_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Acidentes_BR_Pontos_publi_1, 
                style: style_Acidentes_BR_Pontos_publi_1,
                popuplayertitle: 'Acidentes_BR_Pontos_publi',
                interactive: true,
    title: 'Acidentes_BR_Pontos_publi<br />\
    <img src="styles/legend/Acidentes_BR_Pontos_publi_1_0.png" /> 0<br />\
    <img src="styles/legend/Acidentes_BR_Pontos_publi_1_1.png" /> <br />' });
var format_Acidentes_BR_contagem_simpl_publi_2 = new ol.format.GeoJSON();
var features_Acidentes_BR_contagem_simpl_publi_2 = format_Acidentes_BR_contagem_simpl_publi_2.readFeatures(json_Acidentes_BR_contagem_simpl_publi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acidentes_BR_contagem_simpl_publi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acidentes_BR_contagem_simpl_publi_2.addFeatures(features_Acidentes_BR_contagem_simpl_publi_2);
var lyr_Acidentes_BR_contagem_simpl_publi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acidentes_BR_contagem_simpl_publi_2, 
                style: style_Acidentes_BR_contagem_simpl_publi_2,
                popuplayertitle: 'Acidentes_BR_contagem_simpl_publi',
                interactive: true,
    title: 'Acidentes_BR_contagem_simpl_publi<br />\
    <img src="styles/legend/Acidentes_BR_contagem_simpl_publi_2_0.png" /> 0 - 38<br />\
    <img src="styles/legend/Acidentes_BR_contagem_simpl_publi_2_1.png" /> 38 - 125<br />\
    <img src="styles/legend/Acidentes_BR_contagem_simpl_publi_2_2.png" /> 125 - 267<br />\
    <img src="styles/legend/Acidentes_BR_contagem_simpl_publi_2_3.png" /> 267 - 556<br />' });
var format_Rodovia_base_simplificada_publi_3 = new ol.format.GeoJSON();
var features_Rodovia_base_simplificada_publi_3 = format_Rodovia_base_simplificada_publi_3.readFeatures(json_Rodovia_base_simplificada_publi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rodovia_base_simplificada_publi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rodovia_base_simplificada_publi_3.addFeatures(features_Rodovia_base_simplificada_publi_3);
var lyr_Rodovia_base_simplificada_publi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rodovia_base_simplificada_publi_3, 
                style: style_Rodovia_base_simplificada_publi_3,
                popuplayertitle: 'Rodovia_base_simplificada_publi',
                interactive: true,
    title: 'Rodovia_base_simplificada_publi<br />\
    <img src="styles/legend/Rodovia_base_simplificada_publi_3_0.png" /> Concessão Federal<br />\
    <img src="styles/legend/Rodovia_base_simplificada_publi_3_1.png" /> Convênio Adm.Federal/Estadual<br />\
    <img src="styles/legend/Rodovia_base_simplificada_publi_3_2.png" /> Convênio Adm.Federal/Municipal<br />\
    <img src="styles/legend/Rodovia_base_simplificada_publi_3_3.png" /> Distrital<br />\
    <img src="styles/legend/Rodovia_base_simplificada_publi_3_4.png" /> Estadual<br />\
    <img src="styles/legend/Rodovia_base_simplificada_publi_3_5.png" /> Federal<br />\
    <img src="styles/legend/Rodovia_base_simplificada_publi_3_6.png" /> Municipal<br />\
    <img src="styles/legend/Rodovia_base_simplificada_publi_3_7.png" /> <br />' });
var format_ICM_2026_01_simpl_publ_4 = new ol.format.GeoJSON();
var features_ICM_2026_01_simpl_publ_4 = format_ICM_2026_01_simpl_publ_4.readFeatures(json_ICM_2026_01_simpl_publ_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ICM_2026_01_simpl_publ_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ICM_2026_01_simpl_publ_4.addFeatures(features_ICM_2026_01_simpl_publ_4);
var lyr_ICM_2026_01_simpl_publ_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ICM_2026_01_simpl_publ_4, 
                style: style_ICM_2026_01_simpl_publ_4,
                popuplayertitle: 'ICM_2026_01_simpl_publ',
                interactive: true,
    title: 'ICM_2026_01_simpl_publ<br />\
    <img src="styles/legend/ICM_2026_01_simpl_publ_4_0.png" /> BOM<br />\
    <img src="styles/legend/ICM_2026_01_simpl_publ_4_1.png" /> PÉSSIMO<br />\
    <img src="styles/legend/ICM_2026_01_simpl_publ_4_2.png" /> REGULAR<br />\
    <img src="styles/legend/ICM_2026_01_simpl_publ_4_3.png" /> RUIM<br />\
    <img src="styles/legend/ICM_2026_01_simpl_publ_4_4.png" /> <br />' });
var group_Publicaao_nacional = new ol.layer.Group({
                                layers: [lyr_Limites_estados_simpl_0,lyr_Acidentes_BR_Pontos_publi_1,lyr_Acidentes_BR_contagem_simpl_publi_2,lyr_Rodovia_base_simplificada_publi_3,lyr_ICM_2026_01_simpl_publ_4,],
                                fold: 'open',
                                title: 'Publicaçao_nacional'});

lyr_Limites_estados_simpl_0.setVisible(true);lyr_Acidentes_BR_Pontos_publi_1.setVisible(false);lyr_Acidentes_BR_contagem_simpl_publi_2.setVisible(true);lyr_Rodovia_base_simplificada_publi_3.setVisible(true);lyr_ICM_2026_01_simpl_publ_4.setVisible(false);
var layersList = [group_Publicaao_nacional];
lyr_Limites_estados_simpl_0.set('fieldAliases', {'fid': 'fid', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', });
lyr_Acidentes_BR_Pontos_publi_1.set('fieldAliases', {'fid': 'fid', 'Data': 'Data', 'BR': 'BR', 'km': 'km', 'Município': 'Município', 'Causa Acidente': 'Causa Acidente', 'Fase do dia': 'Fase do dia', 'Clima': 'Clima', 'Tipo de pista': 'Tipo de pista', 'Traçado': 'Traçado', 'Mortos': 'Mortos', 'Feridos leves': 'Feridos leves', 'Feridos Graves': 'Feridos Graves', 'Veículos': 'Veículos', 'Rodovia': 'Rodovia', 'UF': 'UF', 'UPS': 'UPS', });
lyr_Acidentes_BR_contagem_simpl_publi_2.set('fieldAliases', {'fid': 'fid', 'UF': 'UF', 'BR': 'BR', 'km inicial': 'km inicial', 'km final': 'km final', 'Total acidentes': 'Total acidentes', 'Total mortos': 'Total mortos', 'Total feridos graves': 'Total feridos graves', 'Total feridos leves': 'Total feridos leves', 'Total veículos': 'Total veículos', 'Total pessoas': 'Total pessoas', 'Total UPS': 'Total UPS', 'Causa principal': 'Causa principal', 'Fase dia principal': 'Fase dia principal', 'Clima principal': 'Clima principal', });
lyr_Rodovia_base_simplificada_publi_3.set('fieldAliases', {'fid': 'fid', 'id_trecho_': 'id_trecho_', 'BR': 'BR', 'UF': 'UF', 'Local inicial': 'Local inicial', 'local final': 'local final', 'km incial': 'km incial', 'km final': 'km final', 'extensão': 'extensão', 'Sup': 'Sup', 'Obras': 'Obras', 'administração': 'administração', 'ds_superfi': 'ds_superfi', 'Legenda': 'Legenda', 'sg_legenda': 'sg_legenda', 'leg_multim': 'leg_multim', });
lyr_ICM_2026_01_simpl_publ_4.set('fieldAliases', {'fid': 'fid', 'UF': 'UF', 'Rodovia': 'Rodovia', 'Superfície': 'Superfície', 'icm': 'icm', 'Condição da Via': 'Condição da Via', 'km Inicial': 'km Inicial', 'km Final': 'km Final', });
lyr_Limites_estados_simpl_0.set('fieldImages', {'fid': '', 'CD_UF': '', 'NM_UF': '', 'SIGLA_UF': '', 'CD_REGIA': '', 'NM_REGIA': '', 'SIGLA_RG': '', 'AREA_KM2': '', });
lyr_Acidentes_BR_Pontos_publi_1.set('fieldImages', {'fid': 'TextEdit', 'Data': 'DateTime', 'BR': 'TextEdit', 'km': 'TextEdit', 'Município': 'TextEdit', 'Causa Acidente': 'TextEdit', 'Fase do dia': 'TextEdit', 'Clima': 'TextEdit', 'Tipo de pista': 'TextEdit', 'Traçado': 'TextEdit', 'Mortos': 'TextEdit', 'Feridos leves': 'TextEdit', 'Feridos Graves': 'TextEdit', 'Veículos': 'TextEdit', 'Rodovia': 'TextEdit', 'UF': 'TextEdit', 'UPS': 'TextEdit', });
lyr_Acidentes_BR_contagem_simpl_publi_2.set('fieldImages', {'fid': 'TextEdit', 'UF': 'TextEdit', 'BR': 'TextEdit', 'km inicial': 'TextEdit', 'km final': 'TextEdit', 'Total acidentes': 'Range', 'Total mortos': 'Range', 'Total feridos graves': 'Range', 'Total feridos leves': 'Range', 'Total veículos': 'Range', 'Total pessoas': 'Range', 'Total UPS': 'Range', 'Causa principal': 'TextEdit', 'Fase dia principal': 'TextEdit', 'Clima principal': 'TextEdit', });
lyr_Rodovia_base_simplificada_publi_3.set('fieldImages', {'fid': 'TextEdit', 'id_trecho_': 'TextEdit', 'BR': 'TextEdit', 'UF': 'TextEdit', 'Local inicial': 'TextEdit', 'local final': 'TextEdit', 'km incial': 'TextEdit', 'km final': 'TextEdit', 'extensão': 'TextEdit', 'Sup': 'TextEdit', 'Obras': 'TextEdit', 'administração': 'TextEdit', 'ds_superfi': 'TextEdit', 'Legenda': 'TextEdit', 'sg_legenda': 'TextEdit', 'leg_multim': 'TextEdit', });
lyr_ICM_2026_01_simpl_publ_4.set('fieldImages', {'fid': 'TextEdit', 'UF': 'TextEdit', 'Rodovia': 'TextEdit', 'Superfície': 'TextEdit', 'icm': 'TextEdit', 'Condição da Via': 'TextEdit', 'km Inicial': 'TextEdit', 'km Final': 'TextEdit', });
lyr_Limites_estados_simpl_0.set('fieldLabels', {'fid': 'hidden field', 'CD_UF': 'inline label - always visible', 'NM_UF': 'inline label - always visible', 'SIGLA_UF': 'inline label - always visible', 'CD_REGIA': 'inline label - always visible', 'NM_REGIA': 'inline label - always visible', 'SIGLA_RG': 'inline label - always visible', 'AREA_KM2': 'inline label - always visible', });
lyr_Acidentes_BR_Pontos_publi_1.set('fieldLabels', {'fid': 'hidden field', 'Data': 'inline label - always visible', 'BR': 'inline label - always visible', 'km': 'inline label - always visible', 'Município': 'inline label - always visible', 'Causa Acidente': 'inline label - always visible', 'Fase do dia': 'inline label - always visible', 'Clima': 'inline label - always visible', 'Tipo de pista': 'inline label - always visible', 'Traçado': 'inline label - always visible', 'Mortos': 'inline label - always visible', 'Feridos leves': 'inline label - always visible', 'Feridos Graves': 'inline label - always visible', 'Veículos': 'inline label - always visible', 'Rodovia': 'inline label - always visible', 'UF': 'inline label - always visible', 'UPS': 'inline label - always visible', });
lyr_Acidentes_BR_contagem_simpl_publi_2.set('fieldLabels', {'fid': 'hidden field', 'UF': 'inline label - always visible', 'BR': 'inline label - always visible', 'km inicial': 'inline label - always visible', 'km final': 'inline label - always visible', 'Total acidentes': 'inline label - always visible', 'Total mortos': 'inline label - always visible', 'Total feridos graves': 'inline label - always visible', 'Total feridos leves': 'inline label - always visible', 'Total veículos': 'inline label - always visible', 'Total pessoas': 'inline label - always visible', 'Total UPS': 'inline label - always visible', 'Causa principal': 'inline label - always visible', 'Fase dia principal': 'inline label - always visible', 'Clima principal': 'inline label - always visible', });
lyr_Rodovia_base_simplificada_publi_3.set('fieldLabels', {'fid': 'hidden field', 'id_trecho_': 'inline label - always visible', 'BR': 'inline label - always visible', 'UF': 'inline label - always visible', 'Local inicial': 'inline label - always visible', 'local final': 'inline label - always visible', 'km incial': 'inline label - always visible', 'km final': 'inline label - always visible', 'extensão': 'inline label - always visible', 'Sup': 'inline label - always visible', 'Obras': 'inline label - always visible', 'administração': 'inline label - always visible', 'ds_superfi': 'inline label - always visible', 'Legenda': 'inline label - always visible', 'sg_legenda': 'inline label - always visible', 'leg_multim': 'inline label - always visible', });
lyr_ICM_2026_01_simpl_publ_4.set('fieldLabels', {'fid': 'hidden field', 'UF': 'inline label - always visible', 'Rodovia': 'inline label - always visible', 'Superfície': 'inline label - always visible', 'icm': 'inline label - always visible', 'Condição da Via': 'inline label - always visible', 'km Inicial': 'inline label - always visible', 'km Final': 'inline label - always visible', });
lyr_ICM_2026_01_simpl_publ_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});