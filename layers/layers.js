var wms_layers = [];

var format_LIMITESUF_0 = new ol.format.GeoJSON();
var features_LIMITESUF_0 = format_LIMITESUF_0.readFeatures(json_LIMITESUF_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITESUF_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITESUF_0.addFeatures(features_LIMITESUF_0);
var lyr_LIMITESUF_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITESUF_0, 
                style: style_LIMITESUF_0,
                popuplayertitle: 'LIMITES UF',
                interactive: true,
                title: '<img src="styles/legend/LIMITESUF_0.png" /> LIMITES UF'
            });
var format_ACIDENTES_1 = new ol.format.GeoJSON();
var features_ACIDENTES_1 = format_ACIDENTES_1.readFeatures(json_ACIDENTES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACIDENTES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACIDENTES_1.addFeatures(features_ACIDENTES_1);
cluster_ACIDENTES_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ACIDENTES_1
});
var lyr_ACIDENTES_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ACIDENTES_1, 
                style: style_ACIDENTES_1,
                popuplayertitle: 'ACIDENTES',
                interactive: true,
    title: 'ACIDENTES<br />\
    <img src="styles/legend/ACIDENTES_1_0.png" /> 0<br />\
    <img src="styles/legend/ACIDENTES_1_1.png" /> <br />' });
var format_CONTAGEMACIDENTESPORTRECHO_2 = new ol.format.GeoJSON();
var features_CONTAGEMACIDENTESPORTRECHO_2 = format_CONTAGEMACIDENTESPORTRECHO_2.readFeatures(json_CONTAGEMACIDENTESPORTRECHO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTAGEMACIDENTESPORTRECHO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTAGEMACIDENTESPORTRECHO_2.addFeatures(features_CONTAGEMACIDENTESPORTRECHO_2);
var lyr_CONTAGEMACIDENTESPORTRECHO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTAGEMACIDENTESPORTRECHO_2, 
                style: style_CONTAGEMACIDENTESPORTRECHO_2,
                popuplayertitle: 'CONTAGEM ACIDENTES POR TRECHO',
                interactive: true,
    title: 'CONTAGEM ACIDENTES POR TRECHO<br />\
    <img src="styles/legend/CONTAGEMACIDENTESPORTRECHO_2_0.png" /> 0 - 38<br />\
    <img src="styles/legend/CONTAGEMACIDENTESPORTRECHO_2_1.png" /> 38 - 125<br />\
    <img src="styles/legend/CONTAGEMACIDENTESPORTRECHO_2_2.png" /> 125 - 267<br />\
    <img src="styles/legend/CONTAGEMACIDENTESPORTRECHO_2_3.png" /> 267 - 556<br />' });
var format_RODOVIASSNVNACIONAL_3 = new ol.format.GeoJSON();
var features_RODOVIASSNVNACIONAL_3 = format_RODOVIASSNVNACIONAL_3.readFeatures(json_RODOVIASSNVNACIONAL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RODOVIASSNVNACIONAL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RODOVIASSNVNACIONAL_3.addFeatures(features_RODOVIASSNVNACIONAL_3);
var lyr_RODOVIASSNVNACIONAL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RODOVIASSNVNACIONAL_3, 
                style: style_RODOVIASSNVNACIONAL_3,
                popuplayertitle: 'RODOVIAS SNV NACIONAL',
                interactive: true,
    title: 'RODOVIAS SNV NACIONAL<br />\
    <img src="styles/legend/RODOVIASSNVNACIONAL_3_0.png" /> Concessão Federal<br />\
    <img src="styles/legend/RODOVIASSNVNACIONAL_3_1.png" /> Convênio Adm.Federal/Estadual<br />\
    <img src="styles/legend/RODOVIASSNVNACIONAL_3_2.png" /> Convênio Adm.Federal/Municipal<br />\
    <img src="styles/legend/RODOVIASSNVNACIONAL_3_3.png" /> Distrital<br />\
    <img src="styles/legend/RODOVIASSNVNACIONAL_3_4.png" /> Estadual<br />\
    <img src="styles/legend/RODOVIASSNVNACIONAL_3_5.png" /> Federal<br />\
    <img src="styles/legend/RODOVIASSNVNACIONAL_3_6.png" /> Municipal<br />\
    <img src="styles/legend/RODOVIASSNVNACIONAL_3_7.png" /> <br />' });
