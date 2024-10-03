import {getSocialIcon} from "@/app/_common/utils/getSocialIcon";

export default function SocialIcons({ socialMediaLists }) {
  return (
    <div className="flex w-5 h-5 items-center space-x-6">
      {socialMediaLists?.map((social, index) => (
        <a
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="text-2xl text-gray-600 hover:text-blue-500"
          aria-label={social.name}
        >
          {getSocialIcon(social.name)}
        </a>
      ))}
    </div>
  );
}
