import style from "./Loading.module.css";
export default function Loading() {
  return (
    <>
      <div className={`${style.pl}`}>
        <span className={`${style["pl__sr"]}`}>Loading…</span>
      </div>
    </>
  );
}
