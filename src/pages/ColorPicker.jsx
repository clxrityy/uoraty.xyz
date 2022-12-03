import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { useStateContext } from '../contexts/ContextProvider';
import { Header } from '../components';

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}

const ColorPicker = () => {

  const { currentColor, currentMode } = useStateContext();

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-light-gray rounded-3xl'>
      <Header
        category='App'
        title='Color Picker'
        style={{color: currentColor}}
      />
      <div className='text-center'>
        <div id='preview' className='rounded-lg dark:bg-light-gray' />
        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div className='justify-center'>
            <p className='text-2xl font-semibold mt-2 mb-4'>
              Inline Palette
            </p>
            <ColorPickerComponent
              id='inline-pallete'
              mode='Palette'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>
              Inline Picker
            </p>
            <ColorPickerComponent
              id='inline-pallete'
              mode='Picker'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ColorPicker