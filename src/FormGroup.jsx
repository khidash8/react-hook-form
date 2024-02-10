export function FormGroup({ errors = "", children }) {
  return (
    <div className={`form-group ${errors ? "error" : ""}`}>
      {children}
      {!!errors && <div className="msg">{errors}</div>}
    </div>
  )
}
