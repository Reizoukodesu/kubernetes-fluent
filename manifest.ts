
export interface ManifestPlugin<TOut, TIn extends Manifest<any>> {
    ( e: TIn ): TOut;
}




export class Manifest<T extends {}> {
    resources:T = {} as T;

    plugin<B>( plugin: ManifestPlugin<B, this> ) {
        return plugin( this ) as this & B;
    }
}
