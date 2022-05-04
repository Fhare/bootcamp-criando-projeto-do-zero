import styles from "./postPreview.module.scss";

export default function PostPreview() {
  return (
    <a className={styles.post}>
      <strong>Como utilizar hooks</strong>
      <p>Pensando em sincronização em vez de ciclos de vida.</p>

      <div className={styles.info}>
        <div className={styles.date}>
          <img src="/images/calendar.svg" alt="calendar" />
          <time>15 Mar 2021</time>
        </div>

        <div className={styles.user}>
          <img src="/images/user.svg" alt="user" />
          <span>Joseph Oliveira</span>
        </div>
      </div>
    </a>
  );
}