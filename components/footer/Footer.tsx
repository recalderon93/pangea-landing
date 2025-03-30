import Link from "next/link";
import PangeaLogo from "../Icons/PangeLogo";
import SocialIcon, { SocialNetwork } from "../Icons/Social";

const sections = [
  {
    title: "Company",
    links: [
      { label: "Who We Are", href: "/#" },
      { label: "Solutions", href: "/#" },
    ],
  },
  {
    title: "Careers",
    links: [
      { label: "Job Opportunities", href: "/#" },
      { label: "Talent Referrals", href: "/#" },
    ],
  },
];
const socialLinks = [
  { social: "x", href: "/#" },
  { social: "linkedIn", href: "/#" },
  { social: "instagram", href: "/#" },
  { social: "facebook", href: "/#" },
];

export function Footer() {
  const className = "flex flex-col gap-6";
  const columnStyle = className;

  return (
    <footer className="flex flex-col gap-20 p-4 text-white">
      <div className="text-shade-600 relative flex flex-col justify-between gap-12 px-[10%] pt-10 sm:flex-row sm:flex-wrap sm:gap-8 sm:pt-24">
        <div className="flex flex-col items-start gap-2 sm:gap-8">
          <PangeaLogo color="green" size="S" />
          <p className="paragraph-2 w-70 sm:w-80">
            {
              "Let's talk about how we can digitize your startup and help you reach your goals!"
            }
          </p>
        </div>
        {sections.map((item) => (
          <div key={item.title} className={columnStyle}>
            <h2 className="h5 bold">{item.title}</h2>
            <ul className="flex flex-col gap-4">
              {item.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="paragraph-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={columnStyle}>
          <h2 className="h5 bold">Socials</h2>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link href={link.href} key={link.social} className="">
                <SocialIcon social={link.social as SocialNetwork} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t-shade-100 border-t-[1px] py-2">
        <p className="text-shade-300 text-center">
          Pangea Teck &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
