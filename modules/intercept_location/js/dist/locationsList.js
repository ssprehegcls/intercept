webpackJsonp([1],{0:function(a,b){a.exports=React},15:function(a,b){a.exports=ReactDOM},21:function(a,b){a.exports=interceptClient},505:function(a,b,c){'use strict';var d=c(0),e=babelHelpers.interopRequireDefault(d),f=c(15),g=c(25),h=c(21),i=babelHelpers.interopRequireDefault(h),j=c(506),k=babelHelpers.interopRequireDefault(j),l=i['default'].store;(0,f.render)(e['default'].createElement(g.Provider,{store:l},e['default'].createElement(k['default'],{location:{}})),document.getElementById('locationsListRoot'))},506:function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(0),e=babelHelpers.interopRequireDefault(d),f=c(1),g=babelHelpers.interopRequireDefault(f),h=c(33),i=c(74),j=babelHelpers.interopRequireDefault(i),k=function a(b){return{}},l=function(a){function b(){var a,c,d,e;babelHelpers.classCallCheck(this,b);for(var f=arguments.length,g=Array(f),h=0;h<f;h++)g[h]=arguments[h];return e=(c=(d=babelHelpers.possibleConstructorReturn(this,(a=b.__proto__||Object.getPrototypeOf(b)).call.apply(a,[this].concat(g))),d),d.state={},c),babelHelpers.possibleConstructorReturn(d,e)}return babelHelpers.inherits(b,a),babelHelpers.createClass(b,[{key:'render',value:function a(){var b=this.props.locations,c=0<Object.keys(b).length?(0,j['default'])(b,function(a,b){return e['default'].createElement('p',{key:b},a.data.title)}):e['default'].createElement('p',null,'No locations have been loaded.');return e['default'].createElement('div',{className:'locationList'},c)}}]),b}(d.Component);l.propTypes={locations:g['default'].object.isRequired},b['default']=(0,h.withStyles)(k,{withTheme:!0})(l)}},[505]);