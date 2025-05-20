var wms_layers = [];


        var lyr_Lightgraymap_0 = new ol.layer.Tile({
            'title': 'Light gray map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_TotalAPWTonsyr_1 = new ol.format.GeoJSON();
var features_TotalAPWTonsyr_1 = format_TotalAPWTonsyr_1.readFeatures(json_TotalAPWTonsyr_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TotalAPWTonsyr_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotalAPWTonsyr_1.addFeatures(features_TotalAPWTonsyr_1);
var lyr_TotalAPWTonsyr_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TotalAPWTonsyr_1, 
                style: style_TotalAPWTonsyr_1,
                popuplayertitle: "Total APW (Tons/yr)",
                interactive: true,
    title: 'Total APW (Tons/yr)<br />\
    <img src="styles/legend/TotalAPWTonsyr_1_0.png" /> 20 - 3820<br />\
    <img src="styles/legend/TotalAPWTonsyr_1_1.png" /> 3820 - 9900<br />\
    <img src="styles/legend/TotalAPWTonsyr_1_2.png" /> 9900 - 17960<br />\
    <img src="styles/legend/TotalAPWTonsyr_1_3.png" /> 17960 - 35920<br />\
    <img src="styles/legend/TotalAPWTonsyr_1_4.png" /> 35920 - 67110<br />'
        });
var format_ContainersTonsyr_2 = new ol.format.GeoJSON();
var features_ContainersTonsyr_2 = format_ContainersTonsyr_2.readFeatures(json_ContainersTonsyr_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContainersTonsyr_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContainersTonsyr_2.addFeatures(features_ContainersTonsyr_2);
var lyr_ContainersTonsyr_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContainersTonsyr_2, 
                style: style_ContainersTonsyr_2,
                popuplayertitle: "Containers (Tons/yr)",
                interactive: true,
    title: 'Containers (Tons/yr)<br />\
    <img src="styles/legend/ContainersTonsyr_2_0.png" /> 0 - 90<br />\
    <img src="styles/legend/ContainersTonsyr_2_1.png" /> 90 - 270<br />\
    <img src="styles/legend/ContainersTonsyr_2_2.png" /> 270 - 560<br />\
    <img src="styles/legend/ContainersTonsyr_2_3.png" /> 560 - 970<br />\
    <img src="styles/legend/ContainersTonsyr_2_4.png" /> 970 - 1490<br />'
        });
var format_SilageTonsyr_3 = new ol.format.GeoJSON();
var features_SilageTonsyr_3 = format_SilageTonsyr_3.readFeatures(json_SilageTonsyr_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SilageTonsyr_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SilageTonsyr_3.addFeatures(features_SilageTonsyr_3);
var lyr_SilageTonsyr_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SilageTonsyr_3, 
                style: style_SilageTonsyr_3,
                popuplayertitle: "Silage (Tons/yr)",
                interactive: true,
    title: 'Silage (Tons/yr)<br />\
    <img src="styles/legend/SilageTonsyr_3_0.png" /> 0 - 2590<br />\
    <img src="styles/legend/SilageTonsyr_3_1.png" /> 2590 - 6260<br />\
    <img src="styles/legend/SilageTonsyr_3_2.png" /> 6260 - 9760<br />\
    <img src="styles/legend/SilageTonsyr_3_3.png" /> 9760 - 15840<br />\
    <img src="styles/legend/SilageTonsyr_3_4.png" /> 15840 - 23740<br />'
        });
var format_BagsTonsyr_4 = new ol.format.GeoJSON();
var features_BagsTonsyr_4 = format_BagsTonsyr_4.readFeatures(json_BagsTonsyr_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BagsTonsyr_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BagsTonsyr_4.addFeatures(features_BagsTonsyr_4);
var lyr_BagsTonsyr_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BagsTonsyr_4, 
                style: style_BagsTonsyr_4,
                popuplayertitle: "Bags (Tons/yr)",
                interactive: true,
    title: 'Bags (Tons/yr)<br />\
    <img src="styles/legend/BagsTonsyr_4_0.png" /> 0 - 530<br />\
    <img src="styles/legend/BagsTonsyr_4_1.png" /> 530 - 1320<br />\
    <img src="styles/legend/BagsTonsyr_4_2.png" /> 1320 - 2240<br />\
    <img src="styles/legend/BagsTonsyr_4_3.png" /> 2240 - 3670<br />\
    <img src="styles/legend/BagsTonsyr_4_4.png" /> 3670 - 5130<br />'
        });
