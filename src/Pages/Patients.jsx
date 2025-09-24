import { useEffect, useState } from "react";
import PatientCard from "../Components/PatientCard";
import PatientModal from "../Components/PatientModal";
import AddPatientForm from "../Components/AddPatientForm";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((p, i) => ({
          id: p.id,
          name: p.name,
          age: 20 + (i % 30),
          contact: p.phone,
          email: p.email,
        }));
        setPatients(mapped);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch patients");
        setLoading(false);
      });
  }, []);

  const filtered = patients.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    
    <div className="p-6">
      <AddPatientForm setPatients={setPatients} />
      <div className="flex justify-between mb-4 mt-2">
        <input
          type="text"
          placeholder="Search patient..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border px-3 py-2 rounded w-1/2"
        />
        
      </div>
      

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <PatientCard key={p.id} patient={p} onView={() => setSelected(p)} />
        ))}
      </div>

      {selected && (
        <PatientModal patient={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
