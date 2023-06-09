const ActorsCard = ({ name, image, country, gender, birthday }) => {
  return (
    <div>
      <h3>
        actor :{name} {!!gender && `(${gender})`}
      </h3>
      <img src={image} width={100} height={100} alt="image not found" />
      <div>
        <p>country : {country ? country.name : 'Not found'}</p>
        <p>birthday : {birthday ? birthday : 'Not found'}</p>
      </div>
    </div>
  );
};

export default ActorsCard;