var format_CONDIODAMANUTENO012026BOM_4 = new ol.format.GeoJSON();
var features_CONDIODAMANUTENO012026BOM_4 = format_CONDIODAMANUTENO012026BOM_4.readFeatures(json_CONDIODAMANUTENO012026BOM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONDIODAMANUTENO012026BOM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONDIODAMANUTENO012026BOM_4.addFeatures(features_CONDIODAMANUTENO012026BOM_4);
var lyr_CONDIODAMANUTENO012026BOM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONDIODAMANUTENO012026BOM_4, 
                style: style_CONDIODAMANUTENO012026BOM_4,
                popuplayertitle: 'CONDIÇÃO DA MANUTENÇÃO 01/2026 - BOM',
                interactive: true,
    title: 'CONDIÇÃO DA MANUTENÇÃO 01/2026 - BOM<br />\
    <img src="styles/legend/CONDIODAMANUTENO012026BOM_4_0.png" /> BOM<br />' });
var format_CONDIODAMANUTENO012026PSSIMO_5 = new ol.format.GeoJSON();
var features_CONDIODAMANUTENO012026PSSIMO_5 = format_CONDIODAMANUTENO012026PSSIMO_5.readFeatures(json_CONDIODAMANUTENO012026PSSIMO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONDIODAMANUTENO012026PSSIMO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONDIODAMANUTENO012026PSSIMO_5.addFeatures(features_CONDIODAMANUTENO012026PSSIMO_5);
var lyr_CONDIODAMANUTENO012026PSSIMO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONDIODAMANUTENO012026PSSIMO_5, 
                style: style_CONDIODAMANUTENO012026PSSIMO_5,
                popuplayertitle: 'CONDIÇÃO DA MANUTENÇÃO 01/2026 - PÉSSIMO',
                interactive: true,
    title: 'CONDIÇÃO DA MANUTENÇÃO 01/2026 - PÉSSIMO<br />\
    <img src="styles/legend/CONDIODAMANUTENO012026PSSIMO_5_0.png" /> PÉSSIMO<br />' });
var format_CONDIODAMANUTENO012026REGULAR_6 = new ol.format.GeoJSON();
var features_CONDIODAMANUTENO012026REGULAR_6 = format_CONDIODAMANUTENO012026REGULAR_6.readFeatures(json_CONDIODAMANUTENO012026REGULAR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONDIODAMANUTENO012026REGULAR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONDIODAMANUTENO012026REGULAR_6.addFeatures(features_CONDIODAMANUTENO012026REGULAR_6);
var lyr_CONDIODAMANUTENO012026REGULAR_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONDIODAMANUTENO012026REGULAR_6, 
                style: style_CONDIODAMANUTENO012026REGULAR_6,
                popuplayertitle: 'CONDIÇÃO DA MANUTENÇÃO 01/2026 - REGULAR',
                interactive: true,
    title: 'CONDIÇÃO DA MANUTENÇÃO 01/2026 - REGULAR<br />\
    <img src="styles/legend/CONDIODAMANUTENO012026REGULAR_6_0.png" /> REGULAR<br />' });
var format_CONDIODAMANUTENO012026RUIM_7 = new ol.format.GeoJSON();
var features_CONDIODAMANUTENO012026RUIM_7 = format_CONDIODAMANUTENO012026RUIM_7.readFeatures(json_CONDIODAMANUTENO012026RUIM_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONDIODAMANUTENO012026RUIM_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONDIODAMANUTENO012026RUIM_7.addFeatures(features_CONDIODAMANUTENO012026RUIM_7);
var lyr_CONDIODAMANUTENO012026RUIM_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONDIODAMANUTENO012026RUIM_7, 
                style: style_CONDIODAMANUTENO012026RUIM_7,
                popuplayertitle: 'CONDIÇÃO DA MANUTENÇÃO 01/2026 - RUIM',
                interactive: true,
    title: 'CONDIÇÃO DA MANUTENÇÃO 01/2026 - RUIM<br />\
    <img src="styles/legend/CONDIODAMANUTENO012026RUIM_7_0.png" /> RUIM<br />' });