var format_IrrigationpipesTonsyr_5 = new ol.format.GeoJSON();
var features_IrrigationpipesTonsyr_5 = format_IrrigationpipesTonsyr_5.readFeatures(json_IrrigationpipesTonsyr_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IrrigationpipesTonsyr_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrrigationpipesTonsyr_5.addFeatures(features_IrrigationpipesTonsyr_5);
var lyr_IrrigationpipesTonsyr_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrrigationpipesTonsyr_5, 
                style: style_IrrigationpipesTonsyr_5,
                popuplayertitle: "Irrigation pipes (Tons/yr)",
                interactive: true,
    title: 'Irrigation pipes (Tons/yr)<br />\
    <img src="styles/legend/IrrigationpipesTonsyr_5_0.png" /> 0 - 1440<br />\
    <img src="styles/legend/IrrigationpipesTonsyr_5_1.png" /> 1440 - 4370<br />\
    <img src="styles/legend/IrrigationpipesTonsyr_5_2.png" /> 4370 - 9180<br />\
    <img src="styles/legend/IrrigationpipesTonsyr_5_3.png" /> 9180 - 15410<br />\
    <img src="styles/legend/IrrigationpipesTonsyr_5_4.png" /> 15410 - 25750<br />'
        });
var format_NetsTonsyr_6 = new ol.format.GeoJSON();
var features_NetsTonsyr_6 = format_NetsTonsyr_6.readFeatures(json_NetsTonsyr_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NetsTonsyr_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NetsTonsyr_6.addFeatures(features_NetsTonsyr_6);
var lyr_NetsTonsyr_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NetsTonsyr_6, 
                style: style_NetsTonsyr_6,
                popuplayertitle: "Nets (Tons/yr)",
                interactive: true,
    title: 'Nets (Tons/yr)<br />\
    <img src="styles/legend/NetsTonsyr_6_0.png" /> 0 - 900<br />\
    <img src="styles/legend/NetsTonsyr_6_1.png" /> 900 - 2690<br />\
    <img src="styles/legend/NetsTonsyr_6_2.png" /> 2690 - 5740<br />\
    <img src="styles/legend/NetsTonsyr_6_3.png" /> 5740 - 10140<br />\
    <img src="styles/legend/NetsTonsyr_6_4.png" /> 10140 - 14080<br />'
        });
var format_TunnelsTonsyr_7 = new ol.format.GeoJSON();
var features_TunnelsTonsyr_7 = format_TunnelsTonsyr_7.readFeatures(json_TunnelsTonsyr_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TunnelsTonsyr_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TunnelsTonsyr_7.addFeatures(features_TunnelsTonsyr_7);
var lyr_TunnelsTonsyr_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TunnelsTonsyr_7, 
                style: style_TunnelsTonsyr_7,
                popuplayertitle: "Tunnels (Tons/yr)",
                interactive: true,
    title: 'Tunnels (Tons/yr)<br />\
    <img src="styles/legend/TunnelsTonsyr_7_0.png" /> 0 - 254<br />\
    <img src="styles/legend/TunnelsTonsyr_7_1.png" /> 254 - 1232<br />\
    <img src="styles/legend/TunnelsTonsyr_7_2.png" /> 1232 - 2575<br />\
    <img src="styles/legend/TunnelsTonsyr_7_3.png" /> 2575 - 4798<br />\
    <img src="styles/legend/TunnelsTonsyr_7_4.png" /> 4798 - 6194<br />'
        });
var format_MulchingTonsyr_8 = new ol.format.GeoJSON();
var features_MulchingTonsyr_8 = format_MulchingTonsyr_8.readFeatures(json_MulchingTonsyr_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MulchingTonsyr_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MulchingTonsyr_8.addFeatures(features_MulchingTonsyr_8);
var lyr_MulchingTonsyr_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MulchingTonsyr_8, 
                style: style_MulchingTonsyr_8,
                popuplayertitle: "Mulching (Tons/yr)",
                interactive: true,
    title: 'Mulching (Tons/yr)<br />\
    <img src="styles/legend/MulchingTonsyr_8_0.png" /> 0 - 190<br />\
    <img src="styles/legend/MulchingTonsyr_8_1.png" /> 190 - 560<br />\
    <img src="styles/legend/MulchingTonsyr_8_2.png" /> 560 - 1120<br />\
    <img src="styles/legend/MulchingTonsyr_8_3.png" /> 1120 - 2090<br />\
    <img src="styles/legend/MulchingTonsyr_8_4.png" /> 2090 - 3050<br />'
        });
