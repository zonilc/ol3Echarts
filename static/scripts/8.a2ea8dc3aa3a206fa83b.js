(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{JJRp:function(t,e,n){"use strict";function o(t,e){const n=new XMLHttpRequest;n.responseType="json",n.open("get",t,!0),n.onload=()=>{if(!(n.status>=200&&n.status<300))throw new Error(n.statusText);e(n.response)},n.send()}n.d(e,"a",function(){return o})},Lrro:function(t,e,n){"use strict";(function(t){var o=n("Xu5n"),r=n("4mld"),i=n("JW8z"),s=n("MT78"),a=n.n(s);!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:n("0cfB")).enterModule;e&&e(t)}();var c=function(t,e){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function h(t,e){function n(){this.constructor=t}c(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var p=function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)},d=function t(e,n){return Object.keys(n).forEach(function(o){p(n[o])&&p(e[o])?t(e[o],n[o]):e[o]=n[o]}),e},u=function(t,e){for(var n=arguments,o=[],r=2;r<arguments.length;r++)o[r-2]=n[r];return function(){for(var n=arguments,r=[],i=0;i<arguments.length;i++)r[i]=n[i];return t.apply(e,o.concat(Array.prototype.slice.call(r)))}},l=function(t,e){for(var n,o=0,r=t.length;o<r;o++)if(t[o].seriesIndex===e.seriesIndex){n=o;break}return void 0===n?t.push(e):t[n]=e,t},g=function(){return function t(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-[1e3]+-4e3+-8e3+-1e11).replace(/[018]/g,t)}()};function f(t,e){t.forEach(function(t){e[t]&&(e[t]=e[t].bind(e))})}function v(t){return t&&t.parentNode?t.parentNode.removeChild(t):null}function m(t,e){var n=new MouseEvent(t,{bubbles:!0,cancelable:!0,button:e.pointerEvent.button,buttons:e.pointerEvent.buttons,clientX:e.pointerEvent.clientX,clientY:e.pointerEvent.clientY,zrX:e.pointerEvent.offsetX,zrY:e.pointerEvent.offsetY,movementX:e.pointerEvent.movementX,movementY:e.pointerEvent.movementY,relatedTarget:e.pointerEvent.relatedTarget,screenX:e.pointerEvent.screenX,screenY:e.pointerEvent.screenY,view:window});return n.zrX=e.pointerEvent.offsetX,n.zrY=e.pointerEvent.offsetY,n.event=n,n}var y=function(t){return!t.UTF8Encoding},w=function(t,e,n){for(var o=[],r=[e[0],e[1]],i=r[0],s=r[1],a=0;a<t.length;a+=2){var c=t.charCodeAt(a)-64,h=t.charCodeAt(a+1)-64;c=c>>1^-(1&c),h=h>>1^-(1&h),i=c+=i,s=h+=s,o.push([c/n,h/n])}return o},E=function(t){if(y(t))return t;var e=t.UTF8Scale;null==e&&(e=1024);for(var n=t.features,o=0;o<n.length;o++)for(var r=n[o].geometry,i=[r.coordinates,r.encodeOffsets],s=i[0],a=i[1],c=0;c<s.length;c++){var h=s[c];if("Polygon"===r.type)s[c]=w(h,a[c],e);else if("MultiPolygon"===r.type)for(var p=0;p<h.length;p++){var d=h[p];h[p]=w(d,a[c][p],e)}}return t.UTF8Encoding=!1,t};function _(t){var e=E(t);return{type:"FeatureCollection",crs:{},features:a.a.util.map(a.a.util.filter(e.features,function(t){return t.geometry&&t.properties&&t.geometry.coordinates.length>0}),function(t){var e=t.properties,n=t.geometry,o=n.coordinates,r=[];return"Polygon"===n.type&&r.push(o[0]),"MultiPolygon"===n.type&&a.a.util.each(o,function(t){t[0]&&r.push(t[0])}),{properties:e,type:"Feature",geometry:{type:"Polygon",coordinates:r}}})}}var $=function(t,e,n){return e.center=n.dataToPoint(e.coordinates),e},j=function(t,e,n){return p(t.grid)&&!Array.isArray(t.grid)||Array.isArray(t.grid)&&(t.grid=t.grid.map(function(e,o){var r=n.dataToPoint(t.series[o].coordinates);return e.left=r[0]-parseFloat(e.width)/2,e.top=r[1]-parseFloat(e.height)/2,e})),e},b=function(t,e,n){return p(t.grid)&&!Array.isArray(t.grid)||Array.isArray(t.grid)&&(t.grid=t.grid.map(function(e,o){var r=n.dataToPoint(t.series[o].coordinates);return e.left=r[0]-parseFloat(e.width)/2,e.top=r[1]-parseFloat(e.height)/2,e})),e},S=Object.freeze({pie:$,bar:j,line:b}),O={forcedRerender:!1,forcedPrecomposeRerender:!1,hideOnZooming:!1,hideOnMoving:!1,hideOnRotating:!1,convertTypes:["pie","line","bar"],insertFirst:!1,stopEvent:!1,polyfillEvents:!0},M=function(t){function e(e,n,o){var r=this,i=Object.assign(O,n);return(r=t.call(this,i)||this)._options=i,r._chartOptions=e,r.set("chartOptions",e),r.$chart=null,r.$container=void 0,r._isRegistered=!1,r._initEvent=!1,r._incremental=[],r._coordinateSystem=null,r.coordinateSystemId="",r.prevVisibleState="",f(["redraw","onResize","onZoomEnd","onCenterChange","onDragRotateEnd","onMoveStart","onMoveEnd","mouseDown","mouseUp","onClick","mouseMove"],r),o&&r.setMap(o),r}return h(e,t),e.prototype.appendTo=function(t){this.setMap(t)},e.prototype.getMap=function(){return this._map},e.prototype.setMap=function(t){var e=this;if(!(t&&t instanceof o.a))throw new Error("not ol map object");this._map=t,this._map.once("postrender",function(){e.handleMapChanged()}),this._map.renderSync()},e.prototype.getChartOptions=function(){return this.get("chartOptions")},e.prototype.setChartOptions=function(t){return void 0===t&&(t={}),this._chartOptions=t,this.set("chartOptions",t),this.clearAndRedraw(),this},e.prototype.appendData=function(t,e){return void 0===e&&(e=!0),t&&(e&&(this._incremental=l(this._incremental,{data:t.data,seriesIndex:t.seriesIndex})),this.$chart.appendData({data:t.data.copyWithin(),seriesIndex:t.seriesIndex})),this},e.prototype.clear=function(){this._incremental=[],this.$chart&&this.$chart.clear()},e.prototype.remove=function(){this.clear(),this.$chart&&this.$chart.dispose(),this._initEvent&&this.$container&&(this.$container&&v(this.$container),this.unBindEvent()),delete this.$chart,delete this._map},e.prototype.show=function(){this.setVisible(!0)},e.prototype.innerShow=function(){this.$container&&(this.$container.style.display=this.prevVisibleState,this.prevVisibleState="")},e.prototype.hide=function(){this.setVisible(!1)},e.prototype.innerHide=function(){this.$container&&(this.prevVisibleState=this.$container.style.display,this.$container.style.display="none")},e.prototype.isVisible=function(){return this.$container&&"none"!==this.$container.style.display},e.prototype.showLoading=function(){this.$chart&&this.$chart.showLoading()},e.prototype.hideLoading=function(){this.$chart&&this.$chart.hideLoading()},e.prototype.setZIndex=function(t){this.$container&&("number"==typeof t&&(t=String(t)),this.$container.style.zIndex=t)},e.prototype.getZIndex=function(){return this.$container&&this.$container.style.zIndex},e.prototype.setVisible=function(t){t?(this.$container&&(this.$container.style.display=""),this._chartOptions=this.getChartOptions(),this.clearAndRedraw()):(this.$container&&(this.$container.style.display="none"),this.clear(),this._chartOptions={},this.clearAndRedraw())},e.prototype.render=function(){!this.$chart&&this.$container?(this.$chart=a.a.init(this.$container),this._chartOptions&&(this.registerMap(),this.$chart.setOption(this.convertData(this._chartOptions),!1)),this.dispatchEvent({type:"load",source:this,value:this.$chart})):this.isVisible()&&this.redraw()},e.prototype.redraw=function(){this.clearAndRedraw()},e.prototype.updateViewSize=function(t){this.$container&&(this.$container.style.width=t[0]+"px",this.$container.style.height=t[1]+"px",this.$container.setAttribute("width",String(t[0])),this.$container.setAttribute("height",String(t[1])))},e.prototype.onResize=function(t){var e=this.getMap();if(e){var n=e.getSize();this.updateViewSize(n),this.clearAndRedraw(),t&&this.dispatchEvent({type:"change:size",source:this,value:n})}},e.prototype.onZoomEnd=function(){this._options.hideOnZooming&&this.innerShow();var t=this.getMap();t&&t.getView()&&(this.clearAndRedraw(),this.dispatchEvent({type:"zoomend",source:this,value:t.getView().getZoom()}))},e.prototype.onDragRotateEnd=function(){this._options.hideOnRotating&&this.innerShow();var t=this.getMap();t&&t.getView()&&(this.clearAndRedraw(),this.dispatchEvent({type:"change:rotation",source:this,value:t.getView().getRotation()}))},e.prototype.onMoveStart=function(){this._options.hideOnMoving&&this.innerHide();var t=this.getMap();t&&t.getView()&&this.dispatchEvent({type:"movestart",source:this,value:t.getView().getCenter()})},e.prototype.onMoveEnd=function(){this._options.hideOnMoving&&this.innerShow();var t=this.getMap();t&&t.getView()&&(this.clearAndRedraw(),this.dispatchEvent({type:"moveend",source:this,value:t.getView().getCenter()}))},e.prototype.onClick=function(t){this.$chart&&this.$chart.getZr().painter.getViewportRoot().dispatchEvent(m("click",t))},e.prototype.mouseDown=function(t){this.$chart&&this.$chart.getZr().painter.getViewportRoot().dispatchEvent(m("mousedown",t))},e.prototype.mouseUp=function(t){this.$chart&&this.$chart.getZr().painter.getViewportRoot().dispatchEvent(m("mouseup",t))},e.prototype.mouseMove=function(t){if(this.$chart)for(var e=t.originalEvent.target;e;){if("ol-overlaycontainer-stopevent"===e.className)return void this.$chart.getZr().painter.getViewportRoot().dispatchEvent(m("mousemove",t));e=e.parentElement}},e.prototype.onCenterChange=function(){var t=this.getMap();t&&t.getView()&&(this.clearAndRedraw(),this.dispatchEvent({type:"change:center",source:this,value:t.getView().getCenter()}))},e.prototype.handleMapChanged=function(){var t=this.getMap();if(this._initEvent&&this.$container&&(this.$container&&v(this.$container),this.unBindEvent()),this.$container||(this.createLayerContainer(),this.onResize(!1)),t){var e=this._options.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this._options.insertFirst?e.insertBefore(this.$container,e.childNodes[0]||null):e.appendChild(this.$container),this.render(),this.bindEvent(t)}},e.prototype.createLayerContainer=function(){this.$container=document.createElement("div"),this.$container.style.position="absolute",this.$container.style.top="0px",this.$container.style.left="0px",this.$container.style.right="0px",this.$container.style.bottom="0px"},e.prototype.bindEvent=function(t){var e=t.getView();this._options.forcedPrecomposeRerender&&t.on("precompose",this.redraw),t.on("change:size",this.onResize),e.on("change:resolution",this.onZoomEnd),e.on("change:center",this.onCenterChange),e.on("change:rotation",this.onDragRotateEnd),t.on("movestart",this.onMoveStart),t.on("moveend",this.onMoveEnd),this._options.polyfillEvents&&(t.on("pointerdown",this.mouseDown),t.on("pointerup",this.mouseUp),t.on("pointermove",this.mouseMove),t.on("click",this.onClick)),this._initEvent=!0},e.prototype.unBindEvent=function(){var t=this.getMap();if(t){var e=t.getView();e&&(t.un("precompose",this.redraw),t.un("change:size",this.onResize),e.un("change:resolution",this.onZoomEnd),e.un("change:center",this.onCenterChange),e.un("change:rotation",this.onDragRotateEnd),t.un("movestart",this.onMoveStart),t.un("moveend",this.onMoveEnd),this._options.polyfillEvents&&(t.un("pointerdown",this.mouseDown),t.un("pointerup",this.mouseUp),t.un("pointermove",this.mouseMove),t.un("click",this.onClick)),this._initEvent=!1)}},e.prototype.clearAndRedraw=function(){if(this.$chart&&this.isVisible()){if(this._options.forcedRerender&&this.$chart.clear(),this.$chart.resize(),this._chartOptions&&(this.registerMap(),this.$chart.setOption(this.convertData(this._chartOptions),!1),this._incremental&&this._incremental.length>0))for(var t=0;t<this._incremental.length;t++)this.appendData(this._incremental[t],!1);this.dispatchEvent({type:"redraw",source:this})}},e.prototype.registerMap=function(){if(this._isRegistered||(this.coordinateSystemId="openlayers_"+g(),a.a.registerCoordinateSystem(this.coordinateSystemId,this.getCoordinateSystem(this._options)),this._isRegistered=!0),this._chartOptions){var t=this._chartOptions.series;if(t&&p(t)){var e=this._options.convertTypes;if(e)for(var n=t.length-1;n>=0;n--)e.indexOf(t[n].type)>-1||(t[n].coordinateSystem=this.coordinateSystemId),t[n].animation=!1}}},e.prototype.convertData=function(t){var e=t.series;if(e&&e.length>0){if(!this._coordinateSystem){var n=this.getCoordinateSystem(this._options);this._coordinateSystem=new n(this.getMap())}if(e&&p(e)){var o=this._options.convertTypes;if(o)for(var r=e.length-1;r>=0;r--)o.indexOf(e[r].type)>-1&&e[r]&&e[r].hasOwnProperty("coordinates")&&(e[r]=S[e[r].type](t,e[r],this._coordinateSystem))}}return t},e.prototype.getCoordinateSystem=function(t){var e=this.getMap(),n=this.coordinateSystemId,o=function t(e){this.map=e,this._mapOffset=[0,0],this.dimensions=["lng","lat"],this.projCode=t.getProjectionCode(this.map)};return o.dimensions=o.prototype.dimensions||["lng","lat"],o.prototype.getZoom=function(){return this.map.getView().getZoom()},o.prototype.setZoom=function(t){return this.map.getView().setZoom(t)},o.prototype.getViewRectAfterRoam=function(){return this.getViewRect().clone()},o.prototype.setMapOffset=function(t){this._mapOffset=t},o.prototype.dataToPoint=function(e){var n;if(e&&Array.isArray(e)&&e.length>0){n=e.map(function(t){return"string"==typeof t?Number(t):t});var o=t&&t.source||"EPSG:4326",r=t&&t.destination||this.projCode,s=this.map.getPixelFromCoordinate(Object(i.h)(n,o,r)),a=this._mapOffset;return[s[0]-a[0],s[1]-a[1]]}return[0,0]},o.prototype.pointToData=function(t){var e=this._mapOffset;return this.map.getCoordinateFromPixel([t[0]+e[0],t[1]+e[1]])},o.prototype.getViewRect=function(){var t=this.map.getSize();return new a.a.graphic.BoundingRect(0,0,t[0],t[1])},o.prototype.getRoamTransform=function(){return a.a.matrix.create()},o.prototype.prepareCustoms=function(){var t=this.getViewRect();return{coordSys:{type:n,x:t.x,y:t.y,width:t.width,height:t.height},api:{coord:u(this.dataToPoint,this),size:u(o.dataToCoordsSize,this)}}},o.create=function(t){t.eachSeries(function(t){t.get("coordinateSystem")===n&&(t.coordinateSystem=new o(e))})},o.getProjectionCode=function(t){return t?t.getView()&&t.getView().getProjection().getCode():"EPSG:3857"},o.dataToCoordsSize=function(t,e){var n=this;return void 0===e&&(e=[0,0]),[0,1].map(function(o){var r=e[o],i=[],s=[],a=t[o]/2;i[o]=r-a,s[o]=r+a,i[1-o]=e[1-o],s[1-o]=e[1-o];var c=n.dataToPoint(i)[o]-n.dataToPoint(s)[o];return Math.abs(c)},this)},o},e.prototype.dispatchEvent=function(e){return t.prototype.dispatchEvent.call(this,e)},e.prototype.set=function(e,n,o){return t.prototype.set.call(this,e,n,o)},e.prototype.get=function(e){return t.prototype.get.call(this,e)},e.prototype.unset=function(e,n){return t.prototype.unset.call(this,e,n)},e.prototype.on=function(e,n){return t.prototype.on.call(this,e,n)},e.prototype.un=function(e,n){return t.prototype.un.call(this,e,n)},e.formatGeoJSON=_,e.bind=u,e.merge=d,e.uuid=g,e.bindAll=f,e.arrayAdd=l,e.removeNode=v,e.isObject=p,e}(r.a),C=M;e.a=C,function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:n("0cfB")).default;t&&(t.register(c,"extendStatics","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register(h,"__extends","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register(p,"isObject","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register(d,"merge","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register(u,"bind","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register(l,"arrayAdd","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register(g,"uuid","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register(f,"bindAll","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register(v,"removeNode","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register(m,"mockEvent","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register(y,"checkDecoded","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register(w,"decodePolygon","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register(E,"decode","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register(_,"formatGeoJSON","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register($,"pie","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register(j,"bar","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register(b,"line","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register(S,"charts","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register(O,"_options","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register(M,"EChartsLayer","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"),t.register(C,"default","/Users/dongdong.feng/Documents/vis-project/ol3Echarts/packages/ol-echarts/dist/ol-echarts.esm.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:n("0cfB")).leaveModule;e&&e(t)}()}).call(this,n("3UD+")(t))},o9yN:function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),r=n("Xu5n"),i=n("oscj"),s=n("SAzV"),a=n("LvFn"),c=n("Lrro"),h=n("JJRp");e.default=class extends o.Component{constructor(t,e){super(t,e),this.state={zoom:5,rotation:0,center:[113.53450137499999,34.44104525]},this.container=o.createRef(),this.map=null}componentDidMount(){this.container.current&&(this.map=new r.a({target:this.container.current,view:new i.a({...this.state,projection:"EPSG:4326"}),layers:[new s.a({source:new a.a({url:"http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}"})})]}),Object(h.a)("./static/json/heatmap.json",t=>{const e={title:{text:"全国主要城市空气质量",subtext:"data from PM25.in",sublink:"http://www.pm25.in",left:"center",textStyle:{color:"#fff"}},backgroundColor:"transparent",visualMap:{min:0,max:500,splitNumber:5,inRange:{color:["#d94e5d","#eac736","#50a3ba"].reverse()},textStyle:{color:"#fff"}},series:[{name:"AQI",type:"heatmap",data:(e=>{const n=[];for(let o=0;o<e.length;o++){const r=t.coordinates[e[o].name];r&&n.push(r.concat(e[o].value))}return n})(t.attr)}]};this.chart=new c.a(e,{hideOnMoving:!0,hideOnZooming:!0}),this.chart.appendTo(this.map)}))}render(){return o.createElement("div",{ref:this.container,className:"map-content"})}}},yLpj:function(t,e,n){t.exports=n("c7XV")(15)}}]);