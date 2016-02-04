var shelljs = require('shelljs');

if (!shelljs.which('php')) {
    shelljs.echo('php not found please install and put in your path');
    process.exit(1);
}


var child = shelljs.exec('php -S 0.0.0.0:8000 -c test/php.ini -t test', {async:true});
child.stdout.on('data', function(data) {
    console.log(data);
});
child.stderr.on('data', function(data) {
    console.error(data);
});


var Browser = require('zombie');
var assert  = require('assert');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('localhost', 8000);


describe('PJAX Page', function() {

    var browser = new Browser();
    browser.debug();
    browser.runScripts = true;
    browser.on('error',function (err){console.log(err)});

    before(function(done) {
        browser.visit('/', done);
    });

    describe('navigate', function() {
/*
        before(function(done) {
            browser
                .fill('email',    'zombie@underworld.dead')
                .fill('password', 'eat-the-living')
                .pressButton('Sign Me Up!', done);
        });
        */

        it('should be successful', function(done) {
            browser.assert.success();
            done();
        });

        it('should see welcome page', function(done) {
            browser.assert.text('title', 'PJAX-Standalone');
            done();
        });

        /*
        // body > div.navbar.navbar-default.navbar-static-top > ul > li:nth-child(3) > a
        // http://localhost:8000/page2.php

        // body > div.navbar.navbar-default.navbar-static-top > ul > li:nth-child(4) > a
        // http://localhost:8000/page3.php?test=test
        it('should click', function(done) {
            browser.clickLink('body > div.navbar.navbar-default.navbar-static-top > ul > li:nth-child(2) > a', function(){
                    console.log('link followed');
                });
            browser.wait({ duration: 100 });
            assert.equal(browser.location.href, 'http://localhost/page1.php');
            done();
        });
        */

    });
});

