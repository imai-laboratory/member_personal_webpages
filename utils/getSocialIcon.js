import {SiQiita, SiZenn} from "react-icons/si";
import {FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa';
import {FaXTwitter} from "react-icons/fa6";

const iconMap = {
  GitHub: FaGithub,
  Zenn: SiZenn,
  Twitter: FaTwitter,
  X: FaXTwitter,
  Instagram: FaInstagram,
  Qiita: SiQiita,
};

export function getSocialIcon(iconName) {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent /> : null;
}