var group_Preparao_publi_Nacional = new ol.layer.Group({
                                layers: [lyr_LIMITESUF_0,lyr_ACIDENTES_1,lyr_CONTAGEMACIDENTESPORTRECHO_2,lyr_RODOVIASSNVNACIONAL_3,lyr_CONDIODAMANUTENO012026BOM_4,lyr_CONDIODAMANUTENO012026PSSIMO_5,lyr_CONDIODAMANUTENO012026REGULAR_6,lyr_CONDIODAMANUTENO012026RUIM_7,],
                                fold: 'open',
                                title: 'Preparação_publi_Nacional'});

lyr_LIMITESUF_0.setVisible(true);lyr_ACIDENTES_1.setVisible(false);lyr_CONTAGEMACIDENTESPORTRECHO_2.setVisible(true);lyr_RODOVIASSNVNACIONAL_3.setVisible(true);lyr_CONDIODAMANUTENO012026BOM_4.setVisible(false);lyr_CONDIODAMANUTENO012026PSSIMO_5.setVisible(false);lyr_CONDIODAMANUTENO012026REGULAR_6.setVisible(false);lyr_CONDIODAMANUTENO012026RUIM_7.setVisible(false);
var layersList = [group_Preparao_publi_Nacional];
lyr_LIMITESUF_0.set('fieldAliases', {'fid': 'fid', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', });
lyr_ACIDENTES_1.set('fieldAliases', {'fid': 'fid', 'Data': 'Data', 'BR': 'BR', 'km': 'km', 'Município': 'Município', 'Causa Acidente': 'Causa Acidente', 'Fase do dia': 'Fase do dia', 'Clima': 'Clima', 'Tipo de pista': 'Tipo de pista', 'Traçado': 'Traçado', 'Mortos': 'Mortos', 'Feridos leves': 'Feridos leves', 'Feridos Graves': 'Feridos Graves', 'Veículos': 'Veículos', 'Rodovia': 'Rodovia', 'UF': 'UF', 'UPS': 'UPS', });
lyr_CONTAGEMACIDENTESPORTRECHO_2.set('fieldAliases', {'fid': 'fid', 'UF': 'UF', 'BR': 'BR', 'km inicial': 'km inicial', 'km final': 'km final', 'Total acidentes': 'Total acidentes', 'Total mortos': 'Total mortos', 'Total feridos graves': 'Total feridos graves', 'Total feridos leves': 'Total feridos leves', 'Total veículos': 'Total veículos', 'Total pessoas': 'Total pessoas', 'Total UPS': 'Total UPS', 'Causa principal': 'Causa principal', 'Fase dia principal': 'Fase dia principal', 'Clima principal': 'Clima principal', });
lyr_RODOVIASSNVNACIONAL_3.set('fieldAliases', {'fid': 'fid', 'ID Trecho': 'ID Trecho', 'BR': 'BR', 'UF': 'UF', 'Local inicial': 'Local inicial', 'Local final': 'Local final', 'km incial': 'km incial', 'km final': 'km final', 'extensão': 'extensão', 'Superfície': 'Superfície', 'Administração': 'Administração', 'Descrição': 'Descrição', });
lyr_CONDIODAMANUTENO012026BOM_4.set('fieldAliases', {'fid': 'fid', 'uf': 'uf', 'rodovia': 'rodovia', 'ano': 'ano', 'mes': 'mes', 'km': 'km', 'km inicial': 'km inicial', 'km final': 'km final', 'Condição da Manutenção': 'Condição da Manutenção', });
lyr_CONDIODAMANUTENO012026PSSIMO_5.set('fieldAliases', {'fid': 'fid', 'uf': 'uf', 'rodovia': 'rodovia', 'ano': 'ano', 'mes': 'mes', 'km': 'km', 'km inicial': 'km inicial', 'km final': 'km final', 'Condição da Manutenção': 'Condição da Manutenção', });
lyr_CONDIODAMANUTENO012026REGULAR_6.set('fieldAliases', {'fid': 'fid', 'uf': 'uf', 'rodovia': 'rodovia', 'ano': 'ano', 'mes': 'mes', 'km': 'km', 'km inicial': 'km inicial', 'km final': 'km final', 'Condição da Manutenção': 'Condição da Manutenção', });
lyr_CONDIODAMANUTENO012026RUIM_7.set('fieldAliases', {'fid': 'fid', 'uf': 'uf', 'rodovia': 'rodovia', 'ano': 'ano', 'mes': 'mes', 'km': 'km', 'km inicial': 'km inicial', 'km final': 'km final', 'Condição da Manutenção': 'Condição da Manutenção', });
lyr_LIMITESUF_0.set('fieldImages', {'fid': '', 'CD_UF': '', 'NM_UF': '', 'SIGLA_UF': '', 'CD_REGIA': '', 'NM_REGIA': '', 'SIGLA_RG': '', 'AREA_KM2': '', });
lyr_ACIDENTES_1.set('fieldImages', {'fid': 'TextEdit', 'Data': 'DateTime', 'BR': 'TextEdit', 'km': 'TextEdit', 'Município': 'TextEdit', 'Causa Acidente': 'TextEdit', 'Fase do dia': 'TextEdit', 'Clima': 'TextEdit', 'Tipo de pista': 'TextEdit', 'Traçado': 'TextEdit', 'Mortos': 'TextEdit', 'Feridos leves': 'TextEdit', 'Feridos Graves': 'TextEdit', 'Veículos': 'TextEdit', 'Rodovia': 'TextEdit', 'UF': 'TextEdit', 'UPS': 'TextEdit', });
lyr_CONTAGEMACIDENTESPORTRECHO_2.set('fieldImages', {'fid': 'TextEdit', 'UF': 'TextEdit', 'BR': 'TextEdit', 'km inicial': 'TextEdit', 'km final': 'TextEdit', 'Total acidentes': 'Range', 'Total mortos': 'Range', 'Total feridos graves': 'Range', 'Total feridos leves': 'Range', 'Total veículos': 'Range', 'Total pessoas': 'Range', 'Total UPS': 'Range', 'Causa principal': 'TextEdit', 'Fase dia principal': 'TextEdit', 'Clima principal': 'TextEdit', });
lyr_RODOVIASSNVNACIONAL_3.set('fieldImages', {'fid': 'TextEdit', 'ID Trecho': 'TextEdit', 'BR': 'TextEdit', 'UF': 'TextEdit', 'Local inicial': 'TextEdit', 'Local final': 'TextEdit', 'km incial': 'TextEdit', 'km final': 'TextEdit', 'extensão': 'TextEdit', 'Superfície': 'TextEdit', 'Administração': 'TextEdit', 'Descrição': 'TextEdit', });
lyr_CONDIODAMANUTENO012026BOM_4.set('fieldImages', {'fid': 'TextEdit', 'uf': 'TextEdit', 'rodovia': 'TextEdit', 'ano': 'TextEdit', 'mes': 'TextEdit', 'km': 'TextEdit', 'km inicial': 'TextEdit', 'km final': 'TextEdit', 'Condição da Manutenção': 'TextEdit', });
lyr_CONDIODAMANUTENO012026PSSIMO_5.set('fieldImages', {'fid': 'TextEdit', 'uf': 'TextEdit', 'rodovia': 'TextEdit', 'ano': 'TextEdit', 'mes': 'TextEdit', 'km': 'TextEdit', 'km inicial': 'TextEdit', 'km final': 'TextEdit', 'Condição da Manutenção': 'TextEdit', });
lyr_CONDIODAMANUTENO012026REGULAR_6.set('fieldImages', {'fid': 'TextEdit', 'uf': 'TextEdit', 'rodovia': 'TextEdit', 'ano': 'TextEdit', 'mes': 'TextEdit', 'km': 'TextEdit', 'km inicial': 'TextEdit', 'km final': 'TextEdit', 'Condição da Manutenção': 'TextEdit', });
lyr_CONDIODAMANUTENO012026RUIM_7.set('fieldImages', {'fid': 'TextEdit', 'uf': 'TextEdit', 'rodovia': 'TextEdit', 'ano': 'TextEdit', 'mes': 'TextEdit', 'km': 'TextEdit', 'km inicial': 'TextEdit', 'km final': 'TextEdit', 'Condição da Manutenção': 'TextEdit', });
lyr_LIMITESUF_0.set('fieldLabels', {'fid': 'hidden field', 'CD_UF': 'inline label - always visible', 'NM_UF': 'inline label - always visible', 'SIGLA_UF': 'inline label - always visible', 'CD_REGIA': 'inline label - always visible', 'NM_REGIA': 'inline label - always visible', 'SIGLA_RG': 'inline label - always visible', 'AREA_KM2': 'inline label - always visible', });
lyr_ACIDENTES_1.set('fieldLabels', {'fid': 'hidden field', 'Data': 'inline label - always visible', 'BR': 'inline label - always visible', 'km': 'inline label - always visible', 'Município': 'inline label - always visible', 'Causa Acidente': 'inline label - always visible', 'Fase do dia': 'inline label - always visible', 'Clima': 'inline label - always visible', 'Tipo de pista': 'inline label - always visible', 'Traçado': 'inline label - always visible', 'Mortos': 'inline label - always visible', 'Feridos leves': 'inline label - always visible', 'Feridos Graves': 'inline label - always visible', 'Veículos': 'inline label - always visible', 'Rodovia': 'inline label - always visible', 'UF': 'inline label - always visible', 'UPS': 'inline label - always visible', });
lyr_CONTAGEMACIDENTESPORTRECHO_2.set('fieldLabels', {'fid': 'hidden field', 'UF': 'inline label - always visible', 'BR': 'inline label - always visible', 'km inicial': 'inline label - always visible', 'km final': 'inline label - always visible', 'Total acidentes': 'inline label - always visible', 'Total mortos': 'inline label - always visible', 'Total feridos graves': 'inline label - always visible', 'Total feridos leves': 'inline label - always visible', 'Total veículos': 'inline label - always visible', 'Total pessoas': 'inline label - always visible', 'Total UPS': 'inline label - always visible', 'Causa principal': 'inline label - always visible', 'Fase dia principal': 'inline label - always visible', 'Clima principal': 'inline label - always visible', });
lyr_RODOVIASSNVNACIONAL_3.set('fieldLabels', {'fid': 'hidden field', 'ID Trecho': 'inline label - always visible', 'BR': 'inline label - always visible', 'UF': 'inline label - always visible', 'Local inicial': 'inline label - always visible', 'Local final': 'inline label - always visible', 'km incial': 'inline label - always visible', 'km final': 'inline label - always visible', 'extensão': 'inline label - always visible', 'Superfície': 'inline label - always visible', 'Administração': 'inline label - always visible', 'Descrição': 'inline label - always visible', });
lyr_CONDIODAMANUTENO012026BOM_4.set('fieldLabels', {'fid': 'hidden field', 'uf': 'inline label - always visible', 'rodovia': 'inline label - always visible', 'ano': 'inline label - always visible', 'mes': 'inline label - always visible', 'km': 'inline label - always visible', 'km inicial': 'inline label - always visible', 'km final': 'inline label - always visible', 'Condição da Manutenção': 'inline label - always visible', });
lyr_CONDIODAMANUTENO012026PSSIMO_5.set('fieldLabels', {'fid': 'hidden field', 'uf': 'inline label - always visible', 'rodovia': 'inline label - always visible', 'ano': 'inline label - always visible', 'mes': 'inline label - always visible', 'km': 'inline label - always visible', 'km inicial': 'inline label - always visible', 'km final': 'inline label - always visible', 'Condição da Manutenção': 'inline label - always visible', });
lyr_CONDIODAMANUTENO012026REGULAR_6.set('fieldLabels', {'fid': 'hidden field', 'uf': 'inline label - always visible', 'rodovia': 'inline label - always visible', 'ano': 'inline label - always visible', 'mes': 'inline label - always visible', 'km': 'inline label - always visible', 'km inicial': 'inline label - always visible', 'km final': 'inline label - always visible', 'Condição da Manutenção': 'inline label - always visible', });
lyr_CONDIODAMANUTENO012026RUIM_7.set('fieldLabels', {'fid': 'hidden field', 'uf': 'inline label - always visible', 'rodovia': 'inline label - always visible', 'ano': 'inline label - always visible', 'mes': 'inline label - always visible', 'km': 'inline label - always visible', 'km inicial': 'inline label - always visible', 'km final': 'inline label - always visible', 'Condição da Manutenção': 'inline label - always visible', });
lyr_CONDIODAMANUTENO012026RUIM_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});