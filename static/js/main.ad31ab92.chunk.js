(this["webpackJsonpgoogle-map-react-example"]=this["webpackJsonpgoogle-map-react-example"]||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},21:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);n(21);var o=n(0),i=n.n(o),r=n(12),a=n(7),s=n.n(a),p=n(13),l=n(18),u=n(4),h=n(5),c=n(1),d=n.n(c),m=n(2),g=n.n(m),_=n(14),f=n.n(_),v=n(19),C=n(3),y=n.n(C);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function w(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b={width:"100%",height:"100%",left:0,top:0,margin:0,padding:0,position:"absolute"},D=function(e){function t(){return e.apply(this,arguments)||this}w(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(){return!1},n.render=function(){return i.a.createElement("div",{ref:this.props.registerChild,style:b})},t}(o.Component),k=function(e){function t(t){var n;return(n=e.call(this)||this).gmapInstance=t,n}w(t,e);var n=t.prototype;return n.getChildren=function(){return this.gmapInstance.props.children},n.getMousePosition=function(){return this.gmapInstance.mouse_},n.getUpdateCounter=function(){return this.gmapInstance.updateCounter_},n.dispose=function(){this.gmapInstance=null,this.removeAllListeners()},t}(f.a),z=function(e,t){for(var n=M({},e),o=0;o<t.length;o++){var i=t[o];i in n&&delete n[i]}return n},O=Object.prototype.hasOwnProperty;function S(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function T(e,t){if(S(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var i=0;i<n.length;i++)if(!O.call(t,n[i])||!S(e[n[i]],t[n[i]]))return!1;return!0}var E={width:"100%",height:"100%",left:0,top:0,margin:0,padding:0,position:"absolute"},x={width:0,height:0,left:0,top:0,backgroundColor:"transparent",position:"absolute"},P=function(e){function t(t){var n;return(n=e.call(this,t)||this)._getState=function(){return{children:n.props.dispatcher.getChildren(),updateCounter:n.props.dispatcher.getUpdateCounter()}},n._onChangeHandler=function(){if(n.dimensionsCache_){var e=(n.state.children||[]).length,t=n._getState();n.setState(t,(function(){return(t.children||[]).length!==e&&n._onMouseChangeHandler()}))}},n._onChildClick=function(){n.props.onChildClick&&n.hoverChildProps_&&n.props.onChildClick(n.hoverKey_,n.hoverChildProps_)},n._onChildMouseDown=function(){n.props.onChildMouseDown&&n.hoverChildProps_&&n.props.onChildMouseDown(n.hoverKey_,n.hoverChildProps_)},n._onChildMouseEnter=function(e,t){n.dimensionsCache_&&(n.props.onChildMouseEnter&&n.props.onChildMouseEnter(e,t),n.hoverChildProps_=t,n.hoverKey_=e,n.setState({hoverKey:e}))},n._onChildMouseLeave=function(){if(n.dimensionsCache_){var e=n.hoverKey_;null!=e&&(n.props.onChildMouseLeave&&n.props.onChildMouseLeave(e,n.hoverChildProps_),n.hoverKey_=null,n.hoverChildProps_=null,g.a.flushSync((function(){n.setState({hoverKey:null})})))}},n._onMouseAllow=function(e){e||n._onChildMouseLeave(),n.allowMouse_=e},n._onMouseChangeHandler=function(){n.allowMouse_&&n._onMouseChangeHandlerRaf()},n._onMouseChangeHandlerRaf=function(){if(n.dimensionsCache_){var e=n.props.dispatcher.getMousePosition();if(e){var t=[],o=n.props.getHoverDistance();if(i.a.Children.forEach(n.state.children,(function(i,r){if(i&&(void 0!==i.props.latLng||void 0!==i.props.lat||void 0!==i.props.lng)){var a=null!=i.key?i.key:r,s=n.props.distanceToMouse(n.dimensionsCache_[a],e,i.props);s<o&&t.push({key:a,dist:s,props:i.props})}})),t.length){t.sort((function(e,t){return e.dist-t.dist}));var r=t[0].key,a=t[0].props;n.hoverKey_!==r&&(n._onChildMouseLeave(),n._onChildMouseEnter(r,a))}else n._onChildMouseLeave()}else n._onChildMouseLeave()}},n._getDimensions=function(e){return n.dimensionsCache_[e]},n.dimensionsCache_={},n.hoverKey_=null,n.hoverChildProps_=null,n.allowMouse_=!0,n.state=M({},n._getState(),{hoverKey:null}),n}w(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.dispatcher.on("kON_CHANGE",this._onChangeHandler),this.props.dispatcher.on("kON_MOUSE_POSITION_CHANGE",this._onMouseChangeHandler),this.props.dispatcher.on("kON_CLICK",this._onChildClick),this.props.dispatcher.on("kON_MDOWN",this._onChildMouseDown)},n.shouldComponentUpdate=function(e,t){return!0===this.props.experimental?!T(this.props,e)||!T(z(this.state,["hoverKey"]),z(t,["hoverKey"])):!T(this.props,e)||!T(this.state,t)},n.componentWillUnmount=function(){this.props.dispatcher.removeListener("kON_CHANGE",this._onChangeHandler),this.props.dispatcher.removeListener("kON_MOUSE_POSITION_CHANGE",this._onMouseChangeHandler),this.props.dispatcher.removeListener("kON_CLICK",this._onChildClick),this.props.dispatcher.removeListener("kON_MDOWN",this._onChildMouseDown),this.dimensionsCache_=null},n.render=function(){var e=this,t=this.props.style||E;this.dimensionsCache_={};var n=i.a.Children.map(this.state.children,(function(t,n){if(t){if(void 0===t.props.latLng&&void 0===t.props.lat&&void 0===t.props.lng)return i.a.cloneElement(t,{$geoService:e.props.geoService,$onMouseAllow:e._onMouseAllow,$prerender:e.props.prerender});var o=void 0!==t.props.latLng?t.props.latLng:{lat:t.props.lat,lng:t.props.lng},r=e.props.insideMapPanes?e.props.geoService.fromLatLngToDivPixel(o):e.props.geoService.fromLatLngToCenterPixel(o),a={left:r.x,top:r.y};if(void 0!==t.props.seLatLng||void 0!==t.props.seLat&&void 0!==t.props.seLng){var s=void 0!==t.props.seLatLng?t.props.seLatLng:{lat:t.props.seLat,lng:t.props.seLng},p=e.props.insideMapPanes?e.props.geoService.fromLatLngToDivPixel(s):e.props.geoService.fromLatLngToCenterPixel(s);a.width=p.x-r.x,a.height=p.y-r.y}var l=e.props.geoService.fromLatLngToContainerPixel(o),u=null!=t.key?t.key:n;return e.dimensionsCache_[u]=M({x:l.x,y:l.y},o),i.a.createElement("div",{key:u,style:M({},x,a),className:t.props.$markerHolderClassName},i.a.cloneElement(t,{$hover:u===e.state.hoverKey,$getDimensions:e._getDimensions,$dimensionKey:u,$geoService:e.props.geoService,$onMouseAllow:e._onMouseAllow,$prerender:e.props.prerender}))}}));return i.a.createElement("div",{style:t},n)},t}(o.Component);P.propTypes={geoService:d.a.any,style:d.a.any,distanceToMouse:d.a.func,dispatcher:d.a.any,onChildClick:d.a.func,onChildMouseDown:d.a.func,onChildMouseLeave:d.a.func,onChildMouseEnter:d.a.func,getHoverDistance:d.a.func,insideMapPanes:d.a.bool,prerender:d.a.bool},P.defaultProps={insideMapPanes:!1,prerender:!1};var A={width:"50%",height:"50%",left:"50%",top:"50%",margin:0,padding:0,position:"absolute"};function I(e){return i.a.createElement("div",{style:A},i.a.createElement(P,M({},e,{prerender:!0})))}var N,j,Z,H=new Promise((function(e){Z=e})),U=function(e,t){if(!e)return H;if(j)return j;e.libraries||(e.libraries=[]);var n=[].concat(e.libraries);if(t&&(0!==n.length&&n.includes("visualization")||n.push("visualization"),console.warn("heatmapLibrary will be deprecated in the future. Please use { libraries: ['visualization'] } in bootstrapURLKeys property instead")),"undefined"==typeof window)throw new Error("google map cannot be loaded outside browser env");var o=e.key,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t.indexOf(n=r[o])>=0||(i[n]=e[n]);return i}(e,["key"]);return N||(N=new v.a(M({apiKey:o||""},i,{libraries:n}))),j=N.load().then((function(){return Z(window.google.maps),window.google.maps})),Z(j),j};function R(e,t,n){var o=n-t;return e===n?e:((e-t)%o+o)%o+t}var K=function(){function e(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid LatLng object: ("+e+", "+t+")");this.lat=+e,this.lng=+t}return e.prototype.wrap=function(){return new e(this.lat,R(this.lng,-180,180))},e}();K.convert=function(e){return e instanceof K?e:Array.isArray(e)?new K(e[0],e[1]):"lng"in e&&"lat"in e?new K(e.lat,e.lng):e};var B=function(){function e(e,t,n){this.tileSize=e||512,this._minZoom=t||0,this._maxZoom=n||52,this.latRange=[-85.05113,85.05113],this.width=0,this.height=0,this.zoom=0,this.center=new K(0,0),this.angle=0}var t,n=e.prototype;return n.zoomScale=function(e){return Math.pow(2,e)},n.scaleZoom=function(e){return Math.log(e)/Math.LN2},n.project=function(e,t){return new y.a(this.lngX(e.lng,t),this.latY(e.lat,t))},n.unproject=function(e,t){return new K(this.yLat(e.y,t),this.xLng(e.x,t))},n.lngX=function(e,t){return(180+e)*(t||this.worldSize)/360},n.latY=function(e,t){return(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+e*Math.PI/360)))*(t||this.worldSize)/360},n.xLng=function(e,t){return 360*e/(t||this.worldSize)-180},n.yLat=function(e,t){return 360/Math.PI*Math.atan(Math.exp((180-360*e/(t||this.worldSize))*Math.PI/180))-90},n.locationPoint=function(e){var t=this.project(e);return this.centerPoint._sub(this.point._sub(t)._rotate(this.angle))},n.pointLocation=function(e){var t=this.centerPoint._sub(e)._rotate(-this.angle);return this.unproject(this.point.sub(t))},(t=[{key:"minZoom",get:function(){return this._minZoom},set:function(e){this._minZoom=e,this.zoom=Math.max(this.zoom,e)}},{key:"maxZoom",get:function(){return this._maxZoom},set:function(e){this._maxZoom=e,this.zoom=Math.min(this.zoom,e)}},{key:"worldSize",get:function(){return this.tileSize*this.scale}},{key:"centerPoint",get:function(){return new y.a(0,0)}},{key:"size",get:function(){return new y.a(this.width,this.height)}},{key:"bearing",get:function(){return-this.angle/Math.PI*180},set:function(e){this.angle=-R(e,-180,180)*Math.PI/180}},{key:"zoom",get:function(){return this._zoom},set:function(e){var t=Math.min(Math.max(e,this.minZoom),this.maxZoom);this._zoom=t,this.scale=this.zoomScale(t),this.tileZoom=Math.floor(t),this.zoomFraction=t-this.tileZoom}},{key:"x",get:function(){return this.lngX(this.center.lng)}},{key:"y",get:function(){return this.latY(this.center.lat)}},{key:"point",get:function(){return new y.a(this.x,this.y)}}])&&function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(e.prototype,t),e}(),W=function(){function e(e){this.hasSize_=!1,this.hasView_=!1,this.transform_=new B(e||512)}var t=e.prototype;return t.setView=function(e,t,n){this.transform_.center=K.convert(e),this.transform_.zoom=+t,this.transform_.bearing=+n,this.hasView_=!0},t.setViewSize=function(e,t){this.transform_.width=e,this.transform_.height=t,this.hasSize_=!0},t.setMapCanvasProjection=function(e,t){this.maps_=e,this.mapCanvasProjection_=t},t.canProject=function(){return this.hasSize_&&this.hasView_},t.hasSize=function(){return this.hasSize_},t.fromLatLngToCenterPixel=function(e){return this.transform_.locationPoint(K.convert(e))},t.fromLatLngToDivPixel=function(e){if(this.mapCanvasProjection_){var t=new this.maps_.LatLng(e.lat,e.lng);return this.mapCanvasProjection_.fromLatLngToDivPixel(t)}return this.fromLatLngToCenterPixel(e)},t.fromLatLngToContainerPixel=function(e){if(this.mapCanvasProjection_){var t=new this.maps_.LatLng(e.lat,e.lng);return this.mapCanvasProjection_.fromLatLngToContainerPixel(t)}var n=this.fromLatLngToCenterPixel(e);return n.x-=this.transform_.worldSize*Math.round(n.x/this.transform_.worldSize),n.x+=this.transform_.width/2,n.y+=this.transform_.height/2,n},t.fromContainerPixelToLatLng=function(e){if(this.mapCanvasProjection_){var t=this.mapCanvasProjection_.fromContainerPixelToLatLng(e);return{lat:t.lat(),lng:t.lng()}}var n=M({},e);n.x-=this.transform_.width/2,n.y-=this.transform_.height/2;var o=this.transform_.pointLocation(y.a.convert(n));return o.lng-=360*Math.round(o.lng/360),o},t.getWidth=function(){return this.transform_.width},t.getHeight=function(){return this.transform_.height},t.getZoom=function(){return this.transform_.zoom},t.getCenter=function(){return this.transform_.pointLocation({x:0,y:0})},t.getBounds=function(e,t){var n=e&&e[0]||0,o=e&&e[1]||0,i=e&&e[2]||0,r=e&&e[3]||0;if(this.getWidth()-o-r>0&&this.getHeight()-n-i>0){var a=this.transform_.pointLocation(y.a.convert({x:r-this.getWidth()/2,y:n-this.getHeight()/2})),s=this.transform_.pointLocation(y.a.convert({x:this.getWidth()/2-o,y:this.getHeight()/2-i})),p=[a.lat,a.lng,s.lat,s.lng,s.lat,a.lng,a.lat,s.lng];return t&&(p=p.map((function(e){return Math.round(e*t)/t}))),p}return[0,0,0,0]},e}();function F(e){if(window.requestAnimationFrame)return window.requestAnimationFrame(e);var t=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return t?t(e):window.setTimeout(e,1e3/60)}var G=Math.log2?Math.log2:function(e){return Math.log(e)/Math.LN2};function V(e,t){return Object.keys(e).reduce((function(n,o){return t(e[o])&&(n[o]=e[o]),n}),{})}var $=function(e){if(null!==e&&"object"==typeof e){if(0===Object.keys(e).length)return!0}else if(null==e||""===e)return!0;return!1},q=Object.prototype.toString;function X(e){return"number"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Number]"===q.call(e)}var Y=null;function J(){if(Y)return Y;if("undefined"!=typeof navigator){var e=navigator.userAgent.indexOf("MSIE")>-1,t=navigator.userAgent.indexOf("Firefox")>-1,n=navigator.userAgent.toLowerCase().indexOf("op")>-1,o=navigator.userAgent.indexOf("Chrome")>-1,i=navigator.userAgent.indexOf("Safari")>-1;return o&&i&&(i=!1),o&&n&&(o=!1),Y={isExplorer:e,isFirefox:t,isOpera:n,isChrome:o,isSafari:i}}return Y={isChrome:!0,isExplorer:!1,isFirefox:!1,isOpera:!1,isSafari:!1}}var Q=function(e){return Function.prototype.toString.call(e)};function ee(e){if(!e||"object"!=typeof e)return!1;var t="function"==typeof e.constructor?Object.getPrototypeOf(e):Object.prototype;if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&Q(n)===Q(Object)}function te(e,t,n,o){e.addEventListener(t,n,function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){e=!1}return e}()?{capture:o,passive:!0}:o)}var ne,oe=!("undefined"==typeof window||!window.document||!window.document.createElement);ne=oe?window:"undefined"!=typeof self?self:void 0;var ie,re="undefined"!=typeof document&&document.attachEvent,ae=!1;if(oe&&!re){var se=function(){var e=ne.requestAnimationFrame||ne.mozRequestAnimationFrame||ne.webkitRequestAnimationFrame||function(e){return ne.setTimeout(e,20)};return function(t){return e(t)}}(),pe=(ie=ne.cancelAnimationFrame||ne.mozCancelAnimationFrame||ne.webkitCancelAnimationFrame||ne.clearTimeout,function(e){return ie(e)}),le=function(e){var t=e.__resizeTriggers__,n=t.firstElementChild,o=t.lastElementChild,i=n.firstElementChild;o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight,i.style.width=n.offsetWidth+1+"px",i.style.height=n.offsetHeight+1+"px",n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight},ue=function(e){var t=this;le(this),this.__resizeRAF__&&pe(this.__resizeRAF__),this.__resizeRAF__=se((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(n){n.call(t,e)})))}))},he=!1,ce="",de="animationstart",me="Webkit Moz O ms".split(" "),ge="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ");if(oe){var _e=document.createElement("fakeelement");if(void 0!==_e.style.animationName&&(he=!0),!1===he)for(var fe=0;fe<me.length;fe++)if(void 0!==_e.style[me[fe]+"AnimationName"]){ce="-"+me[fe].toLowerCase()+"-",de=ge[fe],he=!0;break}}var ve="resizeanim",Ce="@"+ce+"keyframes "+ve+" { from { opacity: 0; } to { opacity: 0; } } ",ye=ce+"animation: 1ms "+ve+"; "}var Me=void 0!==g.a.createPortal,we=Me?g.a.createPortal:g.a.unstable_renderSubtreeIntoContainer,Le=function(e){return ee(e)?e:{lat:e[0],lng:e[1]}},be=function(e,t){return t<e?e:t},De=function(e){function t(t){var n;if((n=e.call(this,t)||this)._getMinZoom=function(){if(n.geoService_.getWidth()>0||n.geoService_.getHeight()>0){var e=Math.ceil(n.geoService_.getWidth()/256)+2,t=Math.ceil(n.geoService_.getHeight()/256)+2,o=Math.max(e,t);return Math.ceil(G(o))}return 3},n._computeMinZoom=function(e){return $(e)?n._getMinZoom():e},n._mapDomResizeCallback=function(){if(n.resetSizeOnIdle_=!0,n.maps_){var e=n.props.center||n.props.defaultCenter,t=n.map_.getCenter();n.maps_.event.trigger(n.map_,"resize"),n.map_.setCenter(n.props.resetBoundsOnResize?e:t)}},n._setLayers=function(e){e.forEach((function(e){n.layers_[e]=new n.maps_[e],n.layers_[e].setMap(n.map_)}))},n._renderPortal=function(){return i.a.createElement(P,{experimental:n.props.experimental,onChildClick:n._onChildClick,onChildMouseDown:n._onChildMouseDown,onChildMouseEnter:n._onChildMouseEnter,onChildMouseLeave:n._onChildMouseLeave,geoService:n.geoService_,insideMapPanes:!0,distanceToMouse:n.props.distanceToMouse,getHoverDistance:n._getHoverDistance,dispatcher:n.markersDispatcher_})},n._initMap=function(){if(!n.initialized_){n.initialized_=!0;var e=Le(n.props.center||n.props.defaultCenter);n.geoService_.setView(e,n.props.zoom||n.props.defaultZoom,0),n._onBoundsChanged();var t=M({},n.props.apiKey&&{key:n.props.apiKey},n.props.bootstrapURLKeys);n.props.googleMapLoader(t,n.props.heatmapLibrary).then((function(e){if(n.mounted_){var t,o,i=n.geoService_.getCenter(),r={zoom:n.props.zoom||n.props.defaultZoom,center:new e.LatLng(i.lat,i.lng)};n.props.heatmap.positions&&(Object.assign(L(n),{heatmap:(t=e,o=n.props.heatmap,new t.visualization.HeatmapLayer({data:o.positions.reduce((function(e,n){var o=n.weight,i=void 0===o?1:o;return e.push({location:new t.LatLng(n.lat,n.lng),weight:i}),e}),[])}))}),function(e,t){var n=t.options,o=void 0===n?{}:n;Object.keys(o).map((function(t){return e.set(t,o[t])}))}(n.heatmap,n.props.heatmap));var a=V(e,ee),s="function"==typeof n.props.options?n.props.options(a):n.props.options,p=!$(n.props.draggable)&&{draggable:n.props.draggable},l=n._computeMinZoom(s.minZoom);n.minZoom_=l;var u=M({},{overviewMapControl:!1,streetViewControl:!1,rotateControl:!0,mapTypeControl:!1,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}],minZoom:3},{minZoom:l},s,r);n.defaultDraggableOption_=$(u.draggable)?n.defaultDraggableOption_:u.draggable;var h=M({},u,p);h.minZoom=be(h.minZoom,l);var c=new e.Map(g.a.findDOMNode(n.googleMapDom_),h);n.map_=c,n.maps_=e,n._setLayers(n.props.layerTypes);var d=e.version.match(/^3\.(\d+)\./),m=d&&Number(d[1]),_=L(n),f=Object.assign(new e.OverlayView,{onAdd:function(){var t="undefined"!=typeof screen?screen.width+"px":"2000px",n="undefined"!=typeof screen?screen.height+"px":"2000px",o=document.createElement("div");if(o.style.backgroundColor="transparent",o.style.position="absolute",o.style.left="0px",o.style.top="0px",o.style.width=t,o.style.height=n,_.props.overlayViewDivStyle){var i=_.props.overlayViewDivStyle;"object"==typeof i&&Object.keys(i).forEach((function(e){o.style[e]=i[e]}))}this.getPanes().overlayMouseTarget.appendChild(o),_.geoService_.setMapCanvasProjection(e,f.getProjection()),Me?g.a.flushSync((function(){_.setState({overlay:o})})):we(_,_._renderPortal(),o,(function(){return _.setState({overlay:o})}))},onRemove:function(){var e=_.state.overlay;e&&!Me&&g.a.unmountComponentAtNode(e),g.a.flushSync((function(){_.setState({overlay:null})}))},draw:function(){if(_.updateCounter_++,_._onBoundsChanged(c,e,!_.props.debounced),_.googleApiLoadedCalled_||(_._onGoogleApiLoaded({map:c,maps:e,ref:_.googleMapDom_}),_.googleApiLoadedCalled_=!0),_.mouse_){var t=_.geoService_.fromContainerPixelToLatLng(_.mouse_);_.mouse_.lat=t.lat,_.mouse_.lng=t.lng}_._onChildMouseMove(),_.markersDispatcher_&&(_.markersDispatcher_.emit("kON_CHANGE"),_.fireMouseEventOnIdle_&&(console.log("dispatching"),_.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE")))}});n.overlay_=f,f.setMap(c),n.props.heatmap.positions&&n.heatmap.setMap(c),n.props.onTilesLoaded&&e.event.addListener(c,"tilesloaded",(function(){_._onTilesLoaded()})),e.event.addListener(c,"zoom_changed",(function(){_.geoService_.getZoom()!==c.getZoom()&&(_.zoomAnimationInProgress_||(_.zoomAnimationInProgress_=!0,_._onZoomAnimationStart(c.zoom)),m<32)&&((new Date).getTime()-n.zoomControlClickTime_<300?F((function(){return F((function(){_.updateCounter_++,_._onBoundsChanged(c,e)}))})):(_.updateCounter_++,_._onBoundsChanged(c,e)))})),e.event.addListener(c,"idle",(function(){if(n.resetSizeOnIdle_){n._setViewSize();var t=n._computeMinZoom(s.minZoom);t!==n.minZoom_&&(n.minZoom_=t,c.setOptions({minZoom:t})),n.resetSizeOnIdle_=!1}_.zoomAnimationInProgress_&&(_.zoomAnimationInProgress_=!1,_._onZoomAnimationEnd(c.zoom)),_.updateCounter_++,_._onBoundsChanged(c,e),_.dragTime_=0,_.markersDispatcher_&&_.markersDispatcher_.emit("kON_CHANGE")})),e.event.addListener(c,"mouseover",(function(){_.mouseInMap_=!0})),e.event.addListener(c,"click",(function(){_.mouseInMap_=!0})),e.event.addListener(c,"mouseout",(function(){_.mouseInMap_=!1,_.mouse_=null,_.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE")})),e.event.addListener(c,"drag",(function(){_.dragTime_=(new Date).getTime(),_._onDrag(c)})),e.event.addListener(c,"dragend",(function(){var t=e.event.addListener(c,"idle",(function(){e.event.removeListener(t),_._onDragEnd(c)}))})),e.event.addListener(c,"maptypeid_changed",(function(){_._onMapTypeIdChange(c.getMapTypeId())}))}})).catch((function(e){throw n._onGoogleApiLoaded({map:null,maps:null,ref:n.googleMapDom_}),console.error(e),e}))}},n._onGoogleApiLoaded=function(){var e;n.props.onGoogleApiLoaded&&(e=n.props).onGoogleApiLoaded.apply(e,arguments)},n._getHoverDistance=function(){return n.props.hoverDistance},n._onDrag=function(){var e;return n.props.onDrag&&(e=n.props).onDrag.apply(e,arguments)},n._onDragEnd=function(){var e;return n.props.onDragEnd&&(e=n.props).onDragEnd.apply(e,arguments)},n._onMapTypeIdChange=function(){var e;return n.props.onMapTypeIdChange&&(e=n.props).onMapTypeIdChange.apply(e,arguments)},n._onZoomAnimationStart=function(){var e;return n.props.onZoomAnimationStart&&(e=n.props).onZoomAnimationStart.apply(e,arguments)},n._onZoomAnimationEnd=function(){var e;return n.props.onZoomAnimationEnd&&(e=n.props).onZoomAnimationEnd.apply(e,arguments)},n._onTilesLoaded=function(){return n.props.onTilesLoaded&&n.props.onTilesLoaded()},n._onChildClick=function(){var e;if(n.props.onChildClick)return(e=n.props).onChildClick.apply(e,arguments)},n._onChildMouseDown=function(e,t){n.childMouseDownArgs_=[e,t],n.props.onChildMouseDown&&n.props.onChildMouseDown(e,t,M({},n.mouse_))},n._onChildMouseUp=function(){var e;n.childMouseDownArgs_&&(n.props.onChildMouseUp&&(e=n.props).onChildMouseUp.apply(e,n.childMouseDownArgs_.concat([M({},n.mouse_)])),n.childMouseDownArgs_=null,n.childMouseUpTime_=(new Date).getTime())},n._onChildMouseMove=function(){var e;n.childMouseDownArgs_&&n.props.onChildMouseMove&&(e=n.props).onChildMouseMove.apply(e,n.childMouseDownArgs_.concat([M({},n.mouse_)]))},n._onChildMouseEnter=function(){var e;if(n.props.onChildMouseEnter)return(e=n.props).onChildMouseEnter.apply(e,arguments)},n._onChildMouseLeave=function(){var e;if(n.props.onChildMouseLeave)return(e=n.props).onChildMouseLeave.apply(e,arguments)},n._setViewSize=function(){if(n.mounted_){if(document.fullscreen||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement)n.geoService_.setViewSize(window.innerWidth,window.innerHeight);else{var e=g.a.findDOMNode(n.googleMapDom_);n.geoService_.setViewSize(e.clientWidth,e.clientHeight)}n._onBoundsChanged()}},n._onWindowResize=function(){n.resetSizeOnIdle_=!0},n._onMapMouseMove=function(e){if(n.mouseInMap_){var t=(new Date).getTime();t-n.mouseMoveTime_>50&&(n.boundingRect_=e.currentTarget.getBoundingClientRect()),n.mouseMoveTime_=t;var o=e.clientX-n.boundingRect_.left,i=e.clientY-n.boundingRect_.top;n.mouse_||(n.mouse_={x:0,y:0,lat:0,lng:0}),n.mouse_.x=o,n.mouse_.y=i;var r=n.geoService_.fromContainerPixelToLatLng(n.mouse_);n.mouse_.lat=r.lat,n.mouse_.lng=r.lng,n._onChildMouseMove(),t-n.dragTime_<100?(console.log("dragging"),n.fireMouseEventOnIdle_=!0):(n.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE"),n.fireMouseEventOnIdle_=!1)}},n._onClick=function(){var e;return n.props.onClick&&!n.childMouseDownArgs_&&(new Date).getTime()-n.childMouseUpTime_>300&&0===n.dragTime_&&(e=n.props).onClick.apply(e,arguments)},n._onMapClick=function(e){n.markersDispatcher_&&(n._onMapMouseMove(e),(new Date).getTime()-n.dragTime_>100&&(n.mouse_&&n._onClick(M({},n.mouse_,{event:e})),n.markersDispatcher_.emit("kON_CLICK",e)))},n._onMapMouseDownNative=function(e){n.mouseInMap_&&n._onMapMouseDown(e)},n._onMapMouseDown=function(e){n.markersDispatcher_&&(new Date).getTime()-n.dragTime_>100&&(n._onMapMouseMove(e),n.markersDispatcher_.emit("kON_MDOWN",e))},n._onMapMouseDownCapture=function(){J().isChrome&&(n.zoomControlClickTime_=(new Date).getTime())},n._onKeyDownCapture=function(){J().isChrome&&(n.zoomControlClickTime_=(new Date).getTime())},n._isCenterDefined=function(e){return e&&(ee(e)&&X(e.lat)&&X(e.lng)||2===e.length&&X(e[0])&&X(e[1]))},n._onBoundsChanged=function(e,t,o){if(e){var i=e.getCenter();n.geoService_.setView([i.lat(),i.lng()],e.getZoom(),0)}if((n.props.onChange||n.props.onBoundsChange)&&n.geoService_.canProject()){var r=n.geoService_.getZoom(),a=n.geoService_.getBounds(),s=n.geoService_.getCenter();if(!function(e,t,n){if(e&&t){for(var o=0;o!==e.length;++o)if(Math.abs(e[o]-t[o])>1e-5)return!1;return!0}return!1}(a,n.prevBounds_)&&!1!==o){var p=n.geoService_.getBounds(n.props.margin);n.props.onBoundsChange&&n.props.onBoundsChange(n.centerIsObject_?M({},s):[s.lat,s.lng],r,a,p),n.props.onChange&&n.props.onChange({center:M({},s),zoom:r,bounds:{nw:{lat:a[0],lng:a[1]},se:{lat:a[2],lng:a[3]},sw:{lat:a[4],lng:a[5]},ne:{lat:a[6],lng:a[7]}},marginBounds:{nw:{lat:p[0],lng:p[1]},se:{lat:p[2],lng:p[3]},sw:{lat:p[4],lng:p[5]},ne:{lat:p[6],lng:p[7]}},size:n.geoService_.hasSize()?{width:n.geoService_.getWidth(),height:n.geoService_.getHeight()}:{width:0,height:0}}),n.prevBounds_=a}}},n._registerChild=function(e){n.googleMapDom_=e},n.mounted_=!1,n.initialized_=!1,n.googleApiLoadedCalled_=!1,n.map_=null,n.maps_=null,n.prevBounds_=null,n.heatmap=null,n.layers_={},n.mouse_=null,n.mouseMoveTime_=0,n.boundingRect_=null,n.mouseInMap_=!0,n.dragTime_=0,n.fireMouseEventOnIdle_=!1,n.updateCounter_=0,n.markersDispatcher_=new k(L(n)),n.geoService_=new W(256),n.centerIsObject_=ee(n.props.center),n.minZoom_=3,n.defaultDraggableOption_=!0,n.zoomControlClickTime_=0,n.childMouseDownArgs_=null,n.childMouseUpTime_=0,n.googleMapDom_=null,n._isCenterDefined(n.props.center||n.props.defaultCenter)){var o=Le(n.props.center||n.props.defaultCenter);n.geoService_.setView(o,n.props.zoom||n.props.defaultZoom,0)}return n.zoomAnimationInProgress_=!1,n.state={overlay:null},n}w(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.mounted_=!0,te(window,"resize",this._onWindowResize,!1),te(window,"keydown",this._onKeyDownCapture,!0);var t=g.a.findDOMNode(this.googleMapDom_);t&&te(t,"mousedown",this._onMapMouseDownNative,!0),te(window,"mouseup",this._onChildMouseUp,!1);var n=M({},this.props.apiKey&&{key:this.props.apiKey},this.props.bootstrapURLKeys);this.props.googleMapLoader(n,this.props.heatmapLibrary),setTimeout((function(){e._setViewSize(),e._isCenterDefined(e.props.center||e.props.defaultCenter)&&e._initMap()}),0,this),this.props.resetBoundsOnResize&&function(e,t){if(void 0===e.parentNode){var n=document.createElement("div");e.parentNode=n}e=e.parentNode,re?e.attachEvent("onresize",t):(e.__resizeTriggers__||("static"==getComputedStyle(e).position&&(e.style.position="relative"),function(){if(!ae){var e=(Ce||"")+".resize-triggers { "+(ye||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),t.appendChild(n),ae=!0}}(),e.__resizeLast__={},e.__resizeListeners__=[],(e.__resizeTriggers__=document.createElement("div")).className="resize-triggers",e.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',e.appendChild(e.__resizeTriggers__),le(e),te(e,"scroll",ue,!0),de&&e.__resizeTriggers__.addEventListener(de,(function(t){t.animationName==ve&&le(e)}))),e.__resizeListeners__.push(t))}(t,this._mapDomResizeCallback)},n.shouldComponentUpdate=function(e,t){return!T(z(this.props,["draggable"]),z(e,["draggable"]))||!T(this.state,t)},n.componentDidUpdate=function(e){var t=this;if(!this._isCenterDefined(e.center)&&this._isCenterDefined(this.props.center)&&setTimeout((function(){return t._initMap()}),0),this.map_){var n=this.geoService_.getCenter();if(this._isCenterDefined(this.props.center)){var o=Le(this.props.center),i=this._isCenterDefined(e.center)?Le(e.center):null;(!i||Math.abs(o.lat-i.lat)+Math.abs(o.lng-i.lng)>1e-5)&&Math.abs(o.lat-n.lat)+Math.abs(o.lng-n.lng)>1e-5&&this.map_.panTo({lat:o.lat,lng:o.lng})}if($(this.props.zoom)||Math.abs(this.props.zoom-e.zoom)>0&&this.map_.setZoom(this.props.zoom),!$(e.draggable)&&$(this.props.draggable)?this.map_.setOptions({draggable:this.defaultDraggableOption_}):T(e.draggable,this.props.draggable)||this.map_.setOptions({draggable:this.props.draggable}),!$(this.props.options)&&!T(e.options,this.props.options)){var r=V(this.maps_,ee),a="function"==typeof this.props.options?this.props.options(r):this.props.options;if("minZoom"in(a=z(a,["zoom","center","draggable"]))){var s=this._computeMinZoom(a.minZoom);a.minZoom=be(a.minZoom,s)}this.map_.setOptions(a)}T(this.props.layerTypes,e.layerTypes)||(Object.keys(this.layers_).forEach((function(e){t.layers_[e].setMap(null),delete t.layers_[e]})),this._setLayers(this.props.layerTypes)),this.heatmap&&!T(this.props.heatmap.positions,e.heatmap.positions)&&this.heatmap.setData(this.props.heatmap.positions.map((function(e){return{location:new t.maps_.LatLng(e.lat,e.lng),weight:e.weight}}))),this.heatmap&&!T(this.props.heatmap.options,e.heatmap.options)&&Object.keys(this.props.heatmap.options).forEach((function(e){t.heatmap.set(e,t.props.heatmap.options[e])}))}this.markersDispatcher_.emit("kON_CHANGE"),T(this.props.hoverDistance,e.hoverDistance)||this.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE")},n.componentWillUnmount=function(){this.mounted_=!1;var e,t,n=g.a.findDOMNode(this.googleMapDom_);n&&n.removeEventListener("mousedown",this._onMapMouseDownNative,!0),window.removeEventListener("resize",this._onWindowResize),window.removeEventListener("keydown",this._onKeyDownCapture),window.removeEventListener("mouseup",this._onChildMouseUp,!1),this.props.resetBoundsOnResize&&(t=this._mapDomResizeCallback,e=(e=n).parentNode,re?e.detachEvent("onresize",t):(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||(e.removeEventListener("scroll",ue),e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)))),this.overlay_&&this.overlay_.setMap(null),this.maps_&&this.map_&&this.props.shouldUnregisterMapOnUnmount&&(this.map_.setOptions({scrollwheel:!1}),this.maps_.event.clearInstanceListeners(this.map_)),this.props.shouldUnregisterMapOnUnmount&&(this.map_=null,this.maps_=null),this.markersDispatcher_.dispose(),this.resetSizeOnIdle_=!1,this.props.shouldUnregisterMapOnUnmount&&(delete this.map_,delete this.markersDispatcher_)},n.render=function(){var e=this.state.overlay,t=e?null:i.a.createElement(I,{experimental:this.props.experimental,onChildClick:this._onChildClick,onChildMouseDown:this._onChildMouseDown,onChildMouseEnter:this._onChildMouseEnter,onChildMouseLeave:this._onChildMouseLeave,geoService:this.geoService_,insideMapPanes:!1,distanceToMouse:this.props.distanceToMouse,getHoverDistance:this._getHoverDistance,dispatcher:this.markersDispatcher_});return i.a.createElement("div",{style:this.props.style,onMouseMove:this._onMapMouseMove,onMouseDownCapture:this._onMapMouseDownCapture,onClick:this._onMapClick},i.a.createElement(D,{registerChild:this._registerChild}),Me&&e&&we(this._renderPortal(),e),t)},t}(o.Component);De.propTypes={apiKey:d.a.string,bootstrapURLKeys:d.a.any,defaultCenter:d.a.oneOfType([d.a.array,d.a.shape({lat:d.a.number,lng:d.a.number})]),center:d.a.oneOfType([d.a.array,d.a.shape({lat:d.a.number,lng:d.a.number})]),defaultZoom:d.a.number,zoom:d.a.number,onBoundsChange:d.a.func,onChange:d.a.func,onClick:d.a.func,onChildClick:d.a.func,onChildMouseDown:d.a.func,onChildMouseUp:d.a.func,onChildMouseMove:d.a.func,onChildMouseEnter:d.a.func,onChildMouseLeave:d.a.func,onZoomAnimationStart:d.a.func,onZoomAnimationEnd:d.a.func,onDrag:d.a.func,onDragEnd:d.a.func,onMapTypeIdChange:d.a.func,onTilesLoaded:d.a.func,options:d.a.any,distanceToMouse:d.a.func,hoverDistance:d.a.number,debounced:d.a.bool,margin:d.a.array,googleMapLoader:d.a.any,onGoogleApiLoaded:d.a.func,yesIWantToUseGoogleMapApiInternals:d.a.bool,draggable:d.a.bool,style:d.a.any,resetBoundsOnResize:d.a.bool,layerTypes:d.a.arrayOf(d.a.string),shouldUnregisterMapOnUnmount:d.a.bool},De.defaultProps={distanceToMouse:function(e,t){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))},hoverDistance:30,debounced:!0,options:function(){return{overviewMapControl:!1,streetViewControl:!1,rotateControl:!0,mapTypeControl:!1,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}],minZoom:3}},googleMapLoader:U,yesIWantToUseGoogleMapApiInternals:!1,style:{width:"100%",height:"100%",margin:0,padding:0,position:"relative"},layerTypes:[],heatmap:{},heatmapLibrary:!1,shouldUnregisterMapOnUnmount:!0},De.googleMapLoader=U;var ke=De,ze=[34.0522,-118.2437];function Oe(){var e=Object(u.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 18px;\n  height: 18px;\n  background-color: #000;\n  border: 2px solid #fff;\n  border-radius: 100%;\n  user-select: none;\n  transform: translate(-50%, -50%);\n  cursor: ",";\n  &:hover {\n    z-index: 1;\n  }\n"]);return Oe=function(){return e},e}var Se=h.a.div(Oe(),(function(e){return e.onClick?"pointer":"default"})),Te=function(e){var t=e.text,n=e.onClick;return i.a.createElement(Se,{alt:t,onClick:n})};Te.defaultProps={onClick:null};var Ee=Te;function xe(){var e=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n"]);return xe=function(){return e},e}var Pe=h.a.main(xe()),Ae=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(p.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("places.json").then((function(e){return e.json()})).then((function(e){return r(e.results)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){a()}),[]),n&&0!==n.length?i.a.createElement(Pe,null,i.a.createElement(ke,{defaultZoom:10,defaultCenter:ze},n.map((function(e){return i.a.createElement(Ee,{key:e.id,text:e.name,lat:e.geometry.location.lat,lng:e.geometry.location.lng})})))):null},Ie=document.getElementById("root");Object(r.createRoot)(Ie).render(i.a.createElement(Ae,null))}},[[20,1,2]]]);
//# sourceMappingURL=main.ad31ab92.chunk.js.map