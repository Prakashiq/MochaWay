var _ = require('underscore')._;

var membershipApplication = function(args) {

    _.extend(this,args);

    this.validUntil = args.validUntil ? moment(args.validUntil) : moment().add(10,'days');

    this.expired = function() {
        return this.validUntil.isBefore(moment());
    }

    this.emailIsValid = function() {
        return this.email && this.email.length >3  && this.email.indexOf('@')> -1;
    }

    this.nameIsValid = function(){
        return this.firstName && this.lastName;
    }

    this.ageIsValid = function(){
        return this.age && this.age > 16 && this.age < 75;
    }
    
    this.heightIsValid = function(){
        return this.height && this.height > 60 && this.height < 75;
    }
    
    this.weightIsValid = function(){
        return this.weight && this.weight > 100 && this.weight < 300;
    }

    this.isValid = function()
    {
       // console.log(this.email);
      return  this.emailIsValid() &&
        this.nameIsValid() &&
        this.ageIsValid() &&
        this.heightIsValid() &&
        this.weightIsValid() ;
    };


    // return {
    //     isValid : isValid
    // };

}

module.exports = membershipApplication;