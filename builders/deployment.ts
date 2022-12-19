import { V1Deployment } from "@kubernetes/client-node";
import _ from "lodash";
import { Manifest } from "../manifest";
import { Builder } from "./builder";
import { IngressManifest } from "./ingress";

export interface DeploymentManifest extends Manifest, IngressManifest {
    deployment( name:string, build:( b:DeploymentBuilder ) => DeploymentBuilder ):Manifest;
}

export function Deployment( manifest:Manifest&IngressManifest ) {

    return Object.assign( manifest, {
        deployment: <R extends string, Y extends DeploymentBuilder>(name: R, build: ( builder:DeploymentBuilder ) => Y ) => {
            let config = build( new DeploymentBuilder( manifest as DeploymentManifest ) ).config;
            return _.merge(manifest, { resources: { deployments: { [name]: config  } as Record<R, Y['config'] >  } })
        }
    })
}



class DeploymentBuilder extends Builder<V1Deployment, DeploymentManifest> {
    

    ingress( url:string ) {
        this.manifest.ingress( 'test', b => b.assign({spec:{ingressClassName:"test"}}) )
        return this;
    }
} 