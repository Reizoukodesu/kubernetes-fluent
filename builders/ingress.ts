import { V1Ingress } from "@kubernetes/client-node";
import _ from "lodash";
import { Manifest } from "../manifest";
import { Builder } from "./builder";



export function Ingress( manifest:Manifest<{}> ) {

    return Object.assign( manifest, {
        ingress: <R extends string, Y extends IngressBuilder>(name: R, build: ( builder:IngressBuilder ) => Y ) => {
            let config = build( new IngressBuilder() ).config;
            return _.merge(manifest, { resources: { ingresses: { [name]: config } as Record<R, Y['config']>  } })
        }
    })
}




class IngressBuilder extends Builder<V1Ingress> {
    blah() {
        return this;
    }
}
