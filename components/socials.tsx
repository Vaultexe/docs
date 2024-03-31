import Image from "next/image";
import styles from "./socials.module.css";

type Profileprops = {
  linkedinUsername: string | null;
  githubUsername: string | null;
  imgSrc: string;
  description: string;
};

function Profile({
  imgSrc,
  linkedinUsername,
  githubUsername,
  description,
}: Profileprops) {
  return (
    <div
      style={{
        gap: "0.5rem",
        display: "flex",
        flexDirection: "column",
        maxWidth: "700px",
      }}
    >
      <Image
        src={imgSrc}
        alt="Profile Picture"
        style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px" }}
      />
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        {linkedinUsername && (
          <a
            href={`https://www.linkedin.com/in/${linkedinUsername}`}
            target="_blank"
            rel="noreferrer"
            className={styles.social}
          >
            @linkedin
          </a>
        )}
        {githubUsername && (
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className={styles.social}
          >
            @github
          </a>
        )}
      </div>
      {description}
    </div>
  );
}

export default Profile;
