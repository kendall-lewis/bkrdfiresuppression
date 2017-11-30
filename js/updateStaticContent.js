(function($) {
  "use strict"; // Start of use strict

  var warningTitle = "UNOFFICIAL WEBSITE";
  var warningMsg = "\
    All information, postings, pictures, etc. are solely those of independent individuals who do not necessarily represent Beckwourth District, Plumas National Forest, the U.S. Forest Service, the USDA, or any entity of the U.S. Government.\
    <br /><br />\
    ***This site exists solely to assist with recruitment for fire suppression positions on the Beckwourth District only.***";

  $("aside").html('<div class="container text-center"><div class="call-to-action"><h2>'+warningTitle+'</h2><p class="text-white">'+warningMsg+'</p></div></div>');

  var copyright = "Copyright &copy; 2017 PNF Beckwourth Ranger District - All rights reserved.";
  var dateLastUpdated = "Last updated November 30, 2017";

  $("footer").html('<div class="container"><div class="row"><div class="col-md-8"><p class="text-white">' + copyright + '</p></div><div class="col-md-4 last-updated"><p class="text-muted">' + dateLastUpdated + '</p></div></div></div>');

})(jQuery); // End of use strict
