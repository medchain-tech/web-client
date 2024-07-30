import { JSXElement } from "solid-js";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "solid-icons/fi";

const Footer = (): JSXElement => {
  return (
    <>
      <footer class="bg-[var(--clr-bg-footer)] w-full h-auto poppins text-[var(--clr-bg-primary)] px-20 pt-16 pb-3">
        <div class="flex justify-between flex-wrap">
          <div class="flex flex-col w-[30%] gap-4">
            <div class="bg-[var(--clr-bg-primary)] w-44 h-14 rounded-xl">
              <a href="/">
                <img src="/logo.svg" alt="logo.svg" />
              </a>
            </div>
            <p class="font-normal">
              A transformative approach to managing healthcare records and
              monitor diseases enhancing healthcare delivery in Africa.
            </p>
            <div class="flex gap-2">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
              <FiLinkedin />
              <FiYoutube />
            </div>
          </div>
          <div class="w-[30%] flex flex-col gap-4">
            <h1 class="text-3xl font-semibold">Address</h1>
            <p class="font-normal">
              No 13, Surulere area, Lagos, Lagos State, Nigeria
            </p>
          </div>
          <div class="w-[30%] flex flex-col gap-4">
            <h1 class="text-3xl font-semibold">Contact</h1>
            <div>
              <p class="font-normal">info@medchain.com</p>
              <p class="font-normal">+234 801 0000 000</p>
            </div>
          </div>
        </div>
        <div class="center">
          <p class="text-sm ">© 2024 Medchain - All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
