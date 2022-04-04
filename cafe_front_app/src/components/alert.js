function Alert({ message, classes }) {
  return (
    <div class={classes} role="alert">
      {message}
    </div>
  );
}

export default Alert;
