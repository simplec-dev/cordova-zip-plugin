var SimpleCZip = function() {
};

SimpleCZip.prototype.unzip = function(fileName, outputDirectory, callback) {
    var win = function() {
    	if (callback) {
            callback(0);
    	}
    };
    var fail = function() {
    	if (callback) {
            callback(-1);
    	}
    };
    cordova.exec(win, fail, 'Zip', 'unzip', [fileName, outputDirectory]);
};

module.exports = new SimpleCZip();