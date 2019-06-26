$(function() {

    describe("RSS Feeds", function() {

        //test if allFeeds variable is defined and not empty
        it("are defined", function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //Test if allFeeds has Url and is not an empty url
        it("allFeeds URL is defined", function(){
            for(let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        //Test if allFeeds have a name and it's not empty
        it("allFeeds NAME is defined", function(){
            for(let names of allFeeds){
                expect(names.name).toBeDefined();
                expect(names.name.length).not.toBe(0);
            }
        });
    });


    describe("The menu", function(){

        const bodyClass = $("body");
        const menuIcon = $(".menu-icon-link")

        //Test to see if the menu element is hidden by default
        it("Menu-hidden class active by default", function(){
            expect(bodyClass.hasClass("menu-hidden")).toBe(true);
        });

        //Test if menu shows/hides after the click
        it("Menu changes visibility", function(){
            menuIcon.click();
            expect(bodyClass.hasClass("menu-hidden")).toBe(false);
            menuIcon.click();
            expect(bodyClass.hasClass("menu-hidden")).toBe(true);
        });
    });


    describe("Initial Entries", function(){

        //This handles async loadFeed function
        beforeEach(function(done){
              loadFeed(0, done);
              });

        //Test if the container is not empty after loadin loadFeed
        it("Container is not empty", function(){
            const feed = $(".feed .entry").length;
            expect(feed).not.toBe(0);
        });
    });

    describe("New Feed Selection", function(){

        const feed = $(".feed");
        let feedZero;
        let feedOne;

        //Handling loadFeed and getting data from feeds
        beforeEach(function(done){
            loadFeed(0, function(){
                feedZero = feed.html();
            loadFeed(1, function(){
                feedOne = feed.html();
                done();
                });
            });
        });

        //test if two feeds are equal
        it("Content changes when new feed is loaded", function(){
          expect(feedZero).not.toBe(feedOne);
        });
    });


}());
