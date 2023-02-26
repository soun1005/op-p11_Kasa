import style from './Tags.module.css';

export default function Tags({ tagList }) {
  return (
    <div className={style.tagContainer}>
      {tagList.map((data) => (
        <span key={data}>{data}</span>
      ))}
    </div>
  );
}
