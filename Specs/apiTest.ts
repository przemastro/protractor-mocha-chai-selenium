import chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);

    describe('Verify Status', () => {
        it('status code is 200', () => {
            return chai.request('http://simbad.u-strasbg.fr').get('/simbad/sim-basic?Ident=aldebaran&submit=SIMBAD+search')
            .then(res => {
              //console.log(res);  
              chai.expect(res).to.have.status(200);
            })
        });
    });
       