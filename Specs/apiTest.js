"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = __importDefault(require("chai"));
var chaiHttp = require("chai-http");
require("mocha");
chai_1.default.use(chaiHttp);
describe('Verify Status', function () {
    it('status code is 200', function () {
        return chai_1.default.request('http://simbad.u-strasbg.fr').get('/simbad/sim-basic?Ident=aldebaran&submit=SIMBAD+search')
            .then(function (res) {
            //console.log(res);  
            chai_1.default.expect(res).to.have.status(200);
        });
    });
});
