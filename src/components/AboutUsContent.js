import React, { Fragment } from "react";

import "./TeamMemberCard.css";
import TeamMembersListComponent from "./TeamMembersList";

const AboutUsContent = () => {
  const styles = {
    contentHeader: {
      color: "#fff",
      padding: "12px 24px",
      margin: "0%",
      backgroundColor: "#364954",
    },

    contentInfoText: {
      textAlign: "justify",
      padding: "24px",
      margin: "0px",
      backgroundColor: "#364954",
      color: "#fff",
    },

    contentList: {
      listStyleType: "none",
      padding: "0px 24px",
      margin: "0px auto",
      display: "flex",
      justifyContent: "space-around",
      color: "#fff",
    },

    contentListPosition: {
      width: "100px",
      margin: "0% 5% 2.5%",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <article>
        <h2 style={styles.contentHeader}>Poznaj nas</h2>

        <p style={styles.contentInfoText}>
          Żyjemy w świecie, w którym wiele osób boryka się z problemami
          zdrowotnymi oraz brakiem czasu. Dlatego w odpowiedzi na rosnące
          zapotrzebowanie postanowiliśmy stworzyć narzędzie online, dzięki
          któremu możesz kontrolować, dietę, treningi, utrzymywać równowagę
          psychofizyczna oraz motywacje. Naszą misją jest inspirowanie ludzi do
          zdrowego stylu życia przy jednoczesnym dostarczeniu produktu opartego
          o najnowsze technologie. Chcemy Cię przekonać, że zdrowy styl życia
          może być prosty, szybki i niedrogi.
          <br />
          <br />
          To proste. Uda się!
          <br />
          <br />
          Założyciele Vitaminy
        </p>
      </article>

      <TeamMembersListComponent />

      <article style={styles.contentMoreInfo}>
        <h3 style={{ padding: "0px 24px" }}>Dowiedz się więcej:</h3>

        <ul style={styles.contentList}>
          <li style={styles.contentListPosition}>
            <a href="#" style={styles.contentLink}>
              Facebook
            </a>
          </li>
          <li style={styles.contentListPosition}>
            <a href="#" style={styles.contentLink}>
              Instagram
            </a>
          </li>
          <li style={styles.contentListPosition}>
            <a href="#" style={styles.contentLink}>
              Twitter
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default AboutUsContent;
