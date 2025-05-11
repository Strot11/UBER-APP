const LookingForDriver = (props) => {
  return(
<div><h5
        className="p-1 text-center absolute top-0 w-[93%] "
        onClick={() => props.setVehicleFound(false)}
      >
        <i className=" text-3xl text-gray-100 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Looking For a Driver</h3>
      <div className="flex justify-between items-center flex-col gap-2">
        <img
          className="h-30"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s"
          alt="UBER-CAR"
        />
        <div className="w-full mt-5">
          <div className="flex item-center gap-5 p-3 border-b-2 ">
            <i className="ri-map-pin-user-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                kanakriya Talab,Bhopal
              </p>
            </div>
          </div>
          <div className="flex item-center gap-5 p-3 border-b-2 ">
          
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                kanakriya Talab,Bhopal
              </p>
            </div>
          </div>
          <div className="flex item-center gap-5 p-3 2 ">
            
            <i className="ri-bank-card-2-line"></i>
            <div>
              <h3 className="text-lg font-medium">193.20</h3>
              <p className="text-sm text-gray-600 -mt-1">Cash Cash</p>
            </div>
          </div>
        </div>
  
      </div></div>
  )}
export default LookingForDriver;