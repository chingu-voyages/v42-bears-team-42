export default function EditEmployee({ onClose }) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        // onClick={handleClose}
        id="wrapper"
      >
        <div className="w-[500px] flex flex-col">
          <button
            className="text-gray-900 text-sm place-self-end"
            onClick={() => {
              onClose();
            }}
          >
            Close
          </button>
          <div className="bg-white p-2 rounded">EDIT EMPLOYEE</div>
        </div>
      </div>
    </>
  );
}
