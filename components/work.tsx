"use client";

import { FC, useState } from "react";

const projects = [
  {
    cover: "",
    title: "",
    client: "",
  },
];

interface switcherProps {
  mode: "Wide" | "Grid" | "List";
  active?: boolean;
  setter: () => void;
}

const Switcher: FC<switcherProps> = ({ mode, active, setter }) => {
  return (
    <button
      onClick={setter}
      className={`${
        !active ? "opacity-60" : "opacity-100"
      }  text-[21px] font-medium`}
    >
      {mode}
    </button>
  );
};

const Work: FC = ({}) => {
  const [mode, setMode] = useState<"wide" | "grid" | "list">("wide");
  return (
    <div className="mt-10">
      <div className="w-full">
        <div className="flex justify-end items-center w-full gap-[54px] px-[160px]">
          <Switcher
            mode={"Wide"}
            active={mode == "wide"}
            setter={() => setMode("wide")}
          />
          <Switcher
            mode={"Grid"}
            active={mode == "grid"}
            setter={() => setMode("grid")}
          />
          <Switcher
            mode={"List"}
            active={mode == "list"}
            setter={() => setMode("list")}
          />
        </div>

        <div className="mt-10 overflow-x-auto flex gap-12 px-[160px]">
          <div className="w-full shrink-0">
            <div className="w-full aspect-video bg-slate-200"></div>
            <div className="mt-[24px]">
              <h1 className="text-[32px]">Museum of the City of New York</h1>
              <h1 className="text-[32px] opacity-50">This is New York</h1>
            </div>
          </div>

          <div className="w-full shrink-0">
            <div className="w-full aspect-video bg-slate-200"></div>
            <div className="mt-[24px]">
              <h1 className="text-[32px]">Museum of the City of New York</h1>
              <h1 className="text-[32px] opacity-50">This is New York</h1>
            </div>
          </div>

          <div className="w-full shrink-0">
            <div className="w-full aspect-video bg-slate-200"></div>
            <div className="mt-[24px]">
              <h1 className="text-[32px]">Museum of the City of New York</h1>
              <h1 className="text-[32px] opacity-50">This is New York</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
