import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

const Reasoning = [
  {
    id: 1,
    name: 'Number Series',
    logo: <MaterialIcons name="format-list-numbered" size={24} color="blue" />,
    bgClass: 'bg-blue-100',
  },
  {
    id: 2,
    name: 'Analogy',
    logo: <MaterialIcons name="compare-arrows" size={24} color="purple" />,
    bgClass: 'bg-purple-100',
  },
  {
    id: 3,
    name: 'Letter And Symbol Series',
    logo: <MaterialIcons name="text-fields" size={24} color="green" />,
    bgClass: 'bg-green-100',
  },
  {
    id: 4,
    name: 'Coding And Decoding',
    logo: <FontAwesome name="code" size={24} color="black" />,
    bgClass: 'bg-blue-100',
  },
  {
    id: 5,
    name: 'Cause And Effect',
    logo: <MaterialCommunityIcons name="leaf" size={24} color="orange" />,
    bgClass: 'bg-orange-100',
  },
  {
    id: 6,
    name: 'Direction Sense',
    logo: <MaterialCommunityIcons name="directions-fork" size={24} color="red" />,
    bgClass: 'bg-red-100',
  },
  {
    id: 7,
    name: 'Blood Relation',
    logo: <MaterialCommunityIcons name="family-tree" size={24} color="pink" />,
    bgClass: 'bg-pink-100',
  },
  {
    id: 8,
    name: 'Puzzle',
    logo: <Ionicons name="extension-puzzle-outline" size={24} color="blue" />,
    bgClass: 'bg-blue-100',
  },
  {
    id: 9,
    name: 'Syllogism',
    logo: <MaterialCommunityIcons name="alphabetical" size={24} color="black" />,
    bgClass: 'bg-blue-100',
  },
];

export default Reasoning;
