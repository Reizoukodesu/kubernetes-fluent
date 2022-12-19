import { expect, test } from '@playwright/test';
import { Deployment } from '../builders/deployment';
import { Ingress } from "../builders/ingress"
import { Manifest } from "../manifest"


test.describe('Test Deployment', () => {

    const builder = new Manifest()
    .plugin( Ingress )
    .plugin( Deployment );


    const manifest = builder
        
        .deployment('demo', b => b
            .assign({kind:'demo'})
            // TODO: this is not working as the ingress helper is writing into ingresses.... 
            // To get this working we should always return the whole manifest json
            // not only parts of it.
            // like patch functions that patch the whole config with all ingresses, deployments, ....
            .ingress('http://demo.ch')) 

        // TODO: Is not working at the moment!
        // deployment function is returning Manifest instead of its current type
        // .ingress('test', b => b.assign({kind:'deployment'}))


    test( "check kind", () => {
        expect( manifest.resources.deployments.demo.kind, 'kind' );
    })
});