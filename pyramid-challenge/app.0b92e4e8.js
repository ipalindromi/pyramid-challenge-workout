webpackJsonp([0,2],{0:function(e,t,n){n("m5CD"),e.exports=n("lVK7")},zYAk:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n("b8wA"),r=l(a),o=r.default.generateActions("changeExercise","changeDifficulty","changeMaxLift");t.default=r.default.createActions(o),e.exports=t.default},b8wA:function(e,t,n){"use strict";var l=n("mnWO"),a=new l;e.exports=a},xojz:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var u=n("U7vG"),i=l(u),c=n("U9Vk"),s=l(c),f=n("DsHM"),d=l(f),h=n("rtxM"),p=l(h),m=n("zYAk"),E=l(m),y=!1,x=function(e){function t(n){a(this,t);var l=r(this,e.call(this,n));return l.state={maxEntered:!1},l}return o(t,e),t.prototype.componentWillMount=function(){},t.prototype.componentDidMount=function(){},t.prototype.componentWillUnmount=function(){window.clearTimeout(y)},t.prototype.handleMaxChange=function(e,t){window.clearTimeout(y),y=window.setTimeout(function(){E.default.changeMaxLift(t)},500),this.setState({maxEntered:!!t})},t.prototype.render=function(){var e=this,t=s.default.find(function(t){return t.name===e.props.exercise});return t?i.default.createElement("div",null,i.default.createElement("h1",null,"Let's ",this.props.exercise,"!"),i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col-xs-6"},i.default.createElement(d.default,{style:{marginTop:30},disabled:!0,label:"Uses A Barbell",checked:t.isBarbellExercise})),i.default.createElement("div",{className:"col-xs-6"},i.default.createElement(p.default,{fullWidth:!0,floatingLabelText:"Extra Weight",disabled:t.isBarbellExercise,value:t.isBarbellExercise?45:0}))),i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col-xs-6"},i.default.createElement(p.default,{type:"number",onChange:this.handleMaxChange.bind(this),fullWidth:!0,floatingLabelText:"Your Max For This Exercise",errorText:this.state.maxEntered?"":"You must enter your one rep max"})))):i.default.createElement("div",null,"Could Not Find Exercise")},t}(u.Component);t.default=x,e.exports=t.default},Ye40:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var u=n("U7vG"),i=l(u),c=n("Su6/"),s=l(c),f=n("Owf3"),d=l(f),h=n("rLyh"),p=l(h),m=n("Y0Rz"),E=l(m),y=n("zYAk"),x=l(y),g=n("xojz"),b=l(g),v=function(e){function t(n){a(this,t);var l=r(this,e.call(this,n));return l.state=E.default.getState(),l.onAppStoreChange=l.onAppStoreChange.bind(l),l}return o(t,e),t.prototype.componentDidMount=function(){E.default.listen(this.onAppStoreChange)},t.prototype.componentWillUnmount=function(){E.default.unlisten(this.onAppStoreChange)},t.prototype.onAppStoreChange=function(e){this.setState(e)},t.prototype.handleDifficultyChange=function(e,t,n){x.default.changeDifficulty(n)},t.prototype.handleExerciseChange=function(e,t,n){x.default.changeExercise(n)},t.prototype.render=function(){var e=this.state.exercises.map(function(e,t){return i.default.createElement(p.default,{key:t,value:e.name,primaryText:e.name})});e.splice(0,0,i.default.createElement(p.default,{key:"null"}));var t=this.state.difficulties.map(function(e,t){return i.default.createElement(p.default,{key:t,value:e,primaryText:e})});return i.default.createElement(s.default,{style:{padding:25}},i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col-xs-12"},i.default.createElement(d.default,{floatingLabelText:"Choose Your Exercise",onChange:this.handleExerciseChange.bind(this),errorText:this.state.selectedExercise?"":"You must select an exercise",value:this.state.selectedExercise,floatingLabelFixed:!0,fullWidth:!0},e))),i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col-xs-12"},i.default.createElement(d.default,{floatingLabelText:"Choose Your Difficulty",onChange:this.handleDifficultyChange.bind(this),value:this.state.selectedDifficulty,floatingLabelFixed:!0,fullWidth:!0},t))),i.default.createElement(b.default,{exercise:this.state.selectedExercise}))},t}(u.Component);t.default=v,e.exports=t.default},"2Z/c":function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var u=n("U7vG"),i=l(u),c=n("Su6/"),s=l(c),d=n("Y0Rz"),h=l(d),p=(n("5vLB"),function(e){function t(n){a(this,t);var l=r(this,e.call(this,n));return l.state=h.default.getState(),l.onAppStoreChange=l.onAppStoreChange.bind(l),l}return o(t,e),t.prototype.componentDidMount=function(){h.default.listen(this.onAppStoreChange)},t.prototype.componentWillUnmount=function(){h.default.unlisten(this.onAppStoreChange)},t.prototype.onAppStoreChange=function(e){this.setState(e)},t.prototype._calculateSeries=function(e,t,n){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2.5,a=(arguments.length>4&&void 0!==arguments[4]?arguments[4]:"lbs",this.state.difficulties.indexOf(e));if(void 0===a)throw new Error("Unrecognized difficulty level");var r=15,o=.8;switch(a){case 0:o=.6;break;case 1:o=.7;break;case 2:o=.8;break;case 3:r=30,o=.7;break;case 4:r=30,o=.8}var u=t*o,i=2*l,c=[],s=0,d=n,h=1;for(h;h<=15;h++){var p=(u-n)/14,m=Math.round(p/i)*i;s+=p-m;var E=m;Math.abs(s)>i&&(s>-1?(E+=i,s-=i):(E-=i,s+=i)),E<0&&(E=0);var y=15-(h-1);c.push({set:h,reps:y,increase:E,weight:d,totalWeight:d*y}),d+=E}return r>15&&(c=c.concat(c.slice(0,14).reverse()),f),c},t.prototype.render=function(){var e=[];if(this.state.selectedExercise?this.state.exerciseMax||e.push(i.default.createElement("p",{key:"max",style:{padding:25},className:"bg-warning text-center"},"Your workout will be generated once you enter your one rep maximum for ",this.state.selectedExercise)):e.push(i.default.createElement("p",{key:"exercise",style:{padding:25},className:"bg-warning text-center"},"Your workout will be generated once you enter an excercise")),!e.length){var t=this._calculateSeries(this.state.selectedDifficulty,this.state.exerciseMax,45),n=0,l=0,a=t.map(function(e,t){return n+=e.totalWeight,l+=e.reps,i.default.createElement("tr",{key:t},i.default.createElement("td",null,e.set),i.default.createElement("td",null,e.reps),i.default.createElement("td",null,e.weight),i.default.createElement("td",null,e.increase),i.default.createElement("td",null,e.totalWeight))});e=i.default.createElement("table",{className:"table"},i.default.createElement("thead",null,i.default.createElement("tr",null,i.default.createElement("th",null,"Set"),i.default.createElement("th",null,"Reps"),i.default.createElement("th",null,"Weight"),i.default.createElement("th",null,"Increase"),i.default.createElement("th",null,"Total Weight"))),i.default.createElement("tbody",null,a,i.default.createElement("tr",null,i.default.createElement("td",{colSpan:"2"},"Total Reps:"),i.default.createElement("td",null,l),i.default.createElement("td",null,"Total Weight:"),i.default.createElement("td",null,n))))}return i.default.createElement(s.default,null,i.default.createElement("h1",{style:{margin:0,padding:0},className:"text-center"},"Your Workout"),i.default.createElement("hr",null),e)},t}(u.Component));t.default=p,e.exports=t.default},U9Vk:function(e,t){"use strict";t.__esModule=!0,t.default=[{name:"Bench Press",isBarbellExercise:!0}],e.exports=t.default},lVK7:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var a=n("U7vG"),r=l(a),o=n("O27J"),u=n("Ye40"),i=l(u),c=n("2Z/c"),s=l(c),f=n("Zfgq"),d=n("7L6O"),h=l(d),p=n("S33B"),m=l(p);n("vsjR"),(0,m.default)();var E=function(e){return r.default.createElement(h.default,null,r.default.createElement("div",{className:"container",style:{padding:25}},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-xs-12"},r.default.createElement("div",{className:"panel panel-default"},r.default.createElement("div",{className:"panel-body"},r.default.createElement("div",{className:"page-header"},r.default.createElement("h1",null,"The Pyramid Challenge",r.default.createElement("small",null,"Rules")),r.default.createElement("hr",null),r.default.createElement("ol",null,r.default.createElement("li",null,"Choose an exercise"),r.default.createElement("li",null,"Choose a difficulty"),r.default.createElement("li",null,"Enter the maximum weight you can lift for a single rep for the exercise you chose"),r.default.createElement("li",null,"Try to complete the generated workout as quickly as possible. Track your time!"),r.default.createElement("li",null,"When you miss a rep, the game is over. You'll do better next time!"))))))),r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-xs-12 col-lg-6"},r.default.createElement(i.default,null)),r.default.createElement("div",{className:"col-xs-12 col-lg-6"},r.default.createElement(s.default,null)))))};(0,o.render)(r.default.createElement(f.Router,{history:f.browserHistory},r.default.createElement(f.Route,{path:"/",component:E},r.default.createElement(f.Route,{path:"/pyramid-challenge",component:E}))),document.querySelector("#app"))},vsjR:function(e,t){},Y0Rz:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var r=n("b8wA"),o=l(r),u=n("zYAk"),i=l(u),c=n("U9Vk"),s=l(c),f=["I'm Too Young To Die","Hey, Not Too Rough","Hurt Me Plenty","Ultra-Violence","Nightmare!"],d=function(){function e(){a(this,e),this.selectedExercise=!1,this.exercises=s.default,this.difficulties=f,this.selectedDifficulty="Hurt Me Plenty",this.exerciseMax=0,this.bindListeners({handleExerciseChange:i.default.CHANGE_EXERCISE,handleChangeDifficulty:i.default.changeDifficulty,handleChangeMaxLift:i.default.changeMaxLift})}return e.prototype.handleChangeMaxLift=function(e){this.exerciseMax=e},e.prototype.handleChangeDifficulty=function(e){this.selectedDifficulty=e},e.prototype.handleExerciseChange=function(e){this.selectedExercise=e},e}();t.default=o.default.createStore(d),e.exports=t.default}});
//# sourceMappingURL=app.0b92e4e8.js.map