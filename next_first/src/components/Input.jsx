export default function Input({ name, label, type, className = "" }) {
  return (
    <div className={`flex flex-col mb-3 ${className}`}>
      <label htmlFor={name} className="font-bold">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        className="bg-white rounded-sm p-2"
        required
      />
    </div>
  );
}