var format_FilmsTonsyr_9 = new ol.format.GeoJSON();
var features_FilmsTonsyr_9 = format_FilmsTonsyr_9.readFeatures(json_FilmsTonsyr_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FilmsTonsyr_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FilmsTonsyr_9.addFeatures(features_FilmsTonsyr_9);
var lyr_FilmsTonsyr_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FilmsTonsyr_9, 
                style: style_FilmsTonsyr_9,
                popuplayertitle: "Films (Tons/yr)",
                interactive: true,
    title: 'Films (Tons/yr)<br />\
    <img src="styles/legend/FilmsTonsyr_9_0.png" /> 0 - 20<br />\
    <img src="styles/legend/FilmsTonsyr_9_1.png" /> 20 - 90<br />\
    <img src="styles/legend/FilmsTonsyr_9_2.png" /> 90 - 190<br />\
    <img src="styles/legend/FilmsTonsyr_9_3.png" /> 190 - 390<br />\
    <img src="styles/legend/FilmsTonsyr_9_4.png" /> 390 - 700<br />'
        });
var format_UtilizedAgriculturalAreaha_10 = new ol.format.GeoJSON();
var features_UtilizedAgriculturalAreaha_10 = format_UtilizedAgriculturalAreaha_10.readFeatures(json_UtilizedAgriculturalAreaha_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UtilizedAgriculturalAreaha_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UtilizedAgriculturalAreaha_10.addFeatures(features_UtilizedAgriculturalAreaha_10);
var lyr_UtilizedAgriculturalAreaha_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UtilizedAgriculturalAreaha_10, 
                style: style_UtilizedAgriculturalAreaha_10,
                popuplayertitle: "Utilized Agricultural Area (ha)",
                interactive: true,
    title: 'Utilized Agricultural Area (ha)<br />\
    <img src="styles/legend/UtilizedAgriculturalAreaha_10_0.png" /> 1100 - 213800<br />\
    <img src="styles/legend/UtilizedAgriculturalAreaha_10_1.png" /> 213800 - 575100<br />\
    <img src="styles/legend/UtilizedAgriculturalAreaha_10_2.png" /> 575100 - 965300<br />\
    <img src="styles/legend/UtilizedAgriculturalAreaha_10_3.png" /> 965300 - 1914200<br />\
    <img src="styles/legend/UtilizedAgriculturalAreaha_10_4.png" /> 1914200 - 3046900<br />'
        });
var format_TotalAPWTonsyr_11 = new ol.format.GeoJSON();
var features_TotalAPWTonsyr_11 = format_TotalAPWTonsyr_11.readFeatures(json_TotalAPWTonsyr_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TotalAPWTonsyr_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotalAPWTonsyr_11.addFeatures(features_TotalAPWTonsyr_11);
var lyr_TotalAPWTonsyr_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TotalAPWTonsyr_11, 
                style: style_TotalAPWTonsyr_11,
                popuplayertitle: "Total APW (Tons/yr)",
                interactive: true,
    title: 'Total APW (Tons/yr)<br />\
    <img src="styles/legend/TotalAPWTonsyr_11_0.png" /> 150 - 7000<br />\
    <img src="styles/legend/TotalAPWTonsyr_11_1.png" /> 7000 - 23600<br />\
    <img src="styles/legend/TotalAPWTonsyr_11_2.png" /> 23600 - 54500<br />\
    <img src="styles/legend/TotalAPWTonsyr_11_3.png" /> 54500 - 182900<br />\
    <img src="styles/legend/TotalAPWTonsyr_11_4.png" /> 182900 - 323900<br />'
        });
var format_ContainersTonsyr_12 = new ol.format.GeoJSON();
var features_ContainersTonsyr_12 = format_ContainersTonsyr_12.readFeatures(json_ContainersTonsyr_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContainersTonsyr_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContainersTonsyr_12.addFeatures(features_ContainersTonsyr_12);
var lyr_ContainersTonsyr_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContainersTonsyr_12, 
                style: style_ContainersTonsyr_12,
                popuplayertitle: "Containers (Tons/yr)",
                interactive: true,
    title: 'Containers (Tons/yr)<br />\
    <img src="styles/legend/ContainersTonsyr_12_0.png" /> 0 - 250<br />\
    <img src="styles/legend/ContainersTonsyr_12_1.png" /> 250 - 680<br />\
    <img src="styles/legend/ContainersTonsyr_12_2.png" /> 680 - 1200<br />\
    <img src="styles/legend/ContainersTonsyr_12_3.png" /> 1200 - 2200<br />\
    <img src="styles/legend/ContainersTonsyr_12_4.png" /> 2200 - 5040<br />'
        });
