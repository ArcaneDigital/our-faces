
var StaffModel      = require('./model');

var	StaffController = {

	getOne: function(req, res){
		StaffModel.find({ id: req.params.id }).exec(function(err, result) {
            res.send(result);
        });	
	},

	getMany: function(req,res){
		StaffModel.find( {} ).exec(function(err, result) {
	        if (err) {
	            return res.send({
	                err: {
	                    message: 'Could not retrieve staff list.'
	                }
	            });
	        }

	        // Create a new collection and cast each value to an object so we
	        // can manipulate it if the need arises
	        var staffMembers = result.map(function(member) {
	            var member = member.toObject();

	            return member;
	        });

	        res.send({
	            result: {
	                total: staffMembers.length,
	                staff: staffMembers
	            }
	        });
	    }
	},

	create: function(req,res){

	},

	update: function(req,res){
		var staffID = req.params.id,
	    staffData = req.body;

	    StaffModel.findOneAndUpdate({ id: staffID },
	        staffData,
	        { upsert: true },
	        function(err, result) {
	            if (err) {
	                res.send({
	                    err: {
	                        message: err
	                    }
	                });
	            }

	            res.send({
	                result: {
	                    message: 'Successfully updated staff member.'
	                }
	            });
	        }
	    );
	},

	delete: function(req,res){
	 	var staffID = req.params.id;

	    StaffModel.find({ id: staffID }).remove().exec(function(err, result) {
	        if (err) {
	            return res.send({
	                err: {
	                    message: 'Could not remove staff member.'
	                }
	            });
	        }

	        res.send({
	            result: {
	                message: 'Successfully removed staff member.'
	            }
	        });
	    });
	}

};


module.exports = StaffController;