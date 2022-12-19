
export interface ManifestPlugin<T extends {},B> {
    ( e: Manifest<T> ): B;
}




export class Manifest<T extends {}> {
    resources:T = {} as T;

    plugin<B extends Manifest<T>>( plugin:ManifestPlugin<T,B> ) {
        return plugin( this );
    }
}
