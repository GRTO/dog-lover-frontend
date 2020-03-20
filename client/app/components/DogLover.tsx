import * as React from 'react';

export interface DogLoverdProps {
  firstMember: string;
  secondMember: string;
}

export const DogLover: React.FC<DogLoverdProps> = ({ firstMember, secondMember }) => (
  <h1>{`Hi there from React! Welcome ${firstMember} and ${secondMember}!`}</h1>
);
