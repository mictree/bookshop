const User = require('../models/User')

class UserController {
	async getInfo(req, res) {
		try {
			const user = await User.findById(req.user.id)
			res.status(200).json({
				data: {
					fullname: `${user?.last_name} ${user?.middle_name} ${user?.first_name}`,
					email: user.email,
					avatarUrl: user.avatarUrl,
					address: user.address,
					postalCode: user.postalCode,
					phone: user.phone,
				},
			})
		} catch (error) {
			console.log(error)
			res.status(500).json({ error: 'Error' })
		}
	}

	async updateInfo(req, res) {
		try {
			const { fullname, email, phone, address, postalCode, birthday, avatarUrl } =
				req.body
			await User.updateOne({_id: req.user.id}, {$set:{
				fullname,
				email,
				phone,
				address,
				postalCode,
				birthday,
				avatarUrl
			}})

			if(fullname)
			{
				const user = await User.findById(req.user.id)
				user.fullname = fullname
				await user.save()
			}
			
			return res.status(200).json({ message: 'Update user completed' })
		} catch (error) {
			console.log('Update user: ', error.message)
			return res.status(500).json({ message: 'Server error' })
		}
	}
}

module.exports = new UserController()
