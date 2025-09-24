export default function PatientCard({ patient, onView }) {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-lg font-bold">{patient.name}</h2>
      <p>Age: {patient.age}</p>
      <p>Contact: {patient.contact}</p>
      <button
        className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
        onClick={onView}
      >
        View Details
      </button>
    </div>
  );
}