import { expect, test } from '@playwright/test';
import { Ingress } from "../builders/ingress"
import { Manifest } from "../manifest"


test.describe('Test Ingress', () => {

    const builder = new Manifest()
                        .plugin( Ingress );

    const manifest = builder.ingress('demo', b => b.assign({kind:'kind'}));

    test( "check kind", () => {
        expect( manifest.resources.ingresses.demo.kind, 'kind' );
    })
});