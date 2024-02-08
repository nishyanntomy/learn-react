function Profile({ person, size = 100 }) {
  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="profile-picture"
        src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
        alt={person.name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.awardCount} </b>
          {person.awards}
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
            person={{ name: 'Maria Skłodowska-Curie', imageId: 'szV5sdG', profession: 'physicist and chemist', awards: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)', awardCount: 4, discovered: 'polonium (element)'}}
            size={70} />
      <Profile
            person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2', profession: 'geochemist', awards: '(Miyake Prize for geochemistry, Tanaka Prize)', awardCount: 2, discovered: 'a method for measuring carbon dioxide in seawater'}}
            size={70} />
    </div>
  );
}
