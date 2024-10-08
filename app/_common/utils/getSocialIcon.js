import {SiQiita, SiZenn} from "react-icons/si";
import {FaXTwitter, FaGithub, FaGlobe, FaInstagram, FaTwitter} from "react-icons/fa6";
import {MdEmail} from "react-icons/md";

const iconMap = {
  GitHub: FaGithub,
  Zenn: SiZenn,
  Twitter: FaTwitter,
  X: FaXTwitter,
  Instagram: FaInstagram,
  Qiita: SiQiita,
  Homepage: FaGlobe,
  Email: MdEmail,
};

export function getSocialIcon(iconName) {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent /> : null;
}
