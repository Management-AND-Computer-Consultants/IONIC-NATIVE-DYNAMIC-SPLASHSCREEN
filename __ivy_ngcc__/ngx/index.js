import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import * as ɵngcc0 from '@angular/core';
var SplashScreen = /** @class */ (function (_super) {
    __extends(SplashScreen, _super);
    function SplashScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplashScreen.prototype.show = function () { return cordova(this, "show", { "sync": true }, arguments); };
    SplashScreen.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    SplashScreen.prototype.dynamic = function () { return cordova(this, "dynamic", { "sync": true }, arguments); };
    SplashScreen.pluginName = "SplashScreen";
    SplashScreen.plugin = "cordova-plugin-splashscreen";
    SplashScreen.pluginRef = "navigator.splashscreen";
    SplashScreen.repo = "https://github.com/apache/cordova-plugin-splashscreen";
    SplashScreen.platforms = ["Amazon Fire OS", "Android", "iOS", "Windows"];
SplashScreen.ɵfac = /*@__PURE__*/ function () { var ɵSplashScreen_BaseFactory; return function SplashScreen_Factory(t) { return (ɵSplashScreen_BaseFactory || (ɵSplashScreen_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(SplashScreen)))(t || SplashScreen); }; }();
SplashScreen.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: SplashScreen, factory: function (t) { return SplashScreen.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SplashScreen, [{
        type: Injectable
    }], null, null); })();
    return SplashScreen;
}(IonicNativePlugin));
export { SplashScreen };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvc3BsYXNoLXNjcmVlbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7QUFDeEU7QUFJQyxJQXVCaUMsZ0NBQWlCO0FBQUM7QUFFOUI7QUFRcEI7QUFBTSxJQUhOLDJCQUFJO0FBTU8sSUFFWCwyQkFBSTtBQUUyRDtBQUE4QztBQUF5RDtBQUF1RDtBQUFpRjtnREFsQi9TLFVBQVU7Ozs7MEJBQ0w7QUFBQyx1QkE3QlA7QUFBRSxFQTZCZ0MsaUJBQWlCO0FBQ2xELFNBRFksWUFBWTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU3BsYXNoIFNjcmVlblxuICogQHByZW1pZXIgc3BsYXNoc2NyZWVuXG4gKiBAY2FwYWNpdG9yaW5jb21wYXRpYmxlIHRydWVcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIHBsdWdpbiBkaXNwbGF5cyBhbmQgaGlkZXMgYSBzcGxhc2ggc2NyZWVuIGR1cmluZyBhcHBsaWNhdGlvbiBsYXVuY2guIFRoZSBtZXRob2RzIGJlbG93IGFsbG93cyBzaG93aW5nIGFuZCBoaWRpbmcgdGhlIHNwbGFzaHNjcmVlbiBhZnRlciB0aGUgYXBwIGhhcyBsb2FkZWQuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BsYXNoLXNjcmVlbi9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3BsYXNoU2NyZWVuOiBTcGxhc2hTY3JlZW4pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuc3BsYXNoU2NyZWVuLnNob3coKTtcbiAqXG4gKiB0aGlzLnNwbGFzaFNjcmVlbi5oaWRlKCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTcGxhc2hTY3JlZW4nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zcGxhc2hzY3JlZW4nLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3Iuc3BsYXNoc2NyZWVuJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tc3BsYXNoc2NyZWVuJyxcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3BsYXNoU2NyZWVuIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2hvd3MgdGhlIHNwbGFzaHNjcmVlblxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHNob3coKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgc3BsYXNoc2NyZWVuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaGlkZSgpOiB2b2lkIHt9XG59XG4iXX0=