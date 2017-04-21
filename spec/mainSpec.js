describe('Instagram Feed Commander', function () {
  Instafeed = require('../lib/Instafeed.min.js');

  describe('Instafeed', function () {
    it('defines value for each key', function () {
      var Instafeed = {
        get: 'user',
        userId: '5353057991',
        accessToken: '5353057991.1677ed0.27745b4d622c4749855807964c61a4b5',
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        limit: '4',
        template: '<div class="instaInstafeed__wrap"><a href="{{link}}"><img src="{{image}}" class="instaInstafeed__img" /></a><a href="{{link}}"><p class="instaInstafeed__caption">{{caption}}</p></a></div>'
      };
      expect(Instafeed.get).toBeDefined();
      expect(Instafeed.userId).toBeDefined();
      expect(Instafeed.accessToken).toBeDefined();
      expect(Instafeed.sortBy).toBeDefined();
      expect(Instafeed.resolution).toBeDefined();
      expect(Instafeed.limit).toBeDefined();
      expect(Instafeed.template).toBeDefined();
    });

  });

});
