import { Badge } from '@chakra-ui/react';

interface Props { 
  score: number;
}

const Circlem = ({ score }: Props) => {
  let color = score > 7.5 ? 'green' : score > 6.0 ? 'yellow' : '';

  return (
   
  
    <svg width="67" height="67" viewBox="-8.375 -8.375 83.75 83.75" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle r="23.5" cx="33.5" cy="33.5" fill="transparent" stroke="#d7e0ea" stroke-width="6" stroke-dasharray="147.58px" stroke-dashoffset="0"></circle>
    <circle r="23.5" cx="33.5" cy="33.5" stroke={color} stroke-width="6" stroke-linecap="round" stroke-dashoffset="31px" fill="transparent" stroke-dasharray="147.58px"></circle>
    <text x="23px" y="40px" fill="#6bdba7" font-size="18px" font-weight="bold">{score}</text>
  </svg>
    
  
    )
}

export default Circlem