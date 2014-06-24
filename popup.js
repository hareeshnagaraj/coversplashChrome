// Copyright (c) 2014 Coverplash, Inc.

//Globals
var QUERY = 'birds';
var OFFSET = 0;

//Get Photos Pbject
var getPhotos  = {

  searchOnCoversplash_: 'http://coversplash.com/api/bird',

  //Sends an XHR GET request to grab photos.
  requestPhotos: function(OFFSET) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://coversplash.com/api/" + OFFSET, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {

        var array = JSON.parse(xhr.responseText);
        for (imageid in array) {
          var subarray = array[imageid];
          for(key in subarray) {
            var link = "http://" + key + ".coversplash.com/?photo=" + imageid;
            $("#container").append("<a target='_blank' href=" + link + "><img src=" + subarray[key] + " /></a>");
          }
        }

        OFFSET = OFFSET + 21;
        getPhotos.requestPhotos(OFFSET);

      }
    }
    xhr.send();
  },

};

// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function(){
       getPhotos.requestPhotos(OFFSET);
   },10)
});

//Event listener to call ajax for more photos form editors choice
addEventListener('scroll', function() {
   //scrolling stuffzz here
});

