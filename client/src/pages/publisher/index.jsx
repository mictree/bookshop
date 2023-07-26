import React from 'react'

export default function Publisher() {
  const onChangeValue = (event) => {
    console.log(event.target.value);
  }
	return (
		<div onChange={onChangeValue}>
			<input type='radio' value='Male' name='gender' /> Male<br/>
			<input type='radio' value='Female' name='gender' /> Female<br/>
			<input type='radio' value='Other' name='gender' /> Other<br/>
		</div>
	)
}
