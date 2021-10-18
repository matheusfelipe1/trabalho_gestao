import React , {Component} from 'react'
import './Content.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const emailjs = require('emailjs-com')
export default class Content extends Component {
    
   async sendEmail (e)  {
       e.preventDefault()
            emailjs.sendForm('service_emailjs', 'template_cmecjfb', e.target, 'user_G3YyEBg0xb49PLLEUmjzT')
                .then(resp => alert('Requerimento enviado com sucesso!'))
                .catch(err => alert('erro '+err))
        }

        componentDidMount() {
            console.log('ola')
        }
    render() {
        
        
        return (
                <div className='content form-group'>
                    <form className='form-group' onSubmit={this.sendEmail}>
                        <h1 className='h12'>Solicitaçao de EPI</h1>
                        <h2 className='h2'>Dados Pessoais</h2>
                        <hr className='hr' />
                        
                        <div className='dados'>
                        
                            <label htmlFor='name' >Nome:</label>
                            <input id='name' name='name' className='form-control' placeholder='Informe seu nome completo' type='text' />
                        </div>
                        <div className='dados'>
                            <label htmlFor='email' >Email:</label>
                            <input id='email' name='email' className='form-control' placeholder='Informe seu email' type='text' />
                        </div>
                        <div className='width'>
                            <div className='dados rows'>
                                <label htmlFor='cpf'>CPF:</label>
                                <input id='cpf' className='form-control' placeholder='Digite seu CPF' type='number' />
                            </div>
                            <div className='dados rows'>
                                <label htmlFor='rg' >RG:</label>
                                <input id='rg' className='form-control' placeholder='Digite seu RG' type='number' />
                            </div>
                            
                            
                        </div>
                        
                        <div className='width'>
                            <div className='dados rows'>
                                <label htmlFor='matricula'>Matricula:</label>
                                <input id='matricula' className='form-control'  placeholder='Digite sua matricula' type='number'  />
                            </div>
                            <div className='dados rows'>
                                <label htmlFor='celular'>Celular:</label>
                                <input id='celular' className='form-control'  placeholder='Ex.: (99) 99999 - 9999' type='number'  />
                            </div>
                        </div>
                    
                        <hr className='hr' />
                        <h2>Endereço</h2>
                        <div className='dados'>
                            <label htmlFor='logradouro' >Logradouro:</label>
                            <input id='logradouro' className='form-control' placeholder='Ex.: Avenida Brasil' type='text' />
                        </div>
                        <div className='dados'>
                            <label htmlFor='cidade' >Cidade:</label>
                            <input id='cidade' className='form-control' placeholder='Ex.: Belo Horizonte' type='text' />
                        </div>
                        <div className='dados'>
                            <label htmlFor='estado' >Estado:</label>
                            <input id='estado' className='form-control' placeholder='Ex.: Minas Gerais' type='text' />
                        </div>
                        <div className='dados'>
                            <label htmlFor='numero' >Numero:</label>
                            <input id='numero' className='form-control' placeholder='Informe o numero do seu endereço' type='text' />
                        </div>
                        <div className='dados'>
                            <label htmlFor='complemento' >Complemento:</label>
                            <input id='complemento' className='form-control' placeholder='Ex.: Casa b' type='text' />
                        </div>
                        <hr className='hr' />
                        <h2>Dados da Empresa</h2>
                        <div className='dados'>
                            <label htmlFor='locacao'>Locaçao:</label>
                            <input id='locacao' className='form-control' placeholder='Informe a area que atua. Ex.: Mecanico' type='text' />
                        </div>
                        <div className='width'>
                            <div className='dados rows'>
                                <label htmlFor='filial'>Filial:</label>
                                <input id='filial' className='form-control' placeholder='Informe a sua Filial' type='text' />
                            </div>
                            <div className='dados rows'>
                                <label htmlFor='tipo'>Tipo de Contrato:</label>
                                <input id='tipo' className='form-control' placeholder=' Ex.: Pessoa Juridica, CLT, Estagiario ou etc...' type='text' />
                            </div>
                        </div>
                        <hr className='hr' />
                        <h2>EPI's</h2>
                        <div className='width2'>
                            <div className='dados check'>
                                <label htmlFor='oculos' className='labelT'>Oculos de proteçao:</label>
                                <input id='oculos' className='form-control' placeholder='Informe seu nome' type='checkbox' />
                            </div>
                            <div className='dados check'>
                                <label htmlFor='capacete' className='labelT' >Capacete:</label>
                                <input name='capacete' id='capacete' className='form-control' placeholder='Informe seu nome' type='checkbox' />
                            </div>
                            <div className='dados check'>
                                <label htmlFor='protetor' className='labelT' >Protetor e Abafador Auricular:</label>
                                <input id='protetor' className='form-control' placeholder='Informe seu nome' type='checkbox' />
                            </div>
                        </div>
                    <div className='width2'>
                            <div className='dados check'>
                                <label htmlFor='mascara' className='labelT' >Mascara respiratoria:</label>
                                <input id='mascara' className='form-control' placeholder='Informe seu nome' type='checkbox' />
                            </div>
                            <div className='dados check'>
                                <label htmlFor='cinto' className='labelT' >Cinto de Segurança:</label>
                                <input id='cinto' className='form-control' placeholder='Informe seu nome' type='checkbox' />
                            </div>
                            <div className='dados check'>
                                <label htmlFor='luvas' className='labelT' >Luvas de Proteçao:</label>
                                <input id='luvas' className='form-control' placeholder='Informe seu nome' type='checkbox' />
                            </div>
                    </div>
                    <div className='width2 '>
                            <div className='dados check '>
                                <label htmlFor='talabate' className='labelT' >Talabarte:</label>
                                <input id='talabate' className='form-control' placeholder='Informe seu nome' type='checkbox' />
                            </div>
                            <div className='dados check'>
                                <label htmlFor='sapato' className='labelT' >Sapato:</label>
                                <input id='sapato' className='form-control' placeholder='Informe seu nome' type='checkbox' />
                            </div>
                    </div>
                    <hr className='hr' />
                    <h2>Destinatario</h2>
                    <div className='dados'>
                        <label htmlFor='email-d'>Email:</label>
                        <input id='email-d' className='form-control' placeholder='Informe do destinatario.' type='search' name='destino' />
                    </div>
                    <hr className='hr' />
                    <div className='width'>
                            <button className='btn btn-cancel button'>Cancelar</button>
                            <button type='submit' className='btn btn-primary button'>Enviar</button>
                    </div>
                </form>

                </div>
            
            
        )
    }
}