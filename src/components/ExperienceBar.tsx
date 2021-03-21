import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: '66.67%' }}></div>

        <span className={styles.currentExperience}>400xp</span>
      </div>
      <span>600 xp</span>
    </header>
  );
};