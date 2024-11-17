import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

const Footer = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Join Us", href: "/join" },
  ];

  const stayConnected = [
    {
      icon: <EmailIcon />,
      label: "Email",
      content: "pokerclub@ucla.edu",
    },
    {
      icon: <InstagramIcon />,
      label: "Instagram",
      content: "@uclapokergroup",
    },
    {
      icon: (
        <Image
          src="/discordIcon.svg"
          alt="Discord Icon"
          width={24}
          height={24}
          className="brightness-50"
        />
      ),
      label: "Discord",
      content: "UCLA Poker Club",
    },
  ];

  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold">UCLA Poker Club</h3>
            <p className="text-blue-200">
              Poker Club at UCLA is the official university poker club for UCLA.
              Join us to play some poker, connect with other UCLA stude, and have
              fun!
            </p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col md:flex-row md:justify-end md:space-x-8 mt-8 md:mt-0">
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-gray-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Stay Connected</h4>
              <div className="space-y-4">
                {stayConnected.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 hover:text-white"
                  >
                    <span className="text-gray-100">{item.icon}</span>
                    <span className="text-gray-100">{item.content}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
