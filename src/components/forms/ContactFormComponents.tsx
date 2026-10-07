import { motion } from 'framer-motion';

/* ============================================================
   INPUT FIELD
============================================================ */

export function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-black">
        {label}

        {required && (
          <span className="ml-1 text-[#159F9B]">*</span>
        )}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full border-0 border-b border-black/15 bg-transparent px-0 py-3 min-h-[44px] text-[14px] text-black outline-none transition-colors placeholder:text-black/40 focus:border-[#159F9B]"
      />
    </div>
  );
}

/* ============================================================
   SELECT FIELD
============================================================ */

export function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-black">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full cursor-pointer appearance-none border-0 border-b border-black/15 bg-transparent px-0 py-3 min-h-[44px] text-[14px] text-black outline-none transition-colors focus:border-[#159F9B]"
      >
        <option value="">Select an option</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

/* ============================================================
   MINI FEATURE
============================================================ */

export function MiniFeature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      className="group rounded-[10px] border border-black/[0.06] bg-[#FCFAF5] p-4 transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#159F9B]/10 text-[#159F9B] transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        <div>
          <p className="font-serif text-[14px] text-black">
            {title}
          </p>

          <p className="mt-1 text-[11px] leading-[1.4] text-black">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}