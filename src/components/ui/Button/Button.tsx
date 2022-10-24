import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export const Button = (props: { children: string}) => {
  return (
    <div className="bg-gray-700 hover:bg-gray-600 text-white rounded px-4 py-2">
      <span>{props.children}</span>
    </div>
  );
}