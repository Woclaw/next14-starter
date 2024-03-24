import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Pancake</h2>
        <h1 className={styles.title}>
          {" "}
          Bouw je droomteam en word de ultieme Volleybal Fantasy Manager
        </h1>
        <p className={styles.desc}>
          Ben je een diehard volleybalfan die op zoek is naar een nieuwe manier
          om je favoriete sport te beleven? Dan is Pancake precies wat je zoekt!
          In deze spannende wereld kun je je eigen team samenstellen met de
          beste spelers van de competitie en strijden om de titel van ultieme
          Fantasy Manager.
          <br />
          <br />
          Onze missie is om fans van volleybal een dieper inzicht te geven in de
          sport die we allemaal zo liefhebben. Met Pancake brengen we fans
          dichter bij het spel door hen de kans te geven hun eigen teams samen
          te stellen, strategieën uit te denken en tegen vrienden en andere
          volleybalfans te concurreren. We streven ernaar om de meest
          nauwkeurige, real-time statistieken en spelerprestaties te integreren,
          zodat elke keuze die je maakt, elke speler die je kiest, een directe
          weerspiegeling is van de werkelijkheid.
        </p>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>9</h1>
            <p>Mogelijke ploegen</p>
          </div>
          <div className={styles.box}>
            <h1>120</h1>
            <p>Beschikbare spelers</p>
          </div>
          <div className={styles.box}>
            <h1>50 M</h1>
            <p>Budget</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
