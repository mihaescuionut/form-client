import {LinkedinIcon, TwitterIcon, FacebookIcon, InstagramIcon} from "@/assets/icons/index";

const SocialIcons = () => {

    return (
        <div className="flex justify-center items-center gap-2">

            <div className="bg-disabled rounded-full p-2">
                <LinkedinIcon />
            </div>

            <div className="bg-disabled rounded-full p-2">
                <TwitterIcon />
            </div>

            <div className="bg-disabled rounded-full p-2">
                <FacebookIcon />
            </div>

            <div className="bg-disabled rounded-full p-2">
                <InstagramIcon />
            </div>


        </div>
    )
}

export default SocialIcons;