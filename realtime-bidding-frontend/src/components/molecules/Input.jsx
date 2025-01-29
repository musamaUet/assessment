import { Image } from "@/components/atoms";
import INPUT_KEY from "@/assets/images/key.svg";
import { AddProfileButton } from "@/components/svg-icons";

export default function Input({
  name,
  type,
  value,
  onChange,
  className,
  placeholder,
  handleSubmit,
  ...props
}) {
  return (
    <div className={`input w-[80%] ${className}`.trim()}>
      <div className="input__inner w-full flex items-center relative bg-transparent border-[0.5px] border-gray-400 py-[1px] pl-[14px] pr-[20px] rounded-8 outline-none focus:outline-none">
        <Image src={INPUT_KEY} alt="" width={18} />
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input__input-field h-xl w-full text-[14px] text-white bg-transparent pl-[8px] outline-none focus:outline-none"
          {...props}
        />

        {placeholder === "Password" && (
          <div
            className="input__button absolute top-1/2 -translate-y-[44%] right-[5px] cursor-pointer"
            onClick={handleSubmit}
          >
            <AddProfileButton />
          </div>
        )}
      </div>
    </div>
  );
}
