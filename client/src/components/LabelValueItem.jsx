function LabelValueItem({ label, value }) {
  return (
    <div className="">
      <p>
        {label}: <strong>{value}</strong>
      </p>
    </div>
  );
}

export default LabelValueItem;
