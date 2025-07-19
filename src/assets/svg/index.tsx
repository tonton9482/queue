// assets/icons/index.ts
import CheckIcon from './check.svg?react';
import CloseIcon from './close.svg?react';
import FireIcon from './fire.svg?react';
import FlagIcon from './flag.svg?react';
import ManIcon from './man.svg?react';
import MegaphoneIcon from './megaphone.svg?react';
import TimeIcon from './time.svg?react';
import Logo from './queue__logo.svg?react';

const icons = {
    check: CheckIcon,
    close: CloseIcon,
    fire: FireIcon,
    flag: FlagIcon,
    man: ManIcon,
    megaphone: MegaphoneIcon,
    time: TimeIcon,
    logo: Logo,
} as const;

export default icons;