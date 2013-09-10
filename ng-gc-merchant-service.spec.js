'use strict';

describe('MerchantServiceSpec', function(){
  beforeEach(module('ngGcMerchantService'));
  var MerchantService, $httpBackend;

  beforeEach(inject(function($injector) {
    MerchantService = $injector.get('MerchantService');
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('#findOne', function() {
    $httpBackend.expectGET('/api/merchant').respond(200);
    MerchantService.findOne();
  });

});