var format_SilageTonsyr_13 = new ol.format.GeoJSON();
var features_SilageTonsyr_13 = format_SilageTonsyr_13.readFeatures(json_SilageTonsyr_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SilageTonsyr_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SilageTonsyr_13.addFeatures(features_SilageTonsyr_13);
var lyr_SilageTonsyr_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SilageTonsyr_13, 
                style: style_SilageTonsyr_13,
                popuplayertitle: "Silage (Tons/yr)",
                interactive: true,
    title: 'Silage (Tons/yr)<br />\
    <img src="styles/legend/SilageTonsyr_13_0.png" /> 0 - 283<br />\
    <img src="styles/legend/SilageTonsyr_13_1.png" /> 283 - 846<br />\
    <img src="styles/legend/SilageTonsyr_13_2.png" /> 846 - 2798<br />\
    <img src="styles/legend/SilageTonsyr_13_3.png" /> 2798 - 5455<br />\
    <img src="styles/legend/SilageTonsyr_13_4.png" /> 5455 - 8367<br />'
        });
var format_BagsTonsyr_14 = new ol.format.GeoJSON();
var features_BagsTonsyr_14 = format_BagsTonsyr_14.readFeatures(json_BagsTonsyr_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BagsTonsyr_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BagsTonsyr_14.addFeatures(features_BagsTonsyr_14);
var lyr_BagsTonsyr_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BagsTonsyr_14, 
                style: style_BagsTonsyr_14,
                popuplayertitle: "Bags (Tons/yr)",
                interactive: true,
    title: 'Bags (Tons/yr)<br />\
    <img src="styles/legend/BagsTonsyr_14_0.png" /> 0 - 1350<br />\
    <img src="styles/legend/BagsTonsyr_14_1.png" /> 1350 - 4410<br />\
    <img src="styles/legend/BagsTonsyr_14_2.png" /> 4410 - 9790<br />\
    <img src="styles/legend/BagsTonsyr_14_3.png" /> 9790 - 19980<br />\
    <img src="styles/legend/BagsTonsyr_14_4.png" /> 19980 - 28990<br />'
        });
var format_IrrigationpipesTonsyr_15 = new ol.format.GeoJSON();
var features_IrrigationpipesTonsyr_15 = format_IrrigationpipesTonsyr_15.readFeatures(json_IrrigationpipesTonsyr_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IrrigationpipesTonsyr_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrrigationpipesTonsyr_15.addFeatures(features_IrrigationpipesTonsyr_15);
var lyr_IrrigationpipesTonsyr_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrrigationpipesTonsyr_15, 
                style: style_IrrigationpipesTonsyr_15,
                popuplayertitle: "Irrigation pipes (Tons/yr)",
                interactive: true,
    title: 'Irrigation pipes (Tons/yr)<br />\
    <img src="styles/legend/IrrigationpipesTonsyr_15_0.png" /> 0 - 4370<br />\
    <img src="styles/legend/IrrigationpipesTonsyr_15_1.png" /> 4370 - 12150<br />\
    <img src="styles/legend/IrrigationpipesTonsyr_15_2.png" /> 12150 - 26860<br />\
    <img src="styles/legend/IrrigationpipesTonsyr_15_3.png" /> 26860 - 67670<br />\
    <img src="styles/legend/IrrigationpipesTonsyr_15_4.png" /> 67670 - 98150<br />'
        });
var format_NetsTonsyr_16 = new ol.format.GeoJSON();
var features_NetsTonsyr_16 = format_NetsTonsyr_16.readFeatures(json_NetsTonsyr_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NetsTonsyr_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NetsTonsyr_16.addFeatures(features_NetsTonsyr_16);
var lyr_NetsTonsyr_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NetsTonsyr_16, 
                style: style_NetsTonsyr_16,
                popuplayertitle: "Nets (Tons/yr)",
                interactive: true,
    title: 'Nets (Tons/yr)<br />\
    <img src="styles/legend/NetsTonsyr_16_0.png" /> 0 - 3307<br />\
    <img src="styles/legend/NetsTonsyr_16_1.png" /> 3307 - 11739<br />\
    <img src="styles/legend/NetsTonsyr_16_2.png" /> 11739 - 25178<br />\
    <img src="styles/legend/NetsTonsyr_16_3.png" /> 25178 - 80640<br />\
    <img src="styles/legend/NetsTonsyr_16_4.png" /> 80640 - 116640<br />'
        });
