export default function PatientModal({ patient, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-2">{patient.name}</h2>
        <p>Age: {patient.age}</p>
        <p>Contact: {patient.contact}</p>
        <p>Email: {patient.email}</p>
        <button
          className="mt-4 bg-red-500 text-white px-3 py-1 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
