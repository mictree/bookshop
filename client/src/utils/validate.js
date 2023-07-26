class Validate {
	validateLogin(email, password) {}

	validateRegister(email, password, rePassword) {
		if (!email) {
			return 'Thiếu email'
		} else if (!password) {
			return 'Thiếu mật khẩu'
		} else if (!rePassword) {
			return 'Cần xác nhận mật khẩu'
		} else if (rePassword !== password) {
			return 'Mật khẩu xác nhận không khớp'
		}
        return 'valid '
	}
}
