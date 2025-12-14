//These are the reusable buttons that will update grid size
class ControlButton extends Component {
  render() {
    const { label, onClick, isPrimary } = this.props;
    return (
      <button onClick={onClick} >
        {label}
      </button>
    );
  }
}
export default ControlButton;