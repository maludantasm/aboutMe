import './header.css'
import { HeaderElements } from './headerElements/header-elements'

export const Header = (props) => {
    const letter = props.letter
    const firstName = props.name.split(' ')[0]
    const lastName = props.name.split(' ')[1]

    return (
        <div className='header'>
            <div className='menu-start'>
                <p id='letter'><b>{letter}</b></p>
                <p id='name'><b>{firstName}</b> {lastName}</p>
            </div>   
            <nav className='menu-end'> 
                <ul>
                    <HeaderElements elements={[
                                                ['#', 'Página Inicial', 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'], 
                                                ['#', 'Sobre', 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'], 
                                                ['#', 'Contato','M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z', 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z']
                                    ]}
                    />
                </ul>    
            </nav>
        </div>
    )
}