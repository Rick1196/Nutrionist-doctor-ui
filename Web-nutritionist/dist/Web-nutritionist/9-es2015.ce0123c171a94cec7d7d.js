(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{rZ7t:function(e,t,n){"use strict";n.r(t),n.d(t,"PatientsModule",(function(){return N}));var a=n("ofXK"),i=n("2Yyj"),c=n.n(i),s=n("9WrV"),r=n("tyNb"),o=n("fXoL"),l=n("M34a"),d=n("piIK"),v=n("9ig3"),b=n("jKzE"),h=n("WIjQ"),w=n("G6Tw"),u=n("XNiG"),f=n("kRoH"),p=n("1kSV"),m=n("paZ4"),D=n("tk/3"),C=n("AytR");let y=(()=>{class e{constructor(e){this.http=e}getConsultations(e){return new Promise((t,n)=>{let a=new D.d;a=a.append("start",e.start),a=a.append("end",e.end),a=a.append("nutritionist",e.patient),a=a.append("atended",e.atended),this.http.get(`${C.a.baseUrl}/v1/patient/consultations/${e.patient}`,{params:a}).subscribe(e=>t(e),e=>n(e))})}}return e.\u0275fac=function(t){return new(t||e)(o.bc(D.b))},e.\u0275prov=o.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var g=n("Dhqu");const T=["modalContent"];function S(e,t){if(1&e){const e=o.Ub();o.Tb(0,"mwl-calendar-month-view",11),o.fc("dayClicked",(function(t){return o.Fc(e),o.jc().dayClicked(t.day)}))("eventClicked",(function(t){return o.Fc(e),o.jc().handleEvent("update",t.event)}))("eventTimesChanged",(function(t){return o.Fc(e),o.jc().eventTimesChanged(t)})),o.Sb()}if(2&e){const e=o.jc();o.qc("locale",e.locale)("viewDate",e.viewDate)("events",e.events)("refresh",e.refresh)("activeDayIsOpen",e.activeDayIsOpen)}}function O(e,t){if(1&e){const e=o.Ub();o.Tb(0,"mwl-calendar-week-view",12),o.fc("eventClicked",(function(t){return o.Fc(e),o.jc().handleEvent("update",t.event)}))("eventTimesChanged",(function(t){return o.Fc(e),o.jc().eventTimesChanged(t)})),o.Sb()}if(2&e){const e=o.jc();o.qc("locale",e.locale)("viewDate",e.viewDate)("events",e.events)("refresh",e.refresh)}}function k(e,t){if(1&e){const e=o.Ub();o.Tb(0,"mwl-calendar-day-view",12),o.fc("eventClicked",(function(t){return o.Fc(e),o.jc().handleEvent("update",t.event)}))("eventTimesChanged",(function(t){return o.Fc(e),o.jc().eventTimesChanged(t)})),o.Sb()}if(2&e){const e=o.jc();o.qc("locale",e.locale)("viewDate",e.viewDate)("events",e.events)("refresh",e.refresh)}}function j(e,t){1&e&&(o.Tb(0,"h5",23),o.Oc(1,"Datos de una consulta"),o.Sb())}function V(e,t){if(1&e&&(o.Tb(0,"div",13),o.Mc(1,j,2,0,"h5",14),o.Tb(2,"button",15),o.fc("click",(function(){return(0,t.close)()})),o.Tb(3,"span",16),o.Oc(4,"\xd7"),o.Sb(),o.Sb(),o.Sb(),o.Tb(5,"div",17),o.Tb(6,"div"),o.Tb(7,"div",18),o.Tb(8,"div",19),o.Tb(9,"p",20),o.Oc(10),o.Sb(),o.Sb(),o.Tb(11,"div",19),o.Tb(12,"p",20),o.Oc(13),o.Sb(),o.Sb(),o.Sb(),o.Tb(14,"p",20),o.Oc(15),o.kc(16,"dateFormater"),o.Sb(),o.Sb(),o.Sb(),o.Tb(17,"div",21),o.Tb(18,"button",22),o.fc("click",(function(){return(0,t.close)()})),o.Oc(19," OK "),o.Sb(),o.Sb()),2&e){const e=o.jc();o.Ab(1),o.qc("ngIf","update"===e.modalData.action),o.Ab(9),o.Qc("Atiende: ",(null==e.modalData?null:e.modalData.event.nutritionist_id.first_name)+" "+(null==e.modalData?null:e.modalData.event.nutritionist_id.first_name)," "),o.Ab(3),o.Qc("Telefono de contacto: ",null==e.modalData?null:e.modalData.event.nutritionist_id.phone," "),o.Ab(2),o.Qc("Fecha: ",o.lc(16,4,null==e.modalData?null:e.modalData.event.start)," ")}}const A={red:{primary:"#ad2121",secondary:"#FAE3E3"},blue:{primary:"#1e90ff",secondary:"#D1E8FF"},yellow:{primary:"#e3bc08",secondary:"#FDF1BA"}};let E=(()=>{class e{constructor(e,t,n,a){this.modal=e,this.nutritionist=t,this.patient=n,this.router=a,this.locale="es",this.newEvent={title:"",start:Object(l.a)(new Date),end:Object(d.a)(new Date),color:A.blue,draggable:!0,resizable:{beforeStart:!0,afterEnd:!0},duration:"",nutritionist:""},this.view=f.d.Month,this.CalendarView=f.d,this.viewDate=new Date,this.actions=[{label:'<i class="fas fa-fw fa-pencil-alt"></i>',a11yLabel:"Edit",onClick:({event:e})=>{this.handleEvent("Edited",e)}},{label:'<i class="fas fa-fw fa-trash-alt"></i>',a11yLabel:"Delete",onClick:({event:e})=>{this.events=this.events.filter(t=>t!==e),this.handleEvent("Deleted",e)}}],this.refresh=new u.a,this.events=[],this.activeDayIsOpen=!0,this.params={}}ngOnInit(){this.router.queryParams.subscribe(e=>{this.username=e.username,this.newEvent.nutritionist=this.username,this.params.patient=this.username,this.params.start=Object(v.a)(new Date),this.params.end=Object(b.a)(new Date),this.params.atended=!1,this.retriveConsultations()})}retriveConsultations(){this.patient.getConsultations(this.params).then(e=>{e.forEach(e=>{e.end=new Date(e.end),e.start=new Date(e.start)}),this.events=e}).catch(e=>{console.error(e)})}dayClicked({date:e,events:t}){Object(h.a)(e,this.viewDate)&&(this.activeDayIsOpen=!(Object(w.a)(this.viewDate,e)&&!0===this.activeDayIsOpen||0===t.length),this.viewDate=e)}eventTimesChanged({event:e,newStart:t,newEnd:n}){this.events=this.events.map(a=>a===e?Object.assign(Object.assign({},e),{start:t,end:n}):a),this.handleEvent("Dropped or resized",e)}handleEvent(e,t){this.modalData={event:t,action:e},this.modal.open(this.modalContent,{size:"lg"})}addEvent(){this.events=[...this.events,{title:"New event",start:Object(l.a)(new Date),end:Object(d.a)(new Date),color:A.red,draggable:!0,resizable:{beforeStart:!0,afterEnd:!0}}]}deleteEvent(e){this.events=this.events.filter(t=>t!==e)}setView(e){this.view=e}closeOpenMonthViewDay(){this.activeDayIsOpen=!1}closeFun(e){!0===e&&(this.modal.dismissAll(),this.retriveConsultations())}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(p.a),o.Nb(m.a),o.Nb(y),o.Nb(r.a))},e.\u0275cmp=o.Hb({type:e,selectors:[["app-calendar"]],viewQuery:function(e,t){var n;1&e&&o.Kc(T,!0),2&e&&o.Cc(n=o.gc())&&(t.modalContent=n.first)},decls:28,vars:20,consts:[[1,"row","text-center"],[1,"col-md-4"],[1,"btn-group"],["mwlCalendarPreviousView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],["mwlCalendarToday","",1,"btn","btn-outline-secondary",3,"viewDate","viewDateChange"],["mwlCalendarNextView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],[1,"btn","btn-primary",3,"click"],[1,"mb-3","mt-3",2,"width","100%",3,"ngSwitch"],[3,"locale","viewDate","events","refresh","activeDayIsOpen","dayClicked","eventClicked","eventTimesChanged",4,"ngSwitchCase"],[3,"locale","viewDate","events","refresh","eventClicked","eventTimesChanged",4,"ngSwitchCase"],["modalContent",""],[3,"locale","viewDate","events","refresh","activeDayIsOpen","dayClicked","eventClicked","eventTimesChanged"],[3,"locale","viewDate","events","refresh","eventClicked","eventTimesChanged"],[1,"modal-header"],["class","modal-title",4,"ngIf"],["type","button",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"row"],[1,"col"],[1,"font-weight-normal"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"modal-title"]],template:function(e,t){1&e&&(o.Tb(0,"div",0),o.Tb(1,"div",1),o.Tb(2,"div",2),o.Tb(3,"div",3),o.fc("viewDateChange",(function(e){return t.viewDate=e}))("viewDateChange",(function(){return t.closeOpenMonthViewDay()})),o.Oc(4," Anterior "),o.Sb(),o.Tb(5,"div",4),o.fc("viewDateChange",(function(e){return t.viewDate=e})),o.Oc(6," Hoy "),o.Sb(),o.Tb(7,"div",5),o.fc("viewDateChange",(function(e){return t.viewDate=e}))("viewDateChange",(function(){return t.closeOpenMonthViewDay()})),o.Oc(8," Siguiente "),o.Sb(),o.Sb(),o.Sb(),o.Tb(9,"div",1),o.Tb(10,"h3"),o.Oc(11),o.kc(12,"calendarDate"),o.Sb(),o.Sb(),o.Tb(13,"div",1),o.Tb(14,"div",2),o.Tb(15,"div",6),o.fc("click",(function(){return t.setView(t.CalendarView.Month)})),o.Oc(16," Mes "),o.Sb(),o.Tb(17,"div",6),o.fc("click",(function(){return t.setView(t.CalendarView.Week)})),o.Oc(18," Semana "),o.Sb(),o.Tb(19,"div",6),o.fc("click",(function(){return t.setView(t.CalendarView.Day)})),o.Oc(20," Dia "),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Ob(21,"br"),o.Tb(22,"div",7),o.Mc(23,S,1,5,"mwl-calendar-month-view",8),o.Mc(24,O,1,4,"mwl-calendar-week-view",9),o.Mc(25,k,1,4,"mwl-calendar-day-view",9),o.Sb(),o.Mc(26,V,20,6,"ng-template",null,10,o.Nc)),2&e&&(o.Ab(3),o.qc("view",t.view)("viewDate",t.viewDate),o.Ab(2),o.qc("viewDate",t.viewDate),o.Ab(2),o.qc("view",t.view)("viewDate",t.viewDate),o.Ab(4),o.Pc(o.nc(12,16,t.viewDate,t.view+"ViewTitle","es")),o.Ab(4),o.Fb("active",t.view===t.CalendarView.Month),o.Ab(2),o.Fb("active",t.view===t.CalendarView.Week),o.Ab(2),o.Fb("active",t.view===t.CalendarView.Day),o.Ab(3),o.qc("ngSwitch",t.view),o.Ab(1),o.qc("ngSwitchCase",t.CalendarView.Month),o.Ab(1),o.qc("ngSwitchCase",t.CalendarView.Week),o.Ab(1),o.qc("ngSwitchCase",t.CalendarView.Day))},directives:[f.g,f.i,f.h,a.o,a.p,f.c,f.e,f.a,a.m],pipes:[f.j,g.a],styles:[""]}),e})();const F=[{path:"",children:[{path:"home",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["app-shcedule"]],decls:2,vars:0,consts:[[1,"container-fluid"]],template:function(e,t){1&e&&(o.Tb(0,"div",0),o.Ob(1,"app-calendar"),o.Sb())},directives:[E],styles:[""]}),e})()}]}];let I=(()=>{class e{}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)},imports:[[r.e.forChild(F)],r.e]}),e})();var M=n("UBqL"),q=n("1BeU");Object(a.B)(c.a);let N=(()=>{class e{}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)},imports:[[a.c,I,M.a.forRoot(),f.b.forRoot({provide:f.f,useFactory:q.adapterFactory}),p.b,s.a]]}),e})()}}]);