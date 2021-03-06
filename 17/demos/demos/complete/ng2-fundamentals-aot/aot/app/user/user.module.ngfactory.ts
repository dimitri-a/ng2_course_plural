/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../app/user/user.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/forms/src/directives';
import * as import4 from '@angular/forms/src/form_providers';
import * as import5 from '@angular/router/src/router_module';
import * as import6 from '@angular/common/src/localization';
import * as import7 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import8 from '@angular/forms/src/form_builder';
import * as import9 from '@angular/core/src/di/injector';
import * as import10 from './profile.component.ngfactory';
import * as import11 from './login.component.ngfactory';
import * as import12 from '@angular/core/src/i18n/tokens';
import * as import13 from '../../../app/user/profile.component';
import * as import14 from '../../../app/user/login.component';
import * as import15 from '@angular/router/src/router_config_loader';
class UserModuleInjector extends import0.NgModuleInjector<import1.UserModule> {
  _CommonModule_0:import2.CommonModule;
  _InternalFormsSharedModule_1:import3.InternalFormsSharedModule;
  _FormsModule_2:import4.FormsModule;
  _ReactiveFormsModule_3:import4.ReactiveFormsModule;
  _RouterModule_4:import5.RouterModule;
  _UserModule_5:import1.UserModule;
  __NgLocalization_6:import6.NgLocaleLocalization;
  __RadioControlRegistry_7:import7.RadioControlRegistry;
  __FormBuilder_8:import8.FormBuilder;
  __ROUTES_9:any[];
  constructor(parent:import9.Injector) {
    super(parent,[
      import10.ProfileComponentNgFactory,
      import11.LoginComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _NgLocalization_6():import6.NgLocaleLocalization {
    if ((this.__NgLocalization_6 == null)) { (this.__NgLocalization_6 = new import6.NgLocaleLocalization(this.parent.get(import12.LOCALE_ID))); }
    return this.__NgLocalization_6;
  }
  get _RadioControlRegistry_7():import7.RadioControlRegistry {
    if ((this.__RadioControlRegistry_7 == null)) { (this.__RadioControlRegistry_7 = new import7.RadioControlRegistry()); }
    return this.__RadioControlRegistry_7;
  }
  get _FormBuilder_8():import8.FormBuilder {
    if ((this.__FormBuilder_8 == null)) { (this.__FormBuilder_8 = new import8.FormBuilder()); }
    return this.__FormBuilder_8;
  }
  get _ROUTES_9():any[] {
      if ((this.__ROUTES_9 == null)) { (this.__ROUTES_9 = [[
        {
          path: 'profile',
          component: import13.ProfileComponent
        }
        ,
        {
          path: 'login',
          component: import14.LoginComponent
        }

      ]
    ]); }
    return this.__ROUTES_9;
  }
  createInternal():import1.UserModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._InternalFormsSharedModule_1 = new import3.InternalFormsSharedModule();
    this._FormsModule_2 = new import4.FormsModule();
    this._ReactiveFormsModule_3 = new import4.ReactiveFormsModule();
    this._RouterModule_4 = new import5.RouterModule(this.parent.get(import5.ROUTER_FORROOT_GUARD,(null as any)));
    this._UserModule_5 = new import1.UserModule();
    return this._UserModule_5;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_1; }
    if ((token === import4.FormsModule)) { return this._FormsModule_2; }
    if ((token === import4.ReactiveFormsModule)) { return this._ReactiveFormsModule_3; }
    if ((token === import5.RouterModule)) { return this._RouterModule_4; }
    if ((token === import1.UserModule)) { return this._UserModule_5; }
    if ((token === import6.NgLocalization)) { return this._NgLocalization_6; }
    if ((token === import7.RadioControlRegistry)) { return this._RadioControlRegistry_7; }
    if ((token === import8.FormBuilder)) { return this._FormBuilder_8; }
    if ((token === import15.ROUTES)) { return this._ROUTES_9; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const UserModuleNgFactory:import0.NgModuleFactory<import1.UserModule> = new import0.NgModuleFactory(UserModuleInjector,import1.UserModule);