import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

type NavMobProps = {
  close: () => void;
  navData: { title: string; path: string }[];
};

const NavMob: React.FC<NavMobProps> = ({ close, navData }) => {
  return (
    <div className="flex flex-col gap-gap">
      {/* Title */}
      <div className="flex items-center gap-gap py-gapMed px-gapSmall border-b border-gray-400 sticky top-0 bg-white z-10">
        <AiOutlineClose
          className="text-[1.5rem] text-gray-500"
          onClick={close}
        />
        <h4 className="text-fontDeskLargest font-semibold">Menu</h4>
      </div>
      <ul className="px-gap flex flex-col gap-gapLarge">
        {navData.map((item, index) => (
          <li key={index}>
            <Link
              href={`/${item.path}`}
              className="text-fontDesk"
              onClick={close}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMob;
