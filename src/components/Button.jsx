import React from 'react'

const Button = ({ children, bg = true, className }) => {
    const defaultStyle = "px-7 py-5 rounded-lg font-medium text-lg lg:"
    const styles = {
        primary: "bg-first-blue text-white hover:bg-blue-700",
        secondary: "border border-first-blue text-first-blue hover:bg-zinc-100 hover:font-bold",
      };
      const buttonStyle = bg ? styles.primary : styles.secondary;
  return (
  <button className={`${defaultStyle} ${buttonStyle} ${className}`}>
        {children}
    </button>
  )
}

export default Button