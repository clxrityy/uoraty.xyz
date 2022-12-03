import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { Button } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { coolData } from '../data/dummy';
import { SparklineAreaData } from '../data/dummy';
import SparkLine from '../components/SparkLine';
import Stacked from '../components/Stacked';



const Uoraty = () => {

  const { currentColor } = useStateContext();

  return (
    <div className='mt-12 dark:bg-main-dark-bg'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-main-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-center'>
          <div>
            <h3 className='text-black font-semibold dark:text-gray-400'>Access</h3>
            <p className='text-sm text-gray-400 mt-1'>Gain access to the world's deepest secrets</p>
          </div>
          <div className='mt-6'>
            <Button
              color='white'
              bgColor={currentColor}
              text='Download'
              borderRadius='10px'
              size='md'
            />
          </div>
        </div>

        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {coolData.map((item) => (
            <div
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
              <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-md font-semibold'>
                  {item.text}
                </span>
                <span className={`text-sm text-green-600 ml-2`}>
                  {item.amount}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>
              Revenue Updates
            </p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>
                  Expense
                </span>
              </p>
              <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>
                  Budget
                </span>
              </p>
            </div>
          </div>

          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>
                    $100,000
                  </span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>
                    34%
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Budget
                </p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>
                    $32,000
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Expense
                </p>
              </div>

              <div className='mt-5'>
                <SparkLine
                  currentColor='blue'
                  id='line-sparkline'
                  type='Line'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                  color='blue'
                />
              </div>
              <div className='mt-5 mb-10'>
                <Button
                  color='white'
                  bgColor={currentColor}
                  text='Download Report'
                  borderRadius='10px'
                />
              </div>

              <div className='ml-4'>
                <Stacked
                  width='320px'
                  height='360px'

                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Uoraty