var format_TunnelsTonsyr_17 = new ol.format.GeoJSON();
var features_TunnelsTonsyr_17 = format_TunnelsTonsyr_17.readFeatures(json_TunnelsTonsyr_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TunnelsTonsyr_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TunnelsTonsyr_17.addFeatures(features_TunnelsTonsyr_17);
var lyr_TunnelsTonsyr_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TunnelsTonsyr_17, 
                style: style_TunnelsTonsyr_17,
                popuplayertitle: "Tunnels (Tons/yr)",
                interactive: true,
    title: 'Tunnels (Tons/yr)<br />\
    <img src="styles/legend/TunnelsTonsyr_17_0.png" /> 0 - 10<br />\
    <img src="styles/legend/TunnelsTonsyr_17_1.png" /> 10 - 80<br />\
    <img src="styles/legend/TunnelsTonsyr_17_2.png" /> 80 - 240<br />\
    <img src="styles/legend/TunnelsTonsyr_17_3.png" /> 240 - 860<br />\
    <img src="styles/legend/TunnelsTonsyr_17_4.png" /> 860 - 32690<br />'
        });
var format_MulchingfilmsTonsyr_18 = new ol.format.GeoJSON();
var features_MulchingfilmsTonsyr_18 = format_MulchingfilmsTonsyr_18.readFeatures(json_MulchingfilmsTonsyr_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MulchingfilmsTonsyr_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MulchingfilmsTonsyr_18.addFeatures(features_MulchingfilmsTonsyr_18);
var lyr_MulchingfilmsTonsyr_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MulchingfilmsTonsyr_18, 
                style: style_MulchingfilmsTonsyr_18,
                popuplayertitle: "Mulching films (Tons/yr)",
                interactive: true,
    title: 'Mulching films (Tons/yr)<br />\
    <img src="styles/legend/MulchingfilmsTonsyr_18_0.png" /> 0 - 190<br />\
    <img src="styles/legend/MulchingfilmsTonsyr_18_1.png" /> 190 - 640<br />\
    <img src="styles/legend/MulchingfilmsTonsyr_18_2.png" /> 640 - 1450<br />\
    <img src="styles/legend/MulchingfilmsTonsyr_18_3.png" /> 1450 - 2570<br />\
    <img src="styles/legend/MulchingfilmsTonsyr_18_4.png" /> 2570 - 7480<br />\
    <img src="styles/legend/MulchingfilmsTonsyr_18_5.png" /> 7480 - 11290<br />'
        });
var format_FilmsTonsyr_19 = new ol.format.GeoJSON();
var features_FilmsTonsyr_19 = format_FilmsTonsyr_19.readFeatures(json_FilmsTonsyr_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FilmsTonsyr_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FilmsTonsyr_19.addFeatures(features_FilmsTonsyr_19);
var lyr_FilmsTonsyr_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FilmsTonsyr_19, 
                style: style_FilmsTonsyr_19,
                popuplayertitle: "Films (Tons/yr)",
                interactive: true,
    title: 'Films (Tons/yr)<br />\
    <img src="styles/legend/FilmsTonsyr_19_0.png" /> 0 - 3<br />\
    <img src="styles/legend/FilmsTonsyr_19_1.png" /> 3 - 38<br />\
    <img src="styles/legend/FilmsTonsyr_19_2.png" /> 38 - 197<br />\
    <img src="styles/legend/FilmsTonsyr_19_3.png" /> 197 - 1192<br />\
    <img src="styles/legend/FilmsTonsyr_19_4.png" /> 1192 - 41191<br />'
        });
