
import {atom} from 'recoil';

export const NavbarOpen = atom({
  key: 'NavbarOpen',
  default: false,
});

export const DarkMode = atom({
  key: 'DarkMode',
  default: true,
});