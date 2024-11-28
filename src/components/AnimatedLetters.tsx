import React from 'react'

type AnimatedLettersProps = {
  letterClass? : string ;
  strArray : string[];
  idx : number
}

const AnimatedLetters: React.FC<AnimatedLettersProps> = ({ letterClass, strArray, idx }) => {
  return (
    <span className="inline-flex">
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} inline-block _${i + idx}`}
            style={{ animationDelay: `${i * 0.1}s` }} >
          <span className="hover:animate-rubber-band">{char}</span> 
        </span>
      ))}
    </span>
  );
};


export default AnimatedLetters