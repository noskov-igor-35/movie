import React, { type ChangeEvent, type FormEvent } from 'react';
import { Button } from 'primereact/button';
import { Dropdown, type DropdownChangeEvent } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

interface CodeName {
  code: string
  label: string
}

interface State {
  name: string
  essay: string
  flavor: CodeName
}

export default class Form extends React.Component<unknown, State> {
  flavors = [
    { code: 'grapefruit', label: 'Грейпфрут' },
    { code: 'lime', label: 'Лайм' },
    { code: 'coconut', label: 'Кокос' },
    { code: 'mango', label: 'Манго' }
  ];

  constructor(props: unknown) {
    super(props);

    this.state = {
      name: '',
      essay: 'Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.',
      flavor: { code: 'coconut', label: 'Кокос' }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(): React.ReactNode {
    return (
      <form className='inline-flex flex-column' onSubmit={ this.handleSubmit }>
        <label htmlFor='name'>Имя:</label>
        <InputText id='name'
                   name='name'
                   className='my-2'
                   value={ this.state.name }
                   onChange={ this.handleInputChange }/>

        <label htmlFor='essay'>Сочинение:</label>
        <InputTextarea id='essay'
                       name='essay'
                       className='my-2'
                       value={ this.state.essay }
                       rows={5}
                       cols={30}
                       onChange={ this.handleTextareaChange }/>
        <label htmlFor='flavor'>Выберите ваш любимый вкус:</label>
        <Dropdown id='flavor'
                  name='flavor'
                  className='my-2'
                  value={ this.state.flavor }
                  options={ this.flavors}
                  onChange={ this.handleSelectChange }/>
        <Button label='Отправить' size='small'/>
      </form>
    );
  }

  private handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({
      name: event.target.value
    });
  }

  private handleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    this.setState({
      essay: event.target.value
    });
  }

  private handleSelectChange(event: DropdownChangeEvent): void {
    this.setState({
      flavor: event.value
    });
  }

  private handleSubmit(event: FormEvent<HTMLFormElement>): void {
    alert(`Отправленное имя: ${this.state.name}\nОтправленное сочинение: ${this.state.essay}\nВаш любимый вкус: ${this.state.flavor.label}`);
    event.preventDefault();
  }
}
