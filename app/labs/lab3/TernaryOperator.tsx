export default function TernaryOperator() {
  // eslint-disable-next-line prefer-const
  let loggedIn = true;
  const hour = 9;
  const premium = false;
  return (
    <div id="wd-ternary-operator">
      <h4>Logged In</h4>
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
      {premium ? <p>Premium</p> : <p>Free</p>}
      <hr />
      {hour < 12 ? <p>Good morning</p> : <p>Good afternoon</p>}
    </div>
  );
}