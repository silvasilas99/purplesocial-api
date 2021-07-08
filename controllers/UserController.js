const User = require('./../models/User');
const bcrypt = require("bcrypt");

module.exports = {
    async updateUser (req, res) {
		if (req.body.userId == req.params.id || req.body.isAdmin) {	
			if(req.body.password) {
				try {
					const salt = await bcrypt.genSalt(10);
					req.body.password = await bcrypt.hash(req.body.password, salt);
				} catch (err) {
		            return res.status(500).json(err.message);
		        }
			}

			try {
				const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body  });
				res.status(200).json({ message: "Your account has been updated successfully!"});
			} catch (err) {
	            return res.status(500).json(err.message);
	        }
		} else {
			return res.status(403).json({ message: "You can modify only your account!" });
		}
    }
};