var format_UtilizedAgriculturalAreaha_20 = new ol.format.GeoJSON();
var features_UtilizedAgriculturalAreaha_20 = format_UtilizedAgriculturalAreaha_20.readFeatures(json_UtilizedAgriculturalAreaha_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UtilizedAgriculturalAreaha_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UtilizedAgriculturalAreaha_20.addFeatures(features_UtilizedAgriculturalAreaha_20);
var lyr_UtilizedAgriculturalAreaha_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UtilizedAgriculturalAreaha_20, 
                style: style_UtilizedAgriculturalAreaha_20,
                popuplayertitle: "Utilized Agricultural Area (ha)",
                interactive: true,
    title: 'Utilized Agricultural Area (ha)<br />\
    <img src="styles/legend/UtilizedAgriculturalAreaha_20_0.png" /> 4300 - 355200<br />\
    <img src="styles/legend/UtilizedAgriculturalAreaha_20_1.png" /> 355200 - 1041500<br />\
    <img src="styles/legend/UtilizedAgriculturalAreaha_20_2.png" /> 1041500 - 2222400<br />\
    <img src="styles/legend/UtilizedAgriculturalAreaha_20_3.png" /> 2222400 - 3442800<br />\
    <img src="styles/legend/UtilizedAgriculturalAreaha_20_4.png" /> 3442800 - 4715100<br />'
        });
var format_Microplasticsrisk_21 = new ol.format.GeoJSON();
var features_Microplasticsrisk_21 = format_Microplasticsrisk_21.readFeatures(json_Microplasticsrisk_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Microplasticsrisk_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Microplasticsrisk_21.addFeatures(features_Microplasticsrisk_21);
var lyr_Microplasticsrisk_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Microplasticsrisk_21, 
                style: style_Microplasticsrisk_21,
                popuplayertitle: "Micro-plastics risk",
                interactive: true,
    title: 'Micro-plastics risk<br />\
    <img src="styles/legend/Microplasticsrisk_21_0.png" /> Very low risk<br />\
    <img src="styles/legend/Microplasticsrisk_21_1.png" /> Low risk<br />\
    <img src="styles/legend/Microplasticsrisk_21_2.png" /> Medium risk<br />\
    <img src="styles/legend/Microplasticsrisk_21_3.png" /> High risk<br />\
    <img src="styles/legend/Microplasticsrisk_21_4.png" /> Very high risk<br />'
        });
var group_ReferenceCountries = new ol.layer.Group({
                                layers: [lyr_TotalAPWTonsyr_11,lyr_ContainersTonsyr_12,lyr_SilageTonsyr_13,lyr_BagsTonsyr_14,lyr_IrrigationpipesTonsyr_15,lyr_NetsTonsyr_16,lyr_TunnelsTonsyr_17,lyr_MulchingfilmsTonsyr_18,lyr_FilmsTonsyr_19,lyr_UtilizedAgriculturalAreaha_20,],
                                fold: "open",
                                title: "Reference Countries"});
var group_ExtrapolatedCountries = new ol.layer.Group({
                                layers: [lyr_TotalAPWTonsyr_1,lyr_ContainersTonsyr_2,lyr_SilageTonsyr_3,lyr_BagsTonsyr_4,lyr_IrrigationpipesTonsyr_5,lyr_NetsTonsyr_6,lyr_TunnelsTonsyr_7,lyr_MulchingTonsyr_8,lyr_FilmsTonsyr_9,lyr_UtilizedAgriculturalAreaha_10,],
                                fold: "open",
                                title: "Extrapolated Countries"});

