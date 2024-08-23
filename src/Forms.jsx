import React from 'react'

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text'
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email'
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password'
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text'
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text'
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text'
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text'
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text'
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text'
  }
]

const Form = () => {

    const [form, setForm] = React.useState({
        nome:'',
        email:'',
        senha: '',
        cep: '',
        rua:'',
        bairro:'',
        cidade:'',
        estado:'',
    })

    function handleChange({target}){
        const {id, value} = target
        setForm({...form, [id]: value})
    }

    function handleSubmit(event){
      event.preventDefault();
      fetch('https://ranekapi.origamid.dev/json/api/usuario',{
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: form
      })
    }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({id, label, type}) => (
        <div key={id}>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} value={form[id]} onChange={handleChange} />
      </div>))}
      <button>Enviar</button>
    </form>

  )
}

export default Form