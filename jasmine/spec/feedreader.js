/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        /* A tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('has URLs defined',function(){
            allFeeds.forEach(item =>{
                expect(item.url).toBeDefined();
                expect(item.url.length).toBeGreaterThan(0);
            });
         });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('has names defined',function(){
            allFeeds.forEach(item =>{
                expect(item.name).toBeDefined();
                expect(item.name.length).toBeGreaterThan(0);
            });
         });
    });


    /* A test suite for menu testing */
    describe('The menu',function(){


        /* A test that ensures the menu element is
         * hidden by default.
         */
         it('is hidden by default',function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it('is visible when clicked and hidden shortly after being clicked',function(){

            let menu = $('.menu-icon-link');

            //clicks on the menu link
            menu.click();

            expect($('body').hasClass('menu-hidden')).toBe(false);

            //clicks again on the menu link
            menu.click();

            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    /* A test suite for "Initial Entries" validation */

    describe('Initial Entries',function(){


        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

         //calls the number '0' feed
         beforeEach(function(done){
            loadFeed(0,done);
         });

         it('should have at least a single .entry element within the .feed container',function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
         });
    });

    /* A test suite named for "New Feed Selection" validation */

    describe('New Feed Selection',function(){

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         let feeds = [];
         
         beforeEach(function(done){

            //calls the number '0' feed
            loadFeed(0, function () {
                //gets the general text of the feed
                feeds[0] = $('.feed').text();

                loadFeed(1,function(){
                    feeds[1] = $('.feed').text();
                    done();
                });
            });


         });

         it('should change the content of the page',function(){
            expect(feeds[0]).not.toBe(feeds[1]);
         });

    });     
}());
