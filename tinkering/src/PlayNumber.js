
//javascript closures are at work below
//each onClcik function closes over the scope of the owner function, and
// Color Theme
const colors = {
   available: 'lightgray',
   used: 'lightgreen',
   wrong: 'lightcoral',
   candidate: 'deepskyblue',
 };


function PlayNumber (props) {   
   return( 
      <button 
         className="number" 
         style = {{ backgroundColor: colors[props.status]}}
         onClick={() => props.onClick(props.number, props.status)}>
            {props.number}
      </button>
   );
};

export default PlayNumber