import React from "react";

export const SimpleCaptcha = ({setIsDisabledLogin}) => {
  const changeHandlerCaptcha = event => {
    if (event.target.value === "4") {
      setIsDisabledLogin(false);
    } else {
      setIsDisabledLogin(true);
    }
  };

  return(
    <div className="simple-captcha">
      <p>simple captcha</p>
      <span>2+2</span>
      <input
        type="text"
        onChange={changeHandlerCaptcha}
      />
    </div>
  )
}

