webpackJsonp([7],{0:function(a,b){a.exports=React},1152:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(0),e=c.n(d),f=c(14),g=c.n(f),h=c(74),i=c(1153),j=Object(h.a)(i.a)},1153:function(a,b,d){"use strict";var e=d(52),f=d.n(e),g=d(63),h=d.n(g),i=d(540),j=d.n(i),k=d(0),l=d.n(k),m=d(1),n=d.n(m),o=d(17),p=d(24),q=d.n(p),r=d(30),s=d.n(r),t=d(8),u=d.n(t),v=d(186),w=d(1154),x=d(110),y=d(673),z=u.a.constants,A=u.a.api,B=u.a.select,C=z,c=q.a.intercept.user.uuid,D=function(a){function b(a){var c;return babelHelpers.classCallCheck(this,b),c=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(b).call(this,a)),c.state={open:!1},c.doFetch=s()(c.doFetch,500).bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(c))),c}return babelHelpers.inherits(b,a),babelHelpers.createClass(b,[{key:"componentDidMount",value:function a(){this.doFetch()}},{key:"doFetch",value:function a(){this.props.fetchReservations({filters:{user:{path:"field_user.uuid",value:c}},include:["field_room","field_room.image_primary","field_room.image_primary.field_media_image"],replace:!0,headers:{"X-Consumer-ID":u.a.consumer}})}},{key:"doConfirmAction",value:function a(b){this.setState({open:!0,text:"Confirm cancel"})}},{key:"render",value:function a(){var b=this.props.reservations,c=function a(b){return b.map(function(a){return{key:a.data.id,node:l.a.createElement(y.a,{id:a.data.id,actions:l.a.createElement(w.a,{id:a.data.id,actions:["cancel"]}),className:"room-teaser"})}})},d=0<Object.values(b).length?l.a.createElement("div",null,l.a.createElement(v.a,{items:c(Object.values(b)),key:0}),l.a.createElement(x.a,{open:this.state.open,onClose:this.onDialogClose,onConfirm:this.onDialogConfirm,onCancel:this.onDialogCancel,text:this.state.text})):l.a.createElement("p",{key:0},"No rooms have been loaded.");return l.a.createElement("div",{className:"rooms-list"},d)}}]),b}(l.a.Component);D.propTypes={fetchReservations:n.a.func.isRequired,reservations:n.a.object},D.defaultProps={reservations:{}};var E=function a(b){return{reservations:B.roomReservations(b),reservationsLoading:B.recordsAreLoading(C.TYPE_ROOM_RESERVATION)(b)}},F=function a(b,c){return{fetchReservations:function a(c){b(A[C.TYPE_ROOM_RESERVATION].fetchAll(c))}}};b.a=Object(o.b)(E,F)(D)},1154:function(a,b,d){"use strict";var e=d(0),f=d.n(e),g=d(1),h=d.n(g),i=d(25),j=d.n(i),k=d(110),l=d(8),m=d.n(l),n=d(17),o=m.a.constants,p=m.a.api,q=m.a.select,r=o,c={cancel:{status:"canceled",text:"Confirm cancellation",heading:"Confirm cancel"},deny:{status:"denied",text:"Confirm deny",heading:"Confirm deny"},approve:{status:"approved",text:"Confirm approval",heading:"Confirm approval"}},s=function(a){function b(a){var c;return babelHelpers.classCallCheck(this,b),c=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(b).call(this,a)),c.state={open:!1,action:!1},c}return babelHelpers.inherits(b,a),babelHelpers.createClass(b,[{key:"onClose",value:function a(){this.onCancel()}},{key:"onCancel",value:function a(){this.setState({open:!1})}},{key:"onClick",value:function a(b){this.setState({open:!0,text:this.getActionProperties(b).text,heading:this.getActionProperties(b).text,action:b})}},{key:"getActionProperties",value:function a(b){return c[b]}},{key:"render",value:function a(){var b=this,c=this.props.actions;return f.a.createElement("div",null,f.a.createElement("div",null,c.map(function(a){return f.a.createElement(j.a,{key:a,onClick:b.onClick.bind(b,a)},a)})),f.a.createElement(k.a,{open:this.state.open,onClose:this.onClose.bind(this),onConfirm:this.props.onConfirm.bind(this),onCancel:this.onCancel.bind(this),text:this.state.text,heading:this.state.heading}))}}]),b}(e.PureComponent);s.propTypes={id:h.a.string.isRequired,actions:h.a.array.isRequired,reservation:h.a.object};var t=function a(b,c){return{reservation:q.record({type:r.TYPE_ROOM_RESERVATION,id:c.id})(b)}},u=function a(b,c){return{onConfirm:function a(c){var d=this.props.reservation.data;d.attributes.field_status=this.getActionProperties(this.state.action).status,b(m.a.actions.edit(d,r.TYPE_ROOM_RESERVATION,this.props.id)),b(m.a.api[r.TYPE_ROOM_RESERVATION].sync(this.props.id)),this.setState({open:!1})}}};b.a=Object(n.b)(t,u)(s)},14:function(a,b){a.exports=ReactDOM},24:function(a,b){a.exports=drupalSettings},540:function(a,b,c){var d=c(73),e=c(541)(!1);d(d.S,"Object",{values:function a(b){return e(b)}})},541:function(a,b,c){var d=c(136),e=c(206),f=c(542).f;a.exports=function(a){return function(b){for(var c,g=e(b),h=d(g),j=h.length,k=0,i=[];j>k;)f.call(g,c=h[k++])&&i.push(a?[c,g[c]]:g[c]);return i}}},542:function(a,b){b.f={}.propertyIsEnumerable},673:function(a,b,d){"use strict";var e=d(0),f=d.n(e),g=d(1),h=d.n(g),i=d(17),j=d(19),k=d.n(j),l=d(8),m=d.n(l),n=d(162),o=d(197),p=m.a.select,q=m.a.constants,r=q,c=function(a){function b(){return babelHelpers.classCallCheck(this,b),babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(b).apply(this,arguments))}return babelHelpers.inherits(b,a),babelHelpers.createClass(b,[{key:"render",value:function a(){var b=this.props,c=b.id,d=b.reservation,e=b.image,g=b.actions;if(null===d)return null;var h=k()(d,"attributes.field_attendee_count"),i=h?f.a.createElement(n.a,{label:"Attendees",key:"attendee",values:{id:"attendee",name:h}}):null,j=k()(d,"attributes.field_status"),l=j?f.a.createElement(n.a,{label:"Status",key:"status",values:{id:"status",name:j}}):null;return f.a.createElement(o.a,{key:c,title:k()(d,"attributes.title")||"",modifiers:[e?"with-image":"without-image"],image:e,supertitle:k()(d,"attributes.location"),footer:function a(b){return g},tags:[i,l],description:k()(d,"attributes.field_group_name")})}}]),b}(e.PureComponent);c.propTypes={id:h.a.string.isRequired,reservation:h.a.object,image:h.a.string,actions:h.a.array},c.defaultProps={image:null,actions:null,reservation:null};var s=function a(b,c){var d=p.getIdentifier(r.TYPE_ROOM_RESERVATION,c.id),e=p.bundle(d)(b),f=k()(e,"relationships.field_room");return f?{reservation:e,image:p.resourceImageStyle(f,"4to3_740x556")(b)}:{}};b.a=Object(i.b)(s)(c)},75:function(a,b){a.exports=interceptTheme},8:function(a,b){a.exports=interceptClient}},[1152]);