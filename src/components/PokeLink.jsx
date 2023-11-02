/* eslint-disable react/prop-types */
export default function PokeLink({ monster }) {
  return (
    <li>
      <a href={monster.url}>
        <div>
          <p>{monster.name}</p>
        </div>
      </a>
    </li>
  );
}
