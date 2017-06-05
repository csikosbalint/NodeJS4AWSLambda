var chai = require('chai');
describe('Blobs', function () {
    this.timeout(15000);
    it('should list ALL blobs on /blobs GET', function (done) {
        console.log('test');
        var app = require('../cds/app');
        app.myHandler(null, null, function (a, msg) {
            console.log(msg);
            done();
        });
    });
    it('should list a SINGLE blob on /blob/<id> GET');
    it('should add a SINGLE blob on /blobs POST');
    it('should update a SINGLE blob on /blob/<id> PUT');
    it('should delete a SINGLE blob on /blob/<id> DELETE');
});