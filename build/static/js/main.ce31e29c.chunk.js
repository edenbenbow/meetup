(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],[,,,,,,function(e,t,n){},,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),s=n.n(i),c=(n(14),n(1)),l=n(2),o=n(4),u=n(3),h=n(5),m=(n(6),n(15),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showDetails:!1},n.expandCollapseDetails=function(){!1===n.state.showDetails?n.setState({showDetails:!0}):n.setState({showDetails:!1})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;if(this.props.event){var t;this.state.displayDetails;return this.state.showDetails&&(t=r.a.createElement("span",null,r.a.createElement("li",null,this.props.event.address_1),r.a.createElement("li",null,this.props.event.localized_location,","),"                        ",r.a.createElement("li",null,this.props.event.description),r.a.createElement("li",{className:"visibility"},this.props.event.visibility),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.meetup.com/de-DE/jug-hamburg/events/263370107/",target:"_self","aria-label":"Learn more about the event"},"Event link")))),r.a.createElement("div",{className:"overview"},r.a.createElement("ul",{className:"Event"},r.a.createElement("li",{className:"date_time"},this.props.event.local_time," - ",this.props.event.local_date),r.a.createElement("li",{className:"event_name"},this.props.event.name),r.a.createElement("li",{className:"group_name"},"GROUP: ",this.props.event.group.name),r.a.createElement("li",{className:"event_rsvp"},this.props.event.yes_rsvp_count," are going"),t,r.a.createElement("button",{className:"more_details",label:"Details",onClick:function(){return e.expandCollapseDetails()}},"Details")))}}}]),t}(a.Component)),d=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={events:[{id:1,local_time:"19:00",local_date:"2019-08-27",name:"Microservices mit dem MicroProfile 3.x",group:{name:"Java User Group Hamburg"},yes_rsvp_count:80,visibility:"public",address_1:"Gro\xdfe Elbstra\xdfe 36",localized_location:"Hamburg, Deutschland",description:"Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups."},{id:2,yes_rsvp_count:2,description:"desc2",group:{name:"Java User Group Hamburg"}},{id:3,yes_rsvp_count:3,description:"desc3",group:{name:"Java User Group Hamburg"}},{id:4,yes_rsvp_count:4,description:"desc4",group:{name:"Java User Group Hamburg"}}]},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(!this.props.numberSelected)return null;var e=this.state.events.slice(0,this.props.numberSelected);return r.a.createElement("ul",{className:"EventList"},e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(m,{event:e}))})))}}]),t}(a.Component),p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:"Munich",suggestions:[]},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t})},n.handleItemClicked=function(e){n.setState({query:e})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string)}},t.name_string)}))))}}]),t}(a.Component),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={numberSelected:""},n.newNumber=function(e){var t=e.target.value;n.setState({numberSelected:t}),n.props.changeNumberSelected(t)},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"NumberOfEvents"},r.a.createElement("p",{className:"select_number_string"},"Show ",r.a.createElement("input",{type:"number",className:"numbers_field",value:this.props.numberSelected,onChange:this.newNumber})," events"))}}]),t}(a.Component),b=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={numberSelected:"32"},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"changeNumber",value:function(e){this.setState({numberSelected:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Meetup Events"),r.a.createElement(p,null),r.a.createElement(v,{numberSelected:this.state.numberSelected,changeNumberSelected:this.changeNumber.bind(this)}),r.a.createElement(d,{numberSelected:this.state.numberSelected}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.ce31e29c.chunk.js.map