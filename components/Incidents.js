import Incident from './Incident';

const Incidents = (props) => {
  const  {
    total, 
    incidents,
  } = props;
  

  return (
    <div>
      <div className="text-right">Total: {total}</div>
      {incidents.map(ele => <Incident key={ele.id} {...ele} />)}
    </div>
  );
}

export default Incidents;