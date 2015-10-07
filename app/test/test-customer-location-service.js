/**
A CustomerLocationService is available which will take the customerID as an input and return one of the following outputs.

|Customer Service     | Output Description                                      |￼
|A location identifier| Customer is valid and a locationID is returned          |￼
|Failure exception    | There was a problem retrieving the customer information |

*/
var assert = require("assert");
var Firebase = require("firebase");

var customerid = 'JVEJ8bTtGaKr0g2U9kq';


/**
  Customer Location Service - Fetches Location Details of the customer
  **/

getCustomerLocation = function(locationID) {
  return 'https://mysky.firebaseio.com/location/' + locationID + '/location';
}


/* Get Customer Details for the given customerid */
getCustomer = function(customerid) {
  url = 'https://mysky.firebaseio.com/customers/' + customerid;
  return new Firebase(url);
}

describe('Base Test to fetch Customer Info based on customerID', function() {
  describe('For the customerID: JVEJ8bTtGaKr0g2U9kq', function() {
    it('should return the CustomerName: Steven Gerrard', function(done) {
      var ref = getCustomer('JVEJ8bTtGaKr0g2U9kq');
      ref.child('name').once('value', function(snap) {
        assert.equal(snap.val(), "Steven Gerrard");
        done();
      });
    });
  });
});

describe('Customer Location Service Test: 1', function() {
  describe('Customer ID: JVEJ8bTtGaKr0g2U9kq is Valid', function() {
    it('should return  the Location ID: LOC-002', function(done) {
      var ref = getCustomer('JVEJ8bTtGaKr0g2U9kq');
      ref.child('locationID').once('value', function(snap) {
        assert.equal(snap.val(), "LOC-002");
        done();
      });
    });
  });
});

describe('Customer Location Service Test: 2', function() {
  describe('Customer ID: johnDoe is InValid', function() {
    it('should return null as Firebase Reference', function(done) {
      var ref = getCustomer('johnDoe');
      ref.child('locationID').once('value', function(snap) {
        assert.equal(snap.val(), null);
        done();
      });
    });
  });
});
