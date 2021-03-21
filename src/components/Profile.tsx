import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/muriloignaccio.png" alt="Murilo Ignacio's Profile Picture" />
      <div>
        <strong>Murilo Ignacio</strong>
        <p>
          <img src="icons/level.svg" alt="Level up icon" />
          Level 1
        </p>
      </div>
    </div>
  );
};