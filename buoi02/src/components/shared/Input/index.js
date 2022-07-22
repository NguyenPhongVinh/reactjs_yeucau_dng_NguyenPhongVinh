function Input({ type = 'text', placeholder = '', autoComplete = "true", className = '', ...restParams }) {
  return (
    <input {...restParams} type={type} className={className} placeholder={placeholder} autoComplete={autoComplete} />
  );
}

export default Input;