// This Module is for Blog persistence.
 
var fs = require('fs');
 
// read persisted data from file
var getBlog = (username) => {
    try {
        var blogString = fs.readFileSync(`data/${username}.json`);
        return JSON.parse(blogString);       
    } catch (err) {
        return [];
    }
};
 
// persist data in file
var saveBlog = (username, blog) => {
    fs.writeFileSync(`data/${username}.json`, JSON.stringify(blog));     
};
 
// Insert a Hike
var addHike = (username, hikedata) => {
    var blog = getBlog(username);

    var hike = {
        hikename: hikedata.hikename,
        hikediff: hikedata.hikediff,
        imageurl: hikedata.imageurl
      };
      
    // ensure no dups
    var duplicateHikes = blog.filter((hike) => {
        return hike.hikename === hikedata.hikename;
    });
   
    // persist the Blog
    if (duplicateHikes.length === 0) {
        blog.push(hike);
        saveBlog(username, blog);
        return blog;
    } else {
        return null;
    }
};
 
module.exports = {
    getBlog,
    addHike
};