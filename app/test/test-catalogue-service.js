/**
The locationID returned from CustomerLocationService should be passed to a CatalogueService, which must return the following products.

￼| Category | Product         | Dependent on locationID |
| ￼Sports   | Arsenal TV      | LONDON                  |
| Sports   | Chelsea TV      | LONDON                  |
￼| Sports   | Liverpool TV    | LIVERPOOL               |
￼| News     | Sky News        |                         |
￼| News     | Sky Sports News |                         |


1. The CatalogueService will only return ArsenalTV and ChelseaTV if the locationID is LONDON(LOC-001).
2. The CatalogueService will only return LiverpoolTV if the locationID is LIVERPOOL(LOC-002).
3. The CatalogueService will always return Sky News and Sky Sports News.

*/
var assert = require("assert");
var Firebase = require("firebase");

describe('1. Fetch Channels For London', function() {
  describe('For the locationID: LOC-001(London)', function() {
    it('should return 4 Channels [Arsenal TV, Chelsea TV, Sky News, Sky Sports News]', function() {
      assert.deepEqual(["Arsenal TV", "Chelsea TV", "Sky News", "Sky Sports News"], getProducts('LOC-001'));
    });
  });
});

describe('2. Fetch Channels For Liverpool', function() {
  describe('For the locationID: LOC-002(Liverpool)', function() {
    it('should return 3 Channels [Liverpool TV, Sky News, Sky Sports News]', function() {
      assert.deepEqual(["Liverpool TV", "Sky News", "Sky Sports News"], getProducts('LOC-002'));
    });
  });
});


describe('3. Fetch Channels For All', function() {
  describe('when there is no Location based Channels Available', function() {
    it('should return 2 Channels [Sky News, Sky Sports News]', function() {
      assert.deepEqual(["Sky News", "Sky Sports News"], getProducts(''));
    });
  });
});

/** isLocation is the Important function to test **/
isLocation = function(product, location) {
  return ((location === product.locationID) || (product.locationID === ""));
}

/** Get Products for the given locationID */
getProducts = function(locationID) {
  return getCatalogue().filter(function(product) {
    return isLocation(product, locationID);
  }).map(function(product) {
    return product.name;
  });
}

/** Catalogue Stub is used for testing purpose;
<firbase-element> is well tested using WCT. Fetching Ordered Data is tested through WCT.
Hence testing only the logic behind showing location based products */
getCatalogue = function() {
  return catalogue;
}

/** Stub Data */
var catalogue = [{
  "avatar": "",
  "category": "Sports",
  "locationID": "LOC-001",
  "name": "Arsenal TV",
  "productID": "PROD-001"
}, {
  "avatar": "",
  "category": "Sports",
  "locationID": "LOC-001",
  "name": "Chelsea TV",
  "productID": "PROD-002"
}, {
  "avatar": "",
  "category": "Sports",
  "locationID": "LOC-002",
  "name": "Liverpool TV",
  "productID": "PROD-003"
}, {
  "avatar": "",
  "category": "News",
  "locationID": "",
  "name": "Sky News",
  "productID": "PROD-004"
}, {
  "avatar": "",
  "category": "News",
  "locationID": "",
  "name": "Sky Sports News",
  "productID": "PROD-005"
}];
