interface ButtonProps {
  variant: 'primary' | 'secondary'
  text: React.ReactNode
  additionalStyles?: string
}

export const Button = ({ variant, text, additionalStyles }: ButtonProps) => {
  const baseStyles = 'cursor-pointer rounded-full p-2 px-[1.2em]'

  if (variant === 'primary' || variant === 'secondary') {
    const style = variant === 'primary' ? 'btn-primary' : 'btn-secondary'

    return (
      <button className={`${baseStyles} ${style} ${additionalStyles || ''}`}>
        {text}
      </button>
    )
  } else {
    throw new Error(
      `[Button Component]: Invalid variant '${variant}' passed. ` +
        `Expected 'primary' or 'secondary'.`
    )
  }
}
