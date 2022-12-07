import './table.css'
import WhatIDoElement from '../whatIDoElements'

export const Table = (props) => {
	const display = props.display 

	var result = props.elements.map((element) => {
		return(<WhatIDoElement key={element.id} path={element.path} title={element.title} text={element.text}/>)
	})

	return (
		<div className={display}>
			{result}
		</div>
	)
}