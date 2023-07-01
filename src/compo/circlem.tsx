import { Badge } from '@chakra-ui/react';

interface Props { 
  score: number;
}

const Circlem = ({ score }: Props) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
   
  <div>hehe</div>
  
    )
}

export default Circlem