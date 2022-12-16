import { Ingress } from "./builders/ingress"
import { Manifest } from "./manifest"

Ingress(new Manifest).ingress('demo', b => { 
    return b.assign({ spec: { ingressClassName: 'test' } })
    .assign({kind:"dfsg"}).blah()
})