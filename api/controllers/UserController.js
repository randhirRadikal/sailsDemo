/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	upload: function  (req, res) {
		if (req.method === 'GET')
        return res.json({ 'status': 'GET not allowed' });
    //	Call to /upload via GET is error

    var uploadFile = req.file('file');

    uploadFile.upload({dirname: '../../assets/images/'},function onUploadComplete(err, files) {
        //	Files will be uploaded to .tmp/uploads

        if (err) return res.serverError(err);
        //	IF ERROR Return and send 500 error with error
        res.json({ status: 200, file: files });
    });
  },
	deleteImage: function(req,res){
		console.log(req);
	}
};
