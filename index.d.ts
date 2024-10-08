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
export declare class SplashScreenOriginal extends IonicNativePlugin {
    /**
     * Shows the splashscreen
     */
    show(): void;
    /**
     * Hides the splashscreen
     */
    hide(): void;
    dynamic(): void;
}

export declare const SplashScreen: SplashScreenOriginal;