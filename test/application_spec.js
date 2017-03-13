var assert= require('assert');

var MemberApplication = require('../processes/member_application');

describe('Member Application requirement', function(){
    var validApp;

    before (function(){
        //arrange the data here
        validApp = new MemberApplication({
            firstName: 'Admin',
            lastName: 'user',
            email: 'Admin.user@member.com',
            age: 30,
            height: 66,
            weight: 180
        });
    });

    describe('Application valid if', function(){
        it("All validators successful", function() {
           assert(validApp.isValid(), 'Not Valid');
        });
        
        // it("email is 4 or more char and contains an @ symbol", function() {
        //     validApp.emailIsValid();
        //    assert(validApp.emailIsValid());
        // });
        
        // it("first name & last name should present", function() {
        //    assert(validApp.nameIsValid());
        // });
        
    
        // it("age is between 16 & 75", function() {
        //    assert(validApp.ageIsValid());
        // });
        
        // it("height is between 60 to 75", function() {
        //    assert(validApp.heightIsValid());
        // });

        // it("weight is between 100 to 300 lb", function() {
        //    assert(validApp.weightIsValid());
        // });
    });

    describe('Application invalid if', function(){ 

        it.skip("Is the validUntil date is expired  ", function() {
                var app = new MemberApplication({validUntil: '01/01/2017'});
                assert(app.expired());
        });

    it("email is not 4 ", function() {
            var app = new MemberApplication({email: 'd@d'});
            assert(!app.emailIsValid());
        });
  
        it("email  does not contain @ symbol ", function() {
            var app = new MemberApplication({email: 'd3234d'});
            assert(!app.emailIsValid());
        });


        it("first name not available", function() {
            var app = new MemberApplication({lastName:'hello'});
            assert(!app.nameIsValid());
        });
        
        it("last name not available", function() {
            var app = new MemberApplication({firstName:'hai'});
            assert(!app.nameIsValid());
        });
    
        it("first name is empty", function() {
            var app = new MemberApplication({firstName:'', lastName:'he'});
            assert(!app.nameIsValid());
        });

        it("last name is empty", function() {
            var app = new MemberApplication({firstName:'he', lastName:''});
            assert(!app.nameIsValid());
        });

        it("age is greater than 75", function() {
           var app = new MemberApplication({age:80});
            assert(!app.ageIsValid());
        });
        
        it("age is less than 16", function() {
           var app = new MemberApplication({age:8});
            assert(!app.ageIsValid());
        });

        it("height is less than 60", function() {
           var app = new MemberApplication({height:55});
            assert(!app.heightIsValid());
        });

        it("height is greater than 75", function() {
           var app = new MemberApplication({height:90});
            assert(!app.heightIsValid());
        });

        it("weight is less than 100 lb ", function() {
           var app = new MemberApplication({weight:50});
            assert(!app.weightIsValid());
        });

        it("weight is greater than 300 lb", function() {
           var app = new MemberApplication({weight:350});
            assert(!app.weightIsValid());
        });
    });
});

