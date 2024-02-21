import { Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';

const LinkPage = ({value}) => {

  let linkElement;
    {
      if(value == "add"){
      linkElement = <Link to={`/car/${value}`}>Add Car</Link>;
      }
      else{
        linkElement = <Link to={`/car/${value}`}>Car {value}</Link>;
      }
    }

  return (linkElement);
}
const CarsPage = () => {
  const {test2} = useOutletContext();
    return (
      <div className="CarsPage" style={{display: 'grid'}}>
        <LinkPage value="add"/>
        <LinkPage value="1"/>
        <LinkPage value="2"/>
        <LinkPage value="3"/>
        <LinkPage value="4"/>
        <LinkPage value="5"/>
        context: {test2}
      </div>
    )
  }
  
  export default CarsPage