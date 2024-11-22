import {LinkedinIcon, TwitterIcon, FacebookIcon, InstagramIcon} from "@/assets/icons/index";
import {IconInfo} from "@/lib/types";

const iconList: IconInfo[] = [
    { Icon: LinkedinIcon, name: "LinkedIn" },
    { Icon: TwitterIcon, name: "Twitter" },
    { Icon: FacebookIcon, name: "Facebook" },
    { Icon: InstagramIcon, name: "Instagram" },
];


const SocialIcons = () => {

    return (
        <div className="flex justify-center items-center gap-2">
            {iconList.map(({ Icon, name }) => (
                <div key={name} className="bg-disabled rounded-full p-2">
                    <Icon />
                </div>
            ))}
        </div>
    )
}

export default SocialIcons;