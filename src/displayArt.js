/* eslint-disable no-console*/
import figlet from 'figlet';

const displayArt = () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(figlet.textSync('Flitwick', {
    font: 'doom',
    horizontalLayout: 'default',
    verticalLayout: 'default',
  }));
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
};

export default displayArt;
