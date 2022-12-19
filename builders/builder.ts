import _ from "lodash";
import { Manifest } from "../manifest";

export type DeepPartial<T> = Partial<{ [P in keyof T]: DeepPartial<T[P]> }>;



export class Builder<T extends {}, M extends Manifest> {

    manifest:M;
    config:T = {} as T;

    constructor( m:M ) {
        this.manifest = m;
    }

    assign<S extends DeepPartial<T>>( c:S ) {
        const config = _.merge( this.config, c );
        this.config = config;
        return this as this & { config: typeof config };
    }
}
