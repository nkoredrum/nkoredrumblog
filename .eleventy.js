module.exports = function (eleventyConfig) {
    // Copy over static assets (if you have any, e.g., images, CSS, etc.)
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addCollection("posts", function(collectionApi) {
        return collectionApi.getFilteredByGlob("posts/*.md");
      });
    return {
        dir: {
            input: ".",
            includes: "_includes",  // Create this folder later for reusable partials if needed
            data: "_data",          // Create this folder later if you want global data
            output: "_site"
        }
    };
};
