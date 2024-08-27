import React, { useId } from "react";

function Select(
  {
    options,

    label,
    className,
    ...props
  },
  ref
) {
  const selectId = useId();
  return (
    <div className="">
      {label && <label htmlFor={id} className=""></label>}
      <select id={id} className={className} {...props} ref={ref}></select>
    </div>
  );
}

export default Select;
