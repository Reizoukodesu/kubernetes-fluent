import _ from "lodash";

export type DeepPartial<T> = Partial<{ [P in keyof T]: DeepPartial<T[P]> }>;



export class Builder<T extends {}> {

    config:T = {} as T;

    assign<S extends DeepPartial<T>>( c:S ) {
        const config = _.merge( this.config, c );
        this.config = config;
        return this as this & { config: typeof config };
    }
}
