wpJsonpIntercept([6],{0:function(a,b){a.exports=React},1270:function(a,b,c){"use strict";function d(a){var b=a.getAttribute("data-reservation-uuid"),c=a.getAttribute("data-status");Object(i.render)(h.a.createElement(q,{entityId:b,isStaff:o.a.utils.userIsStaff(),status:c,type:o.a.constants.TYPE_ROOM_RESERVATION}),a)}Object.defineProperty(b,"__esModule",{value:!0});var e=c(135),f=c.n(e),g=c(0),h=c.n(g),i=c(21),j=c.n(i),k=c(79),l=c(36),m=c.n(l),n=c(14),o=c.n(n),p=c(1271),q=Object(k.a)(p.a),r=f()(document.getElementsByClassName("js--room-reservation-action"));r.map(d)},1271:function(a,b,d){"use strict";function e(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function f(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?e(Object(b),!0).forEach(function(c){Q()(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):e(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function g(a){var b=h();return function c(){var d,e=O()(a);if(b){var f=O()(this).constructor;d=Reflect.construct(e,arguments,f)}else d=e.apply(this,arguments);return M()(this,d)}}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function i(a,b,c){return f(f(f(f({},c),a),b),{},{setStatusTo:function c(d){return b.setStatusTo(d,a.record)}})}var j=d(26),k=d.n(j),l=d(27),m=d.n(l),n=d(23),o=d.n(n),p=d(22),q=d.n(p),r=d(24),s=d.n(r),t=d(7),u=d.n(t),v=d(6),w=d.n(v),x=d(10),y=d.n(x),z=d(108),A=d.n(z),B=d(33),C=d.n(B),D=d(8),E=d.n(D),F=d(9),G=d.n(F),H=d(17),I=d.n(H),J=d(11),K=d.n(J),L=d(12),M=d.n(L),N=d(13),O=d.n(N),P=d(18),Q=d.n(P),R=d(0),S=d.n(R),T=d(1),U=d.n(T),V=d(19),W=d(25),X=d.n(W),Y=d(14),Z=d.n(Y),$=d(190),_=d(1272),aa=d(121),ba=d(114),ca=d(1273),da=Z.a.actions,ea=Z.a.api,fa=Z.a.select,ga=Z.a.session,ha=Z.a.utils,ia=Z.a.constants,c=function(a){function b(a){var d;return E()(this,b),d=c.call(this,a),Q()(I()(d),"getRoomAvailabilityQuery",function(){var a=d.props.record,b=X()(a,"data.relationships.field_room.data.id"),c=X()(a,"data.attributes.field_dates");return{rooms:[b],start:c.value,end:c.end_value}}),Q()(I()(d),"getActions",function(a){var b=I()(d),c=b.cancel,e=b.deny,f=b.approve,g=b.request,h=ha.userIsManager();return"requested"===a?h?[f(),e()]:[c()]:"denied"===a?h?[f(),c()]:null:"approved"===a?h?[e(),c()]:[c()]:"canceled"===a?d.isConflicted()?d.getConflictedMessage():[g()]:null}),Q()(I()(d),"getDialogProps",function(a){return"requested"===a?{status:"requested",heading:"Are you sure you want to rerequest this reservation?"}:"denied"===a?{status:"denied",heading:"Are you sure you want to deny this reservation?"}:"approved"===a?{status:"approved",heading:"Are you sure you want to approve this reservation?"}:"canceled"===a?{status:"canceled",heading:"Are you sure you want to cancel this reservation?"}:null}),Q()(I()(d),"getConflictedMessage",function(){var a=d.props,b=a.record,c=a.availability,e=X()(b,"data.relationships.field_room.data.id");return!c.loading&&c.rooms[e]?S.a.createElement("p",{className:"action-button__message"},"This reservation time is no longer available."):""}),Q()(I()(d),"isConflicted",function(){var a=d.props,b=a.record,c=a.availability,e=X()(b,"data.relationships.field_room.data.id");if(!c.loading&&c.rooms[e]){var f=c.rooms[e];return f.has_max_duration_conflict||f.has_open_hours_conflict||f.has_reservation_conflict}return!0}),Q()(I()(d),"openDialog",function(a){d.setState({open:!0,dialogProps:d.getDialogProps(a)})}),Q()(I()(d),"closeDialog",function(){d.setState({open:!1})}),Q()(I()(d),"closeErrorDialog",function(){d.props.fetchReservation(d.props.entityId),d.setState({errorDialogOpen:!1})}),Q()(I()(d),"confirmDialog",function(a){d.props.setStatusTo(a),d.closeDialog()}),Q()(I()(d),"cancel",function(){return d.actionButton({status:"canceled",label:"Cancel"})}),Q()(I()(d),"deny",function(){return d.actionButton({status:"denied",label:"Deny"})}),Q()(I()(d),"request",function(){return d.actionButton({status:"requested",label:"Rerequest"})}),Q()(I()(d),"approve",function(){return d.actionButton({status:"approved",label:"Approve",variant:"contained"})}),Q()(I()(d),"dialog",function(){var a=d.state.dialogProps;return S.a.createElement(aa.a,C()({},a,{open:d.state.open,onClose:d.onDialogClose,onCancel:d.closeDialog,onBackdropClick:null,disableEscapeKeyDown:d.state.disableEscapeKeyDown,disableBackdropClick:d.state.disableBackdropClick,onConfirm:function b(){return d.confirmDialog(a.status)},confirmText:"Yes"}))}),Q()(I()(d),"errorDialog",function(){var a=d.state.dialogProps,b=d.props.record,c=X()(b,"state.error")||[],e=c.map(function(a){return a.detail.replace("Entity is not valid: ","")})||"Unknown Error";return S.a.createElement(aa.a,C()({},a,{open:d.state.errorDialogOpen,onClose:d.closeErrorDialog,onConfirm:d.closeErrorDialog,onBackdropClick:null,disableEscapeKeyDown:d.state.disableEscapeKeyDown,disableBackdropClick:d.state.disableBackdropClick,heading:"Unable to update reservation",text:e,confirmText:"Close"}))}),d.state={open:!1,errorDialogOpen:!1,disableBackdropClick:!0,disableEscapeKeyDown:!0,dialogProps:{}},d.actionButton=d.actionButton.bind(I()(d)),d}K()(b,a);var c=g(b);return G()(b,[{key:"componentDidMount",value:function a(){this.props.fetchReservation(this.props.entityId)}},{key:"componentDidUpdate",value:function a(b){var c=this.props,d=c.record,e=c.isLoading,f=c.availability,g=c.fetchAvailability,h=b.record,i=X()(d,"state.error"),j=X()(h,"state.error");e||null===d||f.loading||0!==f.rooms.length&&h===d||g(this.getRoomAvailabilityQuery()),i&&!j&&this.setState({errorDialogOpen:!0})}},{key:"actionButton",value:function a(b){var c=this,d=b.status,e=b.label,f=b.variant,g=this.props,h=g.record,i=g.entityId;return h?S.a.createElement(_.a,{entityId:i,type:ia.TYPE_ROOM_RESERVATION,record:h,text:e,onClick:function a(){return c.openDialog(d)},key:d,variant:f}):null}},{key:"render",value:function a(){var b=this.props,c=b.record,d=b.isLoading,e=X()(c,"data.attributes.field_status")||this.props.status,f=d?S.a.createElement(ba.a,{loading:d,size:20}):this.getActions(e);return S.a.createElement("div",{className:"reservation-register-button__inner"},S.a.createElement(ca.a,{status:e,syncing:X()(c,"state.syncing")}),f,this.dialog(),this.errorDialog())}}]),b}(S.a.Component);c.propTypes={entityId:U.a.string.isRequired,type:U.a.string.isRequired,status:U.a.string.isRequired,fetchReservation:U.a.func.isRequired,fetchAvailability:U.a.func.isRequired,availability:U.a.object.isRequired,isLoading:U.a.bool,setStatusTo:U.a.func.isRequired,record:U.a.object},c.defaultProps={record:null,isLoading:!1};var ja=function a(b,c){return{record:fa.record(fa.getIdentifier(ia.TYPE_ROOM_RESERVATION,c.entityId))(b),isLoading:fa.recordsAreLoading(ia.TYPE_ROOM_RESERVATION)(b)||fa.recordIsLoading(ia.TYPE_ROOM_RESERVATION,c.entityId)(b)}},ka=function a(b,c){var d=c.entityId,e=c.type,f=function a(){ga.getToken().then(function(a){b(ea[e].sync(d,{headers:{"X-CSRF-Token":a}}))}).catch(function(a){console.log("Unable to save Reservation",a)})},g=function a(c,f){var g=f.data;g.attributes.field_status=c,b(da.edit(g,e,d))};return{setStatusTo:function a(b,c){g(b,c),f(e)},fetchReservation:function a(c){b(ea[ia.TYPE_ROOM_RESERVATION].fetchResource(c))}}};b.a=Object(V.b)(ja,ka,i)(Object($.a)(c))},1272:function(a,b,c){"use strict";function d(a){var b=e();return function c(){var d,e=u()(a);if(b){var f=u()(this).constructor;d=Reflect.construct(e,arguments,f)}else d=e.apply(this,arguments);return s()(this,d)}}function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}var f=c(7),g=c.n(f),h=c(6),i=c.n(h),j=c(10),k=c.n(j),l=c(8),m=c.n(l),n=c(9),o=c.n(n),p=c(11),q=c.n(p),r=c(12),s=c.n(r),t=c(13),u=c.n(t),v=c(0),w=c.n(v),x=c(1),y=c.n(x),z=c(14),A=c.n(z),B=c(20),C=A.a.utils,D=C.getUserUuid(),E=function(a){function b(){return m()(this,b),c.apply(this,arguments)}q()(b,a);var c=d(b);return o()(b,[{key:"render",value:function a(){var b=this.props,c=b.onClick,d=b.text,e=b.variant;return w.a.createElement(B.b,{variant:e,size:"small",color:"primary",className:"action-button__button",onClick:c},d)}}]),b}(w.a.PureComponent);E.propTypes={entityId:y.a.string.isRequired,onClick:y.a.func,text:y.a.string,variant:y.a.string},E.defaultProps={onClick:null,userId:D,mustRegister:!1,registrationAllowed:!1,registerUrl:null,text:"",variant:"outlined"},b.a=E},1273:function(a,b,c){"use strict";function d(a){var b=e();return function c(){var d,e=w()(a);if(b){var f=w()(this).constructor;d=Reflect.construct(e,arguments,f)}else d=e.apply(this,arguments);return u()(this,d)}}function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}var f=c(7),g=c.n(f),h=c(6),i=c.n(h),j=c(10),k=c.n(j),l=c(8),m=c.n(l),n=c(9),o=c.n(n),p=c(17),q=c.n(p),r=c(11),s=c.n(r),t=c(12),u=c.n(t),v=c(13),w=c.n(v),x=c(18),y=c.n(x),z=c(0),A=c.n(z),B=c(1),C=c.n(B),D=c(19),E=c(14),F=c.n(E),G=c(36),H=c.n(G),I=function(a){function b(){var a;m()(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return a=c.call.apply(c,[this].concat(e)),y()(q()(a),"getText",function(a,b){return"denied"===a?b?"Denying":"Denied":"approved"===a?b?"Approving":"Approved":"canceled"===a?b?"Cancelling":"Canceled":"requested"===a?b?"Rerequesting":"Awaiting Approval":null}),a}s()(b,a);var c=d(b);return o()(b,[{key:"render",value:function a(){var b=this.getText(this.props.status,this.props.syncing);return b?A.a.createElement("p",{className:"action-button__message"},b):null}}]),b}(A.a.PureComponent);I.propTypes={status:C.a.string.isRequired,syncing:C.a.bool},I.defaultProps={syncing:!1},b.a=I},14:function(a,b){a.exports=interceptClient},190:function(a,b,c){"use strict";function d(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function f(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?d(Object(b),!0).forEach(function(c){N()(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):d(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function e(a){var b=g();return function c(){var d,e=L()(a);if(b){var f=L()(this).constructor;d=Reflect.construct(e,arguments,f)}else d=e.apply(this,arguments);return J()(this,d)}}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function h(a){var b,c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:200;return b=function(b){function d(a){var b;return B()(this,d),b=g.call(this,a),N()(F()(b),"handleResponse",function(a){return b.mounted&&b.setState({availability:f(f({},b.state.availability),{},{loading:!1,rooms:JSON.parse(a),shouldUpdate:!1})}),a}),b.handleResponse=b.handleResponse.bind(F()(b)),b.fetchAvailability=R()(b.fetchAvailability,c).bind(F()(b)),b.state={availability:{loading:!1,shouldUpdate:!1,rooms:[]}},b}H()(d,b);var g=e(d);return D()(d,[{key:"componentDidMount",value:function a(){this.mounted=!0}},{key:"componentWillUnmount",value:function a(){this.mounted=!1}},{key:"fetchAvailability",value:function a(b){var c=this,d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(a){return a};return this.setState({availability:f(f({},this.state.availability),{},{loading:!0,shouldUpdate:!1})}),fetch("/api/rooms/availability",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(f(f({},b),{},{start:U.dateToDrupal(U.ensureDate(b.start)),end:U.dateToDrupal(U.ensureDate(b.end))}))}).then(function(a){return a.text()}).then(function(a){return d(c.handleResponse(a))}).catch(function(a){c.mounted&&(console.log(a),c.setState({availability:f(f({},c.state.availability),{},{loading:!1,shouldUpdate:!1})}))})}},{key:"render",value:function b(){return P.a.createElement(a,z()({availability:this.state.availability,fetchAvailability:this.fetchAvailability},this.props))}}]),d}(P.a.Component),b}var i=c(26),j=c.n(i),k=c(27),l=c.n(k),m=c(23),n=c.n(m),o=c(22),p=c.n(o),q=c(24),r=c.n(q),s=c(7),t=c.n(s),u=c(6),v=c.n(u),w=c(10),x=c.n(w),y=c(33),z=c.n(y),A=c(8),B=c.n(A),C=c(9),D=c.n(C),E=c(17),F=c.n(E),G=c(11),H=c.n(G),I=c(12),J=c.n(I),K=c(13),L=c.n(K),M=c(18),N=c.n(M),O=c(0),P=c.n(O),Q=c(59),R=c.n(Q),S=c(14),T=c.n(S),U=T.a.utils;b.a=h},21:function(a,b){a.exports=ReactDOM},36:function(a,b){a.exports=drupalSettings},80:function(a,b){a.exports=interceptTheme}},[1270]);