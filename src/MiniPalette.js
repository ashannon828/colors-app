import React from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './styles/MiniPaletteStyles'

function MiniPalette(props) {
	const { classes, paletteName, emoji, colors } = props
	const miniColorBoxs = colors.map((color) => (
		<div
			className={classes.miniColor}
			style={{ backgroundColor: color.color }}
			key={color.name}
		/>
	))

	return (
		<div className={classes.root} onClick={props.handleClick}>
			<div className={classes.colors}>{miniColorBoxs}</div>
			<h5 className={classes.title}>
				{paletteName} <span>{emoji}</span>
			</h5>
		</div>
	)
}

export default withStyles(styles)(MiniPalette)
