import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Splash Screen
 * @premier splashscreen
 * @capacitorincompatible true
 * @description This plugin displays and hides a splash screen during application launch. The methods below allows showing and hiding the splashscreen after the app has loaded.
 * @usage
 * ```typescript
 * import { SplashScreen } from '@ionic-native/splash-screen/ngx';
 *
 * constructor(private splashScreen: SplashScreen) { }
 *
 * ...
 *
 * this.splashScreen.show();
 *
 * this.splashScreen.hide();
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class SplashScreen extends IonicNativePlugin {
    /**
     * Shows the splashscreen
     */
    show(): void;
    /**
     * Hides the splashscreen
     */
    hide(): void;
    dynamic(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SplashScreen, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<SplashScreen>;
}

//# sourceMappingURL=index.d.ts.map