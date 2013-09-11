'use strict';

angular.module('ngGcMerchantApiService', [
  'ngHttpFactory'
]).factory('MerchantService', [
  'HttpFactory',
  function MerchantService(HttpFactory) {

    return HttpFactory.create({
      url: '/api/merchant'
    }, {
      'findOne': { method: 'GET' }
    });

  }
]);
