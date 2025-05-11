import 'remixicon/fonts/remixicon.css'

const LocationSearchPanel = (props) => {
  // console.log(props);
  //sample array for location data
  const locations=[
  "24B, Near Kappor Cafe,Birla Society,Indore",
  "56Y, Near UNO Buisness Cafe,Bypass Road,Indore",
  "29D, Near Sharma's Cafe,GPO Chauraha,Indore",
  "76U, Near Rajwardhan Palace,MG-Road,Indore",
  ]
  return (
    <div>
      {/* //ths is just a sample data */}
      {locations.map(function(location,index){
        return <div key={index} onClick={()=>{props.setVehiclePanel(true);
          props.setPanelOpen(false);
        }
        } className="flex items-center border-2 border-gray-50 active:border-black p-3 rounded-xl justify-start my-2 gap-4">
        <h2 className='bg-[#eee] p-2 h-8 w-12 flex items-center rounded-full justify-center'><i className="ri-map-pin-line"></i></h2>
         <h4 className='font-medium'>{location}</h4>
        </div>
      })}
    </div>
  );
}
export default LocationSearchPanel;