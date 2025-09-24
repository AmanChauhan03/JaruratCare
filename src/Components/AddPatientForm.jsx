import { useState } from "react";

export default function AddPatientForm({ setPatients }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");

  const addPatient = () => {
    if (!name || !age || !contact) return;
    setPatients((prev) => [
      ...prev,
      { id: Date.now(), name, age, contact, email: "new@local" },
    ]);
    setName("");
    setAge("");
    setContact("");
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-2 py-1 rounded"
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="border px-2 py-1 rounded"
      />
      <input
        type="text"
        placeholder="Contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        className="border px-2 py-1 rounded"
      />
      <button
        onClick={addPatient}
        className="bg-green-600 text-white px-3 py-1 rounded"
      >
        Add
      </button>
    </div>
  );
}
