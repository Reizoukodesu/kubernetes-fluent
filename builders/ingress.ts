import { V1Ingress } from "@kubernetes/client-node";
import _ from "lodash";
import { Manifest } from "../manifest";
import { Builder } from "./builder";

export interface IngressManifest extends Manifest {
    ingress( name:string, build:( b:IngressBuilder )=>IngressBuilder ):void;
}

export function Ingress( manifest:Manifest ) {

    return Object.assign( manifest, {
        ingress: <R extends string, Y extends IngressBuilder>(name: R, build: ( builder:IngressBuilder ) => Y ) => {
            let config = build( new IngressBuilder( manifest as IngressManifest ) ).config;
            return _.merge(manifest, { resources: { ingresses: { [name]: config  } as Record<R, Y['config'] >  } })
        }
    })
}




class IngressBuilder extends Builder<V1Ingress, IngressManifest> {
    blah() {
        return this;
    }
}
