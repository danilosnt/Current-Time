function CurrentHours() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div>
      <h2>{currentTime}</h2>
    </div>
  );
}

export default CurrentHours;