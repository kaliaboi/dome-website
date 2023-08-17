import Image from "next/image";
import { FC } from "react";

const Nav: FC = ({}) => {
  return (
    <nav className="border-b-2 pb-8 border-black my-[50px] mx-[160px]">
      <Image src="/logo.png" width={64} height={32} alt="" />
    </nav>
  );
};

export default Nav;
