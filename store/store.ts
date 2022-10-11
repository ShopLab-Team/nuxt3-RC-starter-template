/*
 * We can store global state here
 * Data for components should be stored here
 * */

// Buttons styles
const primary = `bg-lab-yellow border-2 border-lab-yellow hover:bg-white active:bg-lab-yellow-dark active:text-white`;
const secondary = `bg-lab-gray-1 border-2 border-lab-yellow hover:bg-lab-yellow active:bg-lab-yellow-dark active:text-white`;

// Navigation global state
const isMenuOpen = ref<boolean>(false);

const handleMenu = (): boolean => (isMenuOpen.value = !isMenuOpen.value);

const closeMenu = (): boolean => (isMenuOpen.value = false);

// Example of data to be sent to component
const agencyPageMobileFrames = [
  {
    id: 1,
    alt: 'agencyPage.mobileFrames.qmsAltText',
    img: '/images/AgencyPage/QMS_mobile_frame.png'
  },
  {
    id: 2,
    alt: 'agencyPage.mobileFrames.sanvtAltText',
    img: '/images/AgencyPage/SANVT_mobile_frame.png'
  },
  {
    id: 3,
    alt: 'agencyPage.mobileFrames.manikoAltText',
    img: '/images/AgencyPage/MANIKO_mobile_frame.png'
  }
];

export {
  isMenuOpen,
  handleMenu,
  closeMenu,
  primary,
  secondary,
  agencyPageMobileFrames
};
