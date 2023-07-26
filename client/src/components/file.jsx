import React from 'react'

export default function file() {
	return (
		<>
			<div className='p-5 flex w-5/12'>
				<label className='flex-1'>Họ và tên</label>
				<input
					className='flex-2 rounded-lg border-2 border-orange-500'
					type='text'
					placeholder='Nhập họ và tên'
					{...register('name')}
				/>
			</div>
			<div className='p-5 flex w-5/12'>
				<label className='flex-1'>Số điện thoại</label>
				<input
					className='flex-2 rounded-lg border-2 border-orange-500'
					type='text'
					placeholder='Nhập số điện thoại'
					{...register('phone')}
				/>
			</div>

			<div className='p-5 flex w-5/12'>
				<label className='flex-1'>Tỉnh/Thành phố</label>
				<select
					className='border-2 flex-2 rounded-lg border-orange-500'
					onChange={(ev) => onChangeProvince(ev)}
					// {...register('province')}
					value={province}>
					<option key={uuidv4()} value='' disabled selected>
						Chọn tỉnh
					</option>
					{Object.keys(provinces).map((key) => (
						<option key={uuidv4()} value={provinces[key].name}>
							{provinces[key].name}
						</option>
					))}
				</select>
			</div>
			<div className='p-5 flex w-5/12'>
				<label className='flex-1'>Quận/Huyện</label>
				<select
					className='border-2 flex-2 rounded-lg border-orange-500'
					{...register('district')}>
					<option
						className='flex-2 rounded-lg'
						key={uuidv4()}
						value=''
						disabled
						selected>
						Chọn Huyện
					</option>
					{Object.keys(wards).map((key) => (
						<option key={uuidv4()} value={wards[key].name}>
							{wards[key].name}
						</option>
					))}
				</select>
			</div>
			<div className='p-5 flex w-5/12'>
				<label className='flex-1'>Phường/Xã</label>
				<select
					className='flex-2 rounded-lg border-2 border-orange-500'
					{...register('commune')}>
					<option
						className='flex-2 rounded-lg'
						key={uuidv4()}
						value=''
						disabled
						selected>
						Chọn Phường/Xã
					</option>
					<option key={uuidv4()} value='1'>
						Test
					</option>
					<option key={uuidv4()} value='2'>
						Test 2
					</option>
				</select>
			</div>
			<div className='p-5 flex w-5/12'>
				<label className='flex-1'>Địa chỉ nhận hàng</label>
				<input
					className='flex-2 rounded-lg border-2 border-orange-500'
					placeholder='Nhập địa chỉ nhận hàng'
					{...register('address')}
				/>
			</div>
		</>
	)
}
