/**
The Customer Location Service will be called to get the customer’s location.
*/
var assert = require("assert");
var Firebase = require("firebase");

var customerid = 'JVEJ8bTtGaKr0g2U9kq';


/**
  Customer Location Service - Fetches Location Details of the customer

computeLocation = function(locationID) {
  return 'https://mysky.firebaseio.com/location/' + locationID + '/location';
}
**/

/* Get Customer Details for the given customerid */
getCustomer = function(customerid) {
  url = 'https://mysky.firebaseio.com/customers/' + customerid;
  console.log(url);
  var ref = new Firebase(url);
  postRef = ref.child("name").on("value", function(snapshot) {
  alert(snapshot.val());
});
// console.log(postRef.snapshot.key());
// return postRef.key();

}


describe('Custome Id should return firebase url', function() {
  describe('Getting url for JVEJ8bTtGaKr0g2U9kq', function() {
    it('should return url when the value is present', function() {
      assert.equal("Steven Gerrard", getCustomer('JVEJ8bTtGaKr0g2U9kq'));
    });
  });
});
