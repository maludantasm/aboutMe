import './header-elements.css'

export const HeaderElements = (props) => {
    var result = props.elements.map((element) => {
        const href = element[0]
        const title =  element[1]
        const icon =  element[2]

		return(<li>
                    <a href={href}>{title}
                        <svg xmlns='http://www.w3.org/2000/svg' width='1.7vh' height='1.7vh' fill='currentColor' viewBox='0 0 16 16'>
                            <path fill-rule='evenodd' d={icon}/>
                        </svg>
                    </a>
                </li>
    )})

    return (result)
}    