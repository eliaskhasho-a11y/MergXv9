import React, { useState } from "react";

export default function TableInlineEdit({ value, onSave }) {
  const [edit, setEdit] = useState(false);
  const [val, setVal] = useState(value);

  return edit ? (
    <input
      value={val}
      onChange={(e) => setVal(e.target.value)}
      onBlur={() => {
        onSave(val);
        setEdit(false);
      }}
      className="px-2 py-1 rounded-md"
      style={{
        background: "var(--panel)",
        border: "1px solid var(--border)",
        color: "var(--text)",
      }}
      autoFocus
    />
  ) : (
    <span
      onClick={() => setEdit(true)}
      className="cursor-pointer hover:underline"
    >
      {value}
    </span>
  );
}
