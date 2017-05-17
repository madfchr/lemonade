var feed = new Instafeed({
    get: 'user',
    userId: '5353057991',
    accessToken: '5353057991.1677ed0.27745b4d622c4749855807964c61a4b5',
    sortBy: 'random',
    resolution: 'standard_resolution',
    limit: '12',
    template: '<div class="instafeed__wrap"><a href="{{link}}"><img src="{{image}}" class="instafeed__img" /></a><a href="{{link}}"><p class="instafeed__caption">{{caption}}</p></a></div>'
});
feed.run();
