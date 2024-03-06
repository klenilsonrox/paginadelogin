import React from "react";

interface AuthInputProps {
  newState: (state: string) => void,
  label: string,
  id:string,
  type:string,
  place:string
}

const InputAuth = (props: AuthInputProps) => {
  return (
    <div className="mt-4 flex flex-col gap-1">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        className="py-3 pl-4 outline-none rounded-md bg-black"
        placeholder={props.place}
        onChange={(e) =>props.newState(e.currentTarget.value)}
      />
    </div>
  );
};

export default InputAuth;
