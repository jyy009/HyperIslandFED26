export const ChildComponent = ({ data }) => {
  return (
    <>
      <p>{`${data.name} is ${data.info.age} years old and lives in ${data.info.city}. He works as a ${data.info.job}.`}</p>

      <p>His hobbies include: {data.info.hobbies.join(", ")}.</p>
    </>
  );
};
