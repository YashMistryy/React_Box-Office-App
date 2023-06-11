const Cast = ({ castData }) => {
  return (
    <div>
      <div>
        {castData.map(castData => (
          <div key={castData.person.id}>
            <img
              src={
                castData.character.image
                  ? castData.character.image.medium
                  : '/image_alt.jpeg'
              }
              alt=""
            />
            <p key={castData.person.id}>{castData.person.name}</p>
          </div>
        ))}
      </div>

      {/* <div>{castData.length}</div> */}
    </div>
  );
};

export default Cast;
