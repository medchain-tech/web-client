import { FaRegularCirclePlay } from 'solid-icons/fa';
import { JSXElement } from 'solid-js';



const HomeScreen1 = (): JSXElement => {

  return (
  <section class='section1'>
    <div class='poppins-regular relative flex flex-row'>
        <div class=' flex flex-col mt-28 items-center'>
            <span class='pl-48'>
                <h3 class='font-bold text-2xl mb-3 text-[#FB6833]'>MedChain</h3>
                <h2>Transforming Healthcare with <span class='text-[#6833FB]'>Secure EHR Solutions</span></h2>
                <p class=' text-[20px] mt-3 text-[#6F7177]'>A transformative approach to managing healthcare records and monitor diseases enhancing healthcare delivery in Africa.</p>

                <span class='flex flex-row gap-8 mt-12'>
                    <a href='#' class='buttonSignUp'>Get started now</a>
                    <a href='#' class='flex text-[#6F7177] flex-row items-center gap-2 hover:gap-4 duration-300'><FaRegularCirclePlay size={27} /> How it works</a>
                </span>
            </span>
        </div>
        <div class='HomeScreen1 relative'>
            <img class='w-full h-full ' src='/HomeScreen1.svg'/>
        </div>
    </div>

    <div class='w-full bg-[#F4F7FA]'>
        <div class=' w-[63%] m-auto flex flex-row justify-between py-8'>
            <span class='flex flex-row w-[26%] gap-4 items-center'>
                <h2>1M+</h2>
                <p>Customers visit every months.</p>
            </span>
            <span class='flex flex-row w-[26%] gap-4 items-center'>
                <h2>93%</h2>
                <p>Satisfaction rate from our Customers.</p>
            </span>
            <span class='flex flex-row w-[26%] gap-4 items-center'>
                <h2>4.9</h2>
                <p>Average customer ratings out of 5.00!</p>
            </span>
        </div>
    </div>

  </section>
  )

};

export default HomeScreen1;
