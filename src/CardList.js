import React from 'react';
import Card from './Card';

const CardList =  ({ Robots }) => {
    return (
      <div>
        <Card
          id={Robots[0].id}
          name={Robots[0].name}
          job={Robots[0].job}
          email={Robots[0].email}
        />
        <Card
          id={Robots[1].id}
          name={Robots[1].name}
          job={Robots[1].job}
          email={Robots[1].email}
        />
        <Card
          id={Robots[2].id}
          name={Robots[2].name}
          job={Robots[2].job}
          email={Robots[2].email}
        />
      </div>
    );
}

export default CardList;