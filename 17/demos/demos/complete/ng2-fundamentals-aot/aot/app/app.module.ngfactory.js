/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/forms/src/directives';
import * as import6 from '@angular/forms/src/form_providers';
import * as import7 from '@angular/http/src/http_module';
import * as import8 from '@angular/router/src/router_module';
import * as import9 from '../../app/user/user.module';
import * as import10 from '@angular/common/src/localization';
import * as import11 from '@angular/core/src/application_init';
import * as import12 from '@angular/core/src/testability/testability';
import * as import13 from '@angular/core/src/application_ref';
import * as import14 from '@angular/core/src/linker/compiler';
import * as import15 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import16 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import17 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import18 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import19 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import20 from '@angular/core/src/linker/view_utils';
import * as import21 from '@angular/platform-browser/src/browser/title';
import * as import22 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import23 from '@angular/http/src/backends/browser_xhr';
import * as import24 from '@angular/http/src/base_response_options';
import * as import25 from '@angular/http/src/backends/xhr_backend';
import * as import26 from '@angular/http/src/base_request_options';
import * as import27 from '@angular/forms/src/form_builder';
import * as import28 from '@angular/common/src/location/location';
import * as import29 from '@angular/router/src/url_tree';
import * as import30 from '@angular/router/src/router_outlet_map';
import * as import31 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import32 from '@angular/router/src/router_preloader';
import * as import33 from '../../app/events/shared/event.service';
import * as import34 from '../../app/events/event-resolver.service';
import * as import35 from '../../app/events/events-list-resolver.service';
import * as import36 from '../../app/events/event-details/voter.service';
import * as import37 from '../../app/user/auth.service';
import * as import39 from './user/profile.component.ngfactory';
import * as import40 from './user/login.component.ngfactory';
import * as import41 from './events/create-event.component.ngfactory';
import * as import42 from './events/events-list.component.ngfactory';
import * as import43 from './events/event-details/event-details.component.ngfactory';
import * as import44 from './events/event-details/create-session.component.ngfactory';
import * as import45 from './errors/404.component.ngfactory';
import * as import46 from './events-app.component.ngfactory';
import * as import47 from '@angular/core/src/application_tokens';
import * as import48 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import49 from '@angular/platform-browser/src/dom/events/key_events';
import * as import50 from '@angular/core/src/zone/ng_zone';
import * as import51 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import52 from '../../app/user/profile.component';
import * as import53 from '../../app/user/login.component';
import * as import54 from '../../app/events/create-event.component';
import * as import55 from '../../app/events/events-list.component';
import * as import56 from '../../app/events/event-details/event-details.component';
import * as import57 from '../../app/events/event-details/create-session.component';
import * as import58 from '../../app/errors/404.component';
import * as import59 from '@angular/common/src/location/platform_location';
import * as import60 from '@angular/common/src/location/location_strategy';
import * as import61 from '@angular/router/src/url_handling_strategy';
import * as import62 from '@angular/router/src/router';
import * as import63 from '@angular/core/src/console';
import * as import64 from '@angular/core/src/i18n/tokens';
import * as import65 from '@angular/core/src/error_handler';
import * as import66 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import67 from '@angular/platform-browser/src/dom/animation_driver';
import * as import68 from '@angular/core/src/render/api';
import * as import69 from '@angular/core/src/security';
import * as import70 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import71 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import72 from '@angular/http/src/interfaces';
import * as import73 from '@angular/http/src/http';
import * as import74 from '@angular/router/src/router_config_loader';
import * as import75 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import76 from '@angular/router/src/router_state';
import * as import77 from '../../app/common/toastr.service';
import * as import78 from '../../app/common/jQuery.service';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [
            import39.ProfileComponentNgFactory,
            import40.LoginComponentNgFactory,
            import41.CreateEventComponentNgFactory,
            import42.EventsListComponentNgFactory,
            import43.EventDetailsComponentNgFactory,
            import44.CreateSessionComponentNgFactory,
            import45.Error404ComponentNgFactory,
            import39.ProfileComponentNgFactory,
            import40.LoginComponentNgFactory,
            import46.EventsAppComponentNgFactory
        ], [import46.EventsAppComponentNgFactory]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_11", {
        get: function () {
            if ((this.__LOCALE_ID_11 == null)) {
                (this.__LOCALE_ID_11 = 'en-US');
            }
            return this.__LOCALE_ID_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_12", {
        get: function () {
            if ((this.__NgLocalization_12 == null)) {
                (this.__NgLocalization_12 = new import10.NgLocaleLocalization(this._LOCALE_ID_11));
            }
            return this.__NgLocalization_12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_17", {
        get: function () {
            if ((this.__ApplicationRef_17 == null)) {
                (this.__ApplicationRef_17 = this._ApplicationRef__16);
            }
            return this.__ApplicationRef_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_18", {
        get: function () {
            if ((this.__Compiler_18 == null)) {
                (this.__Compiler_18 = new import14.Compiler());
            }
            return this.__Compiler_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_19", {
        get: function () {
            if ((this.__APP_ID_19 == null)) {
                (this.__APP_ID_19 = import47._appIdRandomProviderFactory());
            }
            return this.__APP_ID_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_20", {
        get: function () {
            if ((this.__DOCUMENT_20 == null)) {
                (this.__DOCUMENT_20 = import4._document());
            }
            return this.__DOCUMENT_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_21", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_21 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_21 = new import15.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_22", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_22 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_22 = [
                    new import48.DomEventsPlugin(),
                    new import49.KeyEventsPlugin(),
                    new import15.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_21)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_23", {
        get: function () {
            if ((this.__EventManager_23 == null)) {
                (this.__EventManager_23 = new import16.EventManager(this._EVENT_MANAGER_PLUGINS_22, this.parent.get(import50.NgZone)));
            }
            return this.__EventManager_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_24", {
        get: function () {
            if ((this.__DomSharedStylesHost_24 == null)) {
                (this.__DomSharedStylesHost_24 = new import17.DomSharedStylesHost(this._DOCUMENT_20));
            }
            return this.__DomSharedStylesHost_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_25", {
        get: function () {
            if ((this.__AnimationDriver_25 == null)) {
                (this.__AnimationDriver_25 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_26", {
        get: function () {
            if ((this.__DomRootRenderer_26 == null)) {
                (this.__DomRootRenderer_26 = new import18.DomRootRenderer_(this._DOCUMENT_20, this._EventManager_23, this._DomSharedStylesHost_24, this._AnimationDriver_25, this._APP_ID_19));
            }
            return this.__DomRootRenderer_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_27", {
        get: function () {
            if ((this.__RootRenderer_27 == null)) {
                (this.__RootRenderer_27 = import51._createConditionalRootRenderer(this._DomRootRenderer_26, this.parent.get(import51.NgProbeToken, null)));
            }
            return this.__RootRenderer_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_28", {
        get: function () {
            if ((this.__DomSanitizer_28 == null)) {
                (this.__DomSanitizer_28 = new import19.DomSanitizerImpl());
            }
            return this.__DomSanitizer_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_29", {
        get: function () {
            if ((this.__Sanitizer_29 == null)) {
                (this.__Sanitizer_29 = this._DomSanitizer_28);
            }
            return this.__Sanitizer_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_30", {
        get: function () {
            if ((this.__ViewUtils_30 == null)) {
                (this.__ViewUtils_30 = new import20.ViewUtils(this._RootRenderer_27, this._Sanitizer_29));
            }
            return this.__ViewUtils_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_31", {
        get: function () {
            if ((this.__IterableDiffers_31 == null)) {
                (this.__IterableDiffers_31 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_32", {
        get: function () {
            if ((this.__KeyValueDiffers_32 == null)) {
                (this.__KeyValueDiffers_32 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_33", {
        get: function () {
            if ((this.__SharedStylesHost_33 == null)) {
                (this.__SharedStylesHost_33 = this._DomSharedStylesHost_24);
            }
            return this.__SharedStylesHost_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_34", {
        get: function () {
            if ((this.__Title_34 == null)) {
                (this.__Title_34 = new import21.Title());
            }
            return this.__Title_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_35", {
        get: function () {
            if ((this.__RadioControlRegistry_35 == null)) {
                (this.__RadioControlRegistry_35 = new import22.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_36", {
        get: function () {
            if ((this.__BrowserXhr_36 == null)) {
                (this.__BrowserXhr_36 = new import23.BrowserXhr());
            }
            return this.__BrowserXhr_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_37", {
        get: function () {
            if ((this.__ResponseOptions_37 == null)) {
                (this.__ResponseOptions_37 = new import24.BaseResponseOptions());
            }
            return this.__ResponseOptions_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_38", {
        get: function () {
            if ((this.__XSRFStrategy_38 == null)) {
                (this.__XSRFStrategy_38 = import7._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_39", {
        get: function () {
            if ((this.__XHRBackend_39 == null)) {
                (this.__XHRBackend_39 = new import25.XHRBackend(this._BrowserXhr_36, this._ResponseOptions_37, this._XSRFStrategy_38));
            }
            return this.__XHRBackend_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_40", {
        get: function () {
            if ((this.__RequestOptions_40 == null)) {
                (this.__RequestOptions_40 = new import26.BaseRequestOptions());
            }
            return this.__RequestOptions_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_41", {
        get: function () {
            if ((this.__Http_41 == null)) {
                (this.__Http_41 = import7.httpFactory(this._XHRBackend_39, this._RequestOptions_40));
            }
            return this.__Http_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_FormBuilder_42", {
        get: function () {
            if ((this.__FormBuilder_42 == null)) {
                (this.__FormBuilder_42 = new import27.FormBuilder());
            }
            return this.__FormBuilder_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_43", {
        get: function () {
            if ((this.__ROUTES_43 == null)) {
                (this.__ROUTES_43 = [
                    [
                        {
                            path: 'profile',
                            component: import52.ProfileComponent
                        },
                        {
                            path: 'login',
                            component: import53.LoginComponent
                        }
                    ],
                    [
                        {
                            path: 'events/new',
                            component: import54.CreateEventComponent,
                            canDeactivate: ['canDeactivateCreateEvent']
                        },
                        {
                            path: 'events',
                            component: import55.EventsListComponent,
                            resolve: { events: import35.EventListResolver }
                        },
                        {
                            path: 'events/:id',
                            component: import56.EventDetailsComponent,
                            resolve: { event: import34.EventResolver }
                        },
                        {
                            path: 'events/session/new',
                            component: import57.CreateSessionComponent
                        },
                        {
                            path: '404',
                            component: import58.Error404Component
                        },
                        {
                            path: '',
                            redirectTo: '/events',
                            pathMatch: 'full'
                        },
                        {
                            path: 'user',
                            children: [
                                {
                                    path: 'profile',
                                    component: import52.ProfileComponent
                                },
                                {
                                    path: 'login',
                                    component: import53.LoginComponent
                                }
                            ]
                        }
                    ]
                ]);
            }
            return this.__ROUTES_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_44", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_44 == null)) {
                (this.__ROUTER_CONFIGURATION_44 = {});
            }
            return this.__ROUTER_CONFIGURATION_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_45", {
        get: function () {
            if ((this.__LocationStrategy_45 == null)) {
                (this.__LocationStrategy_45 = import8.provideLocationStrategy(this.parent.get(import59.PlatformLocation), this.parent.get(import60.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_44));
            }
            return this.__LocationStrategy_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_46", {
        get: function () {
            if ((this.__Location_46 == null)) {
                (this.__Location_46 = new import28.Location(this._LocationStrategy_45));
            }
            return this.__Location_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_47", {
        get: function () {
            if ((this.__UrlSerializer_47 == null)) {
                (this.__UrlSerializer_47 = new import29.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_48", {
        get: function () {
            if ((this.__RouterOutletMap_48 == null)) {
                (this.__RouterOutletMap_48 = new import30.RouterOutletMap());
            }
            return this.__RouterOutletMap_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_49", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_49 == null)) {
                (this.__NgModuleFactoryLoader_49 = new import31.SystemJsNgModuleLoader(this._Compiler_18, this.parent.get(import31.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_50", {
        get: function () {
            if ((this.__Router_50 == null)) {
                (this.__Router_50 = import8.setupRouter(this._ApplicationRef_17, this._UrlSerializer_47, this._RouterOutletMap_48, this._Location_46, this, this._NgModuleFactoryLoader_49, this._Compiler_18, this._ROUTES_43, this._ROUTER_CONFIGURATION_44, this.parent.get(import61.UrlHandlingStrategy, null)));
            }
            return this.__Router_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_51", {
        get: function () {
            if ((this.__ActivatedRoute_51 == null)) {
                (this.__ActivatedRoute_51 = import8.rootRoute(this._Router_50));
            }
            return this.__ActivatedRoute_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_55", {
        get: function () {
            if ((this.__PreloadAllModules_55 == null)) {
                (this.__PreloadAllModules_55 = new import32.PreloadAllModules());
            }
            return this.__PreloadAllModules_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_56", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_56 == null)) {
                (this.__ROUTER_INITIALIZER_56 = import8.initialRouterNavigation(this._Router_50, this._ApplicationRef_17, this._RouterPreloader_54, this._ROUTER_CONFIGURATION_44));
            }
            return this.__ROUTER_INITIALIZER_56;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_57", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_57 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_57 = [this._ROUTER_INITIALIZER_56]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_57;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventService_58", {
        get: function () {
            if ((this.__EventService_58 == null)) {
                (this.__EventService_58 = new import33.EventService(this._Http_41));
            }
            return this.__EventService_58;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_TOASTR_TOKEN_59", {
        get: function () {
            if ((this.__TOASTR_TOKEN_59 == null)) {
                (this.__TOASTR_TOKEN_59 = undefined);
            }
            return this.__TOASTR_TOKEN_59;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_JQ_TOKEN_60", {
        get: function () {
            if ((this.__JQ_TOKEN_60 == null)) {
                (this.__JQ_TOKEN_60 = undefined);
            }
            return this.__JQ_TOKEN_60;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventResolver_61", {
        get: function () {
            if ((this.__EventResolver_61 == null)) {
                (this.__EventResolver_61 = new import34.EventResolver(this._EventService_58));
            }
            return this.__EventResolver_61;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventListResolver_62", {
        get: function () {
            if ((this.__EventListResolver_62 == null)) {
                (this.__EventListResolver_62 = new import35.EventListResolver(this._EventService_58));
            }
            return this.__EventListResolver_62;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_VoterService_63", {
        get: function () {
            if ((this.__VoterService_63 == null)) {
                (this.__VoterService_63 = new import36.VoterService(this._Http_41));
            }
            return this.__VoterService_63;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AuthService_64", {
        get: function () {
            if ((this.__AuthService_64 == null)) {
                (this.__AuthService_64 = new import37.AuthService(this._Http_41));
            }
            return this.__AuthService_64;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_canDeactivateCreateEvent_65", {
        get: function () {
            if ((this.__canDeactivateCreateEvent_65 == null)) {
                (this.__canDeactivateCreateEvent_65 = import1.checkDirtyState);
            }
            return this.__canDeactivateCreateEvent_65;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
        this._FormsModule_4 = new import6.FormsModule();
        this._HttpModule_5 = new import7.HttpModule();
        this._ReactiveFormsModule_6 = new import6.ReactiveFormsModule();
        this._ROUTER_FORROOT_GUARD_7 = import8.provideForRootGuard(this.parent.get(import62.Router, null));
        this._RouterModule_8 = new import8.RouterModule(this._ROUTER_FORROOT_GUARD_7);
        this._UserModule_9 = new import9.UserModule();
        this._AppModule_10 = new import1.AppModule();
        this._ErrorHandler_13 = import4.errorHandler();
        this._ApplicationInitStatus_14 = new import11.ApplicationInitStatus(this.parent.get(import11.APP_INITIALIZER, null));
        this._Testability_15 = new import12.Testability(this.parent.get(import50.NgZone));
        this._ApplicationRef__16 = new import13.ApplicationRef_(this.parent.get(import50.NgZone), this.parent.get(import63.Console), this, this._ErrorHandler_13, this, this._ApplicationInitStatus_14, this.parent.get(import12.TestabilityRegistry, null), this._Testability_15);
        this._NoPreloading_52 = new import32.NoPreloading();
        this._PreloadingStrategy_53 = this._NoPreloading_52;
        this._RouterPreloader_54 = new import32.RouterPreloader(this._Router_50, this._NgModuleFactoryLoader_49, this._Compiler_18, this, this._PreloadingStrategy_53);
        return this._AppModule_10;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_3;
        }
        if ((token === import6.FormsModule)) {
            return this._FormsModule_4;
        }
        if ((token === import7.HttpModule)) {
            return this._HttpModule_5;
        }
        if ((token === import6.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_6;
        }
        if ((token === import8.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_7;
        }
        if ((token === import8.RouterModule)) {
            return this._RouterModule_8;
        }
        if ((token === import9.UserModule)) {
            return this._UserModule_9;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_10;
        }
        if ((token === import64.LOCALE_ID)) {
            return this._LOCALE_ID_11;
        }
        if ((token === import10.NgLocalization)) {
            return this._NgLocalization_12;
        }
        if ((token === import65.ErrorHandler)) {
            return this._ErrorHandler_13;
        }
        if ((token === import11.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_14;
        }
        if ((token === import12.Testability)) {
            return this._Testability_15;
        }
        if ((token === import13.ApplicationRef_)) {
            return this._ApplicationRef__16;
        }
        if ((token === import13.ApplicationRef)) {
            return this._ApplicationRef_17;
        }
        if ((token === import14.Compiler)) {
            return this._Compiler_18;
        }
        if ((token === import47.APP_ID)) {
            return this._APP_ID_19;
        }
        if ((token === import66.DOCUMENT)) {
            return this._DOCUMENT_20;
        }
        if ((token === import15.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_21;
        }
        if ((token === import16.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_22;
        }
        if ((token === import16.EventManager)) {
            return this._EventManager_23;
        }
        if ((token === import17.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_24;
        }
        if ((token === import67.AnimationDriver)) {
            return this._AnimationDriver_25;
        }
        if ((token === import18.DomRootRenderer)) {
            return this._DomRootRenderer_26;
        }
        if ((token === import68.RootRenderer)) {
            return this._RootRenderer_27;
        }
        if ((token === import19.DomSanitizer)) {
            return this._DomSanitizer_28;
        }
        if ((token === import69.Sanitizer)) {
            return this._Sanitizer_29;
        }
        if ((token === import20.ViewUtils)) {
            return this._ViewUtils_30;
        }
        if ((token === import70.IterableDiffers)) {
            return this._IterableDiffers_31;
        }
        if ((token === import71.KeyValueDiffers)) {
            return this._KeyValueDiffers_32;
        }
        if ((token === import17.SharedStylesHost)) {
            return this._SharedStylesHost_33;
        }
        if ((token === import21.Title)) {
            return this._Title_34;
        }
        if ((token === import22.RadioControlRegistry)) {
            return this._RadioControlRegistry_35;
        }
        if ((token === import23.BrowserXhr)) {
            return this._BrowserXhr_36;
        }
        if ((token === import24.ResponseOptions)) {
            return this._ResponseOptions_37;
        }
        if ((token === import72.XSRFStrategy)) {
            return this._XSRFStrategy_38;
        }
        if ((token === import25.XHRBackend)) {
            return this._XHRBackend_39;
        }
        if ((token === import26.RequestOptions)) {
            return this._RequestOptions_40;
        }
        if ((token === import73.Http)) {
            return this._Http_41;
        }
        if ((token === import27.FormBuilder)) {
            return this._FormBuilder_42;
        }
        if ((token === import74.ROUTES)) {
            return this._ROUTES_43;
        }
        if ((token === import8.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_44;
        }
        if ((token === import60.LocationStrategy)) {
            return this._LocationStrategy_45;
        }
        if ((token === import28.Location)) {
            return this._Location_46;
        }
        if ((token === import29.UrlSerializer)) {
            return this._UrlSerializer_47;
        }
        if ((token === import30.RouterOutletMap)) {
            return this._RouterOutletMap_48;
        }
        if ((token === import75.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_49;
        }
        if ((token === import62.Router)) {
            return this._Router_50;
        }
        if ((token === import76.ActivatedRoute)) {
            return this._ActivatedRoute_51;
        }
        if ((token === import32.NoPreloading)) {
            return this._NoPreloading_52;
        }
        if ((token === import32.PreloadingStrategy)) {
            return this._PreloadingStrategy_53;
        }
        if ((token === import32.RouterPreloader)) {
            return this._RouterPreloader_54;
        }
        if ((token === import32.PreloadAllModules)) {
            return this._PreloadAllModules_55;
        }
        if ((token === import8.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_56;
        }
        if ((token === import47.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_57;
        }
        if ((token === import33.EventService)) {
            return this._EventService_58;
        }
        if ((token === import77.TOASTR_TOKEN)) {
            return this._TOASTR_TOKEN_59;
        }
        if ((token === import78.JQ_TOKEN)) {
            return this._JQ_TOKEN_60;
        }
        if ((token === import34.EventResolver)) {
            return this._EventResolver_61;
        }
        if ((token === import35.EventListResolver)) {
            return this._EventListResolver_62;
        }
        if ((token === import36.VoterService)) {
            return this._VoterService_63;
        }
        if ((token === import37.AuthService)) {
            return this._AuthService_64;
        }
        if ((token === 'canDeactivateCreateEvent')) {
            return this._canDeactivateCreateEvent_65;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__16.ngOnDestroy();
        this._RouterPreloader_54.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
//# sourceMappingURL=app.module.ngfactory.js.map