lyr_Lightgraymap_0.setVisible(true);lyr_TotalAPWTonsyr_1.setVisible(false);lyr_ContainersTonsyr_2.setVisible(false);lyr_SilageTonsyr_3.setVisible(false);lyr_BagsTonsyr_4.setVisible(false);lyr_IrrigationpipesTonsyr_5.setVisible(false);lyr_NetsTonsyr_6.setVisible(false);lyr_TunnelsTonsyr_7.setVisible(false);lyr_MulchingTonsyr_8.setVisible(false);lyr_FilmsTonsyr_9.setVisible(false);lyr_UtilizedAgriculturalAreaha_10.setVisible(false);lyr_TotalAPWTonsyr_11.setVisible(false);lyr_ContainersTonsyr_12.setVisible(false);lyr_SilageTonsyr_13.setVisible(false);lyr_BagsTonsyr_14.setVisible(false);lyr_IrrigationpipesTonsyr_15.setVisible(false);lyr_NetsTonsyr_16.setVisible(false);lyr_TunnelsTonsyr_17.setVisible(false);lyr_MulchingfilmsTonsyr_18.setVisible(false);lyr_FilmsTonsyr_19.setVisible(false);lyr_UtilizedAgriculturalAreaha_20.setVisible(false);lyr_Microplasticsrisk_21.setVisible(true);
var layersList = [lyr_Lightgraymap_0,group_ExtrapolatedCountries,group_ReferenceCountries,lyr_Microplasticsrisk_21];
lyr_TotalAPWTonsyr_1.set('fieldAliases', {'Region': 'Region', 'Total APW': 'Total APW', });
lyr_ContainersTonsyr_2.set('fieldAliases', {'Region': 'Region', 'Containers': 'Containers', });
lyr_SilageTonsyr_3.set('fieldAliases', {'Region': 'Region', 'Silage': 'Silage', });
lyr_BagsTonsyr_4.set('fieldAliases', {'Region': 'Region', 'Bags': 'Bags', });
lyr_IrrigationpipesTonsyr_5.set('fieldAliases', {'Region': 'Region', 'Irrigation': 'Irrigation', });
lyr_NetsTonsyr_6.set('fieldAliases', {'Region': 'Region', 'Nets': 'Nets', });
lyr_TunnelsTonsyr_7.set('fieldAliases', {'Region': 'Region', 'Tunnels': 'Tunnels', });
lyr_MulchingTonsyr_8.set('fieldAliases', {'Region': 'Region', 'Mulching': 'Mulching', });
lyr_FilmsTonsyr_9.set('fieldAliases', {'Region': 'Region', 'Films': 'Films', });
lyr_UtilizedAgriculturalAreaha_10.set('fieldAliases', {'Region': 'Region', 'UAA': 'UAA', });
lyr_TotalAPWTonsyr_11.set('fieldAliases', {'Region': 'Region', 'Total APW': 'Total APW', });
lyr_ContainersTonsyr_12.set('fieldAliases', {'Region': 'Region', 'Containers': 'Containers', });
lyr_SilageTonsyr_13.set('fieldAliases', {'Region': 'Region', 'Silage': 'Silage', });
lyr_BagsTonsyr_14.set('fieldAliases', {'Region': 'Region', 'Bags': 'Bags', });
lyr_IrrigationpipesTonsyr_15.set('fieldAliases', {'Region': 'Region', 'Irrigation': 'Irrigation', });
lyr_NetsTonsyr_16.set('fieldAliases', {'Region': 'Region', 'Nets': 'Nets', });
lyr_TunnelsTonsyr_17.set('fieldAliases', {'Region': 'Region', 'Tunnels': 'Tunnels', });
lyr_MulchingfilmsTonsyr_18.set('fieldAliases', {'Region': 'Region', 'Mulching': 'Mulching', });
lyr_FilmsTonsyr_19.set('fieldAliases', {'Region': 'Region', 'Films': 'Films', });
lyr_UtilizedAgriculturalAreaha_20.set('fieldAliases', {'Region': 'Region', 'UAA': 'UAA', });
lyr_Microplasticsrisk_21.set('fieldAliases', {'Region': 'Region', 'Normalized Risk (%)': 'Normalized Risk (%)', });
lyr_TotalAPWTonsyr_1.set('fieldImages', {'Region': 'TextEdit', 'Total APW': 'TextEdit', });
lyr_ContainersTonsyr_2.set('fieldImages', {'Region': 'TextEdit', 'Containers': 'TextEdit', });
lyr_SilageTonsyr_3.set('fieldImages', {'Region': 'TextEdit', 'Silage': 'TextEdit', });
lyr_BagsTonsyr_4.set('fieldImages', {'Region': 'TextEdit', 'Bags': 'TextEdit', });
lyr_IrrigationpipesTonsyr_5.set('fieldImages', {'Region': 'TextEdit', 'Irrigation': 'TextEdit', });
lyr_NetsTonsyr_6.set('fieldImages', {'Region': 'TextEdit', 'Nets': 'TextEdit', });
lyr_TunnelsTonsyr_7.set('fieldImages', {'Region': 'TextEdit', 'Tunnels': 'TextEdit', });
lyr_MulchingTonsyr_8.set('fieldImages', {'Region': 'TextEdit', 'Mulching': 'TextEdit', });
lyr_FilmsTonsyr_9.set('fieldImages', {'Region': 'TextEdit', 'Films': 'TextEdit', });
lyr_UtilizedAgriculturalAreaha_10.set('fieldImages', {'Region': 'TextEdit', 'UAA': 'TextEdit', });
lyr_TotalAPWTonsyr_11.set('fieldImages', {'Region': 'TextEdit', 'Total APW': 'TextEdit', });
lyr_ContainersTonsyr_12.set('fieldImages', {'Region': 'TextEdit', 'Containers': 'TextEdit', });
lyr_SilageTonsyr_13.set('fieldImages', {'Region': 'TextEdit', 'Silage': 'TextEdit', });
lyr_BagsTonsyr_14.set('fieldImages', {'Region': 'TextEdit', 'Bags': 'TextEdit', });
lyr_IrrigationpipesTonsyr_15.set('fieldImages', {'Region': 'TextEdit', 'Irrigation': 'TextEdit', });
lyr_NetsTonsyr_16.set('fieldImages', {'Region': 'TextEdit', 'Nets': 'TextEdit', });
lyr_TunnelsTonsyr_17.set('fieldImages', {'Region': 'TextEdit', 'Tunnels': 'TextEdit', });
lyr_MulchingfilmsTonsyr_18.set('fieldImages', {'Region': 'TextEdit', 'Mulching': 'TextEdit', });
lyr_FilmsTonsyr_19.set('fieldImages', {'Region': 'TextEdit', 'Films': 'TextEdit', });
lyr_UtilizedAgriculturalAreaha_20.set('fieldImages', {'Region': 'TextEdit', 'UAA': 'TextEdit', });
lyr_Microplasticsrisk_21.set('fieldImages', {'Region': 'TextEdit', 'Normalized Risk (%)': 'TextEdit', });
lyr_TotalAPWTonsyr_1.set('fieldLabels', {'Region': 'inline label - visible with data', 'Total APW': 'inline label - visible with data', });
lyr_ContainersTonsyr_2.set('fieldLabels', {'Region': 'inline label - visible with data', 'Containers': 'inline label - visible with data', });
lyr_SilageTonsyr_3.set('fieldLabels', {'Region': 'inline label - visible with data', 'Silage': 'inline label - visible with data', });
lyr_BagsTonsyr_4.set('fieldLabels', {'Region': 'inline label - visible with data', 'Bags': 'inline label - visible with data', });
lyr_IrrigationpipesTonsyr_5.set('fieldLabels', {'Region': 'inline label - visible with data', 'Irrigation': 'inline label - visible with data', });
lyr_NetsTonsyr_6.set('fieldLabels', {'Region': 'inline label - visible with data', 'Nets': 'inline label - visible with data', });
lyr_TunnelsTonsyr_7.set('fieldLabels', {'Region': 'inline label - visible with data', 'Tunnels': 'inline label - visible with data', });
lyr_MulchingTonsyr_8.set('fieldLabels', {'Region': 'inline label - visible with data', 'Mulching': 'inline label - visible with data', });
lyr_FilmsTonsyr_9.set('fieldLabels', {'Region': 'inline label - visible with data', 'Films': 'inline label - visible with data', });
lyr_UtilizedAgriculturalAreaha_10.set('fieldLabels', {'Region': 'inline label - visible with data', 'UAA': 'inline label - visible with data', });
lyr_TotalAPWTonsyr_11.set('fieldLabels', {'Region': 'inline label - visible with data', 'Total APW': 'inline label - visible with data', });
lyr_ContainersTonsyr_12.set('fieldLabels', {'Region': 'inline label - visible with data', 'Containers': 'inline label - visible with data', });
lyr_SilageTonsyr_13.set('fieldLabels', {'Region': 'inline label - visible with data', 'Silage': 'inline label - visible with data', });
lyr_BagsTonsyr_14.set('fieldLabels', {'Region': 'inline label - visible with data', 'Bags': 'inline label - visible with data', });
lyr_IrrigationpipesTonsyr_15.set('fieldLabels', {'Region': 'inline label - visible with data', 'Irrigation': 'inline label - visible with data', });
lyr_NetsTonsyr_16.set('fieldLabels', {'Region': 'inline label - visible with data', 'Nets': 'inline label - visible with data', });
lyr_TunnelsTonsyr_17.set('fieldLabels', {'Region': 'inline label - visible with data', 'Tunnels': 'inline label - visible with data', });
lyr_MulchingfilmsTonsyr_18.set('fieldLabels', {'Region': 'inline label - visible with data', 'Mulching': 'inline label - visible with data', });
lyr_FilmsTonsyr_19.set('fieldLabels', {'Region': 'inline label - visible with data', 'Films': 'inline label - visible with data', });
lyr_UtilizedAgriculturalAreaha_20.set('fieldLabels', {'Region': 'inline label - visible with data', 'UAA': 'inline label - visible with data', });
lyr_Microplasticsrisk_21.set('fieldLabels', {'Region': 'inline label - visible with data', 'Normalized Risk (%)': 'inline label - visible with data', });
lyr_Microplasticsrisk_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});