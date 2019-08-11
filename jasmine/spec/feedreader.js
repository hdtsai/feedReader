/* feedreader.js
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {
    describe('RSS Feeds', () => {
        /* It's a test that makes sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).toBeGreaterThan(0);
        });

        /* It's a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url defined', () => {
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            });
        });

        /* It's a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name defined', () => {
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });
    });

    describe('The menu', () => {
        /* It's a test that ensures the menu element is
         * hidden by default.
         */
        it('menu hidden', () => {
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

        /* It's a test that ensures the menu changes
         * visibility when the menu icon is clicked.
         */
        it('toggle by click', () => {
            let icon = $('.menu-icon-link');
            icon.click();
            expect($("body").hasClass("menu-hidden")).toBe(false);
            icon.click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });
    });

    describe('Initial Entries', () => {
        /* It's a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function (done) {
            loadFeed(0, done);
        });
        it('loadFeed ensures', (done) => {
            expect($(".feed .entry-link").length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', () => {
        /* It's a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        let oldFeed;
        let newFeed;

        beforeEach(function (done) {
            loadFeed(0, () => {
                oldFeed = $('.feed').html();
                done();
            });
        });

        it('new feed loaded', (done) => {
            loadFeed(1, () => {
                newFeed = $('.feed').html();
                expect(oldFeed).toBeDefined();
                expect(newFeed).toBeDefined();
                expect(newFeed).not.toEqual(oldFeed);
                done();
            });

        });
    });

}());
