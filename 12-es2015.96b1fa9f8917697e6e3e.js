(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2OfA":function(a,e,o){"use strict";o.r(e);var r=o("ofXK"),t=o("tyNb"),c=o("fXoL");let n=(()=>{class a{constructor(){}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=c.Pb({type:a,selectors:[["app-usuario"]],decls:1,vars:0,template:function(a,e){1&a&&c.Wb(0,"router-outlet")},directives:[t.i],styles:[""]}),a})();var i=o("3Pt+"),s=o("PSD3"),l=o.n(s),u=o("M0ag"),m=o("ey9i"),b=o("AytR"),d=o("tk/3"),g=o("ZOsW");const f=["input"];function p(a,e){1&a&&(c.bc(0,"span"),c.Wb(1,"i",8),c.Mc(2," Seleccionar Imagen... "),c.ac())}function h(a,e){1&a&&(c.bc(0,"span"),c.Wb(1,"i",9),c.Mc(2," Cambiar Imagen... "),c.ac())}function v(a,e){if(1&a){const a=c.cc();c.bc(0,"i",10),c.jc("click",(function(e){return c.Dc(a),c.lc().removeImage()})),c.ac()}}function I(a,e){if(1&a&&c.Wb(0,"img",11),2&a){const a=c.lc();c.rc("src",a.pathImagen,c.Fc)}}let F=(()=>{class a{constructor(a){this.host=a,this.file=null}emitFiles(a){const e=a&&a.item(0);console.log("host change",e),this.onChange(e),this.file=e,e?this.setImagen(e):this.image=""}fileChange(a){console.log("fileChange",a.files[0]);const e=new FileReader;if(a.files.length){const o=a.files[0];e.onload=()=>{this.image=e.result},e.readAsDataURL(o)}}setImagen(a){const e=new FileReader;e.onload=()=>{this.image=e.result},e.readAsDataURL(a)}removeImage(){this.image="",this.inputImagen.nativeElement.value=null,this.file=null,this.onChange(this.file)}writeValue(a){console.log("writeValue",a),this.image="",this.inputImagen.nativeElement.value=null,this.file=null}registerOnChange(a){this.onChange=a}registerOnTouched(a){}}return a.\u0275fac=function(e){return new(e||a)(c.Vb(c.o))},a.\u0275cmp=c.Pb({type:a,selectors:[["app-image-uploader"]],viewQuery:function(a,e){var o;1&a&&c.Ic(f,!0),2&a&&c.zc(o=c.kc())&&(e.inputImagen=o.first)},hostBindings:function(a,e){1&a&&c.jc("change",(function(a){return e.emitFiles(a.target.files)}))},inputs:{pathImagen:"pathImagen"},features:[c.Hb([{provide:i.l,useExisting:a,multi:!0}])],decls:9,vars:5,consts:[["type","file","accept","image/png, image/jpeg",1,"img-upload-btn"],["input",""],["type","button",1,"btn","btn-primary","btn-block","rounded-0"],[4,"ngIf"],[1,"image-wrapper"],["class","fa fa-times delete-img",3,"click",4,"ngIf"],["width","100%"],["width","100%",3,"src",4,"ngIf"],[1,"fa","fa-upload"],[1,"fa","fa-refresh"],[1,"fa","fa-times","delete-img",3,"click"],["width","100%",3,"src"]],template:function(a,e){1&a&&(c.Wb(0,"input",0,1),c.bc(2,"button",2),c.Kc(3,p,3,0,"span",3),c.Kc(4,h,3,0,"span",3),c.ac(),c.bc(5,"div",4),c.Kc(6,v,1,0,"i",5),c.Wb(7,"img",6),c.Kc(8,I,1,1,"img",7),c.ac()),2&a&&(c.Ib(3),c.rc("ngIf",!e.image),c.Ib(1),c.rc("ngIf",e.image),c.Ib(2),c.rc("ngIf",e.image),c.Ib(1),c.Jb("src",e.image,c.Fc),c.Ib(1),c.rc("ngIf",!e.image))},directives:[r.m],styles:[".img-upload-btn{position:absolute;padding:0;width:calc(100% - 30px);height:38px;opacity:0}.image-wrapper{position:relative}.image-wrapper .delete-img{position:absolute;top:8px;right:10px;border:2px solid #fff;color:#fff;padding:3px 5px;border-radius:50%;visibility:hidden;cursor:pointer}.image-wrapper:hover .delete-img{visibility:visible}"],encapsulation:2}),a})();function x(a,e){1&a&&(c.bc(0,"small",29),c.Mc(1," campo obligatorio "),c.ac())}function w(a,e){if(1&a&&(c.bc(0,"small",29),c.Mc(1),c.ac()),2&a){const a=c.lc(2);c.Ib(1),c.Oc(" ",null==a.Forma.controls.nombre.errors?null:null==a.Forma.controls.nombre.errors.maxlength?null:a.Forma.controls.nombre.errors.maxlength.requiredLength," caracteres como m\xe1ximo ")}}function M(a,e){1&a&&(c.bc(0,"small",29),c.Mc(1," campo obligatorio "),c.ac())}function y(a,e){if(1&a&&(c.bc(0,"small",29),c.Mc(1),c.ac()),2&a){const a=c.lc(2);c.Ib(1),c.Oc(" ",null==a.Forma.controls.cuenta.errors?null:null==a.Forma.controls.cuenta.errors.maxlength?null:a.Forma.controls.cuenta.errors.maxlength.requiredLength," caracteres como m\xe1ximo ")}}function _(a,e){1&a&&(c.bc(0,"small",29),c.Mc(1," campo obligatorio "),c.ac())}function C(a,e){if(1&a&&(c.bc(0,"small",29),c.Mc(1),c.ac()),2&a){const a=c.lc(3);c.Ib(1),c.Oc(" ",null==a.Forma.controls.contrasena.errors?null:null==a.Forma.controls.contrasena.errors.minlength?null:a.Forma.controls.contrasena.errors.minlength.requiredLength," caracteres como minimo ")}}function U(a,e){if(1&a&&(c.bc(0,"small",29),c.Mc(1),c.ac()),2&a){const a=c.lc(3);c.Ib(1),c.Oc(" ",null==a.Forma.controls.contrasena.errors?null:null==a.Forma.controls.contrasena.errors.maxlength?null:a.Forma.controls.contrasena.errors.maxlength.requiredLength," caracteres como m\xe1ximo ")}}function k(a,e){if(1&a&&(c.bc(0,"div",11),c.bc(1,"label"),c.Mc(2,"Contrase\xf1a"),c.ac(),c.Wb(3,"input",30),c.Kc(4,_,2,0,"small",13),c.Kc(5,C,2,1,"small",13),c.Kc(6,U,2,1,"small",13),c.ac()),2&a){const a=c.lc(2);c.Ib(4),c.rc("ngIf",a.Forma.get("contrasena").touched&&a.Forma.get("contrasena").hasError("required")),c.Ib(1),c.rc("ngIf",a.Forma.get("contrasena").touched&&a.Forma.get("contrasena").hasError("minlength")),c.Ib(1),c.rc("ngIf",a.Forma.get("contrasena").touched&&a.Forma.get("contrasena").hasError("maxlength"))}}function j(a,e){1&a&&(c.bc(0,"small",29),c.Mc(1," campo obligatorio "),c.ac())}function E(a,e){if(1&a&&(c.bc(0,"small",29),c.Mc(1),c.ac()),2&a){const a=c.lc(3);c.Ib(1),c.Oc(" ",null==a.Forma.controls.confirmarContrasena.errors?null:null==a.Forma.controls.confirmarContrasena.errors.minlength?null:a.Forma.controls.confirmarContrasena.errors.minlength.requiredLength," caracteres como minimo ")}}function K(a,e){if(1&a&&(c.bc(0,"small",29),c.Mc(1),c.ac()),2&a){const a=c.lc(3);c.Ib(1),c.Oc(" ",null==a.Forma.controls.confirmarContrasena.errors?null:null==a.Forma.controls.confirmarContrasena.errors.maxlength?null:a.Forma.controls.confirmarContrasena.errors.maxlength.requiredLength," caracteres como m\xe1ximo ")}}function P(a,e){1&a&&(c.bc(0,"small",29),c.Mc(1," La contrase\xf1a no coincide "),c.ac())}function q(a,e){if(1&a&&(c.bc(0,"div",11),c.bc(1,"label"),c.Mc(2,"Confirmar Contrase\xf1a"),c.ac(),c.Wb(3,"input",31),c.Kc(4,j,2,0,"small",13),c.Kc(5,E,2,1,"small",13),c.Kc(6,K,2,1,"small",13),c.Kc(7,P,2,0,"small",13),c.ac()),2&a){const a=c.lc(2);c.Ib(4),c.rc("ngIf",a.Forma.get("confirmarContrasena").touched&&a.Forma.get("confirmarContrasena").hasError("required")),c.Ib(1),c.rc("ngIf",a.Forma.get("confirmarContrasena").touched&&a.Forma.get("confirmarContrasena").hasError("minlength")),c.Ib(1),c.rc("ngIf",a.Forma.get("confirmarContrasena").touched&&a.Forma.get("confirmarContrasena").hasError("maxlength")),c.Ib(1),c.rc("ngIf",a.Forma.get("confirmarContrasena").touched&&a.Forma.get("confirmarContrasena").hasError("mustMatch"))}}function S(a,e){1&a&&(c.bc(0,"small",29),c.Mc(1," campo obligatorio "),c.ac())}function V(a,e){1&a&&(c.bc(0,"small",29),c.Mc(1," Solo se acepta .jpg y png "),c.ac())}function W(a,e){if(1&a&&c.Wb(0,"app-image-uploader",32),2&a){const a=c.lc(2);c.rc("pathImagen",a.pathImagen)}}function L(a,e){1&a&&(c.bc(0,"small",29),c.Mc(1," Debe seleccionar una Imagen "),c.ac())}function O(a,e){if(1&a){const a=c.cc();c.bc(0,"form",8),c.jc("ngSubmit",(function(e){return c.Dc(a),c.lc().validar()})),c.bc(1,"div",9),c.bc(2,"div",10),c.bc(3,"div",11),c.bc(4,"label"),c.Mc(5,"Nombre(s) y Apellido(s)"),c.ac(),c.Wb(6,"input",12),c.Kc(7,x,2,0,"small",13),c.Kc(8,w,2,1,"small",13),c.ac(),c.bc(9,"div",11),c.bc(10,"label"),c.Mc(11,"G\xe9nero:"),c.ac(),c.bc(12,"div",14),c.Wb(13,"input",15),c.bc(14,"label",16),c.Mc(15,"Masculino"),c.ac(),c.ac(),c.bc(16,"div",14),c.Wb(17,"input",17),c.bc(18,"label",18),c.Mc(19,"Femenino"),c.ac(),c.ac(),c.ac(),c.bc(20,"div",11),c.bc(21,"label"),c.Mc(22,"Usuario"),c.ac(),c.Wb(23,"input",19),c.Kc(24,M,2,0,"small",13),c.Kc(25,y,2,1,"small",13),c.ac(),c.Kc(26,k,7,3,"div",20),c.Kc(27,q,8,4,"div",20),c.bc(28,"div",11),c.bc(29,"label"),c.Mc(30,"Rol"),c.ac(),c.Wb(31,"ng-select",21),c.Kc(32,S,2,0,"small",13),c.ac(),c.bc(33,"div",22),c.bc(34,"button",23),c.Wb(35,"i",24),c.Mc(36,"Guardar"),c.ac(),c.bc(37,"button",25),c.jc("click",(function(e){return c.Dc(a),c.lc().cancelar()})),c.Wb(38,"i",26),c.Mc(39,"Cancelar"),c.ac(),c.ac(),c.ac(),c.bc(40,"div",27),c.Kc(41,V,2,0,"small",13),c.Kc(42,W,1,1,"app-image-uploader",28),c.Kc(43,L,2,0,"small",13),c.ac(),c.ac(),c.ac()}if(2&a){const a=c.lc();c.rc("formGroup",a.Forma),c.Ib(7),c.rc("ngIf",a.Forma.get("nombre").touched&&a.Forma.get("nombre").hasError("required")),c.Ib(1),c.rc("ngIf",a.Forma.get("nombre").touched&&a.Forma.get("nombre").hasError("maxlength")),c.Ib(16),c.rc("ngIf",a.Forma.get("cuenta").touched&&a.Forma.get("cuenta").hasError("required")),c.Ib(1),c.rc("ngIf",a.Forma.get("cuenta").touched&&a.Forma.get("cuenta").hasError("maxlength")),c.Ib(1),c.rc("ngIf",!a.banderaModifica),c.Ib(1),c.rc("ngIf",!a.banderaModifica),c.Ib(4),c.rc("items",a.arrayRoles)("loading",!1),c.Ib(1),c.rc("ngIf",a.Forma.get("nsec_rol").touched&&a.Forma.get("nsec_rol").hasError("required")),c.Ib(9),c.rc("ngIf",a.Forma.get("image").touched&&a.Forma.get("image").hasError("requiredFileType")),c.Ib(1),c.rc("ngIf",a.pathImagen),c.Ib(1),c.rc("ngIf",a.Forma.get("image").touched&&a.Forma.get("image").hasError("required"))}}let A=(()=>{class a{constructor(a,e,o,r,t,c,n){this.http=a,this._router=e,this._activated_route=o,this._fb=r,this._usuarioService=t,this._metodosGlobales=c,this._rolService=n,this.objUsuario={},this.arrayRoles=[],this.banderaModifica=!1,this.iniciarFormulario(this._fb)}ngOnInit(){this.titulo="Registro de Usuario",this.traerRoles(),this.cargarUsuario()}iniciarFormulario(a){this.Forma=a.group({num_sec:[0],nombre:["",i.w.compose([i.w.required,i.w.maxLength(50)])],cuenta:["",i.w.compose([i.w.required,i.w.maxLength(150)])],contrasena:[""],confirmarContrasena:[""],tipo:"0",genero:["m",i.w.compose([i.w.required])],image:[null],pathimagen:[""],nsec_rol:["",i.w.compose([i.w.required])]},{validator:a=>{const e=a.controls.confirmarContrasena;e.errors&&!e.errors.mustMatch||e.setErrors(a.controls.contrasena.value!==e.value?{mustMatch:!0}:null)}})}cargarUsuario(){this._activated_route.params.subscribe(a=>{a.num_sec?(this.titulo="Modificaci\xf3n de Usuario",this.banderaModifica=!0,this._usuarioService.traerPorCodigo(a.num_sec).subscribe(a=>{if(!this._metodosGlobales.validaError(a,!1))return;this.objUsuario=a.response;const e={confirmarContrasena:this.objUsuario.contrasena};console.log(this.objUsuario),Object.assign(this.objUsuario,e),this.Forma.setValue(this.objUsuario),this.pathImagen=""===this.objUsuario.pathimagen?"assets/img/app/no-image.png":`${b.a.api_url}/${this.objUsuario.pathimagen}`},a=>{console.log(a)})):(this.setValidators(),this.pathImagen="assets/img/app/no-image.png")})}get f(){return this.Forma.controls}validar(){this.Forma.markAllAsTouched(),this.Forma.valid&&l.a.fire(u.b).then(a=>{a.value&&(!0===this.banderaModifica?this.modificar():this.guardar())})}setValidators(){const a=this.Forma.get("image"),e=this.Forma.get("contrasena"),o=this.Forma.get("confirmarContrasena");a.setValidators(i.w.compose([i.w.required,function(a){const e=a.value;if(e){const a=e.name.split(".")[1].toLowerCase();return"png-jpg".toLowerCase().indexOf(a.toLowerCase())<0?{requiredFileType:!0}:null}return null}])),e.setValidators(i.w.compose([i.w.required,i.w.minLength(6),i.w.maxLength(15)])),o.setValidators(i.w.compose([i.w.required,i.w.minLength(6),i.w.maxLength(15)]))}guardar(){this.objUsuario.num_sec=1,this._usuarioService.guardar(this.toFormData(this.Forma.value)).subscribe(a=>{this._metodosGlobales.validaError(a)&&this.cancelar()},a=>{console.log(a)})}saveimagen(){this.http.post(`${b.a.api_url}/api/usuario`,this.toFormData(this.Forma.value)).pipe().subscribe(a=>{})}modificar(){this.actualizarForma(this.Forma.value),this._usuarioService.modificar(this.objUsuario.num_sec.toString(),this.toFormData(this.Forma.value)).subscribe(a=>{this._metodosGlobales.validaError(a)&&this._router.navigate(["administracion/usuario","buscar"])},a=>{console.log(a)})}cancelar(){this.banderaModifica?this._router.navigate(["administracion/usuario","buscar"]):(this.Forma.reset(),this.Forma.get("num_sec").setValue(0),this.Forma.get("genero").setValue("m"),this.Forma.get("tipo").setValue("0"))}actualizarForma(a){Object.assign(this.objUsuario,a)}toFormData(a){const e=new FormData;for(const o of Object.keys(a))e.append(o,a[o]);return e}traerRoles(){this._rolService.buscarPaginado("","nombre",0,0).subscribe(a=>{this._metodosGlobales.validaError(a,!1)&&(this.arrayRoles=a.response)},a=>{console.log(a)})}}return a.\u0275fac=function(e){return new(e||a)(c.Vb(d.b),c.Vb(t.e),c.Vb(t.a),c.Vb(i.e),c.Vb(m.n),c.Vb(m.i),c.Vb(m.l))},a.\u0275cmp=c.Pb({type:a,selectors:[["app-usuario-nuevo"]],decls:9,vars:2,consts:[[1,"row","justify-content-center"],[1,"col-xl-10","col-md-8"],[1,"card","border-0","box-shadow","rounded-0"],[1,"card-header"],[1,"mb-0"],[1,"fa","fa-save"],[1,"card-body","pt-0"],["class","text-left mt-4",3,"formGroup","ngSubmit",4,"ngIf"],[1,"text-left","mt-4",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-xl-6","col-md-8"],[1,"form-group"],["formControlName","nombre","type","text",1,"form-control","validation-field"],["class","text-danger",4,"ngIf"],[1,"custom-control","custom-radio"],["type","radio","name","genero","id","m","value","m","formControlName","genero",1,"custom-control-input","radio-primary"],["for","m",1,"custom-control-label"],["type","radio","name","genero","id","f","value","f","formControlName","genero",1,"custom-control-input","radio-primary"],["for","f",1,"custom-control-label"],["formControlName","cuenta","autocomplete","on","type","text",1,"form-control","validation-field"],["class","form-group",4,"ngIf"],["formControlName","nsec_rol","name","nsec_rol","bindLabel","nombre","bindValue","num_sec",1,"custom",3,"items","loading"],[1,"form-group","text-center","mb-0"],["type","submit",1,"btn","btn-primary"],[1,"fa","fa-save","mr-2"],["type","button",1,"btn","btn-secondary","ml-1",3,"click"],[1,"fa","fa-remove","mr-2"],[1,"col-xl-4","col-md-4"],["formControlName","image",3,"pathImagen",4,"ngIf"],[1,"text-danger"],["formControlName","contrasena","autocomplete","new-password","type","password",1,"form-control","validation-field"],["formControlName","confirmarContrasena","autocomplete","new-password","type","password",1,"form-control","validation-field"],["formControlName","image",3,"pathImagen"]],template:function(a,e){1&a&&(c.bc(0,"div",0),c.bc(1,"div",1),c.bc(2,"div",2),c.bc(3,"div",3),c.bc(4,"h4",4),c.Wb(5,"i",5),c.Mc(6),c.ac(),c.ac(),c.bc(7,"div",6),c.Kc(8,O,44,13,"form",7),c.ac(),c.ac(),c.ac(),c.ac()),2&a&&(c.Ib(6),c.Oc(" ",e.titulo,""),c.Ib(2),c.rc("ngIf",e.Forma))},directives:[r.m,i.y,i.o,i.i,i.b,i.n,i.g,i.t,g.a,F],styles:[""]}),a})();var G=o("lDzL"),N=o("Mfq2");function D(a,e){1&a&&(c.bc(0,"div",23),c.bc(1,"div",24),c.bc(2,"h5",25),c.Mc(3,"No se encontr\xf3 ning\xfan resultado"),c.ac(),c.ac(),c.ac())}function R(a,e){1&a&&c.Mc(0),2&a&&c.Oc(" ",e.value," ")}function H(a,e){1&a&&c.Mc(0),2&a&&c.Oc(" ",e.value," ")}function T(a,e){1&a&&c.Mc(0),2&a&&c.Oc(" ",e.value," ")}function z(a,e){1&a&&c.Mc(0),2&a&&c.Oc(" ",e.value," ")}const B=function(a){return["/administracion/usuario/modificar",a]};function J(a,e){if(1&a&&(c.bc(0,"div",35),c.bc(1,"button",36),c.Wb(2,"i",37),c.ac(),c.ac()),2&a){const a=e.value;c.Ib(1),c.rc("routerLink",c.uc(2,B,a))("adaptivePosition",!1)}}function $(a,e){if(1&a){const a=c.cc();c.bc(0,"div",35),c.bc(1,"button",38),c.jc("click",(function(o){c.Dc(a);const r=e.row;return c.lc(2).eliminar(r)})),c.Wb(2,"i",39),c.ac(),c.ac()}2&a&&(c.Ib(1),c.rc("adaptivePosition",!1))}function X(a,e){if(1&a){const a=c.cc();c.bc(0,"ngx-datatable",26,27),c.jc("page",(function(e){return c.Dc(a),c.lc().buscarPaginado(e)})),c.bc(2,"ngx-datatable-column",28),c.Kc(3,R,1,1,"ng-template",29),c.ac(),c.bc(4,"ngx-datatable-column",30),c.Kc(5,H,1,1,"ng-template",29),c.ac(),c.bc(6,"ngx-datatable-column",31),c.Kc(7,T,1,1,"ng-template",29),c.ac(),c.bc(8,"ngx-datatable-column",32),c.Kc(9,z,1,1,"ng-template",29),c.ac(),c.bc(10,"ngx-datatable-column",33),c.Kc(11,J,3,4,"ng-template",29),c.ac(),c.bc(12,"ngx-datatable-column",34),c.Kc(13,$,3,1,"ng-template",29),c.ac(),c.ac()}if(2&a){const a=c.lc();c.rc("rows",a.array)("headerHeight",40)("columnMode","force")("footerHeight",50)("rowHeight","auto")("loadingIndicator",a.banderaCargando)("externalPaging",!0)("count",a.paginado.totalElementos)("limit",a.paginado.cantidadMostrar)("offset",a.paginado.numeroPaginaActual)("scrollbarH",!0),c.Ib(10),c.rc("width",55),c.Ib(2),c.rc("width",55)}}function Q(a,e){if(1&a&&(c.bc(0,"div"),c.bc(1,"span"),c.Mc(2),c.ac(),c.ac(),c.bc(3,"small"),c.bc(4,"b"),c.Mc(5),c.ac(),c.ac()),2&a){const a=e.item;c.Ib(2),c.Nc(a.nombre),c.Ib(3),c.Nc(a.nombre_rol)}}function Z(a,e){1&a&&(c.bc(0,"small",18),c.Mc(1," campo obligatorio "),c.ac())}function Y(a,e){1&a&&(c.bc(0,"div",19),c.bc(1,"h1",20),c.Wb(2,"i",21),c.Mc(3," Funciones"),c.ac(),c.ac())}function aa(a,e){if(1&a){const a=c.cc();c.bc(0,"div",8),c.bc(1,"label"),c.Mc(2,"FIltro"),c.ac(),c.bc(3,"div",22),c.bc(4,"input",23,24),c.jc("keyup",(function(e){c.Dc(a);const o=c.Ac(5);return c.lc().tree.treeModel.filterNodes(o.value)})),c.ac(),c.bc(6,"span",25),c.bc(7,"button",26),c.jc("click",(function(e){return c.Dc(a),c.lc().tree.treeModel.clearFilter()})),c.Wb(8,"i",27),c.ac(),c.ac(),c.ac(),c.ac()}}const ea=[{path:"",component:n,resolve:{},children:[{path:"nuevo",component:A,data:{breadcrumb:"Usuario / Registrar"}},{path:"buscar",component:(()=>{class a{constructor(a,e){this._usuarioService=a,this._metodosGlobales=e,this.paginado=new m.j,this.banderaCargando=!1,this.array=[],this.busqueda={valor:"",parametro:"u.nombre"}}ngOnInit(){this.paginado.numeroPaginaActual=0,this.paginado.cantidadMostrar=5,this.buscarPaginado({offset:0})}buscarPaginado(a){this.banderaCargando=!0,this.paginado.numeroPaginaActual=a.offset,this._usuarioService.buscarPaginado(this.busqueda.valor,this.busqueda.parametro,this.paginado.numeroPaginaActual,this.paginado.cantidadMostrar).subscribe(a=>{this._metodosGlobales.validaError(a,!1)&&(this.paginado.totalElementos=Number(a.total),this.paginado.cantidadMostrar=this.paginado.cantidadMostrar,this.array=a.response,this.banderaCargando=!1)},a=>{this.banderaCargando=!1,console.log(a)})}numeroRegistrosMostrados(a){this.paginado.cantidadMostrar=a.srcElement.value,this.paginado.numeroPaginaActual=0,this.buscarPaginado({offset:this.paginado.numeroPaginaActual})}eliminar(a){l.a.fire(Object(u.c)("\xbfEst\xe1 seguro de\n    Eliminar el Registro?")).then(e=>{!0===e.value&&this._usuarioService.eliminar(a.num_sec).subscribe(a=>{this._metodosGlobales.validaError(a)&&this.buscarPaginado({offset:this.paginado.numeroPaginaActual})},a=>{console.log(a)})})}}return a.\u0275fac=function(e){return new(e||a)(c.Vb(m.n),c.Vb(m.i))},a.\u0275cmp=c.Pb({type:a,selectors:[["app-usuario-buscar"]],decls:41,vars:4,consts:[[1,"card","border-0","box-shadow","rounded-0","mb-0"],[1,"card-header"],[1,"mb-0"],[1,"fa","fa-search"],[1,"card-body","pt-0"],[1,"mt-4"],[1,"form-row"],[1,"form-group","col-md-1"],["for","inlineFormCustomSelectPref"],["id","inlineFormCustomSelectPref",1,"custom-select",3,"change"],["selected","","value","5"],["value","10"],["value","30"],["value","50"],[1,"form-group","col-md-3"],["name","parametro","id","inlineFormCustomSelectPref",1,"custom-select",3,"ngModel","ngModelChange"],["value","u.num_sec"],["value","u.nombre"],[1,"form-group","col-md-5"],["name","valor","type","text","id","inlineFormInputName2","placeholder","Buscar",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn","btn-sm","btn-primary","my-1",3,"click"],["class","card text-white bg-secondary mb-3",4,"ngIf","ngIfElse"],["show",""],[1,"card","text-white","bg-secondary","mb-3"],[1,"card-body","text-center","p-2"],[1,"card-title"],[1,"material",3,"rows","headerHeight","columnMode","footerHeight","rowHeight","loadingIndicator","externalPaging","count","limit","offset","scrollbarH","page"],["table",""],["name","C\xf3digo","prop","num_sec"],["ngx-datatable-cell-template",""],["name","Nombre(s) y Apellido(s)","prop","nombre"],["name","Usuario","prop","cuenta"],["name","Rol","prop","nombre_rol"],["name","","prop","num_sec",3,"width"],["name","",3,"width"],[1,"text-center"],["placement","left","tooltip","Modificar",1,"btn","btn-sm","btn-primary",3,"routerLink","adaptivePosition"],[1,"fa","fa-pencil"],["placement","left","tooltip","Eliminar",1,"btn","btn-sm","btn-danger",3,"adaptivePosition","click"],[1,"fa","fa-trash"]],template:function(a,e){if(1&a&&(c.bc(0,"div",0),c.bc(1,"div",1),c.bc(2,"h4",2),c.Wb(3,"i",3),c.Mc(4," Usuarios "),c.ac(),c.ac(),c.bc(5,"div",4),c.bc(6,"form",5),c.bc(7,"div",6),c.bc(8,"div",7),c.bc(9,"strong"),c.bc(10,"label",8),c.Mc(11,"Mostrar:"),c.ac(),c.ac(),c.ac(),c.bc(12,"div",7),c.bc(13,"select",9),c.jc("change",(function(a){return e.numeroRegistrosMostrados(a)})),c.bc(14,"option",10),c.Mc(15,"5"),c.ac(),c.bc(16,"option",11),c.Mc(17,"10"),c.ac(),c.bc(18,"option",12),c.Mc(19,"30"),c.ac(),c.bc(20,"option",13),c.Mc(21,"50"),c.ac(),c.ac(),c.ac(),c.bc(22,"div",7),c.bc(23,"strong"),c.bc(24,"label",8),c.Mc(25,"Filtrar Por:"),c.ac(),c.ac(),c.ac(),c.bc(26,"div",14),c.bc(27,"select",15),c.jc("ngModelChange",(function(a){return e.busqueda.parametro=a})),c.bc(28,"option",16),c.Mc(29,"C\xf3digo"),c.ac(),c.bc(30,"option",17),c.Mc(31,"Titulo"),c.ac(),c.ac(),c.ac(),c.bc(32,"div",18),c.bc(33,"input",19),c.jc("ngModelChange",(function(a){return e.busqueda.valor=a})),c.ac(),c.ac(),c.bc(34,"div",7),c.bc(35,"button",20),c.jc("click",(function(a){return e.buscarPaginado({offset:0})})),c.Wb(36,"i",3),c.Mc(37," Buscar"),c.ac(),c.ac(),c.ac(),c.ac(),c.ac(),c.ac(),c.Kc(38,D,4,0,"div",21),c.Kc(39,X,14,13,"ng-template",null,22,c.Lc)),2&a){const a=c.Ac(40);c.Ib(27),c.rc("ngModel",e.busqueda.parametro),c.Ib(6),c.rc("ngModel",e.busqueda.valor),c.Ib(5),c.rc("ngIf",0==e.array.length&&!e.banderaCargando)("ngIfElse",a)}},directives:[i.y,i.o,i.p,i.r,i.x,i.v,i.n,i.q,i.b,r.m,G.c,G.b,G.a,N.a,t.f],styles:[""]}),a})(),data:{breadcrumb:"Usuario / Buscar"}},{path:"modificar/:num_sec",component:A,data:{breadcrumb:"Usuario / Modificar"}},{path:"asignar-funcion",component:(()=>{class a{constructor(a,e,o,r){this._usuarioService=a,this._funcionService=e,this._metodosGlobales=o,this._fb=r,this.nodes=[],this.result=[],this.mostrarFunciones=!1,this.arrayUsuarios=[],this.titulo="Asignar Usuario Funcion",this.Forma=this._fb.group({num_sec:[null,i.w.required]})}ngOnInit(){this.traerUsuarios(),this.Forma.get("num_sec").valueChanges.subscribe(a=>{a?(console.log({value:a}),this.nsecUsuario=Number(a),this.traerGrupoFuncionUsuario(a)):(this.mostrarFunciones=!1,this.nodes=[])})}traerUsuarios(){this._usuarioService.buscarPaginado("","u.nombre",0,0).subscribe(a=>{this._metodosGlobales.validaError(a,!1)&&(this.arrayUsuarios=a.response)},a=>{console.log(a)})}traerGrupoFuncionUsuario(a){this._funcionService.traerGrupoFuncionUsuario(a).subscribe(a=>{this._metodosGlobales.validaError(a,!1)&&(this.mostrarFunciones=!0,this.nodes=a.response,this.seleccionarNodos())},a=>{console.log(a),this.mostrarFunciones=!1})}ngAfterViewInit(){}seleccionarNodos(){}validar(){this.Forma.markAllAsTouched(),this.Forma.valid&&l.a.fire(u.b).then(a=>{a.value&&this.guardar()})}guardar(){this.arrrayUsuarioFuncion=this.result.map(a=>({num_sec:0,nsec_usuario:this.nsecUsuario,nsec_funcion:a.id,estado:a.isSelect?"AC":"BA"})),this._funcionService.guardarUsuarioFuncion(this.arrrayUsuarioFuncion).subscribe(a=>{this._metodosGlobales.validaError(a)},a=>{console.log(a)})}updateDataTree(){this.seleccionarNodos()}}return a.\u0275fac=function(e){return new(e||a)(c.Vb(m.n),c.Vb(m.e),c.Vb(m.i),c.Vb(i.e))},a.\u0275cmp=c.Pb({type:a,selectors:[["app-asignar-funcion"]],decls:23,vars:6,consts:[[1,"row","justify-content-center"],[1,"col-xl-8","col-md-10"],[1,"card","border-0","box-shadow","rounded-0"],[1,"card-header"],[1,"mb-0"],[1,"fa","fa-save"],[1,"card-body","pt-0"],[1,"text-left","mt-4",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"form-control-label","mt-1","text-sm-right"],["formControlName","num_sec","bindLabel","nombre","bindValue","num_sec",1,"custom",3,"items"],["ng-option-tmp",""],["class","text-danger",4,"ngIf"],[1,"form-group","text-center","mb-0"],["type","submit",1,"btn","btn-primary"],[1,"fa","fa-save","mr-2"],["class","col-sm-12 d-flex ",4,"ngIf"],["class","form-group",4,"ngIf"],[1,"text-danger"],[1,"col-sm-12","d-flex"],[1,"h2","text-center"],[1,"fa","fa-cogs"],[1,"input-group"],["id","filter","placeholder","Buscar Funcion","type","text",1,"form-control",3,"keyup"],["filter",""],[1,"input-group-append"],["type","button",1,"btn","btn-primary",3,"click"],[1,"fa","fa-trash-o"]],template:function(a,e){1&a&&(c.bc(0,"div",0),c.bc(1,"div",1),c.bc(2,"div",2),c.bc(3,"div",3),c.bc(4,"h4",4),c.Wb(5,"i",5),c.Mc(6),c.ac(),c.ac(),c.bc(7,"div",6),c.bc(8,"form",7),c.jc("ngSubmit",(function(a){return e.validar()})),c.bc(9,"div",8),c.bc(10,"label",9),c.Mc(11,"Seleccionar Usuario:"),c.ac(),c.bc(12,"ng-select",10),c.Kc(13,Q,6,2,"ng-template",11),c.ac(),c.Kc(14,Z,2,0,"small",12),c.Mc(15,"\xa0 "),c.ac(),c.bc(16,"div",13),c.bc(17,"button",14),c.Wb(18,"i",15),c.Mc(19,"Guardar"),c.ac(),c.ac(),c.Kc(20,Y,4,0,"div",16),c.bc(21,"div"),c.Kc(22,aa,9,0,"div",17),c.ac(),c.ac(),c.ac(),c.ac(),c.ac(),c.ac()),2&a&&(c.Ib(6),c.Oc(" ",e.titulo,""),c.Ib(2),c.rc("formGroup",e.Forma),c.Ib(4),c.rc("items",e.arrayUsuarios),c.Ib(2),c.rc("ngIf",e.Forma.get("num_sec").touched&&e.Forma.get("num_sec").hasError("required")),c.Ib(6),c.rc("ngIf",e.mostrarFunciones),c.Ib(2),c.rc("ngIf",e.mostrarFunciones))},directives:[i.y,i.o,i.i,g.a,i.n,i.g,g.c,r.m],styles:['.tree-node-level-1{background:#4e6b5a;color:#fff;font-size:1.5rem}.tree-node-leaf{color:#000;background:#fff;font-size:1rem}.node-content-wrapper-active,.node-content-wrapper-active.node-content-wrapper-focused,.node-content-wrapper-focused,.node-content-wrapper.node-content-wrapper-active:hover,.node-content-wrapper:hover{background:transparent}.tree-node-checkbox{width:20px;height:20px;position:relative;margin:5px;background:#fcfff4;border-radius:50px;box-shadow:inset 0 1px 1px #fff,0 1px 1px rgba(0,0,0,.5)}.tree-node-checkbox label{width:20px;height:20px;cursor:pointer;position:absolute;left:4px;top:4px;border-radius:50px;box-shadow:inset 0 1px 1px rgba(0,0,0,.5),0 1px 0 #fff}.tree-node-checkbox label:after{content:"";width:16px;height:16px;position:absolute;top:2px;left:2px;background:#27ae60;opacity:0;border-radius:50px;box-shadow:inset 0 1px 1px #fff,0 1px 3px rgba(0,0,0,.5)}.tree-node-checkbox label:hover:after{opacity:.3}.tree-node-checkbox input[type=checkbox]{visibility:hidden}.tree-node-checkbox input[type=checkbox]:checked+label:after{opacity:1}'],encapsulation:2}),a})(),data:{breadcrumb:"Usuario / Asignar Funcion"}}]}];let oa=(()=>{class a{}return a.\u0275mod=c.Tb({type:a}),a.\u0275inj=c.Sb({factory:function(e){return new(e||a)},imports:[[t.h.forChild(ea)],t.h]}),a})();o.d(e,"UsuarioModule",(function(){return ra}));let ra=(()=>{class a{}return a.\u0275mod=c.Tb({type:a}),a.\u0275inj=c.Sb({factory:function(e){return new(e||a)},imports:[[r.c,oa,u.a]]}),a})()}}]);