
export interface ManifestPlugin<T,B> {
    ( e: T ): B;
}




export class Manifest {
    resources:{} = {};

    plugin<B extends Manifest>( plugin:ManifestPlugin<this,B> ) {
        return plugin( this ) as this & B;
    }
}
