//These are the reusable buttons that will update grid size
function ControlButton({ label, onClick }) {
  return (
    <button className="control-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default ControlButton;