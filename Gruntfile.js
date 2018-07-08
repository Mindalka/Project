module.exports = function(grunt) {
require("load-grunt-tasks")(grunt)
  grunt.initConfig({
    less: {
      style: {
		  files:{
			  "source/css/style.css":"source/less/style.less"
		  }
	  }
    },
	
csso:{
	style: {
		options:{
			report:"gzip"
		},
		files:{
			"source/css/style.min.css":["source/css/style.css"]
		}
	}
	
}


		
	});
	grunt.registerTask("build",["less","csso"]);



};