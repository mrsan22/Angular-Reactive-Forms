/**
 * Created by kumars13 on 4/21/17.
 */
export class EnsureModuleLoadedOnceGuard {

  constructor(targetModule: any) {
    if (targetModule) {
      throw new Error(`${targetModule.constructor.name} has already been loaded. 
      Import this module in the AppModule only.`);
    }
  }

}
