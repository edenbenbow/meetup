(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],[,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),l=a.n(s),c=(a(14),a(1)),i=a(2),o=a(4),u=a(3),m=a(5),h=(a(6),a(15),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showDetails:!1},a.expandCollapseDetails=function(){!1===a.state.showDetails?a.setState({showDetails:!0}):a.setState({showDetails:!1})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;if(this.props.event){var t;this.state.displayDetails;return this.state.showDetails&&(t=r.a.createElement("span",null,r.a.createElement("li",null,this.props.event.address_1),r.a.createElement("li",null,this.props.event.localized_location,","),"                        ",r.a.createElement("li",null,this.props.event.description),r.a.createElement("li",{className:"visibility"},this.props.event.visibility),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.meetup.com/de-DE/jug-hamburg/events/263370107/",target:"_self","aria-label":"Learn more about the event"},"Event link")))),r.a.createElement("div",{className:"overview"},r.a.createElement("ul",{className:"Event"},r.a.createElement("li",{className:"date_time"},this.props.event.local_time," - ",this.props.event.local_date),r.a.createElement("li",{className:"event_name"},this.props.event.name),r.a.createElement("li",{className:"group_name"},"GROUP: ",this.props.event.group.name),r.a.createElement("li",{className:"event_rsvp"},this.props.event.yes_rsvp_count," are going"),t,r.a.createElement("button",{className:"more_details",label:"Details",onClick:function(){return e.expandCollapseDetails()}},"Details")))}}}]),t}(n.Component)),p=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={events:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){if(!this.props.numberSelected)return null;var e=this.state.events.slice(0,this.props.numberSelected);return r.a.createElement("ul",{className:"EventList"},e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(h,{event:e}))})))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:"Munich",suggestions:[]},a.handleInputChanged=function(e){var t=e.target.value;a.setState({query:t})},a.handleItemClicked=function(e){a.setState({query:e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string)}},t.name_string)}))))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={numberSelected:""},a.newNumber=function(e){var t=e.target.value;a.setState({numberSelected:t}),a.props.changeNumberSelected(t)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"NumberOfEvents"},r.a.createElement("p",{className:"select_number_string"},"Show ",r.a.createElement("input",{type:"number",className:"numbers_field",value:this.props.numberSelected,onChange:this.newNumber})," events"))}}]),t}(n.Component),d=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={numberSelected:"32"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"changeNumber",value:function(e){this.setState({numberSelected:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Meetup Events"),r.a.createElement(v,null),r.a.createElement(b,{numberSelected:this.state.numberSelected,changeNumberSelected:this.changeNumber.bind(this)}),r.a.createElement(p,{numberSelected:this.state.numberSelected}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.4eec4b3b.chunk.js.map