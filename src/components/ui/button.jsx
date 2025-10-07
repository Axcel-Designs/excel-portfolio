"use client";
import useHover from "@/hooks/hoverHook";

export default function Button({ label, icon, type = "button", onClick }) {
  const { active, handleHover } = useHover();
  return (
    <div
      onClick={onClick}
      {...handleHover}
      className={`flex flex-row justify-around items-center gap-2 p-2 rounded-xl shadow/90 ${
        active
          ? "text-blue-950 bg-white "
          : "bg-blue-950 text-white shadow-blue-500"
      }`}
    >
      {icon}
      <button type={type}>{label}</button>
    </div>
  );
}
export function ButtonWhite({ label, icon, type = "button", onClick }) {
  const { active, handleHover } = useHover();
  return (
    <div
      onClick={onClick}
      {...handleHover}
      className={`flex flex-row justify-around items-center gap-2 p-2 rounded-xl shadow/90 ${
        active
          ? "bg-blue-950 text-white"
          : "text-blue-950 bg-white shadow-blue-500 "
      }`}
    >
      {icon}
      <button type={type}>{label}</button>
    </div>
  );
}
export function ButtonForm({ label, icon, type }) {
  const { active, handleHover } = useHover();
  return (
    <div
      {...handleHover}
      className={`flex flex-row justify-around items-center gap-2 p-2 rounded-xl shadow/90 shadow-gray-500 cursor-pointer ${
        active
          ? "bg-gray-950 text-white shadow-white"
          : "text-gray-950 bg-white"
      }`}
    >
      {icon}
      <button type={type}>{label}</button>
    </div>
  );
}
