import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["snackbar"]?: typeof import("nuxt-snackbar").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["csurf"]?: typeof import("nuxt-csurf").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("C:/Users/antey/AppData/Roaming/npm/node_modules/@nuxt/devtools/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["nuxt-snackbar", Exclude<NuxtConfig["snackbar"], boolean>] | ["nuxt-csurf", Exclude<NuxtConfig["csurf"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["C:/Users/antey/AppData/Roaming/npm/node_modules/@nuxt/devtools/module", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   snackbar: {
      top: boolean,

      bottom: boolean,

      left: boolean,

      right: boolean,

      groups: boolean,

      success: string,

      error: string,

      warning: string,

      info: string,

      duration: number,

      messageClass: string,

      zIndex: number,

      dense: boolean,

      shadow: boolean,

      reverse: boolean,

      border: string,

      backgroundOpacity: number,

      backgroundColor: string,

      baseBackgroundColor: string,
   },

   csurf: {
      https: boolean,

      cookieKey: string,

      cookie: {
         path: string,

         httpOnly: boolean,

         sameSite: string,

         secure: boolean,
      },

      methodsToProtect: Array<string>,

      excludedUrls: Array<any>,
   },
  }
  interface PublicRuntimeConfig {
   snackbar: {
      top: boolean,

      bottom: boolean,

      left: boolean,

      right: boolean,

      groups: boolean,

      success: string,

      error: string,

      warning: string,

      info: string,

      duration: number,

      messageClass: string,

      zIndex: number,

      dense: boolean,

      shadow: boolean,

      reverse: boolean,

      border: string,

      backgroundOpacity: number,

      backgroundColor: string,

      baseBackgroundColor: string,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }