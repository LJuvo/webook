<template>
  <section>
    <div class="demo-title">
      <h1>立体面--上海东方明珠楼体环视</h1>
      <h3>渲染出东方明珠附近楼体建筑，并且使用自定义镜头动画环视</h3>
    </div>
    <div class="start-btn">
      <a>开始动画</a>
    </div>
    <div id="container"></div>
  </section>
</template>
<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import { shallowRef } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
const MapStyle = {
  normal: "normal", // 标准
  macaron: "macaron", // 马卡龙
  graffiti: "graffiti", // 涂鸦
  whitesmoke: "whitesmoke", // 远山黛
  dark: "dark", // 幻影黑
  fresh: "fresh", // 草色青
  darkblue: "darkblue", // 极夜蓝
  blue: "blue", // 靛青蓝
  light: "light", // 月光银
  grey: "grey", // 雅土灰
  wine: "wine", // 酱紫
};
export default {
  setup() {
    var map = shallowRef(null);
    function initMap() {
      window._AMapSecurityConfig = {
        securityJsCode: "db6d137123881a16d6b7f6e3e0c725ff",
      };
      AMapLoader.load({
        key: "a6ec1a2d37e0d7f6deff192f5f890780", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0.5.6", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [
          "AMap.ControlBar",
          "AMap.ToolBar",
          "AMap.DistrictSearch",
          "AMap.service",
          //   "AMap.Marker",
        ],
        Loca: {
          // 是否加载 Loca， 缺省不加载
          version: "2.0.0", // Loca 版本，缺省 1.3.2
        },
      })
        .then((AMap) => {
          var map = new AMap.Map("container", {
            resizeEnable: true,
          });

          //   var Loca = window.Loca;
          //   /** lc */
          //   //   楼层展示
          //   map = new AMap.Map("container", {
          //     viewMode: "3D",
          //     zoom: 11.8,
          //     center: [121.304018, 31.217688],
          //     //   mapStyle: "amap://styles/45311ae996a8bea0da10ad5151f72979",
          //     mapStyle: "amap://styles/" + MapStyle.darkblue, //设置地图的显示样式
          //     showBuildingBlock: false,
          //     showLabel: false,
          //     // features: ["bg"],
          //     features: ["bg", "road", "building", "point"],
          //   });
          //   var controlBar = new AMap.ControlBar({
          //     position: {
          //       right: "10px",
          //       top: "10px",
          //     },
          //   });
          //   controlBar.addTo(map);
          //   var toolBar = new AMap.ToolBar({
          //     position: {
          //       right: "40px",
          //       top: "110px",
          //     },
          //   });
          //   toolBar.addTo(map);
          //   // 底图楼块扣除
          //   var building = new AMap.Buildings({
          //     zIndex: 10,
          //   });
          //   building.setStyle({
          //     hideWithoutStyle: false, //是否隐藏设定区域外的楼块
          //     areas: [
          //       {
          //         visible: false, //是否可见
          //         rejectTexture: false, //是否屏蔽自定义地图的纹理
          //         color1: "00000000", //楼顶颜色
          //         color2: "00000000", //楼面颜色
          //         path: [
          //           [
          //             [116.467518, 39.993867],
          //             [116.467223, 39.99325],
          //             [116.467411, 39.992531],
          //             [116.468129, 39.992165],
          //             [116.468628, 39.991894],
          //             [116.469073, 39.991647],
          //             [116.469841, 39.992515],
          //             [116.469304, 39.993222],
          //             [116.468108, 39.994142],
          //             [116.46784, 39.994249],
          //             [116.467518, 39.993867],
          //           ],
          //         ],
          //       },
          //     ],
          //   });
          //   map.add(building);
          //   // 添加上层数据
          //   var loca = (window.loca = new Loca.Container({
          //     map,
          //   }));
          //   loca.ambLight = {
          //     intensity: 0.1,
          //     color: "#fff",
          //   };
          //   loca.dirLight = {
          //     intensity: 0.1,
          //     color: "#fff",
          //     target: [0, 0, 0],
          //     position: [0, -1, 1],
          //   };
          //   loca.pointLight = {
          //     color: "#c2beff",
          //     position: [116.468693, 39.993041, 200],
          //     intensity: 3,
          //     // 距离表示从光源到光照强度为 0 的位置，0 就是光不会消失。
          //     distance: 250,
          //   };
          //   var dat = new Loca.Dat();
          //   dat.addLight(loca.ambLight, loca, "环境光");
          //   dat.addLight(loca.dirLight, loca, "平行光");
          //   dat.addLight(loca.pointLight, loca, "点光");
          //   // 拉取数据
          //   fetch(
          //     "https://a.amap.com/Loca/static/loca-v2/demos/mock_data/cadmall_floor.json"
          //   )
          //     .then(function (response) {
          //       return response.json();
          //     })
          //     .then(function (data) {
          //       createFloorLayer(data["f-1"].shops, 0, "负一楼商铺");
          //       createFloorLayer(data.f1.shops, 20, "一楼商铺");
          //       createFloorLayer(data.f2.shops, 60, "二楼商铺");
          //       createFloorLayer(data.f3.shops, 100, "三楼商铺");
          //       createFloorLayer(data.f4.shops, 130, "四楼商铺");
          //       createBasePolygon(data["f-1"].floor, 0);
          //       createBasePolygon(data.f1.floor, 20);
          //       createBasePolygon(data.f2.floor, 60);
          //       createBasePolygon(data.f3.floor, 100);
          //       createBasePolygon(data.f4.floor, 130);
          //       loca.animate.start();
          //     });
          //   var baseLayer = [];
          //   // 基础面
          //   function createBasePolygon(data, altitude, name) {
          //     var geo = new Loca.GeoJSONSource({
          //       data: data,
          //     });
          //     var floor = new Loca.PolygonLayer({
          //       loca,
          //       zIndex: 120,
          //       opacity: 1,
          //       // cullface: 'none',
          //       shininess: 10,
          //       hasSide: false,
          //       visible: false,
          //     });
          //     floor.setSource(geo);
          //     floor.setStyle({
          //       topColor: "#8889ff",
          //       sideColor: "#8889ff",
          //       height: 2,
          //       altitude: altitude,
          //     });
          //     baseLayer.push(floor);
          //   }
          //   var shopLayer = [];
          //   // 商铺
          //   function createFloorLayer(data, altitude, name) {
          //     var geo = new Loca.GeoJSONSource({
          //       data: data,
          //     });
          //     var floor = new Loca.PolygonLayer({
          //       loca,
          //       zIndex: 120,
          //       opacity: 1,
          //       // cullface: 'none',
          //       shininess: 10,
          //       // hasSide: false,
          //       visible: altitude === 0,
          //     });
          //     floor.setSource(geo);
          //     floor.setStyle({
          //       topColor: "#5C57B8",
          //       sideColor: "#5C57B8",
          //       height: 1,
          //       altitude: altitude + 2,
          //     });
          //     shopLayer.push(floor);
          //     dat.addLayer(floor, name);
          //   }
          //   // 生长动画
          //   document
          //     .querySelector(".start-btn")
          //     .addEventListener("click", function () {
          //       const speed = 1;
          //       map.setCenter([116.471019, 39.991893], true);
          //       map.setZoom(18.5, true);
          //       map.setPitch(65, true);
          //       map.setRotation(45, true);
          //       shopLayer.forEach(function (l, i) {
          //         if (i != 0) {
          //           l.hide();
          //         }
          //       });
          //       baseLayer.forEach(function (l, i) {
          //         if (i != 0) {
          //           l.hide();
          //         }
          //       });
          //       setTimeout(function () {
          //         loca.viewControl.addAnimates([
          //           {
          //             center: {
          //               value: [116.467864, 39.992941],
          //               control: [
          //                 [116.471496, 39.992752],
          //                 [116.474484, 39.991264],
          //               ],
          //               timing: [0, 0.2, 0.5, 1],
          //               duration: 2500 / speed,
          //             },
          //             rotation: {
          //               value: 99,
          //               control: [
          //                 [0, 45],
          //                 [1, 99],
          //               ],
          //               timing: [0, 0, 0.5, 1],
          //               duration: 2000 / speed,
          //             },
          //           },
          //         ]);
          //         setTimeout(function () {
          //           shopLayer.forEach(function (l) {
          //             // l.hide();
          //             l.addAnimate({
          //               key: "altitude",
          //               value: [0, 1],
          //               duration: 2000,
          //               easing: "CubicInOut",
          //               // yoyo: true,
          //               // repeat: 2,
          //             });
          //             l.show(1200);
          //           });
          //           shopLayer.forEach(function (l) {
          //             l.addAnimate({
          //               key: "height",
          //               value: [0, 1],
          //               duration: 2000,
          //               easing: "CubicInOut",
          //               // yoyo: true,
          //               // repeat: 2,
          //             });
          //             l.show(1200);
          //           });
          //           baseLayer.forEach(function (l) {
          //             l.addAnimate({
          //               key: "altitude",
          //               value: [0, 1],
          //               duration: 2500,
          //               easing: "CubicInOut",
          //               // yoyo: true,
          //               // repeat: 2,
          //             });
          //             l.show(1200);
          //           });
          //           baseLayer.forEach(function (l) {
          //             l.addAnimate({
          //               key: "height",
          //               value: [0, 1],
          //               duration: 2500,
          //               easing: "CubicInOut",
          //               // yoyo: true,
          //               // repeat: 2,
          //             });
          //             l.show(1200);
          //           });
          //         }, 2000);
          //       }, 300);
          //     });

          var opts = {
            subdistrict: 0,
            extensions: "all",
            level: "city",
          };
          //利用行政区查询获取边界构建mask路径
          //也可以直接通过经纬度构建mask路径
          var district = new AMap.DistrictSearch(opts);
          district.search("北京市", function (status, result) {
            var bounds = result.districtList[0].boundaries;
            var mask = [];
            for (let i = 0; i < bounds.length; i += 1) {
              mask.push([bounds[i]]);
            }
            var map = new AMap.Map("container", {
              mask: mask,
              center: [116.472804, 39.995725],
              viewMode: "3D",
              showLabel: false,
              labelzIndex: 130,
              pitch: 40,
              zoom: 9,
              layers: [
                // new AMap.TileLayer.RoadNet({
                //   //rejectMapMask:true
                // }),
                new AMap.TileLayer.Satellite(),
              ],
            });
            var maskerIn = new AMap.Marker({
              position: [116.501415, 39.926055],
              map: map,
            });
            var maskerOut = new AMap.Marker({
              //区域外的不会显示
              position: [117.001415, 39.926055],
              map: map,
            });
            //添加描边
            for (let i = 0; i < bounds.length; i += 1) {
              new AMap.Polyline({
                path: bounds[i],
                strokeColor: "#99ffff",
                strokeWeight: 4,
                map: map,
              });
            }
          });

          /**  sd */
          // 基础楼宇
          //   var loca = (window.loca = new Loca.Container({
          //     map,
          //   }));
          //   loca.ambLight = {
          //     intensity: 2.2,
          //     color: "#babedc",
          //   };
          //   loca.dirLight = {
          //     intensity: 0.46,
          //     color: "#d4d4d4",
          //     target: [0, 0, 0],
          //     position: [0, -1, 1],
          //   };
          //   loca.pointLight = {
          //     color: "rgb(15,19,40)",
          //     position: [121.5043258, 31.2392241, 2600],
          //     intensity: 25,
          //     // 距离表示从光源到光照强度为 0 的位置，0 就是光不会消失。
          //     distance: 3900,
          //   };
          //   var geo = new Loca.GeoJSONSource({
          //     url: "https://a.amap.com/Loca/static/loca-v2/demos/mock_data/sh_building_center.json",
          //   });
          //   var pl = (window.pl = new Loca.PolygonLayer({
          //     zIndex: 120,
          //     shininess: 10,
          //     hasSide: true,
          //     cullface: "back",
          //     depth: true,
          //   }));
          //   pl.setSource(geo);
          //   pl.setStyle({
          //     topColor: "#111",
          //     height: function (index, feature) {
          //       return feature.properties.h;
          //     },
          //     textureSize: [1000, 820],
          //     texture:
          //       "https://a.amap.com/Loca/static/loca-v2/demos/images/windows.jpg",
          //   });
          //   pl.setLoca(loca);
          //   var dat = new Loca.Dat();
          //   dat.addLight(loca.ambLight, loca, "环境光");
          //   dat.addLight(loca.dirLight, loca, "平行光");
          //   dat.addLight(loca.pointLight, loca, "点光");
          //   dat.addLayer(pl, "楼块");
          //   map.on("complete", function () {
          //     loca.animate.start();
          //     // document.querySelector('.start-btn').addEventListener('click', function () {
          //     setTimeout(animate, 2000);
          //   });
          //   function animate() {
          //     var speed = 1;
          //     // 镜头动画
          //     map.setZoom(11.8, true);
          //     map.setPitch(0, true);
          //     map.setCenter([121.304018, 31.217688], true);
          //     map.setRotation(1, true);
          //     pl.hide(1000);
          //     // 下钻
          //     loca.viewControl.addAnimates(
          //       [
          //         {
          //           pitch: {
          //             value: 0,
          //             control: [
          //               [0, 20],
          //               [1, 0],
          //             ],
          //             timing: [0, 0, 0.8, 1],
          //             duration: 3000 / speed,
          //           },
          //           zoom: {
          //             value: 15.9,
          //             control: [
          //               [0, 12.8],
          //               [1, 15.9],
          //             ],
          //             timing: [0, 0, 0.8, 1],
          //             duration: 3000 / speed,
          //           },
          //           rotation: {
          //             value: -20,
          //             control: [
          //               [0, 20],
          //               [1, -20],
          //             ],
          //             timing: [0, 0, 0.8, 1],
          //             duration: 2000 / speed,
          //           },
          //         },
          //       ],
          //       function () {
          //         setTimeout(function () {
          //           pl.show(2000);
          //         }, 3000);
          //         loca.viewControl.addAnimates(
          //           [
          //             // 寻迹
          //             {
          //               center: {
          //                 value: [121.500419, 31.238089],
          //                 control: [
          //                   [121.424503326416, 31.199146851153124],
          //                   [121.46656036376952, 31.245828642661486],
          //                 ],
          //                 timing: [0.3, 0, 0.1, 1],
          //                 duration: 8000 / speed,
          //               },
          //               zoom: {
          //                 value: 17,
          //                 control: [
          //                   [0.3, 15],
          //                   [1, 17],
          //                 ],
          //                 timing: [0.3, 0, 0.7, 1],
          //                 duration: 4000 / speed,
          //               },
          //               pitch: {
          //                 value: 50,
          //                 control: [
          //                   [0.3, 0],
          //                   [1, 50],
          //                 ],
          //                 timing: [0.3, 0, 1, 1],
          //                 duration: 3000 / speed,
          //               },
          //               rotation: {
          //                 value: -80,
          //                 control: [
          //                   [0, -20],
          //                   [1, -80],
          //                 ],
          //                 timing: [0, 0, 1, 1],
          //                 duration: 1000 / speed,
          //               },
          //             },
          //             {
          //               // 环绕
          //               pitch: {
          //                 value: 50,
          //                 control: [
          //                   [0, 40],
          //                   [1, 50],
          //                 ],
          //                 timing: [0.3, 0, 1, 1],
          //                 duration: 7000 / speed,
          //               },
          //               rotation: {
          //                 value: 260,
          //                 control: [
          //                   [0, -80],
          //                   [1, 260],
          //                 ],
          //                 timing: [0, 0, 0.7, 1],
          //                 duration: 7000 / speed,
          //               },
          //               zoom: {
          //                 value: 17,
          //                 control: [
          //                   [0.3, 16],
          //                   [1, 17],
          //                 ],
          //                 timing: [0.3, 0, 0.9, 1],
          //                 duration: 5000 / speed,
          //               },
          //             },
          //             {
          //               // 拉起
          //               center: {
          //                 value: [121.500419, 31.238089],
          //                 control: [
          //                   [121.49986267089844, 31.227628422210365],
          //                   [121.49969100952148, 31.24025152837923],
          //                 ],
          //                 timing: [0.3, 0, 0.7, 1],
          //                 duration: 2000 / speed,
          //               },
          //               pitch: {
          //                 value: 0,
          //                 control: [
          //                   [0, 0],
          //                   [1, 100],
          //                 ],
          //                 timing: [0.1, 0, 0.7, 1],
          //                 duration: 2000 / speed,
          //               },
          //               rotation: {
          //                 value: 361,
          //                 control: [
          //                   [0, 260],
          //                   [1, 361],
          //                 ],
          //                 timing: [0.3, 0, 0.7, 1],
          //                 duration: 2000 / speed,
          //               },
          //               zoom: {
          //                 value: 13.8,
          //                 control: [
          //                   [0, 17.5],
          //                   [1, 13.8],
          //                 ],
          //                 timing: [0.3, 0, 0.7, 1],
          //                 duration: 2500 / speed,
          //               },
          //             },
          //           ],
          //           function () {
          //             pl.hide(1000);
          //             setTimeout(animate, 2000);
          //             console.log("结束");
          //           }
          //         );
          //       }
          //     );
          //   }
        })
        .catch((e) => {
          console.log(e);
        });
    }

    onMounted(() => {
      initMap();
    });

    return {
      map,
      initMap,
    };
  },
};
</script>
<style lang="less" scoped>
#container {
  width: 100vw;
  height: 100vh;
}

.demo-title {
  position: absolute;
  top: 25px;
  left: 25px;
  z-index: 1;
}

h1 {
  font-size: 18px;
  margin: 0;
  color: rgb(180, 180, 190);
}

h3 {
  font-size: 12px;
  font-weight: normal;
  margin-top: 5px;
  color: rgb(150, 150, 150);
}
.start-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 0 18px;
  height: 30px;
  background-color: #1a66ff;
  border-radius: 5px;
  z-index: 1;
  cursor: pointer;
}
.start-btn > a {
  color: #fff;
  display: block;
  height: 100%;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
}
</style>
