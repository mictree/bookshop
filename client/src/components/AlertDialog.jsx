import React from 'react'
import {
	Dialog,
	DialogTitle,
	DialogContentText,
	DialogActions,
	Button,
} from '@mui/material'

export default function AlertDialog() {
	return (
		<div>
			<div>AlertDialog</div>
			<Dialog open={true}
            fullWidth={"200px"}>
            
				<DialogTitle>Subscribe</DialogTitle>
				<DialogContentText alignContent={"center"}>Bạn có chắc muốn xóa</DialogContentText>
				<DialogActions>
					<Button>Cancel</Button>
					<Button>Subscribe</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}
