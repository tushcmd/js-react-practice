import React from "react";

const languages = [
    {
      id: 1,
      lang: "JavaScript",
    },
    {
      id: 2,
      lang: "TypeScript",
    },
    {
      id: 3,
      lang: "Python",
    },
  ];
  
  const Keys = () => {
    return (
      <div>
        <ul>{languages.map((language) => (
          <li key={language.lang}>{`${language.id}_${language.lang}`}</li>
        ))}
        </ul>
      </div>
    );
  }

  export default Keys;