const Button = ({ onClick, children }) => {
    return (
      <button className="updatebtn"
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
  
  export default Button;