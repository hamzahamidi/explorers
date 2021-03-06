import styles from './ChonkyFooter.module.css';
import FloatingAstronaut from '@components/FloatingAstronaut';

export default function Layout({ mission, currentStage }) {
  const missionTotal =
    mission.stages && mission.stages.length ? mission.stages.length : 1;

  const currentMission = () => {
    if (!mission.stages) return 0;
    return mission.stages.findIndex((el) => {
      return el.slug.current === currentStage;
    });
  };

  const progressIndicator = () => {
    if (currentStage) {
      return (
        <div className={styles.progress}>
          <h3>your progress</h3>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="100"
            viewBox="0 0 130 100"
          >
            <g fill="white">
              <line
                x1="20"
                x2="20"
                y1="3"
                y2="80"
                stroke="currentColor"
                strokeWidth="2"
              />
              <text x="50" y="40" fontSize="50px">
                {currentMission() + 1}
              </text>
              <line
                x1="110"
                x2="60"
                y1="3"
                y2="80"
                stroke="currentColor"
                strokeWidth="1"
              />
              <text x="90" y="70" fontSize="30px">
                {missionTotal}
              </text>
            </g>
          </svg>
        </div>
      );
    }
  };

  return (
    <section>
      <div className={`${styles.chonky} section-contain`}>
        <p className={styles.explorers}>Explorers</p>
        <div className={styles.astronaut}>
          <FloatingAstronaut />
        </div>
        {progressIndicator()}
      </div>
    </section>
  );
}
