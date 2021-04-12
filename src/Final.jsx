export default function Final(props){
 return(<>
     <h3>Players List from First Quarter are:</h3>
     <div>
     <ol>
     {props.AddPlayer.map((val)=>{  if(val.Name && val.Position){return (<li><b>{val.Position}</b>: {val.Name}</li>)}})}
     </ol>
     </div>
 </>)
}