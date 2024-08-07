import Link from "next/link"
import UList from "../components/UList"
import Image from "next/image"
import Nav from "./Nav"

const links = [
    {name: "GitHub", link: "https://github.com/md5dalton"},
    {name: "Frontend Mentor", link: "https://www.frontendmentor.io/profile/md5dalton"},
    {name: "Twitter", link: "https://twitter.com/md5dalton"},
    {name: "LinkedIn", link: "#"},
]

export default () => (
    <header className="py-5 md:py-8 lg:py-10 lg:pr-8">
        <div className="page">
            <Nav />
        </div>
    </header>
)


const header = () => (
    <header
        style={{
            backgroundImage: "url(/images/image-profile-mobile.webp), url(/icons/pattern-rings.svg), url(/icons/pattern-circle.svg)",
            backgroundPosition: "center, -265px center, right -65px bottom",
            // backgroundPositionX: "50%, -265px, 85vw",
            // backgroundPositionY: "50%, 50%, bottom",
            backgroundSize: "contain, auto, auto"
        }}
        className="
            page-w min-h-[380px] bg-no-repeat text-center
            items-center justify-between
            md:!bg-none md:min-h-0 md:flex
        "
    >
        <p className="text-md my-5 md:my-8">
            <Link href="/">majarampiti</Link>
        </p>
        <UList
            className="flex items-center gap-6 justify-center md:gap-8 md:px-4"
            items={links}
            itemHandler={({ name, link }) => (
                <Link href={link} target="_blank">
                    <Image
                        alt={name}
                        src={`/icons/icon-${name.toLowerCase().replaceAll(" ", "-")}.svg`}
                        height={20}
                        width={20}
                    />
                </Link>
            )}
        />
    </header>
)