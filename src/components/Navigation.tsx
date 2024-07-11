import { JSXElement } from 'solid-js';
import { RiArrowsArrowDownSLine } from 'solid-icons/ri';


const Navigation = (): JSXElement => {

  return (
      <nav class='w-full relative z-10 poppins-regular items-center text-center' style={{"box-shadow":'0px 25px 50px rgba(29,29,29,.07)'}}>
          <div class=' w-10/12 m-auto py-5 flex flex-row items-center justify-between'>
          <div class=' w-1/6'>
            <a href='#'><img src='/Logo.svg' class=' w-4/5 m-auto' alt='logo'/> </a>
          </div>
              <div>
                <ul class='flex flex-row gap-8'>
                  <li><a href='/' class='navList'>About</a></li>
                  <li><a href='/PatientsLandingPage' class='navList'>For Patients</a></li>
                  <li><a href='/HospitalLandingPage' class='navList'>For Hospitals</a></li>
                  <li><a href='/HospitalLandingPage' class='navList'>Pricing</a></li>
                  <li><a href='/HospitalLandingPage' class='navList'>Contact us</a></li>
                </ul>
              </div>
              <div class='flex flex-row gap-5'>
                <a href='#' class='buttonSignUp'>Sign in/up</a>
                <button class='flex flex-row items-center text-center'>
                  <span class='rounded-full p-2 bg-[#ECF3FB]'>EN</span>
                  <RiArrowsArrowDownSLine size={26}/>
                </button>
              </div>
          </div>
      </nav>

  )


};

export default Navigation;