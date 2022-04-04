import './button.css';

function Button(props) {
  return (
    <div className="root">
      <button className="button">{props.children}</button>
    </div>
  );
}

export default Button;
