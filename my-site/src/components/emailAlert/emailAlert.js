import './emailAlert.css'

export const EmailAlert = (props) => {
    const logo = props.logo

    const enviroment = props.enviroment

    const name = props.name
    const creadate = props.creadate
    const expdate = props.expdate 

    return (<div classNameName='emailAlert'>
                <div className='header-container'>
                </div>
                <div className='body-container'>
                    <div className='alert-message'>
                        <div className='content1'>
                            <img src={logo} alt='big-logo' id='big-logo'></img>
                        </div>
                        <div className='content2'>
                            <div className='title'>
                                <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' className='bi bi-key' viewBox='0 0 16 16'>
                                    <path d='M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z'/>
                                    <path d='M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z'/>
                                </svg>
                                <p style='padding-left: 10px;'><b>APIKEY</b></p>
                                <p style='padding: 0px 10px 0px 10px;'>-</p>
                                <p><b>{enviroment}</b></p>
                            </div>
                            <table>
                                <tr>
                                    <th>Nome</th>
                                    <th>Data criação</th>
                                    <th>Data expiração</th>
                                    <th>Status</th>
                                </tr>
                                <tr>
                                    <td>{name}</td>
                                    <td>{creadate}</td>
                                    <td>{expdate}</td>
                                    <td>
                                        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='red' className='bi bi-circle-fill' viewBox='0 0 16 16'>
                                            <circle cx='8' cy='8' r='8'/>
                                        </svg>
                                    </td>
                                </tr>
                            </table>
                        </div> 
                    </div>
                </div>
                <div className='footer-container'>
                </div>
            </div>
    )
}