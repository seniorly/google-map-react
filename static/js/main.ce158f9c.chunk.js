(this["webpackJsonpgoogle-map-react-example"]=this["webpackJsonpgoogle-map-react-example"]||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},20:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);n(20);var o=n(0),i=n.n(o),r=n(2),a=n.n(r),s=n(7),p=n.n(s),l=n(12),u=n(17),h=n(4),c=n(5),d=n(1),m=n.n(d),g=n(13),_=n.n(g),f=n(18),v=n(3),C=n.n(v);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function M(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var L={width:"100%",height:"100%",left:0,top:0,margin:0,padding:0,position:"absolute"},b=function(e){function t(){return e.apply(this,arguments)||this}M(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(){return!1},n.render=function(){return i.a.createElement("div",{ref:this.props.registerChild,style:L})},t}(o.Component),D=function(e){function t(t){var n;return(n=e.call(this)||this).gmapInstance=t,n}M(t,e);var n=t.prototype;return n.getChildren=function(){return this.gmapInstance.props.children},n.getMousePosition=function(){return this.gmapInstance.mouse_},n.getUpdateCounter=function(){return this.gmapInstance.updateCounter_},n.dispose=function(){this.gmapInstance=null,this.removeAllListeners()},t}(_.a),k=function(e,t){for(var n=y({},e),o=0;o<t.length;o++){var i=t[o];i in n&&delete n[i]}return n},z=Object.prototype.hasOwnProperty;function O(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function S(e,t){if(O(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var i=0;i<n.length;i++)if(!z.call(t,n[i])||!O(e[n[i]],t[n[i]]))return!1;return!0}var T={width:"100%",height:"100%",left:0,top:0,margin:0,padding:0,position:"absolute"},E={width:0,height:0,left:0,top:0,backgroundColor:"transparent",position:"absolute"},x=function(e){function t(t){var n;return(n=e.call(this,t)||this)._getState=function(){return{children:n.props.dispatcher.getChildren(),updateCounter:n.props.dispatcher.getUpdateCounter()}},n._onChangeHandler=function(){if(n.dimensionsCache_){var e=(n.state.children||[]).length,t=n._getState();n.setState(t,(function(){return(t.children||[]).length!==e&&n._onMouseChangeHandler()}))}},n._onChildClick=function(){n.props.onChildClick&&n.hoverChildProps_&&n.props.onChildClick(n.hoverKey_,n.hoverChildProps_)},n._onChildMouseDown=function(){n.props.onChildMouseDown&&n.hoverChildProps_&&n.props.onChildMouseDown(n.hoverKey_,n.hoverChildProps_)},n._onChildMouseEnter=function(e,t){n.dimensionsCache_&&(n.props.onChildMouseEnter&&n.props.onChildMouseEnter(e,t),n.hoverChildProps_=t,n.hoverKey_=e,n.setState({hoverKey:e}))},n._onChildMouseLeave=function(){if(n.dimensionsCache_){var e=n.hoverKey_;null!=e&&(n.props.onChildMouseLeave&&n.props.onChildMouseLeave(e,n.hoverChildProps_),n.hoverKey_=null,n.hoverChildProps_=null,n.setState({hoverKey:null}))}},n._onMouseAllow=function(e){e||n._onChildMouseLeave(),n.allowMouse_=e},n._onMouseChangeHandler=function(){n.allowMouse_&&n._onMouseChangeHandlerRaf()},n._onMouseChangeHandlerRaf=function(){if(n.dimensionsCache_){var e=n.props.dispatcher.getMousePosition();if(e){var t=[],o=n.props.getHoverDistance();if(i.a.Children.forEach(n.state.children,(function(i,r){if(i&&(void 0!==i.props.latLng||void 0!==i.props.lat||void 0!==i.props.lng)){var a=null!=i.key?i.key:r,s=n.props.distanceToMouse(n.dimensionsCache_[a],e,i.props);s<o&&t.push({key:a,dist:s,props:i.props})}})),t.length){t.sort((function(e,t){return e.dist-t.dist}));var r=t[0].key,a=t[0].props;n.hoverKey_!==r&&(n._onChildMouseLeave(),n._onChildMouseEnter(r,a))}else n._onChildMouseLeave()}else n._onChildMouseLeave()}},n._getDimensions=function(e){return n.dimensionsCache_[e]},n.dimensionsCache_={},n.hoverKey_=null,n.hoverChildProps_=null,n.allowMouse_=!0,n.state=y({},n._getState(),{hoverKey:null}),n}M(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.dispatcher.on("kON_CHANGE",this._onChangeHandler),this.props.dispatcher.on("kON_MOUSE_POSITION_CHANGE",this._onMouseChangeHandler),this.props.dispatcher.on("kON_CLICK",this._onChildClick),this.props.dispatcher.on("kON_MDOWN",this._onChildMouseDown)},n.shouldComponentUpdate=function(e,t){return!0===this.props.experimental?!S(this.props,e)||!S(k(this.state,["hoverKey"]),k(t,["hoverKey"])):!S(this.props,e)||!S(this.state,t)},n.componentWillUnmount=function(){this.props.dispatcher.removeListener("kON_CHANGE",this._onChangeHandler),this.props.dispatcher.removeListener("kON_MOUSE_POSITION_CHANGE",this._onMouseChangeHandler),this.props.dispatcher.removeListener("kON_CLICK",this._onChildClick),this.props.dispatcher.removeListener("kON_MDOWN",this._onChildMouseDown),this.dimensionsCache_=null},n.render=function(){var e=this,t=this.props.style||T;this.dimensionsCache_={};var n=i.a.Children.map(this.state.children,(function(t,n){if(t){if(void 0===t.props.latLng&&void 0===t.props.lat&&void 0===t.props.lng)return i.a.cloneElement(t,{$geoService:e.props.geoService,$onMouseAllow:e._onMouseAllow,$prerender:e.props.prerender});var o=void 0!==t.props.latLng?t.props.latLng:{lat:t.props.lat,lng:t.props.lng},r=e.props.insideMapPanes?e.props.geoService.fromLatLngToDivPixel(o):e.props.geoService.fromLatLngToCenterPixel(o),a={left:r.x,top:r.y};if(void 0!==t.props.seLatLng||void 0!==t.props.seLat&&void 0!==t.props.seLng){var s=void 0!==t.props.seLatLng?t.props.seLatLng:{lat:t.props.seLat,lng:t.props.seLng},p=e.props.insideMapPanes?e.props.geoService.fromLatLngToDivPixel(s):e.props.geoService.fromLatLngToCenterPixel(s);a.width=p.x-r.x,a.height=p.y-r.y}var l=e.props.geoService.fromLatLngToContainerPixel(o),u=null!=t.key?t.key:n;return e.dimensionsCache_[u]=y({x:l.x,y:l.y},o),i.a.createElement("div",{key:u,style:y({},E,a),className:t.props.$markerHolderClassName},i.a.cloneElement(t,{$hover:u===e.state.hoverKey,$getDimensions:e._getDimensions,$dimensionKey:u,$geoService:e.props.geoService,$onMouseAllow:e._onMouseAllow,$prerender:e.props.prerender}))}}));return i.a.createElement("div",{style:t},n)},t}(o.Component);x.propTypes={geoService:m.a.any,style:m.a.any,distanceToMouse:m.a.func,dispatcher:m.a.any,onChildClick:m.a.func,onChildMouseDown:m.a.func,onChildMouseLeave:m.a.func,onChildMouseEnter:m.a.func,getHoverDistance:m.a.func,insideMapPanes:m.a.bool,prerender:m.a.bool},x.defaultProps={insideMapPanes:!1,prerender:!1};var P={width:"50%",height:"50%",left:"50%",top:"50%",margin:0,padding:0,position:"absolute"};function A(e){return i.a.createElement("div",{style:P},i.a.createElement(x,y({},e,{prerender:!0})))}var I,N,Z,j=new Promise((function(e){Z=e})),H=function(e,t){if(!e)return j;if(N)return N;e.libraries||(e.libraries=[]);var n=[].concat(e.libraries);if(t&&(0!==n.length&&n.includes("visualization")||n.push("visualization"),console.warn("heatmapLibrary will be deprecated in the future. Please use { libraries: ['visualization'] } in bootstrapURLKeys property instead")),"undefined"==typeof window)throw new Error("google map cannot be loaded outside browser env");var o=e.key,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t.indexOf(n=r[o])>=0||(i[n]=e[n]);return i}(e,["key"]);return I||(I=new f.a(y({apiKey:o||""},i,{libraries:n}))),N=I.load().then((function(){return Z(window.google.maps),window.google.maps})),Z(N),N};function U(e,t,n){var o=n-t;return e===n?e:((e-t)%o+o)%o+t}var R=function(){function e(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid LatLng object: ("+e+", "+t+")");this.lat=+e,this.lng=+t}return e.prototype.wrap=function(){return new e(this.lat,U(this.lng,-180,180))},e}();R.convert=function(e){return e instanceof R?e:Array.isArray(e)?new R(e[0],e[1]):"lng"in e&&"lat"in e?new R(e.lat,e.lng):e};var K=function(){function e(e,t,n){this.tileSize=e||512,this._minZoom=t||0,this._maxZoom=n||52,this.latRange=[-85.05113,85.05113],this.width=0,this.height=0,this.zoom=0,this.center=new R(0,0),this.angle=0}var t,n=e.prototype;return n.zoomScale=function(e){return Math.pow(2,e)},n.scaleZoom=function(e){return Math.log(e)/Math.LN2},n.project=function(e,t){return new C.a(this.lngX(e.lng,t),this.latY(e.lat,t))},n.unproject=function(e,t){return new R(this.yLat(e.y,t),this.xLng(e.x,t))},n.lngX=function(e,t){return(180+e)*(t||this.worldSize)/360},n.latY=function(e,t){return(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+e*Math.PI/360)))*(t||this.worldSize)/360},n.xLng=function(e,t){return 360*e/(t||this.worldSize)-180},n.yLat=function(e,t){return 360/Math.PI*Math.atan(Math.exp((180-360*e/(t||this.worldSize))*Math.PI/180))-90},n.locationPoint=function(e){var t=this.project(e);return this.centerPoint._sub(this.point._sub(t)._rotate(this.angle))},n.pointLocation=function(e){var t=this.centerPoint._sub(e)._rotate(-this.angle);return this.unproject(this.point.sub(t))},(t=[{key:"minZoom",get:function(){return this._minZoom},set:function(e){this._minZoom=e,this.zoom=Math.max(this.zoom,e)}},{key:"maxZoom",get:function(){return this._maxZoom},set:function(e){this._maxZoom=e,this.zoom=Math.min(this.zoom,e)}},{key:"worldSize",get:function(){return this.tileSize*this.scale}},{key:"centerPoint",get:function(){return new C.a(0,0)}},{key:"size",get:function(){return new C.a(this.width,this.height)}},{key:"bearing",get:function(){return-this.angle/Math.PI*180},set:function(e){this.angle=-U(e,-180,180)*Math.PI/180}},{key:"zoom",get:function(){return this._zoom},set:function(e){var t=Math.min(Math.max(e,this.minZoom),this.maxZoom);this._zoom=t,this.scale=this.zoomScale(t),this.tileZoom=Math.floor(t),this.zoomFraction=t-this.tileZoom}},{key:"x",get:function(){return this.lngX(this.center.lng)}},{key:"y",get:function(){return this.latY(this.center.lat)}},{key:"point",get:function(){return new C.a(this.x,this.y)}}])&&function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(e.prototype,t),e}(),B=function(){function e(e){this.hasSize_=!1,this.hasView_=!1,this.transform_=new K(e||512)}var t=e.prototype;return t.setView=function(e,t,n){this.transform_.center=R.convert(e),this.transform_.zoom=+t,this.transform_.bearing=+n,this.hasView_=!0},t.setViewSize=function(e,t){this.transform_.width=e,this.transform_.height=t,this.hasSize_=!0},t.setMapCanvasProjection=function(e,t){this.maps_=e,this.mapCanvasProjection_=t},t.canProject=function(){return this.hasSize_&&this.hasView_},t.hasSize=function(){return this.hasSize_},t.fromLatLngToCenterPixel=function(e){return this.transform_.locationPoint(R.convert(e))},t.fromLatLngToDivPixel=function(e){if(this.mapCanvasProjection_){var t=new this.maps_.LatLng(e.lat,e.lng);return this.mapCanvasProjection_.fromLatLngToDivPixel(t)}return this.fromLatLngToCenterPixel(e)},t.fromLatLngToContainerPixel=function(e){if(this.mapCanvasProjection_){var t=new this.maps_.LatLng(e.lat,e.lng);return this.mapCanvasProjection_.fromLatLngToContainerPixel(t)}var n=this.fromLatLngToCenterPixel(e);return n.x-=this.transform_.worldSize*Math.round(n.x/this.transform_.worldSize),n.x+=this.transform_.width/2,n.y+=this.transform_.height/2,n},t.fromContainerPixelToLatLng=function(e){if(this.mapCanvasProjection_){var t=this.mapCanvasProjection_.fromContainerPixelToLatLng(e);return{lat:t.lat(),lng:t.lng()}}var n=y({},e);n.x-=this.transform_.width/2,n.y-=this.transform_.height/2;var o=this.transform_.pointLocation(C.a.convert(n));return o.lng-=360*Math.round(o.lng/360),o},t.getWidth=function(){return this.transform_.width},t.getHeight=function(){return this.transform_.height},t.getZoom=function(){return this.transform_.zoom},t.getCenter=function(){return this.transform_.pointLocation({x:0,y:0})},t.getBounds=function(e,t){var n=e&&e[0]||0,o=e&&e[1]||0,i=e&&e[2]||0,r=e&&e[3]||0;if(this.getWidth()-o-r>0&&this.getHeight()-n-i>0){var a=this.transform_.pointLocation(C.a.convert({x:r-this.getWidth()/2,y:n-this.getHeight()/2})),s=this.transform_.pointLocation(C.a.convert({x:this.getWidth()/2-o,y:this.getHeight()/2-i})),p=[a.lat,a.lng,s.lat,s.lng,s.lat,a.lng,a.lat,s.lng];return t&&(p=p.map((function(e){return Math.round(e*t)/t}))),p}return[0,0,0,0]},e}();function W(e){if(window.requestAnimationFrame)return window.requestAnimationFrame(e);var t=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return t?t(e):window.setTimeout(e,1e3/60)}var F=Math.log2?Math.log2:function(e){return Math.log(e)/Math.LN2};function G(e,t){return Object.keys(e).reduce((function(n,o){return t(e[o])&&(n[o]=e[o]),n}),{})}var V=function(e){if(null!==e&&"object"==typeof e){if(0===Object.keys(e).length)return!0}else if(null==e||""===e)return!0;return!1},$=Object.prototype.toString;function q(e){return"number"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Number]"===$.call(e)}var X=null;function Y(){if(X)return X;if("undefined"!=typeof navigator){var e=navigator.userAgent.indexOf("MSIE")>-1,t=navigator.userAgent.indexOf("Firefox")>-1,n=navigator.userAgent.toLowerCase().indexOf("op")>-1,o=navigator.userAgent.indexOf("Chrome")>-1,i=navigator.userAgent.indexOf("Safari")>-1;return o&&i&&(i=!1),o&&n&&(o=!1),X={isExplorer:e,isFirefox:t,isOpera:n,isChrome:o,isSafari:i}}return X={isChrome:!0,isExplorer:!1,isFirefox:!1,isOpera:!1,isSafari:!1}}var J=function(e){return Function.prototype.toString.call(e)};function Q(e){if(!e||"object"!=typeof e)return!1;var t="function"==typeof e.constructor?Object.getPrototypeOf(e):Object.prototype;if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&J(n)===J(Object)}function ee(e,t,n,o){e.addEventListener(t,n,function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){e=!1}return e}()?{capture:o,passive:!0}:o)}var te,ne=!("undefined"==typeof window||!window.document||!window.document.createElement);te=ne?window:"undefined"!=typeof self?self:void 0;var oe,ie="undefined"!=typeof document&&document.attachEvent,re=!1;if(ne&&!ie){var ae=function(){var e=te.requestAnimationFrame||te.mozRequestAnimationFrame||te.webkitRequestAnimationFrame||function(e){return te.setTimeout(e,20)};return function(t){return e(t)}}(),se=(oe=te.cancelAnimationFrame||te.mozCancelAnimationFrame||te.webkitCancelAnimationFrame||te.clearTimeout,function(e){return oe(e)}),pe=function(e){var t=e.__resizeTriggers__,n=t.firstElementChild,o=t.lastElementChild,i=n.firstElementChild;o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight,i.style.width=n.offsetWidth+1+"px",i.style.height=n.offsetHeight+1+"px",n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight},le=function(e){var t=this;pe(this),this.__resizeRAF__&&se(this.__resizeRAF__),this.__resizeRAF__=ae((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(n){n.call(t,e)})))}))},ue=!1,he="",ce="animationstart",de="Webkit Moz O ms".split(" "),me="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ");if(ne){var ge=document.createElement("fakeelement");if(void 0!==ge.style.animationName&&(ue=!0),!1===ue)for(var _e=0;_e<de.length;_e++)if(void 0!==ge.style[de[_e]+"AnimationName"]){he="-"+de[_e].toLowerCase()+"-",ce=me[_e],ue=!0;break}}var fe="resizeanim",ve="@"+he+"keyframes "+fe+" { from { opacity: 0; } to { opacity: 0; } } ",Ce=he+"animation: 1ms "+fe+"; "}var ye=void 0!==a.a.createPortal,Me=ye?a.a.createPortal:a.a.unstable_renderSubtreeIntoContainer,we=function(e){return Q(e)?e:{lat:e[0],lng:e[1]}},Le=function(e,t){return t<e?e:t},be=function(e){function t(t){var n;if((n=e.call(this,t)||this)._getMinZoom=function(){if(n.geoService_.getWidth()>0||n.geoService_.getHeight()>0){var e=Math.ceil(n.geoService_.getWidth()/256)+2,t=Math.ceil(n.geoService_.getHeight()/256)+2,o=Math.max(e,t);return Math.ceil(F(o))}return 3},n._computeMinZoom=function(e){return V(e)?n._getMinZoom():e},n._mapDomResizeCallback=function(){if(n.resetSizeOnIdle_=!0,n.maps_){var e=n.props.center||n.props.defaultCenter,t=n.map_.getCenter();n.maps_.event.trigger(n.map_,"resize"),n.map_.setCenter(n.props.resetBoundsOnResize?e:t)}},n._setLayers=function(e){e.forEach((function(e){n.layers_[e]=new n.maps_[e],n.layers_[e].setMap(n.map_)}))},n._renderPortal=function(){return i.a.createElement(x,{experimental:n.props.experimental,onChildClick:n._onChildClick,onChildMouseDown:n._onChildMouseDown,onChildMouseEnter:n._onChildMouseEnter,onChildMouseLeave:n._onChildMouseLeave,geoService:n.geoService_,insideMapPanes:!0,distanceToMouse:n.props.distanceToMouse,getHoverDistance:n._getHoverDistance,dispatcher:n.markersDispatcher_})},n._initMap=function(){if(!n.initialized_){n.initialized_=!0;var e=we(n.props.center||n.props.defaultCenter);n.geoService_.setView(e,n.props.zoom||n.props.defaultZoom,0),n._onBoundsChanged();var t=y({},n.props.apiKey&&{key:n.props.apiKey},n.props.bootstrapURLKeys);n.props.googleMapLoader(t,n.props.heatmapLibrary).then((function(e){if(n.mounted_){var t,o,i=n.geoService_.getCenter(),r={zoom:n.props.zoom||n.props.defaultZoom,center:new e.LatLng(i.lat,i.lng)};n.props.heatmap.positions&&(Object.assign(w(n),{heatmap:(t=e,o=n.props.heatmap,new t.visualization.HeatmapLayer({data:o.positions.reduce((function(e,n){var o=n.weight,i=void 0===o?1:o;return e.push({location:new t.LatLng(n.lat,n.lng),weight:i}),e}),[])}))}),function(e,t){var n=t.options,o=void 0===n?{}:n;Object.keys(o).map((function(t){return e.set(t,o[t])}))}(n.heatmap,n.props.heatmap));var s=G(e,Q),p="function"==typeof n.props.options?n.props.options(s):n.props.options,l=!V(n.props.draggable)&&{draggable:n.props.draggable},u=n._computeMinZoom(p.minZoom);n.minZoom_=u;var h=y({},{overviewMapControl:!1,streetViewControl:!1,rotateControl:!0,mapTypeControl:!1,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}],minZoom:3},{minZoom:u},p,r);n.defaultDraggableOption_=V(h.draggable)?n.defaultDraggableOption_:h.draggable;var c=y({},h,l);c.minZoom=Le(c.minZoom,u);var d=new e.Map(a.a.findDOMNode(n.googleMapDom_),c);n.map_=d,n.maps_=e,n._setLayers(n.props.layerTypes);var m=e.version.match(/^3\.(\d+)\./),g=m&&Number(m[1]),_=w(n),f=Object.assign(new e.OverlayView,{onAdd:function(){var t="undefined"!=typeof screen?screen.width+"px":"2000px",n="undefined"!=typeof screen?screen.height+"px":"2000px",o=document.createElement("div");if(o.style.backgroundColor="transparent",o.style.position="absolute",o.style.left="0px",o.style.top="0px",o.style.width=t,o.style.height=n,_.props.overlayViewDivStyle){var i=_.props.overlayViewDivStyle;"object"==typeof i&&Object.keys(i).forEach((function(e){o.style[e]=i[e]}))}this.getPanes().overlayMouseTarget.appendChild(o),_.geoService_.setMapCanvasProjection(e,f.getProjection()),ye?_.setState({overlay:o}):Me(_,_._renderPortal(),o,(function(){return _.setState({overlay:o})}))},onRemove:function(){var e=_.state.overlay;e&&!ye&&a.a.unmountComponentAtNode(e),_.setState({overlay:null})},draw:function(){if(_.updateCounter_++,_._onBoundsChanged(d,e,!_.props.debounced),_.googleApiLoadedCalled_||(_._onGoogleApiLoaded({map:d,maps:e,ref:_.googleMapDom_}),_.googleApiLoadedCalled_=!0),_.mouse_){var t=_.geoService_.fromContainerPixelToLatLng(_.mouse_);_.mouse_.lat=t.lat,_.mouse_.lng=t.lng}_._onChildMouseMove(),_.markersDispatcher_&&(_.markersDispatcher_.emit("kON_CHANGE"),_.fireMouseEventOnIdle_&&(console.log("dispatching"),_.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE")))}});n.overlay_=f,f.setMap(d),n.props.heatmap.positions&&n.heatmap.setMap(d),n.props.onTilesLoaded&&e.event.addListener(d,"tilesloaded",(function(){_._onTilesLoaded()})),e.event.addListener(d,"zoom_changed",(function(){_.geoService_.getZoom()!==d.getZoom()&&(_.zoomAnimationInProgress_||(_.zoomAnimationInProgress_=!0,_._onZoomAnimationStart(d.zoom)),g<32)&&((new Date).getTime()-n.zoomControlClickTime_<300?W((function(){return W((function(){_.updateCounter_++,_._onBoundsChanged(d,e)}))})):(_.updateCounter_++,_._onBoundsChanged(d,e)))})),e.event.addListener(d,"idle",(function(){if(n.resetSizeOnIdle_){n._setViewSize();var t=n._computeMinZoom(p.minZoom);t!==n.minZoom_&&(n.minZoom_=t,d.setOptions({minZoom:t})),n.resetSizeOnIdle_=!1}_.zoomAnimationInProgress_&&(_.zoomAnimationInProgress_=!1,_._onZoomAnimationEnd(d.zoom)),_.updateCounter_++,_._onBoundsChanged(d,e),_.dragTime_=0,_.markersDispatcher_&&_.markersDispatcher_.emit("kON_CHANGE")})),e.event.addListener(d,"mouseover",(function(){_.mouseInMap_=!0})),e.event.addListener(d,"click",(function(){_.mouseInMap_=!0})),e.event.addListener(d,"mouseout",(function(){_.mouseInMap_=!1,_.mouse_=null,_.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE")})),e.event.addListener(d,"drag",(function(){_.dragTime_=(new Date).getTime(),_._onDrag(d)})),e.event.addListener(d,"dragend",(function(){var t=e.event.addListener(d,"idle",(function(){e.event.removeListener(t),_._onDragEnd(d)}))})),e.event.addListener(d,"maptypeid_changed",(function(){_._onMapTypeIdChange(d.getMapTypeId())}))}})).catch((function(e){throw n._onGoogleApiLoaded({map:null,maps:null,ref:n.googleMapDom_}),console.error(e),e}))}},n._onGoogleApiLoaded=function(){var e;n.props.onGoogleApiLoaded&&(e=n.props).onGoogleApiLoaded.apply(e,arguments)},n._getHoverDistance=function(){return n.props.hoverDistance},n._onDrag=function(){var e;return n.props.onDrag&&(e=n.props).onDrag.apply(e,arguments)},n._onDragEnd=function(){var e;return n.props.onDragEnd&&(e=n.props).onDragEnd.apply(e,arguments)},n._onMapTypeIdChange=function(){var e;return n.props.onMapTypeIdChange&&(e=n.props).onMapTypeIdChange.apply(e,arguments)},n._onZoomAnimationStart=function(){var e;return n.props.onZoomAnimationStart&&(e=n.props).onZoomAnimationStart.apply(e,arguments)},n._onZoomAnimationEnd=function(){var e;return n.props.onZoomAnimationEnd&&(e=n.props).onZoomAnimationEnd.apply(e,arguments)},n._onTilesLoaded=function(){return n.props.onTilesLoaded&&n.props.onTilesLoaded()},n._onChildClick=function(){var e;if(n.props.onChildClick)return(e=n.props).onChildClick.apply(e,arguments)},n._onChildMouseDown=function(e,t){n.childMouseDownArgs_=[e,t],n.props.onChildMouseDown&&n.props.onChildMouseDown(e,t,y({},n.mouse_))},n._onChildMouseUp=function(){var e;n.childMouseDownArgs_&&(n.props.onChildMouseUp&&(e=n.props).onChildMouseUp.apply(e,n.childMouseDownArgs_.concat([y({},n.mouse_)])),n.childMouseDownArgs_=null,n.childMouseUpTime_=(new Date).getTime())},n._onChildMouseMove=function(){var e;n.childMouseDownArgs_&&n.props.onChildMouseMove&&(e=n.props).onChildMouseMove.apply(e,n.childMouseDownArgs_.concat([y({},n.mouse_)]))},n._onChildMouseEnter=function(){var e;if(n.props.onChildMouseEnter)return(e=n.props).onChildMouseEnter.apply(e,arguments)},n._onChildMouseLeave=function(){var e;if(n.props.onChildMouseLeave)return(e=n.props).onChildMouseLeave.apply(e,arguments)},n._setViewSize=function(){if(n.mounted_){if(document.fullscreen||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement)n.geoService_.setViewSize(window.innerWidth,window.innerHeight);else{var e=a.a.findDOMNode(n.googleMapDom_);n.geoService_.setViewSize(e.clientWidth,e.clientHeight)}n._onBoundsChanged()}},n._onWindowResize=function(){n.resetSizeOnIdle_=!0},n._onMapMouseMove=function(e){if(n.mouseInMap_){var t=(new Date).getTime();t-n.mouseMoveTime_>50&&(n.boundingRect_=e.currentTarget.getBoundingClientRect()),n.mouseMoveTime_=t;var o=e.clientX-n.boundingRect_.left,i=e.clientY-n.boundingRect_.top;n.mouse_||(n.mouse_={x:0,y:0,lat:0,lng:0}),n.mouse_.x=o,n.mouse_.y=i;var r=n.geoService_.fromContainerPixelToLatLng(n.mouse_);n.mouse_.lat=r.lat,n.mouse_.lng=r.lng,n._onChildMouseMove(),t-n.dragTime_<100?(console.log("dragging"),n.fireMouseEventOnIdle_=!0):(n.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE"),n.fireMouseEventOnIdle_=!1)}},n._onClick=function(){var e;return n.props.onClick&&!n.childMouseDownArgs_&&(new Date).getTime()-n.childMouseUpTime_>300&&0===n.dragTime_&&(e=n.props).onClick.apply(e,arguments)},n._onMapClick=function(e){n.markersDispatcher_&&(n._onMapMouseMove(e),(new Date).getTime()-n.dragTime_>100&&(n.mouse_&&n._onClick(y({},n.mouse_,{event:e})),n.markersDispatcher_.emit("kON_CLICK",e)))},n._onMapMouseDownNative=function(e){n.mouseInMap_&&n._onMapMouseDown(e)},n._onMapMouseDown=function(e){n.markersDispatcher_&&(new Date).getTime()-n.dragTime_>100&&(n._onMapMouseMove(e),n.markersDispatcher_.emit("kON_MDOWN",e))},n._onMapMouseDownCapture=function(){Y().isChrome&&(n.zoomControlClickTime_=(new Date).getTime())},n._onKeyDownCapture=function(){Y().isChrome&&(n.zoomControlClickTime_=(new Date).getTime())},n._isCenterDefined=function(e){return e&&(Q(e)&&q(e.lat)&&q(e.lng)||2===e.length&&q(e[0])&&q(e[1]))},n._onBoundsChanged=function(e,t,o){if(e){var i=e.getCenter();n.geoService_.setView([i.lat(),i.lng()],e.getZoom(),0)}if((n.props.onChange||n.props.onBoundsChange)&&n.geoService_.canProject()){var r=n.geoService_.getZoom(),a=n.geoService_.getBounds(),s=n.geoService_.getCenter();if(!function(e,t,n){if(e&&t){for(var o=0;o!==e.length;++o)if(Math.abs(e[o]-t[o])>1e-5)return!1;return!0}return!1}(a,n.prevBounds_)&&!1!==o){var p=n.geoService_.getBounds(n.props.margin);n.props.onBoundsChange&&n.props.onBoundsChange(n.centerIsObject_?y({},s):[s.lat,s.lng],r,a,p),n.props.onChange&&n.props.onChange({center:y({},s),zoom:r,bounds:{nw:{lat:a[0],lng:a[1]},se:{lat:a[2],lng:a[3]},sw:{lat:a[4],lng:a[5]},ne:{lat:a[6],lng:a[7]}},marginBounds:{nw:{lat:p[0],lng:p[1]},se:{lat:p[2],lng:p[3]},sw:{lat:p[4],lng:p[5]},ne:{lat:p[6],lng:p[7]}},size:n.geoService_.hasSize()?{width:n.geoService_.getWidth(),height:n.geoService_.getHeight()}:{width:0,height:0}}),n.prevBounds_=a}}},n._registerChild=function(e){n.googleMapDom_=e},n.mounted_=!1,n.initialized_=!1,n.googleApiLoadedCalled_=!1,n.map_=null,n.maps_=null,n.prevBounds_=null,n.heatmap=null,n.layers_={},n.mouse_=null,n.mouseMoveTime_=0,n.boundingRect_=null,n.mouseInMap_=!0,n.dragTime_=0,n.fireMouseEventOnIdle_=!1,n.updateCounter_=0,n.markersDispatcher_=new D(w(n)),n.geoService_=new B(256),n.centerIsObject_=Q(n.props.center),n.minZoom_=3,n.defaultDraggableOption_=!0,n.zoomControlClickTime_=0,n.childMouseDownArgs_=null,n.childMouseUpTime_=0,n.googleMapDom_=null,n._isCenterDefined(n.props.center||n.props.defaultCenter)){var o=we(n.props.center||n.props.defaultCenter);n.geoService_.setView(o,n.props.zoom||n.props.defaultZoom,0)}return n.zoomAnimationInProgress_=!1,n.state={overlay:null},n}M(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.mounted_=!0,ee(window,"resize",this._onWindowResize,!1),ee(window,"keydown",this._onKeyDownCapture,!0);var t=a.a.findDOMNode(this.googleMapDom_);t&&ee(t,"mousedown",this._onMapMouseDownNative,!0),ee(window,"mouseup",this._onChildMouseUp,!1);var n=y({},this.props.apiKey&&{key:this.props.apiKey},this.props.bootstrapURLKeys);this.props.googleMapLoader(n,this.props.heatmapLibrary),setTimeout((function(){e._setViewSize(),e._isCenterDefined(e.props.center||e.props.defaultCenter)&&e._initMap()}),0,this),this.props.resetBoundsOnResize&&function(e,t){if(void 0===e.parentNode){var n=document.createElement("div");e.parentNode=n}e=e.parentNode,ie?e.attachEvent("onresize",t):(e.__resizeTriggers__||("static"==getComputedStyle(e).position&&(e.style.position="relative"),function(){if(!re){var e=(ve||"")+".resize-triggers { "+(Ce||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),t.appendChild(n),re=!0}}(),e.__resizeLast__={},e.__resizeListeners__=[],(e.__resizeTriggers__=document.createElement("div")).className="resize-triggers",e.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',e.appendChild(e.__resizeTriggers__),pe(e),ee(e,"scroll",le,!0),ce&&e.__resizeTriggers__.addEventListener(ce,(function(t){t.animationName==fe&&pe(e)}))),e.__resizeListeners__.push(t))}(t,this._mapDomResizeCallback)},n.shouldComponentUpdate=function(e,t){return!S(k(this.props,["draggable"]),k(e,["draggable"]))||!S(this.state,t)},n.componentDidUpdate=function(e){var t=this;if(!this._isCenterDefined(e.center)&&this._isCenterDefined(this.props.center)&&setTimeout((function(){return t._initMap()}),0),this.map_){var n=this.geoService_.getCenter();if(this._isCenterDefined(this.props.center)){var o=we(this.props.center),i=this._isCenterDefined(e.center)?we(e.center):null;(!i||Math.abs(o.lat-i.lat)+Math.abs(o.lng-i.lng)>1e-5)&&Math.abs(o.lat-n.lat)+Math.abs(o.lng-n.lng)>1e-5&&this.map_.panTo({lat:o.lat,lng:o.lng})}if(V(this.props.zoom)||Math.abs(this.props.zoom-e.zoom)>0&&this.map_.setZoom(this.props.zoom),!V(e.draggable)&&V(this.props.draggable)?this.map_.setOptions({draggable:this.defaultDraggableOption_}):S(e.draggable,this.props.draggable)||this.map_.setOptions({draggable:this.props.draggable}),!V(this.props.options)&&!S(e.options,this.props.options)){var r=G(this.maps_,Q),a="function"==typeof this.props.options?this.props.options(r):this.props.options;if("minZoom"in(a=k(a,["zoom","center","draggable"]))){var s=this._computeMinZoom(a.minZoom);a.minZoom=Le(a.minZoom,s)}this.map_.setOptions(a)}S(this.props.layerTypes,e.layerTypes)||(Object.keys(this.layers_).forEach((function(e){t.layers_[e].setMap(null),delete t.layers_[e]})),this._setLayers(this.props.layerTypes)),this.heatmap&&!S(this.props.heatmap.positions,e.heatmap.positions)&&this.heatmap.setData(this.props.heatmap.positions.map((function(e){return{location:new t.maps_.LatLng(e.lat,e.lng),weight:e.weight}}))),this.heatmap&&!S(this.props.heatmap.options,e.heatmap.options)&&Object.keys(this.props.heatmap.options).forEach((function(e){t.heatmap.set(e,t.props.heatmap.options[e])}))}this.markersDispatcher_.emit("kON_CHANGE"),S(this.props.hoverDistance,e.hoverDistance)||this.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE")},n.componentWillUnmount=function(){this.mounted_=!1;var e,t,n=a.a.findDOMNode(this.googleMapDom_);n&&n.removeEventListener("mousedown",this._onMapMouseDownNative,!0),window.removeEventListener("resize",this._onWindowResize),window.removeEventListener("keydown",this._onKeyDownCapture),window.removeEventListener("mouseup",this._onChildMouseUp,!1),this.props.resetBoundsOnResize&&(t=this._mapDomResizeCallback,e=(e=n).parentNode,ie?e.detachEvent("onresize",t):(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||(e.removeEventListener("scroll",le),e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)))),this.overlay_&&this.overlay_.setMap(null),this.maps_&&this.map_&&this.props.shouldUnregisterMapOnUnmount&&(this.map_.setOptions({scrollwheel:!1}),this.maps_.event.clearInstanceListeners(this.map_)),this.props.shouldUnregisterMapOnUnmount&&(this.map_=null,this.maps_=null),this.markersDispatcher_.dispose(),this.resetSizeOnIdle_=!1,this.props.shouldUnregisterMapOnUnmount&&(delete this.map_,delete this.markersDispatcher_)},n.render=function(){var e=this.state.overlay,t=e?null:i.a.createElement(A,{experimental:this.props.experimental,onChildClick:this._onChildClick,onChildMouseDown:this._onChildMouseDown,onChildMouseEnter:this._onChildMouseEnter,onChildMouseLeave:this._onChildMouseLeave,geoService:this.geoService_,insideMapPanes:!1,distanceToMouse:this.props.distanceToMouse,getHoverDistance:this._getHoverDistance,dispatcher:this.markersDispatcher_});return i.a.createElement("div",{style:this.props.style,onMouseMove:this._onMapMouseMove,onMouseDownCapture:this._onMapMouseDownCapture,onClick:this._onMapClick},i.a.createElement(b,{registerChild:this._registerChild}),ye&&e&&Me(this._renderPortal(),e),t)},t}(o.Component);be.propTypes={apiKey:m.a.string,bootstrapURLKeys:m.a.any,defaultCenter:m.a.oneOfType([m.a.array,m.a.shape({lat:m.a.number,lng:m.a.number})]),center:m.a.oneOfType([m.a.array,m.a.shape({lat:m.a.number,lng:m.a.number})]),defaultZoom:m.a.number,zoom:m.a.number,onBoundsChange:m.a.func,onChange:m.a.func,onClick:m.a.func,onChildClick:m.a.func,onChildMouseDown:m.a.func,onChildMouseUp:m.a.func,onChildMouseMove:m.a.func,onChildMouseEnter:m.a.func,onChildMouseLeave:m.a.func,onZoomAnimationStart:m.a.func,onZoomAnimationEnd:m.a.func,onDrag:m.a.func,onDragEnd:m.a.func,onMapTypeIdChange:m.a.func,onTilesLoaded:m.a.func,options:m.a.any,distanceToMouse:m.a.func,hoverDistance:m.a.number,debounced:m.a.bool,margin:m.a.array,googleMapLoader:m.a.any,onGoogleApiLoaded:m.a.func,yesIWantToUseGoogleMapApiInternals:m.a.bool,draggable:m.a.bool,style:m.a.any,resetBoundsOnResize:m.a.bool,layerTypes:m.a.arrayOf(m.a.string),shouldUnregisterMapOnUnmount:m.a.bool},be.defaultProps={distanceToMouse:function(e,t){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))},hoverDistance:30,debounced:!0,options:function(){return{overviewMapControl:!1,streetViewControl:!1,rotateControl:!0,mapTypeControl:!1,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}],minZoom:3}},googleMapLoader:H,yesIWantToUseGoogleMapApiInternals:!1,style:{width:"100%",height:"100%",margin:0,padding:0,position:"relative"},layerTypes:[],heatmap:{},heatmapLibrary:!1,shouldUnregisterMapOnUnmount:!0},be.googleMapLoader=H;var De=be,ke=[34.0522,-118.2437];function ze(){var e=Object(h.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 18px;\n  height: 18px;\n  background-color: #000;\n  border: 2px solid #fff;\n  border-radius: 100%;\n  user-select: none;\n  transform: translate(-50%, -50%);\n  cursor: ",";\n  &:hover {\n    z-index: 1;\n  }\n"]);return ze=function(){return e},e}var Oe=c.a.div(ze(),(function(e){return e.onClick?"pointer":"default"})),Se=function(e){var t=e.text,n=e.onClick;return i.a.createElement(Oe,{alt:t,onClick:n})};Se.defaultProps={onClick:null};var Te=Se;function Ee(){var e=Object(h.a)(["\n  width: 100%;\n  height: 100%;\n"]);return Ee=function(){return e},e}var xe=c.a.main(Ee()),Pe=function(){var e=Object(o.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(l.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("places.json").then((function(e){return e.json()})).then((function(e){return r(e.results)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){a()}),[]),n&&0!==n.length?i.a.createElement(xe,null,i.a.createElement(De,{defaultZoom:10,defaultCenter:ke},n.map((function(e){return i.a.createElement(Te,{key:e.id,text:e.name,lat:e.geometry.location.lat,lng:e.geometry.location.lng})})))):null};a.a.render(i.a.createElement(Pe,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ce158f9c.chunk.